import React from 'react';
import { motion } from 'motion/react';
import { Language, IMAGES } from '../constants';

interface LookbookProps {
  lang: Language;
}

const looks = {
  EN: [
    {
      title: "The Black Tie Groom",
      subtitle: "Absolute Formality",
      images: {
        total: IMAGES.STYLE_BLACK_TIE,
        suit: IMAGES.LOOKBOOK_BLACK_TIE_SUIT,
        shoes: IMAGES.LOOKBOOK_BLACK_TIE_SHOES,
        detail: IMAGES.LOOKBOOK_BLACK_TIE_DETAIL
      },
      description: "The peak of tailoring elegance. A midnight blue or black tuxedo paired with polished loafers for a modern twist on a timeless tradition.",
      details: ["Silk Grosgrain Lapels", "Hand-finished Leather", "Architectural Silhouette"]
    },
    {
      title: "Linen or Beige Suit",
      subtitle: "Mediterranean Ease",
      images: {
        total: IMAGES.STYLE_DESTINATION,
        suit: IMAGES.LOOKBOOK_LINEN_SUIT,
        shoes: IMAGES.LOOKBOOK_LINEN_SHOES,
        detail: IMAGES.LOOKBOOK_LINEN_DETAIL
      },
      description: "Perfect for sun-drenched celebrations. Breathable fabrics meet the relaxed sophistication of suede driving shoes.",
      details: ["Unlined Construction", "Natural Earth Tones", "Coastal Refinement"]
    },
    {
      title: "The City Groom",
      subtitle: "Urban Precision",
      images: {
        total: IMAGES.STYLE_CITY,
        suit: IMAGES.LOOKBOOK_CITY_SUIT,
        shoes: IMAGES.LOOKBOOK_CITY_SHOES,
        detail: IMAGES.LOOKBOOK_CITY_DETAIL
      },
      description: "Sharp tailoring for the modern metropolis. Charcoal or navy suits that command presence in any urban setting.",
      details: ["Modern Tailoring", "Italian Craftsmanship", "Versatile Elegance"]
    }
  ],
  DE: [
    {
      title: "Der Black Tie Bräutigam",
      subtitle: "Absolute Formalität",
      images: {
        total: IMAGES.STYLE_BLACK_TIE,
        suit: IMAGES.LOOKBOOK_BLACK_TIE_SUIT,
        shoes: IMAGES.LOOKBOOK_BLACK_TIE_SHOES,
        detail: IMAGES.LOOKBOOK_BLACK_TIE_DETAIL
      },
      description: "Der Gipfel der stilvollen Eleganz. Ein mitternachtsblauer oder schwarzer Smoking, kombiniert mit polierten Loafern für eine moderne Interpretation einer zeitlosen Tradition.",
      details: ["Seiden-Grosgrain-Revers", "Handveredeltes Leder", "Architektonische Silhouette"]
    },
    {
      title: "Leinen- oder beiger Anzug",
      subtitle: "Mediterrane Leichtigkeit",
      images: {
        total: IMAGES.STYLE_DESTINATION,
        suit: IMAGES.LOOKBOOK_LINEN_SUIT,
        shoes: IMAGES.LOOKBOOK_LINEN_SHOES,
        detail: IMAGES.LOOKBOOK_LINEN_DETAIL
      },
      description: "Perfekt für sonnenverwöhnte Feiern. Atmungsaktive Stoffe treffen auf die entspannte Raffinesse von Wildleder-Fahrschuhen.",
      details: ["Ungefütterte Konstruktion", "Natürliche Erdtöne", "Küsten-Raffinesse"]
    },
    {
      title: "Der City Bräutigam",
      subtitle: "Urbane Präzision",
      images: {
        total: IMAGES.STYLE_CITY,
        suit: IMAGES.LOOKBOOK_CITY_SUIT,
        shoes: IMAGES.LOOKBOOK_CITY_SHOES,
        detail: IMAGES.LOOKBOOK_CITY_DETAIL
      },
      description: "Scharfe Maßkonfektion für die moderne Metropole. Anthrazitfarbene oder marineblaue Anzüge, die in jeder urbanen Umgebung Präsenz zeigen.",
      details: ["Moderne Maßkonfektion", "Italienische Handwerkskunst", "Vielseitige Elegance"]
    }
  ]
};

function StyleCollage({ images, lang }: { images: { total: string, suit: string, shoes: string, detail: string }, lang: Language }) {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-[2/3] bg-white p-10 rounded-[50px] shadow-sm flex flex-col">
      <div className="mb-10">
        <h3 className="text-3xl font-bold leading-tight tracking-tight uppercase text-brand-black">
          Create<br />Your Style
        </h3>
      </div>

      <div className="relative flex-grow grid grid-cols-2 gap-8">
        {/* Left Vertical Image (Total Look) */}
        <div className="rounded-[40px] overflow-hidden h-full shadow-sm">
          <img src={images.total} className="w-full h-full object-cover" alt="Total Look" referrerPolicy="no-referrer" />
        </div>

        {/* Right Side Column */}
        <div className="relative flex flex-col h-full">
          {/* Top Right Image (Suit) */}
          <div className="rounded-[40px] overflow-hidden h-[55%] shadow-sm mb-auto">
            <img src={images.suit} className="w-full h-full object-cover" alt="Suit" referrerPolicy="no-referrer" />
          </div>

          {/* Bottom Right Image (Shoes) - Playful Stack Effect */}
          <div className="relative h-[40%] w-[110%] -ml-[10%]">
             {/* Background "Behind" Card */}
             <div className="absolute inset-0 bg-brand-black/5 rounded-[40px] translate-x-4 translate-y-4" />
             
             <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img src={images.shoes} className="w-full h-full object-cover" alt="Shoes" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start">
        <p className="text-3xl font-bold tracking-tight uppercase text-brand-black">Look At Me</p>
        <a 
          href="https://aurelien-online.com/collections/loafers?utm_source=thegroomcode&utm_medium=referral&utm_campaign=editorial"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-10 py-5 bg-brand-black text-brand-offwhite text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all rounded-full shadow-lg hover:shadow-brand-gold/20"
        >
          {lang === 'EN' ? 'Shop the Collection' : 'Kollektion Shoppen'}
        </a>
      </div>
    </div>
  );
}

export default function Lookbook({ lang }: LookbookProps) {
  const data = looks[lang];

  return (
    <div className="pt-32 pb-20 bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6 block"
          >
            {lang === 'EN' ? 'Editorial Lookbook' : 'Editorielles Lookbook'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif mb-8"
          >
            {lang === 'EN' ? 'Archetypes of Style' : 'Archetypen des Stils'}
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-px bg-brand-gold mx-auto"
          />
        </header>

        <div className="space-y-64">
          {data.map((look, i) => (
            <section key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2"
              >
                <StyleCollage images={look.images} lang={lang} />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">
                  {look.subtitle}
                </span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8">{look.title}</h2>
                <p className="text-lg font-light opacity-70 leading-relaxed mb-12">
                  {look.description}
                </p>
                <div className="space-y-4">
                  {look.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className="w-8 h-px bg-brand-gold/40" />
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}
        </div>

        <footer className="mt-64 text-center border-t border-brand-black/5 pt-32">
          <h3 className="text-3xl font-serif italic mb-8">
            {lang === 'EN' ? 'Your journey begins with a single step.' : 'Ihre Reise beginnt mit einem einzigen Schritt.'}
          </h3>
          <p className="text-sm opacity-60 max-w-md mx-auto leading-relaxed">
            {lang === 'EN' 
              ? "Every archetype is a starting point. Your wedding is your own narrative. We are here to help you write it."
              : "Jeder Archetyp ist ein Ausgangspunkt. Ihre Hochzeit ist Ihre eigene Geschichte. Wir sind hier, um Ihnen zu helfen, sie zu schreiben."}
          </p>
        </footer>
      </div>
    </div>
  );
}
