'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaMoon, FaSun, FaBars, FaAmbulance, FaHeartbeat, FaComments } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import Header from '@/app/components/Header';

export default function EmergencyResponse() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: 'One-Touch Emergency Call',
      description: 'Instantly connect with emergency services with a single tap.',
      icon: <FaPhone className="text-3xl" />
    },
    {
      title: 'Medical Assistance',
      description: 'Quick access to nearby hospitals and medical facilities.',
      icon: <FaHeartbeat className="text-3xl" />
    },
    {
      title: 'Law Enforcement',
      description: 'Direct line to local police and security services.',
      icon: <FaShieldAlt className="text-3xl" />
    },
    {
      title: 'Emergency Chat',
      description: 'Silent communication option for situations where calling isn\'t safe.',
      icon: <FaComments className="text-3xl" />
    }
  ];

  return (
    <main className={`min-h-screen ${isDark ? 'bg-background text-foreground' : 'bg-gradient-to-br from-background via-secondary/20 to-accent/20'}`}>
      <Header isDark={isDark} setIsDark={toggleTheme} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-block p-4 rounded-full bg-red-500 mb-8"
            >
              <FaAmbulance className="text-4xl text-white" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Emergency Response
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Get immediate assistance when you need it most with our comprehensive emergency response system.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="text-purple-600 dark:text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Emergency Detection',
                description: 'Our system recognizes emergency situations through various triggers like panic button or voice commands.'
              },
              {
                step: '02',
                title: 'Instant Connection',
                description: 'Automatically connects you to the most appropriate emergency service based on the situation.'
              },
              {
                step: '03',
                title: 'Location Transmission',
                description: 'Your precise location is immediately shared with emergency responders.'
              },
              {
                step: '04',
                title: 'Continuous Support',
                description: 'Maintains contact until help arrives and notifies your emergency contacts.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 