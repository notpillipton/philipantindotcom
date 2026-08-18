---
trigger: always_on
---

# Rule: Cryptographic Token Isolation and Isolation Protocols
- **Activation Trigger:** Model Decision / File Change
- **Target Files:** `apps/backend/src/models/User.ts`, `**/auth/callback/*`, `libs/db-schemas/**/*`
- **Intent:** Isolate downstream Authorization (AuthZ) calendar credentials from plaintext leakage inside NoSQL storage loops.

## Implementation Guardrails

### 1. Symmetrical Encrypted Write Operations
- The agent SHALL NOT write plain-text access tokens or refresh tokens provided by identity providers to the database under any circumstances.
- **Encryption Mandate:** Tokens must be wrapper-encrypted using native Node.js `crypto` protocols leveraging the `aes-256-gcm` algorithm.
- **Key Extraction Source:** The cryptographic master key must reside strictly inside isolated environment variables (`process.env.TOKEN_ENCRYPTION_SECRET`).

### 2. Isolation from Client Footprints
- When serializing user documents or building data controllers to serve frontend requests, the `providerCredentials` object tree MUST be explicitly excluded from public payloads.
- **Mongoose / Driver Rule:** Enforce select block out strategies: `.select('-providerCredentials')` by default to preserve absolute client boundary containment.