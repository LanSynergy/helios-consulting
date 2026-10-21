"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeliosLogo } from "./HeliosLogo";
import { ChevronDown, ArrowRight, Menu, X, Calendar } from "lucide-react";
import { LetterSwap } from "./fancy/LetterSwap";

export function Navbar({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const primaryLinks = [
    { label: "Services", href: "#services" },
    { label: "How We Work", href: "#process" },
    { label: "Why HELIOS", href: "#why-helios" },
  ];

  const companyLinks = [
    { label: "Kigali Operations Base", href: "#rwanda", desc: "UTC+2 / CAT synchronized hub in East Africa" },
    { label: "Security & DPA Framework", href: "#security", desc: "RBAC, device encryption & EU GDPR alignment" },
    { label: "8 Core Operational Principles", href: "#about", desc: "Accountability, precision & customer focus" },
    { label: "Frequently Asked Questions", href: "#faq", desc: "Onboarding, tooling, SLAs and pilot scopes" },
    { label: "Policies & Transparency", href: "#legal", desc: "DPA framework, privacy & website terms" },
  ];

  return (
    <>
      {/* Top Banner - Authentic Intercom layout: quiet, non-cramped */}
      <aside className="relative flex items-center justify-center gap-2 overflow-hidden px-4 py-2.5 text-center text-xs text-[#111111] bg-[#eceae5] border-b border-[#dedbd6]">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.2px]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
          <span>Kigali Hub</span>
          <span className="text-[#888888]">·</span>
          <span className="font-sans font-normal normal-case text-xs tracking-normal text-[#444444]">
            Bilingual frontline support & back-office pods. Q2 onboarding slots now open.
          </span>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1 font-sans text-xs font-medium text-[#2563eb] hover:underline cursor-pointer ml-1 group"
          >
            <LetterSwap label="Schedule scoping call" icon={<ArrowRight className="w-3 h-3" />} />
          </button>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#dedbd6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-10">
              <Link href="/" className="flex items-center" aria-label="HELIOS Home">
                <HeliosLogo size="md" />
              </Link>

              {/* Center Navigation - Spaced and Airy */}
              <nav className="hidden lg:flex items-center gap-8 text-[14px] text-[#222222]">
                {primaryLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="hover:text-[#2563eb] transition-colors py-1 font-normal tracking-[-0.1px] group"
                  >
                    <LetterSwap label={item.label} />
                  </a>
                ))}

                {/* Company & Hub Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 hover:text-[#2563eb] transition-colors py-1 font-normal tracking-[-0.1px] cursor-pointer"
                    aria-expanded={dropdownOpen}
                  >
                    <span>Company & Hub</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-[#888888] ${dropdownOpen ? "rotate-180 text-[#2563eb]" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full -left-4 pt-2 w-80 animate-in fade-in duration-150 z-50">
                      <div className="bg-[#ffffff] border border-[#dedbd6] rounded-xl p-2 shadow-lg space-y-0.5">
                        {companyLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-3.5 py-2.5 rounded-xl hover:bg-[#faf9f6] transition-colors group"
                          >
                            <div className="text-[13px] font-medium text-[#111111] group-hover:text-[#2563eb] transition-colors">
                              {link.label}
                            </div>
                            <div className="text-[11px] text-[#666666] leading-snug mt-0.5 font-normal">
                              {link.desc}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Right Action Controls */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="#contact"
                className="text-[14px] text-[#444444] hover:text-[#111111] transition-colors font-normal group"
              >
                <LetterSwap label="Written Inquiry" />
              </a>

              <div className="h-4 w-px bg-[#dedbd6]" />

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center h-10 px-4 py-0 bg-[#111111] text-[#ffffff] text-[13px] font-medium rounded-full hover:bg-[#222222] transition-colors cursor-pointer group"
              >
                <LetterSwap
                  label="Schedule Call"
                  icon={<Calendar className="w-3.5 h-3.5 text-[#dedbd6]" />}
                />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 h-9 px-3 bg-[#111111] text-[#ffffff] text-[12px] font-medium rounded-full"
              >
                <Calendar className="w-3 h-3" />
                <span>Schedule</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#111111] hover:bg-[#eceae5] rounded-xl transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#ffffff] border-b border-[#dedbd6] px-6 py-5 space-y-4">
            <div className="space-y-1">
              <div className="font-mono text-[10px] uppercase tracking-[1.4px] text-[#888888] px-2 mb-2">
                Navigation
              </div>
              {primaryLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-[14px] text-[#111111] hover:bg-[#faf9f6] rounded-xl"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="space-y-1 pt-3 border-t border-[#dedbd6]">
              <div className="font-mono text-[10px] uppercase tracking-[1.4px] text-[#888888] px-2 mb-2">
                Company & Operations
              </div>
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-[13px] text-[#444444] hover:bg-[#faf9f6] rounded-xl"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#dedbd6] space-y-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 text-[13px] border border-[#dedbd6] rounded-xl text-[#111111]"
              >
                Written Inquiry Form
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 bg-[#111111] text-[#ffffff] text-[13px] rounded-xl font-medium"
              >
                Schedule Call with our team
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
