"use client";

import React, { useEffect, useState } from "react";
import { X, Calendar, ShieldCheck, Loader2 } from "lucide-react";

export function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIframeLoaded(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-[#faf9f6] border border-[#dedbd6] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f1eee9] border-b border-[#dedbd6]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2563eb] flex items-center justify-center text-[#ffffff] shadow-xs">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[16px] font-medium text-[#111111] font-saans tracking-tight leading-none">
                Schedule a Discovery Consultation
              </h3>
              <p className="text-[12px] text-[#666666] font-normal mt-1">
                25-minute operational alignment call with our Kigali operations desk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#585858] hover:text-[#111111] hover:bg-[#dedbd6]/60 rounded-xl transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: Active Booking Calendar Widget */}
        <div className="relative flex-1 min-h-[580px] bg-[#ffffff]">
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#faf9f6] z-10 text-[#666666] pointer-events-none transition-opacity duration-300">
              <Loader2 className="w-6 h-6 text-[#2563eb] animate-spin" />
              <span className="text-[13px] font-mono">Connecting to live calendar...</span>
            </div>
          )}
          <iframe
            src="https://koalendar.com/e/meet-with-our-team-892?embed=true"
            title="Discovery Consultation Scheduler"
            width="100%"
            height="100%"
            className="w-full h-[580px] border-0 bg-transparent relative z-0"
            allow="camera; microphone; autoplay; encrypted-media"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#f1eee9] border-t border-[#dedbd6] text-[11px] text-[#666666] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>Zero commitment required · Bilateral DPA provided prior to onboarding</span>
          </div>
          <div>Operating Hub: Kigali, Rwanda (UTC+2 / CAT)</div>
        </div>
      </div>
    </div>
  );
}
