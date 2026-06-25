import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { RevealOnView } from './RevealOnView';

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start, prefersReducedMotion]);

  return count;
}

export function StatBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useCountUp(98, 1600, isInView);

  return (
    <section ref={ref} className="relative overflow-hidden py-40 md:py-56 bg-canvas border-y border-white/8">
      <div className="absolute inset-0 aurora-glow" />
      <div className="absolute inset-0 grain-overlay" />
      <RevealOnView>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-14 h-px max-w-sm origin-center bg-white/20"
          />
          <motion.p
            initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[8rem] sm:text-[11rem] md:text-[14rem] font-light text-white leading-none tracking-[-0.055em]"
          >
            {count}%
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light text-white/70 tracking-[-0.02em] text-balance max-w-xl mx-auto"
          >
            of documentation handled autonomously
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-base text-white/35 max-w-sm mx-auto"
          >
            The more ClinicalOS learns, the less your team touches.
          </motion.p>
        </div>
      </RevealOnView>
    </section>
  );
}
