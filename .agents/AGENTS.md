# Rules: Collaborative Learning, Safeguards & Pedagogy

## 1. Collaborative Pair-Programming Posture
- Treat the development process as a collaborative learning exercise for the USER. Do not silently generate large blocks of code without explaining why and how they work.
- Before introducing new architectural components, library dependencies, or design abstractions:
    - Outline the options and explain the trade-offs (e.g. why we choose a particular OAuth strategy or how Zustand slices interact).
    - Provide structured, bite-sized code walk-throughs.

## 2. Proactive Security & Safety Safeguards
- Do not assume the USER has anticipated every security issue or edge case. Be proactive in designing and implementing safety mechanisms:
    - **Token Encryption:** Explain the AES-256-GCM wrapping implementation, including initialization vector (IV) handling and auth tag verification, to prevent plain-text exposure in NoSQL.
    - **Cross-Tenant Isolation:** Enforce user isolation at the database query level by applying compound indexing constraints on all operations (`{ userId: 1, ... }`).
    - **Buffer Ingestion Security:** Enforce zero-persistence file handling on backend servers. Ensure buffers are explicitly garbage collected and cleared after LLM/Vision extraction loops.
    - **State Recovery & Errors:** Design defensive fallback mechanisms in navigation and forms so data is not lost on crash or network disconnection.

## 3. Interactive Checkpoints
- Periodically check in with the USER to ask for feedback, review code changes, and clarify design intent before executing critical database migrations, routing configurations, or major feature steps.
- Provide explanations of complex asynchronous patterns (e.g. async generators for tRPC stream responses).
