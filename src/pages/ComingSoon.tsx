import React, { FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ComingSoon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get the page name from the URL path
  const pageName = location.pathname.substring(1).split('/')[0];
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  // SEO descriptions for different pages
  const seoDescriptions: Record<string, string> = {
    blog: "Stay tuned for the latest insights, news, and updates from Perkily Health Technologies. Our blog will feature healthcare innovation, medical technology trends, and industry expertise.",
    press: "Access Perkily's latest press releases, media coverage, and company news. Stay updated on our journey to transform healthcare through technology and innovation.",
    docs: "Comprehensive documentation and technical resources for Perkily's healthcare platform. Integration guides, API references, and developer tools coming soon.",
    help: "Get the support you need with Perkily's upcoming help center. FAQs, guides, and resources to help you make the most of our healthcare platform."
  };

  // SEO keywords for different pages
  const seoKeywords: Record<string, string> = {
    blog: "healthcare blog, medical technology news, healthcare innovation, patient care insights, medical professional resources",
    press: "perkily news, healthcare technology press, medical innovation news, healthcare platform updates",
    docs: "perkily documentation, healthcare API, medical technology integration, developer resources, technical guides",
    help: "perkily support, healthcare platform help, medical technology support, patient care assistance"
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a formatted email body
      const emailBody = `
New Newsletter Signup:

Page: ${formattedPageName}
Email: ${email}
      `;

      // Send email using mailto link
      window.location.href = `mailto:hello@perkily.io?subject=Newsletter Signup - ${formattedPageName}&body=${encodeURIComponent(emailBody)}`;
      
      // Clear form
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <SEO 
        title={`${formattedPageName} - Coming Soon`}
        description={seoDescriptions[pageName] || `${formattedPageName} section coming soon to Perkily Health Technologies. Stay tuned for updates.`}
        keywords={seoKeywords[pageName] || "perkily, healthcare technology, medical innovation"}
        canonical={`https://perkily.io${location.pathname}`}
        noindex={true} // Coming soon pages should not be indexed
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6">
        {/* Ambient Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00A3FF]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00FFB2]/5 rounded-full blur-[100px]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten" />

        {/* Content */}
        <div className="relative text-center max-w-2xl mx-auto pt-20">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            {formattedPageName} <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#00FFB2]">Coming Soon</span>
          </h1>
          <p className="text-lg text-white/60 mb-8">
            We're working hard to bring you something amazing. Stay tuned for updates!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="group bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
            >
              <ArrowLeft className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 px-4 sm:px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/[0.05]">
            <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
            <p className="text-white/60 mb-8">
              Be the first to know when we launch. Subscribe to our newsletter for updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00FFB2]/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-black hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Notify Me'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ComingSoon; 