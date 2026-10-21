"use client";

import React from "react";

interface LetterSwapProps {
  label: string;
  className?: string;
  icon?: React.ReactNode;
}

export function LetterSwap({ label, className = "", icon }: LetterSwapProps) {
  return (
    <span className={`relative inline-flex items-center gap-1.5 overflow-hidden group select-none ${className}`}>
      <span className="relative flex flex-col items-center">
        {/* Default layer */}
        <span className="inline-block transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
          {label}
        </span>
        {/* Hover swapped layer */}
        <span className="absolute top-full left-0 inline-block transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full font-inherit text-inherit">
          {label}
        </span>
      </span>
      {icon && (
        <span className="transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </span>
  );
}
