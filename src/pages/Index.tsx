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

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
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
