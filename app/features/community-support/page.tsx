'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUsers, FaMoon, FaSun, FaBars, FaHandsHelping, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import Header from '@/app/components/Header';

export default function CommunitySupport() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: 'Support Groups',
      description: 'Connect with others who share similar experiences and concerns.',
      icon: <FaUsers className="text-3xl" />
    },
    {
      title: 'Mentorship Program',
      description: 'Learn from experienced mentors who can guide and support you.',
      icon: <FaGraduationCap className="text-3xl" />
    },
    {
      title: 'Safe Spaces',
      description: 'Find and share information about verified safe locations and businesses.',
      icon: <FaShieldAlt className="text-3xl" />
    },
    {
      title: 'Resource Sharing',
      description: 'Access and contribute to a growing database of safety resources.',
      icon: <FaHandsHelping className="text-3xl" />
    }
  ];

  return (
    <main className={`min-h-screen ${isDark ? 'bg-background text-foreground' : 'bg-gradient-to-br from-background via-secondary/20 to-accent/20'}`}>
      <Header isDark={isDark} setIsDark={toggleTheme} />

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Community Support
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Connect with others and access valuable resources for your safety and well-being
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 