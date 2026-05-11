import React from 'react';
import { VALUES } from '../constants.js';

const Values = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-5 gap-12">
        {VALUES.map((val, i) => (
          <div key={val.title} className="space-y-6 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="w-12 h-12 bg-neutral-900 dark:bg-white text-white dark:text-black flex items-center justify-center rounded-full text-xl shadow-lg transition-colors">
              <i className={`fas ${val.icon}`}></i>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-serif dark:text-white transition-colors">{val.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                {val.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
