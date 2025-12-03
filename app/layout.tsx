import type { Metadata } from "next";
import "./globals.css";
import SmoothScroller from "@/layouts/SmoothScroller";
import { hovesPro, interTight } from "@/fonts";


export const metadata: Metadata = {
  title: "Aqua Excel",
  description: "India’s first of its kind, engineered for zero leakage and zero breakage. Built with extra-strong threads, designed for multi-purpose use, and developed using climate-friendly materials. Install it once and enjoy a true fit-and-forget experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hovesPro.variable} ${interTight.variable} antialiased`}
      >
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
