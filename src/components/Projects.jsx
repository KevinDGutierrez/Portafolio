import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS as PROJECTS_IMPORT, PROJECTS_IMPROVED } from '../constants.js';

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800';

const CATEGORY_LABELS = {
  featured: 'Destacados',
  commercial: 'Comerciales',
  improved: 'Rediseñados',
  school: 'Académicos',
};

const Projects = () => {
  const navigate = useNavigate();

  const pages = useMemo(() => {
    const allProjects = Array.isArray(PROJECTS_IMPORT) ? PROJECTS_IMPORT : [];
    const improvedProjects = Array.isArray(PROJECTS_IMPROVED) ? PROJECTS_IMPROVED : [];

    const escolares = allProjects.filter(p => p.id <= 6);
    const comerciales = allProjects.filter(p => p.id >= 7);
    const rediseñados = improvedProjects;

    const destacadosIds = [6, 7, 9, 10];
    const destacados = allProjects.filter(p => destacadosIds.includes(p.id));

    return [
      { key: 'featured', data: destacados, count: destacados.length },
      { key: 'commercial', data: comerciales, count: comerciales.length },
      { key: 'improved', data: rediseñados, count: rediseñados.length },
      { key: 'school', data: escolares, count: escolares.length },
    ];
  }, []);

  const [activePageKey, setActivePageKey] = useState(pages[0]?.key ?? 'featured');
  const activePage = pages.find((page) => page.key === activePageKey) ?? pages[0];
  const projects = activePage?.data ?? [];

  const handleProjectClick = (project) => {
    const source = activePageKey === 'improved' ? 'improved' : 'main';
    navigate(`/project/${source}/${project.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      {/* Header */}
      <div className="mb-16 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-3">
            <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 dark:text-white transition-colors leading-none">
              Proyectos
            </h2>
            <p className="text-neutral-400 dark:text-neutral-500 text-sm font-light max-w-md">
              Una selección de proyectos que reflejan mi experiencia en desarrollo web, IA y automatización.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 text-sm flex-wrap">
          <span className="text-neutral-400 dark:text-neutral-500 text-[11px] uppercase tracking-widest font-bold mr-4 hidden md:block">
            Filtrar
          </span>
          {pages.map((page, i) => (
            <React.Fragment key={page.key}>
              {i > 0 && <span className="text-neutral-300 dark:text-neutral-700 hidden md:inline">/</span>}
              <button
                type="button"
                onClick={() => setActivePageKey(page.key)}
                className={`relative text-[11px] md:text-[12px] font-bold tracking-wider transition-all px-1 py-1 ${
                  page.key === activePageKey
                    ? 'text-neutral-900 dark:text-white'
                    : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
                }`}
              >
                {CATEGORY_LABELS[page.key]}
                <sup className="text-[9px] ml-1 opacity-50">{String(page.count).padStart(2, '0')}</sup>
                {page.key === activePageKey && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 dark:bg-white rounded-full"></span>
                )}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Project Grid — uniform cards with object-cover */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={`${project.id}-${activePageKey}-${index}`}
            onClick={() => handleProjectClick(project)}
            className="group cursor-pointer reveal"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {/* Card — image shows complete, no cropping, no borders */}
            <div className="relative rounded-xl overflow-hidden mb-5 shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src={project.cover || project.images?.[0] || FALLBACK_IMG}
                alt={project.title}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Tech badges floating on hover */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                {project.technologies?.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[8px] font-bold uppercase tracking-widest text-white/90 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Info */}
            <div className="space-y-2 px-1">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white leading-tight line-clamp-1 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                  Ver proyecto
                </span>
                <span className="w-6 h-[1px] bg-neutral-300 dark:bg-neutral-600 group-hover:w-10 transition-all duration-300"></span>
                <i className="fas fa-arrow-right text-[9px] text-neutral-400 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
