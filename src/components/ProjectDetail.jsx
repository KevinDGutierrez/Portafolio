import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS, PROJECTS_IMPROVED } from '../constants.js';

const TECH_ICONS = {
  'HTML': 'fab fa-html5',
  'CSS': 'fab fa-css3-alt',
  'JavaScript': 'fab fa-js',
  'React': 'fab fa-react',
  'Node.js': 'fab fa-node-js',
  'Express.js': 'fas fa-server',
  'MongoDB': 'fas fa-database',
  'Firebase': 'fas fa-fire',
  'Google Cloud': 'fab fa-google',
  'WhatsApp API': 'fab fa-whatsapp',
  'GitHub': 'fab fa-github',
  'Vercel': 'fas fa-cloud-upload-alt',
  'Dolibarr CRM': 'fas fa-briefcase',
  'Gemini 2.5 flash': 'fas fa-brain',
  'Gemini 3': 'fas fa-brain',
  'Gemini 3 Pro Image Preview': 'fas fa-brain',
  'Inteligencia Artificial': 'fas fa-robot',
  'API REST': 'fas fa-network-wired',
  'JWT': 'fas fa-key',
  'OAuth 2.0': 'fas fa-shield-alt',
  'Google OAuth': 'fas fa-shield-alt',
  'Tailwind CSS': 'fab fa-css3',
  'APIs REST': 'fas fa-plug',
  'KoboToolbox': 'fas fa-mobile-alt',
  'Web Forms': 'fas fa-file-alt',
  'Automatización': 'fas fa-cogs',
  'GPS': 'fas fa-map-marker-alt',
  'Correo automático': 'fas fa-envelope',
  'Email Reports': 'fas fa-envelope-open-text',
  'Email Marketing': 'fas fa-mail-bulk',
  'Gmail API': 'fas fa-envelope-open-text',
  'Dashboard Analytics': 'fas fa-chart-line',
  'PokeAPI': 'fas fa-gamepad',
  'Spotify API': 'fab fa-spotify',
  'Diseño UI/UX': 'fas fa-pencil-ruler',
  'Web Chat': 'fas fa-comments',
  'Chatbots': 'fas fa-robot',
  'Firebase Hosting': 'fas fa-globe',
  'Google News': 'fas fa-newspaper',
  'Google Scheduler': 'fas fa-clock',
  'Prospección B2B': 'fas fa-handshake',
  'Campañas Masivas': 'fas fa-bullhorn',
  'Marca Blanca': 'fas fa-palette',
  '(LocalStorage)': 'fas fa-hdd',
};

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800';

// ===========================
// Contact Form Modal Component
// ===========================
const ContactModal = ({ isOpen, onClose, projectTitle }) => {
  const [formData, setFormData] = useState({ name: '', contact: '', interest: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData({ name: '', contact: '', interest: projectTitle ? `Me interesa el proyecto: ${projectTitle}` : '' });
      setStatus('idle');
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen, projectTitle]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/kevindgutierrez161@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Nombre: formData.name,
          Contacto: formData.contact,
          Interés: formData.interest,
          Proyecto: projectTitle,
          _subject: `Nuevo contacto desde Portafolio — ${projectTitle}`,
        }),
      });

      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white dark:bg-neutral-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-4 h-4 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-8 pb-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-neutral-300 dark:bg-neutral-700"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Contacto</span>
          </div>
          <h3 className="text-2xl font-serif text-neutral-900 dark:text-white">Hablemos de este proyecto</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-light">
            Completa el formulario y te responderé lo antes posible.
          </p>
        </div>

        {/* Form */}
        {status === 'sent' ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h4 className="text-xl font-serif dark:text-white">¡Mensaje enviado!</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">
              Gracias por tu interés. Te contactaré pronto.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full text-[11px] uppercase tracking-widest font-bold hover:opacity-80 transition-all"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Tu nombre
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ej: María López"
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all"
              />
            </div>

            {/* Contact info */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                ¿Cómo te contacto?
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                placeholder="Email, WhatsApp o LinkedIn"
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all"
              />
            </div>

            {/* Interest */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                ¿En qué estás interesado?
              </label>
              <textarea
                required
                rows={3}
                value={formData.interest}
                onChange={(e) => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                placeholder="Cuéntame qué te interesa de este proyecto..."
                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <p className="text-red-500 text-xs text-center font-medium">
                Hubo un error al enviar. Intenta de nuevo o escríbeme directamente a kevindgutierrez161@gmail.com
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === 'sending' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// ===========================
// Project Detail Page
// ===========================
const ProjectDetail = () => {
  const { source, projectId } = useParams();
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);

  const project = useMemo(() => {
    const id = parseInt(projectId, 10);
    if (source === 'improved') {
      return PROJECTS_IMPROVED?.find(p => p.id === id);
    }
    return PROJECTS?.find(p => p.id === id);
  }, [source, projectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F9F8F6] dark:bg-neutral-950 flex items-center justify-center transition-colors">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-serif dark:text-white">404</h1>
          <p className="text-neutral-500 dark:text-neutral-400">Proyecto no encontrado</p>
          <button onClick={() => navigate('/')} className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-80 transition-all">
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  const coverUrl = project.cover || project.images?.[0] || FALLBACK_IMG;

  return (
    <div className="min-h-screen bg-[#F9F8F6] dark:bg-neutral-950 transition-colors duration-500">
      {/* Fixed Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/#projects-section')}
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Volver a Proyectos</span>
          </button>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO — Cover as full background behind title */}
      {/* ============================================ */}
      <div className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
        {/* Background cover image */}
        <img
          src={coverUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>

        {/* Title content over image */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20 pt-32">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-white/40"></span>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/50">
                {source === 'improved' ? 'Proyecto Rediseñado' : `Proyecto #${project.id}`}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] tracking-tight max-w-4xl">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 pt-4">
              {project.technologies?.slice(0, 5).map((tech) => (
                <span key={tech} className="text-[9px] uppercase tracking-widest font-bold text-white/80 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  {tech}
                </span>
              ))}
              {project.technologies?.length > 5 && (
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/40 px-2 py-2">
                  +{project.technologies.length - 5} más
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* CONTENT — Info & Tech Stack                  */}
      {/* ============================================ */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left: Description */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Descripción</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full hover:shadow-2xl transition-all group"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Live Demo</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-full hover:border-black dark:hover:border-white transition-all group"
                >
                  <i className="fab fa-github text-lg"></i>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Technologies */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Stack Tecnológico</h3>
            <div className="grid grid-cols-2 gap-3">
              {project.technologies?.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group"
                >
                  <div className="w-8 h-8 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700 transition-colors">
                    <i className={`${TECH_ICONS[tech] || 'fas fa-code'} text-xs text-neutral-600 dark:text-neutral-400`}></i>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider leading-tight">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* GALLERY — Full images                       */}
      {/* ============================================ */}
      <div className="bg-neutral-100 dark:bg-neutral-900/50 py-20 transition-colors">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-neutral-300 dark:bg-neutral-700"></span>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400">Visual Showcase</h3>
            <span className="text-[10px] text-neutral-400 dark:text-neutral-600 font-bold ml-auto">{project.images?.length || 0} capturas</span>
          </div>

          <div className="grid gap-10">
            {(project.images || []).map((img, idx) => (
              <div
                key={idx}
                className="w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-xl bg-white dark:bg-neutral-900"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* FOOTER CTA — Contact form trigger            */}
      {/* ============================================ */}
      <div className="py-20 text-center bg-[#F9F8F6] dark:bg-neutral-950 transition-colors">
        <div className="max-w-xl mx-auto px-6 space-y-8">
          <h3 className="text-3xl font-serif dark:text-white">¿Te interesa este proyecto?</h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light leading-relaxed">
            Si quieres saber más o explorar oportunidades de colaboración, no dudes en contactarme.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/#projects-section')}
              className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-80 transition-all"
            >
              Ver más proyectos
            </button>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-8 py-4 border border-neutral-300 dark:border-neutral-700 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        projectTitle={project.title}
      />
    </div>
  );
};

export default ProjectDetail;
