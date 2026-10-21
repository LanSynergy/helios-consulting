"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  company: string;
  quote: string;
  highlight: string;
  author: string;
  role: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    company: "Anthropic",
    quote:
      "We’ve been seeing around 560,000 resolutions a month with Fin, at about a 79% resolution rate, which is incredible when you think of all the conversations that are not funneling to our human team.",
    highlight: "560,000 resolutions a month with Fin, at about a 79% resolution rate",
    author: "Isabel Larrow",
    role: "Head of AI Support at Anthropic",
    image: "/assets/5253ae86ee17a6e951782b763cb0643603b6dc3c-600x658.jpg",
  },
  {
    company: "Glean",
    quote:
      "What really stood out to me was how easy Fin was to use, how quick I could get it up and running. The UX was fantastic. It was a very fresh build, easy to understand and use, and it just fit well into our current tech stack.",
    highlight: "it just fit well into our current tech stack.",
    author: "Kat Crichton",
    role: "Manager of Technical Support at Glean",
    image: "/assets/8cfdda737b6cc309c239b719d503743246941cb1-600x622.webp",
  },
  {
    company: "Neo Financial",
    quote:
      "One of the biggest benefits of moving to Intercom was having a single support platform. Instead of stitching together multiple tools, we now have one connected system for both AI and human support.",
    highlight: "we now have one connected system for both AI and human support.",
    author: "Eunice Dunmade",
    role: "Product Lead at Neo Financial",
    image: "/assets/f9a00b7510ef64e724c69a4d0165c716501b4ee9-600x858.webp",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-[#f1eee9] border-y border-[#dedbd6]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Company Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16 border-b border-[#dedbd6] pb-4">
          <div className="flex items-center gap-10">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.company}
                onClick={() => setCurrentIndex(idx)}
                className={`text-[17px] pb-3 transition-all relative font-normal cursor-pointer ${
                  currentIndex === idx ? "text-[#111111] font-medium" : "text-[#888888] hover:text-[#111111]"
                }`}
              >
                {t.company}
                {currentIndex === idx && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#2563eb]" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2.5 border border-[#dedbd6] bg-[#ffffff] rounded-xl hover:border-[#111111] transition-colors cursor-pointer"
              aria-label="Previous quote"
            >
              <ArrowLeft className="w-4 h-4 text-[#111111]" />
            </button>
            <button
              onClick={next}
              className="p-2.5 border border-[#dedbd6] bg-[#ffffff] rounded-xl hover:border-[#111111] transition-colors cursor-pointer"
              aria-label="Next quote"
            >
              <ArrowRight className="w-4 h-4 text-[#111111]" />
            </button>
          </div>
        </div>

        {/* Large Editorial Pull Quote with Customer Headshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl">
          <div className="lg:col-span-8">
            <div className="font-serrif text-[24px] sm:text-[32px] md:text-[38px] leading-[1.3] text-[#111111] font-[300] mb-10">
              &ldquo;{current.quote}&rdquo;
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-1 bg-[#2563eb] rounded-full" />
              <div>
                <div className="font-saans text-[16px] font-medium text-[#111111]">
                  {current.author}
                </div>
                <div className="font-saans text-[14px] text-[#585858] font-[300]">
                  {current.role}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-48 h-56 rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm bg-[#ffffff]">
              <Image
                src={current.image}
                alt={current.author}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
