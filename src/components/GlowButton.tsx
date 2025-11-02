import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GlowButton = ({ children, onClick, className = '' }: GlowButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-300 glow-text hover:bg-cyan-500/30 hover:border-cyan-300 transition-all ${className}`}
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default GlowButton;
