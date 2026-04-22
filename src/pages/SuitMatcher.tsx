import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, Check, Info, Copy } from 'lucide-react';
import { Language, LOAFER_PRODUCTS } from '../constants';

interface SuitMatcherProps {
  lang: Language;
}

const SUITS = [
  { name: { EN: 'Navy', DE: 'Navy', NL: 'Navy' }, hex: '#1B2A4A', category: 'navy' },
  { name: { EN: 'Midnight Blue', DE: 'Mitternachtsblau', NL: 'Middernachtblauw' }, hex: '#1C2541', category: 'midnight' },
  { name: { EN: 'Charcoal', DE: 'Anthrazit', NL: 'Antraciet' }, hex: '#36363B', category: 'charcoal' },
  { name: { EN: 'Black', DE: 'Schwarz', NL: 'Zwart' }, hex: '#1A1A1A', category: 'black' },
  { name: { EN: 'Light Grey', DE: 'Hellgrau', NL: 'Lichtgrijs' }, hex: '#B0AEAB', category: 'lightgrey' },
  { name: { EN: 'Medium Grey', DE: 'Mittelgrau', NL: 'Middengrijs' }, hex: '#7A7876', category: 'grey' },
  { name: { EN: 'Beige', DE: 'Beige', NL: 'Beige' }, hex: '#C8B99A', category: 'beige' },
  { name: { EN: 'Sand', DE: 'Sand', NL: 'Zand' }, hex: '#D4C5A9', category: 'sand' },
  { name: { EN: 'Tan', DE: 'Tan', NL: 'Tan' }, hex: '#C2A77D', category: 'tan' },
  { name: { EN: 'Cream', DE: 'Creme', NL: 'Crème' }, hex: '#EDE5D5', category: 'cream' },
  { name: { EN: 'Olive', DE: 'Oliv', NL: 'Olijf' }, hex: '#5B5E3E', category: 'olive' },
  { name: { EN: 'Forest Green', DE: 'Waldgrün', NL: 'Bosgroen' }, hex: '#2D4A3E', category: 'forest' },
  { name: { EN: 'Burgundy', DE: 'Burgunder', NL: 'Bordeaux' }, hex: '#5E2129', category: 'burgundy' },
  { name: { EN: 'Light Blue', DE: 'Hellblau', NL: 'Lichtblauw' }, hex: '#7B9DB7', category: 'lightblue' },
  { name: { EN: 'Brown', DE: 'Braun', NL: 'Bruin' }, hex: '#5C4033', category: 'brown' },
  { name: { EN: 'White / Ivory', DE: 'Weiß / Elfenbein', NL: 'Wit / Ivoor' }, hex: '#F2EDE3', category: 'white' },
];const LOAFER_MATCHES: Record<string, any> = {
  navy: {
    EN: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'The classic pairing — warm cognac against cool navy is timeless elegance.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'A lighter, summery option that brings freshness to navy.' },
      { name: 'Dark Brown', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Rich and refined. A subtle, understated choice for evening.' },
      { name: 'Burgundy', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'Bold and unexpected. A statement for the confident groom.' },
    ],
    DE: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Die klassische Kombination – warmes Cognac gegen kühles Navy ist zeitlose Eleganz.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Eine leichtere, sommerliche Option, die Navy Frische verleiht.' },
      { name: 'Dunkelbraun', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Reichhaltig und raffiniert. Eine subtile, dezente Wahl für den Abend.' },
      { name: 'Burgunder', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'Mutig und unerwartet. Ein Statement für den selbstbewussten Bräutigam.' },
    ],
    NL: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'De klassieke combinatie — warm cognac tegen koel navy is tijdloze elegantie.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Een lichtere, zomerse optie die frisheid aan navy toevoegt.' },
      { name: 'Donkerbruin', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Rijk en verfijnd. Een subtiele, ingetogen keuze voor de avond.' },
      { name: 'Bordeaux', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'Gedurfd en onverwacht. Een statement voor de zelfverzekerde bruidegom.' },
    ]
  },
  midnight: {
    EN: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warm leather against deep midnight creates beautiful contrast.', best: true },
      { name: 'Dark Brown', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Tonal depth. Sophisticated for a black-tie adjacent look.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Opens up a dark suit with a touch of warmth.' },
      { name: 'Oxblood', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'Subtle richness that reads almost black but with character.' },
    ],
    DE: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warmes Leder gegen tiefes Mitternachtsblau erzeugt einen schönen Kontrast.', best: true },
      { name: 'Dunkelbraun', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Tonale Tiefe. Anspruchsvoll für einen Look, der an Black Tie grenzt.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Lockert einen dunklen Anzug mit einem Hauch von Wärme auf.' },
      { name: 'Ochsenblut', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'Subtile Reichhaltigkeit, die fast schwarz wirkt, aber Charakter hat.' },
    ],
    NL: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warm leer tegen diep middernachtblauw creëert een prachtig contrast.', best: true },
      { name: 'Donkerbruin', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Tonale diepte. Verfijnd voor een look die grenst aan black tie.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Fleurt een donker pak op met een vleugje warmte.' },
      { name: 'Ossenbloed', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'Subtiele rijkdom die bijna zwart oogt, maar met karakter.' },
    ]
  },
  charcoal: {
    EN: [
      { name: 'Dark Brown', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'A modern alternative to black shoes with grey suits.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Adds warmth and personality to the neutral charcoal.' },
      { name: 'Burgundy', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'A refined pop of colour that pairs beautifully.' },
      { name: 'Black', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'The sharpest, most formal combination.' },
    ],
    DE: [
      { name: 'Dunkelbraun', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Eine moderne Alternative zu schwarzen Schuhen bei grauen Anzügen.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Verleiht dem neutralen Anthrazit Wärme und Persönlichkeit.' },
      { name: 'Burgunder', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'Ein raffinierter Farbtupfer, der wunderbar harmoniert.' },
      { name: 'Schwarz', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'Die schärfste, formellste Kombination.' },
    ],
    NL: [
      { name: 'Donkerbruin', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Een modern alternatief voor zwarte schoenen bij grijze pakken.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Voegt warmte en persoonlijkheid toe aan het neutrale antraciet.' },
      { name: 'Bordeaux', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'Een verfijnd kleuraccent dat prachtig combineert.' },
      { name: 'Zwart', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'De scherpste, meest formele combinatie.' },
    ]
  },
  black: {
    EN: [
      { name: 'Black', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'The only truly formal match for a black suit.', best: true },
      { name: 'Dark Charcoal', hex: '#2E2E2E', product: LOAFER_PRODUCTS.DARK_CHARCOAL, reason: 'Nearly indistinguishable but with a hint of modernity.' },
      { name: 'Oxblood', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'For the groom who wants subtle distinction.' },
      { name: 'Dark Brown', hex: '#3A2A1A', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Only for very relaxed or daytime celebrations.' },
    ],
    DE: [
      { name: 'Schwarz', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'Die einzige wirklich formelle Ergänzung für einen schwarzen Anzug.', best: true },
      { name: 'Dunkles Anthrazit', hex: '#2E2E2E', product: LOAFER_PRODUCTS.DARK_CHARCOAL, reason: 'Fast ununterscheidbar, aber mit einem Hauch von Modernität.' },
      { name: 'Ochsenblut', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'Für den Bräutigam, der subtile Distinktion wünscht.' },
      { name: 'Dunkelbraun', hex: '#3A2A1A', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Nur für sehr entspannte oder Tagesfeiern.' },
    ],
    NL: [
      { name: 'Zwart', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'De enige echt formele match voor een zwart pak.', best: true },
      { name: 'Donker antraciet', hex: '#2E2E2E', product: LOAFER_PRODUCTS.DARK_CHARCOAL, reason: 'Bijna niet te onderscheiden, maar met een vleugje moderniteit.' },
      { name: 'Ossenbloed', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'Voor de bruidegom die subtiel onderscheid wil.' },
      { name: 'Donkerbruin', hex: '#3A2A1A', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Alleen voor heel ontspannen of overdag feesten.' },
    ]
  },
  lightgrey: {
    EN: [
      { name: 'Light Tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Effortless and summer-ready. The ideal casual pairing.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'A versatile choice that grounds the light fabric.' },
      { name: 'Sand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'Tonal harmony. Soft and quietly elegant.' },
      { name: 'Navy', hex: '#2A3F5A', product: LOAFER_PRODUCTS.NAVY, reason: 'A surprising but refined contrast for a light suit.' },
    ],
    DE: [
      { name: 'Helles Tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Mühelos und sommertauglich. Die ideale legere Kombination.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Eine vielseitige Wahl, die den leichten Stoff erdet.' },
      { name: 'Sand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'Tonale Harmonie. Weich und diskret elegant.' },
      { name: 'Navy', hex: '#2A3F5A', product: LOAFER_PRODUCTS.NAVY, reason: 'Ein überraschender, aber raffinierter Kontrast für einen hellen Anzug.' },
    ],
    NL: [
      { name: 'Licht tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Moeiteloos en zomerklaar. De ideale casual combinatie.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Een veelzijdige keuze die de lichte stof verankert.' },
      { name: 'Zand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'Tonale harmonie. Zacht en subtiel elegant.' },
      { name: 'Navy', hex: '#2A3F5A', product: LOAFER_PRODUCTS.NAVY, reason: 'Een verrassend maar verfijnd contrast voor een licht pak.' },
    ]
  },
  grey: {
    EN: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'The master pairing. Warm against cool, always balanced.', best: true },
      { name: 'Dark Brown', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Richer and more formal than cognac.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Lighter and more relaxed for daytime weddings.' },
      { name: 'Burgundy', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'Adds unexpected depth. Perfect for autumn ceremonies.' },
    ],
    DE: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Die Meister-Kombination. Warm gegen kühl, immer ausgewogen.', best: true },
      { name: 'Dunkelbraun', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Reichhaltiger und formeller als Cognac.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Leichter und entspannter für Hochzeiten am Tag.' },
      { name: 'Burgunder', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'Verleiht unerwartete Tiefe. Perfekt für Herbstzeremonien.' },
    ],
    NL: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'De meestercombinatie. Warm tegen koel, altijd in balans.', best: true },
      { name: 'Donkerbruin', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Rijker en formeler dan cognac.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Lichter en relaxter voor bruiloften overdag.' },
      { name: 'Bordeaux', hex: '#6B2C3C', product: LOAFER_PRODUCTS.BURGUNDY, reason: 'Voegt onverwachte diepte toe. Perfect voor herfstceremonies.' },
    ]
  },
  beige: {
    EN: [
      { name: 'Chocolate', hex: '#5C3D2E', product: LOAFER_PRODUCTS.CHOCOLATE, reason: 'Depth and warmth that anchors a beige suit beautifully.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'A harmonious tonal pairing — warm on warm.' },
      { name: 'Cream', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Monochromatic elegance for a beach or garden setting.' },
      { name: 'Navy', hex: '#2A3F5A', product: LOAFER_PRODUCTS.NAVY, reason: 'A sharp contrast that adds structure.' },
    ],
    DE: [
      { name: 'Schokolade', hex: '#5C3D2E', product: LOAFER_PRODUCTS.CHOCOLATE, reason: 'Tiefe und Wärme, die einen beigen Anzug wunderbar erden.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Eine harmonische tonale Paarung – warm auf warm.' },
      { name: 'Creme', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Monochromatische Eleganz für eine Strand- oder Gartenumgebung.' },
      { name: 'Navy', hex: '#2A3F5A', product: LOAFER_PRODUCTS.NAVY, reason: 'Ein scharfer Kontrast, der Struktur verleiht.' },
    ],
    NL: [
      { name: 'Chocolade', hex: '#5C3D2E', product: LOAFER_PRODUCTS.CHOCOLATE, reason: 'Diepte en warmte die een beige pak prachtig verankert.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Een harmonieuze tonale combinatie — warm op warm.' },
      { name: 'Crème', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Monochromatische elegantie voor een strand- of tuinsetting.' },
      { name: 'Navy', hex: '#2A3F5A', product: LOAFER_PRODUCTS.NAVY, reason: 'Een scherp contrast dat structuur toevoegt.' },
    ]
  },
  sand: {
    EN: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warm harmonics. Like sand meeting sunset.', best: true },
      { name: 'Light Brown', hex: '#8B7355', product: LOAFER_PRODUCTS.LIGHT_BROWN, reason: 'Tonal blending for a relaxed Mediterranean feel.' },
      { name: 'Cream', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Soft and dreamy — ideal for destination weddings.' },
      { name: 'Terracotta', hex: '#B4654A', product: LOAFER_PRODUCTS.TERRACOTTA, reason: 'Earthy and modern. A contemporary choice.' },
    ],
    DE: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warme Harmonien. Wie Sand, der auf den Sonnenuntergang trifft.', best: true },
      { name: 'Hellbraun', hex: '#8B7355', product: LOAFER_PRODUCTS.LIGHT_BROWN, reason: 'Tonale Mischung für ein entspanntes mediterranes Gefühl.' },
      { name: 'Creme', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Weich und verträumt – ideal für Destination-Hochzeiten.' },
      { name: 'Terrakotta', hex: '#B4654A', product: LOAFER_PRODUCTS.TERRACOTTA, reason: 'Erdige Wärme und modern. Eine zeitgemäße Wahl.' },
    ],
    NL: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warme harmonie. Als zand dat de zonsondergang ontmoet.', best: true },
      { name: 'Lichtbruin', hex: '#8B7355', product: LOAFER_PRODUCTS.LIGHT_BROWN, reason: 'Tonale vermenging voor een ontspannen mediterraan gevoel.' },
      { name: 'Crème', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Zacht en dromerig — ideaal voor bestemmingsbruiloften.' },
      { name: 'Terracotta', hex: '#B4654A', product: LOAFER_PRODUCTS.TERRACOTTA, reason: 'Aards en modern. Een eigentijdse keuze.' },
    ]
  },
  tan: {
    EN: [
      { name: 'Dark Brown', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Creates grounding contrast with the lighter suit.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'A close relative — harmonious and warm.' },
      { name: 'Cream', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Subtle and soft for the most relaxed celebrations.' },
      { name: 'Terracotta', hex: '#B4654A', product: LOAFER_PRODUCTS.TERRACOTTA, reason: 'Earthy warmth that complements tanned tones.' },
    ],
    DE: [
      { name: 'Dunkelbraun', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Erzeugt einen erdenden Kontrast zum helleren Anzug.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Ein naher Verwandter – harmonisch und warm.' },
      { name: 'Creme', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Subtil und weich für die entspanntesten Feiern.' },
      { name: 'Terrakotta', hex: '#B4654A', product: LOAFER_PRODUCTS.TERRACOTTA, reason: 'Erdige Wärme, die gebräunte Töne ergänzt.' },
    ],
    NL: [
      { name: 'Donkerbruin', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Creëert verankerd contrast met het lichtere pak.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Een nauwe verwant — harmonieus en warm.' },
      { name: 'Crème', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Subtiel en zacht voor de meest ontspannen feesten.' },
      { name: 'Terracotta', hex: '#B4654A', product: LOAFER_PRODUCTS.TERRACOTTA, reason: 'Aardse warmte die gebruinde tinten aanvult.' },
    ]
  },
  cream: {
    EN: [
      { name: 'Light Tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Barely there contrast. Soft and heavenly.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Enough contrast to anchor the look without overpowering.' },
      { name: 'Sand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'A tonal whisper. For the minimalist groom.' },
      { name: 'Pale Pink', hex: '#C4A097', product: LOAFER_PRODUCTS.PALE_PINK, reason: 'Unexpected softness. A romantic twist.' },
    ],
    DE: [
      { name: 'Helles Tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Kaum wahrnehmbarer Kontrast. Weich und himmlisch.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Genug Kontrast, um den Look zu erden, ohne ihn zu erdrücken.' },
      { name: 'Sand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'Ein tonales Flüstern. Für den minimalistischen Bräutigam.' },
      { name: 'Blassrosa', hex: '#C4A097', product: LOAFER_PRODUCTS.PALE_PINK, reason: 'Unerwartete Weichheit. Ein romantischer Twist.' },
    ],
    NL: [
      { name: 'Licht tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Nauwelijks merkbaar contrast. Zacht en hemels.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Genoeg contrast om de look te verankeren zonder te overheersen.' },
      { name: 'Zand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'Een tonaal fluisteren. Voor de minimalistische bruidegom.' },
      { name: 'Bleekroze', hex: '#C4A097', product: LOAFER_PRODUCTS.PALE_PINK, reason: 'Onverwachte zachtheid. Een romantische twist.' },
    ]
  },
  olive: {
    EN: [
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Natural, earthy pairing that feels effortlessly stylish.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warm leather grounds the green beautifully.' },
      { name: 'Dark Brown', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Rich and cohesive — very autumnal.' },
      { name: 'Cream', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Lightens the mood. Perfect for garden parties.' },
    ],
    DE: [
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Natürliche, erdige Paarung, die mühelos stilvoll wirkt.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warmes Leder erdet das Grün wunderbar.' },
      { name: 'Dunkelbraun', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Reichhaltig und kohärent – sehr herbstlich.' },
      { name: 'Creme', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Hell die Stimmung auf. Perfekt für Gartenpartys.' },
    ],
    NL: [
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Natuurlijke, aardse combinatie die moeiteloos stijlvol aanvoelt.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Warm leer verankert het groen prachtig.' },
      { name: 'Donkerbruin', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Rijk en samenhangend — heel herfstig.' },
      { name: 'Crème', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Verlicht de sfeer. Perfect voor tuinfeesten.' },
    ]
  },
  forest: {
    EN: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'The quintessential earth-tone pairing. Rich and refined.', best: true },
      { name: 'Dark Brown', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Deep and moody. For winter weddings in the woods.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Adds lightness to a dark, dramatic suit.' },
      { name: 'Oxblood', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'Deep reds and greens — sophisticated and seasonal.' },
    ],
    DE: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Die Quintessenz der Erdtöne. Reichhaltig und raffiniert.', best: true },
      { name: 'Dunkelbraun', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Tief und stimmungsvoll. Für Winterhochzeiten im Wald.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Verleiht einem dunklen, dramatischen Anzug Leichtigkeit.' },
      { name: 'Ochsenblut', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'Tiefes Rot und Grün – anspruchsvoll und saisonal.' },
    ],
    NL: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'De ultieme aardtintcombinatie. Rijk en verfijnd.', best: true },
      { name: 'Donkerbruin', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Diep en sfeervol. Voor winterbruiloften in het bos.' },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Voegt lichtheid toe aan een donker, dramatisch pak.' },
      { name: 'Ossenbloed', hex: '#5A1E28', product: LOAFER_PRODUCTS.OXBLOOD, reason: 'Dieprood en groen — verfijnd en seizoensgebonden.' },
    ]
  },
  burgundy: {
    EN: [
      { name: 'Dark Brown', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Complementary warmth without competing with the suit.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Brightens the ensemble with a lighter accent.' },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'A warm middle ground. Never wrong.' },
      { name: 'Black', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'High contrast, high drama. Very formal.' },
    ],
    DE: [
      { name: 'Dunkelbraun', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Komplementäre Wärme, ohne mit dem Anzug zu konkurrieren.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Hellt das Ensemble mit einem leichteren Akzent auf.' },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Ein warmer Mittelweg. Nie falsch.' },
      { name: 'Schwarz', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'Hoher Kontrast, hohe Dramatik. Sehr formell.' },
    ],
    NL: [
      { name: 'Donkerbruin', hex: '#4A3222', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Complementaire warmte zonder te concurreren met het pak.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Fleurt het ensemble op met een lichter accent.' },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Een warme middenweg. Nooit fout.' },
      { name: 'Zwart', hex: '#1A1A1A', product: LOAFER_PRODUCTS.BLACK, reason: 'Hoog contrast, veel drama. Heel formeel.' },
    ]
  },
  lightblue: {
    EN: [
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Breezy and sophisticated. A summer wedding dream.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Adds depth and warmth to the cool blue.' },
      { name: 'Light Brown', hex: '#8B7355', product: LOAFER_PRODUCTS.LIGHT_BROWN, reason: 'Earthy and grounded against the airy blue.' },
      { name: 'Cream', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Soft and romantic for outdoor celebrations.' },
    ],
    DE: [
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Luftig und anspruchsvoll. Ein Traum für Sommerhochzeiten.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Verleiht dem kühlen Blau Tiefe und Wärme.' },
      { name: 'Hellbraun', hex: '#8B7355', product: LOAFER_PRODUCTS.LIGHT_BROWN, reason: 'Erdig und geerdet gegen das luftige Blau.' },
      { name: 'Creme', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Weich und romantisch für Feiern im Freien.' },
    ],
    NL: [
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Luchtig en verfijnd. Een droom voor zomerbruiloften.', best: true },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Voegt diepte en warmte toe aan het koele blauw.' },
      { name: 'Lichtbruin', hex: '#8B7355', product: LOAFER_PRODUCTS.LIGHT_BROWN, reason: 'Aards en verankerd tegen het luchtige blauw.' },
      { name: 'Crème', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Zacht en romantisch voor feesten buiten.' },
    ]
  },
  brown: {
    EN: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Tonal mastery. Similar but distinct — very elegant.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Lighter contrast within the same warm family.' },
      { name: 'Cream', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Opens up a darker brown suit with lightness.' },
      { name: 'Dark Brown', hex: '#3A2A1A', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Near-monochrome richness for the boldly styled.' },
    ],
    DE: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Tonale Meisterschaft. Ähnlich, aber verschieden – sehr elegant.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Leichterer Kontrast innerhalb derselben warmen Familie.' },
      { name: 'Creme', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Lockert einen dunkleren braunen Anzug mit Leichtigkeit auf.' },
      { name: 'Dunkelbraun', hex: '#3A2A1A', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Fast monochrome Reichhaltigkeit für Mutige.' },
    ],
    NL: [
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Tonale meesterschap. Vergelijkbaar maar onderscheidend — heel elegant.', best: true },
      { name: 'Tan', hex: '#C4A777', product: LOAFER_PRODUCTS.TAN, reason: 'Lichter contrast binnen dezelfde warme familie.' },
      { name: 'Crème', hex: '#DED0B8', product: LOAFER_PRODUCTS.CREAM, reason: 'Fleurt een donkerder bruin pak op met lichtheid.' },
      { name: 'Donkerbruin', hex: '#3A2A1A', product: LOAFER_PRODUCTS.DARK_BROWN, reason: 'Bijna monochrome rijkdom voor de moedig gestylde.' },
    ]
  },
  white: {
    EN: [
      { name: 'Light Tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Whisper-soft. The most elegant match for white.', best: true },
      { name: 'Cream', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Near-invisible transition. Ultra refined.' },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'A warm anchor that gives the look direction.' },
      { name: 'Sand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'Barely there. Like walking on clouds.' },
    ],
    DE: [
      { name: 'Helles Tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Flüsterleise. Die eleganteste Ergänzung für Weiß.', best: true },
      { name: 'Creme', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Fast unsichtbarer Übergang. Ultra raffiniert.' },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Ein warmer Anker, der dem Look Richtung gibt.' },
      { name: 'Sand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'Kaum vorhanden. Wie auf Wolken gehen.' },
    ],
    NL: [
      { name: 'Licht tan', hex: '#D4B896', product: LOAFER_PRODUCTS.LIGHT_TAN, reason: 'Fluisterzacht. De meest elegante match voor wit.', best: true },
      { name: 'Crème', hex: '#E2D5BC', product: LOAFER_PRODUCTS.CREAM, reason: 'Bijna onzichtbare overgang. Ultra verfijnd.' },
      { name: 'Cognac', hex: '#8B5A2B', product: LOAFER_PRODUCTS.COGNAC, reason: 'Een warm anker dat de look richting geeft.' },
      { name: 'Zand', hex: '#C8B89A', product: LOAFER_PRODUCTS.SAND, reason: 'Nauwelijks aanwezig. Alsof je op wolken loopt.' },
    ]
  },
};

const STYLE_TIPS: Record<string, string[]> = {
  navy: [
    'Cognac or tan loafers are your go-to for navy. This is the power pairing of menswear.',
    'Match your belt leather to your loafer colour for a polished finish.',
    'For evening receptions, lean darker — dark brown or burgundy.',
    'No-show socks or a flash of patterned ankle add a modern touch.',
  ],
  midnight: [
    'Midnight blue is slightly more formal than navy — keep loafers refined.',
    'Cognac remains king here, but dark brown edges into black-tie territory.',
    'Pair with a pocket square that echoes the warmth of your shoe leather.',
  ],
  charcoal: [
    'Charcoal is incredibly versatile — nearly any brown leather works.',
    'Avoid overly pale loafers; medium-to-dark tones maintain the suit\'s gravitas.',
    'A burgundy loafer adds colour without shouting. Ideal for creative grooms.',
  ],
  black: [
    'Black suit, black shoes — it\'s the rule for a reason.',
    'If the wedding is less formal, you can experiment with very dark brown.',
    'Patent or high-shine leather elevates the look for evening celebrations.',
  ],
  lightgrey: [
    'Light grey begs for lighter shoes. Think tan, sand, or cream.',
    'This is a summer suit — let your loafers breathe with lighter tones.',
    'Avoid heavy, dark shoes. They\'ll look disconnected and heavy.',
  ],
  grey: [
    'Medium grey is the ultimate chameleon — it works with almost every loafer shade.',
    'Cognac is the safest and most elegant bet for any time of day.',
    'For autumn, try burgundy or darker browns for a seasonal touch.',
  ],
  beige: [
    'Beige loves warm companions. Chocolate, cognac, and caramel all sing.',
    'Consider a suede loafer for texture contrast against the smooth suit.',
    'Avoid black shoes with beige — the contrast is too stark and reads disjointed.',
  ],
  sand: [
    'Sand suits are inherently relaxed — your loafer should match that mood.',
    'Suede over leather here. It\'s the natural choice for this fabric tone.',
    'Think Mediterranean: warm, sun-drenched, effortless.',
  ],
  tan: [
    'Tan suits work best with shoes in the same warm colour family.',
    'Dark brown creates sophisticated contrast; cream keeps things airy.',
    'Best suited to outdoor and daytime celebrations.',
  ],
  cream: [
    'Cream is delicate — keep your shoe tones soft and close.',
    'This is a no-dark-shoes zone. Stay within light browns and tans.',
    'Perfect for beach and destination weddings. Embrace the lightness.',
  ],
  olive: [
    'Olive and tan leather is a classic earth-tone combination from Italian tailoring.',
    'Suede loafers complement the organic feel of an olive suit beautifully.',
    'Keep the overall palette warm and natural — no bright accents needed.',
  ],
  forest: [
    'Forest green is dramatic — ground it with warm, rich leather.',
    'Cognac and dark brown are your allies here.',
    'Perfect for woodland or autumn weddings with an earthy colour scheme.',
  ],
  burgundy: [
    'Let the suit be the star. Choose neutral, understated loafer tones.',
    'Dark brown is the safest partner — it supports without competing.',
    'Avoid red-toned shoes that clash with the suit\'s own red notes.',
  ],
  lightblue: [
    'Light blue and tan is the ultimate summer wedding combination.',
    'Keep everything light and airy — heavy shoes will weigh down the look.',
    'A woven or braided leather loafer adds texture and interest.',
  ],
  brown: [
    'Tonal dressing at its finest. Stay in the brown family for cohesion.',
    'A lighter loafer creates contrast; a similar shade creates flow.',
    'Suede or nubuck loafers pair beautifully with brown cotton or linen suits.',
  ],
  white: [
    'White suits demand the lightest, softest shoe tones.',
    'Think cream, nude, or pale tan. Nothing heavy.',
    'This is the ultimate destination wedding look — keep it effortless.',
  ],
};

const STYLE_TIPS_DE: Record<string, string[]> = {
  navy: [
    'Cognac- oder Tan-Loafer sind Ihre erste Wahl für Navy. Dies ist die Power-Kombination der Herrenmode.',
    'Stimmen Sie das Leder Ihres Gürtels auf die Farbe Ihrer Loafer ab für ein perfektes Finish.',
    'Für Abendempfänge wählen Sie dunklere Töne – Dunkelbraun oder Burgunder.',
    'Unsichtbare Socken oder ein Akzent durch gemusterte Knöchel verleihen einen modernen Touch.',
  ],
  midnight: [
    'Mitternachtsblau ist etwas formeller als Navy – halten Sie die Loafer raffiniert.',
    'Cognac bleibt hier König, aber Dunkelbraun nähert sich dem Black-Tie-Bereich an.',
    'Kombinieren Sie es mit einem Einstecktuch, das die Wärme Ihres Schuhleders widerspiegelt.',
  ],
  charcoal: [
    'Anthrazit ist unglaublich vielseitig – fast jedes braune Leder funktioniert.',
    'Vermeiden Sie zu helle Loafer; mittlere bis dunkle Töne bewahren die Seriosität des Anzugs.',
    'Ein burgunderfarbener Loafer setzt Farbakzente, ohne aufdringlich zu sein. Ideal für kreative Bräutigame.',
  ],
  black: [
    'Schwarzer Anzug, schwarze Schuhe – diese Regel hat ihren Grund.',
    'Wenn die Hochzeit weniger formell ist, können Sie mit sehr dunklem Braun experimentieren.',
    'Lackleder oder hochglänzendes Leder wertet den Look für Abendfeiern auf.',
  ],
  lightgrey: [
    'Hellgrau verlangt nach helleren Schuhen. Denken Sie an Tan, Sand oder Creme.',
    'Dies ist ein Sommeranzug – lassen Sie Ihre Loafer mit helleren Tönen atmen.',
    'Vermeiden Sie schwere, dunkle Schuhe. Sie wirken deplatziert und schwerfällig.',
  ],
  grey: [
    'Mittelgrau ist das ultimative Chamäleon – es funktioniert mit fast jedem Loafer-Ton.',
    'Cognac ist die sicherste und eleganteste Wahl für jede Tageszeit.',
    'Für den Herbst probieren Sie Burgunder oder dunklere Brauntöne für eine saisonale Note.',
  ],
  beige: [
    'Beige liebt warme Begleiter. Schokolade, Cognac und Karamell harmonieren wunderbar.',
    'Ziehen Sie einen Wildleder-Loafer für einen Texturkontrast zum glatten Anzug in Betracht.',
    'Vermeiden Sie schwarze Schuhe zu Beige – der Kontrast ist zu hart und wirkt unharmonisch.',
  ],
  sand: [
    'Sandfarbene Anzüge sind von Natur aus entspannt – Ihr Loafer sollte diese Stimmung widerspiegeln.',
    'Wildleder statt Glattleder ist hier die natürliche Wahl für diesen Stoffton.',
    'Denken Sie mediterran: warm, sonnendurchflutet, mühelos.',
  ],
  tan: [
    'Tan-Anzüge funktionieren am besten mit Schuhen aus derselben warmen Farbfamilie.',
    'Dunkelbraun erzeugt einen anspruchsvollen Kontrast; Creme hält die Dinge luftig.',
    'Am besten geeignet für Feiern im Freien und am Tag.',
  ],
  cream: [
    'Creme ist empfindlich – halten Sie Ihre Schuhtöne weich und nah am Anzugton.',
    'Dies ist eine Zone ohne dunkle Schuhe. Bleiben Sie bei hellen Brauntönen und Tan.',
    'Perfekt für Strand- und Destination-Hochzeiten. Genießen Sie die Leichtigkeit.',
  ],
  olive: [
    'Oliv und Tan-Leder ist eine klassische Erdtöne-Kombination aus der italienischen Schneiderei.',
    'Wildleder-Loafer ergänzen das organische Gefühl eines oliven Anzugs wunderbar.',
    'Halten Sie die gesamte Palette warm und natürlich – keine grellen Akzente nötig.',
  ],
  forest: [
    'Waldgrün ist dramatisch – erden Sie es mit warmem, reichhaltigem Leder.',
    'Cognac und Dunkelbraun sind hier Ihre Verbündeten.',
    'Perfekt für Wald- oder Herbsthochzeiten mit einem erdigen Farbschema.',
  ],
  burgundy: [
    'Lassen Sie den Anzug der Star sein. Wählen Sie neutrale, dezente Loafer-Töne.',
    'Dunkelbraun ist der sicherste Partner – es unterstützt, ohne zu konkurrieren.',
    'Vermeiden Sie rotstichige Schuhe, die mit den Rottönen des Anzugs konkurrieren.',
  ],
  lightblue: [
    'Hellblau und Tan ist die ultimative Kombination für Sommerhochzeiten.',
    'Halten Sie alles leicht und luftig – schwere Schuhe würden den Look beschweren.',
    'Ein gewebter oder geflochtener Leder-Loafer verleiht Textur und Interesse.',
  ],
  brown: [
    'Tonale Meisterschaft. Bleiben Sie für Kohärenz in der braunen Farbfamilie.',
    'Ein hellerer Loafer erzeugt Kontrast; ein ähnlicher Ton erzeugt Fluss.',
    'Wildleder- oder Nubuk-Loafer passen wunderbar zu braunen Baumwoll- oder Leinenanzügen.',
  ],
  white: [
    'Weiße Anzüge verlangen nach den hellsten, weichsten Schuhtönen.',
    'Denken Sie an Creme, Nude oder helles Tan. Nichts Schweres.',
    'Dies ist der ultimative Destination-Look – halten Sie ihn mühelos.',
  ],
};

const STYLE_TIPS_NL: Record<string, string[]> = {
  navy: [
    'Cognac of tan loafers zijn je go-to voor navy. Dit is de powercombi van herenmode.',
    'Stem het leer van je riem af op de kleur van je loafer voor een gepolijste afwerking.',
    'Voor avondrecepties ga je donkerder — donkerbruin of bordeaux.',
    'Onzichtbare sokken of een flits van een gedessineerde enkel geven een moderne touch.',
  ],
  midnight: [
    'Middernachtblauw is iets formeler dan navy — houd je loafers verfijnd.',
    'Cognac blijft hier koning, maar donkerbruin grenst aan black-tie-gebied.',
    'Combineer met een pochet dat de warmte van je schoenleer weerspiegelt.',
  ],
  charcoal: [
    'Antraciet is ongelooflijk veelzijdig — bijna elk bruin leer werkt.',
    'Vermijd te lichte loafers; middel- tot donkere tinten behouden de ernst van het pak.',
    'Een bordeaux loafer voegt kleur toe zonder te schreeuwen. Ideaal voor creatieve bruidegoms.',
  ],
  black: [
    'Zwart pak, zwarte schoenen — die regel bestaat niet voor niets.',
    'Als de bruiloft minder formeel is, kun je experimenteren met heel donkerbruin.',
    'Lakleer of hoogglansleer tilt de look naar een hoger niveau voor avondfeesten.',
  ],
  lightgrey: [
    'Lichtgrijs vraagt om lichtere schoenen. Denk aan tan, zand of crème.',
    'Dit is een zomerpak — laat je loafers ademen met lichtere tinten.',
    'Vermijd zware, donkere schoenen. Ze ogen losstaand en zwaar.',
  ],
  grey: [
    'Middengrijs is de ultieme kameleon — het werkt met bijna elke loafertint.',
    'Cognac is de veiligste en meest elegante keuze voor elk moment van de dag.',
    'Voor de herfst kun je bordeaux of donkere bruintinten proberen voor een seizoenstouch.',
  ],
  beige: [
    'Beige houdt van warme metgezellen. Chocolade, cognac en karamel klinken allemaal prachtig.',
    'Overweeg een suède loafer voor textuurcontrast met het gladde pak.',
    'Vermijd zwarte schoenen bij beige — het contrast is te hard en oogt onsamenhangend.',
  ],
  sand: [
    'Zandkleurige pakken zijn van nature relaxed — je loafer moet die sfeer weerspiegelen.',
    'Suède boven leer hier. Het is de natuurlijke keuze voor deze stoftint.',
    'Denk mediterraan: warm, zondoorstraald, moeiteloos.',
  ],
  tan: [
    'Tan pakken werken het best met schoenen in dezelfde warme kleurenfamilie.',
    'Donkerbruin creëert verfijnd contrast; crème houdt het luchtig.',
    'Het best geschikt voor buitenfeesten en dagvieringen.',
  ],
  cream: [
    'Crème is delicaat — houd je schoentinten zacht en dichtbij.',
    'Dit is een zone zonder donkere schoenen. Blijf bij lichte bruintinten en tan.',
    'Perfect voor strand- en bestemmingsbruiloften. Omarm de lichtheid.',
  ],
  olive: [
    'Olijf en tan leer is een klassieke aardtintcombinatie uit de Italiaanse kleermakerij.',
    'Suède loafers vullen het organische gevoel van een olijfkleurig pak prachtig aan.',
    'Houd het totale palet warm en natuurlijk — geen felle accenten nodig.',
  ],
  forest: [
    'Bosgroen is dramatisch — veranker het met warm, rijk leer.',
    'Cognac en donkerbruin zijn hier je bondgenoten.',
    'Perfect voor bos- of herfstbruiloften met een aards kleurenpalet.',
  ],
  burgundy: [
    'Laat het pak de ster zijn. Kies neutrale, ingetogen loafertinten.',
    'Donkerbruin is de veiligste partner — het ondersteunt zonder te concurreren.',
    'Vermijd roodgetinte schoenen die botsen met de eigen rode tinten van het pak.',
  ],
  lightblue: [
    'Lichtblauw en tan is de ultieme zomerbruiloftcombinatie.',
    'Houd alles licht en luchtig — zware schoenen trekken de look naar beneden.',
    'Een geweven of gevlochten leren loafer voegt textuur en interesse toe.',
  ],
  brown: [
    'Tonaal kleden op zijn best. Blijf in de bruine familie voor samenhang.',
    'Een lichtere loafer creëert contrast; een vergelijkbare tint creëert flow.',
    'Suède of nubuck loafers passen prachtig bij bruine katoenen of linnen pakken.',
  ],
  white: [
    'Witte pakken vragen om de lichtste, zachtste schoentinten.',
    'Denk aan crème, nude of licht tan. Niets zwaars.',
    'Dit is de ultieme bestemmingsbruiloft-look — houd het moeiteloos.',
  ],
};

function hexToHSL(hex: string) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function findClosestCategory(hex: string) {
  const hsl = hexToHSL(hex);
  const { h, s, l } = hsl;

  if (l > 88) return 'white';
  if (l < 15) return 'black';
  if (s < 8) {
    if (l < 35) return 'charcoal';
    if (l < 55) return 'grey';
    return 'lightgrey';
  }
  if ((h < 15 || h > 340) && l < 45) return 'burgundy';
  if (h >= 15 && h < 40 && l < 45) return 'brown';
  if (h >= 15 && h < 40 && l >= 45) return 'tan';
  if (h >= 40 && h < 55 && l >= 60) return 'sand';
  if (h >= 40 && h < 55) return 'beige';
  if (h >= 55 && h < 70 && l >= 60) return 'cream';
  if (h >= 55 && h < 70) return 'beige';
  if (h >= 70 && h < 100) return 'olive';
  if (h >= 100 && h < 170) return 'forest';
  if (h >= 170 && h < 210) return 'lightblue';
  if (h >= 210 && h < 250) {
    if (l < 25) return 'midnight';
    if (l < 50) return 'navy';
    return 'lightblue';
  }
  if (h >= 250 && h < 340) {
    if (l < 35) return 'midnight';
    return 'navy';
  }
  return 'grey';
}

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 0.299 + g * 0.587 + b * 0.114) > 160;
}

export default function SuitMatcher({ lang }: SuitMatcherProps) {
  const [selectedSuit, setSelectedSuit] = useState<any>(null);
  const [customColor, setCustomColor] = useState('#4A4A4A');
  const [codeCopied, setCodeCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('GROOM10');
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch {
      // clipboard unavailable — silent fail
    }
  };

  const handleSuitSelect = (suit: any) => {
    setSelectedSuit(suit);
    setCustomColor(suit.hex);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    setCustomColor(hex);
    setSelectedSuit({ name: { EN: 'Custom Shade', DE: 'Eigener Farbton', NL: 'Eigen Kleurtint' }, hex, category: findClosestCategory(hex) });
  };

  const currentCategory = selectedSuit?.category || findClosestCategory(customColor);
  const matches = LOAFER_MATCHES[currentCategory]?.[lang] || LOAFER_MATCHES.grey[lang];
  const bestMatch = matches.find((m: any) => m.best) || matches[0];
  const tips = lang === 'EN' ? STYLE_TIPS[currentCategory] : lang === 'DE' ? STYLE_TIPS_DE[currentCategory] : STYLE_TIPS_NL[currentCategory];

  const t = {
    EN: {
      label: "Wedding Style Guide",
      title: "The Suit Matcher",
      subtitle: "Select your suit colour and we'll match the perfect loafer. Because a gentleman's shoes should always speak the same language as his suit.",
      choose: "Choose Your Suit",
      chooseSub: "Select a classic colour or pick your exact shade below",
      custom: "Or pick your exact shade:",
      yourSuit: "Your Suit",
      bestLoafer: "Best Match",
      recTitle: "Recommended Loafer Colours",
      recSub: `Top picks for your ${selectedSuit?.name[lang].toLowerCase() || 'suit'}`,
      tipsTitle: "Styling Notes",
      shopNow: "Shop Now",
      viewCollection: "View Collection",
      promoLabel: "Exclusive for Grooms",
      promoText: "10% off with code",
      promoCopied: "Code copied",
      promoCopy: "Copy code",
      footer: "The Groom Code — Dress with intention on the day that matters most."
    },
    DE: {
      label: "Hochzeits-Stil-Guide",
      title: "Der Anzug-Matcher",
      subtitle: "Wählen Sie Ihre Anzugfarbe und wir finden den perfekten Loafer. Denn die Schuhe eines Gentlemans sollten immer dieselbe Sprache sprechen wie sein Anzug.",
      choose: "Wählen Sie Ihren Anzug",
      chooseSub: "Wählen Sie eine klassische Farbe oder bestimmen Sie unten Ihren exakten Farbton",
      custom: "Oder wählen Sie Ihren exakten Farbton:",
      yourSuit: "Ihr Anzug",
      bestLoafer: "Beste Wahl",
      recTitle: "Empfohlene Loafer-Farben",
      recSub: `Top-Empfehlungen für Ihren ${selectedSuit?.name[lang].toLowerCase() || 'Anzug'}`,
      tipsTitle: "Styling-Hinweise",
      shopNow: "Jetzt Shoppen",
      viewCollection: "Kollektion ansehen",
      promoLabel: "Exklusiv für Bräutigame",
      promoText: "10% Rabatt mit Code",
      promoCopied: "Code kopiert",
      promoCopy: "Code kopieren",
      footer: "The Groom Code — Kleiden Sie sich mit Bedacht an dem Tag, der am meisten zählt."
    },
    NL: {
      label: "Bruiloft Stijlgids",
      title: "De Pak Matcher",
      subtitle: "Selecteer je pakkleur en wij matchen de perfecte loafer. Want de schoenen van een gentleman moeten altijd dezelfde taal spreken als zijn pak.",
      choose: "Selecteer Je Pak",
      chooseSub: "Kies uit ons samengestelde palet of kies hieronder je exacte tint",
      custom: "Of kies een kleur:",
      yourSuit: "Jouw Pak",
      bestLoafer: "Beste Match",
      recTitle: "Aanbevolen Loaferkleuren",
      recSub: `Topkeuzes voor je ${selectedSuit?.name[lang].toLowerCase() || 'pak'}`,
      tipsTitle: "Stijltips",
      shopNow: "Shop Nu",
      viewCollection: "Bekijk Collectie",
      promoLabel: "Exclusief voor Grooms",
      promoText: "10% korting met code",
      promoCopied: "Code gekopieerd",
      promoCopy: "Kopieer code",
      footer: "The Groom Code — Kleed je met intentie op de dag die er het meest toe doet."
    }
  }[lang];

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center bg-gradient-to-b from-brand-cream to-brand-offwhite overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">{t.label}</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            The Suit <span className="italic text-brand-gold">Matcher</span>
          </h1>
          <p className="text-sm md:text-base opacity-60 font-light leading-relaxed max-w-lg mx-auto">
            {t.subtitle}
          </p>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-12" />
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif mb-2">{t.choose}</h2>
          <p className="text-xs opacity-40 uppercase tracking-widest">{t.chooseSub}</p>
        </div>

        {/* Suit Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-12">
          {SUITS.map((suit, i) => (
            <button
              key={i}
              onClick={() => handleSuitSelect(suit)}
              className={`group relative flex flex-col items-center transition-all duration-500 ${selectedSuit?.hex === suit.hex ? 'scale-105' : 'hover:scale-105'}`}
            >
              <div 
                className={`w-full aspect-square rounded-xl shadow-lg mb-3 flex items-center justify-center transition-all duration-500 border-2 ${selectedSuit?.hex === suit.hex ? 'border-brand-gold' : 'border-transparent'}`}
                style={{ backgroundColor: suit.hex }}
              >
                {selectedSuit?.hex === suit.hex && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Check size={16} className="text-brand-gold" />
                  </motion.div>
                )}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity">{suit.name[lang]}</span>
            </button>
          ))}
        </div>

        {/* Custom Picker */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-white rounded-2xl border border-brand-black/5 shadow-sm mb-20">
          <label className="text-xs uppercase tracking-widest font-bold opacity-60">{t.custom}</label>
          <div className="flex items-center gap-4">
            <input 
              type="color" 
              value={customColor}
              onChange={handleCustomColorChange}
              className="w-12 h-12 rounded-full border-2 border-brand-black/10 cursor-pointer overflow-hidden p-0 bg-transparent"
            />
            <span className="font-mono text-xs opacity-40 uppercase tracking-widest">{customColor}</span>
          </div>
        </div>

        {/* Results */}
        <AnimatePresence>
          {selectedSuit && (
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Match Display */}
              <div className="grid md:grid-cols-[1fr_auto_1fr] items-center bg-white rounded-3xl shadow-2xl overflow-hidden mb-20">
                <div className="p-12 text-center border-b md:border-b-0 md:border-r border-brand-black/5">
                  <div className="w-32 h-32 rounded-2xl mx-auto mb-6 shadow-inner" style={{ backgroundColor: selectedSuit.hex }} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-2 block">{t.yourSuit}</span>
                  <h3 className="text-2xl font-serif">{selectedSuit.name[lang]}</h3>
                </div>
                
                <div className="flex flex-col items-center justify-center p-8 text-brand-gold">
                  <div className="w-px h-12 bg-brand-gold/20 mb-4" />
                  <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center">
                    <ChevronDown size={20} className="md:-rotate-90" />
                  </div>
                  <div className="w-px h-12 bg-brand-gold/20 mt-4" />
                </div>

                <div className="p-12 text-center border-t md:border-t-0 md:border-l border-brand-black/5">
                  <div className="w-32 h-32 rounded-2xl mx-auto mb-6 overflow-hidden shadow-lg bg-brand-cream flex items-center justify-center">
                    <img src={bestMatch.product.image} alt={bestMatch.product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-2 block">{t.bestLoafer}</span>
                  <h3 className="text-2xl font-serif mb-6">{bestMatch.product.name}</h3>
                  <div className="max-w-[280px] mx-auto mb-6 p-4 rounded-xl border border-brand-gold/30 bg-gradient-to-br from-brand-champagne/40 via-white to-brand-champagne/20">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold block mb-2">{t.promoLabel}</span>
                    <p className="text-[11px] opacity-60 font-light mb-3">{t.promoText}</p>
                    <button
                      onClick={handleCopyCode}
                      aria-label={codeCopied ? t.promoCopied : t.promoCopy}
                      className="w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-white border border-dashed border-brand-gold/50 hover:border-brand-gold hover:bg-brand-cream/50 transition-all group"
                    >
                      <span className="font-mono text-sm tracking-[0.2em] font-bold text-brand-black">GROOM10</span>
                      <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-brand-gold">
                        {codeCopied ? (
                          <>
                            <Check size={12} />
                            {t.promoCopied}
                          </>
                        ) : (
                          <>
                            <Copy size={12} className="group-hover:scale-110 transition-transform" />
                            {t.promoCopy}
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-3 max-w-[240px] mx-auto">
                    <a 
                      href={bestMatch.product.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-brand-black text-white text-[10px] uppercase tracking-widest font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors"
                    >
                      {t.shopNow} <ChevronRight size={12} />
                    </a>
                    <Link 
                      to={`/${lang.toLowerCase()}/collection`}
                      className="w-full border border-brand-black/10 text-brand-black text-[10px] uppercase tracking-widest font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-cream transition-colors"
                    >
                      {t.viewCollection}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Recommendations Grid */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif mb-2">{t.recTitle}</h2>
                <p className="text-xs opacity-40 uppercase tracking-widest">{t.recSub}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {matches.map((match: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-white p-8 rounded-2xl shadow-sm border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col ${match.best ? 'border-brand-gold' : 'border-transparent'}`}
                  >
                    {match.best && (
                      <span className="text-[8px] uppercase tracking-widest font-bold bg-brand-gold text-white px-3 py-1 rounded-full mb-6 self-start">Top Pick</span>
                    )}
                    <div className="w-full aspect-square rounded-xl mb-6 overflow-hidden bg-brand-cream flex items-center justify-center shadow-inner">
                      <img src={match.product.image} alt={match.product.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" referrerPolicy="no-referrer" />
                    </div>
                    <h4 className="text-xl font-serif mb-1">{match.name}</h4>
                    <p className="font-mono text-[10px] opacity-30 mb-4 uppercase tracking-widest">{match.product.name}</p>
                    <p className="text-xs opacity-60 font-light leading-relaxed mb-8 flex-grow">{match.reason}</p>
                    <div className="flex flex-col gap-3">
                      <a 
                        href={match.product.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-brand-black text-white text-[10px] uppercase tracking-widest font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors"
                      >
                        {t.shopNow} <ChevronRight size={12} />
                      </a>
                      <Link 
                        to={`/${lang.toLowerCase()}/collection`}
                        className="w-full border border-brand-black/10 text-brand-black text-[10px] uppercase tracking-widest font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-cream transition-colors"
                      >
                        {t.viewCollection}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Style Tips */}
              <div className="bg-brand-cream/50 p-12 rounded-3xl border border-brand-gold/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white">
                    <Info size={20} />
                  </div>
                  <h3 className="text-2xl font-serif">{t.tipsTitle}</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-6">
                  {tips?.map((tip: string, i: number) => (
                    <li key={i} className="flex gap-4 text-sm opacity-70 font-light leading-relaxed">
                      <span className="text-brand-gold font-serif text-xl leading-none">✦</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-20 border-t border-brand-black/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 italic">{t.footer}</p>
      </footer>
    </div>
  );
}
