import React from 'react';
import { motion } from 'motion/react';
import { Language, IMAGES } from '../constants';

interface StyleGuideProps {
  lang: Language;
}

const archetypes = {
  EN: [
    {
      title: "The Black Tie Groom",
      suit: "Black tuxedo / white dinner jacket",
      match: "Patent leather or velvet loafer",
      desc: "For the ultimate formal statement. Oozing elegance under the ballroom lights.",
      image: IMAGES.STYLE_BLACK_TIE
    },
    {
      title: "The Destination Groom",
      suit: "Linen or cream suit",
      match: "Tan suede loafer",
      desc: "Mediterranean ease for the sun-drenched celebration. Buttery suede meets coastal style.",
      image: IMAGES.STYLE_DESTINATION
    },
    {
      title: "The City Groom",
      suit: "Modern tailoring (charcoal, navy)",
      match: "Leather loafer",
      desc: "Sartorial precision for the urban setting. Hand-finished Italian leather for the modern man.",
      image: IMAGES.STYLE_CITY
    }
  ],
  DE: [
    {
      title: "Der Black Tie Bräutigam",
      suit: "Schwarzer Smoking / Weißes Dinnerjacket",
      match: "Lackleder- oder Samt-Loafer",
      desc: "Für das ultimative formelle Statement. Exklusive Eleganz unter dem Licht des Festsaals.",
      image: IMAGES.STYLE_BLACK_TIE
    },
    {
      title: "Der Destination Bräutigam",
      suit: "Leinen- oder cremefarbener Anzug",
      match: "Hellbrauner Wildleder-Loafer",
      desc: "Mediterrane Leichtigkeit für die sonnenverwöhnte Feier. Butterweiches Wildleder trifft auf Küstenstil.",
      image: IMAGES.STYLE_DESTINATION
    },
    {
      title: "Der City Bräutigam",
      suit: "Moderne Maßkonfektion (Anthrazit, Navy)",
      match: "Leder-Loafer",
      desc: "Sartoriale Präzision für das urbane Umfeld. Handgefertigtes italienisches Leder für den modernen Mann.",
      image: IMAGES.STYLE_CITY
    }
  ]
};

export default function StyleGuide({ lang }: StyleGuideProps) {
  const data = archetypes[lang];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
            {lang === 'EN' ? 'The Style Pillars' : 'Die Stil-Säulen'}
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
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <div className="mb-6 space-y-2">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Suit Style</p>
                <p className="text-sm font-medium">{item.suit}</p>
              </div>
              <div className="mb-6 space-y-2">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Recommended Choice</p>
                <a 
                  href={item.title.includes("Black Tie") ? "https://aurelien-online.com/collections/city-loafers" : item.title.includes("Destination") ? "https://aurelien-online.com/collections/driving-shoes" : "https://aurelien-online.com/collections/city-loafers"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-brand-gold transition-colors block"
                >
                  {item.match}
                </a>
              </div>
              <p className="text-sm opacity-60 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
