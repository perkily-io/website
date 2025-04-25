
import React from 'react';
import { MessageSquare, Brain, Shield } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  accentColor 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  accentColor: string;
}) => {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 rounded-3xl ${accentColor} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`} />
      
      <div className="glass-card p-8 h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/10">
        <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${accentColor.includes('blue') ? 'text-[#00A3FF]' : 'text-[#00FFB2]'}`}>
          {icon}
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-white/60 text-base leading-relaxed">{description}</p>
        
        <div className="mt-8 flex items-center text-sm font-medium">
          <span className={`${accentColor.includes('blue') ? 'text-[#00A3FF]' : 'text-[#00FFB2]'} group-hover:translate-x-1 transition-transform duration-300`}>
            Learn more →
          </span>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten"></div>
      
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core Features
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Experience healthcare reimagined through cutting-edge AI and intuitive design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Brain className="w-8 h-8" />}
            title="Fleming AI Assistant"
            description="Advanced medical guidance powered by AI. Get instant insights, medication reminders, and personalized health recommendations."
            accentColor="from-[#00A3FF]/20 to-transparent"
          />
          
          <FeatureCard 
            icon={<Shield className="w-8 h-8" />}
            title="Secure Platform"
            description="Industry-leading security standards protect your data. HIPAA-compliant infrastructure with end-to-end encryption."
            accentColor="from-[#00FFB2]/20 to-transparent"
          />
          
          <FeatureCard 
            icon={<MessageSquare className="w-8 h-8" />}
            title="Smart Communication"
            description="Seamless interaction between patients and providers. Real-time messaging, appointment reminders, and automated follow-ups."
            accentColor="from-[#00A3FF]/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
