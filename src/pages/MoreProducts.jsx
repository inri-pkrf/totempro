import React, { useState } from 'react';
import AiPopup from '../components/totem/AiPopup';

const DEFAULT_ICON = 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png';

const PRODUCTS = [
  { title: 'החברה הישראלית', subtitle: 'הכרת החברה ומרכיביה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/israeli-society-copy/' },
  { title: 'הצגת המכללה', subtitle: 'היכרות עם המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri-pkrf.github.io/know-college/' },
  { title: 'משחק 1', subtitle: 'משחק אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://inri-game1.base44.app' },
  { title: 'משחק 2', subtitle: 'משחק אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://inri-game2.base44.app' },
  { title: 'משחק 3', subtitle: 'משחק אינטראקטיבי', icon: DEFAULT_ICON, url: 'https://inri-game3.base44.app' },
  { title: 'מוצר 6', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 7', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 8', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 9', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 10', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 11', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 12', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 13', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 14', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 15', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 16', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 17', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 18', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 19', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
  { title: 'מוצר 20', subtitle: 'תיאור קצר', icon: DEFAULT_ICON, url: null },
];

function ProductCard({ product }) {
  return (
    <button
      onClick={() => product.url && window.open(product.url, '_blank')}
      className="flex flex-col items-center justify-start text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:brightness-105 active:scale-95 overflow-hidden"
      style={{ padding: '1.2vh 4%', gap: '0.6vh', aspectRatio: '1 / 1' }}
    >
      <div className="flex items-center justify-center flex-shrink-0" style={{ width: '5vh', height: '5vh', minWidth: '40px', minHeight: '40px' }}>
        <img src={product.icon} alt="" className="w-full h-full object-contain" />
      </div>
      <h3 className="font-assistant font-bold text-[#003A57] leading-tight" style={{ fontSize: 'clamp(0.85rem, 1.8vh, 1.15rem)' }}>
        {product.title}
      </h3>
      <p className="font-assistant text-gray-500 leading-tight" style={{ fontSize: 'clamp(0.7rem, 1.4vh, 0.9rem)' }}>
        {product.subtitle}
      </p>
    </button>
  );
}

export default function MoreProducts({ onBack }) {
  const [showAiPopup, setShowAiPopup] = useState(false);

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col bg-white"
      dir="rtl">

      {/* Decorations */}
      <div className="absolute top-0 left-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/69b22dfa6_orange.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/09589c8ed_blue.png" alt="" className="w-full" />
      </div>

      {/* Header: logo + back */}
      <div className="flex justify-between items-center flex-shrink-0 relative z-10" style={{ padding: '1.5vh 4%' }}>
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
          alt="Logo"
          style={{ height: 'clamp(40px, 7vh, 75px)' }}
          className="object-contain" />
        <button
          onClick={onBack}
          className="font-assistant font-bold text-primary hover:underline flex items-center gap-2"
          style={{ fontSize: 'clamp(1rem, 2.5vh, 1.6rem)' }}>
          חזרה &gt;
        </button>
      </div>

      {/* Title */}
      <div className="text-center z-10 flex-shrink-0" style={{ marginTop: '0.5vh' }}>
        <h1 className="font-karantina text-[#003A57] font-normal leading-none"
          style={{ fontSize: 'clamp(2rem, 6vh, 6rem)' }}>
          עוד מוצרים דיגיטליים
        </h1>
      </div>

      {/* Products grid */}
      <div className="flex-1 min-h-0 relative z-10" style={{ padding: '1.5vh 4% 2vh' }}>
        <div
          className="grid w-full h-full mx-auto"
          style={{
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(4, 1fr)',
            gap: '1.6vh 1.5%',
            maxWidth: '96%'
          }}
        >
          {PRODUCTS.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>

      {/* AI character */}
      <div className="absolute z-20" style={{ bottom: '0.5vh', left: '2%' }}>
        <button
          onClick={() => setShowAiPopup(!showAiPopup)}
          style={{ width: 'clamp(55px, 9vh, 100px)', height: 'clamp(55px, 9vh, 100px)' }}>
          <img
            src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/b87c0ca55_ai.png"
            alt="AI" className="w-full h-full object-cover" />
        </button>
        {showAiPopup && <AiPopup isOpen={showAiPopup} onClose={() => setShowAiPopup(false)} />}
      </div>
    </div>
  );
}