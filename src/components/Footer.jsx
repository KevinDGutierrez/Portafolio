import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white pt-32 pb-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 pb-20 border-b border-white/5">
          <div className="space-y-10 reveal">
            <h2 className="text-5xl font-serif leading-none">Hablemos de <br /><span className="text-neutral-500">tu próximo proyecto</span></h2>
            <div className="space-y-4">
              <p className="text-neutral-400 text-sm tracking-widest uppercase">Disponible para colaboraciones</p>
              <a href="mailto:kevindgutierrez161@gmail.com" className="text-2xl md:text-3xl font-light hover:text-neutral-400 transition-colors inline-block border-b border-white/20 pb-2">
                kevindgutierrez161@gmail.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 reveal">
            <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30">Navegación</h4>
                <ul className="space-y-4 text-sm font-medium">
                    <li><a href="#welcome-section" className="hover:text-neutral-400 transition-colors opacity-70 hover:opacity-100">Inicio</a></li>
                    <li><a href="#about-you-section" className="hover:text-neutral-400 transition-colors opacity-70 hover:opacity-100">Sobre Mí</a></li>
                    <li><a href="#projects-section" className="hover:text-neutral-400 transition-colors opacity-70 hover:opacity-100">Portafolio</a></li>
                    <li><a href="#curriculum-section" className="hover:text-neutral-400 transition-colors opacity-70 hover:opacity-100">CV</a></li>
                </ul>
            </div>
            <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30">Conectar</h4>
                <ul className="space-y-4 text-sm font-medium">
                    <li><a href="https://www.linkedin.com/in/kevin-gutierrez-2804ab34b/" target="_blank" rel="noreferrer" className="hover:text-neutral-400 transition-colors opacity-70 hover:opacity-100">LinkedIn</a></li>
                    <li><a href="https://github.com/KevinDGutierrez" target="_blank" rel="noreferrer" className="hover:text-neutral-400 transition-colors opacity-70 hover:opacity-100">GitHub</a></li>
                    <li><a href="https://www.instagram.com/dani_gutierrez43/#" target="_blank" rel="noreferrer" className="hover:text-neutral-400 transition-colors opacity-70 hover:opacity-100">Instagram</a></li>
                </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] text-center md:text-left">
                &copy; {currentYear} DANIEL GUTIERREZ &mdash; DEVELOPED WITH MERN STACK
            </p>
            <div className="flex gap-10">
                <a href="https://www.linkedin.com/in/kevin-gutierrez-2804ab34b/" target="_blank" rel="noreferrer" className="text-xl text-white/40 hover:text-white transition-all transform hover:-translate-y-1">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/KevinDGutierrez" target="_blank" rel="noreferrer" className="text-xl text-white/40 hover:text-white transition-all transform hover:-translate-y-1">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
