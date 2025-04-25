import React, { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Check, Building2, Users, Trophy, Coins, BadgeCheck, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const BenefitCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="glass-card p-6 rounded-2xl border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00A3FF]/10 to-[#00FFB2]/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[#00FFB2]" />
    </div>
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
  </div>
);

const Partners = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a formatted email body
      const emailBody = `
New Partner Application:
        
Company Name: ${formData.companyName}
Website: ${formData.website}
Contact Name: ${formData.contactName}
Email: ${formData.email}
Message:
${formData.message}
      `;

      // Send email using mailto link
      window.location.href = `mailto:hello@perkily.io?subject=New Partner Application - ${formData.companyName}&body=${encodeURIComponent(emailBody)}`;
      
      // Clear form
      setFormData({
        companyName: '',
        website: '',
        contactName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Users,
      title: 'Access to User Base',
      description: 'Reach thousands of healthcare professionals and patients through our platform.'
    },
    {
      icon: Trophy,
      title: 'Brand Visibility',
      description: 'Featured placement in our rewards marketplace and marketing materials.'
    },
    {
      icon: Coins,
      title: 'Revenue Growth',
      description: 'Tap into new revenue streams through our rewards program integration.'
    },
    {
      icon: Building2,
      title: 'Market Leadership',
      description: 'Position your brand as a leader in healthcare innovation.'
    },
    {
      icon: BadgeCheck,
      title: 'Quality Partnerships',
      description: 'Join a curated network of premium healthcare and lifestyle brands.'
    },
    {
      icon: Zap,
      title: 'Easy Integration',
      description: 'Seamless technical integration with our rewards platform.'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-black">
      <SEO 
        title="Become a Partner"
        description="Join Perkily's network of premium healthcare partners. Access our growing user base, increase brand visibility, and drive revenue growth through innovative healthcare rewards."
        keywords="healthcare partnerships, medical partnerships, healthcare rewards program, brand partnerships, medical technology partnership"
        canonical="https://perkily.io/partners"
        ogType="website"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00A3FF]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00FFB2]/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Become a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#00FFB2]">Perkily Partner</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-8">
            Join our network of premium partners and help shape the future of healthcare rewards
          </p>
          <Button 
            size="lg"
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-black hover:opacity-90 transition-opacity"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4">Partner Benefits</h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            Unlock exclusive advantages and grow your business by partnering with Perkily
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/[0.05]">
            <h2 className="text-3xl font-semibold mb-8">Partnership Requirements</h2>
            <div className="space-y-4">
              {[
                'Established brand presence in healthcare or related industries',
                'Commitment to quality products or services',
                'Alignment with Perkily\'s mission and values',
                'Technical capability to integrate with our platform',
                'Dedicated partnership management resources'
              ].map((req) => (
                <div key={req} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FFB2] flex-shrink-0 mt-1" />
                  <span className="text-white/80">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative py-16 px-4 sm:px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/[0.05]">
            <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-white/60 mb-8">
              Interested in becoming a partner? Fill out the form below and our partnerships team will get back to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Company Name</label>
                  <Input 
                    className="bg-white/5 border-white/10 text-white" 
                    placeholder="Your company"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Website</label>
                  <Input 
                    className="bg-white/5 border-white/10 text-white" 
                    placeholder="company.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Contact Name</label>
                  <Input 
                    className="bg-white/5 border-white/10 text-white" 
                    placeholder="Your name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
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
                <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <Textarea 
                  className="bg-white/5 border-white/10 text-white min-h-[120px]" 
                  placeholder="Tell us about your company and partnership interests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-black hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Partners; 