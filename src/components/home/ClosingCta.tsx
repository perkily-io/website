import { ChevronRight } from 'lucide-react';
import { RevealOnView } from './RevealOnView';

export function ClosingCta() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-surface py-32 md:py-40 border-t border-white/8">
      <div className="absolute inset-0 aurora-glow" />
      <div className="absolute inset-0 grain-overlay" />

      <RevealOnView className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-[3rem] border border-white/10 bg-canvas p-8 text-center shadow-2xl shadow-black/25 sm:p-12 md:p-16">
            <div className="mx-auto mb-10 h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
              Start
            </span>
            <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
              Give your practice room to breathe.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-white/55">
              Let ClinicalOS carry the administrative weight.
            </p>
            <div className="mt-12">
              <a
                href="https://calendly.com/hello-perkily"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-canvas transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a demo
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="mx-auto mt-10 h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
        </div>
      </RevealOnView>
    </section>
  );
}
