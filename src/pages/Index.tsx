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
import { ArrowRight, ArrowLeft, Bot, Stethoscope, GraduationCap, Sparkles, Shield, Smartphone, Gift, Building2, Rocket, Check, CalendarDays, MessagesSquare, Workflow, ShieldCheck, HeartPulse, Award, Activity, MapPin, Clock, Layers, Zap } from 'lucide-react';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';

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
        title="Care that connects everyone"
        description="Perkily is a healthcare company building AI-first experiences across the care journey. Book appointments, earn rewards, and get instant answers with Fleming — whether you’re a patient, clinician, or student."
        keywords="Perkily, healthcare AI, Fleming, book appointments, patient rewards, clinicians, medical students, Perkily Pro, healthcare platform"
        canonical="https://www.perkily.io/"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(59,130,246,0.35),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Rocket className="h-3.5 w-3.5 text-white/80" />
              Now live: Fleming for everyone
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Healthcare that feels personal. Software that gets out of the way.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-white/70">
              Perkily brings care, rewards, and guidance into one simple experience. Open the app to book across practices, earn rewards for healthy actions, and chat to Fleming for instant, reliable help.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
                <Button size="lg" className="h-11 px-6">
                  Open the app
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="h-11 border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  Chat with Fleming
                  <Bot className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4" /> Secure by design
              </div>
              <div className="inline-flex items-center gap-2">
                <Gift className="h-4 w-4" /> Rewards built in
              </div>
              <div className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4" /> Works on any device
              </div>
            </div>
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

      {/* Audience sections - richer layout */}
      <section className="mx-auto max-w-7xl px-6 pb-6 sm:pb-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Patients */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6">
            <div className="pointer-events-none absolute -inset-x-6 -top-20 h-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.32),transparent_70%)]" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">For patients</h3>
              <p className="mt-2 text-white/70">Book quickly, get guidance, and earn rewards for staying on top of your health.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> One login across practices</li>
                <li className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4" /> Real-time booking and reminders</li>
                <li className="flex items-start gap-2"><MessagesSquare className="mt-0.5 h-4 w-4" /> Chat to Fleming for safe next steps</li>
                <li className="flex items-start gap-2"><Award className="mt-0.5 h-4 w-4" /> Rewards you can actually use</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
                  <Button className="px-4">Open the app</Button>
                </a>
                <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="border-white/15 bg-white/5 px-4 text-white hover:bg-white/10">Chat to Fleming</Button>
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 translate-x-6 translate-y-6 rounded-full bg-white/[0.06]" />
          </div>

          {/* Professionals */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6">
            <div className="pointer-events-none absolute -inset-x-6 -top-20 h-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.28),transparent_70%)]" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                <Stethoscope className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">For healthcare professionals</h3>
              <p className="mt-2 text-white/70">Tools that reduce admin and help you focus on care — from intake to follow-up.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2"><Workflow className="mt-0.5 h-4 w-4" /> Structured, explainable triage</li>
                <li className="flex items-start gap-2"><MessagesSquare className="mt-0.5 h-4 w-4" /> Patient comms and education, drafted for you</li>
                <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4" /> Safety checks and escalation paths</li>
                <li className="flex items-start gap-2"><Layers className="mt-0.5 h-4 w-4" /> Fits around your existing tools</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/perkily-pro">
                  <Button className="px-4">Explore Perkily Pro</Button>
                </a>
                <a href="/contact">
                  <Button variant="outline" className="border-white/15 bg-white/5 px-4 text-white hover:bg-white/10">Talk to us</Button>
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 translate-x-6 translate-y-6 rounded-full bg-white/[0.06]" />
          </div>

          {/* Students */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6">
            <div className="pointer-events-none absolute -inset-x-6 -top-20 h-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.28),transparent_70%)]" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">For medical students</h3>
              <p className="mt-2 text-white/70">Learn safe patterns, differential thinking, and patient communication faster.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2"><HeartPulse className="mt-0.5 h-4 w-4" /> Cases that mirror real consults</li>
                <li className="flex items-start gap-2"><MessagesSquare className="mt-0.5 h-4 w-4" /> Practise bedside questions</li>
                <li className="flex items-start gap-2"><Activity className="mt-0.5 h-4 w-4" /> Feedback that builds confidence</li>
                <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4" /> Study on your schedule</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
                  <Button className="px-4">Start with Fleming</Button>
                </a>
                <a href="/contact">
                  <Button variant="outline" className="border-white/15 bg-white/5 px-4 text-white hover:bg-white/10">Educator partnerships</Button>
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 translate-x-6 translate-y-6 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </section>

      {/* Fleming section */}
      <section id="fleming" className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Bot className="h-3.5 w-3.5" /> Meet Fleming
            </div>
            <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">An AI companion built for healthcare</h2>
            <p className="mt-4 max-w-xl text-white/70">
              Fleming helps you ask better questions, understand next steps, and navigate care. Grounded, careful, and available in seconds.
            </p>

            <Tabs defaultValue="patients" className="mt-6">
              <TabsList className="bg-white/5">
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="professionals">Professionals</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
              </TabsList>
              <TabsContent value="patients" className="mt-4">
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Symptom guidance and safe next steps</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Prep for your visit — what to bring and what to expect</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Connect to booking and rewards</li>
                </ul>
              </TabsContent>
              <TabsContent value="professionals" className="mt-4">
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Draft patient comms and education in plain language</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Assist triage with structured, explainable intake</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Fits around your existing tools</li>
                </ul>
              </TabsContent>
              <TabsContent value="students" className="mt-4">
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Cases that teach differentials and safety nets</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Build confidence in clinical communication</li>
                  <li className="flex items-start gap-2"><ArrowRight className="mt-1 h-4 w-4" /> Study on your schedule</li>
                </ul>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex gap-3">
              <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
                <Button className="px-4">Try Fleming</Button>
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
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Explore Perkily</span>
            <h3 className="text-2xl font-semibold sm:text-3xl">Choose your starting point</h3>
            <p className="mt-2 text-white/70">A quick look at our experiences for patients, professionals, and students.</p>
          </div>
          <div className="relative mx-auto max-w-7xl px-6">
            <Carousel opts={{ align: 'start', loop: true }} setApi={setCtaCarouselApi} className="">
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Patients */}
                <CarouselItem className="pl-2 md:pl-4">
                  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        <Smartphone className="h-3.5 w-3.5" /> Patients
                      </div>
                      <h4 className="text-xl font-semibold">Book, chat, earn</h4>
                      <p className="mt-2 text-white/70">Open the app to book across practices, chat to Fleming for guidance, and earn rewards for healthy actions.</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
                          <Button className="px-4">Open the app</Button>
                        </a>
                        <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
                          <Button variant="outline" className="border-white/15 bg-white/5 px-4 text-white hover:bg-white/10">Chat to Fleming</Button>
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
                        <Stethoscope className="h-3.5 w-3.5" /> Professionals
                      </div>
                      <h4 className="text-xl font-semibold">AI notes and instant claims</h4>
                      <p className="mt-2 text-white/70">Record once, get structured SOAP notes, see insights, and submit medical aid claims instantly within Perkily Pro.</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a href="/perkily-pro">
                          <Button className="px-4">Explore Perkily Pro</Button>
                        </a>
                        <a href="/contact">
                          <Button variant="outline" className="border-white/15 bg-white/5 px-4 text-white hover:bg-white/10">Book a demo</Button>
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
                        <a href="https://app.perkily.io" target="_blank" rel="noreferrer">
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

      
      <Footer />
    </main>
  );
};

export default Index;
