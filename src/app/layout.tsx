import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SoKind UX | Empathy-first UX Mentoring",
    template: "%s | SoKind UX",
  },
  description: "SoKind UX provides empathy-first UX mentoring and consulting for new designers. Explore our projects, resources, and design expertise.",
  authors: [{ name: "Adriana So" }],
  keywords: ["UX design", "UX mentoring", "empathy-first design", "UX consulting", "Nielsen Norman", "UX resources", "SoKind UX"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        {/* Centralized Main Navigation */}
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
