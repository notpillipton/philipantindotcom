---
trigger: always_on
---

---

name: "Nx Module Boundary Matrix Enforcement"
description: "Enforces structural dependency limits across applications and libraries to prevent bundle bloat and ensure frontend-backend separation."
activation:
glob: "\*_/_.ts"

---

# Architectural Rule: Nx Boundary Enforcement Matrix

To ensure that SemesTrack can be cleanly split into public client and private backend repositories in the future, you must strictly follow the Nx project tagging configuration .

## 1. Allowed Dependency Flow Matrix

You must align every code import statement with the following strict dependency boundary criteria :

- **apps/mobile (`platform:native`)**
  - Allowed Dependencies: `type:ui`, `type:core`, `type:api-client`
  - Constraint: Strictly **NO** direct server or database dependencies (`apps/backend` or `libs/db-schemas`) .

- **apps/web (`platform:web`)**
  - Allowed Dependencies: `type:ui`, `type:core`, `type:api-client`
  - Constraint: Strictly **NO** direct server dependencies .

- **apps/backend (`platform:server`)**
  - Allowed Dependencies: `type:api-client`, `type:db-schemas`, `type:core`
  - Constraint: Strictly **NO** user interface elements, components, or styles (`libs/ui`) .

- **libs/ui (`type:ui`)**
  - Allowed Dependencies: `type:core`
  - Constraint: Strictly **NO** direct backend engine processing or network hooks .

- **libs/core (`type:core`)**
  - Allowed Dependencies: None
  - Constraint: Pure domain validation, state slices, and shared context .

## 2. Validation Mechanism

- Before marking any code generation task complete, you must locally execute `nx lint` and review the output to verify that `@nx/enforce-module-boundaries` rules inside `eslint.config.js` pass with zero violations .
