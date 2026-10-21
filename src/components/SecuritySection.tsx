"use client";

import React from "react";
import { ShieldCheck, Lock, KeyRound, FileText, CheckCircle2, ArrowUpRight } from "lucide-react";

export function SecuritySection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const protocols = [
    {
      icon: Lock,
      title: "Least-Privilege Role Access (RBAC)",
      desc: "Agents access client ticketing systems and databases via isolated corporate credentials, mandatory MFA, and role-scoped permissions.",
    },
    {
      icon: KeyRound,
      title: "Dedicated Device & Network Security",
      desc: "All frontline operations occur on enterprise-managed endpoints equipped with disk encryption, endpoint monitoring, and secured VLAN routing.",
    },
    {
      icon: ShieldCheck,
      title: "Data Protection Agreement (DPA)",
      desc: "Standardized bilateral DPAs governing data residency, sub-processor disclosures, breach notification protocols, and immediate credential revoking.",
    },
    {
      icon: FileText,
      title: "Rwanda GDPA & Global GDPR Alignment",
      desc: "Compliant with Rwanda’s Law No. 058/2021 relating to the protection of personal data and privacy, modeled after EU GDPR principles.",
    },
  ];

  return (
    <section id="security" className="py-24 lg:py-32 bg-[#faf9f6] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
              Governance & Data Integrity
            </span>
          </div>

          <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
            Security and confidentiality built into every workflow.
          </h2>

          <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
            Your customer data is your most sensitive asset. HELIOS enforces strict access boundaries, non-disclosure agreements, and continuous access audits.
          </p>
        </div>

        {/* 4 Protocol Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {protocols.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-8 space-y-4 hover:border-[#111111]/30 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#faf9f6] border border-[#dedbd6] flex items-center justify-center text-[#2563eb]">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-[19px] font-medium text-[#111111] tracking-[-0.2px]">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-[#2563eb] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0" />
                  <span>Verified Standard Operating Procedure</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Consultation Callout */}
        <div className="mt-14 p-8 rounded-xl bg-[#111111] text-[#ffffff] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-[17px] font-medium tracking-tight text-[#ffffff]">
              Need custom compliance reviews or vendor questionnaires?
            </h4>
            <p className="text-[13px] text-[#a0a0a0] font-normal">
              We provide standard Data Protection Agreements (DPAs) and complete security evaluation packets for your legal team.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffffff] hover:bg-[#dedbd6] text-[#111111] text-[13px] font-medium transition-colors flex-shrink-0 cursor-pointer"
          >
            <span>Discuss Security Requirements</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
