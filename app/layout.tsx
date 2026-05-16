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
  title: "DepthTour — Gaussian Splatting 3D Property Tours",
  description:
    "DepthTour turns a phone walkthrough into a photoreal Gaussian Splatting tour your buyers can explore in any browser. No app, no headset, no Matterport subscription.",
  openGraph: {
    title: "DepthTour — Gaussian Splatting 3D Property Tours",
    description:
      "DepthTour turns a phone walkthrough into a photoreal Gaussian Splatting tour your buyers can explore in any browser. No app, no headset, no Matterport subscription.",
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
