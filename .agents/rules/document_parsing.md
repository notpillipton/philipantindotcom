---
trigger: always_on
---

---

name: "Document Schema and Transient Ingestion Isolation"
description: "Ensures that specialized parsing code remains strictly localized to prevent blending visual code with client interfaces."
activation: "Model Decision"

---

# Data Engineering Rule: Document Parsing Pipeline

1. **Isolation of Prompt and Parsing Assets:**
   - Keep all prompt optimization strings, parsing schemas, system prompts, and OCR processing layers entirely nested within the backend code boundary or `libs/db-schemas` .
   - Never expose or leak backend system instructions to client-facing application views .

2. **Transient Memory Management Enforcement:**
   - In accordance with the zero-persistence security requirements, you must verify that all ingestion endpoints process binary streams entirely in-flight via a streaming memory buffer .
   - Write explicit cleanup directives immediately following the completion of an LLM execution loop: ensure file streams are cleanly terminated, memory variable references are zero-filled, and garbage collection pathways are triggered .
