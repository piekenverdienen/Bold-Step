import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Language, IMAGES } from '../constants';

interface EditorialProps {
  lang: Language;
}

export default function EditorialSections({ lang }: EditorialProps) {
  return (
    <div className="space-y-0">
      {/* Pillar 1: The Proposal */}
      <section id="proposal" className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6 block">Pillar 01 — The Proposal</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              {lang === 'EN' ? 'The Moment of Commitment' : lang === 'DE' ? 'Der entscheidende Moment' : 'Het Moment van Toewijding'}
            </h2>
            <div className="prose prose-sm opacity-70 font-light leading-relaxed mb-12">
              <p>
                {lang === 'EN'
                  ? "The proposal is the first bold step in your shared narrative. It requires a balance of nerves and tailoring confidence. Choosing the right setting is paramount, but so is your presence."
                  : lang === 'DE'
                  ? "Der Antrag ist der erste mutige Schritt in Ihrer gemeinsamen Geschichte. Es braucht das richtige Maß an Mut und ein gutes Gefühl für den Moment. Der Ort ist wichtig – Ihr Auftritt aber genauso."
                  : "Het aanzoek is de eerste dappere stap in jullie gezamenlijke verhaal. Het vereist een balans tussen zenuwen en stijlvol zelfvertrouwen. De juiste setting kiezen is cruciaal, maar je uitstraling net zo."}
              </p>
              <p className="mt-4">
                {lang === 'EN'
                  ? "For a casual yet high-end proposal, we recommend the Aurélien Driving Shoe. It offers the perfect blend of comfort for the bended knee and the sophistication required for the celebration that follows."
                  : lang === 'DE'
                  ? "Für den entspannten, aber stilvollen Antrag empfehlen wir den Aurélien Driving Shoe. Bequem genug für den Kniefall – und elegant genug für das gemeinsame Anstoßen danach."
                  : "Voor een casual maar high-end aanzoek raden we de Aurélien Driving Shoe aan. De perfecte mix van comfort voor de knieval en de verfijning die nodig is voor het feest dat volgt."}
              </p>
            </div>
            <div className="p-8 border border-brand-black/5 bg-brand-champagne/10">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4">The Proposal Outfit</h4>
              <p className="text-sm italic opacity-60 mb-6">
                {lang === 'EN' ? 'Unstructured blazer, crisp white shirt, and our recommended Driving Shoes in Navy.' : lang === 'DE' ? 'Unstrukturierter Blazer, weißes Hemd und unsere empfohlenen Driving Shoes in Navy.' : 'Ongestructureerde blazer, fris wit overhemd en onze aanbevolen Driving Shoes in Navy.'}
              </p>
              <Link
                to={`/${lang.toLowerCase()}/collection`}
                className="text-[10px] uppercase tracking-widest font-bold text-brand-gold hover:underline inline-block"
              >
                {lang === 'EN' ? 'View Selection' : lang === 'DE' ? 'Zur Auswahl' : 'Bekijk Selectie'}
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 aspect-[4/5] overflow-hidden"
          >
            <img 
              src={IMAGES.EDITORIAL_PROPOSAL} 
              alt="Luxury Proposal Setting" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Pillar 2: The Planning */}
      <section id="planning" className="relative py-32 px-6 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src={IMAGES.EDITORIAL_PLANNING} 
              alt="Wedding Planning Session" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6 block">Pillar 02 — The Planning</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              {lang === 'EN' ? 'Elegant Protocol' : lang === 'DE' ? 'Mit Stil durch alle Termine' : 'Elegant Protocol'}
            </h2>
            <div className="prose prose-sm opacity-70 font-light leading-relaxed mb-12">
              <p>
                {lang === 'EN'
                  ? "Planning a wedding is an exercise in precision. From the bachelor party to the rehearsal dinner, every event has its own hierarchy of dress. Navigating these protocols is where the modern groom truly shines."
                  : lang === 'DE'
                  ? "Eine Hochzeit zu planen heißt: an alles denken. Vom Junggesellenabschied bis zum Probeessen hat jeder Anlass seine eigene Kleiderordnung. Wer diese kennt – und sie souverän mit dem eigenen Stil verbindet – hat schon gewonnen."
                  : "Het plannen van een bruiloft is een oefening in precisie. Van het vrijgezellenfeest tot het repetitiediner, elk evenement heeft zijn eigen dresscode. Het navigeren door deze protocollen is waar de moderne bruidegom echt schittert."}
              </p>
              <p className="mt-4">
                {lang === 'EN'
                  ? "The bachelor party demands smart casual excellence. Aurélien Yacht Loafers provide the versatility needed for a weekend of celebration, transitioning seamlessly from city walks to evening cocktails."
                  : lang === 'DE'
                  ? "Beim Junggesellenabschied ist Smart Casual gefragt. Der Aurélien Yacht Loafer ist genau dafür gemacht – tagsüber durch die Stadt, abends zum Cocktail, ohne Schuhwechsel dazwischen."
                  : "Het vrijgezellenfeest vraagt om smart casual excellentie. Aurélien Yacht Loafers bieden de veelzijdigheid die nodig is voor een weekend vol feest, en gaan naadloos over van stadswandelingen naar avondcocktails."}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to={`/${lang.toLowerCase()}/collection`}
                className="p-6 bg-white border border-brand-black/5 hover:border-brand-gold transition-colors group"
              >
                <h5 className="text-[10px] uppercase tracking-widest font-bold mb-2 group-hover:text-brand-gold transition-colors">Bachelor Party</h5>
                <p className="text-xs opacity-60">Smart Casual / Yacht Loafers</p>
              </Link>
              <Link 
                to={`/${lang.toLowerCase()}/collection`}
                className="p-6 bg-white border border-brand-black/5 hover:border-brand-gold transition-colors group"
              >
                <h5 className="text-[10px] uppercase tracking-widest font-bold mb-2 group-hover:text-brand-gold transition-colors">Rehearsal</h5>
                <p className="text-xs opacity-60">Modern Tailoring / Leather Loafers</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
