import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Award, Users, Code, Zap, ArrowRight } from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.cursor = 'default';
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/services');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/earth_man.mp4" type="video/mp4" />
          </video>
        </div>

        <motion.div 
          className="relative z-20 h-full flex flex-col items-center justify-center text-center"
          style={{ opacity, y }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white max-w-4xl"
          >
            Transform Your Digital Presence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl"
          >
            We create stunning digital experiences that drive growth and elevate your brand
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6"
          >
            <Link
              to="/services"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all flex items-center gap-2"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <ChevronDown className="text-white w-10 h-10 hover:text-blue-500 transition-colors" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital age
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Code />}
              title="Web Development"
              description="Custom websites and web applications built with cutting-edge technologies"
            />
            <ServiceCard 
              icon={<Zap />}
              title="Digital Marketing"
              description="Strategic marketing campaigns that drive results and engagement"
            />
            <ServiceCard 
              icon={<Users />}
              title="UI/UX Design"
              description="User-centered design that creates meaningful digital experiences"
            />
            <ServiceCard 
              icon={<Award />}
              title="Branding"
              description="Comprehensive branding solutions that make you stand out"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="250+" label="Projects Completed" />
            <StatCard number="98%" label="Client Satisfaction" />
            <StatCard number="15+" label="Years Experience" />
            <StatCard number="100+" label="Active Clients" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-400 mb-8">
              Let's create something amazing together. Get in touch with us today.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all flex items-center gap-2 mx-auto w-fit"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Link 
                to="/"
                onClick={scrollToTop}
                className="text-2xl font-bold text-white mb-6 block"
              >
                <span className="text-blue-500">Inspirova</span>
              </Link>
              <p className="text-gray-400">
                Creating digital experiences that inspire and transform
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors mb-2">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors mb-2">
                Contact
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors mb-2">
                Services
              </Link>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <SocialIcon href="YOUR_TWITTER_LINK" icon="twitter" />
                <SocialIcon href="YOUR_LINKEDIN_LINK" icon="linkedin" />
                <SocialIcon href="YOUR_INSTAGRAM_LINK" icon="instagram" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Inspirova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const ServiceCard = ({ icon, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all"
  >
    <div className="text-blue-500 mb-4 w-12 h-12">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const StatCard = ({ number, label }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center text-white"
  >
    <h3 className="text-4xl font-bold mb-2">{number}</h3>
    <p className="text-blue-200">{label}</p>
  </motion.div>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
  >
    <span className="sr-only">{icon}</span>
    {/* Implementation of social icons would go here */}
  </a>
);

export default Home;