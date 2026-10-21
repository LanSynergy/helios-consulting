"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "none",
  distance = 0,
}: ScrollRevealProps) {
  // Direct visible rendering by default with immediate CSS transition enhancement
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`transition-opacity duration-500 ease-out ${className}`} style={{ opacity: 1 }}>
      {children}
    </div>
  );
}
