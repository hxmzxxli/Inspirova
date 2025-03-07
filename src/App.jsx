import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './theme/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';

// Page Transition Animation
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// Wrapper for smoother transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
};

// Smooth Preloader Animation
function CircleLoader() {
  return (
    <motion.div 
      className="flex justify-center items-center h-screen bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="w-12 h-12 border-4 border-gray-400 border-t-white rounded-full"
      />
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Slightly longer for better transition
  }, []);

  return (
    <ThemeProvider>
      <div className="cursor-default">
        {loading ? (
          <CircleLoader />
        ) : (
          <BrowserRouter>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.6 } }}>
              <Navbar />
            </motion.div>
            <AnimatedRoutes />
          </BrowserRouter>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;