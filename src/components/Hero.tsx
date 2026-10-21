"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Shield, Clock, ArrowRight, Calendar, Users, Building2, Globe2 } from "lucide-react";
import { VerticalCutReveal } from "./fancy/VerticalCutReveal";
import { LetterSwap } from "./fancy/LetterSwap";
import { ElasticLine } from "./fancy/ElasticLine";
import { ScrambleText } from "./fancy/ScrambleText";
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
    <section className="relative overflow-hidden bg-[#faf9f6] pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Operational Pill Tag */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#eceae5] border border-[#dedbd6] rounded-full shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
            </span>
            <ScrambleText
              text="OUTSOURCED CUSTOMER SUPPORT · KIGALI HUB · BILINGUAL (EN/FR)"
              className="text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium"
            />
          </div>
        </div>

        {/* 2-Column Split: Editorial Left (Headline & Subtext) | Visual Right (Active Workstation & Agent Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Left-aligned Headline + Compact Subheading + Dual CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[68px] font-sans font-normal text-[#111111] leading-[1.05] tracking-[-2px] text-left">
              <VerticalCutReveal delay={40} stagger={30}>
                Dedicated customer support teams for
              </VerticalCutReveal>{" "}
              <span className="text-[#2563eb] italic font-serif font-light inline-block">
                <VerticalCutReveal delay={200} stagger={35}>
                  growing digital
                </VerticalCutReveal>
              </span>{" "}
              <VerticalCutReveal delay={280} stagger={30}>
                businesses.
              </VerticalCutReveal>
            </h1>

            {/* Tight, Scannable 2-Line Subheading */}
            <p className="font-serif italic font-light text-[18px] sm:text-[20px] text-[#555555] leading-relaxed max-w-2xl text-left">
              We recruit, train, and manage dedicated bilingual support specialists in Kigali, Rwanda. They plug directly into your Zendesk, Intercom, or Gorgias—delivering world-class support at 65% lower overhead.
            </p>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 max-w-md">
              <button
                onClick={onOpenBooking}
                className="h-12 px-6 bg-[#111111] text-[#ffffff] font-medium text-[14px] rounded-xl hover:bg-[#222222] active:scale-95 transition-all flex items-center justify-center cursor-pointer group shadow-xs"
              >
                <LetterSwap
                  label="Book a Discovery Call"
                  icon={<Calendar className="w-4 h-4 text-[#dedbd6]" />}
                />
              </button>
              
              <a
                href="#contact"
                className="h-12 px-6 bg-[#ffffff] text-[#111111] font-medium text-[14px] rounded-xl border border-[#dedbd6] hover:bg-[#faf9f6] active:scale-95 transition-all flex items-center justify-center cursor-pointer group shadow-xs"
              >
                <LetterSwap
                  label="Send Support Requirements"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#888888]" />}
                />
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-3 text-[12px] font-mono text-[#666666]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>Bilingual (EN/FR)</span>
              </div>
              <span className="text-[#dedbd6]">·</span>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>Zendesk, Intercom, Gorgias</span>
              </div>
              <span className="text-[#dedbd6]">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>14-Day Pilot</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Rich Visual Mosaic with Real Specialist Photos & Live Queue Telemetry */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={150}>
              <div className="relative space-y-4">
                
                {/* Primary Card: Large Workstation Photo & Active Pod Status */}
                <MagneticCard intensity={5} className="w-full">
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#dedbd6] shadow-sm bg-white group">
                    <Image
                      src="/assets/059c3c0967b844a45fff7dfd28ba680d29d189d7-1480x1240.webp"
                      alt="HELIOS customer support operations pod in Kigali"
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                      priority
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />

                    {/* Top Overlay Badge */}
                    <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1 rounded-full flex items-center gap-2 border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Kigali Operations Pod · Active</span>
                    </div>

                    {/* Bottom Live Queue HUD */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#ffffff]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#dedbd6] flex items-center justify-between text-[12px] shadow-xs">
                      <div>
                        <div className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">
                          Current Queue
                        </div>
                        <div className="font-semibold text-[#111111]">
                          {activeQueueCount} tickets assigned
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">
                          Avg Response
                        </div>
                        <div className="font-semibold text-[#2563eb]">
                          11m 40s (99.4% SLA)
                        </div>
                      </div>
                    </div>
                  </div>
                </MagneticCard>

                {/* Secondary Bottom Strip: Specialist Avatars + Kigali Hub Stamp */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Photo Thumbnail 1 */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#dedbd6] shadow-xs group">
                    <Image
                      src="/assets/f3537134afdca56c6c95cc7e598af56bbc3dfd87-600x825.webp"
                      alt="Bilingual customer support specialist"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="240px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] text-white font-mono font-medium">
                        Senior Tier-1 Specialist
                      </span>
                    </div>
                  </div>

                  {/* Photo Thumbnail 2 */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#dedbd6] shadow-xs group">
                    <Image
                      src="/assets/33589346d03d1fe689cc38aaa4cfad8d7b849cb0-600x750.webp"
                      alt="Dedicated agent workflow"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="240px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] text-white font-mono font-medium">
                        English & French Pod
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
      <div className="mt-14 max-w-7xl mx-auto px-6">
        <ElasticLine height={28} strokeColor="#dedbd6" />
      </div>
    </section>
  );
}
