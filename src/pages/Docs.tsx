import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  BookOpen, Search, ShieldCheck, Smartphone, Gift, Workflow, ArrowRight,
  ListOrdered, Settings, CalendarDays, Percent, FileText, Send, BarChart3, PlayCircle,
  Bot, GraduationCap, Stethoscope, Layers
} from 'lucide-react';

type NavGroup = { title: string; items: { id: string; label: string }[] };

const nav: NavGroup[] = [
  {
    title: 'Start here',
    items: [
      { id: 'getting-started', label: 'Getting started' },
      { id: 'activation', label: 'Activate ClinicalOS' },
    ],
  },
  {
    title: 'ClinicalOS',
    items: [
      { id: 'pro-overview', label: 'Overview' },
      { id: 'appointments', label: 'Appointments (step-by-step)' },
      { id: 'rewards', label: 'Rewards & percentages' },
      { id: 'claims', label: 'Medical aid claims' },
      { id: 'reporting', label: 'Sales & claims reporting' },
      { id: 'videos', label: 'Explainer videos' },
    ],
  },
  {
    title: 'Fleming',
    items: [
      { id: 'fleming-overview', label: 'Overview' },
      { id: 'fleming-general', label: 'General users' },
      { id: 'fleming-students', label: 'Medical students' },
      { id: 'fleming-professionals', label: 'Healthcare professionals' },
    ],
  },
  {
    title: 'Trust',
    items: [{ id: 'privacy-security', label: 'Privacy & security' }],
  },
];

const Docs: React.FC = () => {
  const [query, setQuery] = React.useState('');

  return (
    <Layout>
      <SEO
        title="Documentation"
        description="Guides, concepts, and reference to help you get the most out of Perkily — from PMS workflows to Fleming."
        canonical="https://www.perkily.io/docs"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-16 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 sm:p-10">
          <div className="pointer-events-none absolute -inset-32 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(40%_40%_at_100%_60%,rgba(139,92,246,0.18),transparent_60%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <BookOpen className="h-3.5 w-3.5" />
              Documentation
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Everything you need to get productive</h1>
            <p className="mt-3 text-white/70 text-lg">Clear, step‑by‑step guides for ClinicalOS, patient features, and Fleming — designed for new users on any platform.</p>

            <div className="mx-auto mt-6 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search docs (e.g. appointments, rewards percentage, claims)"
                  className="pl-9 border-white/15 bg-white/5 text-white placeholder:text-white/50"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">PMS</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">Fleming</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">Rewards</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">Claims</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#getting-started"><Button className="h-9 px-4">Start here</Button></a>
              <a href="#pro-overview"><Button variant="outline" className="h-9 px-4 border-white/15 bg-white/5 text-white hover:bg-white/10">ClinicalOS</Button></a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <nav className="sticky top-24 space-y-4">
              {nav.map((group) => (
                <div key={group.title} className="space-y-2">
                  <div className="px-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">{group.title}</div>
                  {group.items.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/7">
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <div className="lg:col-span-9 space-y-10 order-1 lg:order-2">
            {/* Getting Started */}
            <Card id="getting-started" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Getting started</CardTitle>
                <CardDescription className="text-white/70">Create your account, sign in, and learn the core concepts.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><Smartphone className="h-4 w-4" /></div>
                    <div className="text-sm font-medium">Create an account</div>
                    <p className="mt-1 text-xs text-white/70">Use your email or phone to sign up. We’ll verify securely and get you started in minutes.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><Workflow className="h-4 w-4" /></div>
                    <div className="text-sm font-medium">Find and book care</div>
                    <p className="mt-1 text-xs text-white/70">Browse practices, pick a time that works, and get reminders so you never miss a visit.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><Gift className="h-4 w-4" /></div>
                    <div className="text-sm font-medium">Earn rewards</div>
                    <p className="mt-1 text-xs text-white/70">Get points for healthy actions and redeem at brands you actually use.</p>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="gs-1">
                    <AccordionTrigger>How do I verify my account?</AccordionTrigger>
                    <AccordionContent>
                      We’ll send a one‑time code to your email or phone. Enter it to complete verification. If you run into issues, contact support at hello@perkily.io.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="gs-2">
                    <AccordionTrigger>Where do I manage notifications?</AccordionTrigger>
                    <AccordionContent>
                      In the app, open Settings → Notifications to choose reminders and communication preferences.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Activation */}
            <Card id="activation" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Activate your ClinicalOS account</CardTitle>
                <CardDescription className="text-white/70">Add your practice details and get approved — usually under one hour.</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-white/80">
                  <li>Open ClinicalOS and go to Settings → Practice.</li>
                  <li>Enter practice details: name, address, HPCSA/registration numbers, billing preferences.</li>
                  <li>Add providers and roles; invite staff if needed.</li>
                  <li>Submit for review. You’ll receive an email once approved (typically &lt; 1 hour).</li>
                </ol>
                <div className="mt-4 inline-flex">
                  <a href="/clinicalos"><Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">Explore ClinicalOS</Button></a>
                </div>
              </CardContent>
            </Card>

            {/* ClinicalOS Overview */}
            <Card id="pro-overview" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>ClinicalOS overview</CardTitle>
                <CardDescription className="text-white/70">A practice management layer for intake, bookings, comms, claims, and reporting.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><CalendarDays className="h-4 w-4" /></div>
                  <div className="text-sm font-medium">Appointments</div>
                  <p className="mt-1 text-xs text-white/70">Availability, confirmations, reminders, and follow‑ups.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><Settings className="h-4 w-4" /></div>
                  <div className="text-sm font-medium">Practice settings</div>
                  <p className="mt-1 text-xs text-white/70">Staff, permissions, billing rules, brand, and messaging.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><Layers className="h-4 w-4" /></div>
                  <div className="text-sm font-medium">Works with your tools</div>
                  <p className="mt-1 text-xs text-white/70">Wrap‑around workflows that fit your existing stack.</p>
                </div>
              </CardContent>
            </Card>

            {/* Appointments step-by-step */}
            <Card id="appointments" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Appointments (step‑by‑step)</CardTitle>
                <CardDescription className="text-white/70">From setting availability to confirming and following up.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ol className="list-decimal pl-5 space-y-2 text-sm text-white/80">
                  <li>Go to Appointments → Availability to set provider schedules.</li>
                  <li>Optionally add visit types (duration, price, online/in‑person).</li>
                  <li>Share your booking link or embed on your website.</li>
                  <li>Patients book; you’ll see pending confirmations if required.</li>
                  <li>Automated reminders are sent; reschedules and cancellations are tracked.</li>
                </ol>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-medium">Tips</div>
                  <p className="mt-1 text-xs text-white/70">Use visit types for common consults, and enable follow‑up reminders to reduce no‑shows.</p>
                </div>
              </CardContent>
            </Card>

            {/* Rewards & percentage */}
            <Card id="rewards" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Rewards & percentages</CardTitle>
                <CardDescription className="text-white/70">Configure how much of each eligible payment converts to points.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal pl-5 space-y-2 text-sm text-white/80">
                  <li>Open Settings → Rewards.</li>
                  <li>Choose a reward percentage (e.g. 2–5%).</li>
                  <li>Optionally set different rates per visit type.</li>
                  <li>Save. Changes apply to future eligible payments.</li>
                </ol>
                <p className="text-sm text-white/70">Patients see earned points in their profile and can redeem with partners like Uber and Woolworths.</p>
              </CardContent>
            </Card>

            {/* Claims */}
            <Card id="claims" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Medical aid claims</CardTitle>
                <CardDescription className="text-white/70">Prepare, submit, and track claims efficiently.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal pl-5 space-y-2 text-sm text-white/80">
                  <li>Ensure provider details and practice numbers are complete in Settings → Practice.</li>
                  <li>Create an encounter: add ICD‑10 and TAR codes, units, and notes.</li>
                  <li>Generate a claim preview and validate required fields.</li>
                  <li>Submit electronically. Track status in Claims → Outbox.</li>
                  <li>Post remittances and reconcile any short‑pays or rejections.</li>
                </ol>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-medium">Good to know</div>
                  <p className="mt-1 text-xs text-white/70">Validation catches common errors before submission to reduce rejections.</p>
                </div>
              </CardContent>
            </Card>

            {/* Reporting */}
            <Card id="reporting" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Sales & claims reporting</CardTitle>
                <CardDescription className="text-white/70">Understand performance and cash flow.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-white/80">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Dashboard: daily/weekly revenue and visit volumes</li>
                  <li>Claims: submissions, rejections, paid, and outstanding</li>
                  <li>Exports: CSV for accounting and analysis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Videos */}
            <Card id="videos" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Explainer videos</CardTitle>
                <CardDescription className="text-white/70">Short walkthroughs of common workflows.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {['Appointments', 'Claims'].map((title) => (
                  <div key={title} className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium"><PlayCircle className="h-4 w-4" /> {title}</div>
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <AspectRatio ratio={16/9}>
                        <div className="flex h-full w-full items-center justify-center text-white/50 text-xs">Video placeholder</div>
                      </AspectRatio>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Fleming overview */}
            <Card id="fleming-overview" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Fleming overview</CardTitle>
                <CardDescription className="text-white/70">AI‑assisted guidance for patients, students, and professionals.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><Bot className="h-4 w-4" /></div>
                  <div className="text-sm font-medium">General users</div>
                  <p className="mt-1 text-xs text-white/70">Safe next‑step guidance and preparation for visits.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><GraduationCap className="h-4 w-4" /></div>
                  <div className="text-sm font-medium">Medical students</div>
                  <p className="mt-1 text-xs text-white/70">Flashcards, quizzes, and plans from your uploaded study material.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><Stethoscope className="h-4 w-4" /></div>
                  <div className="text-sm font-medium">Healthcare professionals</div>
                  <p className="mt-1 text-xs text-white/70">Structured triage, communication drafts, and education support.</p>
                </div>
              </CardContent>
            </Card>

            {/* Fleming: General users */}
            <Card id="fleming-general" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Fleming for general users</CardTitle>
                <CardDescription className="text-white/70">Ask questions, get safe suggestions, and prepare for care.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
                  <li>Symptom guidance with safety checks and escalation when needed</li>
                  <li>Preparation checklists for upcoming consults</li>
                  <li>Privacy‑preserving by design</li>
                </ul>
              </CardContent>
            </Card>

            {/* Fleming: Students */}
            <Card id="fleming-students" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Fleming for medical students</CardTitle>
                <CardDescription className="text-white/70">AI‑powered study help tailored to your uploaded notes.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
                  <li>Flashcard generation from PDFs/notes</li>
                  <li>Quiz creation with feedback explanations</li>
                  <li>Study plan drafts based on exam dates and available time</li>
                </ul>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-medium">Tip</div>
                  <p className="mt-1 text-xs text-white/70">Upload high‑quality lecture slides or summaries for best results.</p>
                </div>
              </CardContent>
            </Card>

            {/* Fleming: Professionals */}
            <Card id="fleming-professionals" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Fleming for healthcare professionals</CardTitle>
                <CardDescription className="text-white/70">Drafts patient communication and structures clinical thinking.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
                  <li>Structured triage prompts and red‑flag checklists</li>
                  <li>Plain‑language patient education drafts</li>
                  <li>Fits alongside existing EHR/PMS tools</li>
                </ul>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card id="privacy-security" className="border-white/10 bg-white/5 scroll-mt-24">
              <CardHeader>
                <CardTitle>Privacy & security</CardTitle>
                <CardDescription className="text-white/70">Your data is protected by design.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10"><ShieldCheck className="h-4 w-4" /></div>
                  <div className="text-sm font-medium">Security principles</div>
                  <p className="mt-1 text-xs text-white/70">Least‑privilege access, encrypted in transit and at rest, and continuous monitoring. We never sell your data.</p>
                </div>
                <p className="text-sm text-white/70">See also: <a className="underline" href="/privacy-policy">Privacy Policy</a> and <a className="underline" href="/terms-of-service">Terms of Service</a>.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Docs;

