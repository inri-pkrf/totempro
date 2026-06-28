import React from 'react';
import FullscreenButton from '../components/totem/FullscreenButton';

const DEFAULT_ICON = 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png';

const PRODUCTS = [
  { title: 'החברה הישראלית', subtitle: 'הכרת החברה ומרכיביה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/israeli-society-copy/' },
  { title: 'הצגת המכללה', subtitle: 'היכרות עם המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/know-college/' },
  { title: 'משחק 1', subtitle: 'משחק אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://inri-game1.base44.app' },
  { title: 'משחק 2', subtitle: 'משחק אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://inri-game2.base44.app' },
  { title: 'משחק 3', subtitle: 'משחק אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://inri-game3.base44.app' },
  { title: 'משחק 4', subtitle: 'משחק הזיכרון אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://game4.base44.app' },
  { title: 'מוצר 7', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 8', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 9', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 10', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 11', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 12', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 13', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 14', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 15', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 16', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 17', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 18', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 19', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 20', subtitle: 'מוצר זה כרגע בהכנה', icon: DEFAULT_ICON, url: null },
];

function ProductCard({ product }) {
  return (
    <button
      onClick={() => product.url && window.open(product.url, '_blank')}
      className="product-card flex flex-col items-center justify-center text-center rounded-2xl transition-all duration-200 active:scale-95 overflow-hidden group"
      style={{
        padding: '2.5vh 6%',
        gap: '1.2vh',
        minHeight: '15vh',
        boxShadow: '0 8px 32px rgba(0,58,87,0.35), 0 4px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
        transform: 'perspective(800px) rotateX(2deg)',
        borderBottom: '3px solid rgba(0,0,0,0.15)'
      }}
    >
      <div className="flex items-center justify-center flex-shrink-0" style={{ width: '3.5vh', height: '3.5vh', minWidth: '28px', minHeight: '28px' }}>
        <img src={product.icon} alt="" className="w-full h-full object-contain brightness-0 invert group-active:filter-none transition-all duration-150" />
      </div>
      <h3 className="font-assistant font-bold text-white group-active:text-[#003A57] leading-tight transition-colors duration-150" style={{ fontSize: 'clamp(0.85rem, 1.8vh, 1.15rem)' }}>
        {product.title}
      </h3>
      <p className="font-assistant text-white/80 group-active:text-gray-500 leading-tight transition-colors duration-150" style={{ fontSize: 'clamp(0.7rem, 1.4vh, 0.9rem)' }}>
        {product.subtitle}
      </p>
    </button>
  );
}

export default function MoreProducts({ onBack }) {
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

      {/* Products grid */}
      <div className="flex-1 min-h-0 relative z-10" style={{ padding: '3vh 4% 2vh' }}>
        <div
          className="grid w-full mx-auto"
          style={{
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridAutoRows: 'min-content',
            gap: '4vh 1.5%',
            maxWidth: '96%'
          }}
        >
          {PRODUCTS.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}