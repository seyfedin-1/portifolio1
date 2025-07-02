import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Recommendations from './pages/Recommendations';
import Loading from './components/Loading';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen initially
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const handleScroll = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            handleScroll();
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        {/* Home Section */}
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        
        {/* About Section */}
        <section id="about" className="min-h-screen">
          <About />
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        
        {/* Certifications Section */}
        <section id="certifications" className="min-h-screen">
          <Certifications />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        
        {/* Contact Section */}
       
        
        {/* Recommendations Section */}
        <section id="recommendations" className="min-h-screen">
          <Recommendations />
          <section id="contact" className="min-h-screen">
          <Contact />
        </section>
        </section>
      </div>
    </div>
  );
}
