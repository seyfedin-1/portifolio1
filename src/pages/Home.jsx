import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import ErrorBoundary from '../components/ErrorBoundary';

const Home = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Seyfedin Shukur";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(prev => prev + fullText[index]);
        index++;
      } else {
        setText(fullText);
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (!isTypingComplete) {
        setShowCursor(prev => !prev);
      }
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isTypingComplete]);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/pattern.svg')] opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-12"
            >
              {/* Left side - Text Content (now first in the DOM order) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-2/3 text-center md:text-left"
              >
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
                    {text}
                  </span>
                  {showCursor && <span className="text-gray-900">|</span>}
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                  Full-Stack Developer & <span className="text-blue-600 font-medium">Creative Problem Solver</span>
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center"
                  >
                    <FaDownload className="mr-3" />
                    <span className="font-medium">Download CV</span>
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/seyfedin-shukur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center border border-gray-200"
                  >
                    <FaLinkedin className="mr-3 text-blue-600" />
                    <span className="font-medium">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/seyfedin-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center border border-gray-200"
                  >
                    <FaGithub className="mr-3 text-gray-800" />
                    <span className="font-medium">GitHub</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Right side - Profile Image (now second in the DOM order) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/3 flex justify-center order-first md:order-last"
              >
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                  <img
                    src="/assets/images/seyfa.png"
                    alt="Profile"
                    className="relative rounded-full border-4 border-white shadow-2xl w-64 h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;