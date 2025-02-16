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
    
    // GSAP animations on page load
    gsap.fromTo(pageElements, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5, ease: 'power2.out', stagger: 0.3 }
    );

    return () => {
      // Optional: GSAP cleanup on unmount
      gsap.killTweensOf(pageElements);
    };
  }, [location]);

  if (!mounted) return null;

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
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
