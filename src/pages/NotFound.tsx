import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Language, translations } from '../constants';

interface NotFoundProps {
  lang: Language;
}

export default function NotFound({ lang }: NotFoundProps) {
  const data = translations[lang].notFound;
  const langPrefix = `/${lang.toLowerCase()}`;

  return (
    <main className="min-h-screen bg-brand-offwhite flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[120px] md:text-[200px] font-serif font-black text-brand-black/5 leading-none select-none">
            404
          </span>
          
          <div className="-mt-12 md:-mt-20 relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-black">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl font-light opacity-60 mb-12 max-w-md mx-auto leading-relaxed">
              {data.message}
            </p>
            
            <Link 
              to={langPrefix}
              className="inline-block px-12 py-5 bg-brand-black text-brand-offwhite text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all duration-500"
            >
              {data.cta}
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="mt-24 flex justify-center"
        >
          {/* Subtle "broken" shoe icon or similar could go here */}
          <div className="w-px h-32 bg-brand-black" />
        </motion.div>
      </div>
    </main>
  );
}
