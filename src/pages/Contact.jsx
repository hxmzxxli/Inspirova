import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@inspirova.io",
      color: "from-blue-400 to-blue-600"
    },
    //{
      //icon: <Phone className="w-6 h-6" />,
      //title: "Call Us",
      //details: "+91 89786 74156",
      //color: "from-purple-400 to-purple-600"
    //},
    //{
      //icon: <MapPin className="w-6 h-6" />,
      //title: "Visit Us",
      //details: "Banjara Hills",
      //color: "from-pink-400 to-pink-600"
    //}
  ];

  return (
    <PageTransition>
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Animated background elements - same as About page */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your digital presence? We're here to help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-r ${info.color} p-[1px] rounded-xl`}
                >
                  <div className="bg-gray-900 p-6 rounded-xl flex items-start gap-4">
                    <a 
                      href="mailto:info@inspirova.io"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {info.icon}
                    </a>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-400">{info.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', type: 'text', label: 'Your Name' },
                  { name: 'email', type: 'email', label: 'Your Email' },
                  { name: 'subject', type: 'text', label: 'Subject' }
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    whileHover={{ scale: 1.01 }}
                    className="relative"
                  >
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.label}
                      className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </motion.div>
                ))}

                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl text-white font-semibold flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } transition-all duration-300`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;