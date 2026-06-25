import React, { FormEvent, useState } from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, ArrowRight, Loader2, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/sonner';
import { RevealOnView } from '@/components/home/RevealOnView';

type UserType = 'professional' | 'company';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceName?: string;
  companyName?: string;
  message: string;
}

const contactPoints = [
  {
    label: 'Sales',
    detail: 'Demos, pricing, and onboarding for your practice.',
    email: 'hello@perkily.io',
  },
  {
    label: 'Support',
    detail: 'Help with an existing ClinicalOS account.',
    email: 'support@perkily.io',
  },
  {
    label: 'Partnerships',
    detail: 'Integrations, resellers, and strategic alliances.',
    email: 'partners@perkily.io',
  },
];

const ContactPage = () => {
  const [selectedType, setSelectedType] = useState<UserType>('professional');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: '',
    companyName: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          user_type: selectedType,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          practice_name: selectedType === 'professional' ? formData.practiceName : null,
          company_name: selectedType === 'company' ? formData.companyName : null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast.success("Message sent. We'll get back to you within 24 hours.");
      setIsSubmitted(true);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        practiceName: '',
        companyName: '',
        message: '',
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again or email hello@perkily.io');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact | ClinicalOS by Perkily"
        description="Talk to the Perkily team about ClinicalOS — demos, onboarding, and support for your medical practice."
        keywords="contact ClinicalOS, medical practice AI, healthcare demo"
        canonical="https://www.perkily.io/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.02] rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-[800px] mx-auto text-center">
          <RevealOnView>
            <p className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-6">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1] mb-6">
              Let's talk about your practice.
            </h1>
            <p className="text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-[480px] mx-auto">
              Demos, onboarding, and support — we reply within one business day.
            </p>
          </RevealOnView>
        </div>
      </section>

      {/* Form + info */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
            {/* Left panel */}
            <RevealOnView>
              <div className="space-y-6">
                {contactPoints.map((point) => (
                  <div
                    key={point.label}
                    className="rounded-[1.5rem] border border-white/10 bg-surface p-6"
                  >
                    <p className="font-mono text-[11px] tracking-[0.15em] text-white/30 uppercase mb-2">
                      {point.label}
                    </p>
                    <p className="text-[14px] text-white/45 font-light leading-relaxed mb-3">
                      {point.detail}
                    </p>
                    <a
                      href={`mailto:${point.email}`}
                      className="inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {point.email}
                    </a>
                  </div>
                ))}
              </div>
            </RevealOnView>

            {/* Form */}
            <RevealOnView delay={0.1}>
              <div className="rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8 md:p-10">
                <div className="mb-8">
                  <label className="block font-mono text-[11px] tracking-[0.15em] text-white/30 uppercase mb-3">
                    I represent a
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        { value: 'professional' as UserType, label: 'Medical practice' },
                        { value: 'company' as UserType, label: 'Partner / vendor' },
                      ] as const
                    ).map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setSelectedType(value)}
                        className={`px-4 py-2 rounded-full text-[13px] font-light transition-all ${
                          selectedType === value
                            ? 'bg-white text-black'
                            : 'border border-white/10 text-white/60 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-[13px] text-white/50 mb-2 font-light">
                        First name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-white/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[13px] text-white/50 mb-2 font-light">
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-white/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-[13px] text-white/50 mb-2 font-light">
                        Work email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@clinic.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-white/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[13px] text-white/50 mb-2 font-light">
                        Phone <span className="text-white/25">(optional)</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 555 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-white/20"
                      />
                    </div>
                  </div>

                  {selectedType === 'professional' && (
                    <div>
                      <label htmlFor="practiceName" className="block text-[13px] text-white/50 mb-2 font-light">
                        Practice name
                      </label>
                      <Input
                        id="practiceName"
                        type="text"
                        placeholder="Your practice or clinic"
                        value={formData.practiceName}
                        onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                        required
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-white/20"
                      />
                    </div>
                  )}

                  {selectedType === 'company' && (
                    <div>
                      <label htmlFor="companyName" className="block text-[13px] text-white/50 mb-2 font-light">
                        Company name
                      </label>
                      <Input
                        id="companyName"
                        type="text"
                        placeholder="Your organization"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-white/20"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-[13px] text-white/50 mb-2 font-light">
                      How can we help?
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your practice, team size, or what you're looking to automate."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 resize-none rounded-xl focus-visible:ring-white/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-white text-black text-[14px] font-medium hover:bg-white/90 transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Check className="h-4 w-4" />
                        Message sent
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </RevealOnView>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
