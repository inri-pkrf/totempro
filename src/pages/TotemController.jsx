import React, { useState, useEffect, useCallback, useRef } from 'react';
import Home from './Home';
import ColorScreen from '../components/totem/ColorScreen';
import VideoScreen from '../components/totem/VideoScreen';
import NavButtons from '../components/totem/NavButtons';

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
    <div className="w-screen h-screen bg-black overflow-hidden mx-auto" style={{ maxWidth: '640px' }}>
      {currentView === 'home' && (
        <Home onNavigateToVideo={handleNavigateToVideo} />
      )}

      {currentView.startsWith('color-') && (
        <ColorScreen screenIndex={parseInt(currentView.split('-')[1])} />
      )}

      {currentView === 'video' && (
        <VideoScreen onEnded={handleVideoEnd} />
      )}

      <NavButtons onNavigateToVideo={handleNavigateToVideo} onNavigateHome={handleNavigateHome} />
    </div>
  );
}