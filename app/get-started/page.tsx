'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  FaBell, 
  FaMapMarkerAlt, 
  FaVideo, 
  FaPiggyBank, 
  FaRobot as FaAI,
  FaUsers,
  FaComments,
  FaHeart,
  FaMicrophone,
  FaGamepad,
  FaMobile,
  FaFileDownload,
  FaMoon,
  FaSun,
  FaBars
} from 'react-icons/fa';
import Header from '@/app/components/Header';

export default function GetStarted() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const features = [
    {
      title: 'Real-time Safety Alerts',
      description: 'Sends SMS notifications when suspicious activity is detected.',
      icon: <FaBell className="text-4xl text-white" />,
      color: 'from-red-500 to-red-600',
      link: '/features/safety-alerts'
    },
    {
      title: 'Live Location Sharing',
      description: 'Automatically shares user\'s location with emergency contacts.',
      icon: <FaMapMarkerAlt className="text-4xl text-white" />,
      color: 'from-blue-500 to-blue-600',
      link: '/features/location-sharing'
    },
    
    // {
    //   title: 'Video & Article Recommendations',
    //   description: 'Personalized content on safety, mental health, and financial security.',
    //   icon: <FaVideo className="text-4xl text-white" />,
    //   color: 'from-pink-500 to-pink-600',
    //   link: '/features/video-article'
    // },
    {
      title: 'Financial Safety Education',
      description: 'Teaches users about scams, frauds, and secure money management.',
      icon: <FaPiggyBank className="text-4xl text-white" />,
      color: 'from-yellow-500 to-yellow-600',
      link: '/features/Financial-safety'
    },
    {
      title: 'AI Virtual Assistant',
      description: 'A virtual assistant that speaks and interacts for instant help.',
      icon: <FaAI className="text-4xl text-white" />,
      color: 'from-cyan-500 to-cyan-600',
      link: 'https://woemn-safety-chatbot.vercel.app/'
    },
    {
      title: 'Workshops',
      description: 'Real-time expert sessions on mental health and safety awareness.',
      icon: <FaUsers className="text-4xl text-white" />,
      color: 'from-indigo-500 to-indigo-600',
      link: '/features/Workshop'
    },
    // {
    //   title: 'Counseling Chat Rooms',
    //   description: 'Anonymous spaces for users to seek emotional support from professionals.',
    //   icon: <FaComments className="text-4xl text-white" />,
    //   color: 'from-teal-500 to-teal-600'
    // },
    // {
    //   title: 'Mental Health Tracking',
    //   description: 'Users can log emotions and get personalized self-care suggestions.',
    //   icon: <FaHeart className="text-4xl text-white" />,
    //   color: 'from-rose-500 to-rose-600',
    //   link: '/features/mental-health'
    // },
    // {
    //   title: 'Audio Messaging',
    //   description: 'Record and send voice messages instead of typing.',
    //   icon: <FaMicrophone className="text-4xl text-white" />,
    //   color: 'from-orange-500 to-orange-600',
    //   link: '/features/audio-message'
    // },
    {
      title: 'Safety Games',
      description: 'Interactive learning about safety through fun activities.',
      icon: <FaGamepad className="text-4xl text-white" />,
      color: 'from-emerald-500 to-emerald-600',
      link: '/features/safety-games'
    },
    
    
    {
      title: 'Cross-platform Support',
      description: 'Available across multiple devices for wider reach.',
      icon: <FaMobile className="text-4xl text-white" />,
      color: 'from-fuchsia-500 to-fuchsia-600'
    },
    {
      title: 'Offline Resources',
      description: 'Important safety, legal, and mental health resources available offline.',
      icon: <FaFileDownload className="text-4xl text-white" />,
      color: 'from-lime-500 to-lime-600',
      link: '/features/offline-resources'
    }
  ];

  return (
    <main className={`min-h-screen ${isDark ? 'bg-background text-foreground' : 'bg-gradient-to-br from-background via-secondary/20 to-accent/20'} pt-40 sm:pt-48 lg:pt-56 xl:pt-8`}>
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* Content */}
      <div className="pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Features & Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-300 text-center mb-12 text-lg"
          >
            Explore our comprehensive safety and support features
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform`}></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                  {feature.link ? (
                    <Link href={feature.link}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`mt-4 w-full bg-gradient-to-r ${feature.color} text-white py-2 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all`}
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-4 w-full bg-gradient-to-r ${feature.color} text-white py-2 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all`}
                    >
                      Learn More
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}



