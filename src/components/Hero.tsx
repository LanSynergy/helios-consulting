"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Shield, Clock, ArrowRight, Calendar, MessageSquare, CheckCircle2 } from "lucide-react";
import { VerticalCutReveal } from "./fancy/VerticalCutReveal";
import { LetterSwap } from "./fancy/LetterSwap";
import { ElasticLine } from "./fancy/ElasticLine";
import { ScrambleText } from "./fancy/ScrambleText";

export function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeQueueCount, setActiveQueueCount] = useState(148);
  const [lastResolvedTime, setLastResolvedTime] = useState("Just now");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQueueCount((prev) => prev + (Math.random() > 0.4 ? 1 : -1));
      setLastResolvedTime("12s ago");
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] pt-24 pb-14 md:pt-32 md:pb-16 border-b border-[#dedbd6]">
      {/* Editorial registration tick marks */}
      <div className="absolute top-6 left-6 text-[#dedbd6] font-mono text-[10px] select-none pointer-events-none">
        + HELIOS · OPS-2026
      </div>
      <div className="absolute top-6 right-6 text-[#dedbd6] font-mono text-[10px] select-none pointer-events-none">
        KIGALI · RWANDA +
      </div>

      {/* Floating Vignettes with Enhanced Ambient Dynamics */}
      <div className="absolute left-[2%] top-[14%] hidden xl:block w-[140px] 2xl:w-[170px] aspect-[4/5] rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm z-10 float-vignette-1 hover:scale-105 transition-transform duration-300">
        <Image
          src="/assets/f3537134afdca56c6c95cc7e598af56bbc3dfd87-600x825.webp"
          alt="HELIOS customer support specialist working in Kigali"
          fill
          className="object-cover"
          sizes="170px"
          priority
        />
        <div className="absolute bottom-2 left-2 right-2 bg-[#111111]/80 backdrop-blur-xs text-[10px] font-mono text-white px-2 py-0.5 rounded-md flex items-center justify-between">
          <span>Kigali Station</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      <div className="absolute right-[2%] top-[12%] hidden xl:block w-[150px] 2xl:w-[180px] aspect-[16/10] rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm z-10 float-vignette-2 hover:scale-105 transition-transform duration-300">
        <Image
          src="/assets/987d4efd962d3f6813c2c066ccdeaa74f2774231-600x398.webp"
          alt="Kigali morning work hours"
          fill
          className="object-cover"
          sizes="180px"
          priority
        />
        <div className="absolute top-2 right-2 bg-emerald-500/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded-md">
          Live Queue
        </div>
      </div>

      <div className="absolute left-[3%] bottom-[14%] hidden xl:block w-[130px] 2xl:w-[155px] aspect-[1/1] rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm z-10 float-vignette-2 hover:scale-105 transition-transform duration-300">
        <Image
          src="/assets/e1f962d29283402d20e6202001651a7130751ec0-600x783.webp"
          alt="Customer operations pod culture"
          fill
          className="object-cover"
          sizes="155px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 text-white font-mono text-[9px]">
          Weekly QA 99.4%
        </div>
      </div>

      <div className="absolute right-[3%] bottom-[12%] hidden xl:block w-[135px] 2xl:w-[160px] aspect-[3/4] rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm z-10 float-vignette-1 hover:scale-105 transition-transform duration-300">
        <Image
          src="/assets/33589346d03d1fe689cc38aaa4cfad8d7b849cb0-600x750.webp"
          alt="Bilingual customer support specialist"
          fill
          className="object-cover"
          sizes="160px"
        />
        <div className="absolute bottom-2 left-2 right-2 bg-[#ffffff]/90 text-[#111111] text-[9px] font-mono px-1.5 py-0.5 rounded-md flex items-center gap-1 border border-[#dedbd6]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
          <span>Bilingual Pod</span>
        </div>
      </div>

      {/* Main Centered Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center z-20">
        
        {/* Micro-label pill with living pulse effect */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#eceae5] border border-[#dedbd6] rounded-full mb-8 cursor-default shadow-xs hover:border-[#111111]/30 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
          </span>
          <ScrambleText
            text="OUTSOURCED CUSTOMER SUPPORT · KIGALI, RWANDA · BILINGUAL (EN/FR)"
            className="text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium"
          />
        </div>

        {/* Display H1 Headline with Fancy Vertical Cut Reveal */}
        <h1 className="text-[42px] sm:text-[58px] md:text-[74px] lg:text-[82px] font-sans font-normal text-[#111111] leading-[1.0] tracking-[-2.4px] max-w-4xl mx-auto mb-8">
          <VerticalCutReveal delay={50} stagger={35}>
            Dedicated customer support teams for
          </VerticalCutReveal>{" "}
          <span className="text-[#2563eb] italic font-serif font-light inline-block">
            <VerticalCutReveal delay={250} stagger={45}>
              growing digital
            </VerticalCutReveal>
          </span>{" "}
          <VerticalCutReveal delay={350} stagger={35}>
            businesses.
          </VerticalCutReveal>
        </h1>

        {/* Humanist editorial subtext */}
        <p className="font-serif italic font-light text-[18px] sm:text-[21px] text-[#555555] leading-[1.45] max-w-3xl mx-auto mb-8 tracking-[-0.2px]">
          We hire, train, and manage dedicated support specialists in Kigali, Rwanda to answer your emails, live chat, and tickets. Get dependable, bilingual customer support that integrates seamlessly into your existing tools—without the high cost or headaches of domestic hiring.
        </p>

        {/* Living Simulated Ticket Activity Ticker */}
        <div className="max-w-lg mx-auto mb-10 p-2.5 bg-[#ffffff] border border-[#dedbd6] rounded-xl shadow-xs flex items-center justify-between text-[12px] font-mono">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-0.5 h-4 w-4 text-[#2563eb]">
              <span className="w-1 bg-[#2563eb] rounded-xs animate-sound-wave-1" />
              <span className="w-1 bg-[#2563eb] rounded-xs animate-sound-wave-2" />
              <span className="w-1 bg-[#2563eb] rounded-xs animate-sound-wave-3" />
            </div>
            <span className="text-[#666666]">Live Queue Status:</span>
            <strong className="text-[#111111]">{activeQueueCount} tickets active</strong>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Resolved {lastResolvedTime}</span>
          </div>
        </div>

        {/* Primary Action Row with LetterSwap and scale transitions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-8">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto h-12 px-6 bg-[#111111] text-[#ffffff] font-medium text-[14px] rounded-xl hover:bg-[#222222] active:scale-95 transition-all flex items-center justify-center cursor-pointer group shadow-xs"
          >
            <LetterSwap
              label="Book a Discovery Call"
              icon={<Calendar className="w-4 h-4 text-[#dedbd6]" />}
            />
          </button>
          
          <a
            href="#contact"
            className="w-full sm:w-auto h-12 px-6 bg-[#ffffff] text-[#111111] font-medium text-[14px] rounded-xl border border-[#dedbd6] hover:bg-[#faf9f6] active:scale-95 transition-all flex items-center justify-center cursor-pointer group shadow-xs"
          >
            <LetterSwap
              label="Send an Inquiry"
              icon={<ArrowRight className="w-3.5 h-3.5 text-[#888888]" />}
            />
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-[12px] font-mono tracking-[0.4px] text-[#666666]">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>English & French Fluent</span>
          </div>
          <span className="text-[#dedbd6]">/</span>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>Works in Your Tools (Zendesk, Intercom, Gorgias)</span>
          </div>
          <span className="text-[#dedbd6]">/</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>14-Day Low-Risk Pilot</span>
          </div>
        </div>

      </div>

      {/* Interactive Elastic Line Separator */}
      <div className="mt-12 max-w-7xl mx-auto px-6">
        <ElasticLine height={32} strokeColor="#dedbd6" />
      </div>
    </section>
  );
}
