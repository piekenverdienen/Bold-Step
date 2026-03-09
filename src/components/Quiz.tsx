import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { Language, IMAGES } from '../constants';

interface QuizProps {
  lang: Language;
  onClose: () => void;
}

const quizData = {
  EN: {
    steps: [
      {
        question: "Where is the venue?",
        options: [
          { label: "Countryside", value: "suede" },
          { label: "City", value: "leather" },
          { label: "Beach", value: "yacht" },
          { label: "Hotel", value: "leather" }
        ]
      },
      {
        question: "What is your suit colour?",
        options: [
          { label: "Navy", value: "tan" },
          { label: "Charcoal", value: "black" },
          { label: "Ivory", value: "tan" },
          { label: "Black", value: "black" }
        ]
      },
      {
        question: "Which season is the wedding?",
        options: [
          { label: "Spring", value: "suede" },
          { label: "Summer", value: "yacht" },
          { label: "Autumn", value: "leather" },
          { label: "Winter", value: "leather" }
        ]
      },
      {
        question: "What is your personal style?",
        options: [
          { label: "Classic", value: "leather" },
          { label: "Modern", value: "suede" },
          { label: "Relaxed", value: "yacht" },
          { label: "Bold", value: "leather" }
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
        question: "Wo vindt die Hochzeit statt?",
        options: [
          { label: "Landseite", value: "suede" },
          { label: "Stadt", value: "leather" },
          { label: "Strand", value: "yacht" },
          { label: "Hotel", value: "leather" }
        ]
      },
      {
        question: "Welche Farbe hat Ihr Anzug?",
        options: [
          { label: "Navy", value: "tan" },
          { label: "Anthrazit", value: "black" },
          { label: "Elfenbein", value: "tan" },
          { label: "Schwarz", value: "black" }
        ]
      },
      {
        question: "In welcher Jahreszeit heiraten Sie?",
        options: [
          { label: "Frühling", value: "suede" },
          { label: "Sommer", value: "yacht" },
          { label: "Herbst", value: "leather" },
          { label: "Winter", value: "leather" }
        ]
      },
      {
        question: "Was ist Ihr persönlicher Stil?",
        options: [
          { label: "Klassisch", value: "leather" },
          { label: "Modern", value: "suede" },
          { label: "Entspannt", value: "yacht" },
          { label: "Mutig", value: "leather" }
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
  suede: {
    name: "The Suede Loafer",
    desc: "Our top recommendation for your relaxed yet refined celebration. Exceptional craftsmanship meets Mediterranean ease.",
    image: IMAGES.PRODUCT_SUEDE_LOAFER,
    link: "https://aurelien-online.com/collections/driving-shoes"
  },
  leather: {
    name: "The Leather Loafer",
    desc: "The definitive choice for your city wedding. Hand-finished quality that ensures a sharp silhouette.",
    image: IMAGES.PRODUCT_LEATHER_LOAFER,
    link: "https://aurelien-online.com/collections/city-loafers"
  },
  yacht: {
    name: "The Yacht Loafer",
    desc: "Ideal for your destination celebration. A versatile balance of luxury and effortless style.",
    image: IMAGES.PRODUCT_YACHT_LOAFER,
    link: "https://aurelien-online.com/collections/loafers"
  }
};

export default function Quiz({ lang, onClose }: QuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const data = quizData[lang];

  const handleOption = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < data.steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(data.steps.length);
    }
  };

  const getResult = () => {
    // Simple logic: most frequent value
    const counts: Record<string, number> = {};
    answers.forEach(a => counts[a] = (counts[a] || 0) + 1);
    const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b, 'leather');
    return recommendations[winner as keyof typeof recommendations];
  };

  return (
    <div className="fixed inset-0 z-[100] bg-brand-offwhite flex flex-col">
      <div className="p-6 flex justify-between items-center border-b border-brand-black/5">
        <button onClick={onClose} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100">
          <ChevronLeft size={16} /> {lang === 'EN' ? 'Back' : 'Zurück'}
        </button>
        <span className="text-xs uppercase tracking-[0.3em] font-bold">Sole Mate Quiz</span>
        <div className="w-10"></div>
      </div>

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-xl w-full">
          {step < data.steps.length ? (
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">Step {step + 1} of {data.steps.length}</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-12">{data.steps[step].question}</h2>
              <div className="grid gap-4">
                {data.steps[step].options.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleOption(opt.value)}
                    className="w-full p-6 border border-brand-black/10 text-left hover:border-brand-black hover:bg-brand-black hover:text-brand-offwhite transition-all flex justify-between items-center group"
                  >
                    <span className="text-lg font-serif">{opt.label}</span>
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="mb-12">
                <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check size={40} className="text-brand-offwhite" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4 block">{data.result.title}</span>
                <h2 className="text-5xl font-serif mb-6">{getResult().name}</h2>
                <p className="text-sm opacity-60 font-light leading-relaxed max-w-sm mx-auto mb-12">
                  {getResult().desc}
                </p>
                <div className="aspect-[4/5] max-w-xs mx-auto mb-12 overflow-hidden">
                  <img src={getResult().image} alt={getResult().name} className="w-full h-full object-cover" />
                </div>
                <a 
                  href={getResult().link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 bg-brand-black text-brand-offwhite text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all"
                >
                  {data.result.cta}
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
