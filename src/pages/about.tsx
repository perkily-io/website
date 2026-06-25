import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { RevealOnView } from '@/components/home/RevealOnView';

const values = [
  {
    label: '01',
    title: 'Clinicians first',
    body: 'Every workflow starts with the people delivering care — not the software vendor.',
  },
  {
    label: '02',
    title: 'Quiet automation',
    body: 'The best AI disappears into the background. Notes, claims, and follow-ups happen without friction.',
  },
  {
    label: '03',
    title: 'Built for trust',
    body: 'HIPAA-aligned infrastructure, audit trails, and human oversight at every step.',
  },
];

const milestones = [
  { year: '2024', event: 'Perkily Health Technologies founded to eliminate admin burden in outpatient care.' },
  { year: '2025', event: 'ClinicalOS launch and rebrand — one platform for documentation, claims, and practice operations.' },
  { year: 'Next', event: 'Expanding across specialties with deeper EHR integrations.' },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About ClinicalOS | Perkily"
        description="Perkily builds ClinicalOS — AI that runs your medical practice. Learn about our mission, values, and team."
        canonical="https://www.perkily.io/about"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-[800px] mx-auto text-center">
          <RevealOnView>
            <p className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-6">
              About Perkily Health Technologies
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1] mb-6">
              We build AI that runs
              <br />
              the medical practice.
            </h1>
            <p className="text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-[540px] mx-auto">
              ClinicalOS handles documentation, billing, and patient communication so clinicians can focus on medicine — not paperwork.
            </p>
          </RevealOnView>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <RevealOnView>
            <div className="rounded-[2rem] border border-white/10 bg-surface p-8 sm:p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-4">
                    Our mission
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-snug">
                    Give every clinician their time back.
                  </h2>
                </div>
                <div className="space-y-4 text-[15px] text-white/50 leading-relaxed font-light">
                  <p>
                    Physicians spend nearly half their day on documentation and administrative tasks. That is time stolen from patients and from life outside the clinic.
                  </p>
                  <p>
                    Perkily exists to change that. ClinicalOS listens during visits, drafts notes, prepares claims, and handles follow-up — so your team can practice medicine at the top of their license.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <RevealOnView>
            <p className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-4 text-center">
              What we believe
            </p>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white text-center mb-12 sm:mb-16">
              Principles behind the product
            </h2>
          </RevealOnView>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <RevealOnView key={v.label} delay={i * 0.08}>
                <div className="rounded-[1.5rem] border border-white/10 bg-surface p-6 sm:p-8 h-full">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/20">{v.label}</span>
                  <h3 className="text-lg font-light text-white mt-4 mb-3">{v.title}</h3>
                  <p className="text-[14px] text-white/45 leading-relaxed font-light">{v.body}</p>
                </div>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-[800px] mx-auto">
          <RevealOnView>
            <p className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-4 text-center">
              Our story
            </p>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white text-center mb-12">
              Milestones
            </h2>
          </RevealOnView>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <RevealOnView key={m.year} delay={i * 0.06}>
                <div className="flex gap-6 sm:gap-10 py-6 border-t border-white/10 first:border-t-0">
                  <span className="font-mono text-[13px] text-white/30 shrink-0 w-12">{m.year}</span>
                  <p className="text-[15px] text-white/50 font-light leading-relaxed">{m.event}</p>
                </div>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-[800px] mx-auto">
          <RevealOnView>
            <div className="rounded-[2rem] border border-white/10 bg-surface p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-4">
                Ready to see ClinicalOS?
              </h2>
              <p className="text-white/45 font-light mb-8 max-w-md mx-auto">
                Talk to our team about bringing ambient AI to your practice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-[14px] font-medium hover:bg-white/90 transition-colors"
                >
                  Get in touch
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 text-white/70 text-[14px] font-light hover:text-white hover:border-white/25 transition-colors"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </RevealOnView>
        </div>
      </section>
    </Layout>
  );
};

export default About;
