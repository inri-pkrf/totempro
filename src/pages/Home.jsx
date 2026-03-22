import React, { useState } from 'react';
import DateTimeDisplay from '../components/totem/DateTimeDisplay';
import AiPopup from '../components/totem/AiPopup';
import NavButtons from '../components/totem/NavButtons';

const BUTTONS = [
{ label: 'אתר המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png' },
{ label: 'הספרייה הלאומית לחירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/711382d76_icon2.png' },
{ label: 'הכשרות למשרדי הממשלה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png' },
{ label: 'הכשרות לרשויות המקומיות', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png' },
{ label: 'עזר ניהול מצבי חירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/28dfee8ee_icon5.png' },
{ label: "מאגר 'שאגת הארי'", icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png' }];


export default function Home({ onNavigateToVideo }) {
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
      
      {/* Top rounded bar with date/time and title */}
      <div className="mx-[3%] mt-[2%] z-20 flex-shrink-0" style={{ borderRadius: '30px', background: 'rgba(106, 155, 207, 0.85)', padding: '3% 5%' }}>
        <div className="flex justify-between items-start mb-[2%]">
          <div>
            <DateTimeDisplay />
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-karantina text-white font-normal leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            ברוכים הבאים והבאות
          </h1>
          <h2 className="font-karantina text-white font-normal leading-tight"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
            למכללה הלאומית לאיתנות ישראלית
          </h2>
        </div>
      </div>

      {/* White card */}
      <div className="mx-[3%] mt-[3%] mb-[22%] z-10 flex justify-center">
        <div className="bg-white/95 shadow-2xl flex flex-col overflow-hidden relative w-[92%] max-w-md" style={{ borderRadius: '50px', maxHeight: '60vh' }}>

          {/* Decorations */}
          <div className="absolute top-0 left-0 w-[30%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/69b22dfa6_orange.png" alt="" className="w-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[30%] pointer-events-none opacity-70">
            <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/09589c8ed_blue.png" alt="" className="w-full" />
          </div>

          {/* Card header: logo + menu */}
          <div className="pt-[4%] pb-[3%] px-[5%] flex justify-between items-center flex-shrink-0 relative z-10 gap-2">
            <img
              src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/b4fb5c195_logo.png"
              alt="Logo"
              style={{ height: 'clamp(40px, 6vw, 60px)' }}
              className="object-contain" />
            
            <button className="flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/10285006f_menu-btn.png"
                alt="תפריט"
                style={{ width: 'clamp(40px, 5vw, 60px)' }}
                className="object-contain" />
            </button>
          </div>

          {/* Buttons */}
          <div className="px-[4%] pb-[4%] flex flex-col relative z-10 gap-[2%]" dir="rtl">
            {BUTTONS.slice(0, 5).map((btn, i) =>
            <button
              key={i}
              className="flex items-center gap-2 rounded-full px-[4%] py-[1.5%] transition-all duration-200 shadow hover:shadow-md hover:brightness-110 w-full"
              style={{
                background: 'linear-gradient(to right, #003A57, #007FBD)'
              }}>
              
                <div className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
              style={{ width: 'clamp(32px, 3.5vw, 44px)', height: 'clamp(32px, 3.5vw, 44px)' }}>
                  <img src={btn.icon} alt="" style={{ width: '55%', height: '55%' }} className="object-contain" />
                </div>
                <span className="flex-1 text-white font-assistant font-bold text-right" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                  {btn.label}
                </span>
              </button>
            )}

            <div className="text-center mt-[1%]">
              <span className="text-[#1a5f7a] font-assistant font-semibold cursor-pointer hover:underline" style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}>
                עוד מוצרים דיגיטליים &gt;
              </span>
            </div>

            <button
              className="flex items-center gap-2 rounded-full px-[4%] py-[1.5%] transition-all duration-200 shadow hover:shadow-md hover:brightness-110 w-full"
              style={{
                background: 'linear-gradient(to right, #003A57, #007FBD)'
              }}>
              
                <div className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
              style={{ width: 'clamp(32px, 3.5vw, 44px)', height: 'clamp(32px, 3.5vw, 44px)' }}>
                  <img src={BUTTONS[5].icon} alt="" style={{ width: '55%', height: '55%' }} className="object-contain" />
                </div>
                <span className="flex-1 text-white font-assistant font-bold text-right" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                  {BUTTONS[5].label}
                </span>
              </button>

            <div className="text-center mt-[1%]">
              <span className="text-[#1a5f7a] font-assistant font-semibold cursor-pointer hover:underline" style={{ fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}>
                עוד מאגרים למצבי חירום &gt;
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI character - bottom left corner of white card */}
      <div className="mb-[2.125rem] pl-[7%] absolute z-20" style={{ bottom: '6.5%', left: 'calc(3% - 10px)' }}>
        <button
          onClick={() => setShowAiPopup(!showAiPopup)}
          style={{ width: 'clamp(100px, 15vw, 180px)', height: 'clamp(100px, 15vw, 180px)' }}
          className="scale-105">
          
          <img
            src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/641c5ea98_ai-btn.png"
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