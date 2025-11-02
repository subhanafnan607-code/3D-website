import { motion } from 'framer-motion';
import { Users, MessageSquare, BookOpen, Heart } from 'lucide-react';

const Community = () => {
  const platforms = [
    {
      icon: MessageSquare,
      name: 'Forums & Discussion',
      color: 'cyan',
      items: [
        { name: 'Stack Overflow', desc: 'Q&A for programmers' },
        { name: 'Reddit (r/programming)', desc: 'Programming news and discussion' },
        { name: 'Dev.to', desc: 'Developer blogging platform' },
        { name: 'Discord Communities', desc: 'Real-time chat servers' },
      ],
    },
    {
      icon: BookOpen,
      name: 'Learning Platforms',
      color: 'blue',
      items: [
        { name: 'freeCodeCamp', desc: 'Free coding bootcamp' },
        { name: 'Codecademy', desc: 'Interactive courses' },
        { name: 'LeetCode', desc: 'Coding challenges' },
        { name: 'HackerRank', desc: 'Practice and compete' },
      ],
    },
    {
      icon: Users,
      name: 'Open Source',
      color: 'purple',
      items: [
        { name: 'GitHub', desc: 'Collaborate on projects' },
        { name: 'GitLab', desc: 'DevOps platform' },
        { name: 'First Timers Only', desc: 'Beginner-friendly issues' },
        { name: 'Good First Issue', desc: 'Find contribution opportunities' },
      ],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Network Building',
      desc: 'Connect with developers worldwide and build professional relationships',
    },
    {
      icon: Heart,
      title: 'Support System',
      desc: 'Get help when stuck and help others solve their challenges',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      desc: 'Stay updated with latest trends and best practices',
    },
    {
      icon: MessageSquare,
      title: 'Career Growth',
      desc: 'Find mentors, job opportunities, and collaboration projects',
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
          Community
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Connect, learn, and grow with fellow developers
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 glow-text mb-4">
          The Power of Community
        </h2>
        <p className="text-cyan-300/70 text-lg">
          Programming is better together. Join vibrant communities of developers who share
          knowledge, collaborate on projects, and support each other's growth. The connections you
          make can accelerate your learning and open doors to new opportunities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-6 rounded-xl hover:border-cyan-400/50 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <benefit.icon className="text-cyan-400 glow-text mb-4" size={40} />
            <h3 className="text-xl font-bold text-cyan-300 mb-2">{benefit.title}</h3>
            <p className="text-cyan-400/70">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-6">
        {platforms.map((platform, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + idx * 0.15 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <platform.icon className={`text-${platform.color}-400 glow-text`} size={48} />
              <h3 className={`text-3xl font-bold text-${platform.color}-300`}>{platform.name}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {platform.items.map((item, iIdx) => (
                <motion.div
                  key={iIdx}
                  className="bg-cyan-500/10 border border-cyan-400/30 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.15 + iIdx * 0.05 }}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    borderColor: 'rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <h4 className="text-cyan-300 font-bold mb-1">{item.name}</h4>
                  <p className="text-cyan-400/70 text-sm">{item.desc}</p>
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
        transition={{ delay: 1 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-6">
          Community Guidelines
        </h3>
        <ul className="space-y-3 text-cyan-300/80 text-lg">
          {[
            'Be respectful and inclusive to all community members',
            'Ask clear, specific questions with relevant context',
            'Share your knowledge and help others when you can',
            'Give credit where credit is due',
            'Search before asking to avoid duplicate questions',
            'Follow the code of conduct of each community',
          ].map((guideline, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + idx * 0.1 }}
              whileHover={{ x: 10, color: '#06b6d4' }}
            >
              <span className="text-cyan-400 text-xl">•</span>
              <span>{guideline}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-4">
          Start Your Journey
        </h3>
        <p className="text-cyan-300/80 text-lg mb-4">
          Don't be shy about participating in communities. Everyone starts somewhere, and the
          programming community is generally welcoming to beginners who show genuine interest and
          effort.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {['Join a Discord', 'Contribute to Open Source', 'Attend Meetups'].map((action, idx) => (
            <motion.div
              key={idx}
              className="bg-cyan-500/10 border border-cyan-400/30 p-4 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(6, 182, 212, 0.8)',
                backgroundColor: 'rgba(6, 182, 212, 0.15)'
              }}
            >
              <span className="text-cyan-300 font-semibold">{action}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Community;
