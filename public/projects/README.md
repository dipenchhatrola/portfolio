# Project cover images

Drop a cover image here for each project, then reference it from
`src/data/portfolio.json` with an `"image"` field, e.g.

```json
{
  "name": "Enterprise ERP System",
  "accent": "#7c3aed",
  "image": "/projects/erp.jpg"
}
```

Guidelines:
- Landscape, ~4:3, at least 1600px wide. `.jpg`/`.webp` preferred.
- If a project has no `image`, the card falls back to an animated accent gradient.

The image is rendered through the WebGL liquid-displacement shader
(`src/components/three/LiquidImage.tsx`) — the mont-fort.com–style effect that
warps the image with an RGB split on hover.
