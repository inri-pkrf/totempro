import React, { useState, useEffect } from 'react';

const hebrewDays = ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'שבת'];

function numberToGematria(num) {
  const units = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
  const tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
  const hundreds = ['', 'ק', 'ר', 'ש', 'ת'];

  // Drop thousands for year display (common practice: 5786 → 786 → תשפ"ו)
  let n = num >= 1000 ? num % 1000 : num;

  let result = '';

  while (n >= 400) {
    result += 'ת';
    n -= 400;
  }
  if (n >= 100) {
    result += hundreds[Math.floor(n / 100)];
    n = n % 100;
  }

  if (n === 15) {
    result += 'טו';
  } else if (n === 16) {
    result += 'טז';
  } else {
    if (n >= 10) {
      result += tens[Math.floor(n / 10)];
      n = n % 10;
    }
    if (n > 0) {
      result += units[n];
    }
  }

  if (result.length === 0) return '';
  if (result.length === 1) {
    return result + "'";
  }
  return result.slice(0, -1) + '"' + result.slice(-1);
}

function getHebrewDateString(date) {
  try {
    const formatter = new Intl.DateTimeFormat('he-IL-u-ca-hebrew', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const parts = formatter.formatToParts(date);
    const day = parseInt(parts.find(p => p.type === 'day')?.value);
    const month = parts.find(p => p.type === 'month')?.value;
    const year = parseInt(parts.find(p => p.type === 'year')?.value);

    if (!day || !month || !year) return '';

    return `${numberToGematria(day)} ב${month} ${numberToGematria(year)}`;
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
  const hebrewDate = getHebrewDateString(now);

  return (
    <div className="text-left text-white" dir="rtl">
      <div className="flex items-baseline gap-3 font-assistant">
        <span className="font-bold" style={{ fontSize: 'clamp(0.8rem, 2vw, 1.5rem)' }}>{hours}:{minutes}</span>
        <span style={{ fontSize: 'clamp(0.8rem, 2vw, 1.5rem)' }}>{day}.{month}.{year}</span>
      </div>
      <div className="font-assistant opacity-90" style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.95rem)' }}>
        {dayName} | {hebrewDate}
      </div>
    </div>
  );
}