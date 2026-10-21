"use client";

import React, { useState } from "react";
import { Check, X, ArrowRight, Sparkles, Building2, Globe2, Users } from "lucide-react";
import { ScrollReveal } from "./fancy/ScrollReveal";
import { LetterSwap } from "./fancy/LetterSwap";
import { MagneticCard } from "./fancy/MagneticCard";

export function ChallengesSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

  const criteria = [
    {
      dimension: "Monthly Cost / Agent",
      inHouse: "$4,500 – $6,500+",
      inHouseSub: "Salary, taxes, benefits & desk hardware",
      inHousePositive: false,
      bpo: "$2,800 – $4,000",
      bpoSub: "Hidden overhead & markup fees",
      bpoPositive: false,
      helios: "Predictable, flat transparent rate",
      heliosSub: "Up to 65% cost savings with zero hidden fees",
      heliosPositive: true,
    },
    {
      dimension: "Ramp-Up & First Ticket",
      inHouse: "60 – 90 days",
      inHouseSub: "Recruiting, interviewing & onboarding delay",
      inHousePositive: false,
      bpo: "30 – 45 days",
      bpoSub: "Slow corporate contract cycles",
      bpoPositive: false,
      helios: "10 – 14 days",
      heliosSub: "Vetted talent ready to begin a 14-day evaluation pilot",
      heliosPositive: true,
    },
    {
      dimension: "Team Model & Focus",
      inHouse: "Dedicated in-house",
      inHouseSub: "High internal HR & management overhead",
      inHousePositive: true,
      bpo: "Shared mass call center",
      bpoSub: "Agents juggle 4–6 client brands simultaneously",
      bpoPositive: false,
      helios: "100% Dedicated pod",
      heliosSub: "Agents work exclusively for your brand and product",
      heliosPositive: true,
    },
    {
      dimension: "Annual Agent Turnover",
      inHouse: "35% – 50%",
      inHouseSub: "Frequent re-hiring and lost domain knowledge",
      inHousePositive: false,
      bpo: "100%+ annual churn",
      bpoSub: "Constant new trainees answering your customers",
      bpoPositive: false,
      helios: "< 8% annual turnover",
      heliosSub: "Competitive career salaries & local career development",
      heliosPositive: true,
    },
    {
      dimension: "Tooling & Data Control",
      inHouse: "Full internal access",
      inHouseSub: "Your own workspace and security rules",
      inHousePositive: true,
      bpo: "Black-box proprietary CRM",
      bpoSub: "Data siloed; ticket logs difficult to export",
      bpoPositive: false,
      helios: "Works directly in your tools",
      heliosSub: "Zendesk, Intercom, Gorgias or Slack with signed DPA",
      heliosPositive: true,
    },
    {
      dimension: "Escalations & Handoffs",
      inHouse: "Direct Slack sync",
      inHouseSub: "Fast internal communication",
      inHousePositive: true,
      bpo: "Impersonal ticketing queues",
      bpoSub: "Dropped context and robotic macro responses",
      bpoPositive: false,
      helios: "Written SOPs + Slack integration",
      heliosSub: "80%+ Tier-1 resolution with structured bug repro logs",
      heliosPositive: true,
    },
  ];

  return (
    <section id="challenges" className="py-24 lg:py-32 bg-[#faf9f6] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                Decision Matrix
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
              How HELIOS compares to standard hiring & legacy BPOs.
            </h2>

            <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
              Scan the key trade-offs at a glance. See why high-growth startups and e-commerce brands choose our dedicated Kigali customer operations pods over domestic payroll or impersonal mega call centers.
            </p>
          </div>
        </ScrollReveal>

        {/* Matrix Container */}
        <ScrollReveal delay={100}>
          <div className="border border-[#dedbd6] rounded-2xl bg-[#ffffff] shadow-sm overflow-hidden">
            
            {/* Desktop Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-[#dedbd6] bg-[#f1eee9]/60">
                    <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-[1.2px] text-[#666666] font-medium w-[24%]">
                      Dimension
                    </th>
                    <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-[1.2px] text-[#666666] font-medium w-[25%]">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#888888]" />
                        <span>Domestic In-House</span>
                      </div>
                    </th>
                    <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-[1.2px] text-[#666666] font-medium w-[25%]">
                      <div className="flex items-center gap-1.5">
                        <Globe2 className="w-3.5 h-3.5 text-[#888888]" />
                        <span>Legacy Call Center (BPO)</span>
                      </div>
                    </th>
                    <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-[1.2px] text-[#2563eb] font-bold w-[26%] bg-[#2563eb]/[0.04] border-l border-r border-[#2563eb]/15">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
                        <span>HELIOS Dedicated Pod</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dedbd6]/60">
                  {criteria.map((row, idx) => {
                    const isHovered = highlightedRow === idx;
                    return (
                      <tr
                        key={idx}
                        onMouseEnter={() => setHighlightedRow(idx)}
                        onMouseLeave={() => setHighlightedRow(null)}
                        className={`transition-colors duration-150 ${
                          isHovered ? "bg-[#faf9f6]" : "hover:bg-[#faf9f6]/40"
                        }`}
                      >
                        {/* Dimension Name */}
                        <td className="py-5 px-6 font-medium text-[14px] text-[#111111]">
                          {row.dimension}
                        </td>

                        {/* In-House Column */}
                        <td className="py-5 px-6 text-[13px]">
                          <div className="flex items-start gap-2">
                            {row.inHousePositive ? (
                              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-4 h-4 text-[#888888] flex-shrink-0 mt-0.5" />
                            )}
                            <div>
                              <div className="font-medium text-[#222222]">{row.inHouse}</div>
                              <div className="text-[11px] text-[#777777] mt-0.5 leading-snug">
                                {row.inHouseSub}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Legacy BPO Column */}
                        <td className="py-5 px-6 text-[13px]">
                          <div className="flex items-start gap-2">
                            {row.bpoPositive ? (
                              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-4 h-4 text-[#888888] flex-shrink-0 mt-0.5" />
                            )}
                            <div>
                              <div className="font-medium text-[#222222]">{row.bpo}</div>
                              <div className="text-[11px] text-[#777777] mt-0.5 leading-snug">
                                {row.bpoSub}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* HELIOS Column (Elevated & Accentuated) */}
                        <td className="py-5 px-6 text-[13px] bg-[#2563eb]/[0.03] border-l border-r border-[#2563eb]/15">
                          <div className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#2563eb] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                              <Check className="w-3 h-3 text-white stroke-[2.5]" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#2563eb]">
                                {row.helios}
                              </div>
                              <div className="text-[11.5px] text-[#444444] mt-0.5 leading-snug font-normal">
                                {row.heliosSub}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom Proof Strip */}
            <div className="p-6 bg-[#f1eee9] border-t border-[#dedbd6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[13px] text-[#444444] font-medium">
                  Test the difference in real queues with our <strong>14-day low-risk evaluation pilot</strong>.
                </span>
              </div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] hover:bg-[#222222] active:scale-95 text-[#ffffff] text-[12px] font-medium uppercase tracking-[0.5px] transition-all cursor-pointer group shadow-xs self-stretch sm:self-auto justify-center"
              >
                <LetterSwap
                  label="Book a Discovery Call"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#dedbd6]" />}
                />
              </button>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
