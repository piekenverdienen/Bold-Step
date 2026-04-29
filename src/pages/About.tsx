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
                {lang === 'EN' ? 'The Story' : lang === 'DE' ? 'Die Geschichte' : 'Het Verhaal'}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                {lang === 'EN' ? 'The Man Behind The Groom Code' : lang === 'DE' ? 'Der Mann hinter The Groom Code' : 'De Man Achter The Groom Code'}
              </h1>
            </header>

            <div className="prose prose-lg font-light opacity-70 leading-relaxed space-y-6">
              {lang === 'EN' ? (
                <>
                  <p>For most of my professional life, I have worked in the world of fashion. Not just clothing, but the subtle language of style — the way a well-chosen piece can change how a man carries himself.</p>
                  <p>Over the years, I had the privilege of helping countless men find their best version of themselves. From everyday tailoring to life's most important moments. And none of those moments is more meaningful than a wedding day.</p>
                  <p>I know this not only from experience in fashion, but from my own life.</p>
                  <p>I'm married to my wonderful wife Jessica, and together we are raising two beautiful children. When I stood there on my own wedding day, I realized something simple but powerful: a man should feel completely himself on that day — confident, relaxed, and proud of the way he shows up.</p>
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
              ) : lang === 'DE' ? (
                <>
                  <p>Den größten Teil meines Berufslebens habe ich in der Mode gearbeitet. Nicht nur in der Welt der Kleidung, sondern in der leisen Sprache des Stils – darin, wie ein gut gewählter Anzug verändern kann, wie ein Mann sich bewegt, wie er auftritt, wie er sich fühlt.</p>
                  <p>Über die Jahre durfte ich vielen Männern dabei helfen, ihre beste Version zu finden. Vom alltäglichen Anzug bis zu den wichtigsten Momenten ihres Lebens. Und kein Moment hat dabei mehr Gewicht als der Hochzeitstag.</p>
                  <p>Ich weiß das nicht nur aus meiner Arbeit, sondern aus meinem eigenen Leben.</p>
                  <p>Ich bin mit meiner Frau Jessica verheiratet, gemeinsam ziehen wir zwei wundervolle Kinder groß. Als ich selbst vor dem Altar stand, wurde mir etwas klar, das einfach klingt, aber doch nicht selbstverständlich ist: An so einem Tag sollte ein Mann ganz er selbst sein dürfen. Selbstbewusst. Entspannt. Stolz auf das, wie er auftritt.</p>
                  <p className="text-brand-black opacity-100 font-serif italic text-2xl">Nicht verkleidet. Sondern in seiner besten Form.</p>
                  <p>Dieser Moment hat mich nie losgelassen.</p>
                  <p>In all den Jahren in der Branche ist mir aufgefallen: Für die Braut gibt es unzählige Ratgeber. Den Bräutigam überlässt man meistens sich selbst. Dabei verdient er dieselbe Aufmerksamkeit, dieselbe Sorgfalt, dasselbe Gespür für den Anlass.</p>
                  <p>Deshalb habe ich The Groom Code gegründet.</p>
                  <p>Eine Plattform, die der Bräutigam wirklich brauchen kann. Tradition, kombiniert mit zeitgemäßer Eleganz. Stil, der nicht laut sein muss, um wirken zu können.</p>
                  <p>Vom Antrag bis zur Trauung, von der Wahl des Anzugs bis zum richtigen Paar Loafer – jedes Detail schreibt mit an der Geschichte des Tages.</p>
                  <p>Meine Leidenschaft war es immer, Männern zu helfen, gut auszusehen – und sich vor allem gut zu fühlen.</p>
                  <p>Mit The Groom Code möchte ich genau diese Leidenschaft mit Ihnen teilen.</p>
                  <p>Denn an einem Tag, der einer der schönsten Ihres Lebens werden kann, sollten Sie ihn mit Selbstvertrauen, Stil und Leichtigkeit erleben.</p>
                  <p className="pt-8 font-serif text-xl">— The Groom Code</p>
                </>
              ) : (
                <>
                  <p>Het grootste deel van mijn professionele leven heb ik in de modewereld gewerkt. Niet alleen kleding, maar de subtiele taal van stijl — de manier waarop een goed gekozen kledingstuk kan veranderen hoe een man zich presenteert.</p>
                  <p>Door de jaren heen heb ik het voorrecht gehad om talloze mannen te helpen de beste versie van zichzelf te vinden. Van dagelijkse maatkleding tot de belangrijkste momenten in het leven. En geen van die momenten is betekenisvoller dan een trouwdag.</p>
                  <p>Ik weet dit niet alleen vanuit mijn ervaring in de mode, maar vanuit mijn eigen leven.</p>
                  <p>Ik ben getrouwd met mijn geweldige vrouw Jessica, en samen voeden we twee prachtige kinderen op. Toen ik daar stond op mijn eigen trouwdag, realiseerde ik me iets eenvoudigs maar krachtigs: een man moet zich op die dag volledig zichzelf voelen — zelfverzekerd, ontspannen en trots op hoe hij verschijnt.</p>
                  <p className="text-brand-black opacity-100 font-serif italic text-2xl">Niet verkleed. Maar verheven.</p>
                  <p>Dat moment bleef me bij.</p>
                  <p>Gedurende mijn hele carrière viel me op dat de bruiloftsindustrie eindeloze begeleiding biedt voor bruiden, maar de bruidegom vaak alleen wordt gelaten om deze ervaring te navigeren. Toch verdient hij dezelfde aandacht voor detail, dezelfde zorg en hetzelfde gevoel voor de gelegenheid.</p>
                  <p>Daarom heb ik The Groom Code opgericht.</p>
                  <p>Dit platform is een samengestelde gids voor de moderne bruidegom. Een plek waar traditie hedendaagse elegantie ontmoet, en waar stijl met intentie wordt benaderd.</p>
                  <p>Van het aanzoek tot de ceremonie, van het kiezen van het juiste pak tot het vinden van het perfecte paar loafers, elk detail draagt bij aan het verhaal van de dag.</p>
                  <p>Mijn passie is altijd geweest om mannen te helpen er goed uit te zien — en nog belangrijker, zich goed te voelen.</p>
                  <p>Met The Groom Code hoop ik die passie met je te delen.</p>
                  <p>Want op wat wellicht de mooiste dag van je leven wordt, verdien je het om met zelfvertrouwen, stijl en gemak vooruit te stappen.</p>
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
