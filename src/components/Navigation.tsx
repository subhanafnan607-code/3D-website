import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'foundations', label: 'Foundations' },
    { id: 'webdev', label: 'Web Dev' },
    { id: 'backend', label: 'Backend' },
    { id: 'datascience', label: 'Data Science' },
    { id: 'appgamedev', label: 'App & Game Dev' },
    { id: 'systemssecurity', label: 'Systems & Security' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'tools', label: 'Tools' },
    { id: 'projects', label: 'Projects' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.h1
            className="text-2xl font-bold glow-text text-cyan-400"
            whileHover={{ scale: 1.05 }}
          >
            Code Odyssey
          </motion.h1>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-cyan-400 hover:text-cyan-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden lg:flex gap-1 flex-wrap">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 glow-text'
                    : 'text-cyan-400 hover:bg-cyan-500/10'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4 grid grid-cols-2 gap-2"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 glow-text'
                    : 'text-cyan-400 hover:bg-cyan-500/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
