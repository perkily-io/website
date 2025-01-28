// Features.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChartBarIcon, HeartIcon, CpuChipIcon, ArrowsRightLeftIcon, PlayCircleIcon } from '@heroicons/react/24/outline'

const Features = () => {
  const features = [
    {
      title: 'Loyalty Program Management',
      description: 'Create and manage customized loyalty programs that reward patients for regular visits, preventive care, and healthy behaviors.',
      icon: <ChartBarIcon className="w-8 h-8" />,
      details: [
        'Customizable point systems',
        'Multiple reward tiers',
        'Automated point tracking',
        'Digital reward redemption'
      ]
    },
    {
      title: 'Patient Engagement',
      description: 'Keep patients engaged with personalized communications and rewards that encourage regular visits and preventive care.',
      icon: <HeartIcon className="w-8 h-8" />,
      details: [
        'Automated notifications',
        'Birthday rewards',
        'Preventive care reminders',
        'Health milestone celebrations'
      ]
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track program performance and patient engagement with detailed analytics and insights.',
      icon: <CpuChipIcon className="w-8 h-8" />,
      details: [
        'Real-time program metrics',
        'Patient engagement tracking',
        'ROI calculations',
        'Trend analysis'
      ]
    },
    {
      title: 'Integration Capabilities',
      description: 'Seamlessly integrate with your existing practice management and EMR systems.',
      icon: <ArrowsRightLeftIcon className="w-8 h-8" />,
      details: [
        'EMR integration',
        'Practice management software',
        'Payment systems',
        'Communication platforms'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative z-0">
      <section className="pt-32 pb-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative z-0">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Features</h2>
            <p className="text-xl mb-12 text-indigo-200">
              Everything you need to create and manage successful loyalty programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureHighlightCard
              title="Easy to Manage"
              description="Intuitive dashboard for creating and managing loyalty programs with just a few clicks."
              icon={<ChartBarIcon className="w-8 h-8" />}
            />
            <FeatureHighlightCard
              title="Patient Engagement"
              description="Keep patients engaged with personalized rewards and automated communications."
              icon={<HeartIcon className="w-8 h-8" />}
            />
            <FeatureHighlightCard
              title="Data Insights"
              description="Track program performance and patient behavior with detailed analytics."
              icon={<CpuChipIcon className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      <motion.section 
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center text-gray-700">
                      <span className="text-indigo-600 mr-3">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">See Perkily in Action</h2>
            <p className="text-xl text-gray-600">
              Watch how easy it is to set up and manage your loyalty program
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-2xl aspect-video overflow-hidden">
            <div className="flex items-center justify-center h-full bg-gradient-to-r from-indigo-500 to-blue-600">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                <PlayCircleIcon className="w-6 h-6" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Integration Partners</h2>
            <p className="text-xl text-gray-600">
              Works seamlessly with your favorite healthcare platforms
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white h-24 rounded-xl shadow-md flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <span className="text-gray-400">Partner Logo</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              Ready to Transform Patient Loyalty?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 transition-all duration-300 hover:shadow-2xl">
                Start Free Trial
              </button>
              <button className="border-2 border-indigo-300 text-indigo-100 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const FeatureHighlightCard = ({ title, description, icon }: { 
  title: string
  description: string
  icon: React.ReactNode
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20"
  >
    <div className="text-indigo-300 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-white/80">{description}</p>
  </motion.div>
)

export default Features