import { motion } from 'framer-motion';
import { Lightbulb, Target, Trophy, Rocket } from 'lucide-react';

const Projects = () => {
  const projectLevels = [
    {
      level: 'Beginner',
      icon: Lightbulb,
      color: 'cyan',
      projects: [
        { name: 'Calculator App', skills: 'HTML, CSS, JavaScript' },
        { name: 'To-Do List', skills: 'DOM manipulation, Local Storage' },
        { name: 'Weather App', skills: 'API integration, Fetch' },
        { name: 'Quiz Game', skills: 'Logic, State management' },
      ],
    },
    {
      level: 'Intermediate',
      icon: Target,
      color: 'blue',
      projects: [
        { name: 'Blog Platform', skills: 'Backend, Database, Auth' },
        { name: 'E-commerce Store', skills: 'Payment integration, Cart' },
        { name: 'Social Media Clone', skills: 'Real-time updates, Posts' },
        { name: 'Task Management', skills: 'CRUD operations, Teams' },
      ],
    },
    {
      level: 'Advanced',
      icon: Trophy,
      color: 'purple',
      projects: [
        { name: 'Video Streaming Platform', skills: 'CDN, Encoding, Scale' },
        { name: 'Real-time Collaboration', skills: 'WebSockets, OT/CRDT' },
        { name: 'Microservices App', skills: 'Docker, K8s, APIs' },
        { name: 'ML Recommendation Engine', skills: 'Python, TensorFlow, Data' },
      ],
    },
  ];

  const portfolioTips = [
    'Choose projects that showcase different skills',
    'Write clean, documented code with good README files',
    'Deploy your projects live (Vercel, Netlify, AWS)',
    'Include project demos and screenshots',
    'Share your learning process and challenges faced',
    'Contribute to open-source projects',
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 glow-strong mb-4">
          Project Ideas
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Build your portfolio with real-world applications
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <Rocket className="text-cyan-400 glow-text" size={40} />
          <h2 className="text-3xl font-bold text-cyan-300 glow-text">
            Learning by Building
          </h2>
        </div>
        <p className="text-cyan-300/70 text-lg">
          The best way to learn programming is by building real projects. Start with simple apps
          and gradually take on more complex challenges. Each project teaches new skills and adds
          to your developer portfolio.
        </p>
      </motion.div>

      <div className="space-y-8">
        {projectLevels.map((level, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.15 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <level.icon className={`text-${level.color}-400 glow-text`} size={48} />
              <h3 className={`text-3xl font-bold text-${level.color}-300`}>{level.level} Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {level.projects.map((project, pIdx) => (
                <motion.div
                  key={pIdx}
                  className="bg-cyan-500/10 border border-cyan-400/30 p-5 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.15 + pIdx * 0.08 }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    borderColor: 'rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <h4 className="text-cyan-300 font-bold text-lg mb-2">{project.name}</h4>
                  <p className="text-cyan-400/70 text-sm">{project.skills}</p>
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
        transition={{ delay: 0.9 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-6">
          Building Your Portfolio
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {portfolioTips.map((tip, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-3 text-cyan-300/80"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + idx * 0.1 }}
              whileHover={{ x: 5, color: '#06b6d4' }}
            >
              <span className="text-cyan-400 text-xl mt-1">✓</span>
              <span>{tip}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-4">
          Project Development Workflow
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: '1. Plan', desc: 'Define features and tech stack' },
            { step: '2. Design', desc: 'Create wireframes and mockups' },
            { step: '3. Build', desc: 'Write code and test features' },
            { step: '4. Deploy', desc: 'Launch and gather feedback' },
          ].map((phase, idx) => (
            <motion.div
              key={idx}
              className="bg-cyan-500/10 border border-cyan-400/30 p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + idx * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.7)' }}
            >
              <h4 className="text-cyan-300 font-bold mb-2">{phase.step}</h4>
              <p className="text-cyan-400/70 text-sm">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
