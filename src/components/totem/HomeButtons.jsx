import React from 'react';

const BUTTONS = [
  {
    label: 'אתר המכללה',
    icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/cffd7f87c_icon1.png',
  },
  {
    label: 'הספרייה הלאומית לחירום',
    icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/711382d76_icon2.png',
  },
  {
    label: 'הכשרות למשרדי הממשלה',
    icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png',
  },
  {
    label: 'הכשרות לרשויות המקומיות',
    icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/28dfee8ee_icon5.png',
  },
  {
    label: 'עזר ניהול מצבי חירום',
    icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/01ea85710_icon6.png',
  },
];

const EXTRA_BUTTON = {
  label: "מאגר 'שאגת הארי'",
  icon: 'https://media.base44.com/images/public/user_6885e537f90714e91be36212/64e9c981f_icon3-4.png',
};

export default function HomeButtons() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[420px]">
      {BUTTONS.map((btn, i) => (
        <button
          key={i}
          className="flex items-center gap-4 bg-white/80 hover:bg-white/95 border-2 border-[#1a6b8a] rounded-full px-5 py-3 transition-all duration-200 shadow-md hover:shadow-lg group"
          dir="rtl"
        >
          <span className="flex-1 text-right text-[#0c4a6e] font-assistant font-bold text-lg">
            {btn.label}
          </span>
          <div className="w-12 h-12 rounded-full bg-white border-2 border-[#1a6b8a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <img src={btn.icon} alt="" className="w-7 h-7 object-contain" />
          </div>
        </button>
      ))}

      <div className="text-center mt-1">
        <span className="text-[#0c4a6e] font-assistant font-semibold text-sm cursor-pointer hover:underline">
          עוד מוצרים דיגיטליים &gt;
        </span>
      </div>

      <button
        className="flex items-center gap-4 bg-white/80 hover:bg-white/95 border-2 border-[#1a6b8a] rounded-full px-5 py-3 transition-all duration-200 shadow-md hover:shadow-lg group"
        dir="rtl"
      >
        <span className="flex-1 text-right text-[#0c4a6e] font-assistant font-bold text-lg">
          {EXTRA_BUTTON.label}
        </span>
        <div className="w-12 h-12 rounded-full bg-white border-2 border-[#1a6b8a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
          <img src={EXTRA_BUTTON.icon} alt="" className="w-7 h-7 object-contain" />
        </div>
      </button>

      <div className="text-center mt-1">
        <span className="text-[#0c4a6e] font-assistant font-semibold text-sm cursor-pointer hover:underline">
          עוד מאגרים למצבי חירום &gt;
        </span>
      </div>
    </div>
  );
}