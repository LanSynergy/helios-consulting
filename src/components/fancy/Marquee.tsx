"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // seconds for one loop
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  speed = 28,
  className = "",
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`group relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] ${className}`}
    >
      <div
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee ${
          reverse ? "direction-reverse" : ""
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee ${
          reverse ? "direction-reverse" : ""
        } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
