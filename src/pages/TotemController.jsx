import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Maximize, Minimize } from 'lucide-react';
import Home from './Home';
import VideoScreen from '../components/totem/VideoScreen';
import NavButtons from '../components/totem/NavButtons';

const COLOR_SCREEN_COUNT = 4;
const COLOR_DURATION = 5000;
const HOME_DURATION = 300000;

export default function TotemController() {
  const [currentView, setCurrentView] = useState('home');
  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  const enterFullscreen = useCallback(() => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else if (containerRef.current) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    enterFullscreen();
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, [enterFullscreen]);

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
      setCurrentView('video');
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
  const handleNavigateToVideo = useCallback(() => { clearTimer(); setCurrentView('video'); }, []);
  const handleNavigateHome = useCallback(() => startCycle(), [startCycle]);

  return (
    <div ref={containerRef} className="w-screen h-screen bg-black overflow-hidden">
      {currentView === 'home' && (
        <Home onNavigateToVideo={handleNavigateToVideo} onNavigateHome={handleNavigateHome} />
      )}


      <VideoScreen 
        onEnded={handleVideoEnd} 
        isActive={currentView === 'video'} 
      />

      <NavButtons onNavigateToVideo={handleNavigateToVideo} onNavigateHome={handleNavigateHome} />

      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
        title={isFullscreen ? 'יציאה ממסך מלא' : 'מסך מלא'}
      >
        {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
      </button>
    </div>
  );
}