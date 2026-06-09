"use client";

// WebGL "liquid" image — the signature mont-fort.com effect.
// An image (or accent gradient) is warped by a procedurally generated noise
// field with an RGB channel-split that intensifies on hover. The displacement
// map is generated in-code (fBm value noise), so there is no external asset to
// download and nothing to license.

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

// ── Procedural fBm value-noise displacement texture (tileable-ish) ──────────
function makeNoiseTexture(size = 256): THREE.DataTexture {
  const data = new Uint8Array(size * size * 4);
  const rand = (i: number, j: number) => {
    const n = Math.sin(i * 157.31 + j * 113.17) * 43758.5453;
    return n - Math.floor(n);
  };
  const smooth = (t: number) => t * t * (3 - 2 * t);
  const noiseAt = (x: number, y: number, freq: number) => {
    const gx = x * freq;
    const gy = y * freq;
    const x0 = Math.floor(gx);
    const y0 = Math.floor(gy);
    const fx = smooth(gx - x0);
    const fy = smooth(gy - y0);
    const v00 = rand(x0, y0);
    const v10 = rand(x0 + 1, y0);
    const v01 = rand(x0, y0 + 1);
    const v11 = rand(x0 + 1, y0 + 1);
    const a = v00 + (v10 - v00) * fx;
    const b = v01 + (v11 - v01) * fx;
    return a + (b - a) * fy;
  };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const v = y / size;
      let amp = 0.5;
      let freq = 4;
      let sum = 0;
      let norm = 0;
      for (let o = 0; o < 5; o++) {
        sum += noiseAt(u, v, freq) * amp;
        norm += amp;
        amp *= 0.5;
        freq *= 2;
      }
      const val = Math.floor((sum / norm) * 255);
      const idx = (y * size + x) * 4;
      data[idx] = data[idx + 1] = data[idx + 2] = val;
      data[idx + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, size, size);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

// ── Accent gradient fallback when a project has no image yet ────────────────
function makeGradientTexture(accent: string): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, 512, 512);
  g.addColorStop(0, accent);
  g.addColorStop(0.55, "#0a0f23");
  g.addColorStop(1, "#05060f");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 512);
  const rg = ctx.createRadialGradient(150, 150, 0, 150, 150, 420);
  rg.addColorStop(0, accent + "66");
  rg.addColorStop(1, "transparent");
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, 512, 512);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform sampler2D uTexture;
  uniform sampler2D uDisp;
  uniform vec2 uRes;     // container size (px)
  uniform vec2 uImgRes;  // source image size (px)
  uniform float uHover;  // 0..1, eased
  uniform float uTime;
  varying vec2 vUv;

  // cover-fit the source texture inside the container
  vec2 coverUv(vec2 uv, vec2 res, vec2 img) {
    float rRes = res.x / res.y;
    float rImg = img.x / img.y;
    vec2 scale = (rRes > rImg) ? vec2(1.0, rImg / rRes) : vec2(rRes / rImg, 1.0);
    return (uv - 0.5) * scale + 0.5;
  }

  void main() {
    // organic, always-alive base ripple + stronger warp on hover
    float n = texture2D(uDisp, vUv * 1.1 + uTime * 0.015).r;
    float idle = (texture2D(uDisp, vUv * 1.6 - uTime * 0.02).r - 0.5) * 0.012;
    float amt = idle + uHover * 0.16 * (n - 0.2);

    vec2 uv = coverUv(vUv, uRes, uImgRes);
    // subtle zoom-in as the warp grows
    uv = (uv - 0.5) * (1.0 - uHover * 0.06) + 0.5;

    vec2 dir = vec2(amt);
    float r = texture2D(uTexture, uv + dir * 1.0).r;
    float g = texture2D(uTexture, uv + dir * 0.6).g;
    float b = texture2D(uTexture, uv + dir * 0.3).b;

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

function LiquidPlane({
  texture,
  disp,
  imgRes,
  hoverRef,
}: {
  texture: THREE.Texture;
  disp: THREE.Texture;
  imgRes: THREE.Vector2;
  hoverRef: React.RefObject<number>;
}) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { viewport, size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uDisp: { value: disp },
      uRes: { value: new THREE.Vector2(size.width, size.height) },
      uImgRes: { value: imgRes.clone() },
      uHover: { value: 0 },
      uTime: { value: 0 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // keep texture / image size in sync when a real image finishes loading
  useEffect(() => {
    if (!mat.current) return;
    mat.current.uniforms.uTexture.value = texture;
    mat.current.uniforms.uImgRes.value.copy(imgRes);
  }, [texture, imgRes]);

  useFrame((_, delta) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    u.uTime.value += delta;
    u.uHover.value += (hoverRef.current - u.uHover.value) * Math.min(1, delta * 6);
    u.uRes.value.set(size.width, size.height);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function LiquidImage({
  image,
  accent,
  hover,
  className,
}: {
  image?: string;
  accent: string;
  hover: boolean;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const hoverRef = useRef(0);
  useEffect(() => {
    hoverRef.current = hover && !reduced ? 1 : 0;
  }, [hover, reduced]);

  const disp = useMemo(() => makeNoiseTexture(256), []);
  const fallback = useMemo(() => makeGradientTexture(accent), [accent]);
  const fallbackRes = useMemo(() => new THREE.Vector2(512, 512), []);

  // Loaded image is keyed by its url so an undefined/changed `image` cleanly
  // falls back to the accent gradient without any synchronous setState.
  const [loaded, setLoaded] = useState<{
    url: string;
    tex: THREE.Texture;
    res: THREE.Vector2;
  } | null>(null);

  useEffect(() => {
    if (!image) return;
    let cancelled = false;
    new THREE.TextureLoader().load(image, (tex) => {
      if (cancelled) return;
      tex.colorSpace = THREE.SRGBColorSpace;
      setLoaded({ url: image, tex, res: new THREE.Vector2(tex.image.width, tex.image.height) });
    });
    return () => {
      cancelled = true;
    };
  }, [image]);

  const useReal = loaded !== null && loaded.url === image;
  const texture = useReal ? loaded.tex : fallback;
  const imgRes = useReal ? loaded.res : fallbackRes;

  // Reduced motion: static cover image / gradient, no WebGL.
  if (reduced) {
    return (
      <div
        className={className}
        style={
          image
            ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
            : { background: `linear-gradient(140deg, ${accent}, #0a0f23 60%)` }
        }
      />
    );
  }

  return (
    <div className={className}>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        className="!absolute inset-0"
      >
        <LiquidPlane texture={texture} disp={disp} imgRes={imgRes} hoverRef={hoverRef} />
      </Canvas>
    </div>
  );
}
