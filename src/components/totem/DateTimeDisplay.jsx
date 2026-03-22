import React, { useState, useEffect } from 'react';

const hebrewDays = ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'שבת'];

function getHebrewDate() {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('he-IL-u-ca-hebrew', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return formatter.format(now);
  } catch {
    return '';
  }
}

export default function DateTimeDisplay() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const dayName = hebrewDays[now.getDay()];
  const hebrewDate = getHebrewDate();

  return (
    <div className="text-left text-white" dir="rtl">
      <div className="flex items-baseline gap-3 font-assistant">
        <span className="font-bold" style={{ fontSize: 'clamp(0.9rem, 2.25vw, 1.65rem)' }}>{hours}:{minutes}</span>
        <span style={{ fontSize: 'clamp(0.9rem, 2.25vw, 1.65rem)' }}>{day}.{month}.{year}</span>
      </div>
      <div className="font-assistant opacity-90" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1.05rem)' }}>
        {dayName} | {hebrewDate}
      </div>
    </div>
  );
}