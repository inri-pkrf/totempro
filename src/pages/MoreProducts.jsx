import React from 'react';
import FullscreenButton from '../components/totem/FullscreenButton';
import { Users, GraduationCap, Disc, Copy, Package, Brain, HelpCircle, Clock, Vote, Compass } from 'lucide-react';

const DIGITAL_PRODUCTS = [
  { title: 'סקר איומים', subtitle: 'סקר על האיומים ברשויות השונות', icon: Vote, url: 'https://threat-survey-58n9.vercel.app/' },
  { title: 'החברה הישראלית', subtitle: 'שיעור דיגיטלי על רבדי החברה הישראלית ומרכיביה', icon: Users, url: 'https://inri-pkrf.github.io/israeli-society-copy/' },
  { title: 'הצגת המכללה', subtitle: 'לומדת היכרות מעמיקה עם המכללה ומרכיביה השונים', icon: GraduationCap, url: 'https://inri-pkrf.github.io/taz-michlala/' },
  { title: 'מצפן החלטות', subtitle: 'כלי עזר לקביעת מדיניות התגוננות לאוכלוסייה', icon: Compass, url: null },
];

const GAMES = [
  { title: 'משחק 1', subtitle: 'משחק אינטראקטיבי - גלגל העורף הישראלי', icon: Disc, url: 'https://inri-pkrf.github.io/wheel-game/' },
  { title: 'משחק 2', subtitle: 'משחק אינטראקטיבי - התאמת לוגואים וסמלים', icon: Copy, url: 'https://inri-game2.base44.app' },
  { title: 'משחק 3', subtitle: 'משחק אינטראקטיבי - מבצע ציוד והצלה', icon: Package, url: 'https://inri-pkrf.github.io/Equipment-Game-/' },
  { title: 'משחק 4', subtitle: 'משחק הזיכרון האינטראקטיבי לאימון יכולות', icon: Brain, url: 'https://game4.base44.app' },
  { title: 'משחק 5', subtitle: 'טריוויה אינטראקטיבית על מדיניות ההתגוננות', icon: HelpCircle, url: 'https://defend-smart-ready.base44.app' },
  { title: 'משחק 6', subtitle: 'לוח הגורלות - תחרות בין קבוצות בנושא מדיניות ההתגוננות', icon: HelpCircle, url: 'https://defend-policy-play.base44.app' },
  { title: 'משחק 7', subtitle: 'אמת או מיתוס - מדיניות ההתגוננות', icon: HelpCircle, url: 'https://fact-myth-quest.base44.app' },
  { title: 'משחק 8', subtitle: 'דגים הנחיות', icon: HelpCircle, url: 'https://safe-catch-game.base44.app' },

];
const COMING_SOON = Array.from({ length: 10 }, (_, i) => ({
  title: `מוצר ${i + 8}`,
  subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות',
  icon: Clock,
  url: null,
}));

function ProductCard({ product }) {
  const Icon = product.icon;
  return (
    <button
      onClick={() => product.url && window.open(product.url, '_blank')}
      className="product-card flex flex-col items-center justify-center text-center rounded-2xl transition-all duration-200 active:scale-95 overflow-hidden group aspect-square w-full"
      style={{
        padding: '0.6vh 5%',
        gap: '0.3vh',
        boxShadow: '0 6px 20px rgba(0,58,87,0.3), 0 2px 8px rgba(0,0,0,0.2)',
        borderBottom: '2px solid rgba(0,0,0,0.12)'
      }}
    >
      <Icon className="text-white group-active:text-[#003A57] transition-colors duration-150" style={{ width: 'clamp(22px, 3.2vh, 38px)', height: 'clamp(22px, 3.2vh, 38px)' }} strokeWidth={1.5} />
      <h3 className="font-assistant font-bold text-white group-active:text-[#003A57] leading-tight transition-colors duration-150" style={{ fontSize: 'clamp(0.78rem, 1.5vh, 1rem)' }}>
        {product.title}
      </h3>
      <p className="font-assistant text-white/75 group-active:text-gray-500 leading-tight transition-colors duration-150" style={{ fontSize: 'clamp(0.62rem, 1.1vh, 0.82rem)' }}>
        {product.subtitle}
      </p>
    </button>
  );
}

function ProductSection({ title, products, style }) {
  return (
    <div
      className="rounded-2xl flex flex-col"
      style={{ ...style, padding: '1vh 1.5%' }}
    >
      <h2 className="font-karantina text-[#003A57] font-normal text-center leading-none" style={{ fontSize: 'clamp(1.1rem, 2.5vh, 2.2rem)', marginBottom: '0.8vh' }}>
        {title}
      </h2>
      <div
        className="grid w-full mx-auto"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1vh 1%',
          maxWidth: '1100px'
        }}
      >
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function MoreProducts({ onBack, onOpenCarousel }) {
  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col bg-white"
      dir="rtl">

      {/* Decorations */}
      <div className="absolute top-0 left-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/e388f9496_Artboard28copy32.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/9fbae749a_Artboard28copy21.png" alt="" className="w-full" style={{ transform: 'rotate(180deg)' }} />
      </div>

      {/* Header: logo + back */}
      <div className="flex justify-between items-center flex-shrink-0 relative z-10" style={{ padding: '1.2vh 4%' }}>
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
          alt="Logo"
          style={{ height: 'clamp(40px, 6vh, 70px)' }}
          className="object-contain" />
        <FullscreenButton
          className="bg-white/40 hover:bg-white/50 shadow-lg"
          style={{ width: 'clamp(45px, 6vh, 65px)', height: 'clamp(45px, 6vh, 65px)', color: '#003A57' }}
        />
      </div>

      {/* Title */}
      <div className="text-center z-10 flex-shrink-0" style={{ marginTop: '0.3vh' }}>
        <h1 className="font-karantina text-[#003A57] font-normal leading-none"
          style={{ fontSize: 'clamp(1.8rem, 5vh, 5rem)' }}>
          עוד מוצרים דיגיטליים
        </h1>
      </div>

      {/* Products - fits screen, no scroll */}
      <div className="flex-1 min-h-0 relative z-10 flex flex-col overflow-hidden" style={{ padding: '1vh 3% 1.5vh', gap: '1vh' }}>
        <ProductSection
          title="מוצרים דיגיטליים"
          products={DIGITAL_PRODUCTS}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 126, 189, 0.03), rgba(0, 58, 87, 0.02))',
            border: '2px dashed rgba(0,58,87,0.12)',
            '--card-grad-from': '#003A57',
            '--card-grad-to': '#007FBD',
          }}
        />
        <ProductSection
          title="משחקים"
          products={GAMES}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 126, 189, 0.03), rgba(0, 58, 87, 0.02))',
            border: '2px dashed rgba(0,58,87,0.12)',
            '--card-grad-from': '#0f9268ff',
            '--card-grad-to': '#38B38C',
          }}
        />
        <ProductSection
          title="בקרוב"
          products={COMING_SOON}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 126, 189, 0.03), rgba(0, 58, 87, 0.02))',
            border: '2px dashed rgba(0,58,87,0.12)',
            '--card-grad-from': '#b17f09ff',
            '--card-grad-to': '#d49d1cff',
          }}
        />
      </div>

    </div>
  );
}