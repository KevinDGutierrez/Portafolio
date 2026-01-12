import React, { useEffect, useState } from 'react';
import { PROJECTS as PROJECTS_IMPORT } from '../constants.js';

const AUTOPLAY_MS = 10000;
const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800';

const Projects = () => {
  const projects = Array.isArray(PROJECTS_IMPORT) ? PROJECTS_IMPORT : [];

  const [activeByPos, setActiveByPos] = useState(() => projects.map(() => 0));

  useEffect(() => {
    setActiveByPos(projects.map(() => 0));
  }, [projects.length]);

  useEffect(() => {
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setActiveByPos((prev) =>
        prev.map((curr, i) => {
          const images = Array.isArray(projects[i]?.images) ? projects[i].images : [];
          const total = images.length;
          if (total > 1) return (curr + 1) % total;
          return 0;
        })
      );
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [projects]);

  const prevImg = (pos) => {
    const images = Array.isArray(projects[pos]?.images) ? projects[pos].images : [];
    const total = images.length;
    if (total <= 1) return;

    setActiveByPos((prev) =>
      prev.map((curr, i) => (i === pos ? (curr - 1 + total) % total : curr))
    );
  };

  const nextImg = (pos) => {
    const images = Array.isArray(projects[pos]?.images) ? projects[pos].images : [];
    const total = images.length;
    if (total <= 1) return;

    setActiveByPos((prev) =>
      prev.map((curr, i) => (i === pos ? (curr + 1) % total : curr))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
        <div className="space-y-4">
          <h2 className="text-6xl font-serif">Proyectos</h2>
          <p className="text-neutral-500 uppercase tracking-widest text-xs">
            Full Stack Creations (2023 - 2025)
          </p>
        </div>
        <div className="h-px flex-grow bg-neutral-200 hidden md:block mx-12 mb-4"></div>
        <p className="text-neutral-400 max-w-xs text-sm leading-relaxed">
          Cada aplicación representa un reto técnico resuelto con Node.js y React.
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="text-neutral-400 text-sm">
          No se encontraron PROJECTS. Revisa el export en <code>constants.js</code>.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-32">
          {projects.map((project, index) => {
            const images = Array.isArray(project.images) ? project.images : [];
            const total = images.length;
            const active = typeof activeByPos[index] === 'number' ? activeByPos[index] : 0;

            const src = total > 0 ? images[Math.min(active, total - 1)] : FALLBACK_IMG;

            return (
              <div
                key={project.id ?? index}
                className={`group reveal project-card-zoom ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-white relative shadow-sm border border-neutral-100">
                  <img
                    src={src}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMG;
                    }}
                  />

                  {/* BOTONES CARRUSEL ARRIBA-DERECHA (no bloquean overlay) */}
                  {total > 1 && (
                    <div className="absolute top-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button
                        type="button"
                        aria-label="Imagen anterior"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          prevImg(index);
                        }}
                        className="w-9 h-9 bg-white/90 text-black flex items-center justify-center rounded-full shadow-md hover:bg-black hover:text-white transition-all"
                      >
                        {'<'}
                      </button>

                      <button
                        type="button"
                        aria-label="Imagen siguiente"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          nextImg(index);
                        }}
                        className="w-9 h-9 bg-white/90 text-black flex items-center justify-center rounded-full shadow-md hover:bg-black hover:text-white transition-all"
                      >
                        {'>'}
                      </button>
                    </div>
                  )}

                  {/* OVERLAY (GitHub / Live) */}
                  <div className="absolute inset-0 z-10 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-all duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all shadow-xl"
                        >
                          <i className="fab fa-github text-lg"></i>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all shadow-xl"
                        >
                          <i className="fas fa-external-link-alt text-sm"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-10 space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {(project.technologies || []).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-400 border border-neutral-200 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-serif group-hover:text-neutral-500 transition-colors duration-500">
                    {project.title}
                  </h3>

                  <p className="text-neutral-500 text-base leading-relaxed max-w-md font-light">
                    {project.description}
                  </p>

                  <div className="h-[1px] w-0 group-hover:w-full bg-neutral-900 transition-all duration-700"></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;