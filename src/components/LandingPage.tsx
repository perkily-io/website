// LandingPage.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, ChartBarIcon, HeartIcon, CpuChipIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

const LandingPage = () => {
  return (
    <div className="bg-white relative z-0">
      <header className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="container mx-auto px-6 py-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Loyalty Programs That Drive Growth
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Create, manage, and optimize customer loyalty programs that keep your patients coming back.
              Streamline your healthcare practice's retention strategy with Perkily.
            </p>
            <Link 
              href="/demo"
              className="bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-2"
            >
              <span>Request Demo</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </header>

      <section className="py-20 bg-white relative z-0">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard 
              title="Loyalty Program Management"
              description="Create and manage customized loyalty programs that reward patients for regular visits, preventive care, and healthy behaviors."
              icon={<ChartBarIcon className="w-8 h-8" />}
              bulletPoints={[
                "Customizable point systems",
                "Multiple reward tiers",
                "Automated point tracking",
                "Digital reward redemption"
              ]}
            />
            <FeatureCard 
              title="Patient Engagement"
              description="Keep patients engaged with personalized communications and rewards that encourage regular visits and preventive care."
              icon={<HeartIcon className="w-8 h-8" />}
              bulletPoints={[
                "Automated notifications",
                "Birthday rewards",
                "Preventive care reminders",
                "Health milestone celebrations"
              ]}
            />
            <FeatureCard 
              title="Analytics Dashboard"
              description="Track program performance and patient engagement with detailed analytics and insights."
              icon={<CpuChipIcon className="w-8 h-8" />}
              bulletPoints={[
                "Real-time program metrics",
                "Patient engagement tracking",
                "ROI calculations",
                "Performance reporting"
              ]}
            />
            <FeatureCard 
              title="Integration Capabilities"
              description="Seamlessly integrate with your existing practice management and EMR systems."
              icon={<ArrowsRightLeftIcon className="w-8 h-8" />}
              bulletPoints={[
                "EMR integration",
                "Practice management software",
                "Payment systems",
                "API access"
              ]}
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 relative z-0">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Perkily</h3>
              <p className="text-gray-400">
                Making patient loyalty programs simple and effective.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-indigo-300 transition-colors duration-300">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-indigo-300 transition-colors duration-300">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-indigo-300 transition-colors duration-300">Request Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-indigo-300 transition-colors duration-300">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-300 transition-colors duration-300">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-indigo-300 transition-colors duration-300">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-indigo-300 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-indigo-300 transition-colors duration-300">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Perkily. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  bulletPoints 
}: { 
  title: string;
  description: string;
  icon: React.ReactNode;
  bulletPoints: string[];
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
    }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
  >
    <div className="w-16 h-16 mb-6 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-100">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-2">
      {bulletPoints.map((point, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-indigo-600 mt-1">✓</span>
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default LandingPage;