import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSuccessMessage('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "zakirseyfa@gmail.com",
      link: "mailto:zakirseyfa@gmail.com",
      color: "text-red-500"
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      value: "+251 934 177 253",
      link: "tel:+251934177253",
      color: "text-green-500"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/seyfedin",
      link: "https://linkedin.com/in/seyfedin-1",
      color: "text-blue-500"
    },
    {
      icon: <FaGithub className="text-xl" />,
      title: "GitHub",
      value: "github.com/seyfedin",
      link: "https://github.com/seyfedin-1",
      color: "text-purple-500"
    }
  ];

  return (
    <footer id="contact" className="relative border-t border-gray-200 dark:border-gray-700">
      {/* Background image with transparency */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/chrome-pattern.jfif')] opacity-10 dark:opacity-5"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you!
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`p-3 rounded-full ${method.color} bg-opacity-10`}>
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200">{method.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className={`block w-full px-3 py-2 rounded-lg border-2 ${
                        activeField === 'name' 
                          ? 'border-blue-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className={`block w-full px-3 py-2 rounded-lg border-2 ${
                        activeField === 'email' 
                          ? 'border-blue-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      rows={4}
                      className={`block w-full px-3 py-2 rounded-lg border-2 ${
                        activeField === 'message' 
                          ? 'border-blue-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white/50 dark:bg-gray-700/50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all`}
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md transition-all mt-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </span>
                  )}
                </motion.button>

                <AnimatePresence>
                  {successMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-200 rounded-lg text-sm"
                    >
                      {successMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Seyfedin Shukur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;