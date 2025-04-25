import React, { FormEvent, useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Heart, Building2, Stethoscope, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
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

  return (
    <Layout>
      <SEO 
        title="Contact Us"
        description="Get in touch with Perkily Health Technologies. Whether you're a patient, healthcare provider, or medical company, we're here to help transform your healthcare experience."
        keywords="contact perkily, healthcare support, medical professionals contact, healthcare technology support, patient support"
        canonical="https://perkily.io/contact"
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#00FFB2]">Touch</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you're a patient, healthcare provider, or medical company, we're here to help you transform healthcare experiences.
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {userTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id as UserType)}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 ${
                  selectedType === type.id
                    ? 'border-[#00FFB2]/30 bg-[#00FFB2]/5'
                    : 'border-white/5 hover:border-white/10 bg-white/[0.02]'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
                    selectedType === type.id
                      ? 'bg-[#00FFB2]/10 text-[#00FFB2]'
                      : 'bg-white/5 text-white/60 group-hover:bg-white/10'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{type.title}</h3>
                  <p className="text-sm text-white/60">{type.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl border border-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFB2]/50"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFB2]/50"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFB2]/50"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {selectedType === 'professional' && (
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Medical Practice Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFB2]/50"
                    placeholder="Enter your practice name"
                    value={formData.practiceName}
                    onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                    required
                  />
                </div>
              )}

              {selectedType === 'company' && (
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFB2]/50"
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFB2]/50"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-white py-6 rounded-xl text-base transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#00FFB2]" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Email Us</h4>
                <p className="text-sm text-white/60">hello@perkily.io</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#00FFB2]" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Call Us</h4>
                <p className="text-sm text-white/60">+27 (0) 12 345 6789</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#00FFB2]" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Visit Us</h4>
                <p className="text-sm text-white/60">Johannesburg, South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 