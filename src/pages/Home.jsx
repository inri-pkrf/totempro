import React, { useState } from 'react';
import DateTimeDisplay from '../components/totem/DateTimeDisplay';
import AiPopup from '../components/totem/AiPopup';
import NavButtons from '../components/totem/NavButtons';
import MoreDatabases from './MoreDatabases';
import MoreProducts from './MoreProducts';

const BUTTONS = [
{ label: 'אתר המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png', url: 'https://inri.orc.org.il/' },
{ label: 'הספרייה הלאומית לחירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/711382d76_icon2.png', url: 'https://inri.orc.org.il/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94-%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99%D7%AA-%D7%9C%D7%97%D7%99%D7%A8%D7%95%D7%9D/' },
{ label: 'הכשרות למשרדי הממשלה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png', url: 'https://inri.orc.org.il/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%94%D7%9B%D7%A9%D7%A8%D7%AA-%D7%9E%D7%A0%D7%94%D7%9C%D7%99%D7%9D-%D7%95%D7%9E%D7%A0%D7%94%D7%9C%D7%95%D7%AA-%D7%91%D7%9E%D7%A9%D7%A8%D7%93%D7%99-%D7%9E%D7%9E%D7%A9%D7%9C%D7%94-%D7%95%D7%A8%D7%A9%D7%95%D7%99%D7%95%D7%AA-%D7%99%D7%99%D7%A2%D7%95%D7%93%D7%99%D7%95%D7%AA/' },
{ label: 'הכשרות לרשויות המקומיות', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png', url: 'https://inri.orc.org.il/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%94%D7%9B%D7%A9%D7%A8%D7%AA-%D7%9E%D7%A0%D7%94%D7%9C%D7%99%D7%9D-%D7%91%D7%A8%D7%A9%D7%95%D7%99%D7%95%D7%AA-%D7%9E%D7%A7%D7%95%D7%9E%D7%99%D7%95%D7%AA/' },
{ label: 'עזר לניהול מצבי חירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/28dfee8ee_icon5.png', url: 'https://inri-pkrf.github.io/assessment2026/' },
{ label: "מאגר 'שאגת הארי'", icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png', url: null }];


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

  if (showMoreDatabases) {
    return <MoreDatabases onBack={() => setShowMoreDatabases(false)} />;
  }

  if (showMoreProducts) {
    return <MoreProducts onBack={() => setShowMoreProducts(false)} />;
  }

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(https://media.base44.com/images/public/user_6885e537f90714e91be36212/93d0b0613_bg-pic.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}
      dir="rtl">
      
      {/* Top: date/time */}
      <div className="flex justify-end items-start px-[5%] pt-[2%] z-20 flex-shrink-0">
        <DateTimeDisplay />
      </div>

      {/* Title */}
      <div className="px-[5%] mt-[1%] text-center z-10 flex-shrink-0">
        <h1 className="font-karantina text-white font-normal drop-shadow-lg leading-none"
        style={{ fontSize: 'clamp(3.2rem, 9.5vw, 7.5rem)' }}>
          ברוכים הבאים והבאות
        </h1>
        <h2 className="font-karantina text-white font-normal drop-shadow-lg leading-none mt-1"
        style={{ fontSize: 'clamp(2.5rem, 7.5vw, 6.5rem)' }}>
          למכללה הלאומית לאיתנות ישראלית
        </h2>
      </div>

      {/* White card */}
      <div className="flex-1 mt-[4%] z-10 min-h-0 flex justify-center px-[10%]" style={{ marginBottom: 'clamp(60px, 22%, 200px)' }}>
        <div className="bg-white/90 px-1 backdrop-blur-sm shadow-2xl h-full flex flex-col overflow-hidden relative w-full" style={{ borderRadius: '70px', maxHeight: '90vh' }}>

          {/* Decorations */}
          <div className="absolute top-0 left-0 w-[35%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/69b22dfa6_orange.png" alt="" className="w-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[35%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/09589c8ed_blue.png" alt="" className="w-full" />
          </div>

          {/* Card header: logo + menu */}
          <div className="mx-2 pt-[3%] pb-[2%] px-[5%] flex justify-between items-center flex-shrink-0 relative z-10 gap-2">
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              style={{ height: 'clamp(44px, 6.5vh, 72px)' }}
              className="object-contain" />
            
            <button className="flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/10285006f_menu-btn.png"
                alt="תפריט"
                style={{ width: 'clamp(44px, 6vw, 72px)' }}
                className="object-contain" />
              
            </button>
          </div>

          {/* Buttons - fill remaining space evenly */}
          <div className="mx-auto mb-8 flex-1 flex flex-col justify-center items-center relative z-10 min-h-0 gap-[2.4%] w-[85%]" dir="rtl">
            {BUTTONS.slice(0, 5).map((btn, i) =>
            <button
              key={i}
              onClick={() => handleButtonClick(btn)}
              className="flex items-center gap-3 rounded-full px-[4%] transition-all duration-200 shadow hover:shadow-md hover:brightness-110 active:scale-95 active:brightness-150 w-full max-w-[85%] mx-auto"
              style={{
                background: 'linear-gradient(to right, #003A57, #007FBD)',
                paddingTop: '1.5%',
                paddingBottom: '1.5%'
              }}>
                <div className="relative flex-shrink-0 flex items-center justify-center"
              style={{ width: 'clamp(32px, 4vw, 46px)', height: 'clamp(32px, 4vw, 46px)' }}>
                  <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/ee0d19f49_circle-icon.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
                  <img src={btn.icon} alt="" style={{ width: '55%', height: '55%' }} className="object-contain relative z-10" />
                </div>
                <span className="flex-1 text-white font-assistant font-bold" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1.15rem)' }}>
                  {btn.label}
                </span>
              </button>
            )}

            <div className="text-center" style={{ marginTop: '-4%', marginBottom: '0' }}>
              <span onClick={() => setShowMoreProducts(true)} className="text-[#1a5f7a] font-assistant font-semibold cursor-pointer hover:underline underline" style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.95rem)' }}>
                עוד מוצרים דיגיטליים &gt;
              </span>
            </div>

            <button
              onClick={() => handleButtonClick(BUTTONS[5])}
              className="flex items-center gap-3 rounded-full px-[4%] transition-all duration-200 shadow hover:shadow-md hover:brightness-110 active:scale-95 active:brightness-150 w-full max-w-[85%] mx-auto"
              style={{
                background: 'linear-gradient(to right, #003A57, #007FBD)',
                paddingTop: '1.5%',
                paddingBottom: '1.5%'
              }}>
                <div className="relative flex-shrink-0 flex items-center justify-center"
              style={{ width: 'clamp(32px, 4vw, 46px)', height: 'clamp(32px, 4vw, 46px)' }}>
                  <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/ee0d19f49_circle-icon.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
                  <img src={BUTTONS[5].icon} alt="" style={{ width: '55%', height: '55%' }} className="object-contain relative z-10" />
                </div>
                <span className="flex-1 text-white font-assistant font-bold" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1.15rem)' }}>
                  {BUTTONS[5].label}
                </span>
              </button>

            <div className="text-center" style={{ marginTop: '-4%' }}>
              <span onClick={() => setShowMoreDatabases(true)} className="text-[#1a5f7a] font-assistant font-semibold cursor-pointer hover:underline underline" style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.95rem)' }}>
                עוד מאגרים למצבי חירום &gt;
              </span>
            </div>
          </div>

          {/* Lion alert dialog */}
          {showLionAlert && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 rounded-[70px]" onClick={() => setShowLionAlert(false)}>
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

      {/* AI character - bottom left corner of page */}
      <div className="absolute z-20" style={{ bottom: '-1%', left: '2%', borderRadius: '100px' }}>
        <button
          onClick={() => setShowAiPopup(!showAiPopup)}
          style={{ width: 'clamp(60px, 10vw, 100px)', height: 'clamp(60px, 10vw, 100px)' }}
          className="scale-105">
          
          <img
            src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/b87c0ca55_ai.png"
            alt="AI" className="w-full h-full object-cover" />
          
          
        </button>
        {showAiPopup &&
        <AiPopup isOpen={showAiPopup} onClose={() => setShowAiPopup(false)} />
        }
      </div>

      {/* Image bottom center */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex justify-center" style={{ bottom: '3%' }}>
        <img
          src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/b840f9407_0.png"
          alt=""
          style={{ height: 'clamp(30px, 15vh, 60px)', maxWidth: '120%' }} className="my-4 opacity-100 object-contain" />
        
        
      </div>
    </div>);

}