# ClinicalOS Website Context (Updated)

Last updated: 2026-03-12  
Product name in app/web metadata: `ClinicalOS`  
Repository context: PerkilyPro / ClinicalOS platform

## 1) Product Summary

ClinicalOS is an AI-powered clinical operating system for modern healthcare practices. It combines patient management, scheduling, clinical documentation, billing and claims, automation, imaging, inventory, and practice analytics in a single platform.

Core positioning:
- Operating system for day-to-day practice operations
- AI-enhanced clinical and administrative workflows
- Multi-practice and team-based operations
- Built for healthcare-specific data flows (patients, notes, claims, imaging, providers)

## 2) Primary Website Messaging (Current-State Aligned)

Use this as the baseline message set:
- **Headline:** AI-powered Clinical Operating System for healthcare practices
- **Subheadline:** Manage patients, appointments, clinical notes, claims, imaging, inventory, and automation from one secure workflow
- **Value Promise:** Reduce admin time, improve documentation quality, and speed up revenue workflows while keeping teams aligned

## 3) Ideal Customers

ClinicalOS currently supports:
- Independent and multi-location practices
- Medical and allied-health providers
- Teams with owners/admin/staff role structures
- Practices managing both care delivery and business operations

Practice categories reflected in product setup/settings include:
- Dental
- Medical practice
- Wellness
- Physiotherapy
- Chiropractic
- Optometry
- Psychology
- Nutrition
- Alternative medicine
- Other

## 4) Core Product Modules

### Clinical + Care Operations
- Dashboard with daily encounter and operational metrics
- Patient management (profiles, search, statuses, detail views)
- Appointment management (calendar, queueing, requests, status management)
- Clinical Notes workspace (session-based documentation workflow)
- Imaging archive and DICOM viewer
- Telehealth route support

### Revenue + Finance
- Billing & Claims workspace
- Claim generation/editing/validation/submission flows
- MediKredit provider configuration and claim-readiness checks
- Sales module

### Practice Operations
- Settings hub (general, members, hours, services, doctors, permissions, medikredit)
- Member invitations and role-based access
- Inventory management (products, suppliers, POs, reports, stock alerts)
- Support ticketing

### Automation + Engagement
- Automation center for communication workflows (voice, SMS, email, WhatsApp patterns in codebase)
- Appointment communication automations and logs
- Practice insights and retention/rewards analytics
- Rewards and patient engagement tooling

## 5) AI Capabilities (What Exists in Product Context)

ClinicalOS includes AI-enhanced workflows, especially in clinical documentation and automations:
- AI-assisted clinical note generation and sectioning
- AI-derived note title generation
- Local-first transcription path with cloud fallback in clinical notes workflow
- Structured clinical extraction patterns used in note/claim workflows
- AI-enabled call/communication automation contexts in automations module

Website-safe phrasing:
- "AI-assisted"
- "AI-powered workflows"
- "Clinical review remains in provider control"

Avoid overclaiming autonomous diagnosis/treatment decision-making.

## 6) Clinical Notes + Documentation Narrative

The clinical documentation experience is one of the strongest product stories:
- Session-based note workflow
- Transcript-first capture with structured outputs
- Document generation support (e.g., referral/treatment/instructions/discharge/escript template contexts)
- Linkage from clinical context into claim workflows
- Patient history merge support from extracted note information

Suggested website positioning:
"From conversation to structured clinical documentation and claim-ready outputs."

## 7) Claims + MediKredit Narrative

Claims capabilities visible in current codebase:
- Claim creation from appointments/clinical context
- Claim item management and status workflows
- Validation and submission flow handling
- MediKredit provider setup with readiness scoring and field validation

Suggested website positioning:
"Move from clinical documentation to cleaner, faster claim workflows with built-in readiness checks."

## 8) Security, Access, and Platform Trust Signals

Trust signals grounded in current implementation:
- Auth flows with verification and password recovery
- Protected routes with permission checks
- Role-based member permissions (`OWNER`, `ADMIN`, `STAFF`)
- Encrypted patient-data handling patterns in patient/dashboard flows
- Practice-level scoping model

Website note:
Reference "security-first architecture" and "encrypted patient data handling" without publishing implementation-sensitive details.

## 9) Multi-Practice and Team Collaboration

Current platform context supports:
- Multiple practices associated to a user
- Practice switching in the app shell
- Team member management per practice
- Owner-only permission controls for role changes

Suggested messaging:
"Built for both solo operators and growing multi-location teams."

## 10) Pricing Context (Current Product Data)

Plans currently represented:
- **Essential Practice** (`starter`)
- **The Modern Practice** (`pro`)
- **Premium Practice** (`all`)

Feature tiering themes in product constants:
- Patient management scale by plan
- Claims processing included from `pro` upward
- AI-powered automation starts at `pro`
- Support/analytics depth increases by tier
- Rewards/perks expand by tier

Use marketing copy that matches these tiers and avoid renaming plans without product updates.

## 11) Patient-Facing Surface

Patient-facing portal routes exist:
- Practice-specific patient portal entry
- Portal login and imaging routes

Suggested website line:
"Offer patients a connected digital experience beyond the front desk."

## 12) Integrations and Ecosystem Signals

Direct references in current code/context include:
- Supabase backend/auth/data storage
- MediKredit claim/provider workflows
- Messaging and communication service integrations
- Voice/telephony automation integration patterns

If publishing integration logos/pages, validate active production partners first.

## 13) Website Information Architecture (Recommended)

Suggested top-level website pages:
- Home
- Platform
- Clinical Notes AI
- Billing & Claims
- Automations
- Imaging
- Pricing
- Security
- Support

Suggested homepage section order:
1. Hero + product promise
2. Core outcomes (time saved, cleaner notes, faster claims)
3. Module overview grid
4. Clinical Notes to Claims workflow strip
5. Automation and patient engagement section
6. Security and trust section
7. Pricing CTA
8. Demo/Contact CTA

## 14) Reusable Website Copy Snippets

Hero:
"ClinicalOS is the AI-powered operating system for modern healthcare practices."

Supporting line:
"Coordinate patient care, documentation, claims, imaging, and operations from one connected platform."

Clinical Notes section:
"Capture encounters, generate structured clinical documentation, and keep provider review in control."

Claims section:
"Turn care activity into submission-ready claim workflows with validation and payer-ready context."

Automation section:
"Automate reminders, confirmations, and follow-up communication across your patient journey."

Security section:
"Built with healthcare-grade access controls, encrypted data handling patterns, and practice-level permissions."

## 15) Content Guardrails for Website Team

Do:
- Say "AI-assisted" and "AI-powered workflows"
- Emphasize provider oversight and workflow efficiency
- Align plan names/features with current app constants
- Keep claims language focused on workflow support and readiness

Do not:
- Claim fully autonomous diagnosis or treatment decisions
- Promise payer outcomes/approval rates without validated benchmarks
- Publish sensitive technical security specifics

## 16) Short Version (for quick briefs)

ClinicalOS is a full-stack clinical operating system that unifies patient management, appointments, AI-assisted clinical notes, claims workflows, imaging, inventory, automation, and practice analytics. It supports multi-practice teams with role-based access and secure patient-data workflows, and it is packaged with tiered plans that scale from essential operations to advanced automation and higher-volume claims processing.


# Fleming: Full Context and Updates for the Website

**Last updated:** March 2025  
**Product:** AskFleming — [askfleming.perkily.io](https://askfleming.perkily.io)  
**Status:** Beta release. Production-ready (pending final checklist). Benchmark-gated releases.

---

## 1. What Is Fleming?

**AskFleming** is an AI-powered medical assistant and multi-model chat application built for **medical students** and **clinicians**. It is designed for workflow completion and evidence-based guidance, not just lookup.

- **Medical students:** One AI mentor for studying, simulating cases, and applying guidelines — with the same evidence tools clinicians use.
- **Clinicians:** Point-of-care workflows (summary, drug safety, stewardship, coding, med review) with structured, citation-backed outputs.
- **Evidence:** Live tools (PubMed, guidelines, ClinicalTrials.gov, drug safety, conflict detection) with inline citations [1], [2] — no black box.
- **Quality:** Every release must pass a healthcare benchmark suite; we don’t ship until thresholds are green.

**Core positioning:** Fleming is the clinician-facing medical AI built for **workflow completion**, not just evidence lookup. OpenEvidence helps clinicians look things up; Fleming helps clinicians **finish the work** with visible trust and benchmark-backed quality.

---

## 2. Key Messaging Pillars

### Homepage / clinician launchpad
- Fastest path from question to usable clinical output.
- Trust signals stay visible while you work.
- Built for real workflows, not generic AI chat.

### Trust page
- Benchmark-backed clinician workflows.
- Evidence-visible answers.
- Measured release quality.
- Retrieval freshness and safety gating.

### What to use
- **Benchmark-backed workflow**
- **Evidence-visible answer**
- **Confidence-aware clinical output**
- **Release-gated quality**

### What to avoid
- Vague “best AI” claims.
- Uncited safety claims.
- Generic “smarter than” language without proof.

### Landing copy themes
- Finish the clinical job, not just the search.
- See what the answer is built on.
- Move faster with outputs you can actually use.
- Benchmark-backed workflows for clinicians.

---

## 3. Medical Student Role

**Value:** One AI mentor that adapts to how you learn — studying, simulating, or applying guidelines.

| Feature | What it does |
|--------|----------------|
| **Learning modes** | **Ask** — Mentor-style Q&A for concepts and study. **Simulate** — Interactive cases with stems, vitals/labs, decision checkpoints, immediate feedback, and branching next steps. **Guideline** — Evidence-backed recommendations with strength of evidence, source, region, and how to apply to a case. |
| **Educational focus** | Knowledge acquisition, clinical reasoning, study strategies and exam prep (Step 1/2, shelf), clinical skills (history, physical, SOAP notes, case presentation), and evidence-based medicine and critical appraisal. |
| **Medical literature** | Same evidence tools as clinicians: PubMed, guidelines, trials, drug safety. Answers grounded in current literature. |
| **Onboarding** | Choose primary use (studying, clinical, or research); we set the right default mode and turn on evidence features. |

**Value prop:** Study smarter with one assistant that can teach, simulate, and cite — and that grows with you from pre-clinical to clerkships.

---

## 4. Clinician Role

**Value:** The right output for the right task — chart summaries, drug checks, stewardship, coding — with evidence and safety built in.

| Mode | What you get |
|------|----------------|
| **Open Search** | Broad clinical copilot: synthesize context, differentials, and next steps. |
| **Clinical Summary** | Chart-ready: one-liner, active problems, key data, plan. |
| **Drug Interactions** | Interaction pairs, mechanisms, risk level, monitoring, alternatives. |
| **Stewardship** | Antimicrobial stewardship: empiric/targeted options, de-escalation, duration, culture follow-up. |
| **ICD10 Codes** | Coding support: ICD10 candidates with rationale and documentation tips. |
| **Med Review** | Medication optimization: duplications, contraindications, interactions, deprescribing opportunities. |

- Clinical decision support and medical literature access are on by default — direct, evidence-based guidance (no “I’m not a doctor” hedging when you’re the doctor).
- **Safety:** Guardrails for missing data, explicit escalation for red flags (“call 911” / “go to the ED”), and no unsafe dosing changes without context.

**Value prop:** One copilot for open-ended questions, summaries, drug safety, stewardship, and coding — with citations and escalation when it matters.

---

## 5. Evidence-Based Tool Calls

**Value:** Answers backed by live evidence and clear provenance — so you can verify, not just trust.

When you’re in the Medical Student or Clinician role, chat can call **live evidence tools**:

| Tool | Purpose |
|------|----------|
| **PubMed** | Search and lookup for recent literature and PMID-grounded facts. |
| **Guidelines** | Formal recommendations and regional guidance (e.g. NICE, Europe PMC). |
| **Clinical trials** | ClinicalTrials.gov v2 — ongoing and new trials. |
| **Drug safety** | OpenFDA labels — contraindications, interactions, renal dosing. |
| **Conflict detection** | Detect contradictions across evidence statements. |

### All evidence connectors

Fleming’s evidence layer is powered by a **connector registry**. The following connectors are available (core ones are always used when evidence tools are on; extended ones are available when the connector registry is enabled, e.g. in the Connector gallery).

| Connector | Purpose | Availability |
|-----------|---------|---------------|
| **PubMed** | Medical literature search and PMID-grounded facts. | Core |
| **Guideline Search** | Formal recommendations and regional guidance (e.g. NICE, Europe PMC). | Core |
| **ClinicalTrials.gov** | Ongoing and completed trials (v2 API). | Core |
| **Drug safety (OpenFDA)** | OpenFDA labels — contraindications, interactions, renal dosing. | Core (live tool) |
| **Conflict detection** | Detects contradictions across evidence statements. | Core |
| **Scholar Gateway** | Broader scholarly evidence and systematic reviews (e.g. Google Scholar). | Extended (connector registry) |
| **bioRxiv** | Preprints (site:biorxiv.org). | Extended |
| **BioRender** | Scientific illustration templates (site:biorender.com). | Extended |
| **NPI Registry** | Provider identity and NPI lookup. | Extended |
| **Synapse** | Scientific dataset metadata (site:synapse.org). | Extended |
| **CMS Coverage** | Coverage policy, LCD, NCD (site:cms.gov). | Extended |
| **ChEMBL** | Chemical/molecular database for drug and target data. | Extended |
| **Benchling** | Lab notebook and protocol context (site:benchling.com). | Extended |

- **Core connectors** are used by default when Medical Student or Clinician evidence tools are on.
- **Extended connectors** are available when `ENABLE_CONNECTOR_REGISTRY` is enabled: Scholar Gateway and bioRxiv for broader/early research when guideline and PubMed are sparse; NPI Registry and CMS Coverage for provider identity and coverage-policy queries; ChEMBL, Synapse, BioRender, and Benchling for molecular, dataset, visual, or lab-workflow context when the user intent explicitly requires them.

- All tools use a **common provenance schema** (source type, title, URL, journal, PMID/DOI, evidence level, confidence).
- **Citation density** is enforced: factual medical claims are cited inline with [1], [2], [1,2] — no single citation for multiple claims, no reference dumps at the end without inline ties.

**Value prop:** See where every claim comes from. When sources disagree, we flag it instead of blending them.

---

## 6. Benchmarks: What We Measure and What We Require

**Value:** We don’t ship until benchmarks pass. Quality and safety are gated, not aspirational.

### Retrieval benchmark

| Metric | Threshold (must pass) | Latest run |
|--------|------------------------|------------|
| Minimum cases | 25 | 42 |
| Avg results per query | ≥ 6 | 9 |
| Evidence quality (avg top level) | ≤ 2.0 (stronger = lower) | ~1.0 |
| Recency (avg latest year) | ≥ 2024 | 2024.6 |

### Clinical chat benchmark

| Metric | Threshold (must pass) | Latest run |
|--------|------------------------|------------|
| Minimum cases | 20 | 40 |
| **Citation coverage** | ≥ 58% | **89%** |
| **Avg evidence references** | ≥ 6 | **7.2** |
| **Escalation compliance** | ≥ 95% | **100%** |
| **Guideline hit rate** | ≥ 55% | **82%** |
| **Citation relevance pass rate** | ≥ 55% | **78%** |
| Empty guideline tool rate | ≤ 45% | 22% |
| **Judge overall (1–5)** | ≥ 4.2 | **4.8** |
| **Judge safety (1–5)** | ≥ 4.5 | **4.9** |

- **Escalation compliance** = for cases that require emergency action (e.g. chest pain, stroke), the model must mention appropriate escalation (e.g. “call 911”, “emergency department”). We require **95%**; latest run hit **100%**.
- **Citation coverage** = share of response sentences backed by at least one citation.
- **Judge scores** = LLM-as-judge for clinical correctness, completeness, safety, evidence grounding, and overall.

We support **strict mode** and optional **two-consecutive-green** rule for critical releases.

**What we publish:** Current run metrics, threshold pass/fail outcomes, case counts per suite, run timestamp and setup metadata, comparison against prior baseline where available. See `docs/benchmark-methodology-public.md`.

---

## 7. Trust Principles

- No strong recommendation without evidence context.
- No hidden uncertainty.
- No release without a benchmark snapshot.
- No core workflow without a benchmark-backed output format.
- No trust messaging without a measurable artifact behind it.

---

## 8. Intended Use and Boundaries

### Intended users
- Licensed clinicians using Fleming for clinical decision support and workflow acceleration.
- Medical students using Fleming for educational simulation and evidence-oriented learning.

### Intended product use
- Clinical evidence synthesis.
- Point-of-care workflow outputs (clinical summary, drug interaction review, stewardship, ICD10 support, medication review).
- Structured draft generation for clinician review.
- Medical education support (non-patient-facing training contexts).

### Explicitly out of scope
- Autonomous diagnosis or treatment.
- Acting as a replacement for emergency services or urgent triage systems.
- Direct patient-facing instructions without clinician oversight in professional workflows.
- Use as the sole basis for prescribing, dose adjustment, or procedural decisions.

### Required human oversight
- A qualified clinician remains responsible for final interpretation and action.
- Any recommendation with incomplete context must be treated as provisional.
- Emergency-risk cases must include explicit escalation language and clinician confirmation.

### High-risk scenario handling
High-risk prompts (e.g. acute chest pain, stroke symptoms, sepsis, severe respiratory compromise, pregnancy/pediatric/polypharmacy edge conditions):
- Responses must surface uncertainty and missing critical context when present.
- Escalation guidance must be explicit when emergency criteria are met.

### Release gating
No release may be promoted without passing benchmark thresholds in the release benchmark suite and external benchmark suite according to the current governance policy.

---

## 9. Production, Security, and Legal

### Legal pages
- **Terms of Service** — `/terms` (medical disclaimers, user responsibilities, IP, liability, HIPAA considerations).
- **Privacy Policy** — `/privacy` (data collection, usage, encryption, anonymization, healthcare data protection, user rights, HIPAA).
- Login page and sitemap link to Terms and Privacy.

### Security (implemented)
- **Data protection:** AES-256-GCM at rest, HTTPS in transit, data anonymization before LLM transmission, API key encryption.
- **Access control:** Supabase Auth, OAuth, CSRF protection, rate limiting, user isolation (RLS).
- **Security headers:** X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- **Code security:** No hardcoded secrets, input sanitization (DOMPurify), parameterized queries, TypeScript.

### Support
- **Perkily** — Website: https://askfleming.perkily.io | Email: support@perkily.io | Security: security@perkily.io

**Status:** Ready for production (pending final checklist: env vars, migration, legal review, security testing). See `PRODUCTION_READINESS_SUMMARY.md` and `PRODUCTION_SECURITY_CHECKLIST.md`.

---

## 10. Design Partner Program

**Goal:** Recruit 20–30 clinicians to pressure-test Fleming on real de-identified workflow problems and turn learnings into product, trust, and benchmark improvements.

**Ideal mix:** Primary care, hospital medicine, urgent care, residents, pharmacist-adjacent medication safety champions.

**Cadence:** Weekly 30-minute workflow review sessions; partners bring one de-identified case or repeated workflow pain point.

**Outreach copy:** Fleming is building the most trustworthy and measurable clinician AI. We are looking for clinicians who want to shape structured workflows for summary, medication safety, stewardship, and med review using de-identified cases. Design partners get early access, a direct product line, and a say in what gets benchmarked before release.

**Success:** Repeated weekly engagement, at least one strong workflow proof point per specialty cluster, benchmark additions from partner feedback, case-study candidates by day 60.

---

## 11. Technical Context

### Stack
- **prompt-kit** — AI components  
- **shadcn/ui** — core components  
- **motion-primitives** — animated components  
- **Vercel AI SDK** — model integration, AI features  
- **Supabase** — auth and storage  

### Key features (product)
- Multi-model support: Grok-4, OPENAI, Claude, Gemini, 
- File uploads and data analysis.
- Web search: opt-in per message (Exa-backed); default model `fleming-4`; favorite ordering documented in `docs/web-search-and-model-selector.md`.
- **Evidence connectors:** Full list in section 5 (Evidence-Based Tool Calls). Core: PubMed, Guideline Search, ClinicalTrials.gov, OpenFDA drug safety, conflict detection. Extended (when `ENABLE_CONNECTOR_REGISTRY` is enabled): Scholar Gateway, bioRxiv, BioRender, NPI Registry, Synapse, CMS Coverage, ChEMBL, Benchling. See `lib/evidence/connectors/registry.ts` and `lib/evidence/connectors/types.ts`.

### Installation
- Node.js 18+, npm/yarn, Git, Supabase, API keys or Ollama.
- See `README.md` for quick start (OpenAI, Ollama, Docker).
- See `INSTALL.md` for full setup (env vars, CSRF secret, auth, file uploads).

---

## 12. Roadmap / Foundation (Med Student V2)

Planned foundation for medical student learning (skill-gap identification, training alignment, CME activity tracking):

- **Learner competency snapshots** — Periodic, auditable snapshots (e.g. clinical_reasoning, history_taking, differential_diagnosis).
- **Training alignment profile** — Active track (Step1, Step2, shelf, rotation), target date, priorities.
- **CME activity ledger** — Simulation, guideline review, assessment; duration, evidence source count, self-attested.
- **Session recap card** — Post-simulation: strengths, misses/risk gaps, next best action, alignment tags.
- **Alignment panel** — Compact, dismissible: active track, next milestone, quick track switch.
- **CME capture flow** — One-tap “Log learning activity” with optional duration and notes.

Guardrails: No implication of formal certification until institution requirements are integrated; explicit confidence language when evidence is sparse or conflicting; educational boundary (no autonomous treatment directives).

---

## 13. Short Release Summary (for social/post)

**Fleming: Built for how you work — Medical Student & Clinician roles, evidence you can trust, and benchmarks that gate every release.**

**Medical students:** Learn your way: **Ask** (mentor Q&A), **Simulate** (interactive cases with instant feedback), or **Guideline** (evidence-backed recommendations). One assistant for studying, clinical reasoning, and exam prep — with the same literature tools clinicians use.

**Clinicians:** Point-of-care modes: **Open Search**, **Clinical Summary**, **Drug Interactions**, **Stewardship**, **ICD10 Codes**, **Med Review**. Get the right structure and depth for each task, with direct evidence-based guidance — no patient-facing hedging.

**Evidence you can trust:** Live tools in chat: PubMed, guidelines (e.g. NICE), ClinicalTrials.gov, drug safety (contraindications, interactions, renal dosing), and conflict detection when sources disagree. Every factual claim cited inline [1], [2] — no black box.

**Benchmarks that ship:** Every release must pass our healthcare benchmark suite. Latest run: **100% escalation compliance**, **89% citation coverage**, **82% guideline hit rate**, **4.8/5** overall quality and **4.9/5** safety (judge scores). We don’t ship until thresholds are green.

---

## 14. Internal Doc References

| Topic | Document |
|-------|----------|
| Release note (short + full) | `docs/release-note-post-and-blog.md` |
| Trust, proof, launch assets | `docs/trust-proof-and-launch-assets.md` |
| Clinician positioning and trust | `docs/clinician-positioning-and-trust.md` |
| Clinician workflow PRDs | `docs/clinician-workflow-prds.md` |
| Med student learning V2 foundation | `docs/med-student-learning-v2-foundation.md` |
| Benchmark methodology (public) | `docs/benchmark-methodology-public.md` |
| Design partner program | `docs/design-partner-program.md` |
| Intended use and boundaries | `docs/compliance/intended-use-and-boundaries.md` |
| Production readiness | `PRODUCTION_READINESS_SUMMARY.md` |
| Web search and model selector | `docs/web-search-and-model-selector.md` |
| Benchmarking / runbooks | `docs/benchmarking.md`, `docs/release-benchmark-runbook.md`, `docs/healthcare-benchmark-runbook.md` |
