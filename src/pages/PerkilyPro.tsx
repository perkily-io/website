import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight';
import { SplineScene } from '@/components/ui/spline';
import DisplayCards from '@/components/ui/display-cards';
import { Features } from '@/components/ui/features-8';
import { AppreciationEngine } from '@/components/ui/features-11';
import DatabaseWithRestApi from '@/components/ui/database-with-rest-api';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  Mic,
  FileText,
  Brain,
  Shield,
  Clock,
  Zap,
  CheckCircle,
  Gift,
  Users,
  Calendar,
  TrendingDown,
  Package,
  CreditCard,
  BarChart3,
  Play,
  Heart,
  ArrowRight,
  Send,
  Phone,
  Box,
  Sparkles,
  Lock
} from 'lucide-react';

// FAQ Section for SEO
const ClinicalOSFAQ = () => (
  <section className="py-16 px-4 sm:px-6 bg-black border-t border-white/5">
    <div className="container max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="q1">
          <AccordionTrigger className="text-lg font-semibold text-emerald-400">How do AI clinical notes work?</AccordionTrigger>
          <AccordionContent className="text-white/70">
              Record the consultation and ClinicalOS automatically transcribes it into structured SOAP notes. You can review, edit, and publish to the patient record in seconds.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger className="text-lg font-semibold text-emerald-400">What insights do I get from diagnostic reasoning?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Our model highlights differential diagnoses, flags missing data, and surfaces next-best questions, helping you document reasoning and reduce oversight risk.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger className="text-lg font-semibold text-emerald-400">Are medical aid claims really automated?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Yes. Claims are generated directly from clinical notes with correct codes and submitted instantly. AI validations reduce rejections and speed up responses.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
            <AccordionTrigger className="text-lg font-semibold text-emerald-400">Is ClinicalOS compliant and secure?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Data is encrypted in transit and at rest. We follow HIPAA-style safeguards and regional privacy requirements for South African healthcare.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q5">
            <AccordionTrigger className="text-lg font-semibold text-emerald-400">Can ClinicalOS replace my practice management system?</AccordionTrigger>
          <AccordionContent className="text-white/70">
              Yes. ClinicalOS includes appointments, patient CRM, sales, inventory, billing, tasks, analytics, and a loyalty program in one platform.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do AI clinical notes work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Record the consultation and Perkily automatically transcribes it into structured SOAP notes. You can review, edit, and publish to the patient record in seconds.'
              }
            },
            {
              '@type': 'Question',
              name: 'What insights do I get from diagnostic reasoning?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Our model highlights differential diagnoses, flags missing data, and surfaces next-best questions, helping you document reasoning and reduce oversight risk.'
              }
            },
            {
              '@type': 'Question',
              name: 'Are medical aid claims really automated?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Yes. Claims are generated directly from clinical notes with correct codes and submitted instantly. AI validations reduce rejections and speed up responses.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is Perkily compliant and secure?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Data is encrypted in transit and at rest. We follow HIPAA-style safeguards and regional privacy requirements for South African healthcare.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can Perkily replace my practice management system?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Yes. Perkily includes appointments, patient CRM, sales, inventory, billing, tasks, analytics, and a loyalty program in one platform.'
              }
            }
          ]
        })}
      </script>
    </div>
  </section>
);

// Hero Section with Spline 3D
const ClinicalOSHero = () => (
  <section className="relative bg-black w-full min-h-screen flex items-center pt-0 pb-20 overflow-hidden">
    <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="relative w-full">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        {/* Robot - Positioned behind text at top */}
        <div className="absolute top-0 right-0 lg:right-[-5%] xl:right-0 w-full lg:w-[60%] xl:w-[55%] h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] z-0 pointer-events-none">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        
        {/* Text content - Top on mobile, left on desktop */}
        <div className="relative z-10 w-full lg:max-w-[600px] xl:max-w-[650px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start pt-0 lg:pt-[120px] px-4 sm:px-6 -translate-y-[70px] lg:translate-y-0" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif' }}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-light tracking-[-0.02em] text-white mb-4 sm:mb-6 leading-[1.05] text-center lg:text-left" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
            ClinicalOS
        </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white/60 mb-0 leading-[1.4] font-light tracking-[-0.01em] max-w-2xl text-center lg:text-left" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
            The Operating System of the Modern Clinic.
          </p>
        </div>

        {/* Buttons - At robot waist on mobile, below text on desktop */}
        <div className="relative z-10 w-full lg:max-w-[600px] xl:max-w-[650px] mx-auto lg:mx-0 flex flex-col sm:flex-row gap-4 justify-center items-center lg:items-start px-4 sm:px-6 absolute top-[250px] sm:top-[300px] lg:relative lg:top-auto lg:pt-8 lg:-ml-[72px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif' }}>
          <a href="/contact" className="w-full sm:w-auto">
            <Button className="bg-white hover:bg-white/90 text-black font-medium px-10 py-6 text-base rounded-full w-full sm:w-auto transition-all shadow-lg hover:shadow-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}>
              Request Access
            </Button>
          </a>
          <a href="/contact" className="w-full sm:w-auto">
            <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-10 py-6 text-base rounded-full w-full sm:w-auto transition-all hover:border-white/30" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}>
              Book a demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Streaming Note Component - Faster, Sleeker, Darker, Smaller
const StreamingNote = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullNote = `SUBJECTIVE:
Patient presents with acute onset of chest pain, 
radiating to left arm. Pain started 2 hours ago 
during physical activity. Describes as "pressure" 
and "tightness." Associated with mild shortness 
of breath. Denies nausea or diaphoresis.

OBJECTIVE:
Vital signs stable. Heart rate regular, no murmurs. 
Lungs clear bilaterally. No peripheral edema.

ASSESSMENT:
1. Chest pain, likely musculoskeletal vs cardiac
2. Rule out acute coronary syndrome

PLAN:
1. EKG and cardiac enzymes
2. Aspirin 325mg
3. Follow-up in 24 hours`;

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;
    
    const typeNextChar = () => {
      if (currentIndex < fullNote.length) {
        setDisplayedText(fullNote.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeNextChar, 100); // A little faster: 100ms per character
      } else {
        // Reset after a pause
        timeoutId = setTimeout(() => {
          setDisplayedText('');
          currentIndex = 0;
          typeNextChar();
        }, 20000);
      }
    };

    typeNextChar();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullNote]);

  return (
    <div className="w-full h-full bg-black/80 backdrop-blur-md rounded-2xl border border-white/5 p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
          <span className="text-[10px] text-white/40 font-mono tracking-wider uppercase">Generating</span>
        </div>
        <div className="font-mono text-[11px] text-white/50 leading-relaxed whitespace-pre-wrap overflow-y-auto flex-1" style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace' }}>
          {displayedText}
          <span className="inline-block w-[1px] h-3 bg-white/60 ml-0.5 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// Drug Safety Animation Component - Medication list with safety check animation
const DrugSafetyAnimation = () => {
  const [checkedMeds, setCheckedMeds] = useState<Set<number>>(new Set());
  const [currentChecking, setCurrentChecking] = useState<number | null>(0);
  
  const medications = [
    { name: 'Lisinopril', dose: '10mg', status: 'safe' },
    { name: 'Metformin', dose: '500mg', status: 'safe' },
    { name: 'Aspirin', dose: '81mg', status: 'safe' },
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let checkIndex = 0;

    const checkMedication = () => {
      if (checkIndex < medications.length) {
        setCurrentChecking(checkIndex);
        timeoutId = setTimeout(() => {
          setCheckedMeds((prev) => new Set(prev).add(checkIndex));
          setCurrentChecking(null);
          checkIndex++;
          if (checkIndex < medications.length) {
            setTimeout(checkMedication, 75000);
          } else {
            // Reset after all checked
            setTimeout(() => {
              setCheckedMeds(new Set());
              checkIndex = 0;
              checkMedication();
            }, 200000);
          }
        }, 150000);
      }
    };

    checkMedication();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col justify-end gap-2">
      {medications.map((med, index) => {
        const isChecking = currentChecking === index;
        const isChecked = checkedMeds.has(index);
        
        return (
          <div
            key={index}
            className={`
              rounded-lg border bg-white/[0.02] backdrop-blur-sm px-3 py-2 transition-all duration-300
              ${isChecking ? 'border-emerald-400/30 bg-emerald-400/5' : ''}
              ${isChecked ? 'border-white/10 bg-white/[0.03]' : 'border-white/5'}
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`
                  w-1.5 h-1.5 rounded-full transition-all duration-300
                  ${isChecking ? 'bg-emerald-400/60 animate-pulse' : isChecked ? 'bg-emerald-400/40' : 'bg-white/20'}
                `} />
                <div>
                  <div className="text-[11px] text-white/80 font-light">{med.name}</div>
                  <div className="text-[9px] text-white/40 font-light">{med.dose}</div>
                </div>
              </div>
              {isChecking && (
                <div className="text-[9px] text-emerald-400/60 font-mono">Checking...</div>
              )}
              {isChecked && !isChecking && (
                <div className="text-[9px] text-emerald-400/70 font-mono">Safe</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// E-Script Animation Component - Using DisplayCards
const EScriptAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prescriptions = [
    {
      icon: <Send className="size-4 text-blue-300" />,
      title: "Lisinopril 10mg",
      description: "CVS Pharmacy • Downtown",
      date: "Sending...",
      iconClassName: "text-blue-400",
      titleClassName: "text-blue-400",
    },
    {
      icon: <Send className="size-4 text-blue-300" />,
      title: "Metformin 500mg",
      description: "Walgreens • Main St",
      date: "Delivered",
      iconClassName: "text-emerald-400",
      titleClassName: "text-emerald-400",
    },
    {
      icon: <Send className="size-4 text-blue-300" />,
      title: "Aspirin 81mg",
      description: "Rite Aid • Oak Ave",
      date: "Pending",
      iconClassName: "text-blue-400",
      titleClassName: "text-blue-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % prescriptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cards = prescriptions.map((prescription, index) => ({
    ...prescription,
    className: index === 0
      ? "[grid-area:stack] hover:-translate-y-2 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0"
      : index === 1
      ? "[grid-area:stack] translate-x-4 translate-y-2 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0"
      : "[grid-area:stack] translate-x-8 translate-y-4 hover:translate-y-2",
  }));

  return (
    <div className="relative h-full w-full flex items-end justify-end overflow-hidden">
      <div className="scale-[0.5] sm:scale-[0.6] md:scale-[0.65] lg:scale-75 origin-bottom-right translate-x-[10px] sm:translate-x-[30px] md:translate-x-[50px] lg:translate-x-[60px]">
        <DisplayCards cards={cards} />
      </div>
    </div>
  );
};

// The Ambient Workflow
const AmbientWorkflow = () => (
  <section className="py-24 sm:py-32 bg-black">
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-white mb-6 leading-[1.1]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
            Invisible Scribing.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light tracking-[-0.01em]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
            Through the Link wearable, ClinicalOS listens. Using local-first AI, it captures the nuance of your conversation and drafts a complete SOAP note before you've finished the visit.
          </p>
        </div>

        {/* Bento Grid - Sleek Apple/Tesla Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
          {/* Large Tile - Streaming Note (8 columns) - Smaller */}
          <div className="lg:col-span-8 rounded-2xl border border-white/5 bg-black/60 backdrop-blur-xl overflow-hidden relative group hover:border-white/10 transition-all duration-500 h-[400px] lg:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.03),transparent_60%)]" />
            <StreamingNote />
          </div>

          {/* Right Column - Two Small Tiles Stacked (4 columns) - Symmetrical */}
          <div className="lg:col-span-4 flex flex-col gap-3 lg:gap-4">
            {/* Small Tile 1 - Drug Safety Checks */}
            <div className="flex-1 rounded-2xl border border-white/5 bg-black/60 backdrop-blur-xl p-5 flex flex-col group hover:border-white/10 hover:bg-black/70 transition-all duration-500 relative overflow-hidden h-[220px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-base font-light text-white/90 mb-1.5 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
                    Drug Safety Checks
                  </h3>
                  <p className="text-[11px] text-white/40 leading-snug font-light">
                    Real-time interaction alerts and dosage validations.
                  </p>
                </div>
                <div className="flex-1 flex items-end">
                  <DrugSafetyAnimation />
                </div>
              </div>
          </div>

            {/* Small Tile 2 - One-Click E-Scripts */}
            <div className="flex-1 rounded-2xl border border-white/5 bg-black/60 backdrop-blur-xl p-0 flex flex-col group hover:border-white/10 hover:bg-black/70 transition-all duration-500 relative overflow-hidden h-[220px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 p-5 pb-0">
                  <h3 className="text-base font-light text-white/90 mb-1.5 tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
                    One-Click E-Scripts
                  </h3>
                  <p className="text-[11px] text-white/40 leading-snug font-light">
                    Prescriptions sent directly to pharmacy.
                  </p>
                </div>
                <div className="flex-1 flex items-end overflow-hidden">
                  <EScriptAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// The Core Philosophy
const CorePhilosophy = () => (
  <section className="relative w-full min-h-screen bg-black overflow-hidden">
    {/* Video Background */}
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-30"
        style={{ filter: 'grayscale(100%) brightness(0.7)' }}
      >
        <source src="/img/doctor-patient-encounter.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
              </div>
    
    {/* Content */}
    <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white mb-8 leading-[1.1]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
            Built for the encounter.<br />Not the entry.
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light tracking-[-0.01em]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
            Most systems were built for billing departments. We built ClinicalOS for the exam room. It is an ambient workspace that anticipates your needs, automating the administrative burden so you can stay in the moment.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Core pillars
const CorePillars = () => (
  <section className="py-16 bg-black">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-white/10 bg-neutral-950 p-6">
          <div className="flex items-center gap-2 text-white mb-2">
            <Mic className="w-5 h-5 text-[#00A3FF]" />
            <h3 className="font-semibold">AI Clinical Notes</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">Voice-to-SOAP with sections for Subjective, Objective, Assessment, and Plan—ready for your EHR.</p>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Auto-capture vitals, meds, allergies</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Redaction for PII on request</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Publish with one click</li>
          </ul>
        </div>
        <div className="rounded-lg border border-white/10 bg-neutral-950 p-6">
          <div className="flex items-center gap-2 text-white mb-2">
            <Brain className="w-5 h-5 text-[#00A3FF]" />
            <h3 className="font-semibold">Diagnostic Insights</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">Structured reasoning to support clinical judgement—differentials, risks, and evidence highlights.</p>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Differential suggestions with confidence</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Missing-info prompts</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Audit-ready reasoning trail</li>
          </ul>
        </div>
        <div className="rounded-lg border border-white/10 bg-neutral-950 p-6">
          <div className="flex items-center gap-2 text-white mb-2">
            <CreditCard className="w-5 h-5 text-[#00A3FF]" />
            <h3 className="font-semibold">Automated Claims</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">Claims are generated from notes, validated by AI, and submitted instantly to medical aids.</p>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Fewer rejections with pre-checks</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Instant responses where supported</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00A3FF]" /> Transparent status tracking</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Practice management
const PracticeManagement = () => (
  <section className="py-16 bg-neutral-950">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Practice management, included</h2>
        <p className="text-gray-300">All the tools you expect—connected to notes and claims so your workflow just flows.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[{
          icon: <Calendar className="w-5 h-5 text-[#00A3FF]" />, title: 'Appointments', desc: 'Calendar, reminders, no-show reduction'
        }, {
          icon: <Users className="w-5 h-5 text-[#00A3FF]" />, title: 'Patient CRM', desc: 'Profiles, history, documents'
        }, {
          icon: <Package className="w-5 h-5 text-[#00A3FF]" />, title: 'Inventory & Sales', desc: 'Products, stock, invoicing'
        }, {
          icon: <CreditCard className="w-5 h-5 text-[#00A3FF]" />, title: 'Billing', desc: 'Medical aid + private billing'
        }, {
          icon: <BarChart3 className="w-5 h-5 text-[#00A3FF]" />, title: 'Analytics', desc: 'Revenue, claims, efficiency'
        }, {
          icon: <Shield className="w-5 h-5 text-[#00A3FF]" />, title: 'Compliance', desc: 'Permissions, audit trail, security'
        }].map((f) => (
          <div key={f.title} className="rounded-lg border border-white/10 bg-black p-5 text-left">
            <div className="flex items-center gap-2 text-white mb-2">
              {f.icon}
              <h3 className="font-semibold">{f.title}</h3>
            </div>
            <p className="text-sm text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Rewards
const RewardsSection = () => (
  <section className="py-16 bg-black">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Practice loyalty rewards</h2>
          <p className="text-gray-300 mb-10">Patients earn points after each appointment and redeem them for desirable rewards—driving satisfaction and fewer no-shows through our marketplace.</p>
        </div>

        {/* Sleek media slider showcasing reward redemptions */}
        <div className="relative">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {[
                { label: 'Food delivery', img: 'https://source.unsplash.com/1600x900/?delivery,food,voucher' },
                { label: 'Retail & groceries', img: 'https://source.unsplash.com/1600x900/?shopping,giftcard' },
                { label: 'Fuel & mobility', img: 'https://source.unsplash.com/1600x900/?fuel,gas,car' },
                { label: 'Entertainment', img: 'https://source.unsplash.com/1600x900/?movie,tickets,fun' },
                { label: 'Travel & experiences', img: 'https://source.unsplash.com/1600x900/?travel,experience' },
                { label: 'Wellness & fitness', img: 'https://source.unsplash.com/1600x900/?fitness,wellness' }
              ].map((s, idx) => (
                <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-lg border border-white/10 bg-neutral-950 p-2">
                    <AspectRatio ratio={16 / 9}>
                      <div className="w-full h-full relative overflow-hidden rounded-md">
                        <img src={s.img} alt={`${s.label} reward`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                          <span className="text-white text-sm font-medium">{s.label}</span>
                          <span className="text-white/70 text-xs">Redeem with points</span>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black/40 border-white/20 text-white hover:bg-black/60" />
            <CarouselNext className="bg-black/40 border-white/20 text-white hover:bg-black/60" />
          </Carousel>
        </div>

        {/* Value to your practice */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[ 
            'Fewer no-shows with post-visit rewards',
            'Higher return visits and continuity of care',
            'Delight patients without extra admin'
          ].map((v) => (
            <div key={v} className="rounded-lg border border-white/10 bg-neutral-950 p-4 flex items-center justify-center text-center text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-[#00A3FF] mr-2" /> {v}
            </div>
          ))}
        </div>

        {/* Outcomes that matter */}
        <div className="mt-10 rounded-xl border border-white/10 bg-neutral-950 p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <TrendingDown className="w-5 h-5 text-[#00A3FF]" />
              <div>
                <div className="text-white font-semibold">22% fewer</div>
                <div className="text-xs text-gray-400">No-shows</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#00A3FF]" />
              <div>
                <div className="text-white font-semibold">18% higher</div>
                <div className="text-xs text-gray-400">Return visits</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#00A3FF]" />
              <div>
                <div className="text-white font-semibold">+12 pts</div>
                <div className="text-xs text-gray-400">Patient satisfaction (NPS)</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#00A3FF]" />
              <div>
                <div className="text-white font-semibold">0 hours</div>
                <div className="text-xs text-gray-400">Extra admin required</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ROI Section
const ROISection = () => (
  <section className="py-16 bg-neutral-950">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real ROI for your practice</h2>
        <p className="text-gray-300 mb-10">Tangible savings from AI notes, automated claims, and an all-in-one platform.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-lg border border-white/10 bg-black p-6">
            <div className="text-2xl md:text-3xl font-bold text-[#00A3FF] mb-1">50%</div>
            <div className="text-gray-300 text-sm">Cheaper than legacy suites</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black p-6">
            <div className="text-2xl md:text-3xl font-bold text-[#00A3FF] mb-1">Instant</div>
            <div className="text-gray-300 text-sm">Claim responses where supported</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black p-6">
            <div className="text-2xl md:text-3xl font-bold text-[#00A3FF] mb-1">70%</div>
            <div className="text-gray-300 text-sm">Faster claim processing</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-black p-6">
            <div className="text-2xl md:text-3xl font-bold text-[#00A3FF] mb-1">30+ hrs</div>
            <div className="text-gray-300 text-sm">Saved/month on documentation</div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2"><TrendingDown className="w-4 h-4 text-[#00A3FF]" /> Lower operating costs</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#00A3FF]" /> Faster reimbursements</div>
          <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#00A3FF]" /> Less admin overhead</div>
        </div>
      </div>
    </div>
  </section>
);

// Removed generic partner grid to keep the page focused and sleek

// Removed generic integrations section to simplify layout

// Removed personas grid to keep the page concise

// Replaced ROI section above

// Optional testimonials removed for brevity

// Section 5: The Appreciation Engine - Using features-11 component

// Section 6: Security (The "Privacy Manifesto")
const PrivacyManifesto = () => (
  <section className="relative w-full min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-black py-32 sm:py-40 overflow-hidden">
    {/* Brushed Metal Background Effect */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px),
          repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)
        `,
        backgroundSize: '40px 40px'
      }}
    />
    
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
      {/* Header */}
      <div className="mb-24 sm:mb-32 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white mb-8 leading-[1.1]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
          Privacy that exceeds the requirement.
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light tracking-[-0.01em]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
          We believe in Zero-Knowledge architecture. Your patient data is anonymized on your device before it ever touches the cloud. What happens in your clinic stays in your clinic.
        </p>
      </div>

      {/* Database Component - Privacy Flow Visualization */}
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="w-full max-w-[500px]">
          <DatabaseWithRestApi
            title="Zero-Knowledge Architecture: Data flows encrypted from device to cloud"
            circleText="AES-256"
            lightColor="#00A6F5"
            badgeTexts={{
              first: "CAPTURE",
              second: "ENCRYPT",
              third: "ANONYMIZE",
              fourth: "TRANSMIT"
            }}
            buttonTexts={{
              first: "Local Device",
              second: "Encrypted Cloud"
            }}
            className="mx-auto"
          />
          {/* Flow Explanation */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-xs text-white/40 font-light" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>
              Patient audio captured locally → Encrypted on device → PII anonymized → Securely transmitted to cloud
            </p>
            <p className="text-xs text-white/30 font-light" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>
              The cloud receives only encrypted, anonymized data. Original audio never leaves your device unencrypted.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Billing Section
const BillingSection = () => (
  <section className="relative w-full min-h-screen bg-black py-32 sm:py-40 overflow-hidden">
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
      {/* Header */}
      <div className="mb-24 sm:mb-32 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white mb-8 leading-[1.1]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
          Precision Billing.<br />
          <span className="text-white/40">Zero Leaks.</span>
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light tracking-[-0.01em]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
          ClinicalOS maps clinical encounters to codes with surgical accuracy. From real-time eligibility checks to AI-powered claim generation, we've turned the back office into a high-performance engine.
        </p>
      </div>

      {/* Billing Image - Large Display */}
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden group hover:border-white/20 transition-all duration-500">
          <div className="absolute left-4 top-4 z-10 flex gap-1.5">
            <span className="block size-2.5 rounded-full bg-red-500/80"></span>
            <span className="block size-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="block size-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <img
            src="/img/billing.png"
            className="w-full h-auto object-contain"
            alt="Precision Billing Dashboard"
          />
        </div>
      </div>
    </div>
  </section>
);

// Final CTA Section
const FinalCTASection = () => (
  <section className="relative w-full min-h-screen bg-black py-32 sm:py-40 overflow-hidden border-t border-white/5">
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white mb-8 leading-[1.1]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
          Ready to transform<br />your practice?
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light tracking-[-0.01em] mb-12" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
          Start with AI clinical notes and automated claims. Expand into full practice management whenever you're ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contact">
            <Button className="bg-white hover:bg-white/90 text-black font-medium px-10 py-6 text-base rounded-full transition-all shadow-lg hover:shadow-xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}>
              Request Access
            </Button>
          </a>
          <a href="/contact">
            <Button variant="outline" className="border-white/20 hover:bg-white/5 backdrop-blur-sm text-white px-10 py-6 text-base rounded-full transition-all hover:border-white/30" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }}>
              Book a demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Section 7: The Technical Foundation (Specs)
const TechnicalFoundation = () => (
  <section className="relative w-full bg-black py-24 sm:py-32 overflow-hidden border-t border-white/5">
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
      {/* Header */}
      <div className="mb-16 sm:mb-20 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] text-white mb-6 leading-[1.1]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
          The Stack.
        </h2>
      </div>

      {/* Tech Specs - Apple product page style */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-1 border-t border-white/10 pt-8">
          {/* Engine */}
          <div className="flex items-start justify-between py-3 border-b border-white/5">
            <div className="flex-1">
              <h3 className="text-[11px] text-white/40 uppercase tracking-[0.1em] font-medium mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', letterSpacing: '0.12em' }}>
                Engine
              </h3>
            </div>
            <div className="flex-1 text-right">
              <p className="text-[13px] text-white/90 font-light tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Mono", "Monaco", "Menlo", monospace' }}>
                Local-first Whisper.cpp & Llama-3.2
              </p>
            </div>
          </div>

          {/* Security */}
          <div className="flex items-start justify-between py-3 border-b border-white/5">
            <div className="flex-1">
              <h3 className="text-[11px] text-white/40 uppercase tracking-[0.1em] font-medium mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', letterSpacing: '0.12em' }}>
                Security
              </h3>
            </div>
            <div className="flex-1 text-right">
              <p className="text-[13px] text-white/90 font-light tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Mono", "Monaco", "Menlo", monospace' }}>
                AES-256-GCM / TLS 1.3
              </p>
            </div>
          </div>

          {/* Compliance */}
          <div className="flex items-start justify-between py-3">
            <div className="flex-1">
              <h3 className="text-[11px] text-white/40 uppercase tracking-[0.1em] font-medium mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', letterSpacing: '0.12em' }}>
                Compliance
              </h3>
            </div>
            <div className="flex-1 text-right">
              <p className="text-[13px] text-white/90 font-light tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Mono", "Monaco", "Menlo", monospace' }}>
                HIPAA / SOC2 Type II
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const PerkilyPro = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <SEO
        title="ClinicalOS | AI-Powered Practice Management"
        description="Voice to SOAP notes. Diagnostic insights. Automated claims. Complete practice management. All powered by AI."
        keywords="ClinicalOS, AI practice management, clinical notes, SOAP notes, automated claims, diagnostic insights, healthcare software, practice management system"
        canonical="https://www.perkily.io/clinicalos"
      />
      <ClinicalOSHero />
      <CorePhilosophy />
      <AmbientWorkflow />
      <Features />
      <AppreciationEngine />
      <PrivacyManifesto />
      <BillingSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default PerkilyPro; 