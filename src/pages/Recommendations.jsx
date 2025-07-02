import React from 'react';
import { motion } from 'framer-motion';

const recommendations = [
  {
    name: 'Betselot Kidane',
    title: 'Asst. Professor at Debre Berhan University',
    date: 'Jun 2025',
    letterImage: '/assets/images/1.jpg',
  },
  {
    name: 'Bekele Mengesha',
    title: 'Department Head at Debre Berhan University',
    date: 'Jun 2025',
    letterImage: '/assets/images/2.jpg',
  },
  {
    name: 'Shamble Kefelegn',
    title: 'Lecturer at Debre Berhan University',
    date: 'Jun 2025',
    letterImage: '/assets/images/3.jpg',
  },
];

const Recommendations = () => {
  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/chrome-pattern.jfif')]"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'multiply',
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Recommendation Letters
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional endorsements from academic mentors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Letter Image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg border-4 border-white dark:border-gray-800 bg-white">
                <img 
                  src={recommendation.letterImage}
                  alt={`Recommendation letter from ${recommendation.name}`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: '400px' }}
                />

                {/* Overlay info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="font-bold text-white text-lg">{recommendation.name}</h3>
                    <p className="text-blue-300 text-sm">{recommendation.title}</p>
                    <p className="text-gray-300 text-xs">{recommendation.date}</p>
                  </div>
                </div>
              </div>

              {/* View Full Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center"
                onClick={() => window.open(recommendation.letterImage, '_blank')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                View Full
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
