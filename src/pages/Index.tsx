import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RewardPartners from '@/components/RewardPartners';
import Features from '@/components/Features';
import FlemingAI from '@/components/FlemingAI';
import WhyPerkily from '@/components/WhyPerkily';
import PerkilyApps from '@/components/PerkilyApps';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <SEO 
        title="Home"
        description="Reimagining healthcare through AI-powered solutions, intuitive design, and seamless experiences. For patients and professionals alike."
        keywords="healthcare, AI, medical technology, patient care, healthcare rewards, medical professionals, Perkily, Perkily AI, Perkily Apps, Perkily Rewards, Perkily Benefits, Perkily Perks, Perkily Rewards Program, Perkily Rewards App, Perkily Rewards Card, Perkily Rewards Card App, Perkily Rewards Card App Download, Perkily Rewards Card App Download for Android, Perkily Rewards Card App Download for iOS"
        canonical="https://www.perkily.io/"
      />
      <Navbar />
      <Hero />
      <RewardPartners />
      <Features />
      <FlemingAI />
      <WhyPerkily />
      <PerkilyApps />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
