import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './theme/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import ThemeToggle from './components/ThemeToggle';
import { useState, useEffect } from 'react';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading time
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {loading ? (
          <Preloader /> // Preloader while the app loads
        ) : (
          <div className="min-h-screen transition-colors duration-200 dark:bg-gray-900 bg-white">
            <Cursor /> {/* Custom Cursor */}
            <ThemeToggle /> {/* Theme Toggle Button */}
            <Navbar /> {/* Navbar */}
            <AnimatedRoutes /> {/* Routes with transition */}
          </div>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
