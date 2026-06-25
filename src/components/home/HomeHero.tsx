import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { BlurText } from '@/components/ui/animated-blur-text';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { ActivityCards } from './ActivityCards';

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 80]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 0.96]);

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-24">
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-xs text-ink-muted mb-8"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              AI for modern healthcare
            </motion.div>

            <BlurText
              text="Healthcare, made calm."
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-ink leading-[1.05] tracking-tight max-w-2xl"
              delay={80}
              animateBy="words"
              direction="bottom"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-lg sm:text-xl text-ink-muted leading-relaxed text-pretty"
            >
              AI that runs the clinical busywork — so your team can focus on care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full pl-6 pr-5 bg-teal text-white hover:bg-teal-dark border-0 shadow-warm"
              >
                <a href="https://calendly.com/hello-perkily" target="_blank" rel="noopener noreferrer">
                  Book a demo
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-6 border-ink/15 text-ink hover:bg-sage-wash"
              >
                <a href="/fleming">Explore AskFleming</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            style={{ y: mediaY, scale: mediaScale }}
            className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-square w-full max-w-xl mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-ink/10 shadow-warm-lg bg-paper">
              <video
                className="size-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/img/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-ivory/40 via-transparent to-transparent" />
            </div>
            <ActivityCards className="absolute inset-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
