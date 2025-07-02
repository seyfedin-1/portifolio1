import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and dark mode support. The project showcases my frontend development skills and design sensibilities.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/seyfedin/portfolio',
    demo: 'https://seyfedin-portfolio.netlify.app',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800',
  },
  {
    title: 'Task Management App',
    description: 'Full-stack task management application with real-time updates, user authentication, and drag-and-drop functionality. Built with a modern tech stack for optimal performance and user experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/seyfedin/todo-app',
    demo: 'https://seyfedin-todo-app.netlify.app',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
  },
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce platform with shopping cart functionality, product filtering, and secure payment integration. Features a clean UI with focus on conversion optimization and mobile responsiveness.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/seyfedin/blog-app',
    demo: 'https://seyfedin-blog-app.netlify.app',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div id="projects" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my featured work and development journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hidden md:block"
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-gray-700 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hidden md:block"
            aria-label="Next project"
          >
            <FaChevronRight className="text-gray-700 dark:text-gray-300" />
          </button>

          {/* Project Carousel */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            <AnimatePresence custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                  {/* Project Image */}
                  <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                    <img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-black/50 md:via-black/30 md:to-transparent" />
                  </div>
                  
                  {/* Project Content */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <motion.h3 
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {projects[activeIndex].title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 mb-6 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {projects[activeIndex].description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-3 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {projects[activeIndex].technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <a
                        href={projects[activeIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group"
                      >
                        <FaGithub className="mr-3 text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-medium">View Code</span>
                      </a>
                      <a
                        href={projects[activeIndex].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-6 py-3 rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all group"
                      >
                        <FaExternalLinkAlt className="mr-3 text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;