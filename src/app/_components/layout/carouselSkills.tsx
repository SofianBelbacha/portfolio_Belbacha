"use client";

import React, { useState, JSX } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/_components/ui/card";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/app/_components/ui/tooltip";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from "next-intl";

/* ------------------------------------------------------------
   SKILLS LIST
------------------------------------------------------------- */

const skills: Record<string, Array<any>> = {
  frontend: [
    {
      id: "javascript",
      value: 75,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    },
    {
      id: "typescript",
      value: 60,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      link: "https://www.typescriptlang.org/docs",
    },
    {
      id: "react",
      value: 60,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      link: "https://fr.react.dev/learn",
    },
    {
      id: "nextjs",
      value: 55,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      link: "https://nextjs.org/docs",
    },
    {
      id: "angular",
      value: 60,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
      link: "https://angular.io/docs",
    },
  ],

  backend: [
    {
      id: "php",
      value: 80,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      link: "https://www.php.net/docs.php",
    },
    {
      id: "symfony",
      value: 50,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
      link: "https://symfony.com/doc/current/index.html",
    },
    {
      id: "csharp",
      value: 90,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      link: "https://learn.microsoft.com/fr-fr/dotnet/csharp/",
    },
    {
      id: "aspnet",
      value: 65,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      link: "https://learn.microsoft.com/fr-fr/aspnet/core/",
    },
  ],

  devops: [
    {
      id: "docker",
      value: 70,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      link: "https://docs.docker.com/",
    },
    {
      id: "git",
      value: 85,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      link: "https://git-scm.com/doc",
    },
    {
      id: "linux",
      value: 65,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      link: "https://www.gnu.org/",
    },
    {
      id: "gitlab",
      value: 45,
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      link: "https://docs.gitlab.com/ee/ci/",
    },
  ],
};


export default function CarouselSkills(): JSX.Element {
  const t = useTranslations("skills.hardskills");
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [activeSkill, setActiveSkill] = useState(skills.frontend[0]);

  /* Pagination verticale – 3 par 3 */
  const pageSize = 3;
  const [pageIndex, setPageIndex] = useState(0);

  const totalPages = Math.ceil(skills[activeCategory].length / pageSize);

  const visibleItems = skills[activeCategory].slice(
    pageIndex * pageSize,
    pageIndex * pageSize + pageSize
  );

  const categories = ["frontend", "backend", "devops"];

  return (
    <div className="w-full lg:max-w-[1130px] mx-auto px-4">
      <div className="max-w-[560px]">
        <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent gradient-title">
          {t("title")}
        </h2>
      </div>
      <div className="w-full max-w-[1150px] mx-auto py-20 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center gap-10 relative w-full">
          <div className="flex gap-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <Button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSkill(skills[cat][0]);
                    setPageIndex(0);
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all
                    ${isActive ? `bg-black text-white dark:bg-white dark:text-black` : `
                          bg-black/5 text-black border border-black/20 hover:bg-black/10
                          dark:bg-white/5 dark:text-white
                          dark:border-white/15 dark:hover:bg-white/10`
                    }
                  `}
                >
                  {t(`categories.${cat}`)}
                </Button>
              );
            })}
          </div>
          <div className="gap-6 mt-6 lg:pt-6">
            <div className="relative min-w-[340.8px] max-w-[340.8px] flex flex-col items-center">
              <button onClick={() => pageIndex === 0 ? setPageIndex((p) => Math.min(totalPages - 1, p + 1)) : setPageIndex((p) => Math.max(0, p - 1)) }
                disabled={totalPages <= 1}
                className={`lg:absolute -left-16 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-all cursor-pointer`}
              >
                {totalPages === 1 ? (
                  <ChevronDown size={22} className="opacity-40" />
                ) : pageIndex === 0 ? (
                  <ChevronDown size={22} />
                ) : (
                  <ChevronUp size={22} />
                )}
              </button>
              <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
                {visibleItems.map((skill) => {
                  const isActive = activeSkill.id === skill.id;

                  return (
                    <TooltipProvider key={skill.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setActiveSkill(skill)}
                            className={`w-fit flex flex-col items-center gap-2 p-4 rounded-xl transition-all border cursor-pointer
                              ${isActive ? "dark:border-white/30 dark:bg-white/10 dark:shadow-xl" : "dark:border-white/5 dark:bg-black/40 dark:hover:bg-white/5"}
                              ${isActive ? "border-black/30 bg-black/5 shadow-md" : "border-black/10 bg-white hover:bg-black/5"}
              `             }
                          >
                          <Image src={skill.img} alt={skill.id} width={64} height={64} 
                            className={`transition-opacity ${isActive ? "opacity-100" : "opacity-60 dark:opacity-40"}`}
                            />
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>{skill.id}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          key={activeSkill.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28 }}
        >
          <Card className="rounded-2xl backdrop-blur-xl pt-6 lg:p-6 shadow-xl dark:bg-[#0a0a0a]/80 dark:border dark:border-white/10 bg-white border border-black/10">
            <CardHeader className="flex gap-4 items-center">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={activeSkill.img}
                  width={48}
                  height={48}
                  alt={t(`items.${activeSkill.id}.title`)}
                />
              </div>

              <div>
                <CardTitle className="text-3xl font-semibold text-black dark:text-white">
                  {t(`items.${activeSkill.id}.title`)}
                </CardTitle>

                <Badge
                  className="mt-2 text-xs dark:bg-white/5 dark:border-white/20 dark:text-white bg-black/5 border-black/20 text-black">
                  {t(`levels.${activeSkill.id}`)}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 mt-4">
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t(`items.${activeSkill.id}.description`)}
              </p>

              {/* Progress */}
              <div>
                <div className="flex justify-between text-sm mb-1 text-zinc-500 dark:text-zinc-500">
                  <span>{t("labels.level")}</span>
                  <span>{activeSkill.value}%</span>
                </div>

                <div className="h-3 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                  <div
                    className="h-full bg-gradient-to-r from-zinc-500 to-zinc-700 dark:from-zinc-300 dark:to-zinc-500"
                    style={{ width: `${activeSkill.value}%` }}
                  />
                </div>
              </div>

              <Separator className="bg-black/10 dark:bg-white/10" />

              <div className="flex w-full">
                <Button onClick={() => router.push(`/portfolio?tag=${encodeURIComponent(t(`items.${activeSkill.id}.title`))}`)}
                  className="ml-auto cursor-pointer font-semibold dark:bg-white dark:text-black dark:hover:bg-zinc-200 bg-black text-white hover:bg-zinc-800">
                  {t("actions.viewProjects")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>

  );
}
