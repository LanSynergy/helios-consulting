"use client";

import React from "react";
import Link from "next/link";
import { HeliosLogo } from "./HeliosLogo";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export function Footer({ onOpenBooking }: { onOpenBooking: () => void }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#faf9f6] text-[#111111] pt-20 pb-12 border-t border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#dedbd6]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="HELIOS home">
              <HeliosLogo size="md" />
            </Link>
            <p className="text-[13px] text-[#666666] max-w-sm leading-relaxed font-normal">
              Customer support and business operations solutions designed around your business needs. Embedded pods from Kigali, Rwanda.
            </p>
            <div className="text-[12px] text-[#888888] font-mono space-y-1 pt-2">
              <p>Headquarters: Kigali, Rwanda (UTC+2)</p>
              <p>Contact: contact@heliosoperations.com</p>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[1.2px] text-[#111111]">
              Company
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] text-[#666666]">
              <a href="#about" className="hover:text-[#2563eb] transition-colors">About HELIOS</a>
              <a href="#why-helios" className="hover:text-[#2563eb] transition-colors">Why HELIOS</a>
              <a href="#process" className="hover:text-[#2563eb] transition-colors">How We Work</a>
              <a href="#rwanda" className="hover:text-[#2563eb] transition-colors">Kigali Hub Telemetry</a>
              <a href="#security" className="hover:text-[#2563eb] transition-colors">Security & DPA</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[1.2px] text-[#111111]">
              Services
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] text-[#666666]">
              <a href="#services" className="hover:text-[#2563eb] transition-colors">Email & Helpdesk</a>
              <a href="#services" className="hover:text-[#2563eb] transition-colors">Live Chat Support</a>
              <a href="#services" className="hover:text-[#2563eb] transition-colors">Tier 1 Tech Support</a>
              <a href="#services" className="hover:text-[#2563eb] transition-colors">User Verification (KYC)</a>
              <a href="#services" className="hover:text-[#2563eb] transition-colors">CRM Administration</a>
              <a href="#services" className="hover:text-[#2563eb] transition-colors">Weekly QA Auditing</a>
            </div>
          </div>

          {/* Governance & Booking */}
          <div className="space-y-3">
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[1.2px] text-[#111111]">
              Governance & Booking
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] text-[#666666]">
              <a href="#legal" className="hover:text-[#2563eb] transition-colors">Privacy Policy</a>
              <a href="#legal" className="hover:text-[#2563eb] transition-colors">Website Terms of Use</a>
              <a href="#legal" className="hover:text-[#2563eb] transition-colors">DPA Framework</a>
              <a href="#faq" className="hover:text-[#2563eb] transition-colors">Common FAQs</a>
            </div>
            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111111] hover:bg-[#222222] text-[#ffffff] font-medium text-[12px] transition-colors cursor-pointer"
              >
                <span>Schedule Meeting</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#dedbd6]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#888888]">
          <div>
            © 2026 HELIOS Customer Operations. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline font-mono text-[11px]">
              Professional service · Clear communication · Responsible operations
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#f1eee9] hover:bg-[#eceae5] border border-[#dedbd6] text-[#444444] hover:text-[#111111] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
