import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { LifeBuoy, Search, MessageSquare, ArrowRight, PlayCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How do I book an appointment?',
    a: 'Open the app, search for a practice, and choose a time that works. You will receive confirmation and reminders.'
  },
  {
    q: 'Where can I see my rewards?',
    a: 'Go to your profile in the app to view points, history, and redemptions.'
  },
  {
    q: 'Is Fleming safe for medical questions?',
    a: 'Fleming is built with safeguards and is designed to guide common next steps. For emergencies, call your local emergency number.'
  },
  {
    q: 'How do I contact support?',
    a: 'Email hello@perkily.io or use the contact form. We reply within 24 hours.'
  }
];

const Help: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const filteredFaqs = React.useMemo(() => {
    if (!query.trim()) return faqs;
    const q = query.toLowerCase();
    return faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <Layout>
      <SEO
        title="Help Center"
        description="Get help fast. Browse FAQs, search common questions, or contact the Perkily team."
        canonical="https://www.perkily.io/help"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-16 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 sm:p-10">
          <div className="pointer-events-none absolute -inset-32 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(139,92,246,0.26),transparent_60%),radial-gradient(40%_40%_at_100%_60%,rgba(59,130,246,0.20),transparent_60%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <LifeBuoy className="h-3.5 w-3.5" />
              Help Center
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">How can we help?</h1>
            <p className="mt-3 text-white/70 text-lg">Find quick answers or reach the team. We’re here to help patients, professionals, and partners.</p>

            <div className="mx-auto mt-6 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search help (e.g. ‘book’, ‘rewards’, ‘Fleming’)"
                  className="pl-9 border-white/15 bg-white/5 text-white placeholder:text-white/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a href="/docs" className="group">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle>Read the docs</CardTitle>
                <CardDescription className="text-white/70">Guides for setup, patient and professional features, and privacy.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-flex items-center text-sm text-white/80">Open docs <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></div>
              </CardContent>
            </Card>
          </a>
          <a href="/contact" className="group">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle>Contact support</CardTitle>
                <CardDescription className="text-white/70">Email us or submit the contact form — we reply within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-flex items-center text-sm text-white/80">Get in touch <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></div>
              </CardContent>
            </Card>
          </a>
        </section>

        {/* Featured videos */}
        <section className="mt-10">
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle>Featured videos</CardTitle>
              <CardDescription className="text-white/70">Short clips that answer common questions.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {['Booking an appointment', 'Viewing rewards'].map((title) => (
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
        </section>

        {/* FAQs */}
        <section className="mt-10">
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle>Frequently asked</CardTitle>
              <CardDescription className="text-white/70">Answers to common questions about Perkily.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Still need help */}
        <section className="mt-10">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 text-center">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Still stuck?</h2>
            <p className="mt-2 text-white/70">Email us at <a href="mailto:hello@perkily.io" className="underline">hello@perkily.io</a> or send a message.</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a href="/contact"><Button className="h-9 px-4">Contact</Button></a>
              <a href="https://app.perkily.io" target="_blank" rel="noreferrer"><Button variant="outline" className="h-9 px-4 border-white/15 bg-white/5 text-white hover:bg-white/10">Open the app</Button></a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Help;

