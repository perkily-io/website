// About.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BuildingOfficeIcon, UserGroupIcon, ChartPieIcon } from '@heroicons/react/24/outline';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: '/team/sarah-johnson.jpg',
      bio: 'Former healthcare executive with 15+ years experience in patient care optimization.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: '/team/michael-chen.jpg',
      bio: 'Tech veteran with experience building scalable healthcare solutions.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer',
      image: '/team/emily-rodriguez.jpg',
      bio: 'Board-certified physician passionate about improving patient engagement.'
    }
  ];

  const stats = [
    { id: 1, name: 'Healthcare partners', value: '250+', icon: BuildingOfficeIcon },
    { id: 2, name: 'Active users', value: '1M+', icon: UserGroupIcon },
    { id: 3, name: 'Patient retention rate', value: '89%', icon: ChartPieIcon },
  ];

  return (
    <div className="bg-white relative z-10">
      <div className="relative bg-gradient-to-b from-indigo-900 to-blue-900 pt-24 pb-32 z-0">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              About Perkily
            </h2>
            <p className="text-xl text-indigo-200">
              Revolutionizing healthcare loyalty through technology and innovation
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to transforming healthcare loyalty programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 mt-2">{member.role}</p>
                  <p className="text-gray-600 mt-4">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-indigo-600 mb-4"
            >
              <BuildingOfficeIcon className="w-12 h-12 mx-auto" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              To empower healthcare providers with intelligent loyalty solutions that
              enhance patient relationships, improve health outcomes, and drive
              sustainable practice growth through innovative technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;