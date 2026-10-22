"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

const CHALLENGES = [
  {
    friction: "High Domestic Hiring Costs",
    impact:
      "Recruiting, onboarding, and retaining in-house US or European support specialists consumes $65,000–$85,000+ per agent annually, constraining runway.",
    solution:
      "HELIOS provides dedicated, dedicated support pods from Kigali at a fraction of domestic overhead, without compromising communication quality.",
  },
  {
    friction: "Legacy BPO Quality Degradation",
    impact:
      "Mass-market outsourcing call centers deliver scripted, robotic answers, high agent turnover, and unmonitored ticket queues that alienate customers.",
    solution:
      "Our low-ratio pod model pairs dedicated Team Leads with strict weekly QA auditing and brand-specific SOP training.",
  },
  {
    friction: "Coverage Gaps & Timezone Bottlenecks",
    impact:
      "Tickets submitted during early European mornings or weekend rushes sit unattended, deteriorating response times and CSAT.",
    solution:
      "Operating from Kigali (UTC+2) allows uninterrupted daytime sync with London, Berlin, and Paris, plus early-morning handover to US teams.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Scope Audit",
    detail: "We audit your existing ticket volume, tag hierarchies, macros, and toolstack across a 25-minute discovery consultation.",
  },
  {
    num: "02",
    title: "SOP & Knowledge Extraction",
    detail: "We convert your team's implicit rules into documented Standard Operating Procedures and decision trees.",
  },
  {
    num: "03",
    title: "Specialist Matching & Vetting",
    detail: "We handpick university-educated, dedicated specialists with domain familiarity matching your exact industry vertical.",
  },
  {
    num: "04",
    title: "Shadowing & Simulation",
    detail: "Agents undergo simulated ticket drills and shadow your senior team on live conversations with zero client-facing risk.",
  },
  {
    num: "05",
    title: "Fixed-Scope Pilot Launch",
    detail: "Go live with a bounded 2-to-4 week trial handling tier-1 queues while maintaining real-time Slack coordination.",
  },
  {
    num: "06",
    title: "Daily Standups & Weekly QA",
    detail: "Team Leads review random ticket samples against defined rubrics, delivering transparent weekly CSAT and SLA report cards.",
  },
  {
    num: "07",
    title: "Continuous SOP Optimization",
    detail: "Unresolved edge cases and product bug patterns are systematically fed back to your engineering and product teams.",
  },
  {
    num: "08",
    title: "Pod Scaling & 24/7 Coverage",
    detail: "Expand your pod organically as your customer base scales, adding weekend shifts and specialized tier-2 workflows.",
  },
];

export function ChallengesAndProcess({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-36 bg-[#faf9f6]" id="process">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section 1: System Friction & Solutions */}
        <div className="mb-28">
          <div className="max-w-3xl mb-14">
            <span className="badge-label text-[#585858] block mb-2">Operational Reality</span>
            <h2 className="text-[36px] md:text-[54px] font-[400] text-[#111111] leading-[1.05] tracking-[-1.5px] font-saans mb-6">
              Why fast-growing companies <br />
              rethink their support strategy
            </h2>
            <p className="font-serrif text-[17px] text-[#414141] font-[300] leading-relaxed max-w-[620px]">
              Customer support is either too expensive to scale in-house or too critical to entrust to
              impersonal mass call centers. HELIOS exists in that sweet spot of high-touch operational
              discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CHALLENGES.map((c, i) => (
              <div
                key={i}
                className="bg-[#f1eee9] border border-[#dedbd6] rounded-xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#ff5a43] mb-3">
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-mono-saans text-[11px] uppercase tracking-[1.2px]">
                      Friction Point
                    </span>
                  </div>
                  <h3 className="text-[20px] font-medium text-[#111111] font-saans mb-3">
                    {c.friction}
                  </h3>
                  <p className="text-[14px] text-[#585858] leading-relaxed mb-6">{c.impact}</p>
                </div>
                <div className="pt-6 border-t border-[#dedbd6]/80 bg-[#ffffff] -mx-8 -mb-8 p-8 rounded-b-[4px]">
                  <div className="flex items-center gap-2 text-[#2563eb] mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-mono-saans text-[11px] uppercase tracking-[1.2px] font-semibold">
                      The HELIOS Answer
                    </span>
                  </div>
                  <p className="font-serrif text-[14px] text-[#111111] font-[300] leading-relaxed">
                    {c.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 8-Step Delivery Process */}
        <div className="pt-20 border-t border-[#dedbd6]">
          <div className="max-w-3xl mb-14">
            <span className="badge-label text-[#585858] block mb-2">Structured Execution</span>
            <h2 className="text-[36px] md:text-[54px] font-[400] text-[#111111] leading-[1.05] tracking-[-1.5px] font-saans mb-6">
              Our 8-step onboarding and <br />
              governance methodology
            </h2>
            <p className="font-serrif text-[17px] text-[#414141] font-[300] leading-relaxed max-w-[620px]">
              We eliminate guesswork with a battle-tested roadmap from initial workflow audit to full
              pod autonomy in as little as 10 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PROCESS_STEPS.map((s, idx) => (
              <div
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 border rounded-xl cursor-pointer transition-all ${
                  activeStep === idx
                    ? "bg-[#ffffff] border-[#2563eb] shadow-sm"
                    : "bg-[#f1eee9] border-[#dedbd6] hover:border-[#111111]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-saans text-[16px] font-bold text-[#2563eb]">
                    {s.num}
                  </span>
                  {activeStep === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                  )}
                </div>
                <h3 className="text-[17px] font-medium text-[#111111] font-saans mb-2">
                  {s.title}
                </h3>
                <p className="font-serrif text-[14px] text-[#585858] font-[300] leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-8 bg-[#f1eee9] border border-[#dedbd6] rounded-xl">
            <div>
              <span className="font-mono-saans text-[11px] tracking-[1.4px] uppercase text-[#2563eb] block mb-1">
                Zero Obligation Consultation
              </span>
              <div className="text-[18px] font-medium text-[#111111]">
                Ready to review your support workflows and pilot scope?
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#000000] text-[#ffffff] rounded-xl text-[14px] font-normal hover:bg-[#222222] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Schedule 25-Min Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
