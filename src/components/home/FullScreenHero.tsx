import { motion } from 'framer-motion';
import { BlurText } from '@/components/ui/animated-blur-text';
import { ChevronRight } from 'lucide-react';

export function FullScreenHero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-canvas">
      {/* Full-bleed video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/img/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-canvas/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/35 to-canvas/10" />
      </div>

      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              ClinicalOS
            </span>
          </motion.div>

          <BlurText
            text="Practice medicine."
            className="justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-[-0.02em]"
            delay={70}
            animateBy="words"
            direction="bottom"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white/40 leading-[1.05] tracking-[-0.02em]"
          >
            Not paperwork.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md text-base sm:text-lg text-white/55 leading-relaxed"
          >
            ClinicalOS runs your practice's busywork — scheduling, notes, billing, and claims.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="https://calendly.com/hello-perkily"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-canvas transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a demo
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/25"
            >
              See it work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
