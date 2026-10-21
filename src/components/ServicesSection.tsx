"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Headphones, ShieldCheck, Database, Layers, ArrowUpRight, Check } from "lucide-react";
import { MagneticCard } from "./fancy/MagneticCard";
import { ScrollReveal } from "./fancy/ScrollReveal";
import { LetterSwap } from "./fancy/LetterSwap";

export function ServicesSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [activeCategory, setActiveCategory] = useState<"frontline" | "backoffice" | "qa">("frontline");

  const categories = [
    {
      id: "frontline",
      label: "1. Frontline Customer Support",
      desc: "Direct customer communication across email, live chat, and support tickets.",
    },
    {
      id: "backoffice",
      label: "2. Back-Office Operations",
      desc: "Repetitive data verification, KYC identity checks, and order processing.",
    },
    {
      id: "qa",
      label: "3. QA & Playbook Engineering",
      desc: "Documenting support runbooks, canned replies, and weekly CSAT auditing.",
    },
  ];

  const frontlineServices = [
    {
      icon: Mail,
      title: "Email & Helpdesk Ticketing",
      badge: "Zendesk · Intercom · Freshdesk",
      desc: "Clear, personalized responses to customer inquiries, billing questions, account access problems, and troubleshooting.",
      points: [
        "First-response time under 15 minutes during shift",
        "Clear escalation tags for engineering bugs",
        "Friendly, brand-aligned English and French tone",
        "Proactive follow-ups until the ticket is fully resolved",
      ],
    },
    {
      icon: MessageSquare,
      title: "Live Chat & In-App Messaging",
      badge: "Intercom · Crisp · Drift · Gorgias",
      desc: "Fast, real-time messaging for web and mobile visitors. Answering product questions, reducing cart abandonment, and guiding users.",
      points: [
        "Immediate greeting and empathetic problem resolution",
        "Screenshare guidance and step-by-step walkthroughs",
        "Converting trial users with helpful answers",
        "Detailed handoff notes when looping in managers",
      ],
    },
    {
      icon: Headphones,
      title: "Tier-1 Technical Support",
      badge: "Bug Reproduction · Slack Sync",
      desc: "Handling login issues, payment error codes, webhook notifications, and API errors following step-by-step diagnostic trees.",
      points: [
        "Structured reproduction steps with browser logs & OS details",
        "Direct Slack or Linear ticket creation for engineers",
        "Clean boundary between customer reassurance and technical escalation",
        "Continuous knowledge base article updates based on repeats",
      ],
    },
  ];

  const backofficeServices = [
    {
      icon: ShieldCheck,
      title: "KYC & Identity Verification",
      badge: "Fintech · Marketplaces · Crypto",
      desc: "Reviewing government IDs, proof of address, and selfie matches to verify user accounts quickly while preventing fraud.",
      points: [
        "Strict adherence to compliance checklists and DPAs",
        "Flagging suspicious patterns and forged credentials",
        "Quick manual review queues within 10 minutes",
        "Encrypted workstations and zero local data storage",
      ],
    },
    {
      icon: Database,
      title: "Data Clean-Up & CRM Hygiene",
      badge: "Salesforce · HubSpot · Notion",
      desc: "Deduplicating customer contacts, standardizing lead records, tagging accounts correctly, and maintaining clean databases.",
      points: [
        "Removing duplicate leads and stale company domains",
        "Enriching account records with public firmographic data",
        "Weekly database audits and discrepancy reports",
        "Custom field mapping across tools via Zapier/Make",
      ],
    },
    {
      icon: Layers,
      title: "Order & Refund Processing",
      badge: "Shopify · Stripe · Chargebee",
      desc: "Processing customer cancellations, processing returns within policy guidelines, and tracking shipment delivery inquiries.",
      points: [
        "Strict adherence to your predefined refund thresholds",
        "Carrier dispute tracking and lost parcel follow-ups",
        "Subscription modification and plan downgrades/upgrades",
        "Chargeback evidence compilation to win bank disputes",
      ],
    },
  ];

  const qaServices = [
    {
      icon: ShieldCheck,
      title: "Weekly Ticket Audits & CSAT Scoring",
      badge: "Quality Control · Weekly Reviews",
      desc: "Independent spot-checks on resolved tickets to ensure grammatical accuracy, empathy, policy adherence, and correct tagging.",
      points: [
        "Random 5-10% sample audit across every active agent",
        "Scored across 6 criteria: tone, speed, accuracy, empathy, tagging, formatting",
        "Weekly coaching sessions to eliminate recurring mistakes",
        "Transparent scorecard shared directly with your team on Slack",
      ],
    },
    {
      icon: Database,
      title: "Living Playbooks & Runbook Curation",
      badge: "Notion · Slite · Guru",
      desc: "We don't let institutional knowledge stay in people's heads. We document macros, troubleshooting flowcharts, and edge cases.",
      points: [
        "Centralized repository of approved response templates",
        "Step-by-step decision trees for complex customer requests",
        "Updated continuously as your product releases new features",
        "Searchable library available to both our agents and your internal staff",
      ],
    },
    {
      icon: Layers,
      title: "Macro & Canned Response Calibration",
      badge: "Zendesk Macros · Saved Replies",
      desc: "Refining macro templates so they sound natural and human, never robotic. Eliminating corporate buzzwords in favor of clarity.",
      points: [
        "Reviewing and rewriting outdated canned responses",
        "Adding modular snippets for flexible agent customization",
        "A/B testing greeting styles to improve customer CSAT",
        "Synchronizing macros between email, chat, and help center",
      ],
    },
  ];

  const currentServices =
    activeCategory === "frontline"
      ? frontlineServices
      : activeCategory === "backoffice"
      ? backofficeServices
      : qaServices;

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#ffffff] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-12 border-b border-[#dedbd6]">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                  What We Do
                </span>
              </div>
              
              <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
                What we take off your plate.
              </h2>
              
              <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
                From daily customer questions to routine back-office tasks, our dedicated agents handle your repetitive queues so your core team can focus on building and selling.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#111111] text-[#ffffff] text-[13px] font-medium hover:bg-[#222222] active:scale-95 transition-all self-start md:self-end cursor-pointer group shadow-xs"
            >
              <LetterSwap
                label="Discuss What to Outsource"
                icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />}
              />
            </button>
          </div>
        </ScrollReveal>

        {/* Dynamic Category Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as "frontline" | "backoffice" | "qa")}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                  isActive
                    ? "bg-[#faf9f6] border-[#111111] shadow-xs"
                    : "bg-[#ffffff] border-[#dedbd6] hover:bg-[#faf9f6]/60 hover:border-[#111111]/30"
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#2563eb] transition-all" />
                )}
                <div className="font-mono text-[12px] font-medium text-[#111111] mb-1.5 flex items-center justify-between">
                  <span>{cat.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />}
                </div>
                <div className="text-[12px] text-[#666666] leading-relaxed font-normal">
                  {cat.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* 3 Active Service Cards with Magnetic Tilt and Staggered Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={`${activeCategory}-${idx}`} delay={idx * 100} direction="up">
                <MagneticCard intensity={5} className="h-full">
                  <div className="bg-[#faf9f6] border border-[#dedbd6] rounded-xl p-7 space-y-6 flex flex-col justify-between hover:border-[#111111]/40 transition-colors shadow-xs h-full">
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#ffffff] border border-[#dedbd6] flex items-center justify-center text-[#2563eb] shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[1px] text-[#888888] px-2 py-1 bg-[#ffffff] border border-[#dedbd6] rounded-md">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-[20px] font-medium text-[#111111] tracking-[-0.3px]">
                        {service.title}
                      </h3>

                      <p className="text-[13px] text-[#555555] leading-relaxed font-normal">
                        {service.desc}
                      </p>

                      <div className="pt-2 border-t border-[#dedbd6]/80">
                        <div className="font-mono text-[10px] uppercase tracking-[1.4px] text-[#888888] mb-3">
                          What We Handle:
                        </div>
                        <ul className="space-y-2 text-[12.5px] text-[#444444]">
                          {service.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </MagneticCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
