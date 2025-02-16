import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setTimeout(() => setExit(true), 3000); // Adjust timing if needed
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center text-white text-4xl font-bold"
      initial={{ opacity: 1 }}
      animate={{ opacity: exit ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} // Longer fade-out transition
    >
      Loading...
    </motion.div>
  );
};

export default Preloader;
