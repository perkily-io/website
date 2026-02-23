import React, { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { HeroSection } from '@/components/ui/hero-section-5';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { ArrowRight, Bot, Sparkles, Check } from 'lucide-react';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';
import { BlurText } from '@/components/ui/animated-blur-text';
import { Awards } from '@/components/ui/award';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { Features } from '@/components/ui/features-6';
import { motion, useScroll, useTransform } from 'framer-motion';

// Combined Text Reveal and Image Component
const InterfaceTextAndImage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  // Animate image opacity based on scroll progress - fades in as text reveals
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.8]);
  // Animate scale for parallax effect
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.95]);
  // Animate y position for smooth flow with text
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={scrollContainerRef} className="relative" style={{ marginBottom: '200px' }}>
      {/* Text Reveal Component - creates its own 200vh container */}
      <TextRevealByWord 
        text="Technology is at its best when it disappears. The Interface is a masterpiece of ambient engineering. It clips to your scrubs and stays out of the way, capturing every nuance of the patient encounter so you never have to look at a screen during a consultation again."
        className="h-[200vh]"
      />
      
      {/* Scroll-Synced Product Image - Top overlaps with bottom of text */}
      <div 
        className="absolute left-0 right-0 z-10" 
        style={{ 
          top: isMobile ? 'calc(160vh + 250px)' : 'calc(175vh + 80px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative w-full max-w-5xl mx-auto">
            <motion.div
              style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
              className="mb-0"
            >
              <div className="scale-110 sm:scale-125 origin-center">
                <img 
                  src="/img/productimage.png" 
                  alt="The Interface Product"
                  className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none"
                />
              </div>
            </motion.div>
            {/* Request Early Access Button - Positioned below image with proper spacing */}
            <div className="flex justify-center mt-3 sm:mt-2 md:-mt-[50px] relative z-20">
              <button
                className="rounded-full px-6 sm:px-8 h-12 text-sm sm:text-base font-medium transition-all active:scale-95 hover:bg-gray-50 border-0 inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
                onClick={() => window.open('https://calendly.com/hello-perkily', '_blank')}
              >
                Request Early Access <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      <SEO 
        title="The Clinical Operating System of the Future"
        description="Built for the era of ambient intelligence. Perkily unifies the clinic, the clinician, and the patient into a single, seamless ecosystem."
        keywords="ClinicalOS, Perkily, ambient intelligence, practice management, healthcare AI, medical software, clinical notes"
        canonical="https://www.perkily.io/"
      />

      <Navbar />
      
      <HeroSection />

      {/* Canvas reveal section */}
      <section className="relative mx-auto w-full px-0 pb-8 sm:pb-12">
        <div className="relative h-64 w-full overflow-hidden border-y border-white/10">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[59, 130, 246],[139, 92, 246]]}
            opacities={[0.2,0.2,0.2,0.3,0.3,0.4,0.6,0.8,0.9,1]}
            dotSize={2}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">The era of the Paperwork Doctor is over.</h3>
                <p className="mt-1 max-w-2xl text-white/70">The era of the Ambient Physician has begun.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" /> Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Bento Grid */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        <div className="mb-20">
          <h2 className="text-5xl sm:text-7xl font-light text-white mb-6 tracking-tighter">
            Three products.<br />
            <span className="text-white/40">One seamless experience.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-xl font-light leading-relaxed">
            The backbone. The interface. The intelligence. Working in perfect harmony.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-4 gap-4 h-auto md:h-[800px]">
          {/* ClinicalOS - Large Left Card */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium text-white mb-3">ClinicalOS</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                The backbone. A beautiful, radical reimagining of practice management.
              </p>
            </div>
            <Button 
              variant="link" 
              className="text-white/70 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit" 
              onClick={() => window.location.assign('/contact')}
            >
              Request Access <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* The Interface - Tall Right Card with Image */}
          <div className="md:col-span-3 md:row-span-4 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
            <div className="p-8 pb-2">
              <h3 className="text-2xl font-medium text-white mb-3">The Interface</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                A discreet, clip-on engine that turns conversation into care.
              </p>
            </div>
            {/* Hardware Image Preview */}
            <div className="flex-1 relative overflow-hidden border-t border-white/5">
              <img
                src="/img/hardwarepreview.png"
                alt="The Interface Hardware"
                className="w-full h-full object-cover object-bottom"
              />
              <div 
                className="absolute inset-0" 
                style={{ background: 'linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 30%, rgba(0, 0, 0, 0.4) 55%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)' }}
              />
            </div>
            <div className="p-8 pt-4">
              <Button 
                variant="link" 
                className="text-white/70 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit" 
                onClick={() => window.open('https://calendly.com/hello-perkily', '_blank')}
              >
                Request Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Fleming - Bottom Left Card */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium text-white mb-3">Fleming</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                The intelligence. A medical-grade AI trained to think like a physician and care like a human.
              </p>
            </div>
            <Button 
              variant="link" 
              className="text-white/70 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit" 
              onClick={() => window.open('https://askfleming.perkily.io', '_blank')}
            >
              Try Fleming <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>

      {/* Fleming Section - New Features Style */}
      <section id="fleming" className="mx-auto max-w-7xl">
        <Features />
      </section>

      {/* ClinicalOS Features Section */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">ClinicalOS</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Design for Doctors. Not Data Entry.</h2>
          <p className="mt-2 text-white/70">Most systems were built for billing. ClinicalOS was built for healing. It's a unified workspace that predicts your needs, automates your billing, and clears your schedule—all before you finish your morning rounds.</p>
        </div>
        <div className="mt-10">
          <GlowingEffectDemo />
        </div>
      </section>

      {/* The Interface Section - Sleek with Text Reveal */}
      <section id="wearable" className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-8">The Interface</span>
          <h2 className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl mb-12 leading-tight">
            The End of the Keyboard.
          </h2>
        </div>
        
        {/* Text Reveal Component with Scroll-Synced Image */}
        <InterfaceTextAndImage />
      </section>


      {/* Blog section - Sleek redesign */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
            From the journal
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Ideas for better care
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            Thoughtful product updates, design notes, and platform thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tag: 'Product',
              title: 'Meet Fleming — guidance that earns your trust',
              excerpt:
                'Why we built Fleming the way we did: careful by default, grounded in safety checks, and woven into the care journey.',
              date: 'Sep 2024',
              href: '/blog',
            },
            {
              tag: 'Design',
              title: 'Designing for calm in healthcare software',
              excerpt:
                'Interfaces that reduce cognitive load help everyone — patients, clinicians, students. Here\'s how we think about it.',
              date: 'Aug 2024',
              href: '/blog',
            },
            {
              tag: 'Platform',
              title: 'Rewards that change behaviour (without noise)',
              excerpt:
                'Building a rewards system that\'s fair, transparent, and genuinely useful — not just another points program.',
              date: 'Jul 2024',
              href: '/blog',
            },
          ].map((post, i) => (
                  <a
                    key={i}
                    href={post.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 text-xs text-white/60 mb-4">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide font-medium">{post.tag}</span>
                  <span className="text-white/40">{post.date}</span>
                      </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-white/90 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{post.excerpt}</p>
                      </div>
              <div className="mt-6 inline-flex items-center text-sm text-white/70 group-hover:text-white transition-colors">
                Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>

        <div className="mt-12 flex items-center justify-center">
                <a href="/blog">
            <button className="border border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-full px-6 py-2 text-sm font-medium transition-colors">
                    View all posts
            </button>
                </a>
              </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;