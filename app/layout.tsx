import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "DepthTour — Photoreal 3D Property Tours",
  description:
    "DepthTour turns a phone walkthrough into a browser-based 3D tour your buyers can explore on any device. No app. No headset. Just a link.",
  openGraph: {
    title: "DepthTour — Photoreal 3D Property Tours",
    description:
      "Walk through any property before you're there. Gaussian Splatting 3D tours for real estate agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
