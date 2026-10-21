"use client";

import React from "react";
import { BRAND_LOGOS } from "./BrandLogos";

export function LogoWall() {
  return (
    <section className="py-20 md:py-28 border-y border-[#dedbd6] bg-[#faf9f6]" id="customers">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-mono-saans text-[13px] tracking-[1.4px] uppercase text-[#888888]">
            Trusted by 30,000+ leading brands
          </p>
        </div>

        {/* 6-column monochrome grid with generous editorial spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center">
          {BRAND_LOGOS.slice(0, 18).map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-10 w-full text-[#888888] hover:text-[#111111] transition-colors duration-200"
              title={brand.name}
            >
              <div className="h-8 w-auto max-w-[130px] flex items-center justify-center [&_svg]:h-7 [&_svg]:w-auto [&_svg]:max-w-full">
                {brand.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
