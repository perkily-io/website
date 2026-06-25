import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pillars = [
  {
    title: 'Documents every visit',
    description: 'Turns each consult into a clean, reviewable note.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1900&q=85',
    imageAlt: 'Sunlit mountain landscape',
  },
  {
    title: 'Keeps you in control',
    description: 'You approve before anything is final.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1900&q=85',
    imageAlt: 'Calm lake and forest landscape',
  },
  {
    title: 'Runs the back office',
    description: 'Billing, claims, and reminders — handled.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1900&q=85',
    imageAlt: 'Misty forest landscape',
  },
];

export function WhatItDoes() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const textOpacityOne = useTransform(scrollYProgress, [0, 0.2, 0.34], [1, 1, 0]);
  const textOpacityTwo = useTransform(scrollYProgress, [0.28, 0.44, 0.62], [0, 1, 0]);
  const textOpacityThree = useTransform(scrollYProgress, [0.56, 0.76, 1], [0, 1, 1]);

  const imageOpacityOne = useTransform(scrollYProgress, [0, 0.22, 0.36], [1, 1, 0]);
  const imageOpacityTwo = useTransform(scrollYProgress, [0.3, 0.46, 0.64], [0, 1, 0]);
  const imageOpacityThree = useTransform(scrollYProgress, [0.58, 0.78, 1], [0, 1, 1]);

  const imageScaleOne = useTransform(scrollYProgress, [0, 0.34], [1, 0.96]);
  const imageScaleTwo = useTransform(scrollYProgress, [0.28, 0.46, 0.64], [0.96, 1, 0.96]);
  const imageScaleThree = useTransform(scrollYProgress, [0.58, 1], [0.96, 1]);

  const textOpacities = [textOpacityOne, textOpacityTwo, textOpacityThree];
  const imageOpacities = [imageOpacityOne, imageOpacityTwo, imageOpacityThree];
  const imageScales = [imageScaleOne, imageScaleTwo, imageScaleThree];

  return (
    <section ref={sectionRef} className="relative h-[320svh] bg-canvas">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
        <motion.div className="absolute inset-x-0 top-0 h-px origin-left bg-white/70" style={{ width: progressWidth }} />

        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.58fr_1.42fr] lg:gap-20 lg:px-12">
          <div className="relative min-h-[320px]">
            <div className="mb-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
                What it does
              </span>
              <h2 className="mt-4 max-w-lg text-4xl font-light tracking-[-0.02em] text-white sm:text-5xl">
                One platform. Every workflow.
              </h2>
            </div>

            <div className="relative min-h-[160px]">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="absolute inset-0 flex flex-col justify-start"
                  style={{ opacity: textOpacities[index] }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-white/25">0{index + 1}</span>
                    <span className="h-px w-10 bg-white/15" />
                  </div>
                  <h3 className="max-w-md text-3xl font-light tracking-[-0.02em] text-white sm:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-lg leading-relaxed text-white/50">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/8 bg-surface lg:aspect-[16/9]">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.image}
                className="absolute inset-0"
                style={{ opacity: imageOpacities[index], scale: imageScales[index] }}
              >
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  className="h-full w-full object-cover opacity-85"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/75 via-canvas/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-canvas/55 p-5 backdrop-blur-xl">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                      ClinicalOS
                    </span>
                    <span className="h-2 w-2 rounded-full bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-2/3 rounded-full bg-white/35" />
                    <div className="h-2 w-full rounded-full bg-white/15" />
                    <div className="h-2 w-4/5 rounded-full bg-white/15" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
