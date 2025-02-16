import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, Rocket, Code, Heart, Coffee, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useEffect, useState } from 'react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Handle mouse movement
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    button: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "difference"
    }
  };

  const enterButton = () => setCursorVariant('button');
  const leaveButton = () => setCursorVariant('default');

  // Sections with scroll animations
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: false, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Years Experience' },
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Happy Clients' },
    { icon: <Globe className="w-8 h-8" />, number: '30+', label: 'Countries' },
    { icon: <Rocket className="w-8 h-8" />, number: '1000+', label: 'Projects' },
  ];

  const moreStats = [
    { icon: <Code className="w-8 h-8" />, number: '2M+', label: 'Lines of Code' },
    { icon: <Heart className="w-8 h-8" />, number: '98%', label: 'Client Retention' },
    { icon: <Coffee className="w-8 h-8" />, number: '15K+', label: 'Cups of Coffee' },
    { icon: <Zap className="w-8 h-8" />, number: '24/7', label: 'Support' },
  ];

  const milestones = [
    { year: 2008, title: 'Founded', description: 'Started as a small web design studio with just 3 team members.' },
    { year: 2012, title: 'First Major Client', description: 'Landed our first Fortune 500 client, opening doors to bigger opportunities.' },
    { year: 2015, title: 'International Expansion', description: 'Opened our first international office in London, expanding our global reach.' },
    { year: 2018, title: 'Agency of the Year', description: 'Recognized as Agency of the Year at the prestigious Digital Innovation Awards.' },
    { year: 2021, title: '500th Project', description: 'Celebrated our 500th successful project delivery and growing team of 50+ experts.' },
    { year: 2023, title: 'AI Innovation', description: 'Launched our AI-powered design and development solutions for next-gen applications.' },
  ];

  const teamValues = [
    { title: 'Innovation', description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.' },
    { title: 'Quality', description: 'We never compromise on quality, ensuring every project exceeds expectations.' },
    { title: 'Collaboration', description: 'We believe in the power of teamwork and open communication.' },
    { title: 'Integrity', description: 'We operate with honesty, transparency, and ethical standards in all we do.' },
  ];

  return (
    <PageTransition>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 9999,
          borderRadius: '50%',
          pointerEvents: 'none',
          height: 32,
          width: 32,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          mixBlendMode: "difference"
        }}
      />
      
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref1}
            variants={containerVariants}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            className="space-y-24"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                About Us
              </h2>
              <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
                Crafting impactful digital experiences for brands worldwide.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 group-hover:border-gray-600 transition-all duration-300">
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <h4 className="text-4xl font-bold text-white mb-2">{stat.number}</h4>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={containerVariants} className="space-y-8">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r p-[1px] from-blue-500 to-purple-500 rounded-xl"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <div className="bg-gray-900 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-gray-400">
                      Our mission is to create innovative digital solutions that empower businesses 
                      and individuals to succeed in the digital world. We strive to combine creativity
                      with cutting-edge technology to deliver exceptional results that drive growth
                      and inspire transformation.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r p-[1px] from-purple-500 to-pink-500 rounded-xl"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <div className="bg-gray-900 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-gray-400">
                      Our vision is to be the most trusted digital agency, delivering exceptional 
                      value and creating lasting relationships with our clients. We aim to be at the
                      forefront of digital innovation, setting new standards of excellence and inspiring
                      meaningful change in the industry.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Our Story */}
              <motion.div variants={itemVariants} className="relative"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                  <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
                  <p className="text-gray-400 mb-6">
                    We started as a small team of passionate creatives, working tirelessly to bring 
                    ideas to life. Over the years, we've grown into a diverse team of experts who 
                    are committed to delivering exceptional digital experiences for brands across 
                    the globe.
                  </p>
                  <p className="text-gray-400 mb-6">
                    Our journey began with a simple belief: that great design and technology could transform
                    businesses and create meaningful connections with audiences worldwide. Today, that belief
                    continues to drive everything we do.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                      <h4 className="text-3xl font-bold text-blue-400 mb-2">10+</h4>
                      <p className="text-gray-400">Years of Experience</p>
                    </div>
                    <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                      <h4 className="text-3xl font-bold text-purple-400 mb-2">500+</h4>
                      <p className="text-gray-400">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Company Timeline */}
          <motion.div
            ref={ref2}
            variants={containerVariants}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            className="py-24"
          >
            <motion.div variants={scaleUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From our humble beginnings to becoming an industry leader, here's how we've grown over the years.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {/* Timeline items */}
              <div className="space-y-24">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                    className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                        <h4 className="text-2xl font-bold text-white mb-2">{milestone.year}</h4>
                        <h3 className="text-xl font-bold text-blue-400 mb-2">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block relative w-0">
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    </div>
                    <div className="w-full md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* More Stats Section */}
          <motion.div
            ref={ref3}
            variants={containerVariants}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
            className="py-20"
          >
            <motion.div variants={scaleUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Numbers tell only part of our story, but they help illustrate the scale of what we've accomplished together.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {moreStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 group-hover:border-gray-600 transition-all duration-300">
                    <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <h4 className="text-4xl font-bold text-white mb-2">{stat.number}</h4>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Growth Chart - Placeholder for future implementation */}
            <motion.div
              variants={fadeInRight}
              className="mt-20 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Growth</h3>
              <div className="h-64 w-full bg-gray-900/50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 text-center">
                  [Growth Chart Visualization to be implemented here]<br/>
                  <span className="text-sm">Annual growth metrics showing our consistent upward trajectory</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            ref={ref4}
            variants={containerVariants}
            initial="hidden"
            animate={inView4 ? 'visible' : 'hidden'}
            className="py-20"
          >
            <motion.div variants={scaleUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The core principles that guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {teamValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r p-[1px] from-blue-500 to-purple-500 rounded-xl"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <div className="bg-gray-900 p-8 rounded-xl h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            ref={ref5}
            variants={containerVariants}
            initial="hidden"
            animate={inView5 ? 'visible' : 'hidden'}
            className="py-20"
          >
            <motion.div variants={scaleUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Talented individuals working together to create extraordinary digital experiences.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInLeft}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-12"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Leadership</h3>
              <p className="text-gray-400 mb-6">
                Our leadership team brings decades of combined experience in digital strategy, design, and technology.
                With backgrounds spanning from Fortune 500 companies to successful startups, they provide the vision
                and expertise that drives our agency forward.
              </p>
              <div className="h-48 w-full bg-gray-900/50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 text-center">
                  [Leadership Team Photos to be implemented here]<br/>
                  <span className="text-sm">Our diverse and experienced leadership team</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInRight}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Experts</h3>
              <p className="text-gray-400 mb-6">
                We've assembled a team of specialists across every discipline - from UX designers and developers
                to digital strategists and project managers. Each brings their unique talents and perspectives,
                united by a shared passion for creating exceptional digital experiences.
              </p>
              <div className="h-48 w-full bg-gray-900/50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 text-center">
                  [Team Members Grid to be implemented here]<br/>
                  <span className="text-sm">A mosaic of talented individuals who make up our agency</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <div className="text-center pt-20 pb-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="inline-block px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              Connect With Us
            </motion.a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;