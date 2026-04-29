import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Sparkles, Loader2, ChevronRight, X } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../constants';
import Markdown from 'react-markdown';

interface AIAssistantProps {
  lang: Language;
}

export default function AIAssistant({ lang }: AIAssistantProps) {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeSuit = async () => {
    if (!image) return;
    setAnalyzing(true);
    setResult(null);

    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("MISSING_KEY");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const base64Data = image.split(',')[1];
      
      const prompt = `Analyse the suit in this image. Identify: fabric, colour, lapel style, formality level. 
      Then recommend the single best Aurélien loafer model (Suede Loafer, Leather Loafer, Yacht Loafer, or Driving Shoe) with a 2-sentence justification.
      Deliver the response in ${lang === 'EN' ? 'British English' : lang === 'DE' ? 'German (formal Sie-form)' : 'Dutch (informal je/jij-form)'}.
      Use Markdown formatting: 
      - Use ### for section headings.
      - Use bullet points for the analysis details.
      - Use bold text for key terms.
      Keep it concise and elegant.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            parts: [
              { text: prompt },
              { inlineData: { mimeType: "image/jpeg", data: base64Data } }
            ]
          }
        ]
      });

      setResult(response.text || "Analysis failed. Please try again.");
    } catch (error: any) {
      console.error(error);
      if (error.message === "MISSING_KEY") {
        setResult("The Digital Tailor requires a Gemini API Key. Please configure GEMINI_API_KEY in your Vercel Environment Variables.");
      } else {
        setResult("Error connecting to the AI Stylist. Please ensure your API key is valid and has sufficient quota.");
      }
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <section className="py-32 px-6 bg-brand-black text-brand-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6 block">
              {lang === 'EN' ? 'AI Style Assistant' : lang === 'DE' ? 'Stilberater mit KI' : 'AI Stijl Assistent'}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              {lang === 'EN'
                ? 'The Digital Tailor'
                : lang === 'DE'
                ? 'Der digitale Stilberater'
                : 'De Digitale Kleermaker'}
            </h2>
            <p className="text-lg font-light opacity-70 mb-12 leading-relaxed">
              {lang === 'EN'
                ? 'Upload a photograph of your wedding suit. Our AI-driven stylist will analyse the fabric, cut, and tone to recommend the perfect Aurélien pairing.'
                : lang === 'DE'
                ? 'Foto Ihres Hochzeitsanzugs hochladen. Unser KI-Stilberater analysiert Stoff, Schnitt und Farbton – und empfiehlt den passenden Aurélien-Loafer.'
                : 'Upload een foto van je trouwpak. Onze AI-gestuurde stylist analyseert de stof, snit en tint om de perfecte Aurélien-combinatie aan te bevelen.'}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm font-light opacity-60">
                  {lang === 'EN' ? 'Instant Fabric Analysis' : lang === 'DE' ? 'Stoffanalyse in Sekunden' : 'Directe Stofanalyse'}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <ChevronRight size={20} />
                </div>
                <p className="text-sm font-light opacity-60">
                  {lang === 'EN' ? 'Refined Colour Matching' : lang === 'DE' ? 'Präzise Farbabstimmung' : 'Verfijnde Kleurmatching'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            {!image ? (
              <label className="flex flex-col items-center justify-center aspect-square border-2 border-dashed border-white/20 hover:border-brand-gold transition-colors cursor-pointer group">
                <Upload size={48} className="text-white/20 group-hover:text-brand-gold mb-6 transition-colors" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  {lang === 'EN' ? 'Upload Suit Photo' : lang === 'DE' ? 'Anzugfoto hochladen' : 'Upload Pakfoto'}
                </span>
                <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
              </label>
            ) : (
              <div className="space-y-8">
                <div className="relative aspect-square overflow-hidden bg-brand-black">
                  <img src={image} alt="Uploaded suit" className="w-full h-full object-contain" />
                  <button 
                    onClick={() => { setImage(null); setResult(null); }}
                    className="absolute top-4 right-4 p-2 bg-brand-black/50 hover:bg-brand-black transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {!result && (
                  <button 
                    onClick={analyzeSuit}
                    disabled={analyzing}
                    className="w-full py-5 bg-brand-gold text-brand-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-champagne transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {analyzing ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        {lang === 'EN' ? 'Analysing...' : lang === 'DE' ? 'Wird analysiert…' : 'Analyseren...'}
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        {lang === 'EN' ? 'Get Recommendation' : lang === 'DE' ? 'Empfehlung erhalten' : 'Krijg Aanbeveling'}
                      </>
                    )}
                  </button>
                )}

                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 bg-white/10 border border-white/20 shadow-2xl"
                  >
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">
                      {lang === 'EN' ? 'Stylist Recommendation' : lang === 'DE' ? 'Empfehlung des Stilberaters' : 'Aanbeveling van de Stylist'}
                    </h4>
                    <div className="text-base font-light leading-relaxed text-brand-offwhite/90">
                      <Markdown
                        components={{
                          h1: ({ children }) => <h3 className="text-lg font-serif font-bold text-brand-gold mt-10 mb-6 first:mt-0">{children}</h3>,
                          h2: ({ children }) => <h3 className="text-lg font-serif font-bold text-brand-gold mt-10 mb-6 first:mt-0">{children}</h3>,
                          h3: ({ children }) => <h3 className="text-lg font-serif font-bold text-brand-gold mt-10 mb-6 first:mt-0">{children}</h3>,
                          p: ({ children }) => <p className="mb-6 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc list-outside ml-5 space-y-3 mb-6 marker:text-brand-gold last:mb-0">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-outside ml-5 space-y-3 mb-6 marker:text-brand-gold last:mb-0">{children}</ol>,
                          li: ({ children }) => <li className="pl-1 last:mb-0">{children}</li>,
                          strong: ({ children }) => <strong className="font-bold text-brand-gold">{children}</strong>,
                        }}
                      >
                        {result}
                      </Markdown>
                    </div>
                    <button 
                      onClick={() => { setImage(null); setResult(null); }}
                      className="mt-12 w-full py-4 border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold hover:text-brand-black transition-all"
                    >
                      {lang === 'EN' ? 'Try Another Suit' : lang === 'DE' ? 'Anderen Anzug ausprobieren' : 'Probeer Een Ander Pak'}
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
