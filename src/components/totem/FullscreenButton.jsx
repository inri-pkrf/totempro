import React, { useState, useEffect, useCallback } from 'react';
import { Maximize, Minimize } from 'lucide-react';

export default function FullscreenButton({ className, style, iconSize = 'clamp(1.2rem, 3vh, 2rem)' }) {
  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      document.documentElement.requestFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <button
      onClick={toggleFullscreen}
      className={`flex items-center justify-center rounded-full transition-transform hover:scale-110 ${className || ''}`}
      style={style}
      title={isFullscreen ? 'יציאה ממסך מלא' : 'מסך מלא'}
    >
      {isFullscreen ? <Minimize style={{ width: iconSize, height: iconSize }} /> : <Maximize style={{ width: iconSize, height: iconSize }} />}
    </button>
  );
}