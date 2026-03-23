import React, { useState } from 'react';

export default function AnimatedButton({ label, icon, onClick, disabled }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setActive(true);
    setTimeout(() => {
      setActive(false);
      if (onClick) onClick();
    }, 600);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="flex items-center gap-3 rounded-full px-[4%] transition-all duration-200 shadow hover:shadow-md w-full max-w-[85%] mx-auto overflow-hidden relative"
      style={{
        paddingTop: '1.5%',
        paddingBottom: '1.5%',
        border: active ? '2.5px solid #007FBD' : '2.5px solid transparent',
        opacity: disabled ? 0.85 : 1,
        background: active ? 'white' : 'linear-gradient(to right, #003A57, #007FBD)',
        transition: 'background 0.5s ease, border 0.2s ease, color 0.3s ease',
      }}>

      {/* Animated white fill overlay (RTL: right to left = starts from right) */}
      {active && (
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'white',
            animation: 'fillRTL 0.5s ease forwards',
          }}
        />
      )}

      <div
        className="rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
        style={{
          width: 'clamp(32px, 4vw, 46px)',
          height: 'clamp(32px, 4vw, 46px)',
          background: active ? '#007FBD' : 'white',
          transition: 'background 0.3s ease',
        }}>
        <img src={icon} alt="" style={{ width: '60%', height: '60%' }} className="object-contain" />
      </div>

      <span
        className="flex-1 font-assistant font-bold relative z-10"
        style={{
          fontSize: 'clamp(0.8rem, 1.8vw, 1.15rem)',
          color: active ? '#003A57' : 'white',
          transition: 'color 0.3s ease',
        }}>
        {label}
      </span>

      <style>{`
        @keyframes fillRTL {
          from { clip-path: inset(0 0 0 100%); }
          to   { clip-path: inset(0 0 0 0%); }
        }
      `}</style>
    </button>
  );
}