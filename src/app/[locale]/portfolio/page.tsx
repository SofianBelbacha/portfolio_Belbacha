// app/[locale]/portfolio/page.tsx
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { Project } from "@/types/project";
import { PortfolioClient } from "./PortfolioClient";
import { Metadata } from 'next';
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Utilisez getTranslations pour des metadata traduites
  const t = await getTranslations({ locale, namespace: 'common.metadata.portfolio' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      url: `/${locale}/portfolio`,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    },
  };
}

export const dynamic = 'force-dynamic'; // Changé en force-dynamic pour le développement
export const revalidate = 86400;

export default async function PortfolioPage({
  params
}: {
  params: Promise<{ locale: 'fr' | 'en' }>
}) {
  // Attendre la résolution de params
  const { locale } = await params;

  const snapshot = await getDocs(collection(db, "projet"));
  const projects = snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      ...data,
      id: doc.id,
      createdAt: data.createdAt?.toMillis?.() ?? null,
    };
  }) as unknown as Project[];

  return <PortfolioClient projects={projects} locale={locale} />;
}

