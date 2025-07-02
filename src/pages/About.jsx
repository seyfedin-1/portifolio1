import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const timelineItems = [
    {
      year: '2025',
      title: 'Graduated from Debre Berhan University',
      description: 'Bachelor of Science in Software Engineering',
      icon: '🎓',
    },
    {
      year: '2024',
      title: 'Internship at kuraz-tech Company',
      description: 'Full-Stack Developer Intern',
      icon: '💼',
    },
    {
      year: '2021',
      title: 'Started Learning Web Development',
      description: 'Focused on React and Node.js',
      icon: '💻',
    },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:zakirseyfa@gmail.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Chrome pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/chrome-pattern.jfif')] bg-cover bg-center opacity-10"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Image and description */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/assets/images/seyfa1.png"
                  alt="Professional Profile"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 rounded-3xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                About Me
              </h2>
              <div className="space-y-6">
                <p className="text-l text-gray-700 leading-relaxed">
                  I'm a passionate Software Engineer with expertise in building modern web and mobile applications that solve real-world problems. My journey in technology began at Debre Berhan University, where I earned my Bachelor's degree in Software Engineering with a 3.47 GPA, but my true education has come from hands-on development and leading tech initiatives.
                </p>
                <p className="text-l text-gray-700 leading-relaxed">
                  My expertise lies in building scalable web applications using modern technologies. 
                  I specialize in React for the frontend and Node.js for the backend, with a keen eye 
                  for creating user-friendly interfaces and efficient backend systems.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv.pdf"
                  download
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactClick}
                  className="bg-white text-gray-800 border border-gray-200 hover:border-gray-300 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <FaEnvelope className="w-5 h-5 text-blue-600" />
                  <span>Contact Me</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right: Education, Experience, Timeline */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Education</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                      🎓
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">Debre Berhan University</h4>
                      <p className="text-lg text-gray-700 mt-1">Bachelor of Science in Software Engineering</p>
                      <p className="text-sm text-gray-500 mt-2">2019 - 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Experience</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                      💼
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">Kuraz-Tech Company</h4>
                      <p className="text-lg text-gray-700 mt-1">Full-Stack Developer Intern</p>
                      <p className="text-sm text-gray-500 mt-2">2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Timeline</h3>
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <div key={index} className="border-l-4 border-gray-200 pl-6 relative">
                    <div className="absolute -left-3.5 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white"></div>
                    <div className="flex items-start gap-6 pt-1">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>
                      <div className="pb-8">
                        <h4 className="font-semibold text-gray-500">{item.year}</h4>
                        <h5 className="font-bold text-lg text-gray-900 mt-1">{item.title}</h5>
                        <p className="text-gray-700 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
