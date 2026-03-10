import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Language, IMAGES } from '../constants';

interface QuizProps {
  lang: Language;
  onClose: () => void;
}

const quizData = {
  EN: {
    steps: [
      {
        question: "Where is the celebration taking place?",
        options: [
          { label: "Mediterranean Beach / Destination", value: "voyage" },
          { label: "Metropolitan City / Urban", value: "city" },
          { label: "Rustic Countryside / Estate", value: "driving" },
          { label: "Grand Ballroom / Historic", value: "city" }
        ]
      },
      {
        question: "What is your chosen attire?",
        options: [
          { label: "Black Tie / Tuxedo", value: "city" },
          { label: "Classic Tailored Suit", value: "tassel" },
          { label: "Linen / Summer Suit", value: "voyage" },
          { label: "Smart Casual / Separates", value: "driving" }
        ]
      },
      {
        question: "What is the expected climate?",
        options: [
          { label: "Tropical / High Heat", value: "voyage" },
          { label: "Mild / Spring Breeze", value: "driving" },
          { label: "Crisp / Autumn Air", value: "tassel" },
          { label: "Cold / Winter Evening", value: "city" }
        ]
      },
      {
        question: "What is your primary sartorial goal?",
        options: [
          { label: "Uncompromising Comfort", value: "driving" },
          { label: "The Sharpest Silhouette", value: "city" },
          { label: "Effortless Versatility", value: "tassel" },
          { label: "Mediterranean Ease", value: "voyage" }
        ]
      }
    ],
    result: {
      title: "Your Sole Mate",
      cta: "Shop the Selection"
    }
  },
  DE: {
    steps: [
      {
        question: "Wo findet die Feier statt?",
        options: [
          { label: "Mediterraner Strand / Destination", value: "voyage" },
          { label: "Metropole / Urban", value: "city" },
          { label: "Ländliches Anwesen / Rustikal", value: "driving" },
          { label: "Prunkvoller Festsaal / Historisch", value: "city" }
        ]
      },
      {
        question: "Was ist Ihre gewählte Kleidung?",
        options: [
          { label: "Black Tie / Smoking", value: "city" },
          { label: "Klassischer Maßanzug", value: "tassel" },
          { label: "Leinen / Sommeranzug", value: "voyage" },
          { label: "Smart Casual / Kombination", value: "driving" }
        ]
      },
      {
        question: "Wie ist das erwartete Klima?",
        options: [
          { label: "Tropisch / Hohe Hitze", value: "voyage" },
          { label: "Mild / Frühlingsbrise", value: "driving" },
          { label: "Frisch / Herbstluft", value: "tassel" },
          { label: "Kalt / Winterabend", value: "city" }
        ]
      },
      {
        question: "Was ist Ihr wichtigstes Stil-Ziel?",
        options: [
          { label: "Kompromissloser Komfort", value: "driving" },
          { label: "Die schärfste Silhouette", value: "city" },
          { label: "Mühelose Vielseitigkeit", value: "tassel" },
          { label: "Mediterrane Leichtigkeit", value: "voyage" }
        ]
      }
    ],
    result: {
      title: "Ihr Sole Mate",
      cta: "Kollektion Shoppen"
    }
  }
};

const recommendations = {
  voyage: {
    name: "The Voyage Loafer",
    desc: "The ultimate choice for destination weddings. Unlined for maximum breathability and crafted from buttery-soft Mediterranean suede.",
    image: IMAGES.PRODUCT_YACHT_LOAFER,
    link: "https://aurelien-online.com/collections/loafers?utm_source=thegroomcode&utm_medium=referral&utm_campaign=style-quiz"
  },
  city: {
    name: "The City Loafer",
    desc: "The definitive choice for formal city weddings. Hand-finished calf leather that ensures a sharp, commanding silhouette.",
    image: IMAGES.PRODUCT_LEATHER_LOAFER,
    link: "https://aurelien-online.com/collections/city-loafers?utm_source=thegroomcode&utm_medium=referral&utm_campaign=style-quiz"
  },
  tassel: {
    name: "The Tassel Loafer",
    desc: "A modern classic that balances tradition with contemporary flair. Perfect for the groom who values texture and character.",
    image: IMAGES.PRODUCT_SUEDE_LOAFER,
    link: "https://aurelien-online.com/collections/loafers?utm_source=thegroomcode&utm_medium=referral&utm_campaign=style-quiz"
  },
  driving: {
    name: "The Driving Shoe",
    desc: "Unmatched comfort for relaxed celebrations. The iconic pebble sole and soft suede make this the perfect choice for a countryside estate.",
    image: IMAGES.ALT_10,
    link: "https://aurelien-online.com/collections/driving-shoes?utm_source=thegroomcode&utm_medium=referral&utm_campaign=style-quiz"
  }
};

export default function Quiz({ lang, onClose }: QuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const data = quizData[lang];

  const handleOption = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < data.steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        setStep(data.steps.length);
        setIsCalculating(false);
      }, 1500);
    }
  };

  const getResult = () => {
    const counts: Record<string, number> = {};
    answers.forEach(a => counts[a] = (counts[a] || 0) + 1);
    const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, 'city');
    return recommendations[winner as keyof typeof recommendations];
  };

  const progress = (step / data.steps.length) * 100;

  return (
    <div className="fixed inset-0 z-[100] bg-brand-offwhite flex flex-col">
      <div className="p-6 flex justify-between items-center border-b border-brand-black/5">
        <button onClick={onClose} className="text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity">
          {lang === 'EN' ? 'Close' : 'Schließen'}
        </button>
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold">Sole Mate Quiz</span>
          <div className="w-32 h-0.5 bg-brand-black/5 mt-2 overflow-hidden rounded-full">
            <motion.div 
              className="h-full bg-brand-gold"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-xl w-full">
          {isCalculating ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 border-2 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin mx-auto mb-8" />
              <h2 className="text-2xl font-serif italic">
                {lang === 'EN' ? 'Finding your perfect match...' : 'Wir finden Ihr perfektes Match...'}
              </h2>
            </motion.div>
          ) : step < data.steps.length ? (
            <motion.div 
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">Step {step + 1} of {data.steps.length}</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">{data.steps[step].question}</h2>
              <div className="grid gap-4">
                {data.steps[step].options.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleOption(opt.value)}
                    className="w-full p-6 border border-brand-black/10 text-left hover:border-brand-black hover:bg-brand-black hover:text-brand-offwhite transition-all flex justify-between items-center group"
                  >
                    <span className="text-lg font-serif">{opt.label}</span>
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="mb-12">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <Check size={40} className="text-brand-offwhite" />
                </motion.div>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">{data.result.title}</span>
                <h2 className="text-5xl font-serif mb-6">{getResult().name}</h2>
                <p className="text-sm opacity-60 font-light leading-relaxed max-w-sm mx-auto mb-12">
                  {getResult().desc}
                </p>
                <div className="aspect-[4/5] max-w-xs mx-auto mb-12 overflow-hidden rounded-sm shadow-2xl">
                  <img src={getResult().image} alt={getResult().name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <a 
                    href={getResult().link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-12 py-5 bg-brand-black text-brand-offwhite text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all duration-500 shadow-lg hover:shadow-brand-gold/20"
                  >
                    {data.result.cta}
                  </a>
                  <button 
                    onClick={() => {
                      setStep(0);
                      setAnswers([]);
                    }}
                    className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity"
                  >
                    {lang === 'EN' ? 'Retake Quiz' : 'Quiz wiederholen'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
