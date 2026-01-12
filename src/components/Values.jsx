
import React from 'react';
import { VALUES } from '../constants.js';

const Values = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Mis Valores</h2>
        <p className="text-neutral-500">Principios que guían mi trabajo y vida</p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {VALUES.map((value, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center rounded-xl mb-6 group-hover:bg-neutral-800">
              <i className={`fas ${value.icon} text-xl`}></i>
            </div>
            <h3 className="text-lg font-bold mb-3">{value.title}</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
