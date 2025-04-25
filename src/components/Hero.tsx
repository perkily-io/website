import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-28 sm:pt-32 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-5 sm:px-6 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] bg-[#00A3FF]/5 rounded-full blur-[80px] sm:blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] bg-[#00FFB2]/5 rounded-full blur-[80px] sm:blur-[150px] animate-pulse-slow delay-1000"></div>
        <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left Side - Copy */}
          <div className="relative space-y-6 sm:space-y-8 animate-fade-in z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05]">
              <span className="text-sm text-[#00FFB2]">New</span>
              <span className="text-sm text-white/60">Fleming AI 2.0 Released</span>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block">Reimagining</span>
                <span className="block mt-1 sm:mt-0">Healthcare<span className="text-gradient-blue">.</span></span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-lg font-light leading-relaxed">
                Two intelligent platforms. One seamless ecosystem. 
                <span className="text-white">For patients and professionals alike.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 w-full sm:w-auto pt-2">
              <Button className="group bg-[#00A3FF] hover:bg-[#0090FF] text-white px-6 py-6 rounded-xl text-base transition-all duration-300 w-full sm:w-auto">
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link to="/about">
                <Button variant="outline" className="border-white/10 hover:bg-white/[0.03] text-white px-6 py-6 rounded-xl text-base w-full sm:w-auto">
                  About Perkily
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-4 sm:pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full ring-2 ring-black bg-gradient-to-r from-[#00A3FF] to-[#0066FF] flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/60">
                <span className="text-white font-medium">4.9/5</span> from over 2,000 healthcare providers
              </p>
            </div>
          </div>
          
          {/* Right Side - App Screenshots */}
          <div className="relative h-[550px] lg:block mt-8 sm:mt-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Patient App */}
              <div className="relative w-[260px] sm:w-64 md:w-72 glass-card rounded-[2rem] p-3 animate-float-slow glow-emerald transform scale-95 sm:scale-100 -rotate-6 translate-x-12 translate-y-4 z-20">
                <div className="relative w-full h-full overflow-hidden rounded-[1.7rem] border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img 
                    src="/img/app.perkily.io_(iPhone 12 Pro) (1).png"
                    alt="Perkily Patient App"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Pro App */}
              <div className="absolute top-0 left-0 w-[260px] sm:w-64 md:w-72 glass-card rounded-[2rem] p-3 animate-float-slow-reverse glow transform scale-95 sm:scale-100 rotate-6 -translate-x-12 -translate-y-4">
                <div className="relative w-full h-full overflow-hidden rounded-[1.7rem] border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img 
                    src="/img/app.perkily.io_(iPhone 12 Pro).png"
                    alt="Perkily Pro App"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
