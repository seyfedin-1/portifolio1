import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaMobileAlt } from 'react-icons/fa';

const skills = {
  frontend: [
    { name: 'React', icon: <FaReact className="w-6 h-6" />, level: 95, color: 'blue' },
    { name: 'HTML', icon: <FaHtml5 className="w-6 h-6" />, level: 95, color: 'red' },
    { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6" />, level: 95, color: 'purple' },
    { name: 'JavaScript', icon: <FaJs className="w-6 h-6" />, level: 75, color: 'yellow' },
    { name: 'Tailwind CSS', icon: <FaCss3Alt className="w-6 h-6" />, level: 90, color: 'green' },
    { name: 'Bootstrap', icon: <FaCss3Alt className="w-6 h-6" />, level: 70, color: 'pink' }
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" />, level: 85, color: 'green' },
    { name: 'MongoDB', icon: <FaDatabase className="w-6 h-6" />, level: 85, color: 'orange' },
    { name: 'Express.js', icon: <FaNodeJs className="w-6 h-6" />, level: 80, color: 'red' },
    { name: 'SQL', icon: <FaDatabase className="w-6 h-6" />, level: 75, color: 'purple' }
  ],
  mobile: [
    { name: 'Flutter', icon: <FaMobileAlt className="w-6 h-6" />, level: 90, color: 'blue' },
    { name: 'React Native', icon: <FaReact className="w-6 h-6" />, level: 50, color: 'green' }
  ]
};

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <div id="skills" className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      {/* Background image with transparency */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Technical</span> Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my expertise across different domains
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-md border-l-4 ${
                skill.color === 'blue' ? 'border-blue-500' :
                skill.color === 'red' ? 'border-red-500' :
                skill.color === 'purple' ? 'border-purple-500' :
                skill.color === 'yellow' ? 'border-yellow-500' :
                skill.color === 'green' ? 'border-green-500' :
                skill.color === 'orange' ? 'border-orange-500' :
                skill.color === 'pink' ? 'border-pink-500' : 'border-primary-500'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  skill.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  skill.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                  skill.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  skill.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                  skill.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  skill.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                  skill.color === 'pink' ? 'bg-pink-100 dark:bg-pink-900/30' : 'bg-primary-100'
                }`}>
                  {React.cloneElement(skill.icon, { className: `w-6 h-6 ${
                    skill.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    skill.color === 'red' ? 'text-red-600 dark:text-red-400' :
                    skill.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    skill.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                    skill.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    skill.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                    skill.color === 'pink' ? 'text-pink-600 dark:text-pink-400' : 'text-primary-600'
                  }` })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className={`text-sm font-medium ${
                    skill.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    skill.color === 'red' ? 'text-red-600 dark:text-red-400' :
                    skill.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    skill.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                    skill.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    skill.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                    skill.color === 'pink' ? 'text-pink-600 dark:text-pink-400' : 'text-primary-600'
                  }`}>
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: isInView ? `${skill.level}%` : '0%' }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.05 }}
                  className={`h-full rounded-full ${
                    skill.color === 'blue' ? 'bg-blue-500' :
                    skill.color === 'red' ? 'bg-red-500' :
                    skill.color === 'purple' ? 'bg-purple-500' :
                    skill.color === 'yellow' ? 'bg-yellow-500' :
                    skill.color === 'green' ? 'bg-green-500' :
                    skill.color === 'orange' ? 'bg-orange-500' :
                    skill.color === 'pink' ? 'bg-pink-500' : 'bg-primary-500'
                  }`}
                />
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;