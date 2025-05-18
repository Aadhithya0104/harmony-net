'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaMapMarkerAlt, FaMoon, FaSun, FaBars, FaUserFriends, FaRoute, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import LocationTracker from '@/app/components/LocationTracker';
import TrustedContacts from '@/app/components/TrustedContacts';
import LocationSharing from '@/app/components/LocationSharing';
import { useTheme } from '@/app/context/ThemeContext';
import Header from '@/app/components/Header';

export default function LocationSharingPage() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tracking');

  const features = [
    {
      title: 'Real-time Location Tracking',
      description: 'Share your live location with trusted contacts in real-time.',
      icon: <FaMapMarkerAlt className="text-3xl" />
    },
    {
      title: 'Trusted Contacts',
      description: 'Manage and organize your emergency contacts list.',
      icon: <FaUserFriends className="text-3xl" />
    },
    {
      title: 'Journey Sharing',
      description: 'Share your travel routes and estimated arrival times.',
      icon: <FaRoute className="text-3xl" />
    },
    {
      title: 'Privacy Controls',
      description: 'Full control over who can see your location and for how long.',
      icon: <FaLock className="text-3xl" />
    }
  ];

  return (
    <main className={`min-h-screen ${isDark ? 'bg-background text-foreground' : 'bg-gradient-to-br from-background via-secondary/20 to-accent/20'} pt-40 sm:pt-48 lg:pt-56 xl:pt-64`}>
      <Header isDark={isDark} setIsDark={toggleTheme} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-block p-4 rounded-full bg-blue-500 mb-8"
            >
              <FaMapMarkerAlt className="text-4xl text-white" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Live Location Sharing
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Keep your loved ones informed about your whereabouts with our secure and real-time location sharing feature.
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

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('tracking')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'tracking'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Location Tracking
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'contacts'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Trusted Contacts
            </button>
            <button
              onClick={() => setActiveTab('sharing')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'sharing'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Journey Sharing
            </button>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {activeTab === 'tracking' && <LocationTracker />}
            {activeTab === 'contacts' && <TrustedContacts />}
            {activeTab === 'sharing' && <LocationSharing />}
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
                title: 'Set Up Trusted Contacts',
                description: 'Add and verify your emergency contacts who will receive your location updates.'
              },
              {
                step: '02',
                title: 'Start Location Sharing',
                description: 'Choose when and with whom to share your location with just a tap.'
              },
              {
                step: '03',
                title: 'Real-time Updates',
                description: 'Your contacts receive live updates of your location on their devices.'
              },
              {
                step: '04',
                title: 'Journey Completion',
                description: 'Automatically notify contacts when you\'ve safely reached your destination.'
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