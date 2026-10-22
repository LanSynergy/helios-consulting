"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Radio, ArrowUpRight, Calendar, Compass } from "lucide-react";
import { NumberTicker } from "./fancy/NumberTicker";
import { ElasticLine } from "./fancy/ElasticLine";
import { LetterSwap } from "./fancy/LetterSwap";
import { MagneticCard } from "./fancy/MagneticCard";
import { ScrollReveal } from "./fancy/ScrollReveal";

export function RwandaHub({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [timeKigali, setTimeKigali] = useState("12:00:00");
  const [timeLondon, setTimeLondon] = useState("11:00:00");
  const [timeNewYork, setTimeNewYork] = useState("06:00:00");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimeKigali(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Africa/Kigali",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setTimeLondon(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setTimeNewYork(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const hubPillars = [
    {
      title: "Direct European & US Timezone Overlap",
      desc: "Operating on Central Africa Time (CAT / UTC+2). This means 100% full-day overlap with the UK and Europe (GMT / CET) and early morning coverage for US East Coast teams.",
    },
    {
      title: "Educated, Career-Driven Talent Pool",
      desc: "Rwanda's university graduates bring exceptional professional discipline, strong communication skills, and high domain retention.",
    },
    {
      title: "Fast Fiber & Reliable Power",
      desc: "Kigali features modern telecom backbones, redundant fiber-optic internet, and over 99% grid stability, supported by national digital infrastructure.",
    },
    {
      title: "Strict Privacy & GDPR Alignment",
      desc: "Rwanda's data protection law (Law No. 058/2021) mirrors EU GDPR principles. We sign bilateral Data Protection Agreements (DPAs) with every client.",
    },
  ];

  return (
    <section id="rwanda" className="py-24 lg:py-32 bg-[#ffffff] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Animated Elastic Line Entry Separator */}
        <div className="mb-14">
          <ElasticLine height={28} strokeColor="#dedbd6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Left with ScrollReveal */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                    Our Operating Base
                  </span>
                </div>

                <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
                  Why Kigali, Rwanda is the ideal customer support hub.
                </h2>

                <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
                  Rwanda has rapidly emerged as East Africa&apos;s leading technology and professional services center. By building our support teams in Kigali, we provide world-class, reliable service without geopolitical complications.
                </p>
              </div>
            </ScrollReveal>

            {/* Strategic Pillars with Magnetic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {hubPillars.map((adv, idx) => (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <MagneticCard intensity={4} className="h-full">
                    <div className="bg-[#faf9f6] border border-[#dedbd6] p-5 rounded-2xl space-y-2 hover:border-[#111111]/30 transition-colors h-full">
                      <div className="flex items-center gap-2 text-[#111111] font-medium text-[13px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                        <span>{adv.title}</span>
                      </div>
                      <p className="text-[#666666] text-[12px] leading-relaxed font-normal">
                        {adv.desc}
                      </p>
                    </div>
                  </MagneticCard>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={250}>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] text-[#ffffff] text-[13px] font-medium hover:bg-[#222222] active:scale-95 transition-all cursor-pointer group shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#dedbd6]" />
                  <LetterSwap
                    label="Confirm Timezone Fit on Calendar"
                    icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />}
                  />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Timezone Synchronizer Right Console */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={150}>
              <div className="bg-[#faf9f6] border border-[#dedbd6] rounded-2xl p-6 space-y-6 shadow-xs">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#dedbd6]">
                  <div className="space-y-0.5">
                    <div className="font-mono text-[10px] uppercase tracking-[1.4px] text-[#888888]">
                      Live Timezones
                    </div>
                    <div className="text-[17px] font-medium text-[#111111]">
                      Real-Time Shift Alignment
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#dedbd6] font-mono text-[11px] text-[#2563eb] flex items-center gap-1.5 shadow-xs">
                    <Radio className="w-3 h-3 text-[#2563eb] animate-pulse" /> LIVE TELEMETRY
                  </span>
                </div>

                {/* Kigali Main Clock Box */}
                <div className="border border-[#dedbd6] rounded-2xl p-5 bg-[#ffffff] space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase font-medium text-[#888888] tracking-wider">
                      HELIOS Station · Kigali
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#2563eb]">
                      UTC+2 (CAT)
                    </span>
                  </div>
                  <div className="text-[36px] font-mono font-medium text-[#111111] tracking-tight" suppressHydrationWarning>
                    {timeKigali}
                  </div>
                  <div className="text-[12px] text-[#666666]">
                    Standard shift coverage: 08:00 – 20:00 CAT (or custom 24/7 coverage)
                  </div>
                </div>

                {/* Satellite City Clocks */}
                <div className="space-y-3 font-mono text-[12px]">
                  <div className="p-4 border border-[#dedbd6] rounded-xl bg-[#ffffff] flex items-center justify-between shadow-xs">
                    <div>
                      <span className="text-[#111111] font-medium block uppercase text-[11px]">London / Europe</span>
                      <span className="text-[#888888] text-[11px]">GMT / CET (+0/+1 hr difference)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[16px] font-medium text-[#111111] block" suppressHydrationWarning>{timeLondon}</span>
                      <span className="text-[#2563eb] text-[11px] font-medium">100% Core Hours Overlap</span>
                    </div>
                  </div>

                  <div className="p-4 border border-[#dedbd6] rounded-xl bg-[#ffffff] flex items-center justify-between shadow-xs">
                    <div>
                      <span className="text-[#111111] font-medium block uppercase text-[11px]">New York / US East</span>
                      <span className="text-[#888888] text-[11px]">EDT (-6 hrs difference)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[16px] font-medium text-[#111111] block" suppressHydrationWarning>{timeNewYork}</span>
                      <span className="text-[#2563eb] text-[11px] font-medium">Morning Hours Overlap</span>
                    </div>
                  </div>
                </div>

                {/* Number Ticker Operational Metrics Card */}
                <div className="p-5 rounded-2xl bg-[#eceae5] border border-[#dedbd6] space-y-3 text-[12px]">
                  <div className="font-mono text-[10px] uppercase tracking-[1.4px] text-[#666666] font-medium pb-2 border-b border-[#dedbd6]">
                    Kigali Hub Performance Metrics
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-[#ffffff] p-3 rounded-xl border border-[#dedbd6] shadow-xs">
                      <div className="text-[20px] font-bold text-[#2563eb]">
                        <NumberTicker value={100} suffix="%" duration={1200} />
                      </div>
                      <div className="text-[10px] font-mono text-[#666666] uppercase mt-0.5">
                        EU Overlap
                      </div>
                    </div>

                    <div className="bg-[#ffffff] p-3 rounded-xl border border-[#dedbd6] shadow-xs">
                      <div className="text-[20px] font-bold text-[#111111]">
                        <NumberTicker value={14} suffix=" Days" duration={1000} />
                      </div>
                      <div className="text-[10px] font-mono text-[#666666] uppercase mt-0.5">
                        Pilot Setup
                      </div>
                    </div>

                    <div className="bg-[#ffffff] p-3 rounded-xl border border-[#dedbd6] shadow-xs">
                      <div className="text-[20px] font-bold text-[#2563eb]">
                        <NumberTicker value={99} suffix=".9%" duration={1400} />
                      </div>
                      <div className="text-[10px] font-mono text-[#666666] uppercase mt-0.5">
                        Fiber Uptime
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-[#555555] flex items-center justify-between">
                    <span>Operational Availability:</span>
                    <strong className="font-mono text-[#111111]">Follow-The-Sun 24/7 Coverage</strong>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
