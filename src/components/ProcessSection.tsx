"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./fancy/ScrollReveal";
import { MagneticCard } from "./fancy/MagneticCard";
import { LetterSwap } from "./fancy/LetterSwap";

export function ProcessSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Discovery Call",
      desc: "We look at your current ticket volume, support channels, and main bottlenecks. You tell us what a successful support operation looks like for you.",
    },
    {
      step: "02",
      title: "Playbook & SOP Review",
      desc: "We review your existing help articles, saved macros, and past ticket resolutions to learn your product, brand tone, and policies.",
    },
    {
      step: "03",
      title: "Tool & Security Setup",
      desc: "You invite our agents into your Zendesk, Intercom, or Gorgias using role-based permissions, and we sign a bilateral Data Protection Agreement (DPA).",
    },
    {
      step: "04",
      title: "Clear Escalation Rules",
      desc: "We define exactly what agents resolve immediately (e.g., refunds, password resets) and what gets escalated to your engineering or finance team.",
    },
    {
      step: "05",
      title: "Agent Training & Mock Tickets",
      desc: "Our agents undergo product-specific training and practice on simulated customer scenarios with your lead before touching live queues.",
    },
    {
      step: "06",
      title: "Controlled 14-Day Pilot",
      desc: "We start handling real customer conversations on a contained volume of tickets so you can test response speed and tone with zero long-term commitment.",
    },
    {
      step: "07",
      title: "Weekly QA & Feedback",
      desc: "We review ticket resolutions together, audit customer CSAT, and calibrate macros to continually improve first-contact resolution rates.",
    },
    {
      step: "08",
      title: "Seamless Team Scaling",
      desc: "Once the pilot hits your quality targets, we seamlessly expand shift coverage (evening, weekend, or 24/7) as your company grows.",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#faf9f6] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                How We Work
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
              How we get your team up and running in 14 days.
            </h2>

            <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
              A straightforward, structured onboarding sequence from your very first discovery call to your first resolved customer ticket.
            </p>
          </div>
        </ScrollReveal>

        {/* 8-Step Grid with Hover Progress Connection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const isHovered = hoveredStep === idx;
            const isPast = hoveredStep !== null && idx < hoveredStep;

            return (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="h-full"
                >
                  <MagneticCard intensity={5} className="h-full">
                    <div
                      className={`border rounded-xl p-6 space-y-3 transition-all duration-300 flex flex-col justify-between shadow-xs h-full relative overflow-hidden ${
                        isHovered
                          ? "bg-[#ffffff] border-[#2563eb] ring-1 ring-[#2563eb]/20"
                          : isPast
                          ? "bg-[#faf9f6] border-[#2563eb]/40"
                          : "bg-[#ffffff] border-[#dedbd6] hover:border-[#111111]/30"
                      }`}
                    >
                      {/* Interactive top progress hairline */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                          isHovered
                            ? "bg-[#2563eb]"
                            : isPast
                            ? "bg-[#2563eb]/40"
                            : "bg-transparent"
                        }`}
                      />

                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-[#dedbd6] pb-3">
                          <span className={`font-mono text-[13px] font-medium transition-colors ${
                            isHovered ? "text-[#2563eb] font-bold" : "text-[#2563eb]"
                          }`}>
                            Step {s.step}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[1px] text-[#888888]">
                            {idx < 4 ? "Setup Phase" : "Live Phase"}
                          </span>
                        </div>

                        <h3 className="text-[17px] font-medium text-[#111111] tracking-[-0.2px]">
                          {s.title}
                        </h3>

                        <p className="text-[13px] text-[#666666] leading-relaxed font-normal">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </MagneticCard>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Footer Scoping Link */}
        <ScrollReveal delay={200}>
          <div className="mt-14 pt-8 border-t border-[#dedbd6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[14px] text-[#444444] font-medium">
              Ready to start Step 01 for your support channels?
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#222222] active:scale-95 text-[#ffffff] text-[12px] font-medium uppercase tracking-[0.5px] transition-all cursor-pointer group shadow-xs"
            >
              <LetterSwap
                label="Book a Discovery Call"
                icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />}
              />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
