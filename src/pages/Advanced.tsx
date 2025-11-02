import { motion } from 'framer-motion';
import { Boxes, GitBranch, Layers, Zap } from 'lucide-react';

const Advanced = () => {
  const topics = [
    {
      icon: Boxes,
      title: 'System Design',
      color: 'cyan',
      concepts: [
        'Microservices Architecture',
        'Distributed Systems',
        'Scalability Patterns',
        'Load Balancing',
        'Caching Strategies',
        'Message Queues',
      ],
    },
    {
      icon: Layers,
      title: 'Advanced Patterns',
      color: 'blue',
      concepts: [
        'Design Patterns',
        'SOLID Principles',
        'Domain-Driven Design',
        'Clean Architecture',
        'Event Sourcing',
        'CQRS Pattern',
      ],
    },
    {
      icon: GitBranch,
      title: 'DevOps & Cloud',
      color: 'purple',
      concepts: [
        'Container Orchestration',
        'Kubernetes',
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Monitoring & Observability',
        'Cloud Native Apps',
      ],
    },
    {
      icon: Zap,
      title: 'Performance',
      color: 'cyan',
      concepts: [
        'Algorithm Optimization',
        'Database Tuning',
        'Caching Layers',
        'Code Profiling',
        'Memory Optimization',
        'Async Programming',
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
          Advanced Topics
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Master complex concepts and architectural patterns
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 glow-text mb-4">
          Expert-Level Programming
        </h2>
        <p className="text-cyan-300/70 text-lg">
          Take your skills to the next level with advanced topics that are essential for building
          large-scale, production-ready systems. These concepts separate junior developers from
          senior engineers and architects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl hover:border-cyan-400/50 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <topic.icon className={`text-${topic.color}-400 glow-text mb-4`} size={48} />
            <h3 className={`text-2xl font-bold text-${topic.color}-300 mb-4`}>{topic.title}</h3>
            <div className="grid gap-3">
              {topic.concepts.map((concept, cIdx) => (
                <motion.div
                  key={cIdx}
                  className="bg-cyan-500/10 border border-cyan-400/30 p-3 rounded-lg"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 + cIdx * 0.05 }}
                  whileHover={{
                    x: 5,
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    borderColor: 'rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <span className="text-cyan-300">{concept}</span>
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
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-6">
          Learning Resources
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'System Design Primer',
              desc: 'Learn to design large-scale systems',
              icon: '📚',
            },
            {
              title: 'Design Patterns',
              desc: 'Gang of Four patterns and more',
              icon: '🎨',
            },
            {
              title: 'Architecture Patterns',
              desc: 'Modern software architecture',
              icon: '🏗️',
            },
          ].map((resource, idx) => (
            <motion.div
              key={idx}
              className="bg-cyan-500/10 border border-cyan-400/30 p-6 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 0.7)',
              }}
            >
              <div className="text-4xl mb-3">{resource.icon}</div>
              <h4 className="text-cyan-300 font-bold mb-2">{resource.title}</h4>
              <p className="text-cyan-400/70 text-sm">{resource.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-4">
          Interview Preparation
        </h3>
        <p className="text-cyan-300/80 mb-4">
          These advanced topics are commonly covered in senior and staff engineer interviews at top
          tech companies.
        </p>
        <ul className="space-y-3">
          {[
            'Design a URL shortener service',
            'Build a scalable chat system',
            'Create a distributed cache',
            'Design a rate limiter',
            'Architect a video streaming platform',
          ].map((item, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3 text-cyan-300/80"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + idx * 0.1 }}
              whileHover={{ x: 10, color: '#06b6d4' }}
            >
              <span className="text-cyan-400 text-xl">→</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Advanced;
