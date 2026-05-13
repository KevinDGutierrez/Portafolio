
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Values from './components/Values.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Curriculum from './components/Curriculum.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

const HomePage = () => {
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

    const observeTargets = (root = document) => {
      if (root instanceof Element) {
        if (root.matches('section, .reveal')) {
          observer.observe(root);
        }
      }

      if (root.querySelectorAll) {
        const sections = root.querySelectorAll('section, .reveal');
        sections.forEach((section) => observer.observe(section));
      }
    };

    observeTargets();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          observeTargets(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />

      <main>
        <section id="welcome-section" className="min-h-screen pt-20">
          <Hero />
        </section>

        <section id="about-you-section" className="py-24 bg-white dark:bg-neutral-900 reveal transition-colors">
          <About />
        </section>

        <section id="values-section" className="py-24 bg-neutral-50 dark:bg-neutral-950 reveal transition-colors">
          <Values />
        </section>

        <section id="skills-section" className="py-24 bg-white dark:bg-neutral-900 reveal transition-colors">
          <Skills />
        </section>

        <section id="education-experience-section" className="py-24 bg-neutral-900 dark:bg-black text-white reveal transition-colors">
          <Experience />
        </section>

        <section id="projects-section" className="py-24 bg-white dark:bg-neutral-900 reveal transition-colors">
          <Projects />
        </section>

        <section id="curriculum-section" className="py-24 bg-neutral-50 dark:bg-neutral-950 reveal transition-colors">
          <Curriculum />
        </section>
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when returning from project detail
    if (location.hash) {
      setTimeout(() => {
        // Extract just the element ID from hash (strip ?tab=... query params)
        const hashPart = location.hash.split('?')[0];
        const el = document.querySelector(hashPart);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F9F8F6] dark:bg-neutral-950 transition-colors duration-500">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:source/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;
