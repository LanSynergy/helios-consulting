"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, Database } from "lucide-react";

export function IntegrationsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#faf9f6]" id="integrations">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="badge-label text-[#585858]">Ecosystem & APIs</span>
            <h2 className="display-section text-[#111111]">
              Works with the tools you already use
            </h2>
            <p className="font-serrif text-[17px] text-[#414141] font-[300] leading-relaxed">
              Connect Intercom and Fin to your essential tech stack—Salesforce, HubSpot, Slack,
              Shopify, Stripe, and Jira—so your team has complete customer context in one workspace.
            </p>
            <p className="font-serrif text-[16px] text-[#585858] font-[300] leading-relaxed">
              Fin pulls in live customer records and executes autonomous actions via REST APIs or the
              Model Context Protocol (MCP), surfacing crucial data straight to the agent inbox.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="#app-store"
                className="inline-flex items-center gap-2 text-[14px] text-[#111111] font-medium border-b border-[#111111] pb-0.5 hover:text-[#2563eb] hover:border-[#2563eb] transition-colors"
              >
                <span>Explore 450+ apps in the App Store</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-square bg-[#f1eee9] rounded-xl p-6 border border-[#dedbd6] overflow-hidden flex items-center justify-center">
              <Image
                src="/assets/1e8e53fa0f4da5397450f4043f82d7b6501cf700-1467x1350.webp"
                alt="Intercom integrations grid with Slack, Shopify, GitHub and Jira"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
