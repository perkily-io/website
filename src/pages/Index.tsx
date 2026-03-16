import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { HeroSection } from '@/components/ui/hero-section-5';
import { Button } from '@/components/ui/button';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { ArrowRight } from 'lucide-react';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';
import { Features } from '@/components/ui/features-6';

const homepageFaqItems = [
  {
    question: 'How are AskFleming and ClinicalOS different?',
    answer: 'AskFleming is an evidence-first medical AI copilot for patients, students, and clinicians, while ClinicalOS is the AI-powered operating system for end-to-end practice workflows.'
  },
  {
    question: 'Who is AskFleming built for?',
    answer: 'AskFleming supports patients who want clear health education, medical students who need a unified learning workspace, and clinicians who need workflow-ready outputs.'
  },
  {
    question: 'What evidence sources power AskFleming?',
    answer: 'Core connectors include PubMed, Guideline Search, ClinicalTrials.gov, OpenFDA, and conflict detection, with extended connectors available when enabled.'
  },
  {
    question: 'What does ClinicalOS include?',
    answer: 'ClinicalOS unifies patient management, scheduling, clinical documentation, billing and claims, imaging, inventory, automation, and analytics in one secure platform.'
  },
  {
    question: 'Does Perkily replace clinician judgement?',
    answer: 'No. Both products are assistive and workflow-focused. Clinical review and final decisions remain in provider control.'
  }
];

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      <SEO 
        title="Perkily | AskFleming + ClinicalOS for Modern Healthcare"
        description="AskFleming is an evidence-first medical AI copilot for patients, students, and clinicians. ClinicalOS is an AI-powered clinical operating system for patient, documentation, claims, and operational workflows."
        keywords="AskFleming, ClinicalOS, healthcare AI platform, medical AI copilot, clinical operating system, evidence-first AI, practice management"
        canonical="https://www.perkily.io/"
        faqItems={homepageFaqItems}
      />

      <Navbar />
      
      <HeroSection />

      {/* Canvas reveal section */}
      <section className="relative mx-auto w-full px-0 pb-8 sm:pb-12">
        <div className="relative h-64 w-full overflow-hidden border-y border-white/10">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[59, 130, 246],[139, 92, 246]]}
            opacities={[0.2,0.2,0.2,0.3,0.3,0.4,0.6,0.8,0.9,1]}
            dotSize={2}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Two Products. One Healthcare AI Ecosystem.</h2>
                <p className="mt-1 max-w-2xl text-white/70">AskFleming delivers evidence-first medical reasoning and workflow-ready outputs. ClinicalOS runs patient, clinical, and revenue operations in one connected platform.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" /> Live
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-4 px-6 pt-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-lg font-medium text-white">AskFleming: Evidence-First Medical Copilot</h3>
            <p className="mt-2 text-sm text-white/60">Built for patients, medical students, and clinicians with transparent citations, source provenance, and benchmark-gated quality.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-lg font-medium text-white">ClinicalOS: AI-Powered Clinical Operating System</h3>
            <p className="mt-2 text-sm text-white/60">Unify scheduling, notes, claims, automation, and analytics to reduce administrative friction and accelerate operations.</p>
          </div>
        </div>
      </section>

      {/* Audience + product pathway section */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-6xl font-light text-white mb-5 tracking-tight">
            Choose the product path that fits your role
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-3xl font-light leading-relaxed">
            Perkily supports the full care ecosystem: patient education, medical learning, clinician workflows, and practice operations.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {['Patients', 'Medical Students', 'Clinicians', 'Practice Teams'].map((label) => (
              <span key={label} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
                {label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <article className="group relative overflow-hidden rounded-2xl border border-amber-300/25 bg-gradient-to-b from-amber-500/[0.1] to-transparent p-7 sm:p-8">
              <div className="mb-4 inline-flex rounded-full border border-amber-300/25 bg-amber-200/10 px-2.5 py-1 text-[11px] uppercase tracking-wider text-amber-100">
                AskFleming
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">Evidence-first AI for medical thinking and decisions</h3>
              <p className="mt-3 text-sm text-white/65 max-w-xl">
                One copilot across patient education, medical learning, and clinician workflows with citations, provenance, and safety visibility.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>· Patients: plain-language education and better care-team questions</li>
                <li>· Students: learn, simulate, and apply guideline-backed reasoning</li>
                <li>· Clinicians: summary, drug safety, stewardship, coding, and med review</li>
              </ul>
              <Button
                variant="link"
                className="text-white/80 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit mt-7"
                onClick={() => window.location.assign('/fleming')}
              >
                Explore AskFleming <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-b from-blue-500/[0.08] to-transparent p-7 sm:p-8">
              <div className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/15 px-2.5 py-1 text-[11px] uppercase tracking-wider text-blue-100">
                ClinicalOS
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">AI-powered system for running your whole practice</h3>
              <p className="mt-3 text-sm text-white/65 max-w-xl">
                Secure, role-aware operations from patient intake through documentation, claims, and follow-up communication.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li>· Patient management, scheduling, and clinical documentation</li>
                <li>· Billing and claim-ready workflows with cleaner handoffs</li>
                <li>· Imaging, inventory, automation, and analytics in one platform</li>
              </ul>
              <Button
                variant="link"
                className="text-white/80 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit mt-7"
                onClick={() => window.location.assign('/clinicalos')}
              >
                Explore ClinicalOS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </article>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-wider text-white/45">Best fit</p>
              <p className="mt-1 text-sm text-white/75">Need evidence-visible medical outputs by role</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-wider text-white/45">Best fit</p>
              <p className="mt-1 text-sm text-white/75">Need one platform for daily practice operations</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-wider text-white/45">Combined stack</p>
              <p className="mt-1 text-sm text-white/75">Use AskFleming for reasoning and ClinicalOS for execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* AskFleming workflows section */}
      <section id="fleming" className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">AskFleming</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Evidence-first workflows for learning and care decisions</h2>
          <p className="mt-2 text-white/70">One copilot experience for patients, students, and clinicians, with role-aware output depth and visible evidence context.</p>
        </div>
        <Features />
      </section>

      {/* ClinicalOS Features Section */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">ClinicalOS</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Run your full practice workflow in one platform</h2>
          <p className="mt-2 text-white/70">Patient management, scheduling, documentation, claims, imaging, inventory, automation, and analytics - unified for solo practices and multi-location teams.</p>
        </div>
        <div className="mt-10">
          <GlowingEffectDemo />
        </div>
      </section>

      {/* ClinicalOS workflow section - redesigned */}
      <section id="wearable" className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">ClinicalOS workflow</span>
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight mb-6 leading-tight">
            One flow from encounter to revenue.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto">
            ClinicalOS connects clinical, operational, and billing handoffs so teams can finish the full job without context switching.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5 sm:p-8">
          <div className="space-y-3">
            {[
              {
                step: '01',
                title: 'Capture encounter context',
                body: 'Record visit signals, patient history, and session details in one structured workspace.'
              },
              {
                step: '02',
                title: 'Generate review-ready documentation',
                body: 'Create structured clinical notes that stay editable and provider-controlled.'
              },
              {
                step: '03',
                title: 'Move into claim-ready workflows',
                body: 'Carry validated clinical context into billing and claims without duplicate entry.'
              },
              {
                step: '04',
                title: 'Automate operational follow-through',
                body: 'Trigger reminders, communication, and front-office tasks to keep care and revenue moving.'
              }
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xs text-white/70">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button
              variant="link"
              className="text-white/80 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit"
              onClick={() => window.location.assign('/clinicalos')}
            >
              Explore ClinicalOS workflow <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>


      {/* Product selection section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
            Choose your stack
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Start with one product or combine both
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            Use AskFleming for evidence-first medical reasoning, ClinicalOS for end-to-end operations, or run both together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              key: 'fleming',
              tag: 'AskFleming',
              title: 'Evidence-first medical copilot',
              excerpt: 'Ideal for patient education, medical learning, and clinician decision workflows with citations and source provenance.',
              href: '/fleming',
              cta: 'Explore AskFleming'
            },
            {
              key: 'clinicalos',
              tag: 'ClinicalOS',
              title: 'AI-powered practice operations',
              excerpt: 'Best for teams that need one secure platform for scheduling, notes, claims, communication, and analytics.',
              href: '/clinicalos',
              cta: 'Explore ClinicalOS'
            },
            {
              key: 'combined',
              tag: 'Combined stack',
              title: 'Decision intelligence + operations',
              excerpt: 'Use AskFleming for evidence-backed reasoning and ClinicalOS for execution across clinical and revenue workflows.',
              href: '/contact',
              cta: 'Talk to us'
            }
          ].map((option) => (
            <a
              key={option.key}
              href={option.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 text-xs text-white/60 mb-4">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide font-medium">{option.tag}</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-white/90 transition-colors">
                  {option.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{option.excerpt}</p>
              </div>
              <div className="mt-6 inline-flex items-center text-sm text-white/70 group-hover:text-white transition-colors">
                {option.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <a href="/contact">
            <button className="border border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full px-6 py-2 text-sm font-medium transition-colors">
              Book a Demo
            </button>
          </a>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Frequently Asked Questions About AskFleming and ClinicalOS
          </h2>
          <p className="text-lg text-white/60 font-light mb-10">
            Clear answers for teams evaluating evidence-first medical AI and AI-powered clinical operations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {homepageFaqItems.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-medium text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;