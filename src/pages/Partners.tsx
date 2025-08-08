import React, { FormEvent, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  ArrowRight,
  Building2,
  Gift,
  Users,
  Zap,
  ShieldCheck,
  Handshake,
  Rocket,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

type Benefit = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const ValueCard = ({ icon: Icon, title, description }: Benefit) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6">
    <div className="pointer-events-none absolute -inset-x-6 -top-20 h-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.22),transparent_70%)]" />
    <div className="relative">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl border border-white/10 bg-black p-5 text-center">
    <div className="text-2xl font-semibold text-white">{value}</div>
    <div className="text-xs text-white/60">{label}</div>
  </div>
);

const Partners = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactName: '',
    email: '',
    partnershipType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const emailBody = `New Partner Application\n\nCompany Name: ${formData.companyName}\nWebsite: ${formData.website}\nContact Name: ${formData.contactName}\nEmail: ${formData.email}\nPartnership Type: ${formData.partnershipType}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:hello@perkily.io?subject=New Partner Application - ${encodeURIComponent(
        formData.companyName || 'Unknown'
      )}&body=${encodeURIComponent(emailBody)}`;
      setFormData({ companyName: '', website: '', contactName: '', email: '', partnershipType: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const values: Benefit[] = [
    {
      icon: Users,
      title: 'Reach engaged audiences',
      description: 'Connect with patients, clinicians, and students across the Perkily platform at meaningful moments.'
    },
    {
      icon: Gift,
      title: 'Premium marketplace placement',
      description: 'Feature in a low-noise, high-intent rewards experience with real redemption value.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue and insights',
      description: 'Drive redemptions, measure outcomes, and learn what users value — with no extra ops load.'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10">
      <SEO
        title="Perkily Partners — Build better health experiences together"
        description="Join Perkily as a rewards, services, or integration partner. Reach engaged audiences, gain premium placement, and drive measurable outcomes."
        keywords="Perkily partners, healthcare partnerships, rewards partners, integrations, healthcare marketplace"
        canonical="https://www.perkily.io/partners"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(59,130,246,0.35),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Rocket className="h-3.5 w-3.5" /> Partners
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Partner with Perkily to make care simpler — and more rewarding.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-white/70">
              Join a curated network of premium brands and health services. Reach people at the right moment with rewards and experiences that matter.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" className="h-11 px-6" onClick={scrollToForm}>
                Apply to partner
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <a href="mailto:hello@perkily.io">
                <Button size="lg" variant="outline" className="h-11 border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  Email us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="mx-auto max-w-7xl px-6 pb-6 sm:pb-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
            {[
              { src: '/logos/uber-white.svg', alt: 'Uber' },
              { src: '/logos/uber-eats-seeklogo.png', alt: 'Uber Eats' },
              { src: '/logos/woolworths logo.svg', alt: 'Woolworths' },
              { src: '/logos/perkily-logo.svg', alt: 'Perkily' },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={`${logo.alt} logo`}
                className="h-8 opacity-70 grayscale contrast-125 hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Why partner</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">High‑intent reach, zero extra ops</h2>
          <p className="mt-2 text-white/70">We surface your brand where it helps — after bookings, healthy actions, and care milestones.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Handshake,
              title: 'Apply',
              desc: 'Tell us about your brand, goals, and which audiences you want to reach.'
            },
            {
              icon: ShieldCheck,
              title: 'Curate',
              desc: 'We align on offer types and safeguards to keep the experience trusted.'
            },
            {
              icon: Zap,
              title: 'Go live',
              desc: 'Launch in our marketplace and measure impact from day one.'
            }
          ].map((step) => (
            <div key={step.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program types */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Program fit</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Ways to work together</h2>
            <p className="mt-2 text-white/70">Choose a path or mix and match — we keep the integration simple.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[{
              icon: Gift,
              title: 'Rewards partners',
              desc: 'Offer desirable redemptions (vouchers, credits, experiences) to our users.'
            },{
              icon: Building2,
              title: 'Health services',
              desc: 'Clinics, labs, pharmacies — connect bookings, follow‑ups, and perks.'
            },{
              icon: Zap,
              title: 'Integrations',
              desc: 'APIs or file‑based — we fit around your existing systems.'
            }].map((p) => (
              <div key={p.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Avg. redemption rating" value="4.8 / 5" />
            <Stat label="Time to launch" value="< 2 weeks" />
            <Stat label="Audience reach" value="Growing weekly" />
            <Stat label="Extra ops required" value="0 hours" />
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">What we look for</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[ 
              'Clear value for our users and clinicians',
              'Proven quality and reliable fulfilment',
              'Fit with Perkily\'s mission and tone',
              'Ability to integrate technically or operationally',
            ].map((req) => (
              <div key={req} className="flex items-start gap-2 text-white/80">
                <CheckCircle className="mt-0.5 h-5 w-5 text-white/70" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="order-2 md:order-1 md:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold sm:text-3xl">Tell us about you</h2>
              <p className="mt-2 text-white/70">We\'ll get back within a few business days.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">Company name</label>
                    <Input
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="Your company"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">Website</label>
                    <Input
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">Contact name</label>
                    <Input
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="Your name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">Email</label>
                    <Input
                      className="bg-white/5 border-white/10 text-white"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Partnership type</label>
                  <Select value={formData.partnershipType} onValueChange={(v) => setFormData({ ...formData, partnershipType: v })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent className="bg-black text-white border-white/10">
                      <SelectItem value="rewards">Rewards partner</SelectItem>
                      <SelectItem value="services">Health services</SelectItem>
                      <SelectItem value="integration">Integration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Message</label>
                  <Textarea
                    className="bg-white/5 border-white/10 text-white min-h-[120px]"
                    placeholder="Tell us about your company and partnership interests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto px-6" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting…' : 'Submit application'}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">A trusted, calm experience</h3>
              <p className="mt-2 text-sm text-white/70">We design for clarity and safety. Partners are selected to enhance care — never distract from it.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4" /> Clear safeguards and quality bar</li>
                <li className="flex items-start gap-2"><Zap className="mt-0.5 h-4 w-4" /> Fast, simple integration options</li>
                <li className="flex items-start gap-2"><Users className="mt-0.5 h-4 w-4" /> Real users, real engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Partners;