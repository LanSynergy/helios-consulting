"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function WhyHelios({ onOpenBooking }: { onOpenBooking: () => void }) {
  const points = [
    {
      title: "Dedicated Agents Who Work Only For You",
      desc: "Your agents are not split across 10 other companies. They learn your product inside and out, becoming a true extension of your internal team.",
    },
    {
      title: "You Keep 100% Control of Tools & Data",
      desc: "We work directly inside your existing Zendesk, Intercom, Gorgias, or Freshdesk instance. You control permissions and customer data at all times.",
    },
    {
      title: "Documented SOPs Before Answering Tickets",
      desc: "We don't guess. We document response templates, common troubleshooting trees, and clear refund boundaries before touching live customer queues.",
    },
    {
      title: "Clear Rules for Escalations",
      desc: "Our agents know exactly what to resolve immediately and when to loop in your engineering or product team on Slack, complete with reproduction logs.",
    },
    {
      title: "Weekly QA Reviews & Scorecards",
      desc: "We don't just hand you a monthly invoice. We provide transparent weekly reports showing ticket volume, first-contact resolution rates, and CSAT scores.",
    },
    {
      title: "Low-Risk 14-Day Evaluation Pilots",
      desc: "Evaluate our communication quality, speed, and reliability on a contained ticket volume before committing to a longer-term dedicated pod.",
    },
  ];

  return (
    <section id="why-helios" className="py-24 lg:py-32 bg-[#ffffff] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
              Why Choose HELIOS
            </span>
          </div>

          <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
            Customer operations built on trust, not big promises.
          </h2>

          <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
            We focus on realistic commitments, fast and friendly communication, and doing the daily support work right every single day.
          </p>
        </div>

        {/* 6 Points Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#faf9f6] border border-[#dedbd6] rounded-xl p-7 space-y-3 hover:border-[#111111]/30 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="font-mono text-[11px] uppercase tracking-[1.2px] text-[#2563eb] font-medium">
                  Benefit 0{idx + 1}
                </div>
                <h3 className="text-[18px] font-medium text-[#111111] tracking-[-0.2px]">
                  {p.title}
                </h3>
                <p className="text-[13px] text-[#666666] leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist CTA strip */}
        <div className="mt-14 pt-8 border-t border-[#dedbd6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[14px] text-[#444444] font-medium">
            Want to see how HELIOS can take over your support queues?
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#222222] text-[#ffffff] text-[12px] font-medium uppercase tracking-[0.5px] transition-colors cursor-pointer"
          >
            <span>Book a 25-Min Discovery Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />
          </button>
        </div>

      </div>
    </section>
  );
}
