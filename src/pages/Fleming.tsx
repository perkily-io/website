import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import GlassmorphismTrustHero from '@/components/ui/glassmorphism-trust-hero';
import { FeaturesSectionWithBentoGrid } from '@/components/ui/feature-section-with-bento-grid';
import RuixenFeatureSection from '@/components/ui/ruixen-feature-section';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Activity,
  Users,
  GraduationCap,
  Hospital,
} from 'lucide-react';

const flemingFaqItems = [
  {
    question: 'What is Fleming?',
    answer: 'Fleming is Perkily’s clinical AI assistant designed for workflow completion, not just evidence lookup.'
  },
  {
    question: 'Who is Fleming built for?',
    answer: 'Fleming supports both clinicians and medical students with role-specific outputs for real care and training scenarios.'
  },
  {
    question: 'How does Fleming improve trust in AI answers?',
    answer: 'Fleming provides evidence-visible responses with citations, provenance, and safety boundaries so teams can verify what the answer is built on.'
  },
  {
    question: 'Does Fleming replace clinician judgement?',
    answer: 'No. Fleming is assistive AI. Clinical decisions and final review remain in provider control.'
  },
  {
    question: 'What evidence connectors does Fleming support?',
    answer: 'Fleming uses core connectors like PubMed, Guideline Search, ClinicalTrials.gov, OpenFDA drug safety, and conflict detection, with extended connectors available via the connector registry.'
  }
];

const SECTION_CLASS = 'mx-auto max-w-7xl px-6 py-16 sm:py-24';
const OVERLINE = 'text-xs font-medium uppercase tracking-widest text-white/50 mb-3 block';

const whoCards = [
  { id: 'for-everyone', title: 'Everyone', body: 'Track symptoms, understand your labs, and get health questions explained in plain language.', icon: Users, tint: 'from-blue-500/10 to-transparent' },
  { id: 'for-students', title: 'Medical students', body: 'One mentor. Ask, simulate cases, or apply guidelines — with the same evidence tools as clinicians.', icon: GraduationCap, tint: 'from-emerald-500/10 to-transparent' },
  { id: 'for-clinicians', title: 'Clinicians', body: 'Six workflow modes. Chart-ready summaries, drug safety, stewardship, coding. Evidence and escalation built in.', icon: Hospital, tint: 'from-slate-400/10 to-transparent' },
];

const Fleming: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      <SEO
        title="Fleming | Evidence-Visible Clinical AI"
        description="Fleming is evidence-visible clinical AI built for workflow completion, helping clinicians and students finish the clinical job with safety and provider control."
        keywords="Fleming, clinical AI assistant, evidence-visible AI, healthcare AI workflows, medical student AI, clinician decision support"
        canonical="https://www.perkily.io/fleming"
        faqItems={flemingFaqItems}
      />
      <Navbar />

      <GlassmorphismTrustHero
        badgeText="Award-Winning"
        titleLine1="Fleming"
        titleLine2="Evidence-Visible"
        titleLine3="Clinical AI"
        description="Built for workflow completion, not just evidence lookup. AskFleming helps clinicians and medical students move from question to evidence-visible, confidence-aware outputs with citations, guardrails, and provider-led review."
        primaryCtaText="Try Fleming"
        primaryCtaHref="https://askfleming.perkily.io"
        secondaryCtaText="Book a Demo"
        secondaryCtaHref="/contact"
        backgroundVideoSrc="/img/Fleming.mp4"
        showStatsCard={true}
        showMarquee={true}
        statsCard={{
          mainValue: "89%",
          mainLabel: "Citation Coverage",
          progressLabel: "Judge Overall",
          progressValue: "4.8 / 5",
          progressPercent: 96,
          stat1: { value: "58%+", label: "Threshold" },
          stat2: { value: "24/7", label: "Support" },
          stat3: { value: "100%", label: "Escalation" },
          pill1Text: "RELEASE-GATED",
          pill2Text: "EVIDENCE-VISIBLE",
        }}
        marqueeHeading="Evidence connectors & sources"
        marqueeItems={[
          "PubMed",
          "OpenFDA",
          "JAMA",
          "bioRxiv",
          "NICE",
          "ClinicalTrials.gov",
          "Europe PMC",
          "ChEMBL",
        ]}
      />

      {/* Section 2 — Who it's for */}
      <section id="who-its-for" className={SECTION_CLASS}>
        <span className={OVERLINE}>Who it's for</span>
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/[0.015] p-3 md:grid-cols-3 md:p-4">
          {whoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={`#${card.id}`}
                className={`group rounded-xl border border-white/10 bg-gradient-to-b ${card.tint} from-white/[0.03] to-transparent p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03]`}
              >
                <div className="mb-3 inline-flex rounded-lg border border-amber-300/25 bg-amber-200/10 p-2">
                  <Icon className="h-4 w-4 text-amber-200" />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{card.body}</p>
                <p className="mt-4 text-[11px] uppercase tracking-wider text-white/35 group-hover:text-white/55 transition-colors">Explore</p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Section 3 — For everyone */}
      <section id="for-everyone" className={`${SECTION_CLASS} border-y border-white/10 bg-white/[0.02]`}>
        <span className={OVERLINE}>For everyone</span>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your health questions, answered clearly.</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              Track symptoms over time, make sense of lab results in plain language, and get conditions and treatments explained so you actually understand. AskFleming gives you evidence-backed answers without the jargon — free during beta.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60" /> Track symptoms and patterns over time</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60" /> Understand your labs in plain language</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60" /> Get conditions, meds, and next steps explained clearly</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60" /> Evidence and citations when you want to dig deeper</li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-4 overflow-hidden">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-200/10 blur-2xl" />
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-white/45">Daily health check</span>
                <Activity className="h-4 w-4 text-amber-200/80" />
              </div>
              <div className="space-y-2">
                {[
                  ['Symptoms tracked', '7 days streak'],
                  ['Lab insights', '3 explained today'],
                  ['Care guidance', 'Evidence-backed'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">{label}</span>
                      <span className="text-amber-200/90">{value}</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-amber-200/70 to-amber-300/40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — For medical students */}
      <section id="for-students" className={SECTION_CLASS}>
        <span className={OVERLINE}>For medical students</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">One mentor. Three ways to learn.</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Study concepts, run interactive cases, or apply evidence-based guidelines — with the same literature tools clinicians use.
        </p>
        <FeaturesSectionWithBentoGrid />
        <p className="mt-6 text-sm text-white/55">Choose your primary use when you sign up — we set the right default and turn on evidence for you.</p>
      </section>

      {/* Section 5 — For clinicians */}
      <section id="for-clinicians" className={`${SECTION_CLASS} border-y border-white/10 bg-white/[0.02]`}>
        <span className={OVERLINE}>For clinicians</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The right output for the right task.</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Point-of-care modes so you get chart-ready structure and depth — with evidence and escalation when it matters.
        </p>
        <RuixenFeatureSection />
      </section>

      {/* Section 6 — Evidence & trust (banner) */}
      <section id="evidence-trust" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),rgba(251,191,36,0.12),rgba(255,255,255,0.02))] px-6 py-7 sm:px-8 sm:py-8">
            <div className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl" />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_auto] lg:items-end">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/45">Evidence & trust</span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">See what every claim is built on.</h2>
                <p className="mt-2 max-w-3xl text-sm text-white/65">
                  Live evidence with inline citation chips and release-gated quality checks before production use.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['PubMed', 'NICE', 'ClinicalTrials.gov', 'OpenFDA'].map((source) => (
                    <span key={source} className="inline-flex items-center rounded-full border border-amber-200/25 bg-amber-200/10 px-2.5 py-1 text-[11px] font-medium text-amber-100">
                      {source}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {[
                  ['100%', 'Escalation'],
                  ['89%', 'Citation'],
                  ['82%', 'Guideline'],
                  ['4.9/5', 'Safety'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-center min-w-[90px]">
                    <div className="text-lg font-semibold tabular-nums text-white">{value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/45">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
      <section id="final-cta" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(34,211,238,0.10),rgba(255,255,255,0.03))] p-8 sm:p-12 text-center">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
            <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              From question to answer - with evidence you can see.
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-white/70 sm:text-lg">
              Join medical students and clinicians who finish the work with AskFleming.
            </p>
            <div className="relative mt-9 flex flex-col items-center gap-3">
              <a href="https://askfleming.perkily.io" target="_blank" rel="noopener noreferrer">
                <Button className="h-12 rounded-full bg-white px-8 text-black shadow-[0_8px_30px_rgba(255,255,255,0.22)] hover:scale-[1.02] hover:bg-white/90 transition-transform motion-reduce:hover:scale-100">
                  Start free
                </Button>
              </a>
              <p className="text-xs text-white/55">
                Free during beta. Later: $20/mo for medical students and clinicians; $49/mo for super users (frontier models).
              </p>
            </div>
            <div className="relative mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
              <a href="/terms-of-service" className="hover:text-white/85 transition-colors">Terms</a>
              <a href="/privacy-policy" className="hover:text-white/85 transition-colors">Privacy</a>
              <a href="/contact" className="hover:text-white/85 transition-colors">Design partner program</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Fleming;
