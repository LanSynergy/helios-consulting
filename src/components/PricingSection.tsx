"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, HelpCircle, ArrowRight } from "lucide-react";

export function PricingSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  // Interactive scope estimator states
  const [agents, setAgents] = useState(2);
  const [coverageHours, setCoverageHours] = useState<"8x5" | "16x5" | "24x7">("8x5");
  const [isBilingual, setIsBilingual] = useState(false);

  // Approximate hourly rate calculation
  const hourlyBase = 12; // $12/hr starting
  const hoursPerMonth = coverageHours === "8x5" ? 170 : coverageHours === "16x5" ? 340 : 720;
  const bilingualMultiplier = isBilingual ? 1.15 : 1.0;
  const estimatedMonthly = Math.round(agents * hoursPerMonth * hourlyBase * bilingualMultiplier);

  return (
    <section className="py-24 md:py-36 bg-[#faf9f6] border-t border-[#dedbd6]" id="pricing">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="badge-label text-[#585858] block mb-2">Predictable Unit Economics</span>
          <h2 className="text-[36px] md:text-[54px] font-[400] text-[#111111] leading-[1.05] tracking-[-1.5px] font-saans mb-4">
            Transparent operational pricing
          </h2>
          <p className="font-serrif text-[17px] text-[#414141] font-[300]">
            No opaque hidden platform fees or multi-year lock-ins. Pay transparent hourly rates or
            flat monthly pod commitments with clear SLA guarantees.
          </p>
        </div>

        {/* 3 Core Engagement Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Tier 1: Fixed Evaluation Pilot */}
          <div className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="badge-label text-[#585858]">Evaluation Tier</span>
                <h3 className="text-[20px] font-medium text-[#111111] font-saans mt-1">
                  Structured Pilot
                </h3>
              </div>
              <div className="mb-6">
                <span className="text-[44px] font-[400] text-[#111111] font-saans leading-none tracking-[-1.5px]">
                  $1,850
                </span>
                <span className="text-[13px] text-[#888888] font-mono-saans tracking-[0.5px]">
                  {" "}
                  / 2-week pilot
                </span>
              </div>
              <p className="text-[14px] text-[#585858] mb-6">
                Test communication quality, response times, and SOP execution with zero recurring commitment.
              </p>
              <ul className="space-y-3 text-[14px] text-[#414141] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>100 hours dedicated ticket execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>SOP documentation & macro audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>Weekly CSAT & QA scorecard</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full text-center py-2.5 bg-[#ffffff] border border-[#111111] text-[#111111] rounded-xl text-[14px] hover:bg-[#f1eee9] transition-colors cursor-pointer"
            >
              Start 2-Week Pilot
            </button>
          </div>

          {/* Tier 2: Dedicated Pod (Featured Intercom-style card) */}
          <div className="bg-[#ffffff] border-2 border-[#2563eb] rounded-xl p-8 flex flex-col justify-between relative shadow-sm">
            <div className="absolute -top-3 left-6 bg-[#2563eb] text-[#ffffff] font-mono-saans text-[10px] tracking-[1.4px] uppercase px-2 py-0.5 rounded-md">
              Most Popular
            </div>
            <div>
              <div className="mb-4">
                <span className="badge-label text-[#2563eb]">Full-Time Pod</span>
                <h3 className="text-[20px] font-medium text-[#111111] font-saans mt-1">
                  Dedicated Pod Model
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-[44px] font-[400] text-[#111111] font-saans leading-none tracking-[-1.5px]">
                    $1,950
                  </span>
                  <span className="text-[13px] text-[#888888] font-mono-saans tracking-[0.5px]">
                    / specialist / mo
                  </span>
                </div>
                <div className="text-[13px] text-[#2563eb] font-medium mt-1 font-mono-saans">
                  ~ $11.50 - $13.00 effective / hr
                </div>
              </div>
              <p className="text-[14px] text-[#585858] mb-6">
                Your permanent, exclusive support specialists embedded into your Slack, Zendesk, or Intercom.
              </p>
              <ul className="space-y-3 text-[14px] text-[#414141] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>Dedicated Team Lead and QA supervisor</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>160 hours/month per dedicated specialist</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>CET / GMT / EST morning shift coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>Zero shared-agent dilution guarantee</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full text-center py-2.5 bg-[#000000] text-[#ffffff] rounded-xl text-[14px] hover:bg-[#222222] transition-colors cursor-pointer"
            >
              Discuss Dedicated Pod
            </button>
          </div>

          {/* Tier 3: Scaled Enterprise Operations */}
          <div className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="badge-label text-[#585858]">Enterprise Scale</span>
                <h3 className="text-[20px] font-medium text-[#111111] font-saans mt-1">
                  24/7 Multi-Pod Hub
                </h3>
              </div>
              <div className="mb-6">
                <span className="text-[44px] font-[400] text-[#111111] font-saans leading-none tracking-[-1.5px]">
                  Custom
                </span>
                <span className="text-[13px] text-[#888888] font-mono-saans tracking-[0.5px]">
                  {" "}
                  / 5+ agents
                </span>
              </div>
              <p className="text-[14px] text-[#585858] mb-6">
                For scaling tech companies needing multi-shift 24/7/365 coverage with tailored SLAs and SOC2/HIPAA compliance.
              </p>
              <ul className="space-y-3 text-[14px] text-[#414141] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>24/7/365 multi-tier follow-the-sun shifts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>Dedicated Operations Manager & custom training</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2563eb]" />
                  <span>Bespoke DPA, VPN tunnels, & security review</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full text-center py-2.5 bg-[#ffffff] border border-[#dedbd6] text-[#111111] rounded-xl text-[14px] hover:border-[#111111] transition-colors cursor-pointer"
            >
              Contact Operations Team
            </button>
          </div>
        </div>

        {/* Interactive Scope & Cost Estimator Card */}
        <div className="relative bg-[#f1eee9] rounded-xl border border-[#dedbd6] p-8 md:p-12 overflow-hidden">
          <div className="max-w-3xl">
            <span className="badge-label text-[#2563eb] block mb-2">Scope Calculator</span>
            <h3 className="text-[24px] md:text-[32px] font-[400] text-[#111111] font-saans mb-4">
              Estimate your monthly operational investment
            </h3>
            <p className="font-serrif text-[15px] text-[#585858] font-[300] mb-8">
              Adjust team size and shift coverage to estimate budget requirements. Real proposals are
              customized during your scoping consultation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Slider: Agents */}
              <div className="bg-[#ffffff] p-5 rounded-xl border border-[#dedbd6]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] font-medium text-[#111111]">Team Size</span>
                  <span className="font-mono-saans text-[15px] font-semibold text-[#2563eb]">
                    {agents} {agents === 1 ? "Agent" : "Agents"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={agents}
                  onChange={(e) => setAgents(parseInt(e.target.value))}
                  className="w-full accent-[#2563eb] cursor-pointer"
                />
              </div>

              {/* Coverage hours */}
              <div className="bg-[#ffffff] p-5 rounded-xl border border-[#dedbd6]">
                <span className="text-[13px] font-medium text-[#111111] block mb-2">Coverage Hours</span>
                <div className="flex gap-1.5">
                  {(["8x5", "16x5", "24x7"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setCoverageHours(mode)}
                      className={`flex-1 py-1.5 text-[12px] font-mono-saans rounded-md transition-colors cursor-pointer ${
                        coverageHours === mode
                          ? "bg-[#111111] text-[#ffffff]"
                          : "bg-[#f1eee9] text-[#585858] hover:text-[#111111]"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language toggle */}
              <div className="bg-[#ffffff] p-5 rounded-xl border border-[#dedbd6] flex flex-col justify-between">
                <span className="text-[13px] font-medium text-[#111111] block mb-1">
                  Bilingual Pod (FR/EN)
                </span>
                <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#585858]">
                  <input
                    type="checkbox"
                    checked={isBilingual}
                    onChange={(e) => setIsBilingual(e.target.checked)}
                    className="accent-[#2563eb] cursor-pointer w-4 h-4"
                  />
                  <span>French + English fluency</span>
                </label>
              </div>
            </div>

            {/* Estimated Output Result */}
            <div className="flex flex-wrap items-baseline justify-between gap-4 p-6 bg-[#ffffff] border border-[#dedbd6] rounded-xl">
              <div>
                <span className="text-[12px] font-mono-saans text-[#888888] uppercase tracking-[1px] block mb-1">
                  Estimated Monthly Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-[38px] font-[400] text-[#111111] font-saans tracking-[-1px]">
                    ~${estimatedMonthly.toLocaleString()}
                  </span>
                  <span className="text-[13px] text-[#888888] font-mono-saans">/ month</span>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 bg-[#2563eb] text-[#ffffff] rounded-xl text-[14px] hover:bg-[#0005a3] transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Book Scoping Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
