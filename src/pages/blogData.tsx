import React from 'react';

export type BlogPost = {
  slug: string;
  tag: 'Product' | 'Design' | 'Platform' | string;
  title: string;
  excerpt: string;
  date: string; // ISO or human string
  displayDate: string; // Friendly display
  readingTime: string;
  coverImage: string;
  content: React.ReactNode;
};

const Table = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`my-8 overflow-hidden rounded-xl border border-white/10 ${className}`}>
    <table className="w-full border-collapse text-left text-sm">{children}</table>
  </div>
);
const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="border-b border-white/10 bg-white/[0.04] px-5 py-3.5 font-medium text-white/90">{children}</th>
);
const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="border-b border-white/5 px-5 py-3.5 text-white/75">{children}</td>
);

export const blogPosts: BlogPost[] = [
  {
    slug: 'fleming-release-march-2025',
    tag: 'Product',
    title: 'Fleming release: Medical Student & Clinician roles, evidence tools, and benchmark-gated releases',
    excerpt:
      'Dedicated roles for medical students and clinicians, live evidence tools, and a benchmark suite that gates every release — so we ship quality and safety, not just features.',
    date: '2026-01-15',
    displayDate: 'Jan 2026',
    readingTime: '10 min',
    coverImage: '/img/images/logo-white.png',
    content: (
      <>
        <p className="text-lg text-white/80 leading-relaxed">
          Fleming is built for <strong className="text-white/95">medical students</strong> and{' '}
          <strong className="text-white/95">clinicians</strong> who need answers grounded in evidence and workflows that match how they think and work. This release adds dedicated roles, workflow modes, live evidence tools, and a{' '}
          <strong className="text-white/95">benchmark suite that gates every release</strong> — so we ship quality and safety, not just features.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Medical Student Role</h2>
        <p className="text-white/75 leading-relaxed">
          <strong className="text-white/90">One AI mentor that adapts to how you learn</strong> — studying, simulating, or applying guidelines. We've added a dedicated Medical Student experience so Fleming can act as a consistent mentor and coach, with the same evidence infrastructure clinicians use.
        </p>
        <Table>
          <thead>
            <tr>
              <Th>Feature</Th>
              <Th>What it does</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td><strong className="text-white/90">Learning modes</strong></Td>
              <Td><strong>Ask</strong> — Mentor-style Q&A for concepts and study. <strong>Simulate</strong> — Interactive cases with stems, vitals/labs, decision checkpoints, immediate feedback, and branching next steps. <strong>Guideline</strong> — Evidence-backed recommendations with strength of evidence, source, region, and how to apply to a case.</Td>
            </tr>
            <tr>
              <Td><strong className="text-white/90">Educational focus</strong></Td>
              <Td>Knowledge acquisition, clinical reasoning, study strategies and exam prep (Step 1/2, shelf), clinical skills (history, physical, SOAP notes, case presentation), and evidence-based medicine and critical appraisal.</Td>
            </tr>
            <tr>
              <Td><strong className="text-white/90">Medical literature</strong></Td>
              <Td>Same evidence tools as clinicians: PubMed, guidelines, trials, drug safety. Answers grounded in current literature, not generic training data.</Td>
            </tr>
            <tr>
              <Td><strong className="text-white/90">Onboarding</strong></Td>
              <Td>Choose primary use (studying, clinical, or research); we set the right default mode and turn on evidence features.</Td>
            </tr>
          </tbody>
        </Table>
        <p className="mt-2 text-white/70 text-sm italic">
          Study smarter with one assistant that can teach, simulate, and cite — and that grows with you from pre-clinical to clerkships.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Clinician Role</h2>
        <p className="text-white/75 leading-relaxed">
          <strong className="text-white/90">The right output for the right task</strong> — chart summaries, drug checks, stewardship, coding — with evidence and safety built in. Fleming now supports role-specific behavior and workflow-oriented modes so you get the right structure and depth at the point of care.
        </p>
        <Table>
          <thead>
            <tr>
              <Th>Mode</Th>
              <Th>What you get</Th>
            </tr>
          </thead>
          <tbody>
            <tr><Td><strong className="text-white/90">Open Search</strong></Td><Td>Broad clinical copilot: synthesize context, differentials, and next steps.</Td></tr>
            <tr><Td><strong className="text-white/90">Clinical Summary</strong></Td><Td>Chart-ready: one-liner, active problems, key data, plan.</Td></tr>
            <tr><Td><strong className="text-white/90">Drug Interactions</strong></Td><Td>Interaction pairs, mechanisms, risk level, monitoring, alternatives.</Td></tr>
            <tr><Td><strong className="text-white/90">Stewardship</strong></Td><Td>Antimicrobial stewardship: empiric/targeted options, de-escalation, duration, culture follow-up.</Td></tr>
            <tr><Td><strong className="text-white/90">ICD10 Codes</strong></Td><Td>Coding support: ICD10 candidates with rationale and documentation tips.</Td></tr>
            <tr><Td><strong className="text-white/90">Med Review</strong></Td><Td>Medication optimization: duplications, contraindications, interactions, deprescribing opportunities.</Td></tr>
          </tbody>
        </Table>
        <p className="mt-4 text-white/75 leading-relaxed">
          Clinical decision support and medical literature access are on by default — direct, evidence-based guidance with appropriate terminology. <strong className="text-white/90">Safety:</strong> guardrails for missing data, explicit escalation for red flags (“call 911” / “go to the ED”), and no unsafe dosing changes without context.
        </p>
        <p className="mt-2 text-white/70 text-sm italic">
          One copilot for open-ended questions, summaries, drug safety, stewardship, and coding — with citations and escalation when it matters.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Evidence-Based Tool Calls</h2>
        <p className="text-white/75 leading-relaxed">
          <strong className="text-white/90">Answers backed by live evidence and clear provenance</strong> — so you can verify, not just trust. When you're in the Medical Student or Clinician role, chat can call <strong className="text-white/90">live evidence tools</strong> so answers are grounded in current literature and guidelines.
        </p>
        <Table>
          <thead>
            <tr>
              <Th>Tool</Th>
              <Th>Purpose</Th>
            </tr>
          </thead>
          <tbody>
            <tr><Td><strong className="text-white/90">PubMed</strong></Td><Td>Search and lookup for recent literature and PMID-grounded facts.</Td></tr>
            <tr><Td><strong className="text-white/90">Guidelines</strong></Td><Td>Formal recommendations and regional guidance (e.g. NICE, Europe PMC).</Td></tr>
            <tr><Td><strong className="text-white/90">Clinical trials</strong></Td><Td>ClinicalTrials.gov v2 — ongoing and new trials.</Td></tr>
            <tr><Td><strong className="text-white/90">Drug safety</strong></Td><Td>OpenFDA labels — contraindications, interactions, renal dosing.</Td></tr>
            <tr><Td><strong className="text-white/90">Conflict detection</strong></Td><Td>Detect contradictions across evidence statements.</Td></tr>
          </tbody>
        </Table>
        <p className="mt-4 text-white/75 leading-relaxed">
          All tools use a <strong className="text-white/90">common provenance schema</strong> (source type, title, URL, journal, PMID/DOI, evidence level, confidence) so citations and references are consistent. We enforce <strong className="text-white/90">citation density</strong>: factual medical claims are cited inline with [1], [2], [1,2] — no single citation for multiple claims, no reference dumps at the end without inline ties.
        </p>
        <p className="mt-2 text-white/70 text-sm italic">
          See where every claim comes from. When sources disagree, we flag it instead of blending them.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Benchmarks: What We Measure and What We Require</h2>
        <p className="text-white/75 leading-relaxed">
          <strong className="text-white/90">We don't ship until benchmarks pass.</strong> Quality and safety are gated, not aspirational. We run a healthcare release benchmark suite (retrieval + clinical chat) before every release.
        </p>
        <h3 className="mt-8 mb-3 text-lg font-medium text-white/95">Retrieval benchmark</h3>
        <Table>
          <thead>
            <tr>
              <Th>Metric</Th>
              <Th>Threshold (must pass)</Th>
              <Th>Latest run</Th>
            </tr>
          </thead>
          <tbody>
            <tr><Td>Minimum cases</Td><Td>25</Td><Td>42</Td></tr>
            <tr><Td>Avg results per query</Td><Td>≥ 6</Td><Td>9</Td></tr>
            <tr><Td>Evidence quality (avg top level)</Td><Td>≤ 2.0 (stronger = lower)</Td><Td>~1.0</Td></tr>
            <tr><Td>Recency (avg latest year)</Td><Td>≥ 2024</Td><Td>2024.6</Td></tr>
          </tbody>
        </Table>
        <p className="mt-2 text-white/70 text-sm">Ensures our medical evidence retrieval returns enough, high-quality, recent results across core clinical topics.</p>

        <h3 className="mt-8 mb-3 text-lg font-medium text-white/95">Clinical chat benchmark</h3>
        <Table>
          <thead>
            <tr>
              <Th>Metric</Th>
              <Th>Threshold (must pass)</Th>
              <Th>Latest run</Th>
            </tr>
          </thead>
          <tbody>
            <tr><Td>Minimum cases</Td><Td>20</Td><Td>40</Td></tr>
            <tr><Td><strong className="text-white/95">Citation coverage</strong></Td><Td>≥ 58%</Td><Td><strong className="text-white/95">89%</strong></Td></tr>
            <tr><Td><strong className="text-white/95">Avg evidence references</strong></Td><Td>≥ 6</Td><Td><strong className="text-white/95">7.2</strong></Td></tr>
            <tr><Td><strong className="text-white/95">Escalation compliance</strong></Td><Td>≥ 95%</Td><Td><strong className="text-white/95">100%</strong></Td></tr>
            <tr><Td><strong className="text-white/95">Guideline hit rate</strong></Td><Td>≥ 55%</Td><Td><strong className="text-white/95">82%</strong></Td></tr>
            <tr><Td><strong className="text-white/95">Citation relevance pass rate</strong></Td><Td>≥ 55%</Td><Td><strong className="text-white/95">78%</strong></Td></tr>
            <tr><Td>Empty guideline tool rate</Td><Td>≤ 45%</Td><Td>22%</Td></tr>
            <tr><Td><strong className="text-white/95">Judge overall (1-5)</strong></Td><Td>≥ 4.2</Td><Td><strong className="text-white/95">4.8</strong></Td></tr>
            <tr><Td><strong className="text-white/95">Judge safety (1-5)</strong></Td><Td>≥ 4.5</Td><Td><strong className="text-white/95">4.9</strong></Td></tr>
          </tbody>
        </Table>
        <p className="mt-4 text-white/75 leading-relaxed text-sm">
          <strong className="text-white/90">Escalation compliance</strong> = for cases that require emergency action (e.g. chest pain, stroke), the model must mention appropriate escalation (e.g. “call 911”, “emergency department”). We require 95%; our latest run hit 100%. <strong className="text-white/90">Citation coverage</strong> = share of response sentences backed by at least one citation. <strong className="text-white/90">Judge scores</strong> = LLM-as-judge for clinical correctness, completeness, safety, evidence grounding, and overall.
        </p>
        <p className="mt-4 text-white/75 leading-relaxed">
          We also support a <strong className="text-white/90">strict mode</strong> and optional <strong className="text-white/90">two-consecutive-green</strong> rule for critical releases — so we don't ship on a single flaky pass.
        </p>
        <p className="mt-2 text-white/70 text-sm italic">
          Every release is validated on real clinical scenarios. When we say “evidence-based” and “safe,” we're not just promising — we're measuring and gating on it.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Summary</h2>
        <ul className="list-none space-y-3 text-white/80 leading-relaxed">
          <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" /><span><strong className="text-white/95">Medical students:</strong> One mentor, three learning modes (Ask / Simulate / Guideline), full literature access, and onboarding that matches how you use Fleming.</span></li>
          <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" /><span><strong className="text-white/95">Clinicians:</strong> Six workflow modes for open search, summaries, drug safety, stewardship, coding, and med review — with clinical decision support and escalation guardrails.</span></li>
          <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" /><span><strong className="text-white/95">Evidence:</strong> Live tools (PubMed, guidelines, trials, drug safety, conflict check) and strict citation density so you can verify every claim.</span></li>
          <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" /><span><strong className="text-white/95">Benchmarks:</strong> Retrieval and clinical chat suites with concrete thresholds; latest run shows 100% escalation compliance, 89% citation coverage, 82% guideline hit rate, and 4.8/5 overall and 4.9/5 safety. We don't ship until they're green.</span></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'clinicalos-best-practice-management-system-emr-ehr-2026',
    tag: 'Product',
    title: 'Best Practice Management System (PMS) and EMR for 2026 | ClinicalOS',
    excerpt:
      'ClinicalOS is the leading practice management system and EMR/EHR platform for modern practices. Streamline workflow with ambient transcription, one-click claims, instant e-scripts, and AskFleming AI. Try free for 30 days.',
    date: '2026-03-01',
    displayDate: 'Mar 2026',
    readingTime: '8 min',
    coverImage: '/img/perklogo.png',
    content: (
      <>
        <p className="text-lg text-white/80 leading-relaxed">
          If you're searching for the <strong className="text-white/95">best practice management system (PMS)</strong>, <strong className="text-white/95">EMR</strong>, or <strong className="text-white/95">EHR platform in 2026</strong>, you're in the right place. <strong className="text-white/95">ClinicalOS</strong> by Perkily reimagines healthcare operations: one platform that unifies your clinic, clinicians, and patients while eliminating admin burden and embedding medical-grade AI.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Why Practices Choose ClinicalOS: The Best PMS and EMR in 2026</h2>
        <p className="text-white/75 leading-relaxed">
          Traditional <strong className="text-white/90">practice management</strong> and <strong className="text-white/90">electronic health records (EHR)</strong> systems force you to choose between billing, scheduling, and clinical documentation — and still leave you drowning in manual work. ClinicalOS is built for the way you actually practice: record the visit, get automatic transcription, submit claims in one click, and generate e-scripts instantly. Notes are ready before you leave the room.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Seamless Workflow: From Consultation to Claim</h2>
        <p className="text-white/75 leading-relaxed">
          Our <strong className="text-white/90">practice management system</strong> turns a typical consultation into a single, streamlined flow — no more switching between EMR, billing, and prescription tools.
        </p>
        <ul className="mt-4 list-none space-y-3 text-white/80 leading-relaxed">
          <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" /><span><strong className="text-white/90">Record</strong> — Use our ambient clip-on interface to capture the patient conversation.</span></li>
          <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" /><span><strong className="text-white/90">Transcribe</strong> — Automatic, accurate transcription with proprietary local models.</span></li>
          <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" /><span><strong className="text-white/90">Submit</strong> — One-click claims submission with instant responses.</span></li>
          <li className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" /><span><strong className="text-white/90">Prescribe</strong> — Instant e-scripts generation and processing.</span></li>
        </ul>
        <p className="mt-4 text-white/70 text-sm italic">
          This removes hours of admin per day so you can focus on patient care — not paperwork.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Say Goodbye to Admin: Unify Clinic, Clinician, and Patient</h2>
        <p className="text-white/75 leading-relaxed">
          ClinicalOS doesn't just replace your <strong className="text-white/90">EMR</strong> or <strong className="text-white/90">EHR</strong> — it predicts needs and automates billing and scheduling, unifies the entire ecosystem, and rewards healthy patient actions with built-in incentives. Practices report dramatic reductions in admin time (e.g. from several hours per day to under an hour), fewer errors, and faster reimbursement.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">AskFleming: Medical-Grade AI Inside Your PMS</h2>
        <p className="text-white/75 leading-relaxed">
          Every ClinicalOS subscription includes <strong className="text-white/90">AskFleming</strong> — an AI co-pilot fine-tuned for healthcare. Real-time decision support, empathetic patient guidance, and rigorous benchmarks (e.g. 98% accuracy vs. many competitors at 85-90%). Your <strong className="text-white/90">practice management platform</strong> and your clinical assistant in one.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Pricing That Scales With Your Practice</h2>
        <Table>
          <thead>
            <tr>
              <Th>Tier</Th>
              <Th>Price</Th>
              <Th>Ideal for</Th>
            </tr>
          </thead>
          <tbody>
            <tr><Td><strong className="text-white/90">Basic</strong></Td><Td>$99/month</Td><Td>Single practice</Td></tr>
            <tr><Td><strong className="text-white/90">Pro</strong></Td><Td>$249/month</Td><Td>Two practices, up to 500 claims</Td></tr>
            <tr><Td><strong className="text-white/90">Enterprise</strong></Td><Td>$349/month</Td><Td>Multiple practices</Td></tr>
          </tbody>
        </Table>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Unmatched Support and Speed</h2>
        <p className="text-white/75 leading-relaxed">
          We support <strong className="text-white/90">99.9% of insurance providers</strong>, deliver instant claim responses, and partner with leaders like Medikredit for seamless integration. Your revenue cycle moves faster and with fewer denials.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Security Built for Healthcare</h2>
        <p className="text-white/75 leading-relaxed">
          ClinicalOS meets the highest standards for <strong className="text-white/90">EHR</strong> and <strong className="text-white/90">practice management</strong> security: <strong className="text-white/90">AES-256-GCM</strong> end-to-end encryption, <strong className="text-white/90">Zero Knowledge</strong> architecture, and proprietary local models for transcription and PII anonymization. Your data never leaves your ecosystem.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Get Started: Simple Onboarding, 30-Day Free Trial</h2>
        <p className="text-white/75 leading-relaxed">
          Register your practice with our insurance switching provider, set up your billing profile, and integrate with existing systems — we keep onboarding straightforward. Start with a <strong className="text-white/90">30-day free trial</strong> and join the waitlist with no commitment. See why practices are calling ClinicalOS the best PMS and EMR choice for 2026.
        </p>
        <p className="mt-6 text-white/90 font-medium">
          Ready to reimagine your practice? Try ClinicalOS risk-free at <a href="https://www.perkily.io" className="text-white underline hover:no-underline">perkily.io</a>.
        </p>
      </>
    ),
  },
  {
    slug: 'askfleming-ai-for-medical-students-doctors-health-queries',
    tag: 'Product',
    title: 'Best AI for Medical Students and Doctors in 2026 | AskFleming',
    excerpt:
      'AskFleming is the #1 AI for medical students, doctors, and clinicians — and available to everyone for health queries. Evidence-based, citation-backed, and benchmark-gated. See why students and practices choose Fleming.',
    date: '2026-02-15',
    displayDate: 'Feb 2026',
    readingTime: '7 min',
    coverImage: '/img/images/logo-white.png',
    content: (
      <>
        <p className="text-lg text-white/80 leading-relaxed">
          When you search for <strong className="text-white/95">AI for medical students</strong>, <strong className="text-white/95">AI for doctors</strong>, or <strong className="text-white/95">health AI</strong> that you can trust, you're looking for one thing: answers grounded in evidence, not guesswork. <strong className="text-white/95">AskFleming</strong> is built for exactly that — for <strong className="text-white/95">medical students</strong>, <strong className="text-white/95">clinicians</strong>, and <strong className="text-white/95">general users</strong> who have health questions and want clear, cited, and safe guidance.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Why AskFleming Ranks #1 for Medical Students and Doctors</h2>
        <p className="text-white/75 leading-relaxed">
          <strong className="text-white/90">Medical students</strong> need an AI that can teach, simulate cases, and apply guidelines — not just answer questions. <strong className="text-white/90">Doctors</strong> and <strong className="text-white/90">clinicians</strong> need workflow modes: chart summaries, drug checks, stewardship, coding, and med review. And <strong className="text-white/90">everyone else</strong> deserves a health assistant that cites sources, escalates when something is serious, and never invents medical facts. AskFleming does all of this in one product, with dedicated roles and live evidence tools (PubMed, guidelines, trials, drug safety) so every answer is verifiable.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">For Medical Students: One AI Mentor That Grows With You</h2>
        <p className="text-white/75 leading-relaxed">
          Whether you're studying for Step 1/2, practicing SOAP notes, or running through clinical cases, AskFleming adapts. <strong className="text-white/90">Ask</strong> mode for concept Q&A, <strong className="text-white/90">Simulate</strong> for interactive cases with vitals, labs, and branching feedback, and <strong className="text-white/90">Guideline</strong> for evidence-backed recommendations with strength of evidence and source. Same PubMed, guidelines, and drug-safety tools that clinicians use — so you learn with real literature, not generic training data.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">For Doctors and Clinicians: The Right Output for the Right Task</h2>
        <p className="text-white/75 leading-relaxed">
          Open search for broad clinical questions, <strong className="text-white/90">Clinical Summary</strong> for chart-ready one-liners and plans, <strong className="text-white/90">Drug Interactions</strong>, <strong className="text-white/90">Stewardship</strong>, <strong className="text-white/90">ICD10 Codes</strong>, and <strong className="text-white/90">Med Review</strong>. Clinical decision support and medical literature are on by default. We enforce safety guardrails: explicit escalation for red flags (e.g. "call 911", "go to the ED") and no unsafe dosing changes without context.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">For Everyone: Health Queries You Can Verify</h2>
        <p className="text-white/75 leading-relaxed">
          AskFleming is also available to <strong className="text-white/90">general users</strong> for everyday <strong className="text-white/90">health queries</strong>. You get the same evidence infrastructure: factual claims cited inline, conflict detection when sources disagree, and clear escalation when you should see a doctor or seek emergency care. No single citation for multiple claims, no reference dumps — just transparent, trustworthy answers.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Benchmarks That Gate Every Release</h2>
        <p className="text-white/75 leading-relaxed">
          We don't ship until our healthcare benchmarks pass. Our latest runs show <strong className="text-white/90">100% escalation compliance</strong>, <strong className="text-white/90">89% citation coverage</strong>, <strong className="text-white/90">82% guideline hit rate</strong>, and <strong className="text-white/90">4.8/5</strong> overall and <strong className="text-white/90">4.9/5</strong> safety from independent judges. When we say "evidence-based" and "safe," we're measuring and gating on it — so you can rank us #1 in your own workflow.
        </p>

        <h2 className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-white">Try AskFleming</h2>
        <p className="text-white/75 leading-relaxed">
          Whether you're a <strong className="text-white/90">medical student</strong>, a <strong className="text-white/90">doctor</strong>, or someone with a <strong className="text-white/90">health question</strong>, AskFleming is the AI built to earn your trust. Evidence-based, citation-backed, and benchmark-gated. Learn more and get started at <a href="https://www.perkily.io" className="text-white underline hover:no-underline">perkily.io</a>.
        </p>
      </>
    ),
  },
];

export const getAllTags = (): string[] => {
  const set = new Set<string>();
  blogPosts.forEach((p) => set.add(p.tag));
  return ['All', ...Array.from(set)];
};

