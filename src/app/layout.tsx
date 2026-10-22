import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-saans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-saansmono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serrif",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HELIOS Customer Operations | Rwandan Outsourcing Rigor",
  description:
    "Flexible, high-touch customer support and back-office operations from Kigali, Rwanda. Vetted dedicated specialists, transparent pricing, and rigorous SLA governance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}>
      <body className="min-h-screen bg-[#faf9f6] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
