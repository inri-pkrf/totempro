import React, { useRef, useEffect, useState } from 'react';

export default function VideoScreen({ onEnded }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isMobile]);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={onEnded}
        muted
        playsInline
      >
        <source src="https://base44.app/api/apps/69bfa8f7c160ff3fb92ea9a6/files/mp/public/69bfa8f7c160ff3fb92ea9a6/e017ffda5_introVidComp.mp4" type="video/mp4" />
      </video>
    </div>
  );
}