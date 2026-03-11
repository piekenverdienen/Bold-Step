import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../constants';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  return (
    <div className="pt-40 pb-20 bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <header>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6 block">
                {lang === 'EN' ? 'The Story' : 'Die Geschichte'}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                {lang === 'EN' ? 'The Man Behind The Groom Code' : 'Der Mann hinter The Groom Code'}
              </h1>
            </header>

            <div className="prose prose-lg font-light opacity-70 leading-relaxed space-y-6">
              {lang === 'EN' ? (
                <>
                  <p>For most of my professional life, I have worked in the world of fashion. Not just clothing, but the subtle language of style — the way a well-chosen piece can change how a man carries himself.</p>
                  <p>Over the years, I had the privilege of helping countless men find their best version of themselves. From everyday tailoring to life’s most important moments. And none of those moments is more meaningful than a wedding day.</p>
                  <p>I know this not only from experience in fashion, but from my own life.</p>
                  <p>I’m married to my wonderful wife Jessica, and together we are raising two beautiful children. When I stood there on my own wedding day, I realized something simple but powerful: a man should feel completely himself on that day — confident, relaxed, and proud of the way he shows up.</p>
                  <p className="text-brand-black opacity-100 font-serif italic text-2xl">Not dressed up. But elevated.</p>
                  <p>That moment stayed with me.</p>
                  <p>Throughout my career I noticed that while the wedding industry offers endless guidance for brides, the groom is often left navigating the experience on his own. Yet he deserves the same attention to detail, the same care, and the same sense of occasion.</p>
                  <p>That is why I created The Groom Code.</p>
                  <p>This platform is a curated guide for the modern groom. A place where tradition meets contemporary elegance, and where style is approached with intention.</p>
                  <p>From the proposal to the ceremony, from choosing the right suit to finding the perfect pair of loafers, every detail contributes to the story of the day.</p>
                  <p>My passion has always been helping men look — and more importantly feel — their best.</p>
                  <p>With The Groom Code, I hope to share that passion with you.</p>
                  <p>Because on what may very well be the most beautiful day of your life, you deserve to step forward with confidence, style, and ease.</p>
                  <p className="pt-8 font-serif text-xl">— The Groom Code</p>
                </>
              ) : (
                <>
                  <p>Den größten Teil meines Berufslebens habe ich in der Welt der Mode gearbeitet. Nicht nur Kleidung, sondern die subtile Sprache des Stils – die Art und Weise, wie ein gut gewähltes Stück verändern kann, wie ein Mann sich gibt.</p>
                  <p>Im Laufe der Jahre hatte ich das Privileg, unzähligen Männern zu helfen, die beste Version ihrer selbst zu finden. Von der alltäglichen Maßkonfektion bis hin zu den wichtigsten Momenten des Lebens. Und keiner dieser Momente ist bedeutungsvoller als ein Hochzeitstag.</p>
                  <p>Ich weiß das nicht nur aus meiner Erfahrung in der Mode, sondern aus meinem eigenen Leben.</p>
                  <p>Ich bin mit meiner wunderbaren Frau Jessica verheiratet, und gemeinsam ziehen wir zwei wunderschöne Kinder groß. Als ich an meinem eigenen Hochzeitstag dort stand, wurde mir etwas Einfaches, aber Kraftvolles klar: Ein Mann sollte sich an diesem Tag ganz er selbst fühlen – selbstbewusst, entspannt und stolz darauf, wie er auftritt.</p>
                  <p className="text-brand-black opacity-100 font-serif italic text-2xl">Nicht verkleidet. Sondern erhoben.</p>
                  <p>Dieser Moment blieb mir in Erinnerung.</p>
                  <p>Während meiner gesamten Karriere fiel mir auf, dass die Hochzeitsindustrie zwar endlose Anleitungen für Bräute bietet, der Bräutigam aber oft allein gelassen wird, um diese Erfahrung zu bewältigen. Dabei verdient er die gleiche Liebe zum Detail, die gleiche Sorgfalt und das gleiche Gefühl für den Anlass.</p>
                  <p>Deshalb habe ich The Groom Code ins Leben gerufen.</p>
                  <p>Diese Plattform ist ein kuratierter Leitfaden für den modernen Bräutigam. Ein Ort, an dem Tradition auf zeitgenössische Eleganz trifft und an dem Stil mit Absicht angegangen wird.</p>
                  <p>Vom Antrag bis zur Zeremonie, von der Wahl des richtigen Anzugs bis zum Finden des perfekten Paars Loafer trägt jedes Detail zur Geschichte des Tages bei.</p>
                  <p>Meine Leidenschaft war es schon immer, Männern zu helfen, gut auszusehen – und vor allem sich gut zu fühlen.</p>
                  <p>Mit The Groom Code hoffe ich, diese Leidenschaft mit Ihnen zu teilen.</p>
                  <p>Denn an dem Tag, der sehr wohl der schönste Tag Ihres Lebens sein kann, verdienen Sie es, mit Selbstvertrauen, Stil und Leichtigkeit voranzuschreiten.</p>
                  <p className="pt-8 font-serif text-xl">— The Groom Code</p>
                </>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-40"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/15xIpdBYgxdRmYA2NRTu3uGqgA72kXE0R" 
                alt="Alexander Falk" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
