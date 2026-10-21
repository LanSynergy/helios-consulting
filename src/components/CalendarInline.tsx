"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface CalendarInlineProps {
  className?: string;
  url?: string;
}

export function CalendarInline({
  className = "",
  url = "https://koalendar.com/e/meet-with-our-team-892?embed=true",
}: CalendarInlineProps) {
  const [loading, setLoading] = useState(true);

  // Safety fallback: if iframe onLoad doesn't fire due to browser/cross-origin heuristics,
  // automatically clear the overlay after 1.8s so the calendar is immediately accessible.
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full rounded-2xl border border-[#dedbd6] bg-[#ffffff] overflow-hidden shadow-xs min-h-[640px] ${className}`}>
      {/* Loading state indicator with smooth fade out */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#faf9f6] z-10 space-y-3 pointer-events-none transition-opacity duration-300">
          <Loader2 className="w-6 h-6 text-[#2563eb] animate-spin" />
          <div className="font-mono text-[11px] uppercase tracking-[1.2px] text-[#666666]">
            Connecting to live calendar...
          </div>
        </div>
      )}

      {/* Clean 2-Pane Iframe Embed (Identical to Dialog) */}
      <iframe
        src={url}
        title="Schedule a Discovery Consultation with HELIOS Customer Operations"
        width="100%"
        height="640px"
        className="w-full h-[640px] border-0 bg-transparent block relative z-0"
        allow="camera; microphone; autoplay; encrypted-media"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
