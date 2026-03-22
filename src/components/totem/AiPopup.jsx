import React from 'react';
import { X } from 'lucide-react';

export default function AiPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-28 left-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white rounded-2xl shadow-2xl p-5 w-[70vw] relative border border-gray-100" dir="rtl">
        <button
          onClick={onClose}
          className="absolute top-2 left-2 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
        <div className="flex items-start gap-3">
          <span className="text-xl">😊</span>
          <div className="font-assistant text-sm text-gray-700 leading-relaxed">
            <strong>היי, אני סמדי Ai</strong>
            <br />
            בקרוב תוכלו לדבר איתי ועם כל הקבצים של הספרייה הלאומית לחירום
          </div>
        </div>
      </div>
    </div>
  );
}