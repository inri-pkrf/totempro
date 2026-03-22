import React from 'react';

export default function NavButtons({ onNavigateToVideo, onNavigateHome }) {
  return (
    <div className="fixed z-50 flex items-center gap-3" style={{ bottom: '2%', right: '4%' }}>
      <button
        onClick={onNavigateToVideo}
        style={{ width: 'clamp(35px, 5vw, 55px)', height: 'clamp(35px, 5vw, 55px)', backgroundColor: 'rgba(247, 179, 124, 0.9)' }}
        className="rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform"
      >
        <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/509cead3e_video-btn.png" alt="וידאו" className="w-full h-full object-cover" />
      </button>
      <button
        onClick={onNavigateHome}
        style={{ width: 'clamp(35px, 5vw, 55px)', height: 'clamp(35px, 5vw, 55px)', backgroundColor: 'rgba(247, 179, 124, 0.9)' }}
        className="rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform"
      >
        <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/5d2d4d14b_home-btn.png" alt="בית" className="w-full h-full object-cover" />
      </button>
    </div>
  );
}