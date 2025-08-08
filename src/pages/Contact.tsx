import React, { FormEvent, useMemo, useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Heart, Building2, Stethoscope, ArrowRight, Mail, Phone, MapPin, ShieldCheck, Sparkles, MessageSquare, Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';

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
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    practiceName: '',
    companyName: '',
    message: ''
  });

  const userTypes = [
    {
      id: 'patient',
      title: 'Patient',
      icon: Heart,
      description: 'Get support with your healthcare journey',
    },
    {
      id: 'professional',
      title: 'Medical Professional',
      icon: Stethoscope,
      description: 'Learn about our platform for healthcare providers',
    },
    {
      id: 'company',
      title: 'Medical Company',
      icon: Building2,
      description: 'Partner with us or integrate with our platform',
    },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a formatted email body
      const emailBody = `
New Contact Form Submission:

User Type: ${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
${selectedType === 'professional' ? `Practice Name: ${formData.practiceName}\n` : ''}${selectedType === 'company' ? `Company Name: ${formData.companyName}\n` : ''}
Message:
${formData.message}
      `;

      // Send email using mailto link
      window.location.href = `mailto:hello@perkily.io?subject=Contact Form - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
      
      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        practiceName: '',
        companyName: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const SelectedIcon = useMemo(() => userTypes.find(t => t.id === selectedType)?.icon ?? Heart, [selectedType]);

  return (
    <Layout>
      <SEO 
        title="Contact Us"
        description="Get in touch with Perkily Health Technologies. Whether you're a patient, healthcare provider, or medical company, we're here to help transform your healthcare experience."
        keywords="contact perkily, healthcare support, medical professionals contact, healthcare technology support, patient support"
        canonical="https://perkily.io/contact"
      />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5" />
            We reply within 24 hours
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Talk to the team
          </h1>
          <p className="mt-3 text-white/70 text-lg">
            We love working with patients, clinicians, and partners. Tell us a bit about you and we’ll get back fast.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Audience selection + contact info */}
          <div className="space-y-6">
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                  <SelectedIcon className="h-5 w-5" />
                </div>
                <CardTitle>Who are you?</CardTitle>
                <CardDescription className="text-white/70">Choose the option that best describes you. We’ll tailor our reply.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {userTypes.map((type) => {
                    const Icon = type.icon;
                    const isActive = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id as UserType)}
                        className={`group rounded-xl border p-4 text-left transition-colors ${isActive ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/7'}`}
                      >
                        <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md ${isActive ? 'bg-white/15' : 'bg-white/10'}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-medium">{type.title}</div>
                        <div className="mt-1 text-xs text-white/70">{type.description}</div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle>Other ways to reach us</CardTitle>
                <CardDescription className="text-white/70">Prefer email or a quick call? We’re flexible.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-5 w-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-xs text-white/70">hello@perkily.io</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-5 w-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Phone</div>
                      <div className="text-xs text-white/70">+27 73 954 4493</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="h-5 w-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Location</div>
                      <div className="text-xs text-white/70">Johannesburg, South Africa</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Form */}
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription className="text-white/70">We’ll route it to the right person and reply within a day.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-white/80">First name</label>
                    <Input
                      type="text"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-white/80">Last name</label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/80">Email</label>
                  <Input
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>

                {selectedType === 'professional' && (
                  <div>
                    <label className="mb-2 block text-sm text-white/80">Medical practice name</label>
                    <Input
                      type="text"
                      placeholder="Your practice"
                      value={formData.practiceName}
                      onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                )}

                {selectedType === 'company' && (
                  <div>
                    <label className="mb-2 block text-sm text-white/80">Company name</label>
                    <Input
                      type="text"
                      placeholder="Your company"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm text-white/80">Message</label>
                  <Textarea
                    rows={5}
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="default"
                  className="group w-full text-white py-6 rounded-xl text-base"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center"><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending</span>
                  ) : (
                    <span className="inline-flex items-center">Send message <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 