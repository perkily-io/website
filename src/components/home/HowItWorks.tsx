import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, FileText, Mic2, Send } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Listens',
    body: 'ClinicalOS captures the visit context while the clinician stays present.',
    icon: Mic2,
  },
  {
    number: '02',
    title: 'Writes',
    body: 'The encounter becomes a structured, review-ready note.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Files',
    body: 'Approved documentation moves into billing, claims, and follow-up.',
    icon: Send,
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const progressWidth = useTransform(scrollYProgress, [0.08, 0.92], ['0%', '100%']);
  const cardY = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  const stepOne = useTransform(scrollYProgress, [0, 0.22, 0.38], [1, 1, 0.28]);
  const stepTwo = useTransform(scrollYProgress, [0.28, 0.48, 0.66], [0.28, 1, 0.28]);
  const stepThree = useTransform(scrollYProgress, [0.58, 0.78, 1], [0.28, 1, 1]);
  const stepOpacities = [stepOne, stepTwo, stepThree];

  return (
    <section ref={ref} id="how-it-works" className="relative h-[280svh] bg-surface">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 aurora-glow" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
              How it works
            </span>
            <h2 className="mt-4 max-w-md text-4xl font-light tracking-[-0.02em] text-white sm:text-5xl">
              Three steps. Zero friction.
            </h2>
            <p className="mt-5 max-w-sm text-white/45">
              A clean handoff from conversation to documentation to revenue work.
            </p>

            <div className="mt-12 h-px w-full max-w-sm bg-white/10">
              <motion.div className="h-px bg-white/70" style={{ width: progressWidth }} />
            </div>

            <div className="mt-10 space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    style={{ opacity: stepOpacities[index] }}
                    className="grid grid-cols-[3rem_1fr] gap-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                      <Icon className="h-5 w-5 text-white/55" />
                    </div>
                    <div>
                      <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-light tracking-[-0.02em] text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/45">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              style={{ y: cardY, scale: cardScale }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-canvas p-5 shadow-2xl shadow-black/40"
            >
              <div className="rounded-[2rem] border border-white/8 bg-white/[0.025] p-5 sm:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                      Encounter pipeline
                    </p>
                    <p className="mt-1 text-sm text-white/45">Live visit to clean handoff</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">
                    Active
                  </span>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_0.7fr]">
                  <div className="rounded-3xl border border-white/8 bg-canvas p-5">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04]">
                        <Mic2 className="h-4 w-4 text-white/55" />
                      </div>
                      <div>
                        <p className="text-sm text-white/75">Visit context</p>
                        <p className="text-xs text-white/35">Capturing key signals</p>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <div className="h-2 w-full rounded-full bg-white/20" />
                      <div className="h-2 w-4/5 rounded-full bg-white/10" />
                      <div className="h-2 w-11/12 rounded-full bg-white/10" />
                      <div className="h-2 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-white/8 bg-canvas p-5">
                      <FileText className="mb-7 h-5 w-5 text-white/45" />
                      <p className="text-sm text-white/75">Draft note</p>
                      <p className="mt-1 text-xs text-white/35">Ready for review</p>
                    </div>
                    <div className="rounded-3xl border border-white/8 bg-canvas p-5">
                      <CheckCircle2 className="mb-7 h-5 w-5 text-white/45" />
                      <p className="text-sm text-white/75">Claim packet</p>
                      <p className="mt-1 text-xs text-white/35">Prepared after approval</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
