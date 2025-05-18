'use client';

import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/30 dark:bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="text-2xl sm:text-8xl font-bold leading-normal sm:leading-[1.15] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Harmony-Net
          </motion.h1>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-purple-50 dark:bg-gray-800"
            >
              {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </motion.button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-800"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {['Home', 'Live Sharing', 'Safety Tips', 'Community', 'Contact'].map((item, index) => (
              <Link 
                key={index}
                href={item === 'Live Sharing' ? '/features/location-sharing' : '#'}
                className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
} 