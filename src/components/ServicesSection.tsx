"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, MessageSquare, Headphones, ShieldCheck, Database, Layers, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { MagneticCard } from "./fancy/MagneticCard";
import { ScrollReveal } from "./fancy/ScrollReveal";
import { LetterSwap } from "./fancy/LetterSwap";

export function ServicesSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: "inbox",
      category: "Frontline Support",
      icon: Mail,
      title: "Email & Helpdesk Ticketing",
      badge: "Zendesk · Intercom · Gorgias",
      desc: "Fast, accurate ticket resolution for billing, account access, and product questions. Trained to match your exact brand voice.",
      stat: "11 min",
      statLabel: "Avg First Response",
      points: [
        "First-response time under 15 minutes during shift",
        "Structured tagging for bug triage and engineering escalation",
        "Continuous macro updates based on customer repeats",
      ],
      image: "/assets/agent_black_woman_headset_3.jpg",
      imageCaption: "Dedicated representative answering customer email inquiries",
    },
    {
      id: "chat",
      category: "Real-Time Messaging",
      icon: MessageSquare,
      title: "Live Chat & In-App Messaging",
      badge: "Intercom · Crisp · Drift",
      desc: "Instant customer support for web and app visitors. Eliminates drop-offs, troubleshoots trials, and converts qualified leads.",
      stat: "99.4%",
      statLabel: "CSAT Score",
      points: [
        "Immediate greeting and empathetic problem resolution",
        "Step-by-step screenshare guidance for tricky user issues",
        "Clear internal handoffs when routing to account managers",
      ],
      image: "/assets/agent_black_woman_headset_1.jpg",
      imageCaption: "Live chat specialist with headset resolving customer questions",
    },
    {
      id: "tech",
      category: "Technical Support",
      icon: Headphones,
      title: "Tier-1 Technical & Bug Reproduction",
      badge: "Slack · Linear · GitHub",
      desc: "Diagnosing errors, gathering console logs, and writing clean reproduction steps so engineers don't waste hours chasing vague tickets.",
      stat: "80%+",
      statLabel: "First-Contact Resolution",
      points: [
        "Full reproduction steps with OS, browser, and network logs",
        "Direct ticket creation in Linear or Jira for your engineering squad",
        "Knowledge base articles updated whenever bugs are patched",
      ],
      image: "/assets/agent_black_man_headset_1.jpg",
      imageCaption: "Technical tier-1 specialist debugging user reproduction logs",
    },
    {
      id: "backoffice",
      category: "Operations",
      icon: ShieldCheck,
      title: "KYC & Back-Office Processing",
      badge: "Fintech · Marketplaces · SaaS",
      desc: "Repetitive manual workflows: reviewing government IDs, approving accounts, processing refunds, and keeping CRM data clean.",
      stat: "< 10 min",
      statLabel: "Queue Turnaround",
      points: [
        "Strict adherence to compliance checklists and GDPR privacy rules",
        "Fast manual verification queues to prevent onboarding churn",
        "Refund processing within agreed financial limits",
      ],
      image: "/assets/agent_black_woman_blazer.jpg",
      imageCaption: "Operations specialist performing identity verification & queue audits",
    },
  ];

  const current = services[activeTab];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#ffffff] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#dedbd6]">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                  What We Take Off Your Plate
                </span>
              </div>
              
              <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-sans font-normal text-[#111111] leading-[1.05] tracking-[-1.6px]">
                Support operations designed for scale.
              </h2>
              
              <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
                Dedicated specialists embedded directly into your stack. We handle the daily volume so your team focuses on product and revenue.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] text-[#ffffff] text-[13px] font-medium hover:bg-[#222222] active:scale-95 transition-all self-start md:self-end cursor-pointer group shadow-xs"
            >
              <LetterSwap
                label="Discuss Your Queues"
                icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />}
              />
            </button>
          </div>
        </ScrollReveal>

        {/* Feature Showcase Grid: Left Tab Navigation | Right Visual Workstation Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 cols): Interactive Service Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((item, idx) => {
              const isActive = activeTab === idx;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? "bg-[#faf9f6] border-[#2563eb] shadow-sm"
                      : "bg-[#ffffff] border-[#dedbd6] hover:bg-[#faf9f6]/60 hover:border-[#111111]/30"
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#2563eb]" />
                  )}
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? "bg-[#2563eb] text-white" : "bg-[#f1eee9] text-[#555555]"
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#888888] font-medium">
                        {item.category}
                      </span>
                    </div>
                    {isActive && (
                      <span className="font-mono text-[11px] font-bold text-[#2563eb] bg-[#2563eb]/10 px-2 py-0.5 rounded-full">
                        {item.stat}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-[17px] font-medium tracking-tight mb-1 ${
                    isActive ? "text-[#111111]" : "text-[#444444]"
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-[12.5px] text-[#666666] leading-snug font-normal line-clamp-2">
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Real Black Customer Service Photography with Headsets & Checklist */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={150}>
              <MagneticCard intensity={3} className="w-full">
                <div className="bg-[#faf9f6] border border-[#dedbd6] rounded-2xl overflow-hidden shadow-md">
                  
                  {/* Top Canvas HUD */}
                  <div className="px-5 py-3.5 bg-[#ffffff] border-b border-[#dedbd6] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      <span className="ml-2 font-mono text-[11px] text-[#888888]">
                        {current.badge}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#2563eb] font-semibold bg-[#2563eb]/10 px-2.5 py-0.5 rounded-full">
                      Kigali Pod Active
                    </span>
                  </div>

                  {/* Primary Visual Customer Service Image */}
                  <div className="relative aspect-[16/10] w-full bg-white overflow-hidden group">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-102 object-center"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent flex items-end p-5">
                      <div className="text-white space-y-1">
                        <div className="font-mono text-[10.5px] text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{current.imageCaption}</span>
                        </div>
                        <h4 className="text-[18px] font-medium text-white">
                          {current.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Checklist Strip */}
                  <div className="p-5 bg-[#ffffff] border-t border-[#dedbd6] grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {current.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[12px] text-[#444444] leading-snug">
                        <Check className="w-4 h-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </MagneticCard>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
