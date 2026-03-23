import React, { useState } from 'react';
import DateTimeDisplay from '../components/totem/DateTimeDisplay';
import AiPopup from '../components/totem/AiPopup';

const BUTTONS = [
  { label: 'מאגר חרבות ברזל', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png', url: null },
  { label: 'מאגר עם כלביא', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png', url: null },
];

export default function MoreDatabases({ onBack }) {
  const [showAiPopup, setShowAiPopup] = useState(false);

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
          מאגרים למצבי חירום
        </h1>
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

          {/* Card header: logo only */}
          <div className="mx-2 pt-[3%] pb-[2%] px-[5%] flex justify-start items-center flex-shrink-0 relative z-10">
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              style={{ height: 'clamp(44px, 6.5vh, 72px)' }}
              className="object-contain" />
          </div>

          {/* Title inside card */}
          <div className="text-center relative z-10 flex-shrink-0 px-[5%] mt-[6%]">
            <h2 className="font-karantina font-normal leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#003A57' }}>
              מאגרים למצבי חירום
            </h2>
          </div>

          {/* Buttons */}
          <div className="mx-auto flex-1 flex flex-col justify-center items-center relative z-10 min-h-0 gap-[3%] w-[85%]" dir="rtl">
            {BUTTONS.map((btn, i) => (
              <button
                key={i}
                disabled={!btn.url}
                onClick={() => btn.url && window.open(btn.url, '_blank')}
                className="flex items-center gap-3 rounded-full px-[4%] transition-all duration-200 shadow hover:shadow-md hover:brightness-110 w-full max-w-[85%] mx-auto"
                style={{
                  background: 'linear-gradient(to right, #003A57, #007FBD)',
                  paddingTop: '1.5%',
                  paddingBottom: '1.5%',
                  opacity: btn.url ? 1 : 0.85
                }}>
                <div className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
                  style={{ width: 'clamp(32px, 4vw, 46px)', height: 'clamp(32px, 4vw, 46px)' }}>
                  <img src={btn.icon} alt="" style={{ width: '60%', height: '60%' }} className="object-contain" />
                </div>
                <span className="flex-1 text-white font-assistant font-bold" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1.15rem)' }}>
                  {btn.label}
                </span>
              </button>
            ))}
          </div>

          {/* Back button - bottom center */}
          <div className="flex justify-center pt-[3%] pb-[3%] relative z-10 flex-shrink-0 mt-[-4%]" dir="rtl">
            <button
              onClick={onBack}
              className="font-assistant font-bold text-primary hover:underline"
              style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}>
              חזרה &gt;
            </button>
          </div>
        </div>
      </div>

      {/* AI character */}
      <div className="absolute z-20" style={{ bottom: '-1%', left: '2%', borderRadius: '100px' }}>
        <button
          onClick={() => setShowAiPopup(!showAiPopup)}
          style={{ width: 'clamp(60px, 10vw, 100px)', height: 'clamp(60px, 10vw, 100px)' }}
          className="scale-105">
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