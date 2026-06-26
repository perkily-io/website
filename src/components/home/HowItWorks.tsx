import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Listens',
    body: 'ClinicalOS captures the visit context while the clinician stays present.',
  },
  {
    number: '02',
    title: 'Writes',
    body: 'The encounter becomes a structured, review-ready note.',
  },
  {
    number: '03',
    title: 'Files',
    body: 'Approved documentation moves into billing, claims, and follow-up.',
  },
];

const WAVEFORM_BARS = 56;

function Waveform({ active }: { active: MotionValue<number> }) {
  const opacity = useTransform(active, [0, 0.4, 1], [0.25, 1, 1]);

  return (
    <motion.div className="flex h-24 items-end justify-center gap-[3px]" style={{ opacity }}>
      {Array.from({ length: WAVEFORM_BARS }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full bg-white/70"
          animate={{
            height: [
              6 + (i % 5) * 2,
              18 + Math.sin(i * 0.45) * 14 + (i % 7) * 3,
              6 + (i % 5) * 2,
            ],
          }}
          transition={{
            duration: 0.9 + (i % 9) * 0.06,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.015,
          }}
        />
      ))}
    </motion.div>
  );
}

function TranscriptLine({
  text,
  delay,
  active,
}: {
  text: string;
  delay: number;
  active: MotionValue<number>;
}) {
  const opacity = useTransform(active, [0.15 + delay, 0.35 + delay], [0, 1]);
  const y = useTransform(active, [0.15 + delay, 0.35 + delay], [8, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
    >
      <p className="text-[13px] font-light leading-relaxed text-white/55">{text}</p>
    </motion.div>
  );
}

function ListenPanel({ opacity, scale }: { opacity: MotionValue<number>; scale: MotionValue<number> }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col p-6 sm:p-8"
      style={{ opacity, scale }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <motion.span
            className="h-2 w-2 rounded-full bg-white/80"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Ambient capture
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/25">00:04:12</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <Waveform active={opacity} />
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
          Processing visit audio
        </p>
      </div>

      <div className="space-y-2">
        <TranscriptLine
          active={opacity}
          delay={0}
          text="Patient reports persistent lower back pain, worsening over two weeks."
        />
        <TranscriptLine
          active={opacity}
          delay={0.08}
          text="Exam: reduced lumbar flexion, no neurological deficit."
        />
      </div>
    </motion.div>
  );
}

function WriteSection({
  label,
  text,
  index,
  opacity,
  isLast,
}: {
  label: string;
  text: string;
  index: number;
  opacity: MotionValue<number>;
  isLast: boolean;
}) {
  const lineOpacity = useTransform(opacity, [0.2 + index * 0.12, 0.55 + index * 0.12], [0, 1]);
  const lineX = useTransform(opacity, [0.2 + index * 0.12, 0.55 + index * 0.12], [-12, 0]);

  return (
    <motion.div style={{ opacity: lineOpacity, x: lineX }}>
      <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">{label}</p>
      <p className="text-[13px] font-light leading-relaxed text-white/60">{text}</p>
      {!isLast && <div className="mt-3 h-px bg-white/[0.06]" />}
    </motion.div>
  );
}

function WritePanel({ opacity, scale }: { opacity: MotionValue<number>; scale: MotionValue<number> }) {
  const sections = [
    { label: 'Subjective', text: 'Lower back pain × 2 weeks. No radiation.' },
    { label: 'Assessment', text: 'Mechanical lumbar strain. No red flags.' },
    { label: 'Plan', text: 'NSAIDs, PT referral, follow-up in 4 weeks.' },
  ];
  const cursorOpacity = useTransform(opacity, [0.6, 0.85], [0, 1]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col p-6 sm:p-8"
      style={{ opacity, scale }}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          Draft note
        </span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/35">
          Review ready
        </span>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
        {sections.map((section, i) => (
          <WriteSection
            key={section.label}
            label={section.label}
            text={section.text}
            index={i}
            opacity={opacity}
            isLast={i === sections.length - 1}
          />
        ))}

        <motion.div className="mt-2 inline-flex items-center gap-1" style={{ opacity: cursorOpacity }}>
          <motion.span
            className="inline-block h-4 w-[2px] bg-white/60"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function FileNode({
  label,
  detail,
  index,
  opacity,
}: {
  label: string;
  detail: string;
  index: number;
  opacity: MotionValue<number>;
}) {
  const nodeOpacity = useTransform(opacity, [0.15 + index * 0.18, 0.45 + index * 0.18], [0, 1]);
  const nodeX = useTransform(opacity, [0.15 + index * 0.18, 0.45 + index * 0.18], [16, 0]);

  return (
    <motion.div style={{ opacity: nodeOpacity, x: nodeX }} className="flex items-center gap-4">
      <motion.div
        className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-canvas"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(255,255,255,0)',
            '0 0 0 6px rgba(255,255,255,0.04)',
            '0 0 0 0 rgba(255,255,255,0)',
          ],
        }}
        transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.5 }}
      >
        <span className="h-2 w-2 rounded-full bg-white/70" />
      </motion.div>
      <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">
        <p className="text-sm font-light text-white/75">{label}</p>
        <p className="mt-0.5 font-mono text-[10px] text-white/30">{detail}</p>
      </div>
    </motion.div>
  );
}

function FilePanel({
  opacity,
  scale,
  pathProgress,
}: {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  pathProgress: MotionValue<number>;
}) {
  const nodes = [
    { label: 'Note signed', detail: 'Provider approved' },
    { label: 'Coded', detail: 'M54.5 · 99213' },
    { label: 'Claim queued', detail: 'Clean validation' },
  ];
  const completeOpacity = useTransform(opacity, [0.3, 0.6], [0, 1]);
  const lineHeight = useTransform(pathProgress, (v) => `${v * 100}%`);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col p-6 sm:p-8"
      style={{ opacity, scale }}
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          Revenue handoff
        </span>
        <motion.span
          className="flex items-center gap-1.5 font-mono text-[10px] text-white/45"
          style={{ opacity: completeOpacity }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          Complete
        </motion.span>
      </div>

      <div className="relative flex flex-1 flex-col justify-center">
        <div className="absolute bottom-4 left-[1.125rem] top-4 w-px bg-white/[0.06]">
          <motion.div className="absolute inset-x-0 top-0 w-px bg-white/45" style={{ height: lineHeight }} />
        </div>

        <div className="space-y-5">
          {nodes.map((node, i) => (
            <FileNode
              key={node.label}
              label={node.label}
              detail={node.detail}
              index={i}
              opacity={opacity}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PipelineDemo({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const listenOpacity = useTransform(scrollYProgress, [0.05, 0.18, 0.38], [1, 1, 0]);
  const writeOpacity = useTransform(scrollYProgress, [0.28, 0.42, 0.62], [0, 1, 0]);
  const fileOpacity = useTransform(scrollYProgress, [0.52, 0.68, 0.95], [0, 1, 1]);

  const listenScale = useTransform(scrollYProgress, [0.05, 0.38], [1, 0.96]);
  const writeScale = useTransform(scrollYProgress, [0.28, 0.42, 0.62], [0.96, 1, 0.96]);
  const fileScale = useTransform(scrollYProgress, [0.52, 0.68], [0.96, 1]);

  const pathProgress = useTransform(scrollYProgress, [0.55, 0.88], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.55, 0.35]);
  const panelY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div className="relative w-full max-w-xl">
      <motion.div
        className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-white/[0.03] blur-3xl"
        style={{ opacity: glowOpacity }}
      />

      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0A0B0D] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]"
        style={{ y: panelY }}
      >
        {/* Shimmer border */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] p-px">
          <motion.div
            className="h-full w-full rounded-[2rem] opacity-40"
            style={{
              background:
                'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.15), transparent 30%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Chrome */}
        <div className="relative border-b border-white/[0.06] px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                ClinicalOS
              </span>
            </div>
            <span className="font-mono text-[10px] text-white/25">Encounter · #4821</span>
          </div>
        </div>

        {/* Panels */}
        <div className="relative aspect-[4/5] min-h-[420px] sm:aspect-[5/6]">
          <ListenPanel opacity={listenOpacity} scale={listenScale} />
          <WritePanel opacity={writeOpacity} scale={writeScale} />
          <FilePanel opacity={fileOpacity} scale={fileScale} pathProgress={pathProgress} />
        </div>

        {/* Step pills */}
        <div className="relative flex items-center justify-center gap-2 border-t border-white/[0.06] px-5 py-4">
          {['Listen', 'Write', 'File'].map((label, i) => (
            <PipelinePill
              key={label}
              label={label}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function PipelinePill({
  label,
  index,
  scrollYProgress,
}: {
  label: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const ranges = [
    [0.05, 0.38],
    [0.28, 0.62],
    [0.52, 0.95],
  ] as const;
  const [start, end] = ranges[index];
  const mid = (start + end) / 2;

  const pillOpacity = useTransform(scrollYProgress, [start, mid, end], [0.35, 1, 0.35]);
  const pillScale = useTransform(scrollYProgress, [start, mid, end], [0.96, 1, 0.96]);

  return (
    <motion.span
      style={{ opacity: pillOpacity, scale: pillScale }}
      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50"
    >
      {label}
    </motion.span>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const progressWidth = useTransform(scrollYProgress, [0.08, 0.92], ['0%', '100%']);
  const stepOne = useTransform(scrollYProgress, [0, 0.22, 0.38], [1, 1, 0.22]);
  const stepTwo = useTransform(scrollYProgress, [0.28, 0.48, 0.66], [0.22, 1, 0.22]);
  const stepThree = useTransform(scrollYProgress, [0.58, 0.78, 1], [0.22, 1, 1]);
  const stepOpacities = [stepOne, stepTwo, stepThree];

  const railDotY = useTransform(scrollYProgress, [0.08, 0.5, 0.92], ['0%', '50%', '100%']);

  return (
    <section ref={ref} id="how-it-works" className="relative h-[300svh] bg-surface">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 aurora-glow" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
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

            <div className="relative mt-12 pl-6">
              <div className="absolute bottom-2 left-0 top-2 w-px bg-white/10">
                <motion.div className="absolute inset-x-0 top-0 w-px bg-white/50" style={{ height: progressWidth }} />
                <motion.div
                  className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                  style={{ top: railDotY }}
                />
              </div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    style={{ opacity: stepOpacities[index] }}
                    className="relative"
                  >
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-light tracking-[-0.02em] text-white sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/45">{step.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            {prefersReducedMotion ? (
              <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-canvas p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Listen → Write → File
                </p>
                <p className="mt-4 text-sm font-light text-white/50">
                  ClinicalOS captures the visit, drafts the note, and prepares the claim — with your
                  approval at every step.
                </p>
              </div>
            ) : (
              <PipelineDemo scrollYProgress={scrollYProgress} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
