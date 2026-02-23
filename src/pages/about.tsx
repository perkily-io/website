import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Brain, Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About Perkily"
        description="The mission to return medicine to the bedside. We believe the most advanced technology shouldn't feel like technology at all."
        keywords="Perkily, healthcare technology, clinical operating system, ambient intelligence, doctor-patient relationship"
        canonical="https://www.perkily.io/about"
      />

      {/* Hero Section */}
      <section className="relative mx-auto w-full px-6 pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(59,130,246,0.15),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
            The mission to return<br />
            <span className="text-white/40">medicine to the bedside.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            We believe the most advanced technology shouldn't feel like technology at all.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl space-y-20 sm:space-y-28">
          {/* The Problem */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed">
              For thirty years, technology has promised to make healthcare better. Instead, it made it louder. It forced doctors to stare at screens instead of eyes. It traded patient connection for data entry.
            </p>
          </motion.div>

          {/* Visual Divider */}
          <div className="flex items-center justify-center py-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Our Belief */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed">
              At Perkily, we believe that the most advanced technology shouldn't feel like technology at all. It should be invisible. It should be ambient. It should be a silent partner that allows the physician to be fully present.
            </p>
          </motion.div>

          {/* Visual Divider */}
          <div className="flex items-center justify-center py-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Our Mission */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed">
              We are not just a software company. We are architects of a new clinical era—where the administrative burden is zero, and the focus on human life is absolute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Pillars Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-4">
            The Pillars of<br />
            <span className="text-white/40">Our Design</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Invisible by Design */}
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
            <h3 className="text-2xl font-medium text-white mb-4">Invisible by Design</h3>
            <p className="text-white/60 text-base leading-relaxed">
              If a tool requires you to look away from your patient, it has failed.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Intelligence with Integrity */}
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
            <h3 className="text-2xl font-medium text-white mb-4">Intelligence with Integrity</h3>
            <p className="text-white/60 text-base leading-relaxed">
              We don't just process data; we preserve the sanctity of the doctor-patient relationship.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Systemic Simplicity */}
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
            <h3 className="text-2xl font-medium text-white mb-4">Systemic Simplicity</h3>
            <p className="text-white/60 text-base leading-relaxed">
              One ecosystem. One login. Total clinical harmony.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.01] p-12 sm:p-16 lg:p-20">
            {/* Background glow */}
            <div className="pointer-events-none absolute -inset-20 -z-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                  The Keyboard<br />
                  <span className="text-white/30">is Obsolete.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg sm:text-xl text-white/75 font-light leading-relaxed pt-4">
                <p>
                  Since the dawn of the Electronic Health Record, the doctor has been relegated to a clerk. A highly trained medical mind, spent on pull-down menus and billing codes.
                </p>
                
                <div className="py-6 border-y border-white/10 my-8">
                  <p className="text-2xl sm:text-3xl text-white font-medium tracking-tight">
                    We find this unacceptable.
                  </p>
                </div>

                <p>
                  Today, Perkily introduces a new way forward. A world where your voice is your interface. Where your wearable is your scribe. Where your OS anticipates your next move.
                </p>
                
                <p>
                  We aren't here to iterate on the past. The "Patient Management System" is dead.
                </p>
                
                <p className="text-2xl sm:text-3xl text-white font-medium tracking-tight pt-4">
                  The <span className="text-white/90">Clinical Operating System</span> has arrived.
                </p>
                
                <div className="pt-8 space-y-4 text-2xl sm:text-3xl text-white font-light tracking-tight">
                  <p>It is time to close the laptop.</p>
                  <p>It is time to look the patient in the eye.</p>
                  <p className="font-medium">It is time to practice medicine again.</p>
                </div>
              </div>

              {/* Signature */}
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

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] p-12 sm:p-16 lg:p-20">
          {/* Animated background gradients */}
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
                Ready to join<br />
                <span className="text-white/40">the future?</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light">
                Experience the Clinical Operating System of the future.
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
