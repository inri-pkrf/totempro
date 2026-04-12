import React, { useState } from 'react';
import DateTimeDisplay from '../components/totem/DateTimeDisplay';
import AiPopup from '../components/totem/AiPopup';
import MoreDatabases from './MoreDatabases';
import MoreProducts from './MoreProducts';

const BUTTONS = [
  { label: 'אתר המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri.orc.org.il/' },
  { label: 'הספרייה הלאומית לחירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/711382d76_icon2.png', url: 'https://inri.orc.org.il/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94-%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99%D7%AA-%D7%9C%D7%97%D7%99%D7%A8%D7%95%D7%9D/' },
  { label: 'הכשרות למשרדי הממשלה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png', url: 'https://inri.orc.org.il/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%94%D7%9B%D7%A9%D7%A8%D7%AA-%D7%9E%D7%A0%D7%94%D7%9C%D7%99%D7%9D-%D7%95%D7%9E%D7%A0%D7%94%D7%9C%D7%95%D7%AA-%D7%91%D7%9E%D7%A9%D7%A8%D7%93%D7%99-%D7%9E%D7%9E%D7%A9%D7%9C%D7%94-%D7%95%D7%A8%D7%A9%D7%95%D7%99%D7%95%D7%AA-%D7%99%D7%99%D7%A2%D7%95%D7%93%D7%99%D7%95%D7%AA/' },
  { label: 'הכשרות לרשויות המקומיות', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png', url: 'https://inri.orc.org.il/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%94%D7%9B%D7%A9%D7%A8%D7%AA-%D7%9E%D7%A0%D7%94%D7%9C%D7%99%D7%9D-%D7%91%D7%A8%D7%A9%D7%95%D7%99%D7%95%D7%AA-%D7%9E%D7%A7%D7%95%D7%9E%D7%99%D7%95%D7%AA/' },
  { label: 'עזר לניהול מצבי חירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/28dfee8ee_icon5.png', url: 'https://inri-pkrf.github.io/assessment2026/' },
  { label: "מאגר 'שאגת הארי'", icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png', url: null }
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

export default function Home({ onNavigateToVideo }) {
  const [showAiPopup, setShowAiPopup] = useState(false);
  const [showLionAlert, setShowLionAlert] = useState(false);
  const [showMoreDatabases, setShowMoreDatabases] = useState(false);
  const [showMoreProducts, setShowMoreProducts] = useState(false);

  const handleButtonClick = (btn) => {
    if (btn.url) {
      window.open(btn.url, '_blank');
    } else {
      setShowLionAlert(true);
    }
  };

  if (showMoreDatabases) return <MoreDatabases onBack={() => setShowMoreDatabases(false)} />;
  if (showMoreProducts) return <MoreProducts onBack={() => setShowMoreProducts(false)} />;

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/8f5df9d6f_1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}
      dir="rtl">

      {/* Top: date/time */}
      <div className="flex justify-end items-start px-[5%] z-20 flex-shrink-0" style={{ paddingTop: '2vh' }}>
        <DateTimeDisplay />
      </div>

      {/* Title */}
      <div className="px-[5%] text-center z-10 flex-shrink-0" style={{ marginTop: '1vh' }}>
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
        className="flex-1 z-10 min-h-0 flex justify-center px-[8%]"
        style={{ marginTop: '2vh', marginBottom: 'clamp(50px, 15vh, 160px)' }}>
        <div
          className="bg-white/90 backdrop-blur-sm shadow-2xl h-full flex flex-col overflow-hidden relative w-full"
          style={{ borderRadius: '11vh', maxHeight: '85vh' }}>

          {/* Decorations */}
          <div className="absolute top-0 left-0 w-[30%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/69b22dfa6_orange.png" alt="" className="w-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[30%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/09589c8ed_blue.png" alt="" className="w-full" />
          </div>

          {/* Card header: logo + menu */}
          <div className="flex justify-between items-center flex-shrink-0 relative z-10" style={{ padding: '1.2vh 10%' }}>
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              style={{ height: 'clamp(38px, 6.5vh, 65px)' }}
              className="object-contain" />
            <button className="flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/10285006f_menu-btn.png"
                alt="תפריט"
                style={{ width: 'clamp(42px, 7.5vh, 85px)' }}
                className="object-contain" />
            </button>
          </div>

          {/* Buttons */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center z-10 w-[75%] mx-auto"
            style={{ gap: '1.6vh' }}
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

            <div className="text-left w-full pl-5" style={{ marginTop: '-0.5vh' }}>
              <span
                onClick={() => setShowMoreDatabases(true)}
                className="text-[#1a5f7a] font-assistant font-semibold cursor-pointer underline hover:opacity-80"
                style={{ fontSize: 'clamp(0.9rem, 2.2vh, 1.4rem)' }}>
                עוד מאגרים למצבי חירום &gt;
              </span>
            </div>
          </div>

          {/* Lion alert dialog */}
          {showLionAlert && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 rounded-[5vh]" onClick={() => setShowLionAlert(false)}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 mx-8 text-center" dir="rtl" onClick={e => e.stopPropagation()}>
                <div className="text-4xl mb-3">🦁</div>
                <h3 className="font-karantina text-2xl text-primary mb-2">בהכנה…</h3>
                <p className="font-assistant text-gray-600 mb-4">בנתיים תוכלו לצפות במאגרים הנוספים למצבי חירום</p>
                <button onClick={() => setShowLionAlert(false)} className="bg-primary text-white font-assistant font-bold px-6 py-2 rounded-full hover:brightness-110 transition">סגור</button>
              </div>
            </div>
          )}
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