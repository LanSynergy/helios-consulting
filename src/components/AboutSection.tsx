"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function AboutSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const values = [
    {
      title: "1. Customer Focus",
      desc: "Solve the customer's actual problem with empathy, clear instructions, and polite communication—not rushed copy-paste replies.",
    },
    {
      title: "2. Accountability",
      desc: "Own responsibilities clearly, follow through on commitments, and raise issues early rather than concealing mistakes.",
    },
    {
      title: "3. Complete Honesty",
      desc: "Communicate truthfully about capabilities, limitations, and ticket turnaround times. No inflated claims or hidden billable hours.",
    },
    {
      title: "4. Clear Communication",
      desc: "Keep clients informed proactively. Document decisions, ticket escalations, and customer feedback clearly on Slack.",
    },
    {
      title: "5. Continuous Learning",
      desc: "Use weekly ticket reviews and customer CSAT feedback to coach agents and improve response quality week over week.",
    },
    {
      title: "6. Data Security",
      desc: "Protect sensitive customer data using role-based access controls, mandatory two-factor authentication, and signed DPAs.",
    },
    {
      title: "7. Operational Consistency",
      desc: "Follow approved runbooks and resolution guides consistently so every customer receives the exact same high standard of care.",
    },
    {
      title: "8. Mutual Respect",
      desc: "Treat customers, client teams, and support agents with dignity, fair working conditions, and genuine appreciation.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#faf9f6] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
              <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                Who We Are
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
              A practical, human-first customer support partner.
            </h2>

            <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#444444] leading-relaxed">
              HELIOS Customer Operations was founded in Kigali, Rwanda to give growing tech and e-commerce companies a better way to outsource support. We believe you shouldn&apos;t have to choose between exorbitant domestic hiring costs and low-quality, impersonal call centers.
            </p>

            <p className="text-[14px] text-[#666666] leading-relaxed">
              By hiring university-educated professionals in Rwanda, paying them fair career wages, and investing in continuous training, we deliver support pods that truly care about your customers. We work directly inside your existing tools (Zendesk, Intercom, Gorgias, Freshdesk, Slack) so you retain complete control over your customer experience.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-[#ffffff] text-[13px] font-medium hover:bg-[#222222] transition-colors cursor-pointer"
              >
                <span>Talk With Our Team with our team</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />
              </button>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-60 w-full rounded-xl overflow-hidden border border-[#dedbd6] shadow-xs">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="HELIOS customer support team collaborating in Kigali"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-[#ffffff] text-[12px] font-medium">
                  Dedicated, bilingual customer support specialists
                </span>
              </div>
            </div>

            <div className="border border-[#dedbd6] rounded-xl p-6 bg-[#ffffff] space-y-2">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[1.2px] text-[#2563eb]">
                Our Mission
              </h3>
              <p className="text-[13px] text-[#555555] leading-relaxed font-normal">
                To help growing digital businesses deliver dependable, empathetic customer support and organized operations through transparent, customer-first outsourcing.
              </p>
            </div>

            <div className="border border-[#dedbd6] rounded-xl p-6 bg-[#ffffff] space-y-2">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[1.2px] text-[#2563eb]">
                Our Promise
              </h3>
              <p className="text-[13px] text-[#555555] leading-relaxed font-normal">
                No robotic scripts, no hidden billing, and no dropped handoffs. Just reliable, well-trained agents answering your customers with care every day.
              </p>
            </div>
          </div>

        </div>

        {/* 8 Principles */}
        <div className="mt-24 pt-16 border-t border-[#dedbd6]">
          <div className="max-w-2xl mb-12">
            <div className="font-mono text-[11px] uppercase tracking-[1.4px] text-[#888888] mb-2">
              Our Working Principles
            </div>
            <h3 className="text-[28px] sm:text-[36px] font-sans font-normal text-[#111111] tracking-[-1px]">
              How we train and guide every support specialist.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-6 space-y-2 hover:border-[#111111]/30 transition-colors">
                <span className="font-mono text-[11px] font-medium text-[#2563eb] block">
                  Principle 0{idx + 1}
                </span>
                <h4 className="text-[16px] font-medium text-[#111111]">{v.title}</h4>
                <p className="text-[13px] text-[#666666] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
