import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Workflow, Network, Sparkles, Users, Shield } from 'lucide-react';

const ValueCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="glass-card relative p-6 sm:p-8 rounded-3xl border border-white/[0.05] h-full">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#00FFB2]" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-white/60 leading-relaxed">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten" />
        
        <div className="container max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm text-white/70">About Perkily</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.1]">
            Transforming Healthcare with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] inline-block">
              Intelligent Innovation
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            We're revolutionizing healthcare by seamlessly integrating AI technology to enhance patient care, streamline processes, and create better healthcare outcomes for everyone, regardless of their insurance status.
          </p>
        </div>
      </section>

      {/* Universal Access Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="glass-card rounded-[1.5rem] sm:rounded-[2rem] border border-white/[0.05] p-6 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-[#00A3FF]/20 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-[#00FFB2]/20 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Healthcare Rewards for Everyone</h2>
                  <p className="text-base sm:text-lg text-white/60 mb-6 sm:mb-8">
                    We believe that everyone deserves to be rewarded for taking care of their health. Whether you're insured or not, Perkily ensures you get rewarded for every healthcare interaction.
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#00FFB2]/10 flex items-center justify-center mt-1 flex-shrink-0">
                        <Users className="w-5 h-5 text-[#00FFB2]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg text-white font-medium mb-1 sm:mb-2">Universal Access</h3>
                        <p className="text-sm sm:text-base text-white/60">No insurance required. Everyone can earn rewards for their healthcare journey.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#00FFB2]/10 flex items-center justify-center mt-1 flex-shrink-0">
                        <Shield className="w-5 h-5 text-[#00FFB2]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg text-white font-medium mb-1 sm:mb-2">Equal Opportunities</h3>
                        <p className="text-sm sm:text-base text-white/60">Same great rewards and benefits for all users, regardless of insurance status.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[200px] sm:h-[300px] md:h-[400px] mt-8 md:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/20 via-[#00FFB2]/20 to-transparent rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-3xl mix-blend-overlay opacity-50" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="glass-card rounded-[2rem] border border-white/[0.05] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 md:gap-0">
              {/* Left Column - Content */}
              <div className="p-12 md:p-16 flex items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Vision for Healthcare
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    We envision a healthcare ecosystem where AI-powered automation eliminates administrative burdens, where patient interactions are meaningful and rewarding, and where healthcare providers can focus on what matters most – delivering exceptional care.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00FFB2]/10 flex items-center justify-center mt-1">
                        <Sparkles className="w-4 h-4 text-[#00FFB2]" />
                      </div>
                      <p className="text-white/60">Seamless integration of AI in healthcare workflows</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00FFB2]/10 flex items-center justify-center mt-1">
                        <Sparkles className="w-4 h-4 text-[#00FFB2]" />
                      </div>
                      <p className="text-white/60">Automated administrative processes and documentation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00FFB2]/10 flex items-center justify-center mt-1">
                        <Sparkles className="w-4 h-4 text-[#00FFB2]" />
                      </div>
                      <p className="text-white/60">Enhanced patient engagement and care outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Gradient */}
              <div className="relative h-[400px] md:h-auto bg-gradient-to-br from-[#00A3FF]/20 to-[#00FFB2]/20">
                <div className="absolute inset-0 backdrop-blur-3xl mix-blend-overlay opacity-50" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Core Focus Areas</h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              Building an inclusive healthcare ecosystem powered by artificial intelligence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <ValueCard 
              icon={Brain}
              title="AI Integration"
              description="Leveraging advanced AI to automate documentation, enhance decision-making, and improve patient care through intelligent insights."
            />
            <ValueCard 
              icon={Workflow}
              title="Universal Rewards"
              description="Making healthcare rewards accessible to everyone, regardless of insurance status. Every healthcare interaction is an opportunity to earn rewards."
            />
            <ValueCard 
              icon={Network}
              title="Connected Ecosystem"
              description="Creating a unified platform where healthcare providers, patients, and systems work together seamlessly for better outcomes."
            />
          </div>
        </div>
      </section>

      {/* Future of Healthcare */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="glass-card rounded-[1.5rem] sm:rounded-[2rem] border border-white/[0.05] p-6 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-[#00A3FF]/20 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-[#00FFB2]/20 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Join Us in Shaping the Future of Healthcare</h2>
              <p className="text-base sm:text-lg text-white/60 mb-6 sm:mb-8">
                Experience how AI-powered automation and universal rewards can transform healthcare delivery and improve outcomes for everyone.
              </p>
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-[#00A3FF] to-[#00FFB2] text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full hover:opacity-90 transition-all duration-300 text-base sm:text-lg group"
                onClick={() => window.location.href = 'https://app.perkily.io/auth'}
              >
                Get Started with Perkily
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About; 