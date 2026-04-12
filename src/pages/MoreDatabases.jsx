import React, { useState } from 'react';
import DateTimeDisplay from '../components/totem/DateTimeDisplay';
import AiPopup from '../components/totem/AiPopup';

const BUTTONS = [
  { label: "מאגר 'חרבות ברזל'", icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png', url: null },
  { label: "מאגר 'עם כלביא'", icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png', url: null },
];

export default function MoreDatabases({ onBack }) {
  const [showAiPopup, setShowAiPopup] = useState(false);

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/bab9fdccb_bg.png)`,
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
          מאגרים למצבי חירום
        </h1>
      </div>

      {/* White card */}
      <div className="flex-1 z-10 min-h-0 flex justify-center px-[8%]" style={{ marginTop: '2vh', marginBottom: 'clamp(50px, 15vh, 160px)' }}>
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl h-full flex flex-col overflow-hidden relative w-full" style={{ borderRadius: '11vh', maxHeight: '85vh' }}>

          {/* Decorations */}
          <div className="absolute top-0 left-0 w-[35%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/69b22dfa6_orange.png" alt="" className="w-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[35%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/09589c8ed_blue.png" alt="" className="w-full" />
          </div>

          {/* Card header: logo + menu */}
          <div className="flex justify-between items-center flex-shrink-0 relative z-10" style={{ padding: '1.2vh 5%' }}>
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              style={{ height: 'clamp(40px, 7vh, 75px)' }}
              className="object-contain" />
            <button className="flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/10285006f_menu-btn.png"
                alt="תפריט"
                style={{ width: 'clamp(48px, 8vh, 96px)' }}
                className="object-contain" />
            </button>
          </div>

          {/* Buttons */}
          <div className="mx-auto flex-1 flex flex-col justify-center items-center relative z-10 min-h-0 w-[75%]" style={{ gap: '1.6vh', paddingBottom: '1vh' }} dir="rtl">
            {BUTTONS.map((btn, i) => (
              <button
                key={i}
                onClick={() => btn.url && window.open(btn.url, '_blank')}
                className="flex items-center rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-150 w-full"
                style={{
                  background: 'linear-gradient(to right, #003A57, #007FBD)',
                  padding: '0.6vh 4%',
                  gap: '3%',
                  boxShadow: '0 6px 20px rgba(0, 58, 87, 0.55), 0 2px 8px rgba(0,0,0,0.3)'
                }}>
                <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: '5vh', height: '5vh', minWidth: '30px', minHeight: '30px' }}>
                  <img src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/ee0d19f49_circle-icon.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
                  <img src={btn.icon} alt="" style={{ width: '55%', height: '55%' }} className="object-contain relative z-10" />
                </div>
                <span className="flex-1 text-white font-assistant font-medium text-center" style={{ fontSize: 'clamp(0.9rem, 2vh, 1.3rem)' }}>
                  {btn.label}
                </span>
              </button>
            ))}

            {/* Back button below buttons, centered */}
            <div className="flex justify-center w-full mt-[2%]">
              <button
                onClick={onBack}
                className="font-assistant font-bold text-primary hover:underline"
                style={{ fontSize: 'clamp(1rem, 2vh, 1.4rem)' }}>
                 חזרה &gt;
              </button>
            </div>
          </div>
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

      {/* Image bottom center */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex justify-center" style={{ bottom: '3%' }}>
        <img
          src="https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/b840f9407_0.png"
          alt=""
          style={{ height: 'clamp(30px, 15vh, 60px)', maxWidth: '120%' }} className="my-4 opacity-100 object-contain" />
      </div>
    </div>
  );
}