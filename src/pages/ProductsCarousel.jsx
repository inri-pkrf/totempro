import React, { useState, useEffect, useRef } from 'react';
import FullscreenButton from '../components/totem/FullscreenButton';
import { ChevronLeft, ChevronRight, LayoutGrid, Heart, Users, Eye } from 'lucide-react';

const DEFAULT_ICON = 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png';

const PRODUCTS = [
  { title: 'החברה הישראלית', subtitle: 'הכרת החברה ומרכיביה', description: 'לומדה מקיפה בנושא החברה הישראלית והמרכיבים המרכזיים שלה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/israeli-society-copy/', color: '#FFC597' },
  { title: 'הצגת המכללה', subtitle: 'לומדת היכרות עם המכללה', description: 'לומדת היכרות מקיפה עם המכללה הלאומית לאיתנות ישראלית', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/know-college/', color: '#B5D9C4' },
  { title: 'משחק 1', subtitle: 'משחק אינטראקטיבי גלגל העורף', description: 'משחק גלגל העורף אינטראקטיבי להעשרת הידע', icon: DEFAULT_ICON, url: 'https://inri-game1.base44.app', color: '#FFC597' },
  { title: 'משחק 2', subtitle: 'משחק אינטראקטיבי התאמת לוגו', description: 'משחק התאמת לוגו אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://inri-game2.base44.app', color: '#B5D9C4' },
  { title: 'משחק 3', subtitle: 'משחק אינטראקטיבי מבצע ציוד', description: 'משחק מבצע ציוד אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://inri-game3.base44.app', color: '#FFC597' },
  { title: 'משחק 4', subtitle: 'משחק הזיכרון אינטראקטיבי', description: 'משחק הזיכרון אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://game4.base44.app', color: '#B5D9C4' },
  { title: 'מוצר 7', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#FFC597' },
  { title: 'מוצר 8', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#B5D9C4' },
  { title: 'מוצר 9', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#FFC597' },
  { title: 'מוצר 10', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#B5D9C4' },
  { title: 'מוצר 11', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#FFC597' },
  { title: 'מוצר 12', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#B5D9C4' },
  { title: 'מוצר 13', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#FFC597' },
  { title: 'מוצר 14', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#B5D9C4' },
  { title: 'מוצר 15', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#FFC597' },
  { title: 'מוצר 16', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#B5D9C4' },
  { title: 'מוצר 17', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#FFC597' },
  { title: 'מוצר 18', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#B5D9C4' },
  { title: 'מוצר 19', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#FFC597' },
  { title: 'מוצר 20', subtitle: 'בהכנה', description: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, color: '#B5D9C4' },
];

function CenterCard({ product }) {
  if (!product) return null;
  return (
    <div
      className="relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300"
      style={{
        width: 'min(55vw, 480px)',
        height: 'min(65vh, 520px)',
        background: '#FFFFFF',
        boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      {/* Top-left accent shape */}
      <div
        className="absolute top-0 left-0 rounded-br-[80px]"
        style={{
          width: '120px',
          height: '100px',
          background: product.color,
          opacity: 0.7,
        }}
      />

      {/* Heart icon top-right */}
      <div className="absolute top-4 right-4 z-10">
        <Heart className="w-5 h-5" style={{ color: '#2C4459', strokeWidth: 1.5 }} />
      </div>

      {/* Icon container */}
      <div className="flex items-center justify-center flex-shrink-0 relative z-10" style={{ paddingTop: '4vh' }}>
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 'clamp(60px, 10vh, 90px)',
            height: 'clamp(60px, 10vh, 90px)',
            background: product.color,
          }}
        >
          <img src={product.icon} alt="" className="w-[55%] h-[55%] object-contain brightness-0 invert" />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 px-6" dir="rtl" style={{ paddingTop: '2vh' }}>
        <span className="font-assistant font-medium" style={{ color: '#555', fontSize: 'clamp(0.75rem, 1.6vh, 0.95rem)' }}>
          עזר דיגיטלי
        </span>
        <h2
          className="font-assistant font-bold leading-tight"
          style={{ color: '#2C4459', fontSize: 'clamp(1.2rem, 3vh, 1.8rem)', marginTop: '0.3vh' }}
        >
          {product.title}
        </h2>
        <p
          className="font-assistant leading-relaxed"
          style={{ color: '#555', fontSize: 'clamp(0.7rem, 1.5vh, 0.9rem)', marginTop: '0.6vh', lineHeight: '1.4' }}
        >
          {product.description}
        </p>

        {/* Separator */}
        <div className="w-full h-px my-3" style={{ background: '#E0E0E0' }} />

        {/* Metadata */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 flex-shrink-0" style={{ color: '#2C4459' }} />
            <span className="font-assistant text-sm" style={{ color: '#2C4459', fontSize: 'clamp(0.65rem, 1.3vh, 0.85rem)' }}>
              אנשי מקצוע בתחום החירום והביטחון
            </span>
          </div>
          {product.url && (
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 flex-shrink-0" style={{ color: '#2C4459' }} />
              <span className="font-assistant text-sm" style={{ color: '#2C4459', fontSize: 'clamp(0.65rem, 1.3vh, 0.85rem)' }}>
                תוכן זמין לצפייה
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        {product.url && (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-auto mb-4 flex items-center gap-1.5 rounded-full border px-5 py-1.5 font-assistant font-semibold transition-all hover:bg-gray-50 active:scale-95"
            style={{ borderColor: '#2C4459', color: '#2C4459', fontSize: 'clamp(0.7rem, 1.4vh, 0.85rem)' }}
          >
            <ChevronLeft className="w-4 h-4" />
            לצפייה בפרטים
          </a>
        )}
      </div>
    </div>
  );
}

function SideCard({ product, position }) {
  const isLeft = position === 'left';
  return (
    <div
      className="relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 flex-shrink-0 opacity-60 scale-[0.8] pointer-events-none"
      style={{
        width: 'min(30vw, 280px)',
        height: 'min(48vh, 400px)',
        background: '#FFFFFF',
        boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
        marginLeft: isLeft ? 'min(-3vw, -24px)' : 0,
        marginRight: isLeft ? 0 : 'min(-3vw, -24px)',
        zIndex: isLeft ? 0 : 0,
      }}
    >
      {/* Top-left accent shape */}
      <div
        className="absolute top-0 left-0 rounded-br-[60px]"
        style={{
          width: '80px',
          height: '70px',
          background: product.color,
          opacity: 0.6,
        }}
      />

      {/* Heart icon */}
      <div className="absolute top-3 right-3 z-10">
        <Heart className="w-4 h-4" style={{ color: '#2C4459', strokeWidth: 1.5 }} />
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center relative z-10" style={{ paddingTop: '3vh' }}>
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 'clamp(40px, 7vh, 60px)',
            height: 'clamp(40px, 7vh, 60px)',
            background: product.color,
          }}
        >
          <img src={product.icon} alt="" className="w-[50%] h-[50%] object-contain brightness-0 invert" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 text-right" dir="rtl" style={{ paddingTop: '1.5vh' }}>
        <h3 className="font-assistant font-bold leading-tight" style={{ color: '#2C4459', fontSize: 'clamp(0.9rem, 2vh, 1.2rem)' }}>
          {product.title}
        </h3>
      </div>
    </div>
  );
}

export default function ProductsCarousel({ onBackToGrid }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = PRODUCTS.length;

  const goTo = (index) => {
    if (index < 0) setCurrentIndex(total - 1);
    else if (index >= total) setCurrentIndex(0);
    else setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
  const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col select-none"
      style={{ background: '#F5F7F9' }}
      dir="rtl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-[20%] pointer-events-none opacity-30 z-0">
        <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/e388f9496_Artboard28copy32.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-[20%] pointer-events-none opacity-30 z-0">
        <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/9fbae749a_Artboard28copy21.png" alt="" className="w-full" style={{ transform: 'rotate(180deg)' }} />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center flex-shrink-0 relative z-10" style={{ padding: '1.5vh 4%' }}>
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
          alt="Logo"
          style={{ height: 'clamp(40px, 7vh, 75px)' }}
          className="object-contain" />
        <FullscreenButton
          className="bg-white/80 hover:bg-white shadow-lg"
          style={{ width: 'clamp(45px, 7vh, 70px)', height: 'clamp(45px, 7vh, 70px)', color: '#2C4459' }}
        />
      </div>

      {/* Title */}
      <div className="text-center z-10 flex-shrink-0" style={{ marginTop: '0.5vh' }}>
        <h1 className="font-karantina font-normal leading-none" style={{ color: '#2C4459', fontSize: 'clamp(2rem, 6vh, 6rem)' }}>
          עוד מוצרים דיגיטליים
        </h1>
      </div>

      {/* Carousel center area */}
      <div className="flex-1 relative z-10 flex items-center justify-center min-h-0 overflow-hidden">
        {/* Cards layer */}
        <div className="flex items-center justify-center w-full h-full">
          {/* Left side card */}
          <SideCard product={PRODUCTS[prevIndex]} position="left" />
          {/* Center card */}
          <div className="flex-shrink-0 relative z-10" style={{ margin: '0 min(-1vw, -8px)' }}>
            <CenterCard product={PRODUCTS[currentIndex]} />
          </div>
          {/* Right side card */}
          <SideCard product={PRODUCTS[nextIndex]} position="right" />
        </div>
      </div>

      {/* Navigation arrows at bottom */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex items-center justify-between px-[8%]">
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95"
          style={{ width: 'clamp(44px, 6vh, 64px)', height: 'clamp(44px, 6vh, 64px)' }}
        >
          <ChevronRight className="w-full h-full" style={{ color: '#2C4459', strokeWidth: 2.5 }} />
        </button>
        <button
          onClick={onBackToGrid}
          className="bg-white/90 hover:bg-white rounded-2xl shadow-lg flex items-center gap-2 px-4 py-2 transition-all active:scale-95"
          style={{ color: '#2C4459' }}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="font-assistant font-semibold text-sm">תצוגת רשת</span>
        </button>
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95"
          style={{ width: 'clamp(44px, 6vh, 64px)', height: 'clamp(44px, 6vh, 64px)' }}
        >
          <ChevronLeft className="w-full h-full" style={{ color: '#2C4459', strokeWidth: 2.5 }} />
        </button>
      </div>
    </div>
  );
}