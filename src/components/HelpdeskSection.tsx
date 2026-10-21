"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HELPDESK_TABS = [
  {
    id: "copilot",
    title: "Maximize efficiency with Copilot 2 in the Inbox",
    description:
      "Copilot proactively works before your team asks, connects to the tools they already use, and takes care of the admin - all without leaving the inbox.",
    image: "/assets/023a075a7061bc83a8e0fb38955d3242a0d3d82c-4952x2236.jpg",
    alt: "Intercom inbox auto-translating a customer conversation from Spanish alongside Copilot",
  },
  {
    id: "ticketing",
    title: "Ticketing, built for collaboration",
    description:
      "One ticketing system for customer issues, back-office collaboration, and tracker tickets that resolve widespread problems, keeping everyone aligned and customers informed.",
    image: "/assets/f90345730b8aeeb67178c7bafb0fffecd722f178-3714x1677.webp",
    alt: "Customer-facing ticket status card for an address change request alongside agent view",
  },
  {
    id: "proactive",
    title: "Support for customers, before they need it",
    description:
      "Onboard, educate, and notify your customers with in-context, automated messages that cut support volume and keep customers happy.",
    image: "/assets/a78f1e62fff0f7e0b8288a798133c2526f336d14-3714x1677.webp",
    alt: "Product tour, site maintenance banner, and onboarding checklist in banking app",
  },
];

export function HelpdeskSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % HELPDESK_TABS.length);
      setProgressKey((k) => k + 1);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleSelect = (idx: number) => {
    setActiveTab(idx);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className="py-24 md:py-32 bg-[#faf9f6]" id="helpdesk">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#2563eb]" />
            <span className="badge-label text-[#585858]">Intercom Helpdesk</span>
          </div>
          <h2 className="text-[36px] md:text-[54px] font-[400] text-[#111111] leading-[1.05] tracking-[-1.5px] font-saans mb-6">
            Intercom is a fully-featured <br />
            AI-powered helpdesk
          </h2>
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

        {/* Big Preview Screen Container */}
        <div className="relative aspect-[16/9] w-full bg-[#f1eee9] rounded-xl border border-[#dedbd6] overflow-hidden mb-12 p-3 md:p-8 flex items-center justify-center">
          <div
            key={activeTab}
            className="relative w-full h-full animate-in fade-in duration-500"
          >
            <Image
              src={HELPDESK_TABS[activeTab].image}
              alt={HELPDESK_TABS[activeTab].alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 3 Interactive Feature Tabs Below with Running Autoplay Timers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HELPDESK_TABS.map((tab, idx) => (
            <div
              key={tab.id}
              onClick={() => handleSelect(idx)}
              className={`relative border-t border-[#dedbd6] pt-5 cursor-pointer text-left transition-opacity ${
                activeTab === idx ? "opacity-100" : "opacity-60 hover:opacity-85"
              }`}
            >
              {activeTab === idx && (
                <span
                  key={`hd-timer-${progressKey}`}
                  className="absolute top-0 left-0 h-[2px] w-full bg-[#2563eb] origin-left animate-autoplay"
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
