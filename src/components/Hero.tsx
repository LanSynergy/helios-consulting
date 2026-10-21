"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Shield, Clock, ArrowRight, Calendar, Users, Sparkles, Headphones } from "lucide-react";
import { LetterSwap } from "./fancy/LetterSwap";
import { ElasticLine } from "./fancy/ElasticLine";
import { MagneticCard } from "./fancy/MagneticCard";
import { ScrollReveal } from "./fancy/ScrollReveal";

export function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeQueueCount, setActiveQueueCount] = useState(148);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQueueCount((prev) => prev + (Math.random() > 0.4 ? 1 : -1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] pt-10 pb-16 md:pt-14 md:pb-20 border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Operational Pill Tag */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-semibold">
              KIGALI CUSTOMER SUPPORT PODS · BILINGUAL (EN/FR)
            </span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Grid (Ramp & Intercom Mobbin Pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (6 cols): Ultra-punchy, low cognitive load */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Punchy 2-Line Headline */}
            <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.8px] text-left">
              Outsourced support that feels{" "}
              <span className="text-[#2563eb] italic font-serif font-light inline-block">
                in-house.
              </span>
            </h1>

            {/* Lean 1-Sentence Subtitle */}
            <p className="font-serif italic font-light text-[18px] sm:text-[20px] text-[#555555] leading-snug max-w-xl text-left">
              Dedicated bilingual customer service specialists in Kigali answering your tickets, live chat, and back-office queues at 65% less cost.
            </p>

            {/* Primary Action Button Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 max-w-md">
              <button
                onClick={onOpenBooking}
                className="h-11 px-6 bg-[#111111] text-[#ffffff] font-medium text-[13px] rounded-xl hover:bg-[#222222] active:scale-95 transition-all flex items-center justify-center cursor-pointer group shadow-xs"
              >
                <LetterSwap
                  label="Book a Discovery Call"
                  icon={<Calendar className="w-3.5 h-3.5 text-[#dedbd6]" />}
                />
              </button>
              
              <a
                href="#contact"
                className="h-11 px-5 bg-[#ffffff] text-[#111111] font-medium text-[13px] rounded-xl border border-[#dedbd6] hover:bg-[#faf9f6] active:scale-95 transition-all flex items-center justify-center cursor-pointer group shadow-xs"
              >
                <LetterSwap
                  label="Send Requirements"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#888888]" />}
                />
              </a>
            </div>

            {/* Scannable Stat Chips */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-lg">
              <div className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-3 shadow-xs">
                <div className="text-[18px] font-bold text-[#2563eb] font-mono leading-none">
                  10-14d
                </div>
                <div className="text-[10.5px] font-mono text-[#666666] mt-1 uppercase tracking-tight">
                  Pilot Launch
                </div>
              </div>

              <div className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-3 shadow-xs">
                <div className="text-[18px] font-bold text-[#111111] font-mono leading-none">
                  65%
                </div>
                <div className="text-[10.5px] font-mono text-[#666666] mt-1 uppercase tracking-tight">
                  Cost Savings
                </div>
              </div>

              <div className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-3 shadow-xs">
                <div className="text-[18px] font-bold text-[#2563eb] font-mono leading-none">
                  &lt; 8%
                </div>
                <div className="text-[10.5px] font-mono text-[#666666] mt-1 uppercase tracking-tight">
                  Team Churn
                </div>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="flex items-center gap-4 pt-1 text-[11px] font-mono text-[#777777]">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2563eb]" />
                EN & FR Fluent
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
                Zendesk / Intercom
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2563eb]" />
                14-Day Pilot
              </span>
            </div>

          </div>

          {/* Right Column (6 cols): Real Black Customer Support Specialists with Headsets in Action */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="left" delay={150}>
              <div className="relative space-y-3.5">
                
                {/* Primary Card: Real Black Customer Support Specialist Wearing Headset on Live Shift */}
                <MagneticCard intensity={4} className="w-full">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#dedbd6] shadow-md bg-white group">
                    <Image
                      src="/assets/agent_black_woman_headset_1.jpg"
                      alt="Dedicated HELIOS customer support specialist with headset resolving customer inquiry from Kigali"
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500 object-center"
                      priority
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />

                    {/* Top Status HUD */}
                    <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-white text-[10.5px] font-mono px-3 py-1 rounded-full flex items-center gap-2 border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Kigali Support Station · Live Shift</span>
                    </div>

                    {/* Bottom Floating Telemetry Strip */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#ffffff]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#dedbd6] flex items-center justify-between text-[11.5px] shadow-xs">
                      <div className="flex items-center gap-2">
                        <Headphones className="w-4 h-4 text-[#2563eb]" />
                        <span className="text-[#666666]">Active Queue:</span>
                        <strong className="text-[#111111] font-mono">{activeQueueCount} tickets</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-[#666666]">Avg SLA:</span>{" "}
                        <strong className="text-[#2563eb] font-mono">11m (99.4% CSAT)</strong>
                      </div>
                    </div>
                  </div>
                </MagneticCard>

                {/* 2 Bottom Specialist Photos: Black Specialists at Workstations */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#dedbd6] shadow-xs group">
                    <Image
                      src="/assets/agent_black_man_headset_1.jpg"
                      alt="Black customer support representative with headset providing technical support"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[10px] text-white font-mono font-medium">
                        Senior Tier-1 Specialist · Kigali
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#dedbd6] shadow-xs group">
                    <Image
                      src="/assets/agent_black_woman_headset_2.jpg"
                      alt="Bilingual support agent with headset handling live inquiries on laptop"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[10px] text-white font-mono font-medium">
                        Bilingual Specialist · EN / FR
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>

      {/* Elastic Line Divider */}
      <div className="mt-12 max-w-7xl mx-auto px-6">
        <ElasticLine height={24} strokeColor="#dedbd6" />
      </div>
    </section>
  );
}
