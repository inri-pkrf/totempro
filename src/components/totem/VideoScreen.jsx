import React, { useRef, useEffect } from 'react';

export default function VideoScreen({ onEnded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const videoUrl = "https://base44.app/api/apps/69bfa8f7c160ff3fb92ea9a6/files/mp/public/69bfa8f7c160ff3fb92ea9a6/89e34bf6b_.mp4";

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={onEnded}
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}