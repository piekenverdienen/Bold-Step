import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { Language } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Journal from './pages/Journal';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
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

function LanguageWrapper() {
  const { lang: langParam } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const lang = (langParam?.toUpperCase() as Language) || 'EN';
  const validLangs: Language[] = ['EN', 'DE'];

  useEffect(() => {
    if (langParam && !validLangs.includes(langParam.toUpperCase() as Language)) {
      navigate('/en', { replace: true });
    }
  }, [langParam, navigate]);

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = lang.toLowerCase();

    // Update document title
    const titles = {
      EN: "The Groom Code — Unlock the code for a perfect day",
      DE: "The Groom Code — Entschlüsseln Sie den Code für den perfekten Tag"
    };
    document.title = titles[lang];

    // Update hreflang tags
    const baseUrl = window.location.origin;
    const pathWithoutLang = location.pathname.replace(/^\/(en|de)/i, '') || '/';
    
    const updateHreflang = (langCode: string, url: string) => {
      let link = document.querySelector(`link[hreflang="${langCode}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = langCode;
        document.head.appendChild(link);
      }
      link.href = url;
    };

    updateHreflang('en', `${baseUrl}/en${pathWithoutLang}`);
    updateHreflang('de', `${baseUrl}/de${pathWithoutLang}`);
    updateHreflang('x-default', `${baseUrl}/en${pathWithoutLang}`);
  }, [lang, location.pathname]);

  const toggleLang = () => {
    const nextLang = lang === 'EN' ? 'de' : 'en';
    const pathWithoutLang = location.pathname.replace(/^\/(en|de)/i, '') || '/';
    navigate(`/${nextLang}${pathWithoutLang}${location.hash}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} onToggleLang={toggleLang} />
      
      <AnimatePresence>
        {isQuizOpen && (
          <Quiz lang={lang} onClose={() => setIsQuizOpen(false)} />
        )}
      </AnimatePresence>

      <div className="flex-grow">
        <Outlet context={{ onOpenQuiz: () => setIsQuizOpen(true) }} />
      </div>

      <Footer lang={lang} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/:lang" element={<LanguageWrapper />}>
          <Route index element={<HomeWrapper />} />
          <Route path="collection" element={<CollectionWrapper />} />
          <Route path="journal" element={<JournalWrapper />} />
          <Route path="journal/:id" element={<BlogPostWrapper />} />
          <Route path="*" element={<NotFoundWrapper />} />
        </Route>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Helper components to pass lang and onOpenQuiz to pages
import { useOutletContext } from 'react-router-dom';

function HomeWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { onOpenQuiz } = useOutletContext<{ onOpenQuiz: () => void }>();
  return <Home lang={(lang?.toUpperCase() as Language) || 'EN'} onOpenQuiz={onOpenQuiz} />;
}

function CollectionWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Collection lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}

function JournalWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Journal lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}

function BlogPostWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <BlogPost lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}

function NotFoundWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <NotFound lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}
