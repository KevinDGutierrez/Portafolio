
import React from 'react';

const Curriculum = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-serif">Mi Currículum Vitae</h2>
        <p className="text-neutral-500 leading-relaxed">
          ¿Interesado en una colaboración o buscando un perfil como el mío? Descarga mi CV actualizado para ver mi trayectoria completa y competencias técnicas en detalle.
        </p>
        <div className="pt-8">
          <a 
            href="https://www.canva.com/design/DAGT-X9lCtE/PykXEGmMX4PZ0SyqOds3bw/edit?utm_content=DAGT-X9lCtE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            target="_blank" 
            className="inline-flex items-center gap-4 px-12 py-5 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-800 transition-all hover:shadow-2xl group"
          >
            <i className="fas fa-file-download group-hover:bounce"></i>
            Descargar CV (PDF)
          </a>
        </div>
        <p className="text-xs text-neutral-400 pt-4">Versión actualizada Abril 2026</p>
      </div>
    </div>
  );
};

export default Curriculum;
