import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Heart, Laptop2, Leaf, Shield, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    id: '2',
    title: 'Product Designer',
    department: 'Design',
    location: 'Johannesburg',
    type: 'Full-time'
  },
  {
    id: '3',
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    id: '4',
    title: 'Healthcare Data Scientist',
    department: 'Data Science',
    location: 'Remote',
    type: 'Full-time'
  }
];

const benefits = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Remote-First Culture',
    description: 'Work from anywhere in the world. We believe in hiring the best talent, regardless of location.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Comprehensive Healthcare',
    description: 'Full medical, dental, and vision coverage for you and your dependents.'
  },
  {
    icon: <Laptop2 className="w-6 h-6" />,
    title: 'Learning & Development',
    description: 'Annual learning stipend and dedicated time for professional growth.'
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: 'Inclusive Environment',
    description: 'A diverse, equitable, and inclusive workplace where everyone belongs.'
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Wellness Programs',
    description: 'Mental health support, fitness reimbursements, and wellness days.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Financial Benefits',
    description: 'Competitive salary, equity packages, and 401(k) matching.'
  }
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/videos/careers-hero.mp4" type="video/mp4" />
        </video>
        
        <div className="container relative z-20 px-4 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          >
            Join Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-8"
          >
            Help us transform healthcare through innovative technology and human-centered design.
          </motion.p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-black">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6]"
          >
            Open Positions
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {jobPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/[0.03] rounded-xl p-6 mb-4 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="text-white/60">{position.department}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white/60">{position.location}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white/60">{position.type}</span>
                    </div>
                  </div>
                  <Button
                    className="bg-white/10 hover:bg-white/20 text-white transition-all duration-300 group-hover:translate-x-1"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#111]">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6]"
          >
            Why Join Perkily
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.03] rounded-xl p-6 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="text-[#00A3FF] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            >
              Don't see the right role?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 mb-8"
            >
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                className="bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6] text-white px-8 py-6 text-lg hover:opacity-90 transition-all duration-300"
              >
                Submit Your Resume
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers; 