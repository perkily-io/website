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
    date: '2025-03-03',
    displayDate: 'Mar 2025',
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
            <tr><Td><strong className="text-white/95">Judge overall (1–5)</strong></Td><Td>≥ 4.2</Td><Td><strong className="text-white/95">4.8</strong></Td></tr>
            <tr><Td><strong className="text-white/95">Judge safety (1–5)</strong></Td><Td>≥ 4.5</Td><Td><strong className="text-white/95">4.9</strong></Td></tr>
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
    slug: 'meet-fleming-guidance-that-earns-your-trust',
    tag: 'Product',
    title: 'Meet Fleming — guidance that earns your trust',
    excerpt:
      'Why we built Fleming the way we did: careful by default, grounded in safety checks, and woven into the care journey.',
    date: '2024-09-10',
    displayDate: 'Sep 2024',
    readingTime: '6 min',
    coverImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2400&auto=format&fit=crop',
    content: (
      <>
        <p>
          Fleming is designed to help people ask better questions, understand safe next steps, and feel confident when
          navigating care. We built it to be careful by default, grounded in safety checks, and woven into the broader
          Perkily experience — booking, rewards, and follow‑up.
        </p>
        <p>
          The core principles are simple: structured intake to reduce back‑and‑forth, clear escalation paths when
          red‑flags are present, and explainable outputs that clinicians can trust. It is not a replacement for clinical
          judgment — it’s a companion that helps everyone get to clarity faster.
        </p>
        <p>
          In this post, we share how we think about trust, safety, and the product decisions that brought Fleming to
          life.
        </p>
      </>
    ),
  },
  {
    slug: 'designing-for-calm-in-healthcare-software',
    tag: 'Design',
    title: 'Designing for calm in healthcare software',
    excerpt:
      'Interfaces that reduce cognitive load help everyone — patients, clinicians, students. Here’s how we think about it.',
    date: '2024-08-15',
    displayDate: 'Aug 2024',
    readingTime: '5 min',
    coverImage:
      'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2400&auto=format&fit=crop',
    content: (
      <>
        <p>
          Calm software is respectful software. We prioritise clarity, generous spacing, and predictable motion so that
          the interface gets out of the way and the work can happen.
        </p>
        <p>
          This approach shows up across Perkily — from booking flows to Fleming — and it’s especially important in
          healthcare where context‑switching is constant.
        </p>
      </>
    ),
  },
  {
    slug: 'rewards-that-change-behaviour-without-noise',
    tag: 'Platform',
    title: 'Rewards that change behaviour (without noise)',
    excerpt:
      'Building a rewards system that’s fair, transparent, and genuinely useful — not just another points program.',
    date: '2024-07-12',
    displayDate: 'Jul 2024',
    readingTime: '7 min',
    coverImage:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2400&auto=format&fit=crop',
    content: (
      <>
        <p>
          Perkily Rewards focus on meaningful actions and partners people love. The aim is to nudge healthier habits
          without the noise and dark‑patterns of traditional programs.
        </p>
        <p>
          We’re transparent about how rewards are earned and redeemed, and we design the system to be fair across
          different kinds of users.
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

