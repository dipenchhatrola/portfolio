"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Sphere, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { portfolio, categoryColor, skillCategories } from "@/lib/portfolio";
import type { Skill } from "@/lib/types";
import { useIsMobile } from "@/hooks/useMediaQuery";

interface Node extends Skill {
  position: THREE.Vector3;
  color: string;
  size: number;
}

// Distribute skills onto orbital shells grouped by category.
function useSkillNodes(): Node[] {
  return useMemo(() => {
    const nodes: Node[] = [];
    skillCategories.forEach((cat, ci) => {
      const inCat = portfolio.skills.filter((s) => s.category === cat);
      const radius = 2.4 + ci * 0.55;
      inCat.forEach((skill, i) => {
        const total = inCat.length;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / total);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i + ci;
        const position = new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi) * 0.7,
          radius * Math.sin(phi) * Math.sin(theta)
        );
        nodes.push({
          ...skill,
          position,
          color: categoryColor[skill.category],
          size: 0.1 + (skill.level / 100) * 0.16,
        });
      });
    });
    return nodes;
  }, []);
}

function SkillNode({ node }: { node: Node }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    const target = hovered ? 1.8 : 1;
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.15);
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh
        ref={ref}
        position={node.position}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <icosahedronGeometry args={[node.size, 1]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered ? 1.4 : 0.6}
          roughness={0.2}
          metalness={0.6}
        />
        {hovered && (
          <Html center distanceFactor={8} zIndexRange={[50, 0]}>
            <div className="glass-strong whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium text-white">
              {node.name}
              <span className="ml-2 text-cyan">{node.category}</span>
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  );
}

function GalaxyContents() {
  const nodes = useSkillNodes();
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={group}>
      {/* central glowing core */}
      <Sphere args={[1.1, 48, 48]}>
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1.4}
          roughness={0.1}
          metalness={0.3}
        />
      </Sphere>
      <Sphere args={[1.35, 32, 32]}>
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.06} />
      </Sphere>
      {nodes.map((n, i) => (
        <SkillNode key={`${n.name}-${i}`} node={n} />
      ))}
    </group>
  );
}

export function SkillGalaxy() {
  const isMobile = useIsMobile();
  return (
    <Canvas
      camera={{ position: [0, 1, 8.5], fov: 55 }}
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#a78bfa" distance={12} />
      <pointLight position={[8, 6, 8]} intensity={1} color="#22d3ee" />
      <Stars radius={40} depth={30} count={isMobile ? 800 : 1800} factor={3} fade speed={1} />
      <GalaxyContents />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
}
