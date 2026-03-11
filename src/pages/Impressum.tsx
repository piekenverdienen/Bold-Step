import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../constants';

interface ImpressumProps {
  lang: Language;
}

export default function Impressum({ lang }: ImpressumProps) {
  return (
    <div className="pt-40 pb-20 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6 block"
          >
            {lang === 'EN' ? 'Legal Information' : 'Rechtliche Informationen'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            Impressum
          </motion.h1>
        </header>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'Company Information' : 'Unternehmensinformationen'}
              </h2>
              <div className="space-y-4 text-lg font-light opacity-70 leading-relaxed">
                <p className="font-bold text-brand-black opacity-100">Rombots Digital B.V.</p>
                <p>Klundertseweg 29</p>
                <p>4761PR Zevenbergen</p>
                <p>The Netherlands</p>
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'Registration' : 'Registrierung'}
              </h2>
              <div className="space-y-2 text-sm font-light opacity-70">
                <p>Kamer van Koophandel: 77761073</p>
                <p>Gemeente: Moerdijk</p>
                <p>Wijk: Wijk 00 Zevenbergen</p>
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'Contact' : 'Kontakt'}
              </h2>
              <div className="space-y-2 text-sm font-light opacity-70">
                <p>Email: alexander@thegroomcode.com</p>
                <p>Web: www.thegroomcode.com</p>
              </div>
            </section>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://lh3.googleusercontent.com/d/1OqE7K6TOfP5qzFzfIY6rFSXFiC27MblG" 
                alt="Alexander Falk" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">Alexander Falk</h3>
              <p className="text-xs uppercase tracking-widest font-bold text-brand-gold">
                {lang === 'EN' ? 'Editor-in-Chief' : 'Chefredakteur'}
              </p>
              <p className="mt-4 text-sm font-light opacity-60 leading-relaxed">
                {lang === 'EN' 
                  ? "Alexander Falk is the visionary behind The Groom Code, dedicated to bringing tailoring excellence and modern planning to grooms worldwide."
                  : "Alexander Falk ist der Visionär hinter The Groom Code, der sich der Aufgabe verschrieben hat, Bräutigamen weltweit stilvolle Exzellenz und moderne Planung näherzubringen."}
              </p>
            </div>
          </motion.div>
        </div>

        <footer className="mt-32 pt-12 border-t border-brand-black/5">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-center">
            © 2026 Rombots Digital B.V. — All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
