import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { FullScreenHero } from '@/components/home/FullScreenHero';
import { WhatItDoes } from '@/components/home/WhatItDoes';
import { StatBand } from '@/components/home/StatBand';
import { HowItWorks } from '@/components/home/HowItWorks';
import { CapabilitiesBento } from '@/components/home/CapabilitiesBento';
import { TrustBand } from '@/components/home/TrustBand';
import { FaqSection } from '@/components/home/FaqSection';
import { ClosingCta } from '@/components/home/ClosingCta';

const homepageFaqItems = [
  {
    question: 'What is ClinicalOS?',
    answer: 'ClinicalOS is an AI-powered practice management system that runs scheduling, notes, billing, and claims for your medical practice.',
  },
  {
    question: 'How does ClinicalOS handle documentation?',
    answer: 'ClinicalOS drafts structured clinical notes from each visit. You review and approve before anything is final.',
  },
  {
    question: 'Does ClinicalOS replace clinical judgement?',
    answer: 'No. ClinicalOS is assistive. Clinical review remains in provider control at every step.',
  },
  {
    question: 'Can ClinicalOS support claims and billing?',
    answer: 'Yes. ClinicalOS handles billing workflows and sends clean claims automatically.',
  },
  {
    question: 'How long does onboarding take?',
    answer: 'Most practices are up and running within one to two weeks.',
  },
];

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-canvas text-white selection:bg-white/10">
      <SEO
        title="ClinicalOS | AI That Runs Your Medical Practice"
        description="ClinicalOS handles scheduling, notes, billing, and claims — so your team can focus on patients. AI-powered practice management for modern healthcare."
        keywords="ClinicalOS, AI practice management, healthcare AI, clinical documentation, medical billing, practice automation"
        canonical="https://www.perkily.io/"
        faqItems={homepageFaqItems}
      />

      <Navbar />
      <FullScreenHero />
      <WhatItDoes />
      <StatBand />
      <HowItWorks />
      <CapabilitiesBento />
      <TrustBand />
      <FaqSection items={homepageFaqItems} />
      <ClosingCta />
      <Footer />
    </main>
  );
};

export default Index;
