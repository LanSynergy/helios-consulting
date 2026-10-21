"use client";

import React from "react";
import { Shield, Key, FileCheck, Lock, EyeOff, Server, Heart, Target, RefreshCw, MessageSquare } from "lucide-react";

const VALUES = [
  {
    title: "Customer Focus",
    description: "Every ticket represents a real user experiencing friction. We resolve with genuine empathy and brand pride.",
  },
  {
    title: "Disciplined Accountability",
    description: "We measure SLA attainment honestly, escalate blockers immediately, and provide unfiltered weekly QA metrics.",
  },
  {
    title: "Integrity & Truthfulness",
    description: "No inflated claims or false AI automation promises. Transparent human execution backed by verified playbooks.",
  },
  {
    title: "Clear Communication",
    description: "Crisp, concise, and proactive updates in your team's Slack channels and weekly executive status summaries.",
  },
  {
    title: "Continuous Improvement",
    description: "Every edge case encountered becomes an updated SOP entry and a documented feedback ticket for your product team.",
  },
  {
    title: "Strict Confidentiality",
    description: "Rigorous data segregation, encrypted endpoints, and NDA-backed client operational firewalls.",
  },
  {
    title: "Operational Rigor",
    description: "Standardized shift handoffs, attendance tracking, and peer reviews that ensure zero queue slippage.",
  },
  {
    title: "Respect & Dignity",
    description: "We invest in our Kigali specialists with living compensation, continuous career coaching, and modern workspaces.",
  },
];

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: "Least Privilege Principle (RBAC)",
    description: "Specialists receive only role-based access strictly required to resolve assigned ticket types.",
  },
  {
    icon: Key,
    title: "Hardware 2FA & SSO Enforcement",
    description: "All client logins require mandatory multi-factor authentication managed through your enterprise IdP.",
  },
  {
    icon: FileCheck,
    title: "Formal DPA & Data Governance",
    description: "Comprehensive Data Protection Agreements aligned with EU GDPR and Rwanda Law on Personal Data Protection.",
  },
  {
    icon: EyeOff,
    title: "Zero Local PII Storage",
    description: "Client customer records never leave your approved CRM or helpdesk; zero local file downloads permitted.",
  },
];

export function ValuesAndSecurity({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="py-24 md:py-36 bg-[#f1eee9] border-t border-[#dedbd6]" id="security">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Part 1: Security & Compliance */}
        <div className="mb-28">
          <div className="max-w-3xl mb-14">
            <span className="badge-label text-[#585858] block mb-2">Institutional Trust</span>
            <h2 className="text-[36px] md:text-[54px] font-[400] text-[#111111] leading-[1.05] tracking-[-1.5px] font-saans mb-6">
              Enterprise-grade security and <br />
              rigorous data stewardship
            </h2>
            <p className="font-serrif text-[17px] text-[#414141] font-[300] leading-relaxed max-w-[620px]">
              Customer data integrity is non-negotiable. Our Kigali delivery center implements
              institutional access controls, endpoint management, and strict GDPR-aligned data
              protection agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {SECURITY_PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-6 space-y-3"
                >
                  <Icon className="w-5 h-5 text-[#2563eb]" />
                  <h3 className="text-[17px] font-medium text-[#111111] font-saans">
                    {p.title}
                  </h3>
                  <p className="font-serrif text-[14px] text-[#585858] font-[300] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-[#ffffff] border border-[#dedbd6] rounded-xl flex flex-wrap items-center justify-between gap-4 text-[13px] text-[#585858] font-mono-saans">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#2563eb]" />
              <span>Standard Data Protection Agreement (DPA) executed prior to onboarding</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="text-[#111111] underline hover:text-[#2563eb] cursor-pointer"
            >
              Request Compliance Packet →
            </button>
          </div>
        </div>

        {/* Part 2: 8 Core Values */}
        <div className="pt-20 border-t border-[#dedbd6]">
          <div className="max-w-3xl mb-14">
            <span className="badge-label text-[#585858] block mb-2">Operational Culture</span>
            <h2 className="text-[36px] md:text-[54px] font-[400] text-[#111111] leading-[1.05] tracking-[-1.5px] font-saans mb-6">
              Our 8 core values: The human foundation of high-touch service
            </h2>
            <p className="font-serrif text-[17px] text-[#414141] font-[300] leading-relaxed max-w-[620px]">
              Technology changes, but customer dignity, operational honesty, and team respect remain
              constant. These principles govern every ticket we answer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="bg-[#faf9f6] border border-[#dedbd6] rounded-xl p-6 space-y-2 hover:border-[#111111] transition-colors"
              >
                <div className="font-mono-saans text-[12px] text-[#2563eb] font-semibold">
                  0{i + 1}
                </div>
                <h3 className="text-[17px] font-medium text-[#111111] font-saans">
                  {v.title}
                </h3>
                <p className="font-serrif text-[14px] text-[#585858] font-[300] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
