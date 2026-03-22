import React, { useState } from 'react';
import DateTimeDisplay from '../components/totem/DateTimeDisplay';
import HomeButtons from '../components/totem/HomeButtons';
import AiPopup from '../components/totem/AiPopup';

export default function Home({ onNavigateToVideo }) {
  const [showAiPopup, setShowAiPopup] = useState(false);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(https://media.base44.com/images/public/user_6885e537f90714e91be36212/93d0b0613_bg-pic.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
      dir="rtl"
    >
      {/* Top header: date on right */}
      <div className="flex justify-between items-start px-[4%] pt-[2%] z-20">
        <div />
        <DateTimeDisplay />
      </div>

      {/* Title */}
      <div className="px-[4%] mt-[1%] text-right z-10">
        <h1 className="font-karantina text-white font-bold drop-shadow-lg leading-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
          ברוכים הבאים והבאות
        </h1>
        <h2 className="font-karantina text-white font-bold drop-shadow-lg"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 3.2rem)' }}>
          למכללה הלאומית לאיתנות ישראלית
        </h2>
      </div>

      {/* Main content card - centered, fills remaining space */}
      <div className="flex-1 flex flex-col items-center px-[4%] mt-[2%] pb-[12%] min-h-0">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-[560px] flex flex-col overflow-hidden"
             style={{ maxHeight: '100%' }}>
          {/* Card top row */}
          <div className="flex justify-between items-center px-5 pt-4 pb-2 flex-shrink-0">
            <button className="flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/10285006f_menu-btn.png"
                alt="תפריט"
                style={{ width: 'clamp(24px, 3vw, 36px)', height: 'clamp(24px, 3vw, 36px)' }}
                className="object-contain"
              />
            </button>
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              style={{ height: 'clamp(48px, 7vh, 80px)' }}
              className="object-contain"
            />
          </div>

          {/* Buttons - scrollable if needed */}
          <div className="overflow-y-auto px-4 pb-4 flex-1">
            <HomeButtons />
          </div>
        </div>
      </div>

      {/* AI character - bottom left */}
      <div className="absolute bottom-[10%] left-[3%] z-20">
        <button
          onClick={() => setShowAiPopup(!showAiPopup)}
          style={{ width: 'clamp(56px, 7vw, 88px)', height: 'clamp(56px, 7vw, 88px)' }}
          className="rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform"
        >
          <img
            src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/641c5ea98_ai-btn.png"
            alt="AI"
            className="w-full h-full object-cover"
          />
        </button>
        {showAiPopup && (
          <AiPopup isOpen={showAiPopup} onClose={() => setShowAiPopup(false)} />
        )}
      </div>

      {/* Text image bottom center */}
      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-10">
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b7ce82468_text-pic.png"
          alt=""
          style={{ height: 'clamp(24px, 3vh, 48px)' }}
          className="object-contain opacity-80"
        />
      </div>

      {/* Bottom-left navigation buttons */}
      <div className="absolute bottom-[2%] left-[3%] flex items-center gap-3 z-20">
        <button
          onClick={onNavigateToVideo}
          style={{ width: 'clamp(44px, 5vw, 64px)', height: 'clamp(44px, 5vw, 64px)' }}
          className="rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform"
        >
          <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/509cead3e_video-btn.png" alt="וידאו" className="w-full h-full object-cover" />
        </button>
        <button
          style={{ width: 'clamp(44px, 5vw, 64px)', height: 'clamp(44px, 5vw, 64px)' }}
          className="rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform"
        >
          <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/5d2d4d14b_home-btn.png" alt="בית" className="w-full h-full object-cover" />
        </button>
      </div>
    </div>
  );
}