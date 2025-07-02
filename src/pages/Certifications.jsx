import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const certificates = [
  {
    title: 'Full Stack Web Development',
    institution: 'Debre Berhan University',
    date: '2023',
    description: 'Completed full stack web development course with focus on React and Node.js',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500',
  },
  {
    title: 'Advanced JavaScript',
    institution: 'FreeCodeCamp',
    date: '2022',
    description: 'Mastered JavaScript concepts and algorithms',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
  },
  {
    title: 'MongoDB Developer',
    institution: 'MongoDB University',
    date: '2022',
    description: 'Certified MongoDB developer with expertise in database design',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500',
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-xl mb-1">{cert.title}</h3>
                    <p className="text-blue-200 font-medium">{cert.institution}</p>
                    <p className="text-sm text-gray-300 mt-2">{cert.date}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow-sm">
                  {cert.date}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {cert.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600">
                  <FaCertificate className="mr-2" />
                  <span className="text-sm font-medium">Verified Certificate</span>
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