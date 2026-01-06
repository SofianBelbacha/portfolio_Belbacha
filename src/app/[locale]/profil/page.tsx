export const dynamic = "force-static";

import { Metadata } from "next";
import ProfileSection from "../../_components/layout/profileSection";
import TitlePageSection from "../../_components/layout/titlePageSection";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Profil | Sofian Belbacha - Développeur Full Stack",
  description: "Développeur passionné, je vous invite à découvrir mon parcours, mon expérience et les technologies que j’ai apprises et maîtrisées.",
  keywords: ["Sofian Belbacha", "profil", "développeur", "parcours", "compétences", "JavaScript", "React", "Next.js"],
  authors: [{ name: "Sofian Belbacha", url: "https://sofianbelbacha.vercel.app/fr" }],
  creator: "Sofian Belbacha",
  openGraph: {
    title: "Profil | Sofian Belbacha - Développeur Full Stack",
    description: "Développeur passionné, je vous invite à découvrir mon parcours, mon expérience et les technologies que j’ai apprises et maîtrisées.",
    url: "https://sofianbelbacha.vercel.app/fr/profil",
    siteName: "SOFIAN",
    images: [
      {
        url: "https://i.postimg.cc/g2GzjDXf/og-portfolio.png",
        alt: "Aperçu de mon portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://sofianbelbacha.vercel.app/fr"),
};

export default function Profil() {
  const t = useTranslations('profile.page');

  return (
    <section className="relative w-full py-24 px-6 flex flex-col items-center gap-16">
      <TitlePageSection
        title={t('title')}
        description={t.rich("description", {
          accent: (chunks) => (
            <span className="subtitle-accent">{chunks}</span>
          ),
        })}
      />
      <ProfileSection />
    </section>
  );
}

