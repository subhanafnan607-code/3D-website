import { motion } from 'framer-motion';
import { Smartphone, Gamepad2, Monitor, Tablet } from 'lucide-react';

const AppGameDev = () => {
  const sections = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'cyan',
      platforms: [
        { name: 'iOS', tech: 'Swift, SwiftUI, UIKit' },
        { name: 'Android', tech: 'Kotlin, Jetpack Compose' },
        { name: 'Cross-Platform', tech: 'React Native, Flutter' },
      ],
      skills: ['Mobile UI/UX', 'Native APIs', 'App Store Deployment', 'Push Notifications', 'Offline Storage'],
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      color: 'purple',
      platforms: [
        { name: 'Unity', tech: 'C#, Unity Engine' },
        { name: 'Unreal', tech: 'C++, Blueprints' },
        { name: 'Web Games', tech: 'JavaScript, WebGL, Three.js' },
      ],
      skills: ['Game Physics', '3D Graphics', 'Animation', 'AI & Pathfinding', 'Multiplayer Systems'],
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
          App & Game Development
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Create engaging mobile apps and immersive gaming experiences
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: Smartphone, label: 'Mobile Apps', color: 'cyan' },
          { icon: Tablet, label: 'Tablets', color: 'blue' },
          { icon: Monitor, label: 'Desktop Games', color: 'purple' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <item.icon className={`text-${item.color}-400 glow-text mx-auto mb-3`} size={48} />
            <h3 className={`text-xl font-bold text-${item.color}-300`}>{item.label}</h3>
          </motion.div>
        ))}
      </div>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + idx * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <section.icon className={`text-${section.color}-400 glow-text`} size={48} />
              <h2 className={`text-3xl font-bold text-${section.color}-300`}>{section.title}</h2>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Popular Platforms</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {section.platforms.map((platform, pIdx) => (
                  <motion.div
                    key={pIdx}
                    className="bg-cyan-500/10 border border-cyan-400/30 p-4 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.2 + pIdx * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: 'rgba(6, 182, 212, 0.7)',
                      backgroundColor: 'rgba(6, 182, 212, 0.15)'
                    }}
                  >
                    <h4 className="text-cyan-300 font-bold mb-1">{platform.name}</h4>
                    <p className="text-cyan-400/70 text-sm">{platform.tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Essential Skills</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {section.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="flex items-center gap-2 text-cyan-300/80"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.2 + sIdx * 0.05 }}
                    whileHover={{ x: 5, color: '#06b6d4' }}
                  >
                    <span className="text-cyan-400">▹</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-card p-8 rounded-xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-4">Project Ideas</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-xl font-bold text-cyan-300 mb-3">Mobile Apps</h4>
            <ul className="space-y-2 text-cyan-300/80">
              {['To-Do List with Cloud Sync', 'Fitness Tracker', 'Social Media App', 'Food Delivery App'].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2"
                  whileHover={{ x: 5, color: '#06b6d4' }}
                >
                  <span className="text-cyan-400">→</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-300 mb-3">Games</h4>
            <ul className="space-y-2 text-cyan-300/80">
              {['2D Platformer', '3D Racing Game', 'Puzzle Game', 'Multiplayer Battle Arena'].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2"
                  whileHover={{ x: 5, color: '#06b6d4' }}
                >
                  <span className="text-cyan-400">→</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppGameDev;
