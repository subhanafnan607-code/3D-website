import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-cyan-400 glow-strong mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Code Odyssey
      </motion.h1>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-4 glow-text">Our Mission</h2>
        <p className="text-cyan-300/80 text-lg leading-relaxed">
          Code Odyssey is designed to be your ultimate companion in the world of programming. We
          believe that learning to code should be an exciting journey, not a daunting challenge. Our
          carefully crafted roadmaps guide you from your first line of code to advanced system
          architecture, ensuring you build a solid foundation while exploring the vast landscape of
          modern programming.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {[
          {
            icon: Target,
            title: 'Clear Roadmaps',
            desc: 'Step-by-step paths designed by industry experts to take you from beginner to professional.',
            color: 'cyan',
          },
          {
            icon: BookOpen,
            title: 'Comprehensive Coverage',
            desc: 'From web development to systems programming, we cover all major programming domains.',
            color: 'blue',
          },
          {
            icon: Users,
            title: 'Community Support',
            desc: 'Join thousands of learners worldwide sharing knowledge and helping each other grow.',
            color: 'purple',
          },
          {
            icon: Award,
            title: 'Skill Validation',
            desc: 'Build real projects that showcase your abilities and prepare you for the job market.',
            color: 'cyan',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="glass-card p-6 rounded-xl hover:border-cyan-400/50 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <item.icon className={`text-${item.color}-400 glow-text mb-4`} size={48} />
            <h3 className={`text-2xl font-bold text-${item.color}-300 mb-3`}>{item.title}</h3>
            <p className="text-cyan-400/70 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass-card p-8 rounded-xl"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-4 glow-text">Why Choose Code Odyssey?</h2>
        <ul className="space-y-4 text-cyan-300/80 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-2xl">•</span>
            <span>Structured learning paths that eliminate overwhelm and provide clear direction</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-2xl">•</span>
            <span>Practical, project-based approach that builds real-world skills</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-2xl">•</span>
            <span>Updated content reflecting the latest industry trends and best practices</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-2xl">•</span>
            <span>Flexible learning that adapts to your pace and goals</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
