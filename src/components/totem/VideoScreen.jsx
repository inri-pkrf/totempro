export default function VideoScreen({ onEnded, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isActive]);

  const videoUrl = "https://base44.app/api/apps/69bfa8f7c160ff3fb92ea9a6/files/mp/public/69bfa8f7c160ff3fb92ea9a6/c9c35aa23_4k.mp4";

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-200 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={onEnded}
        muted
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}