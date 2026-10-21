"use client";

import React, { useEffect, useRef, useState } from "react";
import { Calendar, RefreshCw, ExternalLink } from "lucide-react";

declare global {
  interface Window {
    Koalendar?: any;
  }
}

interface CalendarInlineProps {
  className?: string;
  url?: string;
  targetId?: string;
}

export function CalendarInline({
  className = "",
  url = "https://koalendar.com/e/meet-with-our-team-892",
  targetId = "inline-widget-meet-with-our-team-892",
}: CalendarInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeMode, setIframeMode] = useState(false);

  useEffect(() => {
    // Initialize widget queue
    window.Koalendar =
      window.Koalendar ||
      function () {
        (window.Koalendar.props = window.Koalendar.props || []).push(arguments);
      };

    const SCRIPT_SRC = "https://koalendar.com/assets/widget.js";
    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`) as HTMLScriptElement;

    const initializeInline = () => {
      try {
        if (window.Koalendar) {
          window.Koalendar("inline", {
            url: url,
            selector: `#${targetId}`,
          });
        }
      } catch (err) {
        console.error("Error invoking inline calendar:", err);
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = initializeInline;
      document.body.appendChild(script);
    } else {
      initializeInline();
    }

    // Fallback if script is blocked by extensions/adblockers
    const timeout = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el && el.children.length === 0) {
        setIframeMode(true);
      }
    }, 2800);

    return () => clearTimeout(timeout);
  }, [url, targetId]);

  return (
    <div className={`bg-[#ffffff] rounded-2xl border border-[#dedbd6] overflow-hidden shadow-xs w-full ${className}`}>
      {/* Header Bar */}
      <div className="bg-[#111111] px-6 py-4 text-white border-b border-[#dedbd6]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-[17px] font-medium text-white tracking-tight flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#2563eb]" />
              <span>Schedule a Discovery Call</span>
            </h3>
            <p className="text-[#a0a0a0] text-xs mt-0.5 leading-relaxed">
              Meet directly with HELIOS operations specialists. 25 minutes · Video / Audio · Local timezone auto-detected.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563eb] border border-[#2563eb]/40 px-3 py-1 rounded-full bg-[#2563eb]/10 self-start sm:self-auto">
            Live Calendar
          </span>
        </div>
      </div>

      {/* Main Embed Area - Unconstrained height to avoid internal scroll clipping */}
      <div className="p-3 sm:p-5 bg-[#faf9f6]">
        {/* Script Container with full min-height for complete 2-pane view */}
        <div
          ref={containerRef}
          id={targetId}
          className={`w-full min-h-[780px] rounded-xl overflow-hidden bg-white [&_iframe]:w-full [&_iframe]:min-h-[780px] [&_iframe]:border-0 ${
            iframeMode ? "hidden" : "block"
          }`}
        />

        {/* Fallback View */}
        {iframeMode && (
          <iframe
            src={url}
            title="Schedule a meeting with HELIOS Customer Operations"
            className="w-full h-[780px] rounded-xl border-0 bg-white"
            loading="lazy"
            allow="camera; microphone; autoplay; encrypted-media"
          />
        )}

        {/* Bottom Bar */}
        <div className="mt-3 pt-3 border-t border-[#dedbd6] flex flex-wrap items-center justify-between gap-3 text-xs text-[#666666] px-1">
          <span>No commitment required. Operational scope and pilot consultation.</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIframeMode(!iframeMode)}
              className="inline-flex items-center gap-1 text-[#666666] hover:text-[#2563eb] underline cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>{iframeMode ? "Script View" : "Calendar not loading? Click here"}</span>
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#2563eb] font-medium hover:underline"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
