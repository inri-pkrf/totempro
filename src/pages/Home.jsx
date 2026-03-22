import React, { useState } from 'react';
import DateTimeDisplay from '../components/totem/DateTimeDisplay';
import HomeButtons from '../components/totem/HomeButtons';
import AiPopup from '../components/totem/AiPopup';

export default function Home({ onNavigateToVideo }) {
  const [showAiPopup, setShowAiPopup] = useState(false);

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        backgroundImage: `url(https://media.base44.com/images/public/user_6885e537f90714e91be36212/93d0b0613_bg-pic.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      dir="rtl"
    >
      {/* Top header: date on right, empty on left */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start px-8 pt-6 z-20">
        <div /> {/* spacer */}
        <DateTimeDisplay />
      </div>

      {/* Title top-right area (below date) */}
      <div className="absolute top-24 right-8 left-8 text-right z-10">
        <h1 className="font-karantina text-white text-7xl font-bold drop-shadow-lg leading-tight">
          ברוכים הבאים והבאות
        </h1>
        <h2 className="font-karantina text-white text-5xl font-bold drop-shadow-lg mt-1">
          למכללה הלאומית לאיתנות ישראלית
        </h2>
      </div>

      {/* Main content card - centered */}
      <div className="absolute top-[320px] left-1/2 -translate-x-1/2 w-[620px] z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl relative">
          {/* Card top row: menu on left, logo on right */}
          <div className="flex justify-between items-center mb-5">
            <button className="w-12 h-12 flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/10285006f_menu-btn.png"
                alt="תפריט"
                className="w-8 h-8 object-contain"
              />
            </button>
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              className="h-20 object-contain"
            />
          </div>

          {/* Buttons */}
          <HomeButtons />
        </div>
      </div>

      {/* AI character bottom-left of card */}
      <div className="absolute bottom-[260px] left-[calc(50%-310px)] z-20">
        <div className="relative">
          <button
            onClick={() => setShowAiPopup(!showAiPopup)}
            className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform"
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
      </div>

      {/* Text image at bottom center */}
      <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 z-10">
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b7ce82468_text-pic.png"
          alt=""
          className="h-12 object-contain opacity-80"
        />
      </div>

      {/* Bottom-left navigation buttons */}
      <div className="absolute bottom-8 left-8 flex items-center gap-4 z-20">
        <button
          onClick={onNavigateToVideo}
          className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/509cead3e_video-btn.png"
            alt="וידאו"
            className="w-full h-full object-cover"
          />
        </button>
        <button className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform">
          <img
            src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/5d2d4d14b_home-btn.png"
            alt="בית"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
}