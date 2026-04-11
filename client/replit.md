# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **TypeScript version**: 5.9
- **Build**: Vite (Vite v6)

## Key Commands

- `npm run dev` — run portfolio locally
- `npm run build` — build for production

## Artifacts

### Portfolio (`artifacts/portfolio`)
- **Type**: React + Vite (react-vite)
- **Preview path**: `/`
- **Description**: Bijay Kumar Sahoo's personal portfolio website
- **Features**:
  - Full 3D cosmic experience with Three.js + React Three Fiber
  - Framer Motion scroll animations throughout
  - Cosmic navy blue / gradient blue color theme
  - Profile photo in hero section with floating 3D geometry
  - Starfield background with WebGL fallback
  - Sections: Hero, About, Skills, Projects, Achievements, Contact
  - Responsive design with glass morphism cards
  - Orbitron + Space Grotesk typography
- **Key dependencies**: three, @react-three/fiber, @react-three/drei, framer-motion
