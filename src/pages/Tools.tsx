import { motion } from 'framer-motion';
import { Code2, Terminal, GitBranch, Package } from 'lucide-react';

const Tools = () => {
  const toolCategories = [
    {
      icon: Code2,
      title: 'Code Editors & IDEs',
      color: 'cyan',
      tools: [
        { name: 'VS Code', desc: 'Popular lightweight editor' },
        { name: 'IntelliJ IDEA', desc: 'Java & Kotlin powerhouse' },
        { name: 'PyCharm', desc: 'Python development' },
        { name: 'WebStorm', desc: 'JavaScript & TypeScript' },
      ],
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      color: 'blue',
      tools: [
        { name: 'Git', desc: 'Distributed version control' },
        { name: 'GitHub', desc: 'Code hosting platform' },
        { name: 'GitLab', desc: 'DevOps platform' },
        { name: 'Bitbucket', desc: 'Git solution for teams' },
      ],
    },
    {
      icon: Terminal,
      title: 'Command Line',
      color: 'purple',
      tools: [
        { name: 'Bash/Zsh', desc: 'Unix shells' },
        { name: 'PowerShell', desc: 'Windows automation' },
        { name: 'tmux', desc: 'Terminal multiplexer' },
        { name: 'Oh My Zsh', desc: 'Zsh framework' },
      ],
    },
    {
      icon: Package,
      title: 'Package Managers',
      color: 'cyan',
      tools: [
        { name: 'npm/yarn', desc: 'JavaScript packages' },
        { name: 'pip', desc: 'Python packages' },
        { name: 'Maven/Gradle', desc: 'Java dependencies' },
        { name: 'Cargo', desc: 'Rust package manager' },
      ],
    },
  ];

  const essentialTools = [
    { category: 'Debugging', items: ['Chrome DevTools', 'React DevTools', 'Postman', 'cURL'] },
    { category: 'Containerization', items: ['Docker', 'Docker Compose', 'Kubernetes', 'Podman'] },
    { category: 'CI/CD', items: ['GitHub Actions', 'Jenkins', 'CircleCI', 'Travis CI'] },
    { category: 'Monitoring', items: ['Datadog', 'New Relic', 'Grafana', 'Prometheus'] },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 glow-strong mb-4">
          Developer Tools
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Essential tools every programmer should master
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 glow-text mb-4">
          Your Development Arsenal
        </h2>
        <p className="text-cyan-300/70 text-lg">
          The right tools can dramatically improve your productivity and code quality. Learn to use
          these essential development tools to streamline your workflow and build better software.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {toolCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl hover:border-cyan-400/50 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <category.icon className={`text-${category.color}-400 glow-text mb-4`} size={48} />
            <h3 className={`text-2xl font-bold text-${category.color}-300 mb-4`}>
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.tools.map((tool, tIdx) => (
                <motion.div
                  key={tIdx}
                  className="bg-cyan-500/10 border border-cyan-400/30 p-3 rounded-lg"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 + tIdx * 0.05 }}
                  whileHover={{
                    x: 5,
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    borderColor: 'rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <h4 className="text-cyan-300 font-bold">{tool.name}</h4>
                  <p className="text-cyan-400/70 text-sm">{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {essentialTools.map((section, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + idx * 0.1 }}
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-4 glow-text">
              {section.category}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {section.items.map((item, iIdx) => (
                <motion.div
                  key={iIdx}
                  className="bg-cyan-500/10 border border-cyan-400/20 p-2 rounded text-center text-cyan-300/80 text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + idx * 0.1 + iIdx * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                >
                  {item}
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
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-4">
          Productivity Tips
        </h3>
        <ul className="space-y-3 text-cyan-300/80 text-lg">
          {[
            'Master keyboard shortcuts in your IDE to code faster',
            'Use Git branching strategies for organized development',
            'Set up linters and formatters for consistent code style',
            'Learn debugging tools to find issues quickly',
            'Automate repetitive tasks with scripts and CI/CD',
          ].map((tip, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + idx * 0.1 }}
              whileHover={{ x: 10, color: '#06b6d4' }}
            >
              <span className="text-cyan-400 text-xl">•</span>
              <span>{tip}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Tools;
