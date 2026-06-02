import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { ArrowUpRight, Newspaper } from 'lucide-react';

const Press = () => {
  return (
    <Layout>
      <SEO
        title="Press | Perkily"
        description="Read latest media coverage and press stories featuring Perkily."
        keywords="Perkily press, media coverage, healthcare AI news"
        canonical="https://www.perkily.io/press"
      />

      <section className="mx-auto max-w-7xl px-6 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Newspaper className="h-3.5 w-3.5" />
            Press
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Perkily in the media
          </h1>
          <p className="mt-4 text-lg text-white/65">
            The latest coverage, interviews, and company stories.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
        <a
          href="https://globalhealthcaremagazine.com/magazine/mpumelelo-tembe/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 uppercase tracking-wider">
              Global Healthcare Magazine
            </span>
            <span>Feature</span>
          </div>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Mpumelelo Tembe: The Visionary Bringing Empathy, AI, and Loyalty to African Healthcare
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">
            A profile on Perkily&apos;s vision, product direction, and approach to AI-powered healthcare engagement.
          </p>
          <div className="mt-6 inline-flex items-center text-sm text-white/80 transition-colors group-hover:text-white">
            Read article
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </a>
      </section>
    </Layout>
  );
};

export default Press;
