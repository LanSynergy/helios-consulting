"use client";

import React from "react";
import { Clock, Users, Laptop, ShieldCheck } from "lucide-react";
import { Marquee } from "./fancy/Marquee";

export function TrustStrip() {
  const points = [
    {
      icon: Clock,
      title: "EU & US Timezone Overlap",
      desc: "Working hours aligned with UK, Europe, and US East Coast",
    },
    {
      icon: Users,
      title: "Vetted Dedicated Talent",
      desc: "University-educated career specialists trained on your product",
    },
    {
      icon: Laptop,
      title: "Works Inside Your Tools",
      desc: "No new software—we use your Zendesk, Intercom, or Gorgias",
    },
    {
      icon: ShieldCheck,
      title: "Strict Quality & Data Security",
      desc: "Weekly QA ticket audits and GDPR-aligned bilateral DPAs",
    },
  ];

  const tools = [
    "Zendesk",
    "Intercom",
    "Gorgias",
    "Freshdesk",
    "Slack",
    "Notion",
    "Linear",
    "Salesforce Service Cloud",
    "HubSpot",
    "Front",
  ];

  return (
    <div className="bg-[#f1eee9] border-b border-[#dedbd6]">
      {/* 4 Feature Value Points */}
      <div className="py-8 border-b border-[#dedbd6]/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {points.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 lg:border-l lg:border-[#dedbd6] lg:pl-6 first:border-0 first:pl-0 transition-opacity duration-300 hover:opacity-90"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ffffff] border border-[#dedbd6] flex items-center justify-center flex-shrink-0 text-[#2563eb] shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[11px] uppercase tracking-[1.2px] text-[#111111] font-semibold">
                      {p.title}
                    </div>
                    <div className="text-[13px] text-[#666666] font-normal leading-snug">
                      {p.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hardware-Accelerated Infinite Tools Marquee */}
      <div className="py-4 bg-[#eceae5] flex items-center">
        <div className="px-6 border-r border-[#dedbd6] flex-shrink-0 hidden md:block">
          <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#666666] font-medium">
            Supported Stack:
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <Marquee speed={32} pauseOnHover={true}>
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-3 py-1 text-[13px] font-mono text-[#555555] hover:text-[#111111] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]/40" />
                <span className="font-medium tracking-tight">{tool}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
