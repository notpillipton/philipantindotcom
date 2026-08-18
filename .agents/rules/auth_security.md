---
trigger: always_on
---

# Rule: Self-Hosted Authentication Security Defenses
- **Activation Trigger:** Always On
- **Target Files:** `apps/backend/src/auth/**/*`, `passport.config.ts`, `**/routes/auth/*`
- **Intent:** Prevent common self-hosted identity exploit vectors during agentic modification loops.

## Defensive Guardrails

### 1. Mandatory Identity Assurance
- The agent SHALL NOT link or create user records without first confirming identity token validation flags.
- **Invariant Condition:** The incoming profile payload's `email_verified` (or provider equivalent) parameter MUST be checked and resolve to exactly `true` before executing any database storage logic. If false, halt the cycle and throw an unauthenticated exception.

### 2. Cryptographic Protocol Enforcement
- All Passport strategies generated (Google, Microsoft, Apple) MUST explicitly declare state parameters and Proof Key for Code Exchange (PKCE) verification protocols.
- **Code Constraints:**
  ```typescript
  state: true,
  pkce: true