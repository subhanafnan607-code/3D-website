import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Foundations from './pages/Foundations';
import WebDev from './pages/WebDev';
import Backend from './pages/Backend';
import DataScience from './pages/DataScience';
import AppGameDev from './pages/AppGameDev';
import SystemsSecurity from './pages/SystemsSecurity';
import Advanced from './pages/Advanced';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import Community from './pages/Community';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: Home,
    about: About,
    foundations: Foundations,
    webdev: WebDev,
    backend: Backend,
    datascience: DataScience,
    appgamedev: AppGameDev,
    systemssecurity: SystemsSecurity,
    advanced: Advanced,
    tools: Tools,
    projects: Projects,
    community: Community,
  };

  const PageComponent = pages[currentPage as keyof typeof pages];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05010a] via-[#0b0f2a] to-[#000] text-cyan-300">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8 min-h-screen"
        >
          <PageComponent />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
