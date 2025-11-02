import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="glass-card border-t border-cyan-500/20 py-8 mt-16">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-center text-cyan-400 glow-text text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🚀 Created with 💻 by Afnan
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
