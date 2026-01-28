import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sapphire Telecom Consulting",
  description: "Modern solutions for telecom operators, MVNOs, and enterprises.",
  icons: {
    icon: "/logo.png",
  },
};

import { GlobalTouchEffect } from "@/components/ui/GlobalTouchEffect";

import { BackToTop } from "@/components/ui/BackToTop";
import { CookieConsent } from "@/components/ui/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <GlobalTouchEffect />
        <CookieConsent />
        <BackToTop />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
