"use client";

import React, { useEffect, useRef, useState } from "react";

interface VerticalCutRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  wordMode?: boolean;
}

export function VerticalCutReveal({
  children,
  className = "",
  delay = 0,
  stagger = 30,
  wordMode = true,
}: VerticalCutRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = wordMode ? children.split(" ") : children.split("");

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {items.map((item, index) => {
        const itemDelay = delay + index * stagger;
        return (
          <span
            key={index}
            className="inline-block overflow-hidden align-baseline"
          >
            <span
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                transform: isVisible ? "translateY(0%)" : "translateY(115%)",
                transitionDelay: `${itemDelay}ms`,
              }}
            >
              {item}
            </span>
            {wordMode && index < items.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
}
