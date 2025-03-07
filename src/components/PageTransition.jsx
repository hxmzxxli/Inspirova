import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const pageElements = document.querySelectorAll('.page-transition');
    
    // GSAP animations on page load with smoother easing
    gsap.fromTo(pageElements, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.2 }
    );

    return () => {
      // Cleanup GSAP animations on unmount
      gsap.killTweensOf(pageElements);
    };
  }, [location]);

  if (!mounted) return null;

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      key={location.pathname}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-transition"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;