// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google"; // Import de la police
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { AnalyticsProvider } from '@/app/_components/providers/AnalyticsProvider';
import { Toaster } from "@/app/_components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import { ThemeProvider } from "next-themes";
import { PersonJsonLd } from "./_components/seo/JsonLd";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Définir les poids
  variable: "--font-inter", // Définir une variable CSS pour la police
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sofian Belbacha - Développeur Full Stack & DevOps",
    template: "%s | Sofian Belbacha - Développeur Full Stack & DevOps"
  },
  description: "Portfolio de Sofian Belbacha, développeur full stack passionné, spécialisé en React, Next.js, ASP.NET Core et pratiques DevOps.",
  keywords: ["Sofian Belbacha", "développeur full stack", "React", "Next.js", "ASP.NET", "DevOps", "portfolio développeur"],
  authors: [{ name: "Sofian Belbacha", url: "https://sofianbelbacha.vercel.app" }],
  creator: "Sofian Belbacha",
  metadataBase: new URL("https://sofianbelbacha.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      'fr': '/fr',
      'en': '/en',
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sofianbelbacha.vercel.app",
    siteName: "Sofian Belbacha Portfolio",
    title: "Sofian Belbacha - Développeur Full Stack & DevOps",
    description: "Portfolio de Sofian Belbacha, développeur full stack passionné",
    images: [
      {
        url: "https://i.postimg.cc/g2GzjDXf/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Sofian Belbacha Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofian Belbacha - Développeur Full Stack & DevOps",
    description: "Portfolio de Sofian Belbacha, développeur full stack passionné",
    images: ["https://i.postimg.cc/g2GzjDXf/og-portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html suppressHydrationWarning className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <PersonJsonLd />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        {/* Google Tag (gtag.js) - Chargé uniquement en production */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <Script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
            <meta name="google-site-verification" content="GJhiqE5sy7GitDAscpGr9OA8LPC68RSEzcXLP0WEldE" />
          </>
        )}
      </head>
      <body className="relative overflow-x-hidden">
        <div className="fixed inset-0 -z-20 bg-[rgb(248,248,248)] dark:bg-black" />

        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.085),transparent_70%)]" />
          <div className="absolute inset-0
            bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.045),transparent_60%)]" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider />
          <main>{children}</main>
          <Toaster richColors />
          <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-[100px] z-10 bg-gradient-to-b from-[rgba(5,5,5,0)] to-black opacity-100">
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
