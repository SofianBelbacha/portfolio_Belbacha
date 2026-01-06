export const dynamic = 'force-static';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/app/_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"
import { Progress } from "@/app/_components/ui/progress"
import { ShieldCheck, ScanLine, Lock, Settings2 } from "lucide-react"
import CarouselSkills from "../../_components/layout/carouselSkills";
import { Metadata } from 'next';
import AnimatedSkills from "../../_components/layout/AnimatedSkills";
import CyberSkills from "../../_components/layout/CyberSkills";
import Roadmap from "../../_components/layout/roadmap";
import TitlePageSection from "../../_components/layout/titlePageSection";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Compétences | Sofian Belbacha - Développeur Full Stack",
  description: "Découvrez mes compétences techniques : React, Next.js, ASP.NET, JavaScript, HTML, UI/UX et bien plus.",
  keywords: ["Sofian Belbacha", "profil", "développeur", "parcours", "compétences", "JavaScript", "React", "Next.js"],
  authors: [{ name: "Sofian Belbacha", url: "https://sofianbelbacha.vercel.app/fr" }],
  creator: "Sofian Belbacha",
  openGraph: {
    title: "Compétences | Sofian Belbacha - Développeur Full Stack",
    description: "Découvrez mes compétences techniques : React, Next.js, ASP.NET, JavaScript, HTML, UI/UX et bien plus.",
    url: "https://sofianbelbacha.vercel.app/fr/skills",
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


export default function Skills() {
  const t = useTranslations("skills");

  const cyberIcons: Record<string, React.ElementType> = {
    shield: ShieldCheck,
    lock: Lock,
    scan: ScanLine,
    settings: Settings2
  };

  const cyberSkills = t.raw("cyber.items") as {
    icon: string;
    title: string;
    level: string;
    progress: number;
    points: string[];
  }[];

  return (
    <section className="other-items-sections flex flex-col items-center justify-center gap-16 py-24 w-full relative overflow-visible">
      <TitlePageSection
        title={t("page.title")}
        description={t.rich("page.description", {
          accent: (chunks) => (
            <span className="subtitle-accent">{chunks}</span>
          ),
        })}

      />
      <CarouselSkills />
      <AnimatedSkills />
      <div className="max-w-[1130px] mx-auto py-24 relative overflow-hidden">
        <div className="absolute top-[-150px] left-[50%] transform -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent mb-16 gradient-title">
            {t("cyber.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {cyberSkills.map((skill) => {
              const Icon = cyberIcons[skill.icon];

              return (
                <Card
                  key={skill.title}
                  style={{ background: "none" }}
                  className="transition-all duration-300 rounded-2xl dark:border dark:border-zinc-700 border border-black/10 bg-white"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-black dark:text-white">
                      <Icon />
                      {skill.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <ul className="list-disc list-outside space-y-1">
                      {skill.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <Progress
                      value={skill.progress}
                      className="h-2 dark:bg-zinc-900 dark:[&>div]:from-zinc-300 dark:[&>div]:to-zinc-500 bg-zinc-200 [&>div]:bg-gradient-to-r [&>div]:from-zinc-600 [&>div]:to-zinc-800"
                    />

                    <Badge
                      variant="outline"
                      className="text-xs dark:text-zinc-300 dark:border-zinc-600 text-zinc-700 border-black/20"
                    >
                      {t("cyber.levelLabel", { level: skill.level })}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
            <CyberSkills />
          </div>
        </div>
      </div>
      <Roadmap />
    </section>

  );
}

