import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Kaffen Coffee Shop',
    description: 'A modern coffee shop website with menu display, location information, and contact form. Built with responsive design for optimal viewing on all devices.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://kaffen-coffee.netlify.app',
    image: '/assets/images/kaffen-screenshot.jpg',
    accentColor: 'from-amber-600 to-amber-800' // Coffee theme color
  },
  {
    title: 'HIM Software Development',
    description: 'Professional software development company website showcasing services, portfolio, and contact information. Features clean design and smooth animations.',
    technologies: ['React', 'Tailwind CSS'],
    demo: 'https://himsoftwaredevelopment.netlify.app/',
    image: '/assets/images/him-software-screenshot.jpg',
    accentColor: 'from-blue-600 to-indigo-700' // Tech theme color
  },
  {
    title: 'HIM Kekeme Portfolio',
    description: 'Personal portfolio website featuring projects, skills, and contact information. Designed with a minimalist approach to highlight the work.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://himkekeme.netlify.app/',
    image: '/assets/images/himkekeme-screenshot.jpg',
    accentColor: 'from-purple-600 to-fuchsia-600' // Creative theme color
  }
];

const Projects = () => {
  return (
    <div id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/chrome-pattern.jfif')]"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
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
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional work I've developed and deployed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              {/* Project image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accentColor} opacity-80 mix-blend-multiply`} />
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
                
                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View project button */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-white bg-gradient-to-r ${project.accentColor} hover:opacity-90 transition-all`}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  <span>View Project</span>
                </a>
              </div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${project.accentColor} opacity-20`} />
            </motion.div>
          ))}
        </div>

        {/* View all projects button (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            View All Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;