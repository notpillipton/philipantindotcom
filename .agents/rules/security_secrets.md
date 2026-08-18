---
trigger: always_on
---

---

name: "Absolute Zero-Secret Hardlining"
description: "Enforces strict secret isolation across the entire Nx monorepo workspace to prevent credentials from ever leaking into source code files."
activation: "Always On"

---

# Security Rule: Environment Variable Isolation

1. **Strict Prohibition of Hardcoded Secrets:**
   - Under no circumstances shall you write API keys, connection strings, private client secrets, or OAuth credentials directly into any code file .
   - This applies explicitly to: OpenAI API keys, Gemini API keys, MongoDB URI strings, and SSO Client Secrets for Google, Apple, or Microsoft identity portals .

2. **Mandatory `.env` Routing:**
   - All environment variables, application tokens, and secure network strings must be abstracted out and read dynamically from un-tracked local `.env` files via `process.env` .
   - If a new configuration token is required, you must add it to a standard `.env.example` boilerplate file at the root of the project, while keeping the production value restricted to `.env`.

3. **Git Leak Prevention:**
   - Verify that the `.gitignore` file includes an active path filter blocking `.env`, `.env.local`, and any keys from being committed to the codebase .

# Security Rule: Third-Party Token Encryption Mandate
- **Context:** Node.js Backend API OAuth Callbacks
- **Constraint:** The agent SHALL NOT save raw third-party access_tokens or refresh_tokens directly to the database.
- **Implementation:** All downstream provider tokens must be passed through a symmetrical encryption utility (e.g., Node's native `crypto` module using AES-256-GCM) prior to MongoDB insertion. The encryption keys must reside strictly within protected server environment variables (`process.env.TOKEN_ENCRYPTION_KEY`).