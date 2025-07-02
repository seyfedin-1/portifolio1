import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certificates = [
  {
    title: 'Full Stack Developer Internship',
    institution: 'Kuraz Tech',
    date: '2024',
    description: 'Completed intensive internship program focused on React, Node.js, and MongoDB development',
    image: '/assets/images/cert.jpg',
  },
  {
    title: 'Hackathon Organizer & Coordinator',
    institution: 'Debre Berhan University (DBUHACKX)',
    date: '2025',
    description: 'Certified as official organizer and coordinator for university hackathon events',
    image: '/assets/images/cert.jpg',
  }
];

const Certifications = () => {
  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/chrome-pattern.jfif')] opacity-10 dark:opacity-5"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
            mixBlendMode: 'multiply'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            My Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Official recognition of my skills and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <FaCertificate className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{cert.institution}</p>
                  </div>
                </div>

                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-auto rounded-lg mb-4 border"
                />

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
