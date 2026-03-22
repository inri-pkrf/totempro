import React, { useState } from 'react';
import DateTimeDisplay from '../components/totem/DateTimeDisplay';
import HomeButtons from '../components/totem/HomeButtons';
import AiPopup from '../components/totem/AiPopup';

export default function Home({ onNavigateToVideo }) {
  const [showAiPopup, setShowAiPopup] = useState(false);

  return (
    <div
      className="w-[1920px] h-[1080px] relative overflow-hidden"
      style={{
        backgroundImage: `url(https://media.base44.com/images/public/user_6885e537f90714e91be36212/93d0b0613_bg-pic.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      dir="rtl"
    >
      {/* Top header area */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-6 z-20">
        <DateTimeDisplay />
        <div />
      </div>

      {/* Title */}
      <div className="absolute top-6 left-0 right-0 text-center z-10">
        <h1 className="font-karantina text-white text-6xl font-bold drop-shadow-lg leading-tight">
          ברוכים הבאים והבאות
        </h1>
        <h2 className="font-karantina text-white text-4xl font-bold drop-shadow-lg mt-1">
          למכללה הלאומית לאיתנות ישראלית
        </h2>
      </div>

      {/* Main content card */}
      <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-[520px] z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl relative">
          {/* Logo top right */}
          <div className="flex justify-between items-start mb-4">
            {/* Menu button top left */}
            <button className="w-10 h-10 flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/10285006f_menu-btn.png"
                alt="תפריט"
                className="w-8 h-8 object-contain"
              />
            </button>
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Buttons */}
          <HomeButtons />
        </div>
      </div>

      {/* AI character - bottom left of card area */}
      <div className="absolute bottom-[180px] left-[calc(50%-260px)] z-20">
        <button
          onClick={() => setShowAiPopup(!showAiPopup)}
          className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform"
        >
          <img
            src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/641c5ea98_ai-btn.png"
            alt="AI"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* AI Popup */}
      <AiPopup isOpen={showAiPopup} onClose={() => setShowAiPopup(false)} />

      {/* Text image at bottom */}
      <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-10">
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b7ce82468_text-pic.png"
          alt=""
          className="h-10 object-contain opacity-80"
        />
      </div>

      {/* Bottom right navigation buttons */}
      <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
        <button
          onClick={onNavigateToVideo}
          className="w-14 h-14 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/509cead3e_video-btn.png"
            alt="וידאו"
            className="w-full h-full object-cover"
          />
        </button>
        <button className="w-14 h-14 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform">
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