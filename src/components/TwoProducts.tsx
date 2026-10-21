"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Users, Zap } from "lucide-react";

export function TwoProducts({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeTab, setActiveTab] = useState<"dedicated" | "flex">("dedicated");
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev === "dedicated" ? "flex" : "dedicated"));
      setProgressKey((k) => k + 1);
    }, 7000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleSelect = (tab: "dedicated" | "flex") => {
    setActiveTab(tab);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className="py-20 md:py-28 bg-[#faf9f6]" id="two-models">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <span className="badge-label text-[#585858] block mb-2">Delivery Architecture</span>
          <h2 className="text-[28px] md:text-[38px] font-[400] text-[#111111] font-saans tracking-[-0.8px]">
            Two delivery models, one disciplined standard
          </h2>
        </div>

        {/* Top Tab Bar with Autoplay Progress Line */}
        <div className="flex border-b border-[#dedbd6] mb-8">
          {/* Tab 1: Dedicated Support Pods */}
          <button
            type="button"
            onClick={() => handleSelect("dedicated")}
            className={`relative pb-4 pr-10 text-[16px] md:text-[18px] transition-all font-normal cursor-pointer flex-1 md:flex-none text-left ${
              activeTab === "dedicated"
                ? "text-[#111111] font-medium"
                : "text-[#888888] hover:text-[#111111]"
            }`}
          >
            <span>Dedicated Operations Pods</span>
            {activeTab === "dedicated" && (
              <span
                key={`dedicated-${progressKey}`}
                className="absolute bottom-0 left-0 h-[2.5px] w-full bg-[#2563eb] origin-left animate-autoplay"
              />
            )}
          </button>

          {/* Tab 2: Flexible Hourly & Pilot Outsourcing */}
          <button
            type="button"
            onClick={() => handleSelect("flex")}
            className={`relative pb-4 px-10 text-[16px] md:text-[18px] transition-all font-normal cursor-pointer flex-1 md:flex-none text-left ${
              activeTab === "flex"
                ? "text-[#111111] font-medium"
                : "text-[#888888] hover:text-[#111111]"
            }`}
          >
            <span>Flexible Hours & Fixed Pilots</span>
            {activeTab === "flex" && (
              <span
                key={`flex-${progressKey}`}
                className="absolute bottom-0 left-0 h-[2.5px] w-full bg-[#2563eb] origin-left animate-autoplay"
              />
            )}
          </button>
        </div>

        {/* Dual UI Product Showcase */}
        <div className="relative bg-[#f1eee9] rounded-xl border border-[#dedbd6] p-8 md:p-12 overflow-hidden transition-all duration-500">
          {activeTab === "dedicated" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-500">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#2563eb]" />
                  <span className="badge-label text-[#2563eb]">Embedded Pod Model</span>
                </div>
                <h3 className="text-[26px] md:text-[34px] font-[400] text-[#111111] font-saans leading-tight">
                  Your dedicated frontline team in Kigali
                </h3>
                <p className="font-serrif text-[16px] text-[#414141] leading-relaxed font-[300]">
                  Full-time support and operations specialists exclusively assigned to your business.
                  They learn your internal nuances, integrate directly into your Slack and ticketing
                  dashboards, and operate under your custom SLA benchmarks.
                </p>
                <ul className="space-y-3 text-[14px] text-[#414141]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563eb]" />
                    <span>Dedicated Team Lead and continuous QA auditing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563eb]" />
                    <span>Seamless coverage across European (CET/GMT) and US mornings</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563eb]" />
                    <span>Zero shared-agent dilution or conflicting priorities</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 bg-[#000000] text-[#ffffff] rounded-xl text-[14px] hover:bg-[#222222] transition-colors cursor-pointer"
                  >
                    Discuss Pod Sizing
                  </button>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] bg-[#ffffff] rounded-xl overflow-hidden border border-[#dedbd6]">
                  <Image
                    src="/assets/ea5258c6b885508f00caafacfd62f040900f8561-6400x2800.jpg"
                    alt="HELIOS customer operations dashboard and inbox"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-500">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#2563eb]" />
                  <span className="badge-label text-[#2563eb]">Risk-Free Trial</span>
                </div>
                <h3 className="text-[26px] md:text-[34px] font-[400] text-[#111111] font-saans leading-tight">
                  Fixed-scope evaluation pilots with zero long-term lock-in
                </h3>
                <p className="font-serrif text-[16px] text-[#414141] leading-relaxed font-[300]">
                  Test operational quality, response cadence, and communication discipline with a
                  2-to-4 week structured trial. We audit your workflows, refine your macros, and prove
                  SLA delivery before you commit.
                </p>
                <ul className="space-y-3 text-[14px] text-[#414141]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563eb]" />
                    <span>Pay-as-you-go hourly blocks or capped pilot engagements</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563eb]" />
                    <span>Weekly CSAT, first-contact resolution, and QA report cards</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563eb]" />
                    <span>Smooth transition to permanent dedicated pods anytime</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 bg-[#2563eb] text-[#ffffff] rounded-xl text-[14px] hover:bg-[#0005a3] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Request Pilot Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] bg-[#ffffff] rounded-xl overflow-hidden border border-[#dedbd6]">
                  <Image
                    src="/assets/ebe96eeb07f59fd9f0c885a6e468a5acddf54748-6400x2800.jpg"
                    alt="HELIOS ticket triage and SLA governance"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
