import React from 'react';
import { motion } from 'framer-motion';

const FlemingAI = () => {
  const features = [
    {
      title: 'Symptom Analysis',
      description: 'Advanced AI-powered symptom analysis for accurate health insights',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      title: 'Medication Guide',
      description: 'Personalized medication management and reminders',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Healthcare Network',
      description: 'Access to our extensive network of healthcare providers',
      gradient: 'from-pink-500/20 to-orange-500/20'
    },
    {
      title: 'Preventative Care',
      description: 'Proactive health recommendations and wellness tracking',
      gradient: 'from-orange-500/20 to-blue-500/20'
    }
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1400px] rounded-[2.5rem] overflow-hidden">
        {/* Animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-slow" style={{ padding: '1px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-xl" />
        </div>

        <section className="relative w-full bg-black/95 backdrop-blur-xl rounded-[2.5rem] overflow-hidden">
          {/* Sophisticated background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a1a1a,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1a1a1a,transparent_50%)]" />
          
          {/* Subtle animated gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
          </div>

          {/* Main content */}
          <div className="relative py-20 px-8 sm:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              {/* Left side - Title and CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-2/5 text-left space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                      Fleming<span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">AI</span>
                    </h2>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[#8E8E93] text-xl xl:text-2xl font-light leading-relaxed max-w-xl"
                  >
                    Your intelligent healthcare companion, powered by advanced artificial intelligence
                  </motion.p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <a 
                    href="https://app.perkily.io/fleming-ai" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="group relative inline-flex px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Experience FlemingAI
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right side - Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative perspective-1000"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1E]/90 backdrop-blur-xl border border-[#2C2C2E] p-6 h-full transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                      <div className="relative z-10 space-y-3">
                        <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-[#8E8E93] text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Glass reflection effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-transparent pointer-events-none" />
            
            {/* Floating orbs */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default FlemingAI; 