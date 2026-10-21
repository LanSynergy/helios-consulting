"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const FIN_TABS = [
  {
    id: "train",
    title: "Train and test Fin to handle complex queries",
    description:
      "Start with the knowledge you already have, then train Fin on your processes and policies. Use AI-driven Simulations to test fully simulated customer conversations from start to finish, so you can confidently resolve increasingly complex, multi-step queries before going live.",
    image: "/assets/a370395864037e00e998983a510ee1477640c573-2544x1904.jpg",
    alt: "Fin testing and simulation dashboard for complex customer queries",
  },
  {
    id: "deploy",
    title: "Deploy across every channel",
    description:
      "Deploy Fin across phone, email, chat, Slack, and more so every customer receives accurate, personalized responses, wherever they reach out.",
    image: "/assets/60238bbffe9711cb3b957dadc2807d4e87b9adf6-1098x1098.webp",
    alt: "Fin performance report showing automation, involvement, and resolution rates",
  },
  {
    id: "analyze",
    title: "Analyze performance with AI-powered insights",
    description:
      "Monitor performance, spot trends, and optimize with AI-powered Suggestions, then use those Insights to retrain Fin and continuously improve your customer experience.",
    image: "/assets/23daa8a658d81cbda4ec00f0559fb6dba0f4853d-3044x3044.webp",
    alt: "Fin performance report showing automation and resolution rates alongside CX Score",
  },
];

export function FinSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % FIN_TABS.length);
      setProgressKey((k) => k + 1);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleSelect = (idx: number) => {
    setActiveTab(idx);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className="py-24 md:py-32 bg-[#faf9f6]" id="fin">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Header with Walking Figures Editorial Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#ff5a43]" />
              <span className="badge-label text-[#585858]">Fin AI Agent</span>
            </div>
            <h2 className="text-[36px] md:text-[54px] font-[400] text-[#111111] leading-[1.05] tracking-[-1.5px] font-saans mb-6">
              Fin is the <br />
              highest-performing AI agent
            </h2>
            <p className="font-serrif text-[16px] md:text-[17px] text-[#414141] font-[300] leading-relaxed max-w-[580px] mb-8">
              Fin has industry leading resolution rates, averaging 76% across 12,000+ customers, with
              many seeing over 85%. It’s trusted by many of the most forward-thinking businesses in
              the world, including Anthropic, Clay, Lightspeed, Rocket Money, Gamma, and many more.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#trial"
                className="px-5 py-2.5 bg-[#000000] text-[#ffffff] rounded-xl text-[14px] hover:bg-[#222222] transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="#demo"
                className="px-5 py-2.5 border border-[#111111] bg-[#ffffff] text-[#111111] rounded-xl text-[14px] hover:bg-[#f1eee9] transition-colors"
              >
                View demo
              </Link>
            </div>
          </div>

          {/* Right: Black Ink Walking Silhouettes */}
          <div className="lg:col-span-4 relative aspect-square max-w-[300px] ml-auto">
            <Image
              src="/assets/6065644106ab643608d5c2bdb83f8a495958d3f0-640x623.webp"
              alt="Walking figures casting long shadows"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Big Preview Screen Container */}
        <div className="relative aspect-[16/9] w-full bg-[#f1eee9] rounded-xl border border-[#dedbd6] overflow-hidden mb-12 p-3 md:p-8 flex items-center justify-center">
          <div
            key={activeTab}
            className="relative w-full h-full animate-in fade-in duration-500"
          >
            <Image
              src={FIN_TABS[activeTab].image}
              alt={FIN_TABS[activeTab].alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 3 Interactive Feature Tabs with Running Autoplay Timers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FIN_TABS.map((tab, idx) => (
            <div
              key={tab.id}
              onClick={() => handleSelect(idx)}
              className={`relative border-t border-[#dedbd6] pt-5 cursor-pointer text-left transition-opacity ${
                activeTab === idx ? "opacity-100" : "opacity-60 hover:opacity-85"
              }`}
            >
              {activeTab === idx && (
                <span
                  key={`fin-timer-${progressKey}`}
                  className="absolute top-0 left-0 h-[2px] w-full bg-[#ff5a43] origin-left animate-autoplay"
                />
              )}
              <h3 className="text-[17px] font-medium text-[#111111] font-saans mb-2">
                {tab.title}
              </h3>
              <p className="font-serrif text-[15px] text-[#585858] font-[300] leading-relaxed">
                {tab.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
