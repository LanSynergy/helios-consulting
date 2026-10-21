"use client";

import React, { useState } from "react";
import { CalendarInline } from "./CalendarInline";
import { Calendar, Mail, CheckCircle2, Copy, Send, ShieldCheck, Clock, Check } from "lucide-react";
import { LetterSwap } from "./fancy/LetterSwap";
import { ScrollReveal } from "./fancy/ScrollReveal";

export function ContactAndScheduleSection() {
  const [activeTab, setActiveTab] = useState<"calendar" | "form">("calendar");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    country: "",
    service: "Email & helpdesk ticketing",
    volume: "500–2,000 interactions",
    timezone: "Europe / UK (GMT/CET)",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const copySummary = () => {
    const text = `HELIOS Customer Operations Inquiry
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company} (${formData.website || "N/A"})
Country: ${formData.country}
Timezone: ${formData.timezone}
Service: ${formData.service}
Volume: ${formData.volume}
Notes: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#faf9f6] border-b border-[#dedbd6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Full-width balanced header */}
        <ScrollReveal>
          <div id="schedule" className="mb-12 scroll-mt-24 space-y-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#dedbd6]">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eceae5] border border-[#dedbd6] rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                  <span className="font-mono text-[10px] tracking-[1.4px] uppercase text-[#111111] font-medium">
                    Start The Conversation
                  </span>
                </div>

                <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-sans font-normal text-[#111111] leading-[1.04] tracking-[-1.6px]">
                  Tell us what your business needs.
                </h2>

                <p className="font-serif italic font-light text-[17px] sm:text-[19px] text-[#555555] leading-relaxed">
                  Select a live time on our calendar for an immediate 25-minute consultation, or submit your written requirements to receive a customized pilot scope within 4 hours.
                </p>
              </div>

              {/* Tab Selector */}
              <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
                <button
                  onClick={() => setActiveTab("calendar")}
                  className={`px-5 py-2.5 rounded-xl text-[13px] font-medium cursor-pointer transition-all flex items-center gap-2 ${
                    activeTab === "calendar"
                      ? "bg-[#111111] text-[#ffffff] shadow-xs"
                      : "bg-[#ffffff] text-[#444444] border border-[#dedbd6] hover:bg-[#faf9f6]"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>1. Direct Calendar Booking</span>
                </button>
                <button
                  onClick={() => setActiveTab("form")}
                  className={`px-5 py-2.5 rounded-xl text-[13px] font-medium cursor-pointer transition-all flex items-center gap-2 ${
                    activeTab === "form"
                      ? "bg-[#111111] text-[#ffffff] shadow-xs"
                      : "bg-[#ffffff] text-[#444444] border border-[#dedbd6] hover:bg-[#faf9f6]"
                  }`}
                >
                  <Mail className="w-3.5 h-3.5 text-[#888888]" />
                  <span>2. Written Inquiry Form</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tab 1: Left / Right Split with properly proportioned 5 / 7 columns */}
        {activeTab === "calendar" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Info Column (lg:col-span-4) - Complete, high-context cards */}
            <div className="lg:col-span-4 space-y-5">
              <ScrollReveal delay={100}>
                <div className="bg-[#ffffff] border border-[#dedbd6] rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
                  <div className="space-y-1 pb-3 border-b border-[#dedbd6]">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[1.4px] text-[#2563eb]">
                      Call Agenda
                    </span>
                    <h3 className="text-[17px] font-medium text-[#111111]">
                      What happens on the call?
                    </h3>
                  </div>
                  
                  <ol className="space-y-4 text-[13px] text-[#555555] list-decimal pl-4 leading-relaxed font-normal">
                    <li>
                      <strong className="text-[#111111] block font-medium">Discovery Review:</strong>
                      <span>We review your active channels (Zendesk, Intercom, Gorgias), customer volume, and main bottlenecks.</span>
                    </li>
                    <li>
                      <strong className="text-[#111111] block font-medium">Feasibility & Schedule:</strong>
                      <span>We confirm tool permissions, language support, and required shift hours (8x5, 16x5, or 24/7).</span>
                    </li>
                    <li>
                      <strong className="text-[#111111] block font-medium">Pilot Proposal:</strong>
                      <span>We structure a transparent 2–4 week scoped trial with clear success targets before any long-term commitment.</span>
                    </li>
                  </ol>

                  <div className="pt-4 border-t border-[#dedbd6] space-y-2 text-[12px] text-[#666666]">
                    <div className="flex items-center justify-between">
                      <span>Station:</span>
                      <strong className="font-mono text-[#111111]">Kigali, Rwanda (UTC+2)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Format:</span>
                      <strong className="text-[#111111]">25-Min Video / Audio</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Invites:</span>
                      <strong className="text-[#111111]">Google Meet / Zoom</strong>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <div className="p-6 rounded-2xl bg-[#f1eee9] border border-[#dedbd6] space-y-3 text-[12px]">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#111111] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#2563eb]" />
                    <span>Confidentiality Guarantee</span>
                  </div>
                  <p className="text-[#555555] leading-relaxed">
                    Zero obligation consultation. Bilateral DPAs executed prior to accessing client software instances or queue credentials.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <div className="p-5 rounded-2xl bg-[#ffffff] border border-[#dedbd6] space-y-2 text-[12px] shadow-xs">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888] block">
                    Fast Questions?
                  </span>
                  <div className="text-[13px] text-[#222222]">
                    Email our operations lead directly at{" "}
                    <a href="mailto:contact@heliosoperations.com" className="text-[#2563eb] underline font-medium">
                      contact@heliosoperations.com
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Calendar Column (lg:col-span-8) - Full width unclipped iframe */}
            <div className="lg:col-span-8 w-full">
              <ScrollReveal direction="left" delay={150}>
                <CalendarInline />
              </ScrollReveal>
            </div>
          </div>
        )}

        {/* Tab 2: Written Inquiry Form */}
        {activeTab === "form" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#ffffff] border border-[#dedbd6] rounded-2xl p-7 text-[13px] text-[#666666] space-y-4 shadow-xs">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[1.2px] text-[#111111] pb-2 border-b border-[#dedbd6]">
                  Inquiry Routing
                </h3>
                <p className="leading-relaxed font-normal">
                  Use this form to specify ticket volume, channels, and shift schedules. Your submission alerts our operations lead in Kigali for same-day review.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab("calendar")}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#111111] hover:bg-[#222222] text-[#ffffff] font-medium text-[12px] uppercase tracking-[0.5px] transition-colors cursor-pointer"
                  >
                    Switch to Live Calendar
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <form
                onSubmit={handleSubmit}
                className="bg-[#ffffff] border border-[#dedbd6] rounded-2xl p-8 space-y-5 shadow-xs"
              >
                <div className="border-b border-[#dedbd6] pb-4">
                  <h3 className="text-[20px] font-medium text-[#111111] tracking-[-0.2px]">
                    Business Inquiry
                  </h3>
                  <p className="text-[12px] text-[#888888] mt-1 font-normal">
                    Fields marked with an asterisk are required.
                  </p>
                </div>

                {formSubmitted && (
                  <div className="p-5 rounded-xl bg-[#eceae5] border border-[#dedbd6] text-[13px] text-[#111111] space-y-3">
                    <div className="flex items-center gap-2 font-medium text-[14px]">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Inquiry Summary Received</span>
                    </div>
                    <p className="leading-relaxed text-[#555555]">
                      Thank you. Your inquiry details have been forwarded to our Kigali operations desk. A specialist will follow up shortly.
                    </p>
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={copySummary}
                        className="px-4 py-2 rounded-xl bg-[#111111] text-[#ffffff] font-medium text-[12px] cursor-pointer flex items-center gap-1.5"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copySuccess ? "Copied" : "Copy Inquiry Summary"}</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Full name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Business email *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Company name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Company Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Company website</label>
                    <input
                      type="url"
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. United Kingdom, USA, France"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Target Timezone Coverage *</label>
                    <select
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                    >
                      <option>Europe / UK (GMT / CET)</option>
                      <option>US East (EDT)</option>
                      <option>US West / Pacific (PDT)</option>
                      <option>Custom 24/7 Transatlantic Coverage</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Primary service needed *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                    >
                      <option>Email & helpdesk ticketing</option>
                      <option>Live chat & website messaging</option>
                      <option>Tier 1 technical support</option>
                      <option>Back-office data & KYC verification</option>
                      <option>Order & refund processing</option>
                      <option>Full dedicated support pod</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Estimated monthly volume</label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                    >
                      <option>&lt; 500 tickets / month</option>
                      <option>500 – 2,000 tickets / month</option>
                      <option>2,000 – 10,000 tickets / month</option>
                      <option>10,000+ tickets / month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-medium text-[#222222] block mb-1.5">Requirements or notes</label>
                  <textarea
                    rows={3}
                    placeholder="Approximate ticket volume, software tools you use (e.g. Zendesk, Intercom), coverage hours needed, and current bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-[13px] bg-[#faf9f6] border border-[#dedbd6] rounded-xl focus:border-[#2563eb] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#111111] text-[#ffffff] text-[13px] font-medium hover:bg-[#222222] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-xs"
                  >
                    <LetterSwap
                      label="Submit Business Inquiry"
                      icon={<Send className="w-3.5 h-3.5 text-[#dedbd6]" />}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
