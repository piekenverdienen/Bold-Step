import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language, IMAGES } from '../constants';

interface StyleGuideProps {
  lang: Language;
}

const archetypes = {
  EN: [
    {
      title: "The Castle Groom",
      slug: "schloss-braeutigam",
      suit: "Midnight tuxedo / peak lapels",
      match: "Black or dark brown leather loafer",
      desc: "Grand halls, historic elegance, and a day worthy of its setting. For the groom who believes in making a statement.",
      budget: "€25k–€80k",
      image: IMAGES.STYLE_BLACK_TIE
    },
    {
      title: "The Destination Groom",
      slug: "auslands-braeutigam",
      suit: "Linen or beige suit",
      match: "Tan suede loafer",
      desc: "Mediterranean ease for the sun-drenched celebration. Cobblestone-ready elegance for the groom who marries abroad.",
      budget: "€20k–€60k",
      image: IMAGES.STYLE_DESTINATION
    },
    {
      title: "The Classic Groom",
      slug: "klassischer-braeutigam",
      suit: "Navy or charcoal two-piece",
      match: "Dark brown suede loafer",
      desc: "Practical elegance and smart choices. For the groom who values authenticity over extravagance.",
      budget: "€8k–€25k",
      image: IMAGES.STYLE_CITY
    }
  ],
  DE: [
    {
      title: "Der Schloss-Bräutigam",
      slug: "schloss-braeutigam",
      suit: "Mitternachts-Smoking / Spitzes Revers",
      match: "Schwarzer oder dunkelbrauner Leder-Loafer",
      desc: "Prachtvolle Säle, historische Eleganz und ein Tag, der seiner Kulisse würdig ist. Für den Bräutigam, der an Statements glaubt.",
      budget: "€25k–€80k",
      image: IMAGES.STYLE_BLACK_TIE
    },
    {
      title: "Der Auslands-Bräutigam",
      slug: "auslands-braeutigam",
      suit: "Leinen- oder beigefarbener Anzug",
      match: "Hellbrauner Wildleder-Loafer",
      desc: "Mediterrane Leichtigkeit für die sonnenverwöhnte Feier. Kopfsteinpflaster-taugliche Eleganz für den Bräutigam, der im Ausland heiratet.",
      budget: "€20k–€60k",
      image: IMAGES.STYLE_DESTINATION
    },
    {
      title: "Der Klassische Bräutigam",
      slug: "klassischer-braeutigam",
      suit: "Navy- oder Anthrazit-Zweiteiler",
      match: "Dunkelbrauner Wildleder-Loafer",
      desc: "Praktische Eleganz und clevere Entscheidungen. Für den Bräutigam, der Authentizität über Extravaganz stellt.",
      budget: "€8k–€25k",
      image: IMAGES.STYLE_CITY
    }
  ]
};

export default function StyleGuide({ lang }: StyleGuideProps) {
  const data = archetypes[lang];
  const langPrefix = `/${lang.toLowerCase()}`;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
            {lang === 'EN' ? 'Which Groom Are You?' : 'Welcher Bräutigam sind Sie?'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            {lang === 'EN' ? 'Archetypes of Elegance' : 'Archetypen der Eleganz'}
          </h2>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col"
            >
              <Link to={`${langPrefix}/archetypes/${item.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h3>
              </Link>
              <div className="mb-4 space-y-2">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                  {lang === 'EN' ? 'Suit Style' : 'Anzug-Stil'}
                </p>
                <p className="text-sm font-medium">{item.suit}</p>
              </div>
              <div className="mb-4 space-y-2">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                  {lang === 'EN' ? 'Recommended Shoe' : 'Empfohlener Schuh'}
                </p>
                <p className="text-sm font-medium">{item.match}</p>
              </div>
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-1">Budget</p>
                <p className="text-sm font-medium">{item.budget}</p>
              </div>
              <p className="text-sm opacity-60 font-light leading-relaxed mb-6">
                {item.desc}
              </p>
              <Link
                to={`${langPrefix}/archetypes/${item.slug}`}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-brand-gold transition-colors mt-auto"
              >
                {lang === 'EN' ? 'Full Guide' : 'Kompletter Guide'}
                <ChevronRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA to full hub */}
        <div className="text-center mt-16">
          <Link
            to={`${langPrefix}/archetypes`}
            className="inline-block px-10 py-5 bg-brand-black text-brand-offwhite text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all"
          >
            {lang === 'EN' ? 'Discover Your Archetype' : 'Entdecken Sie Ihren Archetyp'}
          </Link>
        </div>
      </div>
    </section>
  );
}
