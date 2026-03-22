import React from 'react';

const BUTTONS = [
  { label: 'אתר המכללה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png' },
  { label: 'הספרייה הלאומית לחירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/711382d76_icon2.png' },
  { label: 'הכשרות למשרדי הממשלה', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png' },
  { label: 'הכשרות לרשויות המקומיות', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/28dfee8ee_icon5.png' },
  { label: 'עזר ניהול מצבי חירום', icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png' },
];

const EXTRA_BUTTON = {
  label: "מאגר 'שאגת הארי'",
  icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png',
};

export default function HomeButtons() {
  return (
    <div className="flex flex-col gap-2 w-full" dir="rtl">
      {BUTTONS.map((btn, i) => (
        <button
          key={i}
          className="flex items-center gap-3 bg-white/80 hover:bg-white/95 border-2 border-[#1a6b8a] rounded-full px-4 py-2 transition-all duration-200 shadow hover:shadow-md group w-full"
        >
          <span className="flex-1 text-right text-[#0c4a6e] font-assistant font-bold" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)' }}>
            {btn.label}
          </span>
          <div className="rounded-full bg-white border-2 border-[#1a6b8a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
               style={{ width: 'clamp(36px, 4vw, 48px)', height: 'clamp(36px, 4vw, 48px)' }}>
            <img src={btn.icon} alt="" style={{ width: 'clamp(20px, 2.5vw, 30px)', height: 'clamp(20px, 2.5vw, 30px)' }} className="object-contain" />
          </div>
        </button>
      ))}

      <div className="text-center my-1">
        <span className="text-[#0c4a6e] font-assistant font-semibold cursor-pointer hover:underline" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)' }}>
          עוד מוצרים דיגיטליים &gt;
        </span>
      </div>

      <button
        className="flex items-center gap-3 bg-white/80 hover:bg-white/95 border-2 border-[#1a6b8a] rounded-full px-4 py-2 transition-all duration-200 shadow hover:shadow-md group w-full"
      >
        <span className="flex-1 text-right text-[#0c4a6e] font-assistant font-bold" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)' }}>
          {EXTRA_BUTTON.label}
        </span>
        <div className="rounded-full bg-white border-2 border-[#1a6b8a] flex items-center justify-center flex-shrink-0"
             style={{ width: 'clamp(36px, 4vw, 48px)', height: 'clamp(36px, 4vw, 48px)' }}>
          <img src={EXTRA_BUTTON.icon} alt="" style={{ width: 'clamp(20px, 2.5vw, 30px)', height: 'clamp(20px, 2.5vw, 30px)' }} className="object-contain" />
        </div>
      </button>

      <div className="text-center my-1">
        <span className="text-[#0c4a6e] font-assistant font-semibold cursor-pointer hover:underline" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)' }}>
          עוד מאגרים למצבי חירום &gt;
        </span>
      </div>
    </div>
  );
}