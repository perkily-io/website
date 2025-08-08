import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Calendar, Brain, Heart, Building2, BarChart3 } from 'lucide-react';

const PlatformCard = ({ 
  title, 
  features, 
  icon: Icon,
  gradientClass 
}: { 
  title: string; 
  features: string[]; 
  icon: React.ElementType;
  gradientClass: string;
}) => {
  return (
    <div className="relative group">
      <div className={`absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10 ${gradientClass}`} />
      <Card className="glass-card h-full p-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/10">
      <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8 ${gradientClass.includes('blue') ? 'text-[#00A3FF]' : gradientClass.includes('purple') ? 'text-[#8B5CF6]' : 'text-[#FF719A]'}`}>
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className={`mt-1 w-1.5 h-1.5 rounded-full ${gradientClass.includes('blue') ? 'bg-[#00A3FF]' : gradientClass.includes('purple') ? 'bg-[#8B5CF6]' : 'bg-[#FF719A]'}`} />
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

const WhyPerkily = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00A3FF]/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Why <span className="text-gradient-blue">Perkily</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-lg">
            One platform, endless possibilities. Transform healthcare experiences for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <PlatformCard
            title="For Patients"
            icon={Heart}
            gradientClass="from-[#00A3FF]/20 to-transparent"
            features={[
              "Schedule and manage doctor visits effortlessly",
              "Get instant AI-powered medical guidance",
              "Earn rewards for healthy habits",
              "All your healthcare needs in one smart platform"
            ]}
          />
          
          <PlatformCard
            title="For Medical Practices"
            icon={Brain}
            gradientClass="from-[#8B5CF6]/20 to-transparent purple"
            features={[
              "Reduce no-shows with smart scheduling",
              "AI-powered EHR and clinical documentation",
              "Provide instant patient support",
              "Industry-leading security compliance"
            ]}
          />
          
          <PlatformCard
            title="For Partners"
            icon={Building2}
            gradientClass="from-[#FF719A]/20 to-transparent"
            features={[
              "Connect with engaged healthcare users",
              "Access real-time analytics insights",
              "Enhance patient experience with rewards",
              "Strategic healthcare positioning"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPerkily;
