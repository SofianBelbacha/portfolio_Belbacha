export const dynamic = "force-static";

import { Metadata } from "next";
import ProfileSection from "../../_components/layout/profileSection";
import TitlePageSection from "../../_components/layout/titlePageSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'common.metadata.profile' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      url: `/${locale}/profil`,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    },
  };
}

export default function Profil() {
  return (
    <section className="relative w-full py-24 px-6 flex flex-col items-center gap-16">
      <TitlePageSection translationKey="profile.page" />
      <ProfileSection />
    </section>
  );
}

