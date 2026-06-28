import React, { useState, useCallback } from 'react';
import FullscreenButton from '../components/totem/FullscreenButton';
import { ChevronLeft, ChevronRight, LayoutGrid, Heart, Eye, Users } from 'lucide-react';

const DEFAULT_ICON = 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png';

const PRODUCTS = [
  { title: 'החברה הישראלית', subtitle: 'לומדת היכרות עם החברה הישראלית', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/israeli-society-copy/', tag: 'לומדה דיגיטלית', target: 'צוותי חינוך והסברה', status: 'תוכן זמין לצפייה' },
  { title: 'הצגת המכללה', subtitle: 'לומדת היכרות עם המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/know-college/', tag: 'לומדה דיגיטלית', target: 'מתעניינים וסטודנטים', status: 'תוכן זמין לצפייה' },
  { title: 'משחק 1', subtitle: 'משחק אינטראקטיבי גלגל העורף', icon: DEFAULT_ICON, url: 'https://inri-game1.base44.app', tag: 'משחק אינטראקטיבי', target: 'כל הגילאים', status: 'תוכן זמין לצפייה' },
  { title: 'משחק 2', subtitle: 'משחק אינטראקטיבי התאמת לוגו', icon: DEFAULT_ICON, url: 'https://inri-game2.base44.app', tag: 'משחק אינטראקטיבי', target: 'כל הגילאים', status: 'תוכן זמין לצפייה' },
  { title: 'משחק 3', subtitle: 'משחק אינטראקטיבי מבצע ציוד', icon: DEFAULT_ICON, url: 'https://inri-game3.base44.app', tag: 'משחק אינטראקטיבי', target: 'כל הגילאים', status: 'תוכן זמין לצפייה' },
  { title: 'משחק 4', subtitle: 'משחק הזיכרון אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://game4.base44.app', tag: 'משחק אינטראקטיבי', target: 'כל הגילאים', status: 'תוכן זמין לצפייה' },
  { title: 'מוצר 7', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 8', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 9', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 10', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 11', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 12', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 13', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 14', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 15', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 16', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 17', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 18', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 19', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
  { title: 'מוצר 20', subtitle: 'מוצר זה כרגע בהכנה - שווה לחכות', icon: DEFAULT_ICON, url: null, tag: 'בהכנה', target: 'בקרוב', status: 'בהכנה' },
];

function ProductCard({ product, isCenter, onNavigate }) {
  return (
    <button
      onClick={() => product.url && window.open(product.url, '_blank')}
      className={`flex-shrink-0 flex flex-col rounded-3xl overflow-hidden transition-all duration-300 text-right ${isCenter ? 'shadow-2xl z-10' : 'opacity-50 scale-90'}`}
      dir="rtl"
      style={{
        width: isCenter ? 'clamp(260px, 36vw, 420px)' : 'clamp(200px, 28vw, 320px)',
        height: isCenter ? 'clamp(340px, 58vh, 520px)' : 'clamp(260px, 44vh, 400px)',
        background: '#FFFFFF',
        boxShadow: isCenter ? '0 20px 60px rgba(0,58,87,0.25)' : '0 4px 16px rgba(0,0,0,0.08)',
      }}
    >
      {/* Colored header area */}
      <div className="relative flex-shrink-0" style={{ height: isCenter ? '30%' : '28%' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #F5B889 0%, #F5B889 50%, #E8A06A 100%)' }} />
        {/* Heart icon */}
        <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center">
          <Heart className="w-4 h-4" style={{ color: '#1A2B42' }} />
        </div>
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full flex items-center justify-center" style={{ width: isCenter ? '6.5vh' : '5vh', height: isCenter ? '6.5vh' : '5vh', background: '#F5B889' }}>
            <img src={product.icon} alt="" className="w-1/2 h-1/2 object-contain brightness-0 invert" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between px-5 py-3">
        <div className="space-y-1.5">
          <p className="text-gray-500 font-assistant font-medium" style={{ fontSize: 'clamp(0.65rem, 1.3vh, 0.8rem)' }}>{product.tag}</p>
          <h3 className="font-bold leading-tight" style={{ fontSize: 'clamp(0.95rem, 2.2vh, 1.35rem)', color: '#1A2B42' }}>{product.title}</h3>
          <p className="text-gray-600 font-assistant leading-snug" style={{ fontSize: 'clamp(0.7rem, 1.5vh, 0.85rem)' }}>{product.subtitle}</p>
        </div>

        {isCenter && (
          <>
            <hr className="border-gray-200 my-1.5" />
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-500 font-assistant" style={{ fontSize: 'clamp(0.6rem, 1.2vh, 0.75rem)' }}>
                <Users className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{product.target}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-assistant" style={{ fontSize: 'clamp(0.6rem, 1.2vh, 0.75rem)' }}>
                <Eye className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{product.status}</span>
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); product.url && window.open(product.url, '_blank'); }}
              className="self-center mt-2 flex items-center gap-1.5 font-assistant font-semibold text-white px-5 py-1.5 rounded-full transition-all hover:brightness-110 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #003A57, #007FBD)', fontSize: 'clamp(0.7rem, 1.4vh, 0.85rem)' }}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              לצפייה בפרטים
            </button>
          </>
        )}
      </div>
    </button>
  );
}

export default function ProductsCarousel({ onBackToGrid }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = PRODUCTS.length;

  const goTo = useCallback((index) => {
    setCurrentIndex(((index % total) + total) % total);
  }, [total]);

  const goPrev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex]);
  const goNext = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex]);

  const prevIndex = ((currentIndex - 1) % total + total) % total;
  const nextIndex = ((currentIndex + 1) % total + total) % total;

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col bg-white"
      dir="rtl"
    >
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/e388f9496_Artboard28copy32.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/9fbae749a_Artboard28copy21.png" alt="" className="w-full" style={{ transform: 'rotate(180deg)' }} />
      </div>

      {/* Header: logo + fullscreen */}
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
        <h1 className="font-karantina text-[#003A57] font-normal leading-none" style={{ fontSize: 'clamp(2rem, 6vh, 6rem)' }}>
          עוד מוצרים דיגיטליים
        </h1>
      </div>

      {/* Back to grid — top-left */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={onBackToGrid}
          className="bg-white/90 hover:bg-white rounded-2xl shadow-lg flex items-center gap-2 px-4 py-2 transition-all active:scale-95"
          style={{ color: '#003A57' }}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="font-assistant font-semibold text-sm">תצוגת רשת</span>
        </button>
      </div>

      {/* Carousel cards */}
      <div className="flex-1 relative z-10 flex items-center justify-center min-h-0 select-none" style={{ padding: '0 5%' }}>
        {/* Previous card (left side) */}
        <div className="absolute pointer-events-none flex items-center justify-center" style={{ left: '5%', top: '50%', transform: 'translateY(-50%)' }}>
          <ProductCard product={PRODUCTS[prevIndex]} isCenter={false} />
        </div>

        {/* Center card */}
        <div className="relative z-10 flex items-center justify-center">
          <ProductCard product={PRODUCTS[currentIndex]} isCenter={true} />
        </div>

        {/* Next card (right side) */}
        <div className="absolute pointer-events-none flex items-center justify-center" style={{ right: '5%', top: '50%', transform: 'translateY(-50%)' }}>
          <ProductCard product={PRODUCTS[nextIndex]} isCenter={false} />
        </div>

        {/* Left arrow */}
        <button
          onPointerDown={(e) => e.preventDefault()}
          onClick={goPrev}
          className="absolute z-30 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform touch-manipulation"
          style={{ left: '2%', top: '50%', transform: 'translateY(-50%)', width: 'clamp(44px, 6vh, 60px)', height: 'clamp(44px, 6vh, 60px)' }}
        >
          <ChevronLeft className="w-full h-full" style={{ color: '#00334E' }} strokeWidth={2.5} />
        </button>

        {/* Right arrow */}
        <button
          onPointerDown={(e) => e.preventDefault()}
          onClick={goNext}
          className="absolute z-30 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform touch-manipulation"
          style={{ right: '2%', top: '50%', transform: 'translateY(-50%)', width: 'clamp(44px, 6vh, 60px)', height: 'clamp(44px, 6vh, 60px)' }}
        >
          <ChevronRight className="w-full h-full" style={{ color: '#00334E' }} strokeWidth={2.5} />
        </button>
      </div>

      {/* Touch swipe support */}
      <div
        className="absolute inset-0 z-20"
        style={{ touchAction: 'pan-y' }}
        onTouchStart={(e) => {
          const startX = e.touches[0].clientX;
          const el = e.currentTarget;
          const handler = (ev) => {
            const diff = ev.touches[0].clientX - startX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) goPrev();
              else goNext();
              el.removeEventListener('touchmove', handler);
              el.removeEventListener('touchend', handler);
            }
          };
          el.addEventListener('touchmove', handler, { passive: true });
          el.addEventListener('touchend', () => el.removeEventListener('touchmove', handler), { once: true });
        }}
      />
    </div>
  );
}