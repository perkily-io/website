import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import { ArrowRight, Building2, Heart, Shield, Sparkles, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: <Users2 className="w-5 h-5" />,
    title: 'Small team, high ownership',
    description: 'You own meaningful product surface area and ship work that directly impacts real healthcare workflows.'
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'Product-first execution',
    description: 'We build fast, validate with real users, and iterate with clear product quality standards.'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Trust and safety mindset',
    description: 'From UX to AI outputs, we design for clarity, accountability, and responsible healthcare use.'
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Mission with real-world impact',
    description: 'Our products help clinicians, students, and patients navigate care and decision-making more effectively.'
  }
];

const Careers = () => {
  return (
    <Layout>
      <SEO
        title="Careers | Perkily"
        description="Careers at Perkily. Learn about our mission and team culture, and check for future openings."
        keywords="Perkily careers, healthcare AI jobs, startup careers"
        canonical="https://www.perkily.io/careers"
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_70%_at_50%_0%,rgba(59,130,246,0.22),rgba(0,0,0,0))]" />
        <div className="pointer-events-none absolute -top-24 right-8 h-64 w-64 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-[#00A3FF]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles className="h-3.5 w-3.5" />
              Careers at Perkily
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Build healthcare AI products that people actually use.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
              We design practical products for clinicians, students, and patients. Our work blends product rigor, AI systems thinking, and human-centered care workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/55">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Johannesburg-rooted</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Global product ambition</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">AI + healthcare workflows</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/45">Current openings</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                We are not hiring right now.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
                We are focused on execution in our current stage. This page will be updated as soon as new roles open. If you are excited about what we are building, you can still reach out and share your profile.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm font-medium text-white">Stay in touch</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                For future opportunities, send us a short intro and the role you would be interested in.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild className="justify-center bg-white text-black hover:bg-white/90">
                  <a href="/contact">
                    Contact us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="justify-center border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <a href="/blog">Read company updates</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-white/45">Why Perkily</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How we work
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white/80">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(34,211,238,0.10),rgba(255,255,255,0.03))] p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            We will post new roles here first.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/65">
            Thanks for your interest in Perkily. Keep an eye on this page and our updates as the team grows.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Careers; 