import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BestzDealAi - AI-Powered Reverse Marketplace",
  description: "Post what you want, get the best deals. AI-powered reverse marketplace where sellers compete for your business. Free for buyers, smart for sellers.",
  keywords: "reverse marketplace, AI deals, best prices, local sellers, price comparison, smart shopping",
  authors: [{ name: "BestzDealAi Team" }],
  creator: "BestzDealAi",
  publisher: "BestzDealAi",
  openGraph: {
    title: "BestzDealAi - You post it. They deal it.",
    description: "Revolutionary AI-powered reverse marketplace where buyers post needs and sellers compete with best offers.",
    url: "https://bestzdealai.com",
    siteName: "BestzDealAi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestzDealAi - AI-Powered Reverse Marketplace",
    description: "Post what you want, get the best deals. Sellers compete for your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
