'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

export default function SOSPage() {
  const { isDark, toggleTheme } = useTheme();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sendSOSMessage = async () => {
    setSending(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage({
        type: 'success',
        text: 'SOS message sent successfully! Emergency contacts have been notified.'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to send SOS message. Please try again.'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <main className={`min-h-screen ${isDark ? 'bg-background text-foreground' : 'bg-gradient-to-br from-background via-secondary/20 to-accent/20'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/30 dark:bg-background/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <motion.h1 
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer"
              >
                Harmony-Net
              </motion.h1>
            </Link>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-purple-100 dark:bg-gray-800"
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
        </div>
      </nav>

      <div className="relative min-h-screen flex items-center justify-center bg-blue-500/50 px-4 overflow-hidden">
        <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-xl p-10 max-w-md w-full border border-white/50">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency SOS</h1>
            <p className="text-gray-600">Quick access to emergency services and trusted contacts</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={sendSOSMessage}
              disabled={sending}
              className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                sending
                  ? 'bg-red-600 scale-95'
                  : 'bg-red-500 hover:bg-red-600 hover:scale-105'
              }`}
            >
              <span className="text-white text-xl font-bold">SOS</span>
            </button>
          </div>

          <p className="text-center mt-6 text-lg font-medium text-red-600">
            {sending ? 'Sending SOS...' : 'Tap the button if you\'re in danger'}
          </p>

          {message && (
            <div className={`mt-4 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
