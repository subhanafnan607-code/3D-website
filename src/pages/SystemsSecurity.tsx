import { motion } from 'framer-motion';
import { Shield, Lock, Terminal, Cpu } from 'lucide-react';

const SystemsSecurity = () => {
  const tracks = [
    {
      icon: Cpu,
      title: 'Systems Programming',
      color: 'cyan',
      topics: ['C/C++ Programming', 'Memory Management', 'Operating Systems', 'Linux Kernel', 'Device Drivers', 'System Calls'],
    },
    {
      icon: Terminal,
      title: 'Low-Level Programming',
      color: 'blue',
      topics: ['Assembly Language', 'Computer Architecture', 'Compilers & Interpreters', 'Embedded Systems', 'Real-Time Systems', 'Hardware Interaction'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      color: 'purple',
      topics: ['Network Security', 'Cryptography', 'Penetration Testing', 'Security Auditing', 'Threat Analysis', 'Incident Response'],
    },
    {
      icon: Lock,
      title: 'Secure Development',
      color: 'cyan',
      topics: ['OWASP Top 10', 'Secure Coding', 'Vulnerability Assessment', 'Security Testing', 'Compliance & Standards', 'Security Architecture'],
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
          Systems & Security
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Master low-level programming and cybersecurity fundamentals
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 glow-text mb-4">
          The Foundation of Computing
        </h2>
        <p className="text-cyan-300/70 text-lg">
          Systems programming and security are at the core of modern computing. Understanding how
          computers work at the lowest level and how to protect them is essential for building
          robust, efficient, and secure software systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {tracks.map((track, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl hover:border-cyan-400/50 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <track.icon className={`text-${track.color}-400 glow-text mb-4`} size={48} />
            <h3 className={`text-2xl font-bold text-${track.color}-300 mb-4`}>{track.title}</h3>
            <ul className="space-y-3">
              {track.topics.map((topic, tIdx) => (
                <motion.li
                  key={tIdx}
                  className="flex items-start gap-2 text-cyan-300/80"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 + tIdx * 0.05 }}
                  whileHover={{ x: 5, color: '#06b6d4' }}
                >
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>{topic}</span>
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
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-6">
          Popular Languages & Tools
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: 'C/C++', use: 'Systems Programming' },
            { name: 'Rust', use: 'Safe Systems Code' },
            { name: 'Assembly', use: 'Low-Level Control' },
            { name: 'Python', use: 'Security Scripts' },
          ].map((lang, idx) => (
            <motion.div
              key={idx}
              className="bg-cyan-500/10 border border-cyan-400/30 p-4 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 0.8)',
                backgroundColor: 'rgba(6, 182, 212, 0.15)'
              }}
            >
              <h4 className="text-cyan-300 font-bold mb-1">{lang.name}</h4>
              <p className="text-cyan-400/70 text-sm">{lang.use}</p>
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
          Security Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'CompTIA Security+',
            'Certified Ethical Hacker (CEH)',
            'CISSP - Security Professional',
            'OSCP - Offensive Security',
          ].map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-purple-500/10 border border-purple-400/30 p-4 rounded-lg"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + idx * 0.1 }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(168, 85, 247, 0.6)' }}
            >
              <span className="text-purple-300 font-semibold">{cert}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SystemsSecurity;
