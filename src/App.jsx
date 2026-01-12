
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Values from './components/Values.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Curriculum from './components/Curriculum.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [activeSection, setActiveSection] = useState('welcome-section');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section, .reveal');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="welcome-section" className="min-h-screen pt-20">
          <Hero />
        </section>

        <section id="about-you-section" className="py-24 bg-white reveal">
          <About />
        </section>

        <section id="values-section" className="py-24 bg-neutral-50 reveal">
          <Values />
        </section>

        <section id="skills-section" className="py-24 bg-white reveal">
          <Skills />
        </section>

        <section id="education-experience-section" className="py-24 bg-neutral-900 text-white reveal">
          <Experience />
        </section>

        <section id="projects-section" className="py-24 bg-white reveal">
          <Projects />
        </section>

        <section id="curriculum-section" className="py-24 bg-neutral-50 reveal">
          <Curriculum />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
