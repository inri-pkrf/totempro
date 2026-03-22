import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';

const SCREENS = [
  {
    bg: '#3aafa9',
    lines: ['ברוכים הבאים והבאות', 'למכללה הלאומית', 'לאיתנות ישראלית'],
  },
  {
    bg: '#38b6d4',
    lines: ['מרכז הדרכה מוביל', 'ללמידה חדשנית של', 'ניהול מצבי חירום', 'לקידום מוכנות העורף', 'הישראלי'],
  },
  {
    bg: '#0e7490',
    lines: ['כאן מכשירים בעלי', 'תפקידים ממשרדי', 'הממשלה, הרשויות', 'הייעודיות, הרשויות', 'המקומיות ומפקדות', 'פיקוד העורף'],
  },
  {
    bg: '#f5a623',
    lines: ['לומדים ביחד', 'מתאמנים ביחד', 'מנצחים ביחד'],
  },
];

export default function ColorScreen({ screenIndex }) {
  const screen = SCREENS[screenIndex];
  if (!screen) return null;

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ backgroundColor: screen.bg }}
      dir="rtl"
    >
      {/* Header */}
      <div className="flex justify-between items-start px-[4%] pt-[3%]">
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/faed9b115_white-logo.png"
          alt="Logo"
          style={{ height: 'clamp(40px, 6vh, 72px)' }}
          className="object-contain"
        />
        <DateTimeDisplay light />
      </div>

      {/* Center text */}
      <div className="flex-1 flex flex-col items-center justify-center px-[6%]" style={{ marginTop: '-5%' }}>
        {screen.lines.map((line, i) => (
          <h1
            key={i}
            className="font-karantina text-white font-normal leading-tight text-center"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)', marginBottom: '1.5%' }}
          >
            {line}
          </h1>
        ))}
      </div>
    </div>
  );
}

export { SCREENS };