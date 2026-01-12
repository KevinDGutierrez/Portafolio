
import React, { useState, useEffect } from 'react';
const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#welcome-section' },
    { name: 'Sobre Mí', href: '#about-you-section' },
    { name: 'Proyectos', href: '#projects-section' },
    { name: 'Currículum', href: '#curriculum-section' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[101] transition-all duration-500 ${isScrolled ? 'glass-nav py-4 border-b border-neutral-100' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#welcome-section" className="text-lg font-bold tracking-tighter uppercase">
            Daniel Gutierrez
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] uppercase tracking-widest font-bold transition-all hover:opacity-100 ${activeSection === link.href.slice(1) ? 'opacity-100 border-b border-black' : 'opacity-40'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button 
            className="md:hidden z-[102] flex flex-col gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-6 h-[1.5px] bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif hover:italic transition-all"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {link.name}
          </a>
        ))}
        <div className="absolute bottom-12 flex gap-8">
            <a href="https://github.com/KevinDGutierrez" target="_blank" className="text-xl text-neutral-400 hover:text-black transition-colors"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/kevin-gutierrez-2804ab34b/" target="_blank" className="text-xl text-neutral-400 hover:text-black transition-colors"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
