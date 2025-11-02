import { motion } from 'framer-motion';
import { Code, Rocket, Star, Zap } from 'lucide-react';
import FloatingShapes from '../components/FloatingShapes';
import GlowButton from '../components/GlowButton';

const Home = () => {
  return (
    <div className="relative">
      <FloatingShapes />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold glow-strong text-cyan-400 mb-6"
            animate={{
              textShadow: [
                '0 0 20px #06b6d4, 0 0 40px #06b6d4',
                '0 0 30px #06b6d4, 0 0 60px #06b6d4',
                '0 0 20px #06b6d4, 0 0 40px #06b6d4',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Code Odyssey
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-cyan-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your Journey from Beginner to Master
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <GlowButton>
              <span className="flex items-center gap-2">
                <Rocket size={20} />
                Start Learning
              </span>
            </GlowButton>
            <GlowButton>
              <span className="flex items-center gap-2">
                <Star size={20} />
                Explore Roadmap
              </span>
            </GlowButton>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: Code,
              title: 'Learn Fundamentals',
              desc: 'Master the core concepts of programming',
              color: 'cyan',
            },
            {
              icon: Zap,
              title: 'Build Projects',
              desc: 'Apply your skills to real-world applications',
              color: 'blue',
            },
            {
              icon: Rocket,
              title: 'Advanced Topics',
              desc: 'Dive deep into specialized areas',
              color: 'purple',
            },
            {
              icon: Star,
              title: 'Join Community',
              desc: 'Connect with fellow learners',
              color: 'cyan',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl hover:border-cyan-400/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <item.icon className={`text-${item.color}-400 glow-text mb-4`} size={40} />
              <h3 className={`text-xl font-bold text-${item.color}-300 mb-2`}>{item.title}</h3>
              <p className="text-cyan-400/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 glass-card p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 glow-text mb-4">
            Your Programming Journey Starts Here
          </h2>
          <p className="text-cyan-300/80 text-lg leading-relaxed">
            Code Odyssey is your comprehensive guide to mastering programming languages. From basic
            syntax to advanced system architecture, we'll guide you through every step of your
            coding journey. Whether you're interested in web development, data science, game
            development, or systems programming, we have the roadmap you need.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
