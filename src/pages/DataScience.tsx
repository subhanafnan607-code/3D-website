import { motion } from 'framer-motion';
import { BarChart3, Brain, TrendingUp, Database } from 'lucide-react';

const DataScience = () => {
  const tracks = [
    {
      icon: Database,
      title: 'Data Analysis',
      level: 'Foundation',
      skills: ['Python / R Programming', 'Pandas & NumPy', 'Data Cleaning', 'Exploratory Data Analysis', 'SQL for Data'],
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      level: 'Core',
      skills: ['Matplotlib & Seaborn', 'Plotly & Dash', 'Tableau / Power BI', 'D3.js', 'Storytelling with Data'],
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      level: 'Advanced',
      skills: ['Scikit-learn', 'TensorFlow / PyTorch', 'Deep Learning', 'Neural Networks', 'Model Deployment'],
    },
    {
      icon: TrendingUp,
      title: 'Specialized Areas',
      level: 'Expert',
      skills: ['NLP & Text Mining', 'Computer Vision', 'Time Series Analysis', 'Big Data (Spark)', 'MLOps'],
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
          Data Science & ML
        </h1>
        <p className="text-cyan-300/80 text-xl">
          Transform data into insights and build intelligent systems
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 rounded-xl mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 glow-text mb-4">
          The Data Science Journey
        </h2>
        <p className="text-cyan-300/70 text-lg">
          Data science combines statistics, programming, and domain expertise to extract meaningful
          insights from data. From analyzing trends to building predictive models and AI systems,
          this field is revolutionizing how we make decisions and solve problems.
        </p>
      </motion.div>

      <div className="space-y-6">
        {tracks.map((track, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-xl hover:border-cyan-400/50 transition-all"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <track.icon className="text-cyan-400 glow-text" size={40} />
                <div>
                  <h3 className="text-3xl font-bold text-cyan-300">{track.title}</h3>
                  <span className="text-cyan-400/70 text-sm">{track.level}</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {track.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  className="bg-cyan-500/10 border border-cyan-400/30 p-3 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.15 + skillIdx * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    borderColor: 'rgba(6, 182, 212, 0.6)',
                  }}
                >
                  <span className="text-cyan-300">{skill}</span>
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
        <h3 className="text-2xl font-bold text-cyan-400 glow-text mb-4">
          Essential Math & Stats
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-bold text-cyan-300 mb-3">Mathematics</h4>
            <ul className="space-y-2 text-cyan-300/80">
              {['Linear Algebra', 'Calculus', 'Probability Theory', 'Optimization'].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + idx * 0.05 }}
                  whileHover={{ x: 5, color: '#06b6d4' }}
                >
                  <span className="text-cyan-400">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-300 mb-3">Statistics</h4>
            <ul className="space-y-2 text-cyan-300/80">
              {['Descriptive Statistics', 'Inferential Statistics', 'Hypothesis Testing', 'Regression Analysis'].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + idx * 0.05 }}
                  whileHover={{ x: 5, color: '#06b6d4' }}
                >
                  <span className="text-cyan-400">•</span>
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

export default DataScience;
