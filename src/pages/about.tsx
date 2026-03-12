import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight';
import { ArrowRight, Eye, Brain, Layers, Sparkles, Cpu, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Perkily"
        description="Thirty years of screens. We're building the exit. Perkily builds the Clinical Operating System and ambient intelligence so clinicians can focus on patients, not paperwork."
        keywords="Perkily, healthcare technology, clinical operating system, ambient intelligence, doctor-patient relationship, AI-powered healthcare"
        canonical="https://www.perkily.io/about"
      />

      {/* Hero — Mission statement with spotlight and motion */}
      <section className="relative min-h-[85vh] flex flex-col justify-center mx-auto w-full px-6 pt-28 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
        <Spotlight className="-top-24 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2" fill="white" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/40 font-medium mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our mission
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6 sm:mb-8 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Thirty years of screens.
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">We're building the exit.</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Technology is at its best when it disappears. We build the Clinical Operating System and ambient intelligence so clinicians move from conversation to structured documentation and claim-ready outputs—with clinical review always in provider control.
          </motion.p>
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full px-8 h-12 text-sm font-medium backdrop-blur-sm"
              onClick={() => window.location.assign('/contact')}
            >
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white/70 hover:text-white rounded-full px-8 h-12 text-sm font-medium"
              onClick={() => window.location.assign('/clinicalos')}
            >
              Explore ClinicalOS
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Problem + Belief */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-16 sm:space-y-24">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-6">The problem</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed">
              For decades, healthcare technology promised to make care better. Instead it made it louder. It put screens between doctors and patients. It turned clinicians into clerks—highly trained minds spent on dropdown menus and billing codes.
            </p>
          </motion.div>

          <div className="flex items-center justify-center py-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-6">What we believe</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed">
              The most advanced technology shouldn't feel like technology at all. It should be invisible. Ambient. A silent partner that handles the paperwork so the physician can be fully present. We're not iterating on the past—we're building the clinical era where admin burden goes to zero and focus on the patient is absolute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">What we build</span>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-4">
            One platform.
            <br />
            <span className="text-white/50">ClinicalOS, Fleming, and The Interface.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            From practice management to evidence-visible AI and ambient capture—all designed to work together so you finish the clinical job, not just document the visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                <Cpu className="h-6 w-6 text-white/90" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">ClinicalOS</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              AI-powered practice management from conversation to structured documentation and claim-ready outputs. Built for solo operators and multi-location teams.
            </p>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                <Brain className="h-6 w-6 text-white/90" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Fleming</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Evidence-visible clinical AI for workflow completion—citations, safety boundaries, and clinician oversight so teams can verify and act with confidence.
            </p>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <div className="mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                <Stethoscope className="h-6 w-6 text-white/90" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">The Interface</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Ambient capture that clips to your scrubs. Your voice is the interface; you never have to look at a screen during a consultation again.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-4">
            The pillars of
            <br />
            <span className="text-white/40">our design</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                <Eye className="h-7 w-7 text-white/90" />
              </div>
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">Invisible by design</h3>
            <p className="text-white/60 text-base leading-relaxed">
              If a tool makes you look away from your patient, it has failed. We build for eyes on the person, not the screen.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                <Brain className="h-7 w-7 text-white/90" />
              </div>
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">Intelligence with integrity</h3>
            <p className="text-white/60 text-base leading-relaxed">
              We don't just process data—we preserve the sanctity of the doctor–patient relationship. Evidence visible, decisions in your hands.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                <Layers className="h-7 w-7 text-white/90" />
              </div>
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">Systemic simplicity</h3>
            <p className="text-white/60 text-base leading-relaxed">
              One ecosystem. One login. Documentation, claims, and intelligence in total clinical harmony—no more context-switching.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </section>

      {/* Vision: The Keyboard is Obsolete */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.01] p-12 sm:p-16 lg:p-20">
            <div className="pointer-events-none absolute -inset-20 -z-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                The keyboard
                <br />
                <span className="text-white/30">is obsolete.</span>
              </h2>

              <div className="space-y-6 text-lg sm:text-xl text-white/75 font-light leading-relaxed pt-2">
                <p>
                  The EHR turned the doctor into a clerk. We're not here to iterate on that. The patient management system of the past is done.
                </p>

                <div className="py-6 border-y border-white/10 my-6">
                  <p className="text-2xl sm:text-3xl text-white font-medium tracking-tight">
                    The Clinical Operating System has arrived.
                  </p>
                </div>

                <p>
                  A world where your voice is your interface. Where ambient capture handles the note. Where the OS anticipates the next move so you can close the laptop, look the patient in the eye, and practice medicine again.
                </p>

                <div className="pt-8 space-y-3 text-2xl sm:text-3xl text-white font-light tracking-tight">
                  <p>Close the laptop.</p>
                  <p>Look the patient in the eye.</p>
                  <p className="font-medium">Practice medicine again.</p>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10 mt-12">
                <div className="flex items-center gap-4">
                  <Sparkles className="h-5 w-5 text-white/40" />
                  <div>
                    <p className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                      Perkily.
                    </p>
                    <p className="text-base sm:text-lg text-white/50 italic mt-1 font-light">
                      Care, accelerated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] p-12 sm:p-16 lg:p-20">
          <div className="pointer-events-none absolute -inset-24 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <motion.div
            className="mx-auto max-w-3xl text-center space-y-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
                Ready to join
                <br />
                <span className="text-white/40">the future?</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light">
                See the Clinical Operating System in action. Request access or schedule a demo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-10 h-14 text-base font-medium transition-transform active:scale-95 shadow-lg shadow-white/10"
                onClick={() => window.location.assign('/contact')}
              >
                Request Access <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full px-10 h-14 text-base font-medium backdrop-blur-sm"
                onClick={() => window.open('https://calendly.com/hello-perkily', '_blank')}
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
