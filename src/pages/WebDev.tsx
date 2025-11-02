import { motion } from 'framer-motion';
import { Globe, Layout, Palette, Zap } from 'lucide-react';

const WebDev = () => {
  const roadmap = [
    {
      category: 'Frontend Basics',
      icon: Layout,
      skills: ['HTML5 & Semantic Markup', 'CSS3 & Responsive Design', 'JavaScript ES6+', 'DOM Manipulation', 'Browser DevTools'],
    },
    {
      category: 'Modern Frontend',
      icon: Zap,
      skills: ['React / Vue / Angular', 'TypeScript', 'State Management', 'Component Architecture', 'Build Tools (Vite, Webpack)'],
    },
    {
      category: 'Styling & Design',
      icon: Palette,
      skills: ['Tailwind CSS / Sass', 'CSS Animations', 'Responsive Layouts', 'UI/UX Principles', 'Design Systems'],
    },
    {
      category: 'Web APIs & Tools',
      icon: Globe,
      skills: ['RESTful APIs', 'GraphQL', 'Authentication', 'Progressive Web Apps', 'Performance Optimization'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 glow-strong mb-4">
          Web Development
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Build stunning, interactive websites and web applications
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 glow-text mb-4">
          Frontend Development Roadmap
        </h2>
        <p className="text-cyan-300/70 text-lg">
          Master the skills needed to create beautiful, responsive, and performant web interfaces.
          From HTML basics to advanced React patterns, this roadmap covers everything you need to
          become a professional frontend developer.
        </p>
      </motion.div>

      <div className="space-y-6">
        {roadmap.map((section, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl hover:border-cyan-400/50 transition-all"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + idx * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <section.icon className="text-cyan-400 glow-text" size={40} />
              <h3 className="text-3xl font-bold text-cyan-300">{section.category}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  className="bg-cyan-500/10 border border-cyan-400/30 p-3 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.15 + skillIdx * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    borderColor: 'rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <span className="text-cyan-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-card p-8 rounded-xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-4">Project Ideas</h3>
        <ul className="space-y-3 text-cyan-300/80 text-lg">
          {[
            'Portfolio Website with animations',
            'E-commerce Store with cart functionality',
            'Social Media Dashboard',
            'Real-time Chat Application',
            'Weather App with API integration',
          ].map((project, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + idx * 0.1 }}
              whileHover={{ x: 10, color: '#06b6d4' }}
            >
              <span className="text-cyan-400 text-2xl">→</span>
              <span>{project}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default WebDev;
