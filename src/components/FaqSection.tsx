"use client";

import React, { useState } from "react";
import { ChevronDown, Search, ArrowRight } from "lucide-react";

export function FaqSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      q: "How does onboarding and SOP training work?",
      a: "During the initial 1–2 week onboarding window, we ingest your existing runbooks, knowledge base articles, and past ticket resolutions. We run mock tickets with your lead, draft pre-approved response macros, and establish explicit criteria for when an agent resolves vs. escalates.",
    },
    {
      q: "Can we integrate HELIOS agents into our existing Zendesk / Intercom / Freshdesk stack?",
      a: "Yes. We work entirely inside your existing tools (Zendesk, Intercom, Freshdesk, Gorgias, Help Scout, HubSpot, Slack/Teams). We do not require you to migrate to proprietary software. You grant us least-privilege agent seats governed by your own SSO and security policies.",
    },
    {
      q: "What timezones can HELIOS cover?",
      a: "Our Kigali hub operates on Central Africa Time (CAT / UTC+2). This provides natural 100% core-hours overlap with the UK and Europe (GMT / CET) and prime morning coverage for US East Coast teams. We can also schedule dedicated evening, weekend, or 24/7 coverage pods based on your volume.",
    },
    {
      q: "What languages do your specialists speak?",
      a: "All HELIOS customer operations specialists are fluent bilingual speakers in English and French. We support transatlantic SaaS and e-commerce companies serving English-speaking and Francophone global markets.",
    },
    {
      q: "Can we begin with a trial or fixed-scope pilot?",
      a: "Yes. We recommend a 14 to 30-day fixed-scope pilot. This allows you to evaluate first-contact resolution rates, response quality, and communication discipline on a contained volume of tickets before committing to a longer-term dedicated pod.",
    },
    {
      q: "How do you safeguard our customer data?",
      a: "We sign bilateral Data Protection Agreements (DPAs) compliant with Rwanda’s Law No. 058/2021 and EU GDPR standards. Operations run on secured endpoints with disk encryption, multi-factor authentication (MFA), and zero local storage of client customer data.",
    },
    {
      q: "How do you track quality and prevent robotic scripted answers?",
      a: "Every week, our Operations Lead and QA supervisors audit a randomized sample of resolved tickets against a structured 5-point quality rubric. We review tone, accuracy, reproduction completeness, and customer sentiment to continuously coach agents.",
    },
    {
      q: "What happens when an issue requires engineering or product escalation?",
      a: "We establish a documented escalation matrix during onboarding. Issues requiring technical debugging or executive approval are tagged, enriched with clear reproduction steps and log screenshots, and routed to your internal Slack or Jira channels without dropped context.",
    },
    {
      q: "What is your agent retention and employment structure in Kigali?",
      a: "Unlike traditional high-turnover call centers, HELIOS employs university-educated professionals with long-term employment contracts, healthcare coverage, and clear career pathways in operations management, resulting in high retention and institutional knowledge.",
    },
    {
      q: "How quickly can HELIOS ramp up a new support pod?",
      a: "Standard deployment takes 10 to 14 business days from contract execution. This timeline covers tool access provisioning, SOP documentation, sandbox ticket simulations, and shadow shifts before going fully live.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#ffffff] border-b border-[#dedbd6]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
              Common Inquiries
            </span>
          </div>

          <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
            Frequently asked questions.
          </h2>

          <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
            Everything you need to know about our Kigali hub, onboarding workflows, tool integrations, and operational standards.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search operational topics (SOPs, tools, security...)"
                className="w-full pl-10 pr-4 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:outline-none focus:border-[#111111] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="divide-y divide-[#dedbd6] border-y border-[#dedbd6]">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] font-medium text-[#111111] group-hover:text-[#2563eb] transition-colors tracking-[-0.2px]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#888888] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#2563eb]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-6 text-[14px] text-[#555555] leading-relaxed font-normal animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Question Help */}
        <div className="mt-12 text-center text-[13px] text-[#666666]">
          Have a question not addressed here?{" "}
          <button
            onClick={onOpenBooking}
            className="text-[#2563eb] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Ask our team directly with our team</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
}
