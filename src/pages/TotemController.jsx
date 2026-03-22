import React, { useState, useEffect, useCallback, useRef } from 'react';
import Home from './Home';
import ColorScreen from '../components/totem/ColorScreen';
import VideoScreen from '../components/totem/VideoScreen';

const COLOR_SCREEN_COUNT = 4;
const COLOR_DURATION = 5000;
const HOME_DURATION = 60000;

export default function TotemController() {
  const [currentView, setCurrentView] = useState('home');
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startCycle = useCallback(() => {
    clearTimer();
    setCurrentView('home');
    timerRef.current = setTimeout(() => {
      setCurrentView('color-0');
    }, HOME_DURATION);
  }, []);

  useEffect(() => {
    startCycle();
    return clearTimer;
  }, [startCycle]);

  useEffect(() => {
    if (currentView.startsWith('color-')) {
      const index = parseInt(currentView.split('-')[1]);
      clearTimer();
      timerRef.current = setTimeout(() => {
        if (index < COLOR_SCREEN_COUNT - 1) {
          setCurrentView(`color-${index + 1}`);
        } else {
          setCurrentView('video');
        }
      }, COLOR_DURATION);
    }
  }, [currentView]);

  const handleVideoEnd = useCallback(() => startCycle(), [startCycle]);
  const handleNavigateToVideo = useCallback(() => { clearTimer(); setCurrentView('color-0'); }, []);
  const handleNavigateHome = useCallback(() => startCycle(), [startCycle]);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      {currentView === 'home' && (
        <Home onNavigateToVideo={handleNavigateToVideo} />
      )}

      {currentView.startsWith('color-') && (
        <div className="w-full h-full relative">
          <ColorScreen screenIndex={parseInt(currentView.split('-')[1])} />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
            <button className="w-[6vw] h-[6vw] max-w-[60px] max-h-[60px] rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform">
              <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/509cead3e_video-btn.png" alt="וידאו" className="w-full h-full object-cover" />
            </button>
            <button onClick={handleNavigateHome} className="w-[6vw] h-[6vw] max-w-[60px] max-h-[60px] rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform">
              <img src="https://media.base44.com/images/public/user_6885e537f90714e91be36212/5d2d4d14b_home-btn.png" alt="בית" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      )}

      {currentView === 'video' && (
        <VideoScreen onEnded={handleVideoEnd} />
      )}
    </div>
  );
}