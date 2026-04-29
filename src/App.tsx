import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { Language } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopBanner from './components/TopBanner';
import EmailPopup from './components/EmailPopup';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Journal from './pages/Journal';
import BlogPost from './pages/BlogPost';
import SuitMatcher from './pages/SuitMatcher';
import Lookbook from './pages/Lookbook';
import Impressum from './pages/Impressum';
import About from './pages/About';
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
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  const lang = (langParam?.toUpperCase() as Language) || 'EN';
  const validLangs: Language[] = ['EN', 'DE', 'NL'];

  useEffect(() => {
    if (langParam && !validLangs.includes(langParam.toUpperCase() as Language)) {
      navigate('/en', { replace: true });
    }
  }, [langParam, navigate]);

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = lang.toLowerCase();

    // Update document title
    const titles: Record<Language, string> = {
      EN: "The Groom Code — Unlock the code for a perfect day",
      DE: "The Groom Code — Stilratgeber für den modernen Bräutigam",
      NL: "The Groom Code — Ontgrendel de code voor een perfecte dag"
    };
    document.title = titles[lang];

    // Update hreflang tags
    const baseUrl = window.location.origin;
    const pathWithoutLang = location.pathname.replace(/^\/(en|de|nl)/i, '') || '/';

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
    updateHreflang('nl', `${baseUrl}/nl${pathWithoutLang}`);
    updateHreflang('x-default', `${baseUrl}/en${pathWithoutLang}`);
  }, [lang, location.pathname]);

  const toggleLang = () => {
    const cycle: Record<Language, string> = { EN: 'de', DE: 'nl', NL: 'en' };
    const nextLang = cycle[lang];
    const pathWithoutLang = location.pathname.replace(/^\/(en|de|nl)/i, '') || '/';
    navigate(`/${nextLang}${pathWithoutLang}${location.hash}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner lang={lang} onClose={() => setIsBannerVisible(false)} onClickSignup={() => setIsEmailPopupOpen(true)} />
      <Navbar lang={lang} onToggleLang={toggleLang} hasBanner={isBannerVisible} />

      <AnimatePresence>
        {isQuizOpen && (
          <Quiz lang={lang} onClose={() => setIsQuizOpen(false)} />
        )}
      </AnimatePresence>

      <div className="flex-grow">
        <Outlet context={{ onOpenQuiz: () => setIsQuizOpen(true) }} />
      </div>

      <EmailPopup lang={lang} isOpen={isEmailPopupOpen} onClose={() => setIsEmailPopupOpen(false)} />
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
          <Route path="matcher" element={<SuitMatcherWrapper />} />
          <Route path="lookbook" element={<LookbookWrapper />} />
          <Route path="impressum" element={<ImpressumWrapper />} />
          <Route path="about" element={<AboutWrapper />} />
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

function SuitMatcherWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <SuitMatcher lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}

function LookbookWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Lookbook lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}

function ImpressumWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <Impressum lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}

function AboutWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <About lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}

function NotFoundWrapper() {
  const { lang } = useParams<{ lang: string }>();
  return <NotFound lang={(lang?.toUpperCase() as Language) || 'EN'} />;
}
