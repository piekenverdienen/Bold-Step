import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Sparkles, Loader2, ChevronRight, X } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../constants';

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
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const base64Data = image.split(',')[1];
      
      const prompt = `Analyse the suit in this image. Identify: fabric, colour, lapel style, formality level. 
      Then recommend the single best Aurélien loafer model (Suede Loafer, Leather Loafer, Yacht Loafer, or Driving Shoe) with a 2-sentence justification.
      Deliver the response in ${lang === 'EN' ? 'British English' : 'German (formal Sie-form)'}.
      Format the response with clear headings.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
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
    } catch (error) {
      console.error(error);
      setResult("Error connecting to the AI Stylist. Please ensure your API key is configured.");
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
              {lang === 'EN' ? 'AI Style Assistant' : 'KI-Stil-Assistent'}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              {lang === 'EN' 
                ? 'The Digital Tailor' 
                : 'Der Digitale Schneider'}
            </h2>
            <p className="text-lg font-light opacity-70 mb-12 leading-relaxed">
              {lang === 'EN'
                ? 'Upload a photograph of your wedding suit. Our AI-driven stylist will analyse the fabric, cut, and tone to recommend the perfect Aurélien pairing.'
                : 'Laden Sie ein Foto Ihres Hochzeitsanzugs hoch. Unser KI-gestützter Stylist analysiert Stoff, Schnitt und Farbton, um die perfekte Aurélien-Kombination zu empfehlen.'}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm font-light opacity-60">
                  {lang === 'EN' ? 'Instant Fabric Analysis' : 'Sofortige Stoffanalyse'}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <ChevronRight size={20} />
                </div>
                <p className="text-sm font-light opacity-60">
                  {lang === 'EN' ? 'Sartorial Colour Matching' : 'Sartoriale Farbabstimmung'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            {!image ? (
              <label className="flex flex-col items-center justify-center aspect-square border-2 border-dashed border-white/20 hover:border-brand-gold transition-colors cursor-pointer group">
                <Upload size={48} className="text-white/20 group-hover:text-brand-gold mb-6 transition-colors" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  {lang === 'EN' ? 'Upload Suit Photo' : 'Anzugfoto Hochladen'}
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
                        {lang === 'EN' ? 'Analysing...' : 'Analysiere...'}
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        {lang === 'EN' ? 'Get Recommendation' : 'Empfehlung Erhalten'}
                      </>
                    )}
                  </button>
                )}

                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-white/10 border border-white/10"
                  >
                    <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-4">
                      {lang === 'EN' ? 'Stylist Recommendation' : 'Empfehlung des Stylisten'}
                    </h4>
                    <div className="text-sm font-light leading-relaxed whitespace-pre-wrap opacity-90">
                      {result}
                    </div>
                    <button 
                      onClick={() => { setImage(null); setResult(null); }}
                      className="mt-8 text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity"
                    >
                      {lang === 'EN' ? 'Try Another Suit' : 'Anderen Anzug Probieren'}
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
