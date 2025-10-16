import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight, ArrowLeft, Bot, Stethoscope, GraduationCap, Sparkles, Shield, Smartphone, Gift, Building2, Rocket, Check, CalendarDays, MessagesSquare, Workflow, ShieldCheck, HeartPulse, Award, Activity, MapPin, Clock, Layers, Zap, Brain, Mic, CreditCard, Calendar } from 'lucide-react';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';
import { BlurText } from '@/components/ui/animated-blur-text';
import { Awards } from '@/components/ui/award';

const Index = () => {
  const [ctaCarouselApi, setCtaCarouselApi] = React.useState<CarouselApi | null>(null)
  const [ctaCurrent, setCtaCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!ctaCarouselApi) return
    const handleSelect = () => setCtaCurrent(ctaCarouselApi.selectedScrollSnap())
    handleSelect()
    ctaCarouselApi.on('select', handleSelect)
    return () => {
      // Optional: Embla may not expose 'off' in some typings
      if (typeof (ctaCarouselApi as any).off === 'function') {
        ;(ctaCarouselApi as any).off('select', handleSelect)
      }
    }
  }, [ctaCarouselApi])

  React.useEffect(() => {
    if (!ctaCarouselApi) return
    let paused = false
    const root = ctaCarouselApi.rootNode?.() as HTMLElement | undefined
    const onEnter = () => { paused = true }
    const onLeave = () => { paused = false }
    root?.addEventListener('mouseenter', onEnter)
    root?.addEventListener('mouseleave', onLeave)
    const id = window.setInterval(() => {
      if (!paused) ctaCarouselApi.scrollNext()
    }, 6000)
    return () => {
      window.clearInterval(id)
      root?.removeEventListener('mouseenter', onEnter)
      root?.removeEventListener('mouseleave', onLeave)
    }
  }, [ctaCarouselApi])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      <SEO 
        title="AI-Powered Healthcare. Simplified."
        description="Two products that transform healthcare: Pro, the AI-powered practice management platform, and AskFleming, the intelligent healthcare assistant for everyone."
        keywords="Perkily Pro, AskFleming, AI practice management, healthcare AI, medical software, clinical notes, healthcare assistant"
        canonical="https://www.perkily.io/"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-left">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
              <Rocket className="h-4 w-4 text-blue-400" />
              Now live: AskFleming
            </div>
            
            {/* Animated Headline */}
            <div className="mb-8">
              <BlurText
                text="Healthcare. Reimagined."
                delay={100}
                animateBy="words"
                direction="top"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight"
              />
            </div>
            
            {/* Animated Description */}
            <div className="mb-12 max-w-3xl">
              <BlurText
                text="Two powerful products. One vision: making healthcare smarter, faster, and more accessible for everyone."
                delay={80}
                animateBy="words"
                direction="bottom"
                className="text-xl sm:text-2xl text-white/70 leading-relaxed"
              />
            </div>
            
            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col sm:flex-row items-start gap-4">
              <a href="https://pro.perkily.io/login" target="_blank" rel="noreferrer">
                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  Try Pro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://askfleming.perkily.io" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  Ask Fleming
                  <Bot className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            
            {/* Feature badges */}
            <div className="flex flex-wrap items-start gap-6 text-sm text-white/60">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Shield className="h-4 w-4 text-green-400" />
                Secure by design
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Gift className="h-4 w-4 text-yellow-400" />
                Rewards built in
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Smartphone className="h-4 w-4 text-blue-400" />
                Works on any device
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

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
                <h3 className="text-2xl font-semibold tracking-tight">Built with care</h3>
                <p className="mt-1 max-w-2xl text-white/70">Thoughtful software for professionals, general users, and medical students — privacy and performance at the core.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" /> Live
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Minimalist Products Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 tracking-tight">
            Two products.<br />
            <span className="text-white/60">One vision.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto font-light">
            Designed for every role in healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* AskFleming */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8">
              <Brain className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-light text-white mb-4 tracking-tight">
              AskFleming
            </h3>
            
            <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">
              Your intelligent healthcare assistant. Safe, accurate answers to any health question, anytime.
            </p>
            
            <div className="space-y-3 mb-10">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                <Check className="w-4 h-4" />
                <span className="text-sm">Safe, grounded responses</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                <MessagesSquare className="w-4 h-4" />
                <span className="text-sm">Instant health guidance</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Privacy-first design</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                <Activity className="w-4 h-4" />
                <span className="text-sm">Medical-grade accuracy</span>
              </div>
            </div>
            
            <a href="https://askfleming.perkily.io" target="_blank" rel="noreferrer">
              <Button variant="outline" className="border border-white/20 bg-transparent text-white hover:bg-white/5 px-8 py-3 font-light">
                Ask Fleming
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Pro */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-light text-white mb-4 tracking-tight">
              Pro
            </h3>
            
            <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">
              AI-powered practice management platform. Voice to SOAP notes, diagnostic insights, and automated claims.
            </p>
            
            <div className="space-y-3 mb-10">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                <Mic className="w-4 h-4" />
                <span className="text-sm">Voice to SOAP notes</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                <Brain className="w-4 h-4" />
                <span className="text-sm">Diagnostic insights</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">Automated claims</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Complete practice management</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://pro.perkily.io/login" target="_blank" rel="noreferrer">
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 font-light">
                  Try Pro
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="/perkily-pro">
                <Button variant="outline" className="border border-white/20 bg-transparent text-white hover:bg-white/5 px-8 py-3 font-light">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fleming section */}
      <section id="fleming" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Bot className="h-3.5 w-3.5" /> AskFleming
            </div>
            <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">Your intelligent healthcare assistant</h2>
            <p className="mt-4 max-w-xl text-white/70">
              Safe, accurate, and always available. AskFleming provides instant health guidance for everyone—from patients to professionals to students.
            </p>

            <Tabs defaultValue="patients" className="mt-6">
              <TabsList className="bg-white/5">
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="professionals">Professionals</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
              </TabsList>
              <TabsContent value="patients" className="mt-4">
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Instant health guidance</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Safe symptom assessment</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Clear next steps</li>
                </ul>
              </TabsContent>
              <TabsContent value="professionals" className="mt-4">
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Clinical decision support</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Evidence-based guidance</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Patient education tools</li>
                </ul>
              </TabsContent>
              <TabsContent value="students" className="mt-4">
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Clinical reasoning practice</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Safe learning environment</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Evidence-based answers</li>
                </ul>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex gap-3">
              <a href="https://askfleming.perkily.io" target="_blank" rel="noreferrer">
                <Button className="px-4">Ask Fleming</Button>
              </a>
              <a href="/contact">
                <Button variant="outline" className="border-white/15 bg-white/5 px-4 text-white hover:bg-white/10">Partner with us</Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-x-6 -inset-y-6 rounded-3xl bg-[conic-gradient(at_50%_50%,rgba(59,130,246,0.2),transparent_30%)] blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-sm font-medium text-white/80">A better chat for care</div>
              <div className="space-y-3 text-sm leading-6 text-white/80">
                <div className="rounded-lg border border-white/10 bg-black/40 p-4">Hi Fleming — I have a sore throat and mild fever. Should I be worried?</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">Let’s figure it out together. I’ll ask a few quick questions to check for red flags, then suggest safe next steps and when to see someone in person.</div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-4">What should I bring to my appointment?</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">Bring a list of medications, allergies, and any recent test results. I can help you summarise symptoms before you go.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform features - GlowingEffectDemo layout */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Platform</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">One platform, many ways to help</h2>
          <p className="mt-2 text-white/70">From first question to follow‑up, Perkily ties the journey together — with care, speed, and trust.</p>
        </div>
        <div className="mt-10">
          <GlowingEffectDemo />
        </div>
      </section>

      {/* Multi-platform CTA slider with demo videos */}
      <section className="mx-auto w-full px-0 pb-24 sm:pb-32">
        <div className="relative overflow-hidden border-y border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] py-10">
          <div className="pointer-events-none absolute -inset-x-10 -top-20 h-48 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
          <div className="mx-auto mb-8 max-w-3xl px-6 text-center relative">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Two Products</span>
            <h3 className="text-2xl font-semibold sm:text-3xl">Choose your path</h3>
            <p className="mt-2 text-white/70">Pro for professionals. AskFleming for everyone.</p>
          </div>
          <div className="relative mx-auto max-w-7xl px-6">
            <Carousel opts={{ align: 'start', loop: true }} setApi={setCtaCarouselApi} className="">
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Patients */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        <Bot className="h-3.5 w-3.5" /> AskFleming
                      </div>
                      <h4 className="text-xl font-semibold">Your health assistant</h4>
                      <p className="mt-2 text-white/70">Ask any health question and get safe, accurate answers instantly. Perfect for patients, students, and professionals.</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a href="https://askfleming.perkily.io" target="_blank" rel="noreferrer">
                          <Button className="px-4">Ask Fleming</Button>
                        </a>
                      </div>
                    </div>
                    <div>
                      <AspectRatio ratio={16 / 9}>
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                          <div className="flex h-full w-full items-center justify-center bg-black/70">
                            <span className="text-sm font-medium text-white/70">Coming soon</span>
                          </div>
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_40%)]" />
                        </div>
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>

                {/* Professionals */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        <Stethoscope className="h-3.5 w-3.5" /> Pro
                      </div>
                      <h4 className="text-xl font-semibold">AI-powered practice management</h4>
                      <p className="mt-2 text-white/70">Voice to SOAP notes, diagnostic insights, automated claims, and complete practice management in one platform.</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a href="https://pro.perkily.io/login" target="_blank" rel="noreferrer">
                          <Button className="px-4">Try Pro</Button>
                        </a>
                        <a href="/perkily-pro">
                          <Button variant="outline" className="border-white/15 bg-white/5 px-4 text-white hover:bg-white/10">Learn More</Button>
                        </a>
                      </div>
                    </div>
                    <div>
                      <AspectRatio ratio={16 / 9}>
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                          <div className="flex h-full w-full items-center justify-center bg-black/70">
                            <span className="text-sm font-medium text-white/70">Coming soon</span>
                          </div>
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_40%)]" />
                        </div>
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>

                {/* Fleming for everyone */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        <Bot className="h-3.5 w-3.5" /> Fleming
                      </div>
                      <h4 className="text-xl font-semibold">Fleming, ready to help</h4>
                      <p className="mt-2 text-white/70">Instant guidance for general users, assistive drafting and triage for professionals, and safe learning patterns for medical students.</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a href="https://askfleming.perkily.io" target="_blank" rel="noreferrer">
                          <Button className="px-4">Chat with Fleming</Button>
                        </a>
                        <a href="/contact">
                          <Button variant="outline" className="border-white/15 bg-white/5 px-4 text-white hover:bg-white/10">Partner with us</Button>
                        </a>
                      </div>
                    </div>
                    <div>
                      <AspectRatio ratio={16 / 9}>
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                          <div className="flex h-full w-full items-center justify-center bg-black/70">
                            <span className="text-sm font-medium text-white/70">Coming soon</span>
                          </div>
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_40%)]" />
                        </div>
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="backdrop-blur border-white/20 text-white hover:bg-white/10 -left-3 md:-left-6" />
              <CarouselNext className="backdrop-blur border-white/20 text-white hover:bg-white/10 -right-3 md:-right-6" />
            </Carousel>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {[0,1,2].map((i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i+1}`}
                onClick={() => ctaCarouselApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${ctaCurrent===i ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {(() => {
          const posts = [
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
                'Interfaces that reduce cognitive load help everyone — patients, clinicians, students. Here’s how we think about it.',
              date: 'Aug 2024',
              href: '/blog',
            },
            {
              tag: 'Platform',
              title: 'Rewards that change behaviour (without noise)',
              excerpt:
                'Building a rewards system that’s fair, transparent, and genuinely useful — not just another points program.',
              date: 'Jul 2024',
              href: '/blog',
            },
          ] as const;

          const [featured, ...rest] = posts;

          return (
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-10">
              <div className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(50%_50%_at_100%_60%,rgba(139,92,246,0.12),transparent_60%)]" />

              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">From the journal</span>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Ideas for better care</h2>
                <p className="mt-2 text-white/70">Thoughtful product updates, design notes, and platform thinking.</p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Featured */}
                <a href={featured.href} className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 md:col-span-2">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent_40%)]" />
                  <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[conic-gradient(at_50%_50%,rgba(59,130,246,0.25),transparent_60%)] blur-2xl transition-transform duration-500 group-hover:scale-110" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 text-xs text-white/70">
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide">{featured.tag}</span>
                      <span className="text-white/50">{featured.date}</span>
                    </div>
                    <h3 className="mt-3 text-pretty text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl group-hover:underline">
                      {featured.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-white/70">{featured.excerpt}</p>
                    <div className="mt-5 inline-flex items-center text-sm text-white/80">
                      Read the journal <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>

                {/* Supporting */}
                {rest.slice(0, 2).map((post, i) => (
                  <a
                    key={i}
                    href={post.href}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors"
                  >
                    <div className="pointer-events-none absolute -inset-x-6 -top-20 h-32 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]" />
                    <div className="relative">
                      <div className="inline-flex items-center gap-2 text-xs text-white/70">
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide">{post.tag}</span>
                        <span className="text-white/50">{post.date}</span>
                      </div>
                      <h4 className="mt-3 text-xl font-semibold group-hover:underline">{post.title}</h4>
                      <p className="mt-2 text-white/70">{post.excerpt}</p>
                      <div className="mt-4 inline-flex items-center text-sm text-white/80">
                        Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center">
                <a href="/blog">
                  <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                    View all posts
                  </Button>
                </a>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Award Banner */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-4">
              <div className="w-1 h-1 rounded-full bg-white/40"></div>
              <span className="text-sm text-white/50 font-light tracking-wider uppercase">Recognition</span>
              <div className="w-1 h-1 rounded-full bg-white/40"></div>
            </div>
            
            <div className="flex items-center justify-center">
              <Awards
                variant="badge"
                title="Startup of the Year"
                subtitle="EPF Tech Awards"
                date="2025"
                level="gold"
                className="text-white"
              />
            </div>
            
            <div className="max-w-2xl">
              <p className="text-white/60 font-light leading-relaxed">
                Recognized for innovation in healthcare technology and our commitment to making healthcare more accessible through AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
