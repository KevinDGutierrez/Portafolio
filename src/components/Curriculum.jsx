import React from 'react';

const Curriculum = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-serif dark:text-white transition-colors">Mi Currículum Vitae</h2>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
          ¿Interesado en una colaboración o buscando un perfil como el mío? Descarga mi CV actualizado para ver mi trayectoria completa y competencias técnicas en detalle.
        </p>
        <div className="pt-8">
          <a 
            href="https://www.canva.com/design/DAGT-X9lCtE/PykXEGmMX4PZ0SyqOds3bw/edit?utm_content=DAGT-X9lCtE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-4 px-12 py-5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:shadow-2xl group"
          >
            <i className="fas fa-file-download transition-transform group-hover:-translate-y-1"></i>
            <span className="uppercase tracking-widest text-xs">Descargar CV (PDF)</span>
          </a>
        </div>
        <p className="text-[10px] text-neutral-400 dark:text-neutral-500 pt-4 uppercase tracking-[0.2em] font-bold">Versión actualizada Mayo 2026</p>
      </div>
    </div>
  );
};

export default Curriculum;
