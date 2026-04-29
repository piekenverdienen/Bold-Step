import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Language, translations } from '../constants';
import { Link } from 'react-router-dom';

interface BlogProps {
  lang: Language;
}

export default function Blog({ lang }: BlogProps) {
  const data = translations[lang].blog;
  const langPrefix = `/${lang.toLowerCase()}`;

  return (
    <section id="journal" className="py-32 px-6 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
            {lang === 'EN' ? 'Insights & Inspiration' : lang === 'DE' ? 'Stiltipps & Inspiration' : 'Inzichten & Inspiratie'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">{data.title}</h2>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group"
            >
              <Link to={`${langPrefix}/journal/${post.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4 block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-serif mb-4 group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm opacity-60 font-light leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                    {data.cta} <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to={`${langPrefix}/journal`}
            className="inline-flex items-center gap-4 px-10 py-5 border border-brand-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-black hover:text-brand-offwhite transition-all"
          >
            {lang === 'EN' ? 'View All Articles' : lang === 'DE' ? 'Alle Artikel ansehen' : 'Bekijk Alle Artikelen'}
          </Link>
        </div>
      </div>
    </section>
  );
}
