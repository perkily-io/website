import React, { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { HeroSection } from '@/components/ui/hero-section-5';
import { Button } from '@/components/ui/button';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { ArrowRight } from 'lucide-react';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { Features } from '@/components/ui/features-6';
import { motion, useScroll, useTransform } from 'framer-motion';
import { blogPosts } from './blogData';

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

const homepageFaqItems = [
  {
    question: 'What are AI-powered healthcare solutions at Perkily?',
    answer: 'Perkily combines clinical documentation, operational workflows, and decision support into one AI-powered platform for modern healthcare practices.'
  },
  {
    question: 'How does Perkily support faster clinical decision-making?',
    answer: 'Perkily surfaces relevant context in real time, structures visit data, and helps clinicians move from conversation to actionable documentation faster.'
  },
  {
    question: 'Does Perkily replace clinician judgement?',
    answer: 'No. Perkily is AI-assisted and supports the care team, but clinical review and final decisions remain in provider control.'
  },
  {
    question: 'Can Perkily work with existing EHR and billing workflows?',
    answer: 'Yes. Perkily is designed to connect into existing systems and produce structured, claim-ready outputs that reduce duplicate work.'
  },
  {
    question: 'Is Perkily built for growing healthcare organizations?',
    answer: 'Yes. Perkily is built for both solo operators and multi-location teams, with workflows that scale across clinics and roles.'
  }
];

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      <SEO 
        title="Perkily - AI-Powered Healthcare Solutions"
        description="Perkily is an AI-powered practice management system for modern healthcare practices, helping teams move from conversation to structured documentation and claim-ready outputs."
        keywords="AI-powered healthcare solutions, healthcare AI platform, real-time data analysis, EHR integration, clinical intelligence, Perkily"
        canonical="https://www.perkily.io/"
        faqItems={homepageFaqItems}
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
                <h2 className="text-2xl font-semibold tracking-tight">Why Healthcare Providers Choose Perkily</h2>
                <p className="mt-1 max-w-2xl text-white/70">Perkily delivers AI-powered workflows that reduce admin burden, improve note quality, and support faster claims while keeping clinicians in control.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" /> Live
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-4 px-6 pt-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-lg font-medium text-white">Faster Clinical Decision-Making</h3>
            <p className="mt-2 text-sm text-white/60">See critical context as the encounter unfolds, so teams can evaluate risk sooner and choose next steps with confidence.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-lg font-medium text-white">Improved Patient Outcomes</h3>
            <p className="mt-2 text-sm text-white/60">Support better follow-through with cleaner documentation, safer handoffs, and timely interventions across the care journey.</p>
          </div>
        </div>
      </section>

      {/* Products Section - Bento Grid */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        <div className="mb-20">
          <h2 className="text-5xl sm:text-7xl font-light text-white mb-6 tracking-tighter">
            Key Features of Our AI Healthcare Platform
          </h2>
          <p className="text-xl text-white/60 max-w-xl font-light leading-relaxed">
            From real-time intelligence to connected operations, Perkily helps teams finish the clinical job, not just document the visit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-4 gap-4 h-auto md:h-[800px]">
          {/* ClinicalOS - Large Left Card */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium text-white mb-3">AI-Native Medical Billing</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                From documentation to claim-ready submission with built-in validation and faster reimbursement cycles.
              </p>
            </div>
            <Button 
              variant="link" 
              className="text-white/70 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit" 
              onClick={() => window.location.assign('/clinicalos')}
            >
              Explore ClinicalOS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Unified operations - Tall Right Card */}
          <div className="md:col-span-3 md:row-span-4 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col p-8">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">Unified Practice Operations</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  One platform for scheduling, patient management, clinical notes, claims, and analytics. Reduce context switching and keep your team aligned from front desk to billing.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>· Appointments &amp; calendar</li>
                  <li>· Patient CRM &amp; history</li>
                  <li>· Documentation to claims</li>
                  <li>· Analytics &amp; insights</li>
                </ul>
              </div>
              <Button 
                variant="link" 
                className="text-white/70 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit mt-6" 
                onClick={() => window.location.assign('/clinicalos')}
              >
                Explore ClinicalOS <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Fleming - Bottom Left Card */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium text-white mb-3">Ambient Clinical Intelligence</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Evidence-visible AI built for workflow completion, with safety boundaries and clinician oversight at every step.
              </p>
            </div>
            <Button 
              variant="link" 
              className="text-white/70 pl-0 hover:text-white transition-colors text-sm p-0 h-auto w-fit" 
              onClick={() => window.location.assign('/fleming')}
            >
              Explore Fleming <ArrowRight className="ml-2 h-4 w-4" />
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
          <p className="mt-2 text-white/70">Most systems were built for billing teams. ClinicalOS is the practice management system built for the encounter: from conversation to structured clinical documentation and claim-ready outputs, with provider control throughout.</p>
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
            Data-driven ideas for better care
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            Research-backed updates, implementation guides, and practical insights for healthcare AI teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 text-xs text-white/60 mb-4">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide font-medium">{post.tag}</span>
                  <span className="text-white/40">{post.displayDate}</span>
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
                    Read all articles
            </button>
                </a>
              </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Frequently Asked Questions About AI-Powered Healthcare Solutions
          </h2>
          <p className="text-lg text-white/60 font-light mb-10">
            Clear answers for clinical teams evaluating AI-assisted workflows in real-world care environments.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {homepageFaqItems.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-medium text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;