
import React from 'react';
import { SKILLS } from '../constants.js';

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 space-y-4 text-center">
        <h2 className="text-5xl font-serif">Tech Stack</h2>
        <p className="text-neutral-500 uppercase tracking-[0.3em] text-[10px]">Dominio técnico actualizado</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill, i) => {
          const iconUrl = skill.icon.startsWith('http') 
            ? skill.icon 
            : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`;

          return (
            <div 
              key={i} 
              className="bg-white p-8 border border-neutral-100 flex flex-col items-center text-center group hover:bg-neutral-900 transition-all duration-700 reveal shadow-sm hover:shadow-2xl" 
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-500">
                 <img 
                   src={iconUrl} 
                   alt={skill.name} 
                   className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 object-contain"
                   onError={(e) => {
                      const target = e.target;
                      target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
                   }}
                 />
              </div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{skill.name}</h4>
              <div className="w-full h-[2px] bg-neutral-100 rounded-full overflow-hidden mt-auto">
                  <div 
                      className="h-full bg-neutral-900 group-hover:bg-white transition-all duration-1000 ease-in-out" 
                      style={{ width: `${skill.level}%` }}
                  ></div>
              </div>
              <span className="text-[9px] uppercase tracking-widest mt-4 font-bold opacity-30 group-hover:opacity-60 group-hover:text-white transition-all">{skill.level}% Dominio</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
