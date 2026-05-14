import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/ui/GrainOverlay";
import Cursor from "@/components/ui/Cursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DepthTour — Immersive 3D Space Digitization",
  description:
    "We turn physical spaces into digital experiences. Gaussian Splatting, drone mapping, and interactive 3D tours for luxury real estate, architecture, and hospitality.",
  openGraph: {
    title: "DepthTour — We Digitize Space.",
    description:
      "Immersive 3D environments for architecture, luxury real estate, and future-focused brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <Cursor />
          <GrainOverlay />
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
