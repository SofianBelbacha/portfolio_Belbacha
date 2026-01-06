// app/portfolio/page.tsx
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { Project } from "@/types/project";
import { PortfolioClient } from "./PortfolioClient";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projets | Sofian Belbacha - Développeur Full Stack",
  description: "Découvrez les projets que j'au réalisés : applications web, sites modernes, intégration responsive et bien plus.",
  keywords: ["Sofian Belbacha", "portfolio", "développeur web", "frontend", "backend", "Next.js", "React", "projets web"],
  authors: [{ name: "Sofian Belbacha", url: "https://sofianbelbacha.vercel.app/fr" }],
  creator: "Sofian Belbacha",
  openGraph: {
    title: "Projets | Sofian Belbacha - Développeur Full Stack",
    description: "Découvrez les projets que j'au réalisés : applications web, sites modernes, intégration responsive et bien plus.",
    url: "https://sofianbelbacha.vercel.app/fr/portfolio",
    siteName: "SOFIAN",
    images: [
      {
        url: "https://i.postimg.cc/g2GzjDXf/og-portfolio.png",
        alt: "Aperçu du portfolio de Sofian Belbacha",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://sofianbelbacha.vercel.app/fr"),
};

export const dynamic = 'force-static'; // ISR
export const revalidate = 86400; // toutes les 60s

export default async function PortfolioPage({
  params
}: {
  params: { locale: 'fr' | 'en' }
}) {
  const snapshot = await getDocs(collection(db, "projet"));
  const projects = snapshot.docs.map((doc) => {
  const data = doc.data();

    return {
      ...data,
      id: doc.id,
      createdAt: data.createdAt?.toMillis?.() ?? null,
    };
  }) as unknown as Project[];

  return <PortfolioClient projects={projects} locale={params.locale} />;
}
