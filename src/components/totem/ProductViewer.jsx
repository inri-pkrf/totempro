import React from 'react';
import { X } from 'lucide-react';

export default function ProductViewer({ url, title, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[110] w-14 h-14 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors shadow-lg"
        title="חזרה"
      >
        <X className="w-7 h-7" />
      </button>
      <iframe
        src={url}
        title={title}
        className="w-full h-full border-0"
        allow="fullscreen; autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}