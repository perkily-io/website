// Navigation.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../app/assets/Logo.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-2 h-16">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="h-3/4">
          <div className="w-[240px] h-[80px]"> 
          <Image
            src={logo}
            alt="Perkily Logo"
            fill // Use fill instead of width/height
            className="object-left object-contain"
            priority
          />
  </div>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/features" className={navLink + "hover:bg-white/10 rounded-lg"}>
              Features
            </Link>
            <Link href="/about" className={navLink + "hover:bg-white/10 rounded-lg"}>
              About
            </Link>
            <Link href="/pricing" className={navLink + "hover:bg-white/10 rounded-lg"}>
              Pricing
            </Link>
            <Link href="/login" className="hover:text-indigo-200 transition-colors px-4 py-2 hover:bg-white/10 rounded-lg">
              Login
            </Link>
            <Link href="/signup" className={buttonLink + " bg-indigo-500/90 hover:bg-indigo-600/90"}>
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              <Link href="/features" className="block py-2 hover:text-indigo-200">
                Features
              </Link>
              <Link href="/about" className="block py-2 hover:text-indigo-200">
                About
              </Link>
              <Link href="/pricing" className="block py-2 hover:text-indigo-200">
                Pricing
              </Link>
              <Link href="/login" className="block py-2 hover:text-indigo-200">
                Login
              </Link>
              <Link href="/signup" className={buttonLink + ' w-full text-center block'}>
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

const navLink = "px-4 py-2 hover:text-indigo-200 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 hover:after:w-full after:transition-all"

const buttonLink = "bg-indigo-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-600 transition-all duration-300"

export default Navigation