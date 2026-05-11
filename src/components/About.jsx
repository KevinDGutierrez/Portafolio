import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 reveal">
          <div className="inline-block border-b border-black dark:border-white pb-2">
            <h2 className="text-4xl md:text-5xl font-serif dark:text-white">Sobre Mí</h2>
          </div>

          <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p className="text-lg md:text-xl font-light">
              Soy una persona proactiva, decidida y comprometida. Mi objetivo es consolidarme como{" "}
              <strong className="text-neutral-900 dark:text-white">Desarrollador FULL-STACK</strong> e iniciar este año mi carrera en{" "}
              <strong className="text-neutral-900 dark:text-white">Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala</strong>.
            </p>
            <p>
              Me especializo en el desarrollo Full-Stack utilizando React y Node.js, creando soluciones que no solo
              funcionen, sino que destaquen por su elegancia y rendimiento. Me apasiona la ciberseguridad, el diseño
              UI/UX y la inteligencia artificial.
            </p>
          </div>

          {/* TARJETAS */}
          <div className="grid sm:grid-cols-2 gap-8 pt-6">
            {/* Formación */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 reveal stagger-1 transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                Formación Actual
              </h4>
              <p className="text-sm font-semibold dark:text-white">Universidad Mariano Gálvez</p>
              <p className="text-xs text-neutral-500">Ingeniería en Sistemas (2026)</p>
            </div>

            {/* Cisco */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 reveal stagger-2 transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                Certificación Cisco
              </h4>
              <p className="text-sm font-semibold dark:text-white">CCNA: Introduction to Networks</p>
              <p className="text-xs text-neutral-500">Cisco Networking Academy</p>
            </div>

            {/* NUEVA CERTIFICACIÓN */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 reveal stagger-3 transition-colors">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                Front-end developer
              </h4>
              <p className="text-sm font-semibold dark:text-white">Middle Developer Front End JavaScript - React</p>
              <p className="text-xs text-neutral-500">Ada-School</p>
            </div>
          </div>
        </div>

        {/* IMÁGENES */}
        <div className="grid grid-cols-2 gap-4 reveal stagger-3">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover"
                alt="Developer workspace"
              />
            </div>
            <div className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 p-6 md:p-8 rounded-sm transition-colors">
              <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Filosofía</p>
              <p className="font-serif italic text-sm md:text-base">
                "La simplicidad es la máxima sofisticación."
              </p>
            </div>
          </div>

          <div className="pt-12 space-y-4">
            <div className="bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-6 md:p-8 shadow-sm rounded-sm transition-colors">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Intereses</p>
              <p className="text-xs md:text-sm font-medium dark:text-neutral-200">
                IA, Ciberseguridad, Moda Streetwear, Videojuegos.
              </p>
            </div>
            <div className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover"
                alt="Code on screen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;