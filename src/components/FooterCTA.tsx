"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export function FooterCTA({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-32 md:py-40 border-t border-[#dedbd6]">
      {/* Mathematical 180px Dot Grid Canvas */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2563eb 1.5px, transparent 0)",
          backgroundSize: "180px 180px",
        }}
      />
      <div className="absolute left-[3%] top-[18%] hidden lg:block w-[130px] aspect-[4/5] rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm">
        <Image
          src="/assets/2dcaeebc2955b38c99681a4f39bce61138bf703a-423x525.jpg"
          alt="HELIOS customer service specialist in Kigali"
          fill
          className="object-cover"
          sizes="130px"
        />
      </div>

      <div className="absolute right-[4%] top-[12%] hidden lg:block w-[140px] aspect-[1/1] rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm">
        <Image
          src="/assets/6775acd906358b4ae5febbcf12407af091c08109-600x600.jpg"
          alt="Kigali botanical detail"
          fill
          className="object-cover"
          sizes="140px"
        />
      </div>

      <div className="absolute right-[5%] bottom-[14%] hidden lg:block w-[125px] aspect-[4/5] rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm">
        <Image
          src="/assets/b74422e2810cec5a7a9629cdff2a2eaf1f432fe2-423x525.webp"
          alt="Dedicated customer support team member"
          fill
          className="object-cover"
          sizes="125px"
        />
      </div>

      <div className="absolute left-[5%] bottom-[12%] hidden lg:block w-[120px] aspect-[1/1] rounded-xl overflow-hidden border border-[#dedbd6] shadow-sm bg-[#111111] p-3 text-[#dedbd6] font-mono text-[9px] leading-tight">
        + HELIOS OPS<br />
        KIGALI HUB<br />
        DISPATCH<br />
        SYNCED UTC+2<br />
        Managed TIER 1
      </div>
      {/* Centered Editorial CTA */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
        <div className="font-mono text-[11px] tracking-[1.4px] uppercase text-[#666666]">
          Operational Peace of Mind
        </div>

        <h2 className="text-[44px] sm:text-[60px] md:text-[72px] font-sans font-normal text-[#111111] leading-[0.98] tracking-[-2px]">
          Dependable customer operations start here.
        </h2>

        <p className="font-serif italic font-light text-[18px] sm:text-[21px] text-[#555555] max-w-2xl mx-auto leading-relaxed">
          Embed dedicated Rwandan talent, documented SOP governance, and continuous QA auditing into your frontline customer support workflows.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto h-12 px-7 bg-[#111111] text-[#ffffff] font-medium text-[14px] rounded-xl hover:bg-[#222222] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#dedbd6]" />
            <span>Schedule Discovery Consultation</span>
          </button>
          
          <a
            href="#contact"
            className="w-full sm:w-auto h-12 px-7 bg-[#ffffff] text-[#111111] font-medium text-[14px] border border-[#dedbd6] rounded-xl hover:bg-[#faf9f6] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Written Inquiry Form</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#888888]" />
          </a>
        </div>
      </div>
    </section>
  );
}
