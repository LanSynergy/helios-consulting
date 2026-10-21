"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Users, Shield, Clock, Award, Target, HeartHandshake } from "lucide-react";
import { ScrollReveal } from "./fancy/ScrollReveal";
import { MagneticCard } from "./fancy/MagneticCard";
import { LetterSwap } from "./fancy/LetterSwap";

export function WhyHelios({ onOpenBooking }: { onOpenBooking: () => void }) {
  const highlights = [
    {
      title: "100% Dedicated Agents",
      desc: "Your agents are never split across multiple brands. They learn your workflows, culture, and products inside and out.",
      stat: "1:1",
      statLabel: "Account Focus",
      icon: Users,
    },
    {
      title: "Zero Local Data Storage",
      desc: "All ticket interactions happen directly within your Zendesk, Intercom, or Gorgias. We never copy, export, or silo your customer data.",
      stat: "100%",
      statLabel: "Tool Control",
      icon: Shield,
    },
    {
      title: "Living Knowledge Playbooks",
      desc: "We document decision flowcharts, macros, and refund boundaries before answering live queues, eliminating guesswork.",
      stat: "Day 1",
      statLabel: "Documented SOPs",
      icon: Target,
    },
    {
      title: "Transparent Weekly QA Audits",
      desc: "Receive weekly CSAT breakdowns, random ticket audits, and SLA attainment scorecards directly in your team's Slack channel.",
      stat: "Weekly",
      statLabel: "Scorecard Reports",
      icon: Award,
    },
    {
      title: "Empathetic Career Talent",
      desc: "We pay fair, competitive wages to university graduates in Kigali, ensuring sub-8% annual turnover and genuine customer care.",
      stat: "< 8%",
      statLabel: "Annual Churn",
      icon: HeartHandshake,
    },
    {
      title: "Low-Risk 14-Day Pilot",
      desc: "Test our response speed, communication quality, and ticket resolution on real queues with zero long-term commitments.",
      stat: "14 Days",
      statLabel: "Evaluation Trial",
      icon: Clock,
    },
  ];

  return (
    <section id="why-helios" className="py-20 lg:py-28 bg-[#faf9f6] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                Why HELIOS
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-sans font-normal text-[#111111] leading-[1.05] tracking-[-1.6px]">
              Built for precision and accountability.
            </h2>

            <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
              We focus on dependable execution, fast and friendly communication, and doing the daily support work right.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Visual Feature Tiles with Metric Chips (Low Cognitive Load) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80}>
                <MagneticCard intensity={4} className="h-full">
                  <div className="bg-[#ffffff] border border-[#dedbd6] rounded-2xl p-6 flex flex-col justify-between hover:border-[#2563eb]/50 transition-all shadow-xs h-full group">
                    
                    <div className="space-y-4">
                      {/* Top Metric & Icon Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#dedbd6]/70">
                        <div className="w-8 h-8 rounded-lg bg-[#f1eee9] flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-[16px] font-bold text-[#111111] leading-none">
                            {item.stat}
                          </div>
                          <div className="font-mono text-[9.5px] uppercase tracking-wider text-[#888888] mt-0.5">
                            {item.statLabel}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-[18px] font-medium text-[#111111] tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-[13px] text-[#666666] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </MagneticCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <ScrollReveal delay={200}>
          <div className="mt-12 p-6 rounded-2xl bg-[#ffffff] border border-[#dedbd6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div className="space-y-0.5">
              <div className="text-[15px] font-medium text-[#111111]">
                Ready to review what a dedicated Kigali support pod looks like for your product?
              </div>
              <p className="text-[12px] text-[#777777]">
                We review your queue volume, suggest the optimal shift model, and outline a 14-day evaluation trial.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] hover:bg-[#222222] active:scale-95 text-[#ffffff] text-[12px] font-medium uppercase tracking-[0.5px] transition-all cursor-pointer group shadow-xs flex-shrink-0"
            >
              <LetterSwap
                label="Book a 25-Min Scoping Call"
                icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />}
              />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
