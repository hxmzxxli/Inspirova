import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Check, Mail, Phone, MapPin } from 'lucide-react';

const services = [
  {
    title: "Google Ads (PPC)",
    description: "Data-driven PPC campaigns that maximize ROI through strategic keyword targeting and continuous optimization.",
    icon: "🎯"
  },
  {
    title: "SEO",
    description: "Comprehensive SEO solutions including technical optimization, content strategy, and link building.",
    icon: "📈"
  },
  {
    title: "Website Creation",
    description: "Custom website design and development tailored to your brand and business goals.",
    icon: "💻"
  },
  {
    title: "Meta Ads",
    description: "Strategic social media advertising across Meta platforms to reach your target audience.",
    icon: "📱"
  },
  {
    title: "Email Marketing",
    description: "Personalized email campaigns that nurture leads and drive conversions.",
    icon: "✉️"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    text: "The team's expertise in digital marketing transformed our online presence. Our leads increased by 150% within three months!",
    image: "/api/placeholder/64/64"
  },
  {
    name: "Michael Schmidt",
    company: "Deutsche Innovation GmbH",
    text: "Professional, responsive, and results-driven. They helped us establish a strong presence in both US and German markets.",
    image: "/api/placeholder/64/64"
  }
];

const MarketingAgencyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">DigiMarkPro</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fadeIn delay-200">
            Data-driven digital marketing solutions for businesses in the USA and Germany
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 animate-fadeIn delay-300">
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 flex items-center hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're a team of digital marketing experts passionate about helping businesses grow their online presence. With years of experience in both US and German markets, we deliver results-driven solutions tailored to your unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">To empower businesses with innovative digital marketing solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To be the leading digital marketing partner for businesses globally</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">Innovation, transparency, and results-driven excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to transform your digital presence? Contact us today for a free consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4" />
                  <span>info@digimarkpro.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-4" />
                  <span>New York, NY & Berlin, Germany</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DigiMarkPro</h3>
              <p className="text-gray-400">
                Your partner in digital marketing excellence
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Google Ads (PPC)</li>
                <li>SEO</li>
                <li>Website Creation</li>
                <li>Meta Ads</li>
                <li>Email Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Testimonials</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DigiMarkPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingAgencyWebsite;