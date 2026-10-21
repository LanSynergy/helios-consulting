"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Heart, ShieldCheck, Award, Sparkles } from "lucide-react";
import { ScrollReveal } from "./fancy/ScrollReveal";
import { MagneticCard } from "./fancy/MagneticCard";
import { LetterSwap } from "./fancy/LetterSwap";

export function AboutSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const principles = [
    { num: "01", title: "Customer Empathy", desc: "Solve the customer's actual problem with patience and clear guidance, not rushed copy-paste templates." },
    { num: "02", title: "Radical Transparency", desc: "Honest communication about capabilities, SLA limits, and ticket turnaround times. Zero hidden fees." },
    { num: "03", title: "Direct Accountability", desc: "Own issues directly. Flag recurring bugs early to client engineering leads on Slack rather than hiding edge cases." },
    { num: "04", title: "Continuous QA Coaching", desc: "Use weekly ticket audits and customer CSAT feedback to coach agents and raise answer accuracy week over week." },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#ffffff] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Split Narrative & Visual Hero Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Narrative Left (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                  <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                    Our Story & Mission
                  </span>
                </div>

                <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-sans font-normal text-[#111111] leading-[1.05] tracking-[-1.6px]">
                  A human-first customer operations partner.
                </h2>

                <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
                  Founded in Kigali, Rwanda to give growing tech startups a smarter alternative to domestic payroll and low-quality mass call centers.
                </p>

                <p className="text-[13.5px] text-[#666666] leading-relaxed pt-1 font-normal">
                  We recruit bilingual university graduates, pay them competitive career wages, and provide structured training. Our agents become a seamless extension of your internal team, working directly in your Zendesk, Intercom, or Gorgias queues with complete transparency.
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] text-[#ffffff] text-[13px] font-medium hover:bg-[#222222] active:scale-95 transition-all cursor-pointer group shadow-xs"
                >
                  <LetterSwap
                    label="Meet Our Operations Lead"
                    icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />}
                  />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Showcase Right (6 cols) */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#dedbd6] shadow-xs group">
                  <Image
                    src="/assets/2dcaeebc2955b38c99681a4f39bce61138bf703a-423x525.jpg"
                    alt="HELIOS customer support team member collaborating in Kigali"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
                    <span className="text-white text-xs font-mono font-medium">
                      Bilingual Specialists · Kigali
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#dedbd6] shadow-xs group">
                  <Image
                    src="/assets/b74422e2810cec5a7a9629cdff2a2eaf1f432fe2-423x525.webp"
                    alt="Operations pod workstation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
                    <span className="text-white text-xs font-mono font-medium">
                      Continuous QA & Mentorship
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 4 Core Principles Strip */}
        <div className="pt-10 border-t border-[#dedbd6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div className="p-5 rounded-2xl bg-[#faf9f6] border border-[#dedbd6] space-y-2 hover:border-[#2563eb]/40 transition-colors h-full">
                  <span className="font-mono text-[11px] font-bold text-[#2563eb] block">
                    {p.num}
                  </span>
                  <h4 className="text-[16px] font-medium text-[#111111]">
                    {p.title}
                  </h4>
                  <p className="text-[12.5px] text-[#666666] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
