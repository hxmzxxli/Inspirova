import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, Rocket, Code, Heart, Coffee, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GrowthChart = () => {
  // Sample growth data aligned with company milestones (2018-2024)
  const growthData = [
    { year: '2018', revenue: 1.2, clients: 15, projects: 28 },
    { year: '2019', revenue: 2.5, clients: 42, projects: 86 },
    { year: '2020', revenue: 3.8, clients: 97, projects: 175 },
    { year: '2021', revenue: 5.6, clients: 183, projects: 342 },
    { year: '2022', revenue: 7.9, clients: 276, projects: 521 },
    { year: '2023', revenue: 10.2, clients: 394, projects: 756 },
    { year: '2024', revenue: 12.8, clients: 500, projects: 1000 }
  ];

  return (
    <div className="h-64 w-full bg-gray-900/50 rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={growthData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="clientsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="projectsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#EC4899" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="year" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(17, 24, 39, 0.8)', 
              backdropFilter: 'blur(8px)',
              borderColor: '#374151', 
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
            }} 
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Legend wrapperStyle={{ color: '#fff' }} />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ r: 6, strokeWidth: 2 }}
            activeDot={{ r: 8, strokeWidth: 0 }}
            name="Revenue ($M)" 
            animationDuration={2000}
            fill="url(#revenueGradient)"
          />
          <Line 
            type="monotone" 
            dataKey="clients" 
            stroke="#8B5CF6" 
            strokeWidth={3}
            dot={{ r: 6, strokeWidth: 2 }}
            activeDot={{ r: 8, strokeWidth: 0 }}
            name="Clients" 
            animationDuration={2000}
            animationBegin={300}
          />
          <Line 
            type="monotone" 
            dataKey="projects" 
            stroke="#EC4899" 
            strokeWidth={3}
            dot={{ r: 6, strokeWidth: 2 }}
            activeDot={{ r: 8, strokeWidth: 0 }}
            name="Projects" 
            animationDuration={2000}
            animationBegin={600}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const GrowthSection = () => {
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

  return (
    <motion.div
      variants={fadeInRight}
      className="mt-20 p-6 bg-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-600 shadow-lg"
    >
      <h3 className="text-3xl font-semibold text-white mb-6">Our Growth</h3>
      <GrowthChart />
      <p className="text-gray-400 text-center mt-3 text-sm">
        Annual growth metrics showing our consistent upward trajectory
      </p>
    </motion.div>
  );
};

const LeadershipCard = ({ name, title, description, imageUrl, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
      <div className="relative p-6 bg-gray-900/70 backdrop-blur-md rounded-xl border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 overflow-hidden h-full">
        <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
        
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-blue-500/50 p-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              {imageUrl ? (
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="text-3xl font-bold text-blue-400">{name.charAt(0)}</div>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{name}</h3>
          <p className="text-blue-400 mb-3 text-sm font-medium">{title}</p>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
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
    { icon: <Award className="w-8 h-8" />, number: '7+', label: 'Years Experience' },
    { icon: <Users className="w-8 h-8" />, number: '50+', label: 'Happy Clients' },
    { icon: <Globe className="w-8 h-8" />, number: '3+', label: 'Countries' },
    { icon: <Rocket className="w-8 h-8" />, number: '100+', label: 'Projects' },
  ];

  const moreStats = [
    { icon: <Code className="w-8 h-8" />, number: '2M+', label: 'Lines of Code' },
    { icon: <Heart className="w-8 h-8" />, number: '98%', label: 'Client Retention' },
    { icon: <Coffee className="w-8 h-8" />, number: '15K+', label: 'Cups of Coffee' },
    { icon: <Zap className="w-8 h-8" />, number: '24/7', label: 'Support' },
  ];

  const milestones = [
    { "year": 2018, "title": "Founded", "description": "Launched as a cutting-edge digital agency specializing in branding and web solutions." },
    { "year": 2019, "title": "First Big Win", "description": "Secured our first enterprise client, establishing credibility in the digital space." },
    { "year": 2021, "title": "Scaling Up", "description": "Expanded our services to include full-scale digital marketing and UX/UI design." },
    { "year": 2022, "title": "Global Presence", "description": "Opened an international office and built a diverse remote team." },
    { "year": 2023, "title": "Industry Recognition", "description": "Won multiple awards for innovation in digital branding and design." },
    { "year": 2024, "title": "AI-Powered Future", "description": "Integrated AI-driven solutions to revolutionize branding, marketing, and development." }
  ];

  const teamValues = [
    { title: 'Innovation', description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.' },
    { title: 'Quality', description: 'We never compromise on quality, ensuring every project exceeds expectations.' },
    { title: 'Collaboration', description: 'We believe in the power of teamwork and open communication.' },
    { title: 'Integrity', description: 'We operate with honesty, transparency, and ethical standards in all we do.' },
  ];

  const leadershipTeam = [
    {
      name: "Wasey Ahmed",
      title: "CEO & Founder",
      description: "Former Google UX lead with 15+ years of experience pioneering digital innovation across Fortune 500 companies.",
      imageUrl: null
    },
    {
      name: "Cathy",
      title: "Chief Creative Officer",
      description: "Award-winning designer who has shaped brand identities for some of the world's most recognized companies.",
      imageUrl: null
    },
    {
      name: "Nitish",
      title: "CTO",
      description: "Tech visionary with expertise in emerging technologies who leads our development and innovation initiatives.",
      imageUrl: null
    },
    {
      name: "Zubair",
      title: "Strategy Director",
      description: "Former McKinsey consultant specializing in digital transformation and business growth strategies.",
      imageUrl: null
    },
  ];

  return (
    <PageTransition>
      <section className="py-24 bg-black relative overflow-hidden">
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
              <h2 className="text-5xl md:text-6xl font-bold text-blue-600">
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
              <motion.div variants={itemVariants} className="relative">
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
                      <h4 className="text-3xl font-bold text-blue-400 mb-2">7+</h4>
                      <p className="text-gray-400">Years of Experience</p>
                    </div>
                    <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                      <h4 className="text-3xl font-bold text-purple-400 mb-2">50+</h4>
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

            {/* Replace placeholder with actual Growth Chart component */}
            <GrowthSection />
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
                >
                  <div className="bg-gray-900 p-8 rounded-xl h-full">
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Team Section - Leadership Only */}
          <motion.div
            ref={ref5}
            variants={containerVariants}
            initial="hidden"
            animate={inView5 ? 'visible' : 'hidden'}
            className="py-20"
          >
            <motion.div 
              variants={scaleUp} 
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-md"></div>
                <p className="relative text-gray-100 max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-lg">
                  Visionary leaders driving innovation and excellence
                </p>
              </div>
            </motion.div>

            {/* Leadership Cards Grid */}
            <motion.div
              variants={containerVariants}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {leadershipTeam.map((leader, index) => (
                  <LeadershipCard key={index} {...leader} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Leadership Vision */}
            <motion.div
              variants={fadeInLeft}
              className="mt-16 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative p-8 bg-gray-900/70 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden">
                <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl font-bold text-white mb-6 inline-flex items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Leadership Philosophy</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    variants={itemVariants}
                    className="text-gray-300"
                  >
                    <p className="mb-4 text-lg leading-relaxed">
                      Our leadership team brings together diverse backgrounds and expertise, united by a shared vision to redefine what's possible in the digital landscape.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                      With collective experience spanning Fortune 500 companies, successful startups, and leading tech innovators, our leaders provide strategic guidance that balances bold creativity with proven business acumen.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="text-gray-300"
                  >
                    <p className="mb-4 text-lg leading-relaxed">
                      We believe in fostering a culture of continuous learning and innovation, where every team member is empowered to contribute ideas and push boundaries.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Our collective leadership approach emphasizes collaboration, transparency, and a relentless focus on delivering exceptional client experiences that drive tangible results and lasting relationships.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <div className="text-center pt-20 pb-8">
            <motion.div 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-70"></div>
              <a
                
                href="/Services"
                
                className="relative inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Work With Us
              </a>
            </motion.div>
            <p className="text-gray-400 mt-4">
              Ready to transform your digital presence? Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;