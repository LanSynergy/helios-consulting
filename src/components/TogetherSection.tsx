"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function TogetherSection() {
  return (
    <section className="py-24 md:py-36 bg-[#faf9f6] border-t border-[#dedbd6]" id="together">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
            <span className="badge-label text-[#585858] flex items-center gap-2">
              <span className="block w-2 h-2 bg-[#2563eb]" />
              Intercom helpdesk
            </span>
            <span className="badge-label text-[#585858] flex items-center gap-2">
              <span className="block w-2 h-2 bg-[#ff5a43]" />
              Fin AI Agent
            </span>
          </div>
          <h2 className="text-[36px] md:text-[54px] font-[400] text-[#111111] leading-[1.05] tracking-[-1.5px] font-saans mb-6">
            Together, they deliver better <br />
            support experiences
          </h2>
          <p className="font-serrif text-[17px] md:text-[18px] text-[#414141] font-[300] leading-relaxed max-w-[620px]">
            Intercom and Fin are built together, sharing the exact same customer record, knowledge
            hub, and inbox. That means every conversation your team has teaches Fin something new,
            every gap gets spotted and closed, and support gets better for everyone.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-[#f1eee9] border border-[#dedbd6] rounded-xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden mb-6 bg-[#ffffff] border border-[#dedbd6]">
                <Image
                  src="/assets/3de1f9a102582303825899725b6e24de4f186519-1612x1612.webp"
                  alt="Fin asking a teammate to approve a refund reply before answering"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-[20px] font-normal text-[#111111] font-saans mb-3">
                Work together, seamlessly
              </h3>
              <p className="font-serrif text-[15px] text-[#585858] font-[300] leading-relaxed">
                When Fin hands off to a human, the agent sees the full conversation history and an
                instant AI summary, so customers never have to repeat themselves.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f1eee9] border border-[#dedbd6] rounded-xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden mb-6 bg-[#ffffff] border border-[#dedbd6]">
                <Image
                  src="/assets/01831fc9b275a0d6947a0d0b756fbc90ad39881a-1612x1612.jpg"
                  alt="Recommendations highlighting content and customer data gaps"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-[20px] font-normal text-[#111111] font-saans mb-3">
                Self-improving system
              </h3>
              <p className="font-serrif text-[15px] text-[#585858] font-[300] leading-relaxed">
                Every customer interaction powers actionable insights. Fin flags topics that need
                clearer documentation, helping your team continuously close knowledge gaps.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f1eee9] border border-[#dedbd6] rounded-xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden mb-6 bg-[#ffffff] border border-[#dedbd6]">
                <Image
                  src="/assets/e36358115db8192727d4b8206fbdd126ac695767-1612x1612.webp"
                  alt="Knowledge Hub content library with sources grouped by topic"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-[20px] font-normal text-[#111111] font-saans mb-3">
                Centralized Knowledge Hub
              </h3>
              <p className="font-serrif text-[15px] text-[#585858] font-[300] leading-relaxed">
                One source of truth powers your help center, Copilot drafts, and Fin replies. Update
                an article once, and both AI and human agents immediately have the latest answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
