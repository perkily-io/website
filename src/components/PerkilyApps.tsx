import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Shield, Brain, Stethoscope } from 'lucide-react';

const FeatureTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-white/70">
    {children}
  </span>
);

const AppSection = ({ 
  title, 
  description,
  features,
  cta,
  gradientFrom,
  gradientTo,
  icon: Icon,
  isNew = false
}: { 
  title: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    link: string;
  };
  gradientFrom: string;
  gradientTo: string;
  icon: React.ElementType;
  isNew?: boolean;
}) => (
  <div className="group relative">
    {/* Background Gradient Effect */}
    <div className={`absolute inset-0 rounded-[2rem] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-10 bg-gradient-to-br from-[${gradientFrom}] to-[${gradientTo}]`} />
    
    {/* Card Content */}
    <div className="glass-card relative overflow-hidden p-8 sm:p-10 rounded-[2rem] border border-white/[0.05] backdrop-blur-xl transition-all duration-500 group-hover:border-white/[0.1]">
      {/* Status Badge */}
      {isNew && (
        <span className="absolute top-8 right-8 px-3 py-1 rounded-full text-xs font-medium bg-[#8B5CF6]/10 text-[#8B5CF6]">
          New
        </span>
      )}

      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[${gradientFrom}]/20 to-[${gradientTo}]/20 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110`}>
        <Icon className={`w-8 h-8 text-[${gradientTo}]`} />
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-white/60 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <FeatureTag key={feature}>{feature}</FeatureTag>
          ))}
        </div>

        {/* Security Info */}
        <div className="flex items-center gap-2 py-4">
          <Shield className="w-4 h-4 text-[#00A3FF]" />
          <span className="text-sm text-white/40">HIPAA Compliant & Secure</span>
        </div>

        {/* CTA */}
        <Button 
          onClick={() => window.open(cta.link, '_blank')}
          className={`w-full group/btn bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] text-white hover:opacity-90 transition-all duration-200 h-14 text-base`}
        >
          {cta.text}
          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className={`absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[${gradientFrom}]/5 to-[${gradientTo}]/5 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 transition-opacity duration-500 group-hover:opacity-70`} />
    </div>
  </div>
);

const PerkilyApps = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten" />
      
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 relative">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
            Two Products.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6]">One Vision.</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-2xl mx-auto">
            Pro for professionals. AskFleming for everyone.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AppSection
            title="AskFleming"
            description="Your intelligent healthcare assistant. Safe, accurate answers to any health question, anytime."
            features={['Instant Answers', 'Safe Guidance', 'Evidence-Based', 'Always Available']}
            cta={{ text: 'Ask Fleming', link: 'https://askfleming.perkily.io' }}
            gradientFrom="#00A3FF"
            gradientTo="#0090FF"
            icon={Brain}
            isNew={true}
          />
          
          <AppSection
            title="Pro"
            description="AI-powered practice management platform. Voice to SOAP notes, diagnostic insights, and automated claims."
            features={['AI Clinical Notes', 'Diagnostic Insights', 'Automated Claims', 'Practice Management']}
            cta={{ text: 'Try Pro', link: 'https://pro.perkily.io/login' }}
            gradientFrom="#8B5CF6"
            gradientTo="#A78BFA"
            icon={Stethoscope}
          />
        </div>

        {/* Bottom Note */}
        <div className="mt-12 sm:mt-16 text-center">
            <p className="text-white/40 text-xs sm:text-sm">
            Both products work seamlessly in your web browser.
            <button className="ml-2 text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors duration-200">
              Learn more →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerkilyApps; 