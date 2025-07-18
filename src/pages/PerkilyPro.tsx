import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Brain, Calendar, Users, Gift, PhoneCall, Shield, Clock, Zap, Award, CheckCircle, X } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

// FAQ Section for SEO
const PerkilyProFAQ = () => (
  <section className="py-16 px-4 sm:px-6 bg-black border-t border-white/[0.05]">
    <div className="container max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="q1">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">What is a practice management platform?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            A practice management platform is software designed to help doctors and healthcare professionals manage their clinics efficiently. It streamlines appointment scheduling, patient records, billing, communication, and workflow automation—all in one place.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">Why should doctors use Perkily Pro for practice management?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Perkily Pro is built specifically for medical professionals, offering AI-powered clinical notes, automated appointment reminders, patient engagement tools, and secure, HIPAA-compliant data management. It saves time, reduces no-shows, and helps grow your practice.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">Is Perkily Pro HIPAA compliant?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Yes, Perkily Pro is fully HIPAA compliant, ensuring your patient data is secure and protected according to the highest healthcare standards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">Can Perkily Pro help reduce no-shows and improve patient engagement?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Absolutely! Perkily Pro uses AI-powered voice and SMS reminders, as well as a patient rewards system, to keep patients engaged and reduce missed appointments.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q5">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">How do I get started with Perkily Pro?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Simply click the "Start Free Trial" button above or book a demo to see how Perkily Pro can transform your medical practice. Our team will help you onboard and make the most of the platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q6">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">What makes Perkily Pro the best practice management tool?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Perkily Pro tops the list with AI automation, time savings (30+ hours/month on notes), HIPAA compliance, and upcoming medical aid claims—outperforming tools like Kareo or SimplePractice in efficiency and innovation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q7">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">How does Perkily Pro handle medical aid claims?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Medical aid claims and billing are coming soon, with automated processing to simplify submissions and reduce errors for doctors and clinics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q8">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">How much time can AI clinical notes save doctors?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Perkily Pro's AI clinical notes automation saves doctors 30+ hours per month on documentation, allowing more time for patient care and practice growth.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q9">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">Is Perkily Pro better than other practice management platforms?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Yes, Perkily Pro outperforms competitors with AI-powered features, better user experience, HIPAA compliance, and innovative patient engagement tools that other platforms lack.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q10">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">What makes Perkily Pro the best choice for South African doctors?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Perkily Pro is specifically designed for South African healthcare, with local medical aid integration, compliance with local regulations, and features tailored to the unique needs of SA medical practices.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q11">
          <AccordionTrigger className="text-lg font-semibold text-[#00A3FF]">How does Perkily Pro improve patient engagement?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Perkily Pro uses AI-powered reminders, automated communication, and a unique rewards system to keep patients engaged, reducing no-shows and building stronger doctor-patient relationships.
          </AccordionContent>
        </AccordionItem>
       
      </Accordion>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a practice management platform?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A practice management platform is software designed to help doctors and healthcare professionals manage their clinics efficiently. It streamlines appointment scheduling, patient records, billing, communication, and workflow automation—all in one place."
              }
            },
            {
              "@type": "Question",
              "name": "Why should doctors use Perkily Pro for practice management?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Perkily Pro is built specifically for medical professionals, offering AI-powered clinical notes, automated appointment reminders, patient engagement tools, and secure, HIPAA-compliant data management. It saves time, reduces no-shows, and helps grow your practice."
              }
            },
            {
              "@type": "Question",
              "name": "Is Perkily Pro HIPAA compliant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Perkily Pro is fully HIPAA compliant, ensuring your patient data is secure and protected according to the highest healthcare standards."
              }
            },
            {
              "@type": "Question",
              "name": "Can Perkily Pro help reduce no-shows and improve patient engagement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Perkily Pro uses AI-powered voice and SMS reminders, as well as a patient rewards system, to keep patients engaged and reduce missed appointments."
              }
            },
            {
              "@type": "Question",
              "name": "How do I get started with Perkily Pro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Simply click the 'Start Free Trial' button above or book a demo to see how Perkily Pro can transform your medical practice. Our team will help you onboard and make the most of the platform."
              }
            },
            {
              "@type": "Question",
              "name": "What makes Perkily Pro the best practice management tool?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Perkily Pro tops the list with AI automation, time savings (30+ hours/month on notes), HIPAA compliance, and upcoming medical aid claims—outperforming tools like Kareo or SimplePractice in efficiency and innovation."
              }
            },
            {
              "@type": "Question",
              "name": "How does Perkily Pro handle medical aid claims?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Medical aid claims and billing are coming soon, with automated processing to simplify submissions and reduce errors for doctors and clinics."
              }
            },
            {
              "@type": "Question",
              "name": "How much time can AI clinical notes save doctors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Perkily Pro's AI clinical notes automation saves doctors 30+ hours per month on documentation, allowing more time for patient care and practice growth."
              }
            },
            {
              "@type": "Question",
              "name": "Is Perkily Pro better than other practice management platforms?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Perkily Pro outperforms competitors with AI-powered features, better user experience, HIPAA compliance, and innovative patient engagement tools that other platforms lack."
              }
            },
            {
              "@type": "Question",
              "name": "What makes Perkily Pro the best choice for South African doctors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Perkily Pro is specifically designed for South African healthcare, with local medical aid integration, compliance with local regulations, and features tailored to the unique needs of SA medical practices."
              }
            },
            {
              "@type": "Question",
              "name": "How does Perkily Pro improve patient engagement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Perkily Pro uses AI-powered reminders, automated communication, and a unique rewards system to keep patients engaged, reducing no-shows and building stronger doctor-patient relationships."
              }
            },
            {
              "@type": "Question",
              "name": "Can Perkily Pro integrate with existing practice systems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Perkily Pro offers seamless integration with existing practice management systems, electronic health records, and medical billing software to ensure a smooth transition."
              }
            }
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Perkily Pro",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "The best AI-powered practice management tool for doctors in South Africa, featuring clinical notes automation, appointment scheduling, medical aid claims (coming soon), and HIPAA-compliant patient engagement.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          },
          "featureList": [
            "AI Clinical Notes Automation",
            "Medical Aid Claims Processing",
            "HIPAA Compliant Security",
            "Patient Engagement Rewards",
            "Appointment Management",
            "Practice Analytics"
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": "Medical Professionals"
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.perkily.io/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Perkily Pro",
              "item": "https://www.perkily.io/perkily-pro"
            }
          ]
        })}
      </script>
    </div>
  </section>
);

// Perkily Pro Hero Section (mirroring Hero)
const PerkilyProHero = () => (
  <section className="relative min-h-[calc(100vh-4rem)] pt-28 sm:pt-32 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-5 sm:px-6 overflow-hidden">
    {/* Ambient background effects */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 left-1/4 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] bg-[#00A3FF]/5 rounded-full blur-[80px] sm:blur-[150px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] bg-[#00FFB2]/5 rounded-full blur-[80px] sm:blur-[150px] animate-pulse-slow delay-1000"></div>
      <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten"></div>
    </div>
    <div className="container max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
        {/* Left Side - Copy */}
        <div className="relative space-y-6 sm:space-y-8 animate-fade-in z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05]">
            <span className="text-sm text-[#00FFB2]">New</span>
            <span className="text-sm text-white/60">Perkily Pro for Practices</span>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="block">Next-Gen Tools</span>
              <span className="block mt-1 sm:mt-0">for Medical Practices<span className="text-gradient-blue">.</span></span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-lg font-light leading-relaxed">
              AI-powered clinical notes, smart appointment management, and seamless patient engagement—all in one futuristic platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 w-full sm:w-auto pt-2">
            <a 
              href="https://calendly.com/hello-perkily"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#00A3FF] hover:bg-[#0090FF] text-white px-6 py-6 rounded-xl text-base transition-all duration-300 w-full sm:w-auto inline-flex items-center justify-center"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://pro.perkily.io/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/10 hover:bg-white/[0.03] text-white px-6 py-6 rounded-xl text-base w-full sm:w-auto">
                Get Started
              </Button>
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4 sm:pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full ring-2 ring-black bg-gradient-to-r from-[#00A3FF] to-[#0066FF] flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
            <p className="text-sm text-white/60">
              <span className="text-white font-medium">4.9/5</span> from leading practices
            </p>
          </div>
        </div>
        {/* Right Side - App Screenshots */}
        <div className="relative h-[550px] lg:block mt-8 sm:mt-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Pro App */}
            <div className="relative w-[260px] sm:w-64 md:w-72 glass-card rounded-[2rem] p-3 animate-float-slow glow-emerald transform scale-95 sm:scale-100 -rotate-6 translate-x-12 translate-y-4 z-20">
              <div className="relative w-full h-full overflow-hidden rounded-[1.7rem] border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img 
                  src="/img/app.perkily.io_(iPhone 12 Pro).png"
                  alt="Perkily Pro App"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Patient App */}
            <div className="absolute top-0 left-0 w-[260px] sm:w-64 md:w-72 glass-card rounded-[2rem] p-3 animate-float-slow-reverse glow transform scale-95 sm:scale-100 rotate-6 -translate-x-12 -translate-y-4">
              <div className="relative w-full h-full overflow-hidden rounded-[1.7rem] border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img 
                  src="/img/app.perkily.io_(iPhone 12 Pro) (1).png"
                  alt="Perkily Patient App"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Perkily Pro Partners Section (mirroring RewardPartners)
const PerkilyProPartners = () => {
  const partners = [
    { name: 'MediSync', logo: '/logos/medisync.svg' },
    { name: 'ClinicPro', logo: '/logos/clinicpro.svg' },
    { name: 'HealthNet', logo: '/logos/healthnet.svg' },
  ];
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Practice <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#00FFB2]">Partners</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-2xl mx-auto">
            Trusted by innovative clinics and healthcare teams
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {partners.map((partner) => (
            <div key={partner.name} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/10 to-[#00FFB2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="glass-card relative overflow-hidden p-6 sm:p-8 backdrop-blur-xl border border-white/[0.05] rounded-3xl group-hover:border-white/[0.1] transition-all duration-500">
                <div className="flex flex-row items-center gap-4 h-full">
                  {partner.logo && (
                    <div className="relative flex-shrink-0">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-12 sm:h-16 w-auto object-contain"
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                      {partner.name}
                    </h3>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-[#00A3FF]/5 to-[#00FFB2]/5 blur-2xl rounded-full transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Perkily Pro Features Section (mirroring Features)
const PerkilyProFeatures = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />, title: 'Appointment Management', accentColor: 'from-[#00A3FF]/20 to-transparent',
      description: 'Seamlessly schedule, manage, and track appointments. Reduce no-shows and optimize your workflow with real-time updates and reminders.'
    },
    {
      icon: <Users className="w-8 h-8" />, title: 'Patient Management', accentColor: 'from-[#00FFB2]/20 to-transparent',
      description: 'Centralize patient records, notes, and communication. Deliver personalized care and foster stronger patient relationships.'
    },
    {
      icon: <Brain className="w-8 h-8" />, title: 'AI Clinical Notes', accentColor: 'from-[#00A3FF]/20 to-transparent',
      description: 'Save 30+ hours per month with instant, accurate clinical documentation generated during or after each visit.',
    },
    {
      icon: <PhoneCall className="w-8 h-8" />, title: 'AI Voice Reminders', accentColor: 'from-[#00FFB2]/20 to-transparent',
      description: 'Patients receive AI-powered voice calls and reminders, ensuring they never miss an appointment and feel connected to your practice.'
    },
    {
      icon: <Gift className="w-8 h-8" />, title: 'Custom Rewards', accentColor: 'from-[#00A3FF]/20 to-transparent',
      description: 'Boost patient loyalty and engagement with tailored rewards programs unique to your practice.'
    },
    {
      icon: <Calendar className="w-8 h-8" />, title: 'Medical Aid Claims & Billing', accentColor: 'from-[#00FFB2]/20 to-transparent',
      description: 'Streamlined medical aid claims processing and automated billing—coming soon to save you even more time.'
    },
  ];
  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten"></div>
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pro Features
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Everything your practice needs to deliver next-level care and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group relative">
              <div className={`absolute inset-0 rounded-3xl ${feature.accentColor} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`} />
              <div className="glass-card p-8 h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/10">
                <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8 ${feature.accentColor.includes('blue') ? 'text-[#00A3FF]' : 'text-[#00FFB2]'}`}>{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/60 text-base leading-relaxed">{feature.description}</p>
                <div className="mt-8 flex items-center text-sm font-medium">
                  <span className={`${feature.accentColor.includes('blue') ? 'text-[#00A3FF]' : 'text-[#00FFB2]'} group-hover:translate-x-1 transition-transform duration-300`}>
                    Learn more →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Perkily Pro AI Section (mirroring FlemingAI)
const PerkilyProAI = () => {
  const features = [
    {
      title: 'AI Clinical Notes',
      description: 'Save 30+ hours per month with instant, accurate clinical documentation generated during or after each visit.',
      gradient: 'from-[#00FFB2]/20 to-[#00A3FF]/20'
    },
    {
      title: 'Smart Scheduling',
      description: 'AI-optimized scheduling to maximize efficiency and reduce no-shows.',
      gradient: 'from-[#00A3FF]/20 to-[#00FFB2]/20'
    },
    {
      title: 'Patient Engagement',
      description: 'Automated, personalized communication to keep patients connected to your practice.',
      gradient: 'from-[#00FFB2]/20 to-[#00A3FF]/20'
    }
  ];
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1400px] rounded-[2.5rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF] via-[#00FFB2] to-[#00A3FF] animate-gradient-slow" style={{ padding: '1px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF] via-[#00FFB2] to-[#00A3FF] opacity-50 blur-xl" />
        </div>
        <section className="relative w-full bg-black/95 backdrop-blur-xl rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a1a1a,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1a1a1a,transparent_50%)]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/10 via-[#00FFB2]/10 to-[#00A3FF]/10 animate-gradient" />
          </div>
          <div className="relative py-20 px-8 sm:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-2/5 text-left space-y-8">
                <div className="space-y-6">
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                    Perkily <span className="bg-gradient-to-r from-[#00A3FF] via-[#00FFB2] to-[#00A3FF] text-transparent bg-clip-text">AI</span>
                  </h2>
                  <p className="text-[#8E8E93] text-xl xl:text-2xl font-light leading-relaxed max-w-xl">
                    AI that works for your practice—automate, engage, and deliver better care.
                  </p>
                </div>
                <a 
                  href="https://pro.perkily.io/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group relative inline-flex px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00A3FF] via-[#00FFB2] to-[#00A3FF] text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#00A3FF]/25 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Try Perkily Pro AI
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </div>
              <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={feature.title} className="group relative perspective-1000">
                    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1E]/90 backdrop-blur-xl border border-[#2C2C2E] p-6 h-full transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00A3FF]/10">
                      <div className="relative z-10 space-y-3">
                        <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00A3FF] group-hover:to-[#00FFB2] transition-all duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-[#8E8E93] text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00A3FF]/5 via-[#00FFB2]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#00FFB2]/5 via-[#00A3FF]/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00FFB2]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#00A3FF]/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </section>
      </div>
    </div>
  );
};

// Perkily Pro Why Section (mirroring WhyPerkily)
const PerkilyProWhy = () => {
  const PlatformCard = ({ title, features, icon: Icon, gradientClass }: { title: string; features: string[]; icon: React.ElementType; gradientClass: string; }) => (
    <div className="relative group">
      <div className={`absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10 ${gradientClass}`} />
      <div className="glass-card h-full p-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/10">
        <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8 ${gradientClass.includes('blue') ? 'text-[#00A3FF]' : 'text-[#00FFB2]'}`}>
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className={`mt-1 w-1.5 h-1.5 rounded-full ${gradientClass.includes('blue') ? 'bg-[#00A3FF]' : 'bg-[#00FFB2]'}`} />
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00A3FF]/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00FFB2]/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Why <span className="text-gradient-blue">Perkily Pro</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-lg">
            One platform, endless possibilities. Transform your practice and patient experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <PlatformCard
            title="For Practices"
            icon={Brain}
            gradientClass="from-[#00A3FF]/20 to-transparent"
            features={[
              "AI-powered clinical notes & documentation",
              "Smart appointment & patient management",
              "Automated reminders & voice check-ins",
              "Custom rewards for patient loyalty"
            ]}
          />
          <PlatformCard
            title="For Teams"
            icon={Users}
            gradientClass="from-[#00FFB2]/20 to-transparent"
            features={[
              "Collaborative care tools",
              "Role-based access & permissions",
              "Secure, HIPAA-compliant platform",
              "Analytics & performance insights"
            ]}
          />
          <PlatformCard
            title="For Patients"
            icon={Gift}
            gradientClass="from-[#00A3FF]/20 to-transparent"
            features={[
              "Stay connected to your care team",
              "Receive AI-powered reminders",
              "Earn rewards for engagement",
              "Easy access to health records"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

// Perkily Pro Apps Section (mirroring PerkilyApps)
const PerkilyProApps = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten" />
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20 relative">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
            Perkily <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#00FFB2]">Pro Apps</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-2xl mx-auto">
            Powerful tools for practices and seamless experiences for patients
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="group relative">
            <div className="absolute inset-0 rounded-[2rem] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-10 bg-gradient-to-br from-[#00A3FF] to-[#0090FF]" />
            <div className="glass-card relative overflow-hidden p-8 sm:p-10 rounded-[2rem] border border-white/[0.05] backdrop-blur-xl transition-all duration-500 group-hover:border-white/[0.1]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A3FF]/20 to-[#0090FF]/20 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                <Brain className="w-8 h-8 text-[#0090FF]" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Perkily Pro</h3>
                  <p className="text-white/60 text-lg leading-relaxed">Advanced platform for healthcare professionals. Streamline your practice with AI-powered tools and analytics.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AI Documentation', 'Patient Analytics', 'Team Management', 'Integrations'].map((feature) => (
                    <span key={feature} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-white/70">{feature}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 py-4">
                  <span className="w-4 h-4 text-[#00A3FF]">🔒</span>
                  <span className="text-sm text-white/40">HIPAA Compliant & Secure</span>
                </div>
                <Button 
                  onClick={() => window.open('https://pro.perkily.io/', '_blank')}
                  className="w-full group/btn bg-gradient-to-r from-[#00A3FF] to-[#0090FF] text-white hover:opacity-90 transition-all duration-200 h-14 text-base"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00A3FF]/5 to-[#0090FF]/5 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 transition-opacity duration-500 group-hover:opacity-70" />
            </div>
          </div>
          <div className="group relative">
            <div className="absolute inset-0 rounded-[2rem] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-10 bg-gradient-to-br from-[#00FFB2] to-[#00CC8E]" />
            <div className="glass-card relative overflow-hidden p-8 sm:p-10 rounded-[2rem] border border-white/[0.05] backdrop-blur-xl transition-all duration-500 group-hover:border-white/[0.1]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00FFB2]/20 to-[#00CC8E]/20 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                <Gift className="w-8 h-8 text-[#00CC8E]" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Perkily Patient App</h3>
                  <p className="text-white/60 text-lg leading-relaxed">Patients stay connected, manage appointments, and earn rewards for every healthcare interaction.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Health Tracking', 'Smart Scheduling', 'Reward Points', 'AI Assistant'].map((feature) => (
                    <span key={feature} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-white/70">{feature}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 py-4">
                  <span className="w-4 h-4 text-[#00FFB2]">🔒</span>
                  <span className="text-sm text-white/40">HIPAA Compliant & Secure</span>
                </div>
                <Button 
                  onClick={() => window.open('https://app.perkily.io/auth', '_blank')}
                  className="w-full group/btn bg-gradient-to-r from-[#00FFB2] to-[#00CC8E] text-white hover:opacity-90 transition-all duration-200 h-14 text-base"
                >
                  Launch Web App
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00FFB2]/5 to-[#00CC8E]/5 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 transition-opacity duration-500 group-hover:opacity-70" />
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-white/40 text-xs sm:text-sm">
            Access Perkily anywhere through your web browser.
            <button className="ml-2 text-[#00FFB2] hover:text-[#00FFB2]/80 transition-colors duration-200">
              Learn more about our platform →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

// Perkily Pro CTA Section (mirroring CallToAction)
const PerkilyProCTA = () => (
  <section className="py-24 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten" />
    <div className="container max-w-6xl mx-auto">
      <div className="glass-card relative rounded-[2rem] border border-white/[0.05] backdrop-blur-xl p-12 md:p-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00A3FF]/20 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00FFB2]/20 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-8">
              <Brain className="w-5 h-5 text-[#00A3FF] mr-2" />
              <span className="text-sm text-white/70">Perkily Pro</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#00FFB2]">Transform</span> Your Practice?
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl">
              Start your free trial and experience the future of healthcare management with Perkily Pro.
            </p>
            <Button 
              className="group bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-white px-8 py-6 rounded-full hover:opacity-90 transition-all duration-300 text-lg"
              onClick={() => window.location.href = 'https://pro.perkily.io/'}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BestPracticeSection = () => (
  <section className="py-20 px-4 sm:px-6 bg-black border-t border-white/[0.05] relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten" />
    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#00A3FF]/5 rounded-full blur-[120px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#00FFB2]/5 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
    
    <div className="container max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6">
          <Award className="w-4 h-4 text-[#00FFB2]" />
          <span className="text-sm text-white/70">#1 Rated Practice Management Platform</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          Why Perkily Pro is the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#00FFB2]">Best Practice Management Tool</span> for Doctors
        </h2>
        <p className="text-lg text-white/60 max-w-3xl mx-auto">
          In a crowded market of practice management tools, Perkily Pro stands out with AI-driven features that save time and improve patient care. 
          Trusted by leading medical practices across South Africa.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Why Perkily Pro Wins */}
        <div className="glass-card p-8 rounded-2xl border border-white/[0.05] backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00A3FF]/20 to-[#00FFB2]/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#00FFB2]" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Perkily Pro Advantages</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#00A3FF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">AI Clinical Notes</h4>
                <p className="text-white/70 text-sm">Save 30+ hours/month with automated documentation—better than basic tools like Athenahealth or eClinicalWorks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#00A3FF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">HIPAA Compliant Security</h4>
                <p className="text-white/70 text-sm">Top-tier security that outperforms many competitors in the healthcare software market</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#00A3FF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Medical Aid Claims (Coming Soon)</h4>
                <p className="text-white/70 text-sm">Seamless integration for claims and billing, reducing administrative hassle compared to outdated systems</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Gift className="w-5 h-5 text-[#00A3FF] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Patient Engagement Rewards</h4>
                <p className="text-white/70 text-sm">Unique rewards system that boosts retention, unlike generic practice management platforms</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Others Lack */}
        <div className="glass-card p-8 rounded-2xl border border-white/[0.05] backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
              <X className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">What Other Tools Lack</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Limited AI Integration</h4>
                <p className="text-white/70 text-sm">Most practice management software lacks advanced AI features for clinical documentation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Complex Medical Aid Claims</h4>
                <p className="text-white/70 text-sm">Outdated systems make medical aid claims processing time-consuming and error-prone</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Poor Patient Engagement</h4>
                <p className="text-white/70 text-sm">Generic platforms lack innovative patient engagement features that drive loyalty</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Steep Learning Curves</h4>
                <p className="text-white/70 text-sm">Complex interfaces that require extensive training, wasting valuable practice time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-white/60 mb-6 max-w-2xl mx-auto">
          For doctors seeking the best practice management software in South Africa, Perkily Pro combines innovation, ease of use, and affordability. 
          Join hundreds of medical professionals who've already transformed their practice workflow.
        </p>
        <Button 
          className="group bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-white px-8 py-6 rounded-full hover:opacity-90 transition-all duration-300 text-lg"
          onClick={() => window.location.href = 'https://pro.perkily.io/'}
        >
          Start Your Free Trial Today
          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </section>
);

const PerkilyPro = () => {
  return (
    <main className="min-h-screen bg-black">
      <SEO 
        title="Perkily Pro: The Leading Practice Management Platform for Doctors"
        description="Discover Perkily Pro, the all-in-one AI-powered practice management platform for doctors and clinics. Streamline appointment scheduling, automate clinical notes, boost patient engagement, and grow your medical practice with the best software for healthcare professionals."
        keywords="practice management platform, doctor practice management software, medical practice management, healthcare workflow automation, appointment scheduling for doctors, AI for medical practices, best practice management for doctors, clinical notes automation, patient engagement, HIPAA compliant, healthcare software, medical office software, practice management system, doctor scheduling software, medical rewards platform, practice analytics, healthcare team management"
        canonical="https://www.perkily.io/perkily-pro"
      />
      <Navbar />
      <PerkilyProHero />
      <PerkilyProPartners />
      <PerkilyProFeatures />
      <PerkilyProAI />
      <PerkilyProWhy />
      <PerkilyProApps />
      <PerkilyProCTA />
      <BestPracticeSection />
      <PerkilyProFAQ />
      <Footer />
    </main>
  );
};

export default PerkilyPro; 