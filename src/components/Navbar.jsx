import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '#welcome-section' },
    { name: 'Sobre Mí', href: '#about-you-section' },
    { name: 'Proyectos', href: '#projects-section' },
    { name: 'Currículum', href: '#curriculum-section' },
  ];

  // Don't show navbar on project detail pages (it has its own nav)
  if (location.pathname.startsWith('/project/')) {
    return null;
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[101] transition-all duration-500 ${isScrolled ? 'glass-nav py-4 border-b border-neutral-100 dark:border-neutral-800 shadow-sm' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#welcome-section" className="text-lg font-bold tracking-tighter uppercase dark:text-white transition-colors">
            Daniel Gutierrez
          </a>

          <div className="flex items-center gap-6">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] uppercase tracking-widest font-bold transition-all hover:opacity-100 dark:text-white ${activeSection === link.href.slice(1) ? 'opacity-100 border-b border-black dark:border-white' : 'opacity-40'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg"
              aria-label="Toggle Dark Mode"
            >
              {/* Sun icon */}
              <svg 
                className={`w-[18px] h-[18px] absolute transition-all duration-500 ${isDarkMode ? 'opacity-100 rotate-0 scale-100 text-amber-400' : 'opacity-0 -rotate-90 scale-50 text-neutral-600'}`}
                fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              {/* Moon icon */}
              <svg 
                className={`w-[18px] h-[18px] absolute transition-all duration-500 ${isDarkMode ? 'opacity-0 rotate-90 scale-50 text-neutral-600' : 'opacity-100 rotate-0 scale-100 text-neutral-700'}`}
                fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>

            {/* Mobile Button */}
            <button 
              className="md:hidden z-[102] flex flex-col gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`w-6 h-[1.5px] bg-black dark:bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-[1.5px] bg-black dark:bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-[1.5px] bg-black dark:bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif dark:text-white hover:italic transition-all"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {link.name}
          </a>
        ))}
        <div className="absolute bottom-12 flex gap-8">
          <a href="https://github.com/KevinDGutierrez" target="_blank" rel="noreferrer" className="text-xl text-neutral-400 hover:text-black dark:hover:text-white transition-colors"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/kevin-gutierrez-2804ab34b/" target="_blank" rel="noreferrer" className="text-xl text-neutral-400 hover:text-black dark:hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
