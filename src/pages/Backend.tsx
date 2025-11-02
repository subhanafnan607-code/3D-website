import { motion } from 'framer-motion';
import { Server, Database, Shield, Cloud } from 'lucide-react';

const Backend = () => {
  const sections = [
    {
      icon: Server,
      title: 'Server-Side Programming',
      color: 'cyan',
      skills: ['Node.js / Express', 'Python / Django / Flask', 'Java / Spring Boot', 'Go / Gin', 'RESTful API Design', 'GraphQL APIs'],
    },
    {
      icon: Database,
      title: 'Database Management',
      color: 'blue',
      skills: ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB, Redis)', 'Database Design', 'Query Optimization', 'ORMs (Prisma, Sequelize)', 'Data Modeling'],
    },
    {
      icon: Shield,
      title: 'Security & Auth',
      color: 'purple',
      skills: ['Authentication (JWT, OAuth)', 'Authorization & RBAC', 'Encryption & Hashing', 'API Security', 'CORS & CSRF', 'Input Validation'],
    },
    {
      icon: Cloud,
      title: 'DevOps & Deployment',
      color: 'cyan',
      skills: ['Docker & Containers', 'CI/CD Pipelines', 'Cloud Platforms (AWS, GCP)', 'Server Management', 'Monitoring & Logging', 'Load Balancing'],
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
          Backend Development
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Master server-side programming and infrastructure
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 glow-text mb-4">Build Powerful APIs</h2>
        <p className="text-cyan-300/70 text-lg">
          Backend development is the backbone of modern applications. Learn to build scalable,
          secure, and efficient server-side systems that power everything from simple websites to
          complex distributed systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl hover:border-cyan-400/50 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <section.icon className={`text-${section.color}-400 glow-text mb-4`} size={48} />
            <h3 className={`text-2xl font-bold text-${section.color}-300 mb-4`}>
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.skills.map((skill, skillIdx) => (
                <motion.li
                  key={skillIdx}
                  className="text-cyan-300/80 flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 + skillIdx * 0.05 }}
                  whileHover={{ x: 5, color: '#06b6d4' }}
                >
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>{skill}</span>
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
        transition={{ delay: 0.9 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-6">
          Popular Backend Stacks
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'MERN', tech: 'MongoDB, Express, React, Node.js' },
            { name: 'LAMP', tech: 'Linux, Apache, MySQL, PHP' },
            { name: 'MEAN', tech: 'MongoDB, Express, Angular, Node.js' },
          ].map((stack, idx) => (
            <motion.div
              key={idx}
              className="bg-cyan-500/10 border border-cyan-400/30 p-6 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 0.8)',
                backgroundColor: 'rgba(6, 182, 212, 0.15)'
              }}
            >
              <h4 className="text-cyan-300 text-xl font-bold mb-2">{stack.name}</h4>
              <p className="text-cyan-400/70 text-sm">{stack.tech}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Backend;
