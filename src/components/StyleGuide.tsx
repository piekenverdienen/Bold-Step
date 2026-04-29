import React from 'react';
import { Link } from 'react-router-dom';
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
      title: "Linen or Beige Suit",
      suit: "Linen or beige suit",
      match: "Tan suede loafer",
      desc: "Mediterranean ease for the sun-drenched celebration. Buttery suede meets coastal style.",
      image: IMAGES.STYLE_DESTINATION
    },
    {
      title: "The City Groom",
      suit: "Modern tailoring (charcoal, navy)",
      match: "Leather loafer",
      desc: "Refined precision for the urban setting. Hand-finished Italian leather for the modern man.",
      image: IMAGES.STYLE_CITY
    }
  ],
  DE: [
    {
      title: "Der Bräutigam in Black Tie",
      suit: "Schwarzer Smoking / weißes Dinnerjacket",
      match: "Lackleder- oder Samt-Loafer",
      desc: "Festlich auf höchstem Niveau. Eleganz, die zum Saal und zum Anlass passt.",
      image: IMAGES.STYLE_BLACK_TIE
    },
    {
      title: "Hochzeit im Süden",
      suit: "Leinen- oder beiger Anzug",
      match: "Hellbrauner Wildleder-Loafer",
      desc: "Mediterrane Leichtigkeit für die Hochzeit unter freiem Himmel. Weiches Wildleder, das atmet.",
      image: IMAGES.STYLE_DESTINATION
    },
    {
      title: "Der Bräutigam in der Stadt",
      suit: "Moderner Anzug in Anthrazit oder Navy",
      match: "Leder-Loafer",
      desc: "Klare Linie für die festliche Trauung in der Stadt. Italienische Handarbeit, die jeden Anzug aufwertet.",
      image: IMAGES.STYLE_CITY
    }
  ],
  NL: [
    {
      title: "De Black Tie Bruidegom",
      suit: "Zwarte smoking / Wit dinerjasje",
      match: "Lakleren of fluwelen loafer",
      desc: "Voor het ultieme formele statement. Stralende elegantie onder het licht van de feestzaal.",
      image: IMAGES.STYLE_BLACK_TIE
    },
    {
      title: "Linnen of Beige Pak",
      suit: "Linnen of beige pak",
      match: "Lichtbruine suède loafer",
      desc: "Mediterraans gemak voor het zonnige feest. Boterzacht suède ontmoet kuststijl.",
      image: IMAGES.STYLE_DESTINATION
    },
    {
      title: "De City Bruidegom",
      suit: "Modern maatwerk (antraciet, navy)",
      match: "Leren loafer",
      desc: "Verfijnde precisie voor de stedelijke omgeving. Handafgewerkt Italiaans leer voor de moderne man.",
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
            {lang === 'EN' ? 'The Style Pillars' : lang === 'DE' ? 'Die drei Stilrichtungen' : 'De Stijlpijlers'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            {lang === 'EN' ? 'Archetypes of Elegance' : lang === 'DE' ? 'Drei Wege zum Hochzeitslook' : 'Archetypen van Elegantie'}
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
                <Link 
                  to={`/${lang.toLowerCase()}/collection`}
                  className="text-sm font-medium hover:text-brand-gold transition-colors block"
                >
                  {item.match}
                </Link>
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
