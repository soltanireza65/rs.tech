import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimatedGrid from "@/components/AnimatedGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Software Engineer Portfolio',
  description: 'Backend Developer specializing in Node.js, NestJS, and Cloud Infrastructure',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased prevent-select`}
      >
        <div className="relative min-h-screen bg-gradient-dark text-zinc-100 font-mono overflow-hidden">
          <AnimatedGrid />
          <CursorEffect />
          <div className="relative z-10">
            {/* Header */}
            <Header />

            {/* Main Content */}
            {children}


            {/* Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
