import React, { useState } from 'react';
import AiPopup from '../components/totem/AiPopup';
import MoreProducts from './MoreProducts';

const BUTTONS = [
  { label: 'אתר המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri.orc.org.il/' },
  { label: 'הספרייה הלאומית לחירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/711382d76_icon2.png', url: 'https://inri.orc.org.il/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94-%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99%D7%AA-%D7%9C%D7%97%D7%99%D7%A8%D7%95%D7%9D/' },
  { label: 'הכשרות למשרדי הממשלה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png', url: 'https://inri.orc.org.il/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%94%D7%9B%D7%A9%D7%A8%D7%AA-%D7%9E%D7%A0%D7%94%D7%9C%D7%99%D7%9D-%D7%95%D7%9E%D7%A0%D7%94%D7%9C%D7%95%D7%AA-%D7%91%D7%9E%D7%A9%D7%A8%D7%93%D7%99-%D7%9E%D7%9E%D7%A9%D7%9C%D7%94-%D7%95%D7%A8%D7%A9%D7%95%D7%99%D7%95%D7%AA-%D7%99%D7%99%D7%A2%D7%95%D7%93%D7%99%D7%95%D7%AA/' },
  { label: 'הכשרות לרשויות המקומיות', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png', url: 'https://inri.orc.org.il/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%94%D7%9B%D7%A9%D7%A8%D7%AA-%D7%9E%D7%A0%D7%94%D7%9C%D7%99%D7%9D-%D7%91%D7%A8%D7%A9%D7%95%D7%99%D7%95%D7%AA-%D7%9E%D7%A7%D7%95%D7%9E%D7%99%D7%95%D7%AA/' },
  { label: 'עזר לניהול מצבי חירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/28dfee8ee_icon5.png', url: 'https://inri-pkrf.github.io/assessment2026/' },
  { label: 'מאגר מצבי חירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png', url: 'https://inri-war.base44.app' }
];

const CIRCLE_IMG = 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/ee0d19f49_circle-icon.png';

function TotemButton({ btn, onClick }) {
  return (
    <button
      onClick={() => onClick(btn)}
      className="flex items-center rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-150 w-full"
      style={{
        background: 'linear-gradient(to right, #003A57, #007FBD)',
        padding: '0.8vh 3%',
        gap: '2%',
        boxShadow: '0 6px 20px rgba(0, 58, 87, 0.55), 0 2px 8px rgba(0,0,0,0.3)'
      }}>
      <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: '4vh', height: '4vh', minWidth: '28px', minHeight: '28px' }}>
        <img src={CIRCLE_IMG} alt="" className="absolute inset-0 w-full h-full object-contain" />
        <img src={btn.icon} alt="" style={{ width: '55%', height: '55%' }} className="object-contain relative z-10" />
      </div>
      <span className="flex-1 text-white font-assistant font-medium text-center" style={{ fontSize: 'clamp(1.2rem, 3vh, 2rem)', paddingLeft: '8%' }}>
        {btn.label}
      </span>
    </button>
  );
}

export default function Home({ onNavigateToVideo, onNavigateHome, showMoreProducts, setShowMoreProducts }) {
  const [showAiPopup, setShowAiPopup] = useState(false);

  const handleButtonClick = (btn) => {
    if (btn.url) {
      window.open(btn.url, '_blank');
    }
  };

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/8f5df9d6f_1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}
      dir="rtl">

      {/* Title */}
      <div className="px-[5%] text-center z-10 flex-shrink-0" style={{ marginTop: 'clamp(20px, 5vh, 60px)' }}>
        <h1 className="font-karantina text-white font-normal drop-shadow-lg leading-none"
          style={{ fontSize: 'clamp(2rem, 7vh, 7.5rem)' }}>
          ברוכים הבאים והבאות
        </h1>
        <h2 className="font-karantina text-white font-normal drop-shadow-lg leading-none"
          style={{ fontSize: 'clamp(1.5rem, 5.5vh, 6.5rem)', marginTop: '0.5vh' }}>
          למכללה הלאומית לאיתנות ישראלית
        </h2>
      </div>

      {/* White card */}
      <div
        className="flex-1 z-10 min-h-0 flex justify-center items-center px-[8%]"
        style={{ marginTop: '2vh', marginBottom: 'clamp(50px, 15vh, 160px)' }}>
        <div
          className="bg-white/90 backdrop-blur-sm shadow-2xl flex flex-col overflow-hidden relative w-full pt-[3.5vh] pb-[5vh]"
          style={{ borderRadius: '11vh' }}>

          {/* Decorations */}
          <div className="absolute top-0 left-0 w-[30%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/69b22dfa6_orange.png" alt="" className="w-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[30%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/09589c8ed_blue.png" alt="" className="w-full" />
          </div>

          {/* Card header: logo */}
          <div className="flex justify-center items-center flex-shrink-0 relative z-10" style={{ padding: '1vh 10%' }}>
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              style={{ height: 'clamp(38px, 6.5vh, 65px)' }}
              className="object-contain" />
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col items-center z-10 w-[75%] mx-auto"
            style={{ gap: '1.6vh', padding: '0.5vh 0 2.5vh' }}
            dir="rtl">

            {BUTTONS.slice(0, 5).map((btn, i) => (
              <TotemButton key={i} btn={btn} onClick={handleButtonClick} />
            ))}

            <div className="text-left w-full pl-5" style={{ marginTop: '-0.5vh' }}>
              <span
                onClick={() => setShowMoreProducts(true)}
                className="text-[#1a5f7a] font-assistant font-semibold cursor-pointer underline hover:opacity-80"
                style={{ fontSize: 'clamp(0.9rem, 2.2vh, 1.4rem)' }}>
                עוד מוצרים דיגיטליים &gt;
              </span>
            </div>

            <TotemButton btn={BUTTONS[5]} onClick={handleButtonClick} />
          </div>
        </div>
      </div>

      {/* AI character */}
      <div className="absolute z-20" style={{ bottom: '0.5vh', left: '2%' }}>
        <button
          onClick={() => setShowAiPopup(!showAiPopup)}
          style={{ width: 'clamp(55px, 9vh, 100px)', height: 'clamp(55px, 9vh, 100px)' }}>
          <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/b87c0ca55_ai.png" alt="AI" className="w-full h-full object-cover" />
        </button>
        {showAiPopup && <AiPopup isOpen={showAiPopup} onClose={() => setShowAiPopup(false)} />}
      </div>

      {/* Bottom center image */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex justify-center" style={{ bottom: '3%' }}>
        <img
          src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/b840f9407_0.png"
          alt=""
          style={{ height: 'clamp(40px, 12vh, 100px)' }}
          className="object-contain" />
      </div>
    </div>
  );
}