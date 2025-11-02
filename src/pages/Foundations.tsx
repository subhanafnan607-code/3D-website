import { motion } from 'framer-motion';
import { BookOpen, Code2, CheckCircle, Brain } from 'lucide-react';

const Foundations = () => {
  const topics = [
    {
      level: 'Beginner',
      items: [
        'Variables and Data Types',
        'Control Flow (if/else, loops)',
        'Functions and Methods',
        'Basic I/O Operations',
        'Comments and Documentation',
      ],
    },
    {
      level: 'Intermediate',
      items: [
        'Object-Oriented Programming',
        'Data Structures (Arrays, Lists, Maps)',
        'Error Handling and Exceptions',
        'File Operations',
        'Regular Expressions',
      ],
    },
    {
      level: 'Advanced',
      items: [
        'Design Patterns',
        'Memory Management',
        'Concurrency and Threading',
        'Testing and Debugging',
        'Algorithm Optimization',
      ],
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
          Programming Foundations
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Master the core concepts that every programmer must know
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: Brain,
            title: 'Think Like a Programmer',
            desc: 'Learn problem-solving strategies and computational thinking',
          },
          {
            icon: Code2,
            title: 'Write Clean Code',
            desc: 'Understand best practices for readable and maintainable code',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <item.icon className="text-cyan-400 glow-text mb-4" size={48} />
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">{item.title}</h3>
            <p className="text-cyan-400/70">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-6">
        {topics.map((section, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-cyan-400 glow-text" size={32} />
              <h2 className="text-3xl font-bold text-cyan-300 glow-text">{section.level}</h2>
            </div>
            <ul className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <motion.li
                  key={itemIdx}
                  className="flex items-center gap-3 text-cyan-300/80 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.2 + itemIdx * 0.05 }}
                  whileHover={{ x: 10, color: '#06b6d4' }}
                >
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={24} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-card p-8 rounded-xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-4">
          Recommended Languages to Start
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {['Python', 'JavaScript', 'Java'].map((lang, idx) => (
            <motion.div
              key={idx}
              className="bg-cyan-500/10 border border-cyan-400/30 p-4 rounded-lg text-center"
              whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.8)' }}
            >
              <span className="text-cyan-300 text-xl font-bold">{lang}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Foundations;
