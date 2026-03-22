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
      <div className="flex justify-between items-start p-6">
        <DateTimeDisplay light />
        <img
          src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/faed9b115_white-logo.png"
          alt="Logo"
          className="h-16 object-contain"
        />
      </div>

      {/* Center text */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {screen.lines.map((line, i) => (
          <h1
            key={i}
            className="font-karantina text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mb-4"
          >
            {line}
          </h1>
        ))}
      </div>
    </div>
  );
}

export { SCREENS };