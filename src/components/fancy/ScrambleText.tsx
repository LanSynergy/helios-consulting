"use client";

import React, { useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  characters?: string;
}

export function ScrambleText({
  text,
  className = "",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const handleMouseEnter = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "·" || char === "/" || char === "(" || char === ")") return char;
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }

      iteration += 1 / 2;
    }, 25);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className={`font-mono inline-block cursor-default select-none ${className}`}
    >
      {displayText}
    </span>
  );
}
