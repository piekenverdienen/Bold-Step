import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Language } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Journal from './pages/Journal';
import BlogPost from './pages/BlogPost';
import Quiz from './components/Quiz';
import { AnimatePresence } from 'motion/react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const toggleLang = () => setLang(l => l === 'EN' ? 'DE' : 'EN');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar lang={lang} onToggleLang={toggleLang} />
        
        <AnimatePresence>
          {isQuizOpen && (
            <Quiz lang={lang} onClose={() => setIsQuizOpen(false)} />
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Home lang={lang} onOpenQuiz={() => setIsQuizOpen(true)} />} />
          <Route path="/collection" element={<Collection lang={lang} />} />
          <Route path="/journal" element={<Journal lang={lang} />} />
          <Route path="/journal/:id" element={<BlogPost lang={lang} />} />
        </Routes>

        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
}
