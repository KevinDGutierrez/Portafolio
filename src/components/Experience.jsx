import React from 'react';

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 section-padding">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* EDUCACIÓN */}
        <div className="reveal">
          <h2 className="text-4xl font-serif mb-12">Educación & Exp.</h2>

          <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-neutral-800 pl-10">
            <div className="relative">
              <div className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border border-neutral-700"></div>
              <h3 className="text-lg font-bold text-white mb-2">
                2026 - Ingeniería en Sistemas
              </h3>
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">
                Universidad Mariano Gálvez de Guatemala
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Inicio de formación académica superior enfocada en computación y
                sistemas de información.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
              <h3 className="text-lg font-bold text-white mb-2">
                2023 - 2025 - Perito en Informática
              </h3>
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">
                Fundación Kinal
              </p>
              <ul className="text-sm space-y-2 text-neutral-400">
                <li>• Desarrollo Full-Stack con React y Node.js.</li>
                <li>• Base de Datos MySQL y MongoDB.</li>
                <li>• Desarrollo de aplicaciones con Java y JavaFX.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LOGROS */}
        <div className="space-y-10 reveal stagger-1">
          <h3 className="text-2xl font-bold border-b border-neutral-800 pb-4">
            Logros Técnicos
          </h3>

          <div className="grid gap-6">
            {/* LOGRO 1 */}
            <button
              type="button"
              onClick={() => window.open("https://cetkinal-my.sharepoint.com/:b:/g/personal/kgutierrez-2023455_kinal_edu_gt/EaZBDayzjKxFolvx9XOL9aEBWSFz06TR-vbiPmy0GGJjqQ?e=mvOSwj", "_blank")}
              className="text-left p-6 bg-neutral-800/50 border border-neutral-800 hover:border-neutral-700 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <i className="fas fa-network-wired text-blue-400 text-2xl"></i>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                  Cisco
                </span>
              </div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                CCNA: Introduction to Networks
              </h4>
              <p className="text-xs text-neutral-500 mt-2">
                Certificación internacional en infraestructura de redes.
              </p>
            </button>

            {/* LOGRO 2 */}
            <button
              type="button"
              onClick={() => window.open("https://innova.learn.ada-school.org/certifications/682beee15399469ed776b19e", "_blank")}
              className="text-left p-6 bg-neutral-800/50 border border-neutral-800 hover:border-neutral-700 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <i className="fab fa-react text-cyan-400 text-2xl"></i>
                <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">
                  Ada-School
                </span>
              </div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                Middle Developer Frontend React
              </h4>
              <p className="text-xs text-neutral-500 mt-2">
                Especialización en interfaces dinámicas con Ada School.
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
