import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import CTAGalleryDemo from '@/components/ui/cta-gallery-demo';
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
  Heart
} from 'lucide-react';

// FAQ Section for SEO
const PerkilyProFAQ = () => (
  <section className="py-16 px-4 sm:px-6 bg-black border-t border-white/5">
    <div className="container max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="q1">
          <AccordionTrigger className="text-lg font-semibold text-emerald-400">How do AI clinical notes work?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Record the consultation and Perkily automatically transcribes it into structured SOAP notes. You can review, edit, and publish to the patient record in seconds.
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
          <AccordionTrigger className="text-lg font-semibold text-emerald-400">Is Perkily compliant and secure?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Data is encrypted in transit and at rest. We follow HIPAA-style safeguards and regional privacy requirements for South African healthcare.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q5">
          <AccordionTrigger className="text-lg font-semibold text-emerald-400">Can Perkily replace my practice management system?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Yes. Perkily includes appointments, patient CRM, sales, inventory, billing, tasks, analytics, and a loyalty program in one platform.
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

// Hero Section
const PerkilyProHero = () => (
  <section className="relative bg-black pt-24">
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          AI clinical notes, instant claims, and practice management in one.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Record the consultation, receive SOAP notes automatically, get diagnostic insights, and submit medical aid claims instantly. Simple, sleek, and secure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#00A3FF] hover:bg-[#0090FF] text-white font-semibold px-8 py-3 text-lg">
            Start free
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-3 text-lg">
            Book a demo
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2"><Mic className="w-4 h-4 text-[#00A3FF]" /> Voice to SOAP notes</div>
          <div className="flex items-center gap-2"><Brain className="w-4 h-4 text-[#00A3FF]" /> Diagnostic reasoning</div>
          <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-[#00A3FF]" /> Automated claims</div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#00A3FF]" /> Secure by design</div>
        </div>
      </div>
    </div>
  </section>
);

// Media showcase
const MediaShowcase = () => (
  <section className="py-16 bg-black">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">See it in action</h2>
        <p className="text-gray-300 text-center mb-10">Watch a quick demo and browse screenshots of AI notes, reasoning, and claims.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Demo video placeholder */}
          <div className="rounded-lg border border-white/10 bg-neutral-950 p-3">
            <AspectRatio ratio={16 / 9}>
              <div className="w-full h-full rounded-md bg-black/60 flex items-center justify-center relative">
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/15 transition-colors">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </button>
                <span className="sr-only">Play demo</span>
                <div className="text-gray-400 text-sm">Demo video placeholder</div>
              </div>
            </AspectRatio>
          </div>

          {/* Screenshot grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              '/img/app.perkily.io_(iPhone 12 Pro).png',
              '/img/app.perkily.io_(iPhone 12 Pro) (1).png',
              '/img/app.perkily.io_(iPhone 12 Pro).png',
              '/img/app.perkily.io_(iPhone 12 Pro) (1).png'
            ].map((src, idx) => (
              <div key={idx} className="rounded-lg border border-white/10 bg-neutral-950 p-2">
                <AspectRatio ratio={16 / 10}>
                  <img src={src} alt={`Perkily screenshot ${idx + 1}`} className="w-full h-full object-cover rounded" />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// How it works
const HowItWorks = () => (
  <section className="py-16 bg-neutral-950">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[{
            icon: <Mic className="w-5 h-5 text-[#00A3FF]" />, title: 'Record', desc: 'Capture the consultation on web or mobile.'
          }, {
            icon: <FileText className="w-5 h-5 text-[#00A3FF]" />, title: 'SOAP notes', desc: 'Automatic, structured SOAP with key highlights.'
          }, {
            icon: <Brain className="w-5 h-5 text-[#00A3FF]" />, title: 'Reasoning', desc: 'Differentials, risks, and next-best questions.'
          }, {
            icon: <CreditCard className="w-5 h-5 text-[#00A3FF]" />, title: 'Claims', desc: 'Codes populated and submitted instantly.'
          }].map((step) => (
            <div key={step.title} className="rounded-lg border border-white/10 bg-black p-5">
              <div className="flex items-center gap-2 text-white mb-2">
                {step.icon}
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
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

// Final CTA Section
const FinalCTASection = () => (
  <section className="py-16 bg-black">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get started with Perkily Pro</h2>
        <p className="text-gray-300 mb-8">Start with AI clinical notes and automated claims — expand into full practice management whenever you’re ready.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 text-lg">
            Start free
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-3 text-lg">
            Book a demo
          </Button>
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
        title="Perkily Pro | AI Clinical Notes, Instant Claims, Practice Management"
        description="Record patient conversations, get automatic SOAP notes, see diagnostic insights, and submit medical aid claims instantly. Plus full practice management—appointments, patients, sales, inventory, billing, and rewards."
        keywords="AI clinical notes, SOAP notes, diagnostic reasoning, automated medical aid claims, instant claim responses, practice management, appointments, patient management, inventory, sales, billing, healthcare software, South Africa, doctor software, practice loyalty rewards"
        canonical="https://www.perkily.io/perkily-pro"
      />
      <PerkilyProHero />
      <HowItWorks />
      <MediaShowcase />
      <CTAGalleryDemo />
      <CorePillars />
      <PracticeManagement />
      <RewardsSection />
      <ROISection />
      <FinalCTASection />
      <PerkilyProFAQ />
      <Footer />
    </main>
  );
};

export default PerkilyPro; 