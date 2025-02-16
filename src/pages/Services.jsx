import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { 
  ArrowRight, MonitorSmartphone, BarChart3, Search, 
  PenTool, Code, Megaphone, X, Check, ChevronDown,
  Monitor, Zap, BarChart2, Globe, ShieldCheck, MessageCircle,
  Rocket
} from 'lucide-react';

const ServiceModal = ({ service, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    problem: ''
  });
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', phone: '', problem: '' });
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const serviceDetails = {
    "Web Design & Development": {
      description: "Transform your digital presence with our custom web development solutions. We create responsive, user-friendly websites that not only look stunning but also drive real business results.",
      points: [
        "Responsive Design",
        "Custom CMS",
        "E-commerce Solutions",
        "Performance Optimization",
        "SEO-friendly architecture"
      ],
      features: [
        "Progressive Web App (PWA) capabilities",
        "Accessibility compliance (WCAG 2.1)",
        "Integrated analytics and heatmaps",
        "Seamless third-party integrations",
        "Regular security updates and maintenance"
      ],
      price: "Starting from $2,999",
      timeframe: "4-8 weeks"
    },
    "Digital Marketing": {
      description: "Maximize your online reach with our comprehensive digital marketing strategies. We use data-driven approaches to ensure your marketing budget delivers the best possible ROI.",
      points: [
        "PPC Campaigns",
        "Email Marketing",
        "Content Strategy",
        "Analytics & Reporting",
        "Multi-channel marketing strategy"
      ],
      features: [
        "A/B testing and optimization",
        "Customer journey mapping",
        "Competitive analysis and benchmarking",
        "Monthly performance reviews",
        "Custom dashboard for real-time metrics"
      ],
      price: "Starting from $1,499/month",
      timeframe: "Ongoing (3-month minimum)"
    },
    "SEO Optimization": {
      description: "Improve your search engine rankings and drive organic traffic with our proven SEO strategies. We focus on sustainable, long-term results that bring quality traffic to your website.",
      points: [
        "Keyword Research",
        "Technical SEO Audit",
        "Local SEO",
        "Link Building",
        "Content strategy development"
      ],
      features: [
        "Structured data implementation",
        "Mobile SEO optimization",
        "Voice search optimization",
        "Competitor SEO analysis",
        "Monthly ranking and traffic reports"
      ],
      price: "Starting from $999/month",
      timeframe: "Ongoing (6-month recommended)"
    },
    "Branding & Identity": {
      description: "Build a strong, memorable brand identity that connects with your audience. Our branding solutions help you stand out in today's competitive market with a unique and professional image.",
      points: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Strategy",
        "Marketing collateral design"
      ],
      features: [
        "In-depth market research",
        "Customer persona development",
        "Brand voice and messaging",
        "Social media branding kit",
        "Brand style guide (digital and print)"
      ],
      price: "Starting from $1,999",
      timeframe: "3-5 weeks"
    },
    "App Development": {
      description: "Create powerful, user-friendly applications that work seamlessly across all platforms. We specialize in both native and cross-platform development to reach your entire audience.",
      points: [
        "iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "App Maintenance",
        "Quality assurance testing"
      ],
      features: [
        "Offline functionality",
        "Push notifications",
        "Analytics integration",
        "Cloud synchronization",
        "App Store optimization"
      ],
      price: "Starting from $5,999",
      timeframe: "8-16 weeks"
    },
    "Social Media Marketing": {
      description: "Build and maintain a strong social media presence that engages your audience and drives conversions. We create compelling content strategies that resonate with your target market.",
      points: [
        "Content Creation",
        "Community Management",
        "Paid Advertising",
        "Performance Analytics",
        "Influencer partnerships"
      ],
      features: [
        "Social listening and reputation management",
        "Content calendar development",
        "Hashtag and trend research",
        "Audience growth strategies",
        "Cross-platform campaign coordination"
      ],
      price: "Starting from $799/month",
      timeframe: "Ongoing (3-month minimum)"
    }
  };

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gray-900/90 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <motion.button 
                whileHover={{ rotate: 90 }}
                onClick={onClose} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="text-gray-300 mb-8">
              <p className="mb-4">{serviceDetails[service.title].description}</p>
              <p className="text-lg font-semibold text-blue-400 mb-4">{serviceDetails[service.title].price}</p>
              <p className="text-sm text-gray-400 mb-6">Estimated timeframe: {serviceDetails[service.title].timeframe}</p>
              
              <h4 className="text-xl font-semibold text-white mb-3">Core Services</h4>
              <ul className="space-y-2 mb-6">
                {serviceDetails[service.title].points.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 text-green-500 flex-shrink-0" size={16} />
                    {point}
                  </li>
                ))}
              </ul>
              
              <h4 className="text-xl font-semibold text-white mb-3">Additional Features</h4>
              <ul className="space-y-2 mb-6">
                {serviceDetails[service.title].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRight className="mr-2 text-blue-500 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Describe Your Project
                </label>
                <textarea
                  required
                  value={formData.problem}
                  onChange={e => setFormData({...formData, problem: e.target.value})}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors h-32"
                  placeholder="Tell us about your project or challenges"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SuccessMessage = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-lg shadow-xl flex items-center gap-3 z-50"
  >
    <Check className="w-5 h-5" />
    <span>Thank you! We'll be in touch soon.</span>
    <button onClick={onClose} className="ml-2">
      <X className="w-5 h-5" />
    </button>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description, color, hoverColor, index, onClick, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl -z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: isHovered ? 1.1 : 0.8 }}
        transition={{ duration: 0.4 }}
        style={{
          background: isHovered 
            ? `linear-gradient(to right, var(--tw-gradient-stops))`
            : `linear-gradient(to right, var(--tw-gradient-stops))`,
          '--tw-gradient-from': `rgb(var(--${color.split(' ')[0]}-rgb))`,
          '--tw-gradient-to': `rgb(var(--${color.split(' ')[2]}-rgb))`,
        }}
      />
      <div className="relative p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white"
        >
          <Icon className="w-full h-full" />
        </motion.div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
          {description}
        </p>

        <motion.button 
          onClick={onClick}
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 w-full justify-between mt-auto"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="flex items-center gap-2">
            Learn More
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </span>
          <motion.div
            animate={{ rotate: isSelected ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            background: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
              Math.random() * 100 + 155
            )}, ${Math.floor(Math.random() * 255)}, 0.1)`,
            filter: 'blur(20px)',
          }}
        />
      ))}
    </div>
  );
};

const ProcessStep = ({ number, title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold z-10 relative"
          >
            {number}
          </motion.div>
          {index < 5 && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-purple-600 to-transparent hidden md:block" />
          )}
        </div>
        
        <div className="flex-1 md:pl-6">
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "Working with this team transformed our online presence. Their strategic approach to digital marketing increased our conversion rates by 57% in just three months.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "/api/placeholder/100/100"
    },
    {
      quote: "The web development project exceeded our expectations. The final product was not only beautiful but also resulted in a 200% increase in user engagement.",
      author: "Michael Chen",
      position: "Marketing Director, Global Retail",
      image: "/api/placeholder/100/100"
    },
    {
      quote: "Their SEO expertise helped us climb from page 3 to the top position for our key industry terms. The ROI has been exceptional.",
      author: "Emma Rodriguez",
      position: "Founder, Rodriguez & Partners",
      image: "/api/placeholder/100/100"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden py-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
        >
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-blue-500 rounded-full" />
            </div>
            <p className="text-lg text-gray-300 italic mb-4">"{testimonials[currentIndex].quote}"</p>
            <h4 className="text-white font-semibold">{testimonials[currentIndex].author}</h4>
            <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const WhyChooseUsItem = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row items-center md:items-start gap-5"
    >
      <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 text-center md:text-left">{title}</h3>
        <p className="text-gray-400 text-center md:text-left">{description}</p>
      </div>
    </motion.div>
  );
};

const FAQ = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-700 last:border-b-0 py-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-semibold text-white pr-8">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 mt-4 pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      setScrolled(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setSelectedService(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const services = [
    {
      icon: MonitorSmartphone,
      title: "Web Design & Development",
      description: "Custom websites that captivate your audience and drive conversions. Our responsive designs ensure perfect viewing across all devices.",
      color: "violet-600 to indigo-600",
      hoverColor: "violet-500 to indigo-500"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your online presence and ROI. We combine analytics with creativity to deliver measurable results.",
      color: "indigo-600 to blue-600",
      hoverColor: "indigo-500 to blue-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your rankings and attract organic traffic to your website. Our proven SEO techniques help you climb search engine results pages.",
      color: "blue-600 to cyan-600",
      hoverColor: "blue-500 to cyan-500"
    },
    {
      icon: PenTool,
      title: "Branding & Identity",
      description: "Create a memorable brand that resonates with your target audience. From logo design to complete brand guidelines, we build your unique identity.",
      color: "cyan-600 to teal-600",
      hoverColor: "cyan-500 to teal-500"
    },
    {
      icon: Code,
      title: "App Development",
      description: "Native and cross-platform apps that deliver exceptional user experience. We build scalable, feature-rich applications for iOS and Android.",
      color: "teal-600 to emerald-600",
      hoverColor: "teal-500 to emerald-500"
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Engage your audience and build a strong social media presence. Our strategies increase brand awareness and foster community growth.",
      color: "emerald-600 to green-600",
      hoverColor: "emerald-500 to green-500"
    }
  ];

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full z-0"
          style={{ y: backgroundY }}
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <motion.div
              className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full filter blur-3xl"
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full filter blur-3xl"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 8, delay: 4, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
          <FloatingShapes />
        </motion.div>
        
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                style={{
                  backgroundPosition: `${scrolled * 100}% 0%`,
                }}
              >
                Our Digital Solutions
              </motion.h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive digital services tailored to elevate your brand and drive business growth in today's competitive landscape
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  index={index}
                  isSelected={selectedIndex === index}
                  onClick={() => {
                    setSelectedService(service);
                    setSelectedIndex(index);
                  }}
                />
              ))}
            </div>

            <ServiceModal
              service={selectedService}
              isOpen={!!selectedService}
              onClose={() => {
                setSelectedService(null);
                setSelectedIndex(null);
              }}
              onSubmit={handleSubmit}
            />
            
            <AnimatePresence>
              {showSuccess && <SuccessMessage onClose={() => setShowSuccess(false)} />}
            </AnimatePresence>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-24 px-4 relative z-10 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Our Process
              </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A methodical approach that ensures we deliver exceptional results for every project
              </p>
            </motion.div>

            <div className="space-y-12 max-w-3xl mx-auto">
              <ProcessStep
                number="1"
                title="Discovery & Strategy"
                description="We start by understanding your business goals, target audience, and competitors to develop a tailored digital strategy."
                icon={Search}
                index={0}
              />
              <ProcessStep
                number="2"
                title="Design & Planning"
                description="Our team creates wireframes and design concepts that align with your brand while prioritizing user experience."
                icon={PenTool}
                index={1}
              />
              <ProcessStep
                number="3"
                title="Development"
                description="We build your solution using cutting-edge technologies and best practices to ensure performance and scalability."
                icon={Code}
                index={2}
              />
              <ProcessStep
                number="4"
                title="Testing & Refinement"
                description="Rigorous quality assurance and testing across all platforms to ensure a flawless final product."
                icon={Check}
                index={3}
              />
              <ProcessStep
                number="5"
                title="Launch & Deployment"
                description="We carefully manage the deployment process to ensure a smooth transition and successful launch."
                icon={Rocket}
                index={4}
              />
              <ProcessStep
                number="6"
                title="Support & Growth"
                description="Ongoing maintenance, analytics, and optimization to ensure continued success and growth."
                icon={BarChart2}
                index={5}
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                  Why Choose Us
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  We combine technical expertise with creative innovation to deliver solutions that exceed expectations
                </p>
                
                <div className="space-y-8">
                  <WhyChooseUsItem
                    icon={Zap}
                    title="Proven Results"
                    description="Our track record speaks for itself with measurable improvements in traffic, conversions, and brand awareness for our clients."
                    index={0}
                  />
                  <WhyChooseUsItem
                    icon={Globe}
                    title="Industry Expertise"
                    description="Our team brings specialized knowledge across multiple industries and stays current with the latest digital trends."
                    index={1}
                  />
                  <WhyChooseUsItem
                    icon={ShieldCheck}
                    title="Reliable Support"
                    description="We provide ongoing maintenance and support to ensure your digital assets continue to perform optimally."
                    index={2}
                  />
                  <WhyChooseUsItem
                    icon={MessageCircle}
                    title="Clear Communication"
                    description="Transparent processes and regular updates keep you informed and involved throughout your project."
                    index={3}
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TestimonialSlider />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 relative z-10 bg-black/30">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get answers to common questions about our services and process
              </p>
            </motion.div>

            <div className="space-y-6">
              <FAQ
                question="What types of businesses do you work with?"
                answer="We work with businesses of all sizes across various industries, from startups to established enterprises. Our team has experience in e-commerce, SaaS, healthcare, education, finance, and many other sectors."
                index={0}
              />
              <FAQ
                question="How long does a typical project take to complete?"
                answer="Project timelines vary based on scope and complexity. A basic website might take 4-6 weeks, while a comprehensive digital marketing campaign or custom application could take 2-4 months. We'll provide a detailed timeline during our initial consultation."
                index={1}
              />
              <FAQ
                question="Do you offer ongoing maintenance and support?"
                answer="Yes, we offer various maintenance packages to keep your digital assets running smoothly. These include regular updates, security monitoring, performance optimization, and technical support to address any issues that arise."
                index={2}
              />
              <FAQ
                question="How do you measure the success of a project?"
                answer="We establish clear KPIs at the beginning of each project, which may include metrics like traffic growth, conversion rates, engagement metrics, or ROI. We provide regular reports and analytics to track progress and demonstrate value."
                index={3}
              />
              <FAQ
                question="What makes your agency different from others?"
                answer="Our approach combines strategic thinking with technical expertise and creative execution. We focus on building long-term partnerships rather than one-off projects, and our team brings specialized knowledge across multiple digital disciplines."
                index={4}
              />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services