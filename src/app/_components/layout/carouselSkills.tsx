"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/app/_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"
import { Button } from "@/app/_components/ui/button"
import { Progress } from "@/app/_components/ui/progress"
import { Separator } from "@/app/_components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/_components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/_components/ui/popover"
import { MoreVertical } from "lucide-react"
import Image from "next/image";
import { useState, useRef } from "react";
import clsx from "clsx";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/app/_components/ui/carousel"
import { ScrollHint } from "@/app/_components/ui/scroll-hint"
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function CarouselSkills() {
  const router = useRouter();
  const [activeBlock, setActiveBlock] = useState("php")
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="max-w-[1130px] mx-auto py-20 px-4">
      <div className="max-w-[500px] flex flex-col gap-[20px] mb-7">
        <h2 className="text-left text-4xl text-[30px] font-bold tracking-tight mb-16">Des bases solides pour construire des projets web robustes</h2>
      </div>
      <Carousel setApi={setApi} className="max-w-[600px] mx-auto">
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem className="select-none">
            <TooltipProvider>
              <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        alt="HTML"
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <CardTitle className="text-2xl font-semibold">HTML</CardTitle>
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Avancé</Badge>
                      </div>
                    </div>

                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Maîtrise du langage de structure d'une page web. Je suis capable de concevoir des documents bien organisés
                    et accessibles grâce à une utilisation précise des balises HTML.
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Niveau</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-3 bg-zinc-800" />
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div className="flex justify-between items-center pt-2">
                    <Link target="_blank" href="https://developer.mozilla.org/fr/docs/Web/HTML">
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                        Docummentation
                      </Button>
                    </Link>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                          onClick={() => router.push(`/Portfolio?tag=HTML5`)}>
                          Voir plus
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-zinc-900 text-white text-xs">
                        Consulter les projets associés
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          </CarouselItem>
          <CarouselItem className="select-none">
            <TooltipProvider>
              <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        alt="CSS"
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <CardTitle className="text-2xl font-semibold">CSS</CardTitle>
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Opérationnel</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Compétences en mise en forme et design. Je sais styliser les pages web avec des
                    feuilles de style en cascade (CSS) pour un rendu esthétique et responsive.
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Niveau</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-3 bg-zinc-800" />
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div className="flex justify-between items-center pt-2">
                    <Link target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS">
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                        Docummentation
                      </Button>
                    </Link>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                          onClick={() => router.push(`/Portfolio?tag=CSS3`)}>
                          Voir plus
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-zinc-900 text-white text-xs">
                        Consulter les projets associés
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          </CarouselItem>
          <CarouselItem className="select-none">
            <TooltipProvider>
              <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/512/1034/1034112.png"
                        alt="HTTP"
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <CardTitle className="text-2xl font-semibold">HTTP</CardTitle>
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Avancé</Badge>
                      </div>
                    </div>

                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Je sais héberger un site web, le rendre accessible au public et comprendre les
                    bases des noms de domaine, de l'hébergement et du déploiement.
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Niveau</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-3 bg-zinc-800" />
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div className="flex justify-between items-center pt-2">
                    <Link target="_blank" href="https://developer.mozilla.org/fr/docs/Web/HTTP">
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                        Docummentation
                      </Button>
                    </Link>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-100">
                          Voir plus
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-zinc-900 text-white text-xs">
                        Consulter les projets associés
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          </CarouselItem>
          <CarouselItem className="select-none">
            <TooltipProvider>
              <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                        alt="Algorithmique"
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <CardTitle className="text-2xl font-semibold">Algorithmique</CardTitle>
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Opérationnel</Badge>
                      </div>
                    </div>

                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Solide compréhension des fondamentaux de l’algorithmique (acquis à l'aide des bases python), indispensable pour
                    aborder n’importe quel langage de programmation de manière logique et efficace.
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Niveau</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-3 bg-zinc-800" />
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div className="flex justify-between items-center pt-2">
                    <Link target="_blank" href="https://docs.python.org/fr/3.13/">
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                        Docummentation
                      </Button>
                    </Link>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-100">
                          Voir plus
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-zinc-900 text-white text-xs">
                        Consulter les projets associés
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <div className="text-center py-16  text-sm uppercase relative tree-category">
        Orientation : Choix du langage
        <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">stacks
          maîtrisés
        </strong>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-around items-start gap-10 tree-split">
        <div className="w-full lg:w-1/2">
          <div className="text-center  text-sm uppercase py-16 relative tree-category">
            Partie <strong className="block text-white text-4xl font-semibold tracking-widest">Frontend</strong>
          </div>
          <Carousel setApi={setApi} orientation="vertical" className="max-w-[600px] mx-auto">
            <CarouselContent className="max-h-[452px]" ref={contentRef}>
              <CarouselItem className="select-none">
                <TooltipProvider>
                  <Card className="h-full relative rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                    <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                      <div className="flex justify-between items-start w-full">
                        <div className="flex items-center gap-4">
                          <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <div>
                            <CardTitle className="text-2xl font-semibold">JavaScript</CardTitle>
                            <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Opérationnel</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 pt-2 space-y-6">
                      <p className="text-zinc-300 text-base leading-relaxed">
                        Maîtrise de JavaScript pour créer des interfaces dynamiques et interactives, aussi bien côté navigateur que côté serveur (NodeJS, Deno).
                      </p>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-zinc-400">
                          <span>Niveau</span>
                          <span>75%</span>
                        </div>
                        <Progress
                          value={75}
                          className="h-3 bg-zinc-800"

                        />
                      </div>

                      <Separator className="bg-zinc-800" />

                      <div className="flex justify-between items-center pt-2">
                        <Link target="_blank" href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                            Docummentation
                          </Button>
                        </Link>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                              onClick={() => router.push(`/Portfolio?tag=JavaScript`)}>
                              Voir plus
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="bg-zinc-900 text-white text-xs">
                            Consulter les projets associés
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipProvider>
              </CarouselItem>
              <CarouselItem className="select-none">
                <TooltipProvider>
                  <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                    <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                      <div className="flex justify-between items-start w-full">
                        <div className="flex items-center gap-4">
                          <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                            alt="TypeScript"
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <div>
                            <CardTitle className="text-2xl font-semibold">TypeScript</CardTitle>
                            <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Opérationnel</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 pt-2 space-y-6">
                      <p className="text-zinc-300 text-base leading-relaxed">
                        Utilisation de TypeScript dans des projets frontend avec React ou Next.js
                        pour renforcer la fiabilité et la lisibilité et prévenir les erreurs à l’exécution du code. </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-zinc-400">
                          <span>Niveau</span>
                          <span>60%</span>
                        </div>
                        <Progress
                          value={60}
                          className="h-3 bg-zinc-800"

                        />
                      </div>

                      <Separator className="bg-zinc-800" />

                      <div className="flex justify-between items-center pt-2">
                        <Link target="_blank" href="https://www.typescriptlang.org/docs">
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                            Docummentation
                          </Button>
                        </Link>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                              onClick={() => router.push(`/Portfolio?tag=Git`)}>
                              Voir plus
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="bg-zinc-900 text-white text-xs">
                            Consulter les projets associés
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipProvider>
              </CarouselItem>
              <CarouselItem className="select-none">
                <TooltipProvider>
                  <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                    <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                      <div className="flex justify-between items-start w-full">
                        <div className="flex items-center gap-4">
                          <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <div>
                            <CardTitle className="text-2xl font-semibold">Git</CardTitle>
                            <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Avancé</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 pt-2 space-y-6">
                      <p className="text-zinc-300 text-base leading-relaxed">
                        Utilisation de l'outil de versionning Git pour la gestion des versions de projet, travail collaboratif et gestion d’historique des modifications.</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-zinc-400">
                          <span>Niveau</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-3 bg-zinc-800" />
                      </div>

                      <Separator className="bg-zinc-800" />

                      <div className="flex justify-between items-center pt-2">
                        <Link target="_blank" href="https://git-scm.com/doc">
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                            Docummentation
                          </Button>
                        </Link>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                              onClick={() => router.push(`/Portfolio?tag=Git`)}>
                              Voir plus
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="bg-zinc-900 text-white text-xs">
                            Consulter les projets associés
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipProvider>
              </CarouselItem>
            </CarouselContent>
            <ScrollHint scrollRef={contentRef} />
          </Carousel>
          <div className="text-center py-16  text-sm uppercase relative tree-category">
            Spécialisation <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">Framework</strong>
          </div>
          <Carousel setApi={setApi} orientation="vertical" className="max-w-[600px] mx-auto">
            <CarouselContent className="max-h-[452px]" ref={contentRef}>
              <CarouselItem className="select-none">
                <TooltipProvider>
                  <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                    <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                      <div className="flex justify-between items-start w-full">
                        <div className="flex items-center gap-4">
                          <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <div>
                            <CardTitle className="text-2xl font-semibold">React</CardTitle>
                            <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Opérationnel</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 pt-2 space-y-6">
                      <p className="text-zinc-300 text-base leading-relaxed">
                        J’utilise React pour concevoir des interfaces interactive, dynamique et modulaire
                        en utilisant des composants, les hooks de base comme useState et useEffect,
                        et l’intégration des APIs
                      </p>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-zinc-400">
                          <span>Niveau</span>
                          <span>60%</span>
                        </div>
                        <Progress
                          value={60}
                          className="h-3 bg-zinc-800"

                        />
                      </div>

                      <Separator className="bg-zinc-800" />

                      <div className="flex justify-between items-center pt-2">
                        <Link target="_blank" href="https://fr.react.dev/learn">
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                            Docummentation
                          </Button>
                        </Link>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                              onClick={() => router.push(`/Portfolio?tag=React`)}>
                              Voir plus
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="bg-zinc-900 text-white text-xs">
                            Consulter les projets associés
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipProvider>
              </CarouselItem>
              <CarouselItem className="select-none">
                <TooltipProvider>
                  <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                    <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                      <div className="flex justify-between items-start w-full">
                        <div className="flex items-center gap-4">
                          <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            alt="Next"
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <div>
                            <CardTitle className="text-2xl font-semibold">Next Js</CardTitle>
                            <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Opérationnel</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 pt-2 space-y-6">
                      <p className="text-zinc-300 text-base leading-relaxed">
                        J’ai commencé à travailler avec Next.js pour améliorer mes projets React.
                        J’apprends à gérer les pages, les routes dynamiques et à tirer parti du rendu statique.
                      </p>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-zinc-400">
                          <span>Niveau</span>
                          <span>60%</span>
                        </div>
                        <Progress
                          value={60}
                          className="h-3 bg-zinc-800"

                        />
                      </div>
                      <Separator className="bg-zinc-800" />
                      <div className="flex justify-between items-center pt-2">
                        <Link target="_blank" href="https://nextjs.org/docs">
                          <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                            Docummentation
                          </Button>
                        </Link>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                              onClick={() => router.push(`/Portfolio?tag=Next.Js`)}>
                              Voir plus
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="bg-zinc-900 text-white text-xs">
                            Consulter les projets associés
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipProvider>
              </CarouselItem>
            </CarouselContent>
            <ScrollHint scrollRef={contentRef} />
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="tree-split-backend">
            <div className="text-center  text-sm uppercase py-16 relative tree-category">
              Partie <strong className="block text-white text-4xl font-semibold tracking-widest">BackEnd</strong>
            </div>
          </div>
          <div className="relative flex justify-between max-w-[330px] mx-auto w-full gap-28 ">
            <button data-target="php" onClick={() => setActiveBlock("php")} className="flex flex-col items-center focus:outline-none">
              <div className="w-[3px] h-24 bg-white opacity-30"></div>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width={80} height={80} className="transition-transform duration-300 hover:scale-110" />
            </button>

            <button data-target="aspnet" onClick={() => setActiveBlock("aspnet")} className="flex flex-col items-center focus:outline-none">
              <div className="w-[3px] h-24 bg-white opacity-30"></div>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" width={80} height={80} className="transition-transform duration-300 hover:scale-110" />
            </button>
          </div>
          <div id="php" className={clsx("backend-block", { hidden: activeBlock !== "php" })}>
            <div className="w-[3px] h-15 bg-[#FFFFFF] mr-97 opacity-40 mx-auto"></div>
            <Carousel setApi={setApi} orientation="vertical" className="max-w-[600px] mx-auto">
              <CarouselContent className="max-h-[452px]" ref={contentRef}>
                <CarouselItem className="select-none">
                  <TooltipProvider>
                    <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                      <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                        <div className="flex justify-between items-start w-full">
                          <div className="flex items-center gap-4">
                            <Image
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"
                              alt="SQL"
                              width={40}
                              height={40}
                              className="rounded-md"
                            />
                            <div>
                              <CardTitle className="text-2xl font-semibold">SQL</CardTitle>
                              <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Avancé</Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 pt-2 space-y-6">
                        <p className="text-zinc-300 text-base leading-relaxed">
                          Je maîtrise SQL pour concevoir et interroger des BDD relationnelles.
                          Je l’utilise notamment pour gérer la persistance des données avec des outils comme MySQL ou PostgreSQL.
                        </p>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-zinc-400">
                            <span>Niveau</span>
                            <span>85%</span>
                          </div>
                          <Progress
                            value={85}
                            className="h-3 bg-zinc-800"

                          />
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div className="flex justify-between items-center pt-2">
                          <Link target="_blank" href="https://sql.sh">
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                              Docummentation
                            </Button>
                          </Link>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                                onClick={() => router.push(`/Portfolio?tag=SQL`)}>
                                Voir plus
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-zinc-900 text-white text-xs">
                              Consulter les projets associés
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipProvider>
                </CarouselItem>
                <CarouselItem className="select-none">
                  <TooltipProvider>
                    <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                      <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                        <div className="flex justify-between items-start w-full">
                          <div className="flex items-center gap-4">
                            <Image
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                              alt="PHP"
                              width={40}
                              height={40}
                              className="rounded-md"
                            />
                            <div>
                              <CardTitle className="text-2xl font-semibold">PHP</CardTitle>
                              <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Avancé</Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 pt-2 space-y-6">
                        <p className="text-zinc-300 text-base leading-relaxed">
                          Je maîtrise PHP pour la création d'applications web côté serveur.
                          Je peut concevoir des architectures solides tout en respectant les bonnes pratiques
                          du développement backend.</p>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-zinc-400">
                            <span>Niveau</span>
                            <span>80%</span>
                          </div>
                          <Progress
                            value={80}
                            className="h-3 bg-zinc-800"

                          />
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div className="flex justify-between items-center pt-2">
                          <Link target="_blank" href="https://www.php.net/docs.php">
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                              Docummentation
                            </Button>
                          </Link>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                                onClick={() => router.push(`/Portfolio?tag=PHP`)}>
                                Voir plus
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-zinc-900 text-white text-xs">
                              Consulter les projets associés
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipProvider>
                </CarouselItem>
              </CarouselContent>
              <ScrollHint scrollRef={contentRef} />
            </Carousel>
            <div className="text-center py-16  text-sm uppercase relative tree-category">
              Spécialisation
              <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">Framework</strong>
            </div>
            <TooltipProvider>
              <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
                        alt="Symfony"
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <CardTitle className="text-2xl font-semibold">Symfony</CardTitle>
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Fondamental</Badge>
                      </div>
                    </div>

                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Je développe mes compétences sur Symfony en construisant des applications backend robustes, sécurisées et évolutives
                    grâce à son architecture modulaire et son écosystème mature.
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Niveau</span>
                      <span>50%</span>
                    </div>
                    <Progress
                      value={50}
                      className="h-3 bg-zinc-800"

                    />
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div className="flex justify-between items-center pt-2">
                    <Link target="_blank" href="https://symfony.com/doc/current/index.html">
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                        Docummentation
                      </Button>
                    </Link>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                          onClick={() => router.push(`/Portfolio?tag=Symfony`)}>
                          Voir plus
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-zinc-900 text-white text-xs">
                        Consulter les projets associés
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          </div>
          <div id="aspnet" className={clsx("backend-block", { hidden: activeBlock !== "aspnet" })}>
            <div className="w-[3px] h-10 bg-[#FFFFFF] ml-97 opacity-40 mx-auto"></div>
            <Carousel setApi={setApi} orientation="vertical" className="max-w-[600px] mx-auto">
              <CarouselContent className="max-h-[452px]" ref={contentRef}>
                <CarouselItem className="select-none">
                  <TooltipProvider>
                    <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                      <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                        <div className="flex justify-between items-start w-full">
                          <div className="flex items-center gap-4">
                            <Image
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"
                              alt="SQL"
                              width={40}
                              height={40}
                              className="rounded-md"
                            />
                            <div>
                              <CardTitle className="text-2xl font-semibold">SQL</CardTitle>
                              <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Avancé</Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 pt-2 space-y-6">
                        <p className="text-zinc-300 text-base leading-relaxed">
                          Je maîtrise SQL pour concevoir et interroger des BDD relationnelles.
                          Je l’utilise notamment pour gérer la persistance des données avec des outils comme MySQL ou PostgreSQL.
                        </p>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-zinc-400">
                            <span>Niveau</span>
                            <span>85%</span>
                          </div>
                          <Progress
                            value={85}
                            className="h-3 bg-zinc-800"

                          />
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div className="flex justify-between items-center pt-2">
                          <Link target="_blank" href="https://sql.sh">
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                              Docummentation
                            </Button>
                          </Link>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                                onClick={() => router.push(`/Portfolio?tag=SQL`)}>
                                Voir plus
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-zinc-900 text-white text-xs">
                              Consulter les projets associés
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipProvider>
                </CarouselItem>
                <CarouselItem className="select-none">
                  <TooltipProvider>
                    <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                      <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                        <div className="flex justify-between items-start w-full">
                          <div className="flex items-center gap-4">
                            <Image
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                              alt="C#"
                              width={40}
                              height={40}
                              className="rounded-md"
                            />
                            <div>
                              <CardTitle className="text-2xl font-semibold">C#</CardTitle>
                              <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Avancé</Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 pt-2 space-y-6">
                        <p className="text-zinc-300 text-base leading-relaxed">
                          J’utilise C# pour répondre à des besoins variés. Allant de la conception d' applications web avec ASP.NET, jusqu'a la
                          création d'applications de bureau avec Windows Forms.
                        </p>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-zinc-400">
                            <span>Niveau</span>
                            <span>90%</span>
                          </div>
                          <Progress
                            value={90}
                            className="h-3 bg-zinc-800"

                          />
                        </div>

                        <Separator className="bg-zinc-800" />

                        <div className="flex justify-between items-center pt-2">
                          <Link target="_blank" href="https://learn.microsoft.com/fr-fr/dotnet/csharp/">
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                              Docummentation
                            </Button>
                          </Link>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                                onClick={() => router.push(`/Portfolio?tag=${encodeURIComponent('C#')}`)}>
                                Voir plus
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-zinc-900 text-white text-xs">
                              Consulter les projets associés
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipProvider>
                </CarouselItem>
              </CarouselContent>
              <ScrollHint scrollRef={contentRef} />
            </Carousel>

            <div className="text-center py-16  text-sm uppercase relative tree-category">
              Spécialisation
              <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">ASP.NET Core</strong>
            </div>
            <TooltipProvider>
              <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/20 transition-transform hover:shadow-2xl">
                <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-4">
                      <Image
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
                        alt="ASP.NET Core MVC"
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <CardTitle className="text-2xl font-semibold">ASP.NET Core MVC</CardTitle>
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Niveau Opérationnel</Badge>
                      </div>
                    </div>

                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    J’utilise ASP.NET pour développer des applications web robustes côté serveur.
                    Grâce à sa puissance et sa flexibilité en C#, je conçois des des solutions web performantes
                    et sécurisées, adaptées aux besoins des entreprises modernes.</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-zinc-400">
                      <span>Niveau</span>
                      <span>65%</span>
                    </div>
                    <Progress
                      value={65}
                      className="h-3 bg-zinc-800"

                    />
                  </div>

                  <Separator className="bg-zinc-800" />

                  <div className="flex justify-between items-center pt-2">
                    <Link target="_blank" href="https://learn.microsoft.com/fr-fr/aspnet/core/?view=aspnetcore-9.0">
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 cursor-pointer">
                        Docummentation
                      </Button>
                    </Link>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-100"
                          onClick={() => router.push(`/Portfolio?tag=${encodeURIComponent('ASP.NET Core')}`)}>
                          Voir plus
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-zinc-900 text-white text-xs">
                        Consulter les projets associés
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}