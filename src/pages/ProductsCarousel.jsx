import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import FullscreenButton from '../components/totem/FullscreenButton';
import NavButtons from '../components/totem/NavButtons';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

const DEFAULT_ICON = 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png';

const PRODUCTS = [
  { title: 'החברה הישראלית', subtitle: 'הכרת החברה ומרכיביה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/israeli-society-copy/' },
  { title: 'הצגת המכללה', subtitle: 'לומדת היכרות עם המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/know-college/' },
  { title: 'משחק 1', subtitle: 'משחק אינטראקטיבי גלגל העורף', icon: DEFAULT_ICON, url: 'https://inri-game1.base44.app' },
  { title: 'משחק 2', subtitle: 'משחק אינטראקטיבי התאמת לוגו', icon: DEFAULT_ICON, url: 'https://inri-game2.base44.app' },
  { title: 'משחק 3', subtitle: 'משחק אינטראקטיבי מבצע ציוד', icon: DEFAULT_ICON, url: 'https://inri-game3.base44.app' },
  { title: 'משחק 4', subtitle: 'משחק הזיכרון אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://game4.base44.app' },
  { title: 'מוצר 7', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 8', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 9', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 10', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 11', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 12', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 13', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 14', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 15', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 16', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 17', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 18', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 19', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 20', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null },
];

const CARD_BG = 'linear-gradient(135deg, #003A57, #007FBD)';

function PositionedCard({ product, position }) {
  const isCenter = position === 0;
  const scaleVal = isCenter ? 1 : 0.8;
  const opacityVal = isCenter ? 1 : 0.6;

  return (
    <motion.div
      layout
      className="flex flex-col items-center justify-start text-center rounded-2xl overflow-hidden flex-shrink-0"
      style={{
        width: isCenter ? 'min(55vw, 480px)' : 'min(28vw, 260px)',
        height: isCenter ? 'min(57vh, 480px)' : 'min(42vh, 370px)',
        padding: isCenter ? '3vh 6% 1.5vh' : '2vh 5% 1vh',
        gap: isCenter ? '0.6vh' : '0.4vh',
        background: CARD_BG,
        boxShadow: '0 8px 32px rgba(0,58,87,0.35), 0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
        transform: `perspective(800px) rotateX(2deg) scale(${scaleVal})`,
        borderBottom: '3px solid rgba(0,0,0,0.15)',
        pointerEvents: isCenter ? 'auto' : 'none',
        opacity: opacityVal,
      }}
    >
      <div className="flex items-center justify-center flex-shrink-0" style={{ width: isCenter ? 'clamp(50px, 8vh, 75px)' : 'clamp(35px, 5vh, 50px)', height: isCenter ? 'clamp(50px, 8vh, 75px)' : 'clamp(35px, 5vh, 50px)' }}>
        <img src={product.icon} alt="" className="w-full h-full object-contain brightness-0 invert" />
      </div>
      <h3 className="font-assistant font-bold text-white leading-tight" style={{ fontSize: isCenter ? 'clamp(1.1rem, 2.8vh, 1.6rem)' : 'clamp(0.85rem, 1.8vh, 1.1rem)' }}>
        {product.title}
      </h3>
      <p className="font-assistant text-white/80 leading-tight" style={{ fontSize: isCenter ? 'clamp(0.8rem, 1.8vh, 1rem)' : 'clamp(0.65rem, 1.3vh, 0.85rem)' }}>
        {product.subtitle}
      </p>
    </motion.div>
  );
}

export default function ProductsCarousel({ onBackToGrid, onNavigateToVideo, onNavigateHome }) {
  const [offset, setOffset] = useState(0);
  const trackX = useRef(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const total = PRODUCTS.length;

  // We render 5 items centered at offset: [-2, -1, 0, +1, +2]
  // Only positions -1, 0, +1 are visible; the others are offscreen buffers
  const stripItems = useMemo(() => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const idx = ((offset + i) % total + total) % total;
      items.push({ product: PRODUCTS[idx], position: i });
    }
    return items;
  }, [offset, total]);

  const goTo = (newOffset) => {
    const wrapped = ((newOffset % total) + total) % total;
    setOffset(wrapped);
  };

  // RTL: pressing the left-side ChevronLeft → move content right → offset increases
  const handlePrev = () => goTo(offset + 1);
  const handleNext = () => goTo(offset - 1);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col select-none bg-white"
      dir="rtl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/e388f9496_Artboard28copy32.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/9fbae749a_Artboard28copy21.png" alt="" className="w-full" style={{ transform: 'rotate(180deg)' }} />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center flex-shrink-0 relative z-10" style={{ padding: '1.5vh 4%' }}>
        <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png" alt="Logo" style={{ height: 'clamp(40px, 7vh, 75px)' }} className="object-contain" />
        <FullscreenButton className="bg-white/40 hover:bg-white/50 shadow-lg" style={{ width: 'clamp(45px, 7vh, 70px)', height: 'clamp(45px, 7vh, 70px)', color: '#003A57' }} />
      </div>

      {/* Title */}
      <div className="text-center z-10 flex-shrink-0" style={{ marginTop: '0.5vh' }}>
        <h1 className="font-karantina text-[#003A57] font-normal leading-none" style={{ fontSize: 'clamp(2rem, 6vh, 6rem)' }}>
          עוד מוצרים דיגיטליים
        </h1>
      </div>

      {/* Carousel area */}
      <div className="flex-1 relative z-10 flex items-center justify-center min-h-0 overflow-hidden">
        <div className="flex items-center" style={{ gap: 'clamp(8px, 2vw, 32px)' }}>
          {/* Only render the 3 visible positions: -1, 0, +1 */}
          {stripItems.filter((_, i) => i >= 1 && i <= 3).map((item) => (
            <PositionedCard key={item.product.title} product={item.product} position={item.position} />
          ))}
        </div>
      </div>

      {/* NavButtons: home + video (rendered by TotemController via NavButtons) */}

      {/* Navigation arrows centered */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex items-center justify-center gap-4 px-[8%]">
        <button
          onClick={handleNext}
          className="flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer"
          style={{ width: 'clamp(44px, 6vh, 64px)', height: 'clamp(44px, 6vh, 64px)' }}
        >
          <ChevronRight className="w-full h-full" style={{ color: '#003A57', strokeWidth: 2.5 }} />
        </button>
        <button
          onClick={handlePrev}
          className="flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer"
          style={{ width: 'clamp(44px, 6vh, 64px)', height: 'clamp(44px, 6vh, 64px)' }}
        >
          <ChevronLeft className="w-full h-full" style={{ color: '#003A57', strokeWidth: 2.5 }} />
        </button>
      </div>

      {/* "תצוגת רשת" button — same position as "תצוגת קרוסלה" in the grid view */}
      <div className="absolute bottom-6 left-6 z-20">
        <button
          onClick={onBackToGrid}
          className="bg-white/90 hover:bg-white rounded-2xl shadow-lg flex items-center gap-2 px-4 py-2 transition-all active:scale-95"
          style={{ color: '#003A57' }}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="font-assistant font-semibold text-sm">תצוגת רשת</span>
        </button>
      </div>
    </div>
  );
}