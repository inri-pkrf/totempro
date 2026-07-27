import React from 'react';
import FullscreenButton from '../components/totem/FullscreenButton';
import { Users, GraduationCap, Disc, Copy, Package, Brain, HelpCircle, Clock } from 'lucide-react';

const DIGITAL_PRODUCTS = [
  { title: 'החברה הישראלית', subtitle: 'שיעור דיגיטלי על רבדי החברה הישראלית ומרכיביה', icon: Users, url: 'https://inri-pkrf.github.io/israeli-society-copy/' },
  { title: 'הצגת המכללה', subtitle: 'לומדת היכרות מעמיקה עם המכללה ומרכיביה השונים', icon: GraduationCap, url: 'https://inri-pkrf.github.io/taz-michlala/' },
];

const GAMES = [
  { title: 'משחק 1', subtitle: 'משחק אינטראקטיבי - גלגל העורף הישראלי', icon: Disc, url: 'https://inri-pkrf.github.io/wheel-game/' },
  { title: 'משחק 2', subtitle: 'משחק אינטראקטיבי - התאמת לוגואים וסמלים', icon: Copy, url: 'https://inri-game2.base44.app' },
  { title: 'משחק 3', subtitle: 'משחק אינטראקטיבי - מבצע ציוד והצלה', icon: Package, url: 'https://inri-game3.base44.app' },
  { title: 'משחק 4', subtitle: 'משחק הזיכרון האינטראקטיבי לאימון יכולות', icon: Brain, url: 'https://game4.base44.app' },
  { title: 'משחק 5', subtitle: 'טריוויה אינטראקטיבית על מדיניות ההתגוננות', icon: HelpCircle, url: 'https://defend-smart-ready.base44.app' },
];

const COMING_SOON = Array.from({ length: 13 }, (_, i) => ({
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
        padding: '1.5vh 6%',
        gap: '0.6vh',
        boxShadow: '0 8px 32px rgba(0,58,87,0.35), 0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
        transform: 'perspective(800px) rotateX(2deg)',
        borderBottom: '3px solid rgba(0,0,0,0.15)'
      }}
    >
      <Icon className="text-white group-active:text-[#003A57] transition-colors duration-150" style={{ width: 'clamp(28px, 4vh, 48px)', height: 'clamp(28px, 4vh, 48px)' }} strokeWidth={1.5} />
      <h3 className="font-assistant font-bold text-white group-active:text-[#003A57] leading-tight transition-colors duration-150" style={{ fontSize: 'clamp(0.85rem, 1.8vh, 1.15rem)' }}>
        {product.title}
      </h3>
      <p className="font-assistant text-white/80 group-active:text-gray-500 leading-tight transition-colors duration-150" style={{ fontSize: 'clamp(0.7rem, 1.3vh, 0.9rem)' }}>
        {product.subtitle}
      </p>
    </button>
  );
}

function ProductSection({ title, products }) {
  return (
    <div className="mb-5">
      <h2 className="font-karantina text-[#003A57] font-normal text-center leading-none mb-3" style={{ fontSize: 'clamp(1.5rem, 4vh, 3.5rem)' }}>
        {title}
      </h2>
      <div
        className="grid w-full mx-auto"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '2.5vh 1.5%',
          maxWidth: '96%'
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
      <div className="flex justify-between items-center flex-shrink-0 relative z-10" style={{ padding: '1.5vh 4%' }}>
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
          alt="Logo"
          style={{ height: 'clamp(40px, 7vh, 75px)' }}
          className="object-contain" />
        <FullscreenButton
          className="bg-white/40 hover:bg-white/50 shadow-lg"
          style={{ width: 'clamp(45px, 7vh, 70px)', height: 'clamp(45px, 7vh, 70px)', color: '#003A57' }}
        />
      </div>

      {/* Title */}
      <div className="text-center z-10 flex-shrink-0" style={{ marginTop: '0.5vh' }}>
        <h1 className="font-karantina text-[#003A57] font-normal leading-none"
          style={{ fontSize: 'clamp(2rem, 6vh, 6rem)' }}>
          עוד מוצרים דיגיטליים
        </h1>
      </div>

      {/* Products content - scrollable */}
      <div className="flex-1 min-h-0 relative z-10 overflow-y-auto" style={{ padding: '2vh 4% 1vh' }}>
        <ProductSection title="מוצרים דיגיטליים" products={DIGITAL_PRODUCTS} />
        <ProductSection title="משחקים" products={GAMES} />
        <ProductSection title="בקרוב" products={COMING_SOON} />
      </div>

    </div>
  );
}