"use client";

import React, { useRef, useState, useCallback } from "react";

interface ElasticLineProps {
  className?: string;
  strokeColor?: string;
  height?: number;
}

export function ElasticLine({
  className = "",
  strokeColor = "#dedbd6",
  height = 40,
}: ElasticLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [controlY, setControlY] = useState(height / 2);
  const [controlX, setControlX] = useState(500);
  const animFrameRef = useRef<number | null>(null);
  const isInteracting = useRef(false);

  const defaultY = height / 2;

  const springBack = useCallback(() => {
    let y = controlY;
    let velocity = 0;
    const targetY = defaultY;
    const tension = 0.12;
    const friction = 0.82;

    const tick = () => {
      if (isInteracting.current) return;
      const force = (targetY - y) * tension;
      velocity = (velocity + force) * friction;
      y += velocity;
      setControlY(y);

      if (Math.abs(velocity) > 0.05 || Math.abs(y - targetY) > 0.05) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        setControlY(targetY);
        animFrameRef.current = null;
      }
    };

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(tick);
  }, [controlY, defaultY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    isInteracting.current = true;
    setControlX(x);
    // Clamp deflection to prevent clipping
    const clampedY = Math.max(4, Math.min(height - 4, y));
    setControlY(clampedY);
  };

  const handleMouseLeave = () => {
    isInteracting.current = false;
    springBack();
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-full overflow-hidden select-none cursor-crosshair relative ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        className="w-full h-full pointer-events-none"
        viewBox={`0 0 1000 ${height}`}
        preserveAspectRatio="none"
      >
        <path
          d={`M 0 ${defaultY} Q ${controlX} ${controlY} 1000 ${defaultY}`}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.25"
        />
      </svg>
    </div>
  );
}
