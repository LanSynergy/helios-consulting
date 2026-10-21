import React from "react";

export function HeliosIcon({ className = "w-6 h-6 text-[#111111]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="HELIOS Icon"
    >
      <rect width="120" height="120" rx="4" fill="currentColor" fillOpacity="0.06" />
      {/* Left Pillar */}
      <path
        d="M28 24H44V96H28V24Z"
        fill="currentColor"
      />
      {/* Right Pillar */}
      <path
        d="M76 24H92V96H76V24Z"
        fill="currentColor"
      />
      {/* Middle Crossbar */}
      <path
        d="M44 54H76V66H44V54Z"
        fill="currentColor"
      />
      {/* Solar Core */}
      <circle cx="60" cy="40" r="10" fill="#2563eb" />
    </svg>
  );
}

export function HeliosLogo({
  className = "h-5 w-auto text-[#111111]",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const iconSize = size === "sm" ? "w-5 h-5" : size === "lg" ? "w-8 h-8" : "w-6 h-6";
  const titleSize = size === "sm" ? "text-[15px]" : size === "lg" ? "text-[20px]" : "text-[17px]";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <HeliosIcon className={`${iconSize} text-[#111111]`} />
      <div className="flex flex-col">
        <span className={`font-saans font-semibold ${titleSize} tracking-[-0.5px] leading-tight text-[#111111]`}>
          HELIOS
        </span>
        <span className="font-mono-saans text-[9px] tracking-[1.4px] uppercase text-[#888888] leading-none">
          Customer Operations
        </span>
      </div>
    </div>
  );
}
export default HeliosLogo;
