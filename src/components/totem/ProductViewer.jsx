import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ProductViewer({ url, title, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col" dir="rtl">
      <iframe
        src={url}
        title={title || 'product'}
        className="w-full h-full border-0 flex-1"
        allow="fullscreen; autoplay; encrypted-media; clipboard-write"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
        title="חזרה למוצרים"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Fallback: open in new tab (for sites that block iframe embedding) */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 z-[110] px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-assistant flex items-center gap-2 transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        פתיחה בכרטיסייה חדשה
      </a>
    </div>
  );
}