'use client';

import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/app/context/ThemeContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  source: string;
  type: 'blog' | 'video';
}

export default function VideoArticlePage() {
  const { isDark, toggleTheme } = useTheme();
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [contentType, setContentType] = useState<'all' | 'blog' | 'video'>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulated API call to fetch articles
    const fetchArticles = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockArticles: Article[] = [
          {
            id: '1',
            title: 'Understanding Personal Safety',
            description: 'Learn about essential personal safety measures and how to stay protected in various situations.',
            date: '2024-03-15',
            source: 'Safety Blog',
            type: 'blog'
          },
          {
            id: '2',
            title: 'Self-Defense Basics',
            description: 'A comprehensive video guide on basic self-defense techniques for women.',
            date: '2024-03-14',
            source: 'Video Tutorial',
            type: 'video'
          },
          // Add more mock articles as needed
        ];
        
        setArticles(mockArticles);
        setLoading(false);
      } catch (err) {
        setError('Failed to load articles. Please try again later.');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = contentType === 'all' || article.type === contentType;
    
    return matchesSearch && matchesType;
  });

  const handleArticleClick = (id: string) => {
    router.push(`/article/${id}`);
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Safety Resources
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            AI-Generated Articles on Women&apos;s Safety
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={contentType}
              onChange={(e) => setContentType(e.target.value as 'all' | 'blog' | 'video')}
            >
              <option value="all">All Content</option>
              <option value="blog">Blog Articles</option>
              <option value="video">Videos</option>
            </select>
          </div>
        </div>

        {error && (
          <div className="text-center py-4 text-red-500">
            {error}
          </div>
        )}

        {/* Articles Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-500">Generating articles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {article.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {article.source}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <button
                      onClick={() => handleArticleClick(article.id)}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
