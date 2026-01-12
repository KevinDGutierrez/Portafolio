
import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[80vh] pt-12 md:pt-0">
      <div className="order-2 md:order-1 space-y-10 reveal active">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <span className="w-8 h-[1px] bg-neutral-900"></span>
             <h2 className="text-neutral-500 font-bold tracking-[0.3em] uppercase text-[9px]">Full Stack Developer</h2>
          </div>
          <h1 className="text-huge text-6xl md:text-8xl font-serif leading-none tracking-tighter">
            Daniel <br />
            <span className="text-neutral-300">Gutierrez</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-500 max-w-sm leading-relaxed font-light">
            Arquitectura de software moderna para soluciones escalables. Estudiante de Ingeniería en Sistemas en la UMG.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects-section" className="btn-sq bg-neutral-900 text-white hover:bg-black text-center">
            Proyectos
          </a>
          <a href="#curriculum-section" className="btn-sq bg-white text-neutral-900 hover:bg-neutral-50 text-center">
            Descargar CV
          </a>
        </div>
      </div>
      
      <div className="order-1 md:order-2 flex justify-center relative reveal active">
        <div className="relative w-full max-w-[320px] md:max-w-md aspect-[4/5] overflow-hidden group border border-neutral-100">
          <img 
            src="image/perfil.jpg" 
            alt="Daniel Gutierrez" 
            className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
            onError={(e) => { (e.target).src = 'https://i.ibb.co/zHjY0DFM/Imagen-de-Whats-App-2025-07-18-a-las-19-09-14-3b947be1.jpg' }}
          />
        </div>
        
        <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-8 bg-white p-6 md:p-8 border border-neutral-100 shadow-xl max-w-[200px] md:max-w-xs hidden sm:block float-animation">
            <p className="italic text-neutral-800 text-xs md:text-sm font-serif leading-relaxed">
                "Mientras uno esté vivo, uno debe amar lo más que pueda"
            </p>
            <div className="mt-4 flex items-center gap-3">
                <img 
                    src="image/cita-autor.jpg" 
                    alt="Bad Bunny" 
                    className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                    onError={(e) => { (e.target).src = 'https://i.ibb.co/dwgQZ2dZ/Imagen-de-Whats-App-2025-07-18-a-las-19-06-52-c5d58eb5.jpg' }}
                />
                <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">Bad Bunny</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
