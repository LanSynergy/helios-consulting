"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ChallengesSection } from "@/components/ChallengesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyHelios } from "@/components/WhyHelios";
import { ProcessSection } from "@/components/ProcessSection";
import { RwandaHub } from "@/components/RwandaHub";
import { SecuritySection } from "@/components/SecuritySection";
import { FaqSection } from "@/components/FaqSection";
import { ContactAndScheduleSection } from "@/components/ContactAndScheduleSection";
import { LegalPoliciesSection } from "@/components/LegalPoliciesSection";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f6]">
      {/* 1. Header Navigation */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* 3. Operational Highlights Strip */}
        <TrustStrip />

        {/* 4. Challenges & Solution Diagnostic Matrix */}
        <ChallengesSection onOpenBooking={() => setBookingOpen(true)} />

        {/* 5. Core Customer Operations Services */}
        <ServicesSection onOpenBooking={() => setBookingOpen(true)} />

        {/* 6. About HELIOS & 8 Core Operational Principles */}
        <AboutSection onOpenBooking={() => setBookingOpen(true)} />

        {/* 7. Why HELIOS & Operational Principles */}
        <WhyHelios onOpenBooking={() => setBookingOpen(true)} />

        {/* 8. 8-Step Delivery Process */}
        <ProcessSection onOpenBooking={() => setBookingOpen(true)} />

        {/* 9. Operating Base in Kigali, Rwanda & Timezone Telemetry */}
        <RwandaHub onOpenBooking={() => setBookingOpen(true)} />

        {/* 10. Security, Data Protection & DPA Governance */}
        <SecuritySection onOpenBooking={() => setBookingOpen(true)} />

        {/* 11. Frequently Asked Questions */}
        <FaqSection onOpenBooking={() => setBookingOpen(true)} />

        {/* 12. Dedicated Scheduling & Business Inquiry Hub */}
        <ContactAndScheduleSection />

        {/* 13. Legal Outlines & Transparency */}
        <LegalPoliciesSection />

        {/* 14. Pre-Footer Full-Bleed Dot-Grid CTA */}
        <FooterCTA onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* 15. Directory Footer */}
      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Dedicated First-Party Booking & Consultation Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
