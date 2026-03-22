import React, { useRef, useEffect } from 'react';

export default function VideoScreen({ onEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
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