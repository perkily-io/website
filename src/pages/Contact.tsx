import React, { FormEvent, useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, ArrowRight, Loader2, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/sonner';

type UserType = 'patient' | 'professional' | 'company';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  practiceName?: string;
  companyName?: string;
  message: string;
}

const ContactPage = () => {
  const [selectedType, setSelectedType] = useState<UserType>('patient');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    practiceName: '',
    companyName: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            user_type: selectedType,
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            practice_name: selectedType === 'professional' ? formData.practiceName : null,
            company_name: selectedType === 'company' ? formData.companyName : null,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      toast.success('Message sent! We\'ll get back to you within 24 hours.');
      setIsSubmitted(true);
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        practiceName: '',
        companyName: '',
        message: ''
      });

      // Reset submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again or email us directly at hello@perkily.io');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us"
        description="Get in touch with Perkily. We reply within 24 hours."
        keywords="contact perkily, healthcare support, medical professionals contact"
        canonical="https://perkily.io/contact"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(59,130,246,0.15),rgba(0,0,0,0))]" />
          <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6 leading-[1.1]">
                Let's talk
              </h1>
              <p className="text-lg sm:text-xl text-white/70 font-light max-w-xl mx-auto">
                Whether you're a patient, clinician, or partner, we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
          <div className="space-y-8">
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-3">
                I am a
              </label>
              <div className="flex gap-3">
                {(['patient', 'professional', 'company'] as UserType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedType === type
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {type === 'patient' ? 'Patient' : type === 'professional' ? 'Clinician' : 'Company'}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                    First name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                />
              </div>

              {selectedType === 'professional' && (
                <div>
                  <label htmlFor="practiceName" className="block text-sm font-medium text-white/80 mb-2">
                    Practice name
                  </label>
                  <Input
                    id="practiceName"
                    type="text"
                    placeholder="Your practice"
                    value={formData.practiceName}
                    onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                  />
                </div>
              )}

              {selectedType === 'company' && (
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-white/80 mb-2">
                    Company name
                  </label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Your company"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-white text-black hover:bg-white/90 h-12 rounded-full font-medium transition-all"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="inline-flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    Message sent!
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    Send message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5" />
                <div>
                  <div className="text-sm font-medium text-white/90">Email us directly</div>
                  <a href="mailto:hello@perkily.io" className="text-sm hover:text-white transition-colors">
                    hello@perkily.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
