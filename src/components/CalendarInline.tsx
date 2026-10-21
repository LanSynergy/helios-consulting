"use client";

import React, { useState } from "react";
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

  return (
    <div className={`relative w-full rounded-2xl border border-[#dedbd6] bg-[#ffffff] overflow-hidden shadow-xs ${className}`}>
      {/* Loading state indicator */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#faf9f6] z-10 space-y-3">
          <Loader2 className="w-6 h-6 text-[#2563eb] animate-spin" />
          <div className="font-mono text-[11px] uppercase tracking-[1.2px] text-[#666666]">
            Loading available consultation slots...
          </div>
        </div>
      )}

      {/* Clean 2-Pane Iframe Embed (Identical to Dialog) */}
      <iframe
        src={url}
        title="Schedule a Discovery Consultation with HELIOS Customer Operations"
        width="100%"
        height="640px"
        className="w-full h-[640px] border-0 bg-transparent block"
        allow="camera; microphone; autoplay; encrypted-media"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
