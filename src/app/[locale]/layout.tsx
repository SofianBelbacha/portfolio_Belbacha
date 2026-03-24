// app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LocaleClientLayout from './localeClientLayout';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";


export const generateStaticParams = () =>
  routing.locales.map(locale => ({ locale }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isFR = locale === "fr";

  const baseUrl = "https://sofianbelbacha.vercel.app";

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/fr`,
      },
    },

    title: {
      default: isFR
        ? "Sofian Belbacha - Développeur Full Stack & DevOps"
        : "Sofian Belbacha - Full Stack Developer & DevOps",
      template: isFR
        ? "%s | Sofian Belbacha - Développeur Full Stack & DevOps"
        : "%s | Sofian Belbacha - Full Stack Developer & DevOps",
    },

    description: isFR
      ? "Développeur full stack passionné, spécialisé en Angular, Next.js et ASP.NET Core. En parallèle, je me forme aux pratiques DevOps : Docker, CI/CD et déploiement cloud. Découvrez mes projets et mon parcours."
      : "Passionate full stack developer specializing in Angular, Next.js and ASP.NET Core. Currently expanding into DevOps practices: Docker, CI/CD and cloud deployment. Explore my projects and background.",

    keywords: isFR
      ? ["Sofian Belbacha", "développeur full stack", "React", "Next.js", "ASP.NET", "DevOps", "portfolio développeur", "Angular", "Docker", "CI/CD"]
      : ["Sofian Belbacha", "full stack developer", "React", "Next.js", "ASP.NET", "DevOps", "portfolio developer", "Angular", "Docker", "CI/CD"],

    openGraph: {
      locale: isFR ? "fr_FR" : "en_US",
      url: `${baseUrl}/${locale}`,
      title: isFR ? "Sofian Belbacha - Développeur Full Stack & DevOps" : "Sofian Belbacha - Full Stack Developer & DevOps",
      description: isFR
        ? "Développeur full stack passionné, spécialisé en Angular, Next.js et ASP.NET Core. En parallèle, je me forme aux pratiques DevOps : Docker, CI/CD et déploiement cloud. Découvrez mes projets et mon parcours."
        : "Passionate full stack developer specializing in Angular, Next.js and ASP.NET Core. Currently expanding into DevOps practices: Docker, CI/CD and cloud deployment. Explore my projects and background.",

    },

    twitter: {
      title: isFR
        ? "Sofian Belbacha - Développeur Full Stack"
        : "Sofian Belbacha - Full Stack Developer",
      description: isFR
        ? "Développeur full stack passionné, spécialisé en Angular, Next.js et ASP.NET Core. En parallèle, je me forme aux pratiques DevOps : Docker, CI/CD et déploiement cloud. Découvrez mes projets et mon parcours."
        : "Passionate full stack developer specializing in Angular, Next.js and ASP.NET Core. Currently expanding into DevOps practices: Docker, CI/CD and cloud deployment. Explore my projects and background.",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Définir la locale pour le rendu statique
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <LocaleClientLayout locale={locale} messages={messages}>
      {children}
    </LocaleClientLayout>
  );
}
