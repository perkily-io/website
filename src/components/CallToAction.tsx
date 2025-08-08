import React from 'react';
import { Button } from '@/components/ui/button';
import { Building2, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="glass-card relative rounded-[2rem] border border-white/[0.05] backdrop-blur-xl p-12 md:p-20">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00A3FF]/20 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-8">
        <Building2 className="w-5 h-5 text-[#8B5CF6] mr-2" />
                <span className="text-sm text-white/70">Partner Program</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Become a{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6]">
                  Perkily Partner
                </span>
              </h2>
              
              <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl">
                Join our network of trusted partners and help transform the future of healthcare rewards
              </p>
              
              <Button 
      className="group bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6] text-white px-8 py-6 rounded-full hover:opacity-90 transition-all duration-300 text-lg"
                onClick={() => window.location.href = 'https://perkily.io/partners'}
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
