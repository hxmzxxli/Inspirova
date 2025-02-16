'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'DigiMarkPro transformed our online presence, delivering incredible results.',
    logo: '/images/client1.png',
  },
  {
    name: 'Jane Smith',
    feedback: 'An exceptional team delivering beyond expectations every single time!',
    logo: '/images/client2.png',
  },
  {
    name: 'Michael Lee',
    feedback: 'They helped us achieve our digital goals seamlessly and effectively.',
    logo: '/images/client3.png',
  },
];

const TestimonialSection = () => {
  const [isMessageBoxVisible, setIsMessageBoxVisible] = useState(false);

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

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our clients about their experiences working with us.
            </p>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.name}'s logo`}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                </div>
                <p className="text-gray-400 italic">"{testimonial.feedback}"</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Share Experience Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <button
              onClick={() => setIsMessageBoxVisible(!isMessageBoxVisible)}
              className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold"
            >
              Share Your Experience
            </button>
          </motion.div>

          {/* Message Box */}
          {isMessageBoxVisible && (
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gray-800/50 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl text-white">Share Your Feedback</h3>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                className="w-full mt-4 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none"
              ></textarea>
              <div className="mt-4 text-right">
                <button
                  onClick={() => setIsMessageBoxVisible(false)}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;