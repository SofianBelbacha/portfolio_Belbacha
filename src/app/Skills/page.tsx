"use client";
import {
  Card,
  CardContent,
  CardDescription,
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
import { useState } from "react";
import clsx from "clsx";
import { Label } from "../_components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/app/_components/ui/carousel"
import React from "react";


export default function Skills() {
  const [activeBlock, setActiveBlock] = useState("php")
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
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
    <section className="other-items-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
      <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
        <h2 className="text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
          How We Secure Your Future
        </h2>
        <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
          Comprehensive solutions
          <span className="text-white">tailored to meet your unique needs.</span>
          our services designed to enhance efficiency, improve performance, and drive growth.
        </p>
      </div>
      <div className="max-w-[1130px] mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">Des bases solides pour construire des projets
          web robustes</h1>
        <div className="text-center mb-6 max-w-[630px] mx-auto text-white text-base leading-relaxed">
          Je propose une expertise complète en développement web, acquise à travers un apprentissage structuré
          et pratique. Voici les domaines dans lesquels je suis compétent :
        </div>
        <TooltipProvider>
          <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                    <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                    <ul className="text-sm space-y-2">
                      <li className="hover:underline cursor-pointer">Voir le CV</li>
                      <li className="hover:underline cursor-pointer">Partager</li>
                      <li className="hover:underline cursor-pointer">Réduire</li>
                    </ul>
                  </PopoverContent>
                </Popover>
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
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  Docummentation
                </Button>
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
        <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto "></div>
        <TooltipProvider>
          <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                    <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                    <ul className="text-sm space-y-2">
                      <li className="hover:underline cursor-pointer">Voir le CV</li>
                      <li className="hover:underline cursor-pointer">Partager</li>
                      <li className="hover:underline cursor-pointer">Réduire</li>
                    </ul>
                  </PopoverContent>
                </Popover>
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
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-3 bg-zinc-800" />
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex justify-between items-center pt-2">
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  Docummentation
                </Button>
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
        <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto" id="wave-anchor"></div>
        <TooltipProvider>
          <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                    <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                    <ul className="text-sm space-y-2">
                      <li className="hover:underline cursor-pointer">Voir le CV</li>
                      <li className="hover:underline cursor-pointer">Partager</li>
                      <li className="hover:underline cursor-pointer">Réduire</li>
                    </ul>
                  </PopoverContent>
                </Popover>
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
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-3 bg-zinc-800" />
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex justify-between items-center pt-2">
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  Docummentation
                </Button>
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
        <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto"></div>
        <TooltipProvider>
          <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
            <CardHeader className="flex flex-col gap-4 p-6 pb-2">
              <div className="flex justify-between items-start w-full">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
                    alt="Algorithmique"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <div>
                    <CardTitle className="text-2xl font-semibold">Algorithmique</CardTitle>
                    <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                    <ul className="text-sm space-y-2">
                      <li className="hover:underline cursor-pointer">Voir le CV</li>
                      <li className="hover:underline cursor-pointer">Partager</li>
                      <li className="hover:underline cursor-pointer">Réduire</li>
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6 pt-2 space-y-6">
              <p className="text-zinc-300 text-base leading-relaxed">
                Solide compréhension des fondamentaux de l’algorithmique, indispensable pour
                aborder n’importe quel langage de programmation de manière logique et efficace.
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
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  Docummentation
                </Button>
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
        <div className="text-center py-16 text-[#8491c7] text-sm uppercase relative tree-category">
          Orientation : Choix du langage
          <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">stacks
            maîtrisés
          </strong>
        </div>
        <div className="relative flex flex-col md:flex-row justify-around items-start gap-10 tree-split">
          <div className="w-full md:w-1/2 max-w-[540px] ">
            <div className="text-center text-[#8491c7] text-sm uppercase py-16 relative tree-category">
              Spécialisation
              <strong className="block text-white text-4xl font-semibold tracking-widest">Frontend</strong>
            </div>
            <TooltipProvider>
              <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                      </div>
                    </div>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                        <ul className="text-sm space-y-2">
                          <li className="hover:underline cursor-pointer">Voir le CV</li>
                          <li className="hover:underline cursor-pointer">Partager</li>
                          <li className="hover:underline cursor-pointer">Réduire</li>
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Maîtrise de JavaScript pour créer des interfaces dynamiques et interactives, aussi bien côté navigateur que côté serveur (NodeJS, Deno).
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
                    <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                      Docummentation
                    </Button>
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
            <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto" id="wave-anchor"></div>
            <TooltipProvider>
              <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                      </div>
                    </div>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                        <ul className="text-sm space-y-2">
                          <li className="hover:underline cursor-pointer">Voir le CV</li>
                          <li className="hover:underline cursor-pointer">Partager</li>
                          <li className="hover:underline cursor-pointer">Réduire</li>
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Utilisation de Git pour le versionnage de projet, travail collaboratif et gestion d’historique des modifications.
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
                    <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                      Docummentation
                    </Button>
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
            <div className="text-center py-16 text-[#8491c7] text-sm uppercase relative tree-category">
              Spécialisation
              <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">Framework</strong>
            </div>
            <TooltipProvider>
              <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                      </div>
                    </div>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                        <ul className="text-sm space-y-2">
                          <li className="hover:underline cursor-pointer">Voir le CV</li>
                          <li className="hover:underline cursor-pointer">Partager</li>
                          <li className="hover:underline cursor-pointer">Réduire</li>
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Conception d’interfaces utilisateur modernes avec React, une bibliothèque
                    puissante pour le développement d’applications frontend.
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
                    <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                      Docummentation
                    </Button>
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
            <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto" id="wave-anchor"></div>
            <TooltipProvider>
              <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                        <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                      </div>
                    </div>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                        <ul className="text-sm space-y-2">
                          <li className="hover:underline cursor-pointer">Voir le CV</li>
                          <li className="hover:underline cursor-pointer">Partager</li>
                          <li className="hover:underline cursor-pointer">Réduire</li>
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-2 space-y-6">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    Conception d’interfaces utilisateur modernes avec React, une bibliothèque
                    puissante pour le développement d’applications frontend.
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
                    <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                      Docummentation
                    </Button>
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
          </div>
          <div className="w-full md:w-1/2 max-w-[540px]">
            <div className="tree-split-backend">
              <div className="text-center text-[#8491c7] text-sm uppercase py-16 relative tree-category">
                Spécialisation
                <strong className="block text-white text-4xl font-semibold tracking-widest">BackEnd</strong>
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
              <TooltipProvider>
                <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
                  <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                    <div className="flex justify-between items-start w-full">
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                          alt="SQL"
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle className="text-2xl font-semibold">SQL</CardTitle>
                          <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                        </div>
                      </div>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                          <ul className="text-sm space-y-2">
                            <li className="hover:underline cursor-pointer">Voir le CV</li>
                            <li className="hover:underline cursor-pointer">Partager</li>
                            <li className="hover:underline cursor-pointer">Réduire</li>
                          </ul>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-2 space-y-6">
                    <p className="text-zinc-300 text-base leading-relaxed">
                      SQL (Structured Query Language) est le langage standard pour interagir avec les bases de données relationnelles. Il permet de créer, lire, modifier et supprimer des données efficacement.
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
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        Docummentation
                      </Button>
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
              <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto" id="wave-anchor"></div>
              <TooltipProvider>
                <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                          <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                        </div>
                      </div>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                          <ul className="text-sm space-y-2">
                            <li className="hover:underline cursor-pointer">Voir le CV</li>
                            <li className="hover:underline cursor-pointer">Partager</li>
                            <li className="hover:underline cursor-pointer">Réduire</li>
                          </ul>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-2 space-y-6">
                    <p className="text-zinc-300 text-base leading-relaxed">
                      PHP est un langage de script côté serveur largement utilisé pour le développement web. Il permet de créer des sites dynamiques et de gérer la logique côté backend.
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
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        Docummentation
                      </Button>
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
              <div className="text-center py-16 text-[#8491c7] text-sm uppercase relative tree-category">
                Spécialisation
                <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">Framework</strong>
              </div>
              <TooltipProvider>
                <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                          <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                        </div>
                      </div>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                          <ul className="text-sm space-y-2">
                            <li className="hover:underline cursor-pointer">Voir le CV</li>
                            <li className="hover:underline cursor-pointer">Partager</li>
                            <li className="hover:underline cursor-pointer">Réduire</li>
                          </ul>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-2 space-y-6">
                    <p className="text-zinc-300 text-base leading-relaxed">
                      Symfony est un framework PHP qui vous permettra d'écrire une application web de manière plus organisée avec une séparation de la logique en plusieurs composants.
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
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        Docummentation
                      </Button>
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
            </div>
            <div id="aspnet" className={clsx("backend-block", { hidden: activeBlock !== "aspnet" })}>
              <div className="w-[3px] h-10 bg-[#FFFFFF] ml-97 opacity-40 mx-auto"></div>
              <TooltipProvider>
                <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
                  <CardHeader className="flex flex-col gap-4 p-6 pb-2">
                    <div className="flex justify-between items-start w-full">
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                          alt="SQL"
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle className="text-2xl font-semibold">SQL</CardTitle>
                          <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                        </div>
                      </div>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                          <ul className="text-sm space-y-2">
                            <li className="hover:underline cursor-pointer">Voir le CV</li>
                            <li className="hover:underline cursor-pointer">Partager</li>
                            <li className="hover:underline cursor-pointer">Réduire</li>
                          </ul>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-2 space-y-6">
                    <p className="text-zinc-300 text-base leading-relaxed">
                      SQL (Structured Query Language) est le langage standard pour interagir avec les bases de données relationnelles. Il permet de créer, lire, modifier et supprimer des données efficacement.
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
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        Docummentation
                      </Button>
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
              <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto"></div>
              <TooltipProvider>
                <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                          <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                        </div>
                      </div>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                          <ul className="text-sm space-y-2">
                            <li className="hover:underline cursor-pointer">Voir le CV</li>
                            <li className="hover:underline cursor-pointer">Partager</li>
                            <li className="hover:underline cursor-pointer">Réduire</li>
                          </ul>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-2 space-y-6">
                    <p className="text-zinc-300 text-base leading-relaxed">
                      C# est un langage de programmation orienté objet développé par Microsoft. Il est utilisé pour développer des applications robustes, notamment sur la plateforme .NET.
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
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        Docummentation
                      </Button>
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
              <div className="text-center py-16 text-[#8491c7] text-sm uppercase relative tree-category">
                Spécialisation
                <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">ASP.NET Core</strong>
              </div>
              <TooltipProvider>
                <Card className="relative max-w-[600px] mx-auto rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                          <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                        </div>
                      </div>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <MoreVertical className="h-5 w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                          <ul className="text-sm space-y-2">
                            <li className="hover:underline cursor-pointer">Voir le CV</li>
                            <li className="hover:underline cursor-pointer">Partager</li>
                            <li className="hover:underline cursor-pointer">Réduire</li>
                          </ul>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-2 space-y-6">
                    <p className="text-zinc-300 text-base leading-relaxed">
                      ASP.NET Core MVC est un framework web léger et performant de Microsoft, conçu pour construire des applications web modernes à l’aide du pattern MVC (Model-View-Controller).
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
                      <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                        Docummentation
                      </Button>
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
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-min-[1px] max-w-[1200px] w-full mx-auto">
        <div className="font-semibold text-[30px] relative">
          <h3 className="text-white after:content-[''] after:absolute after:w-[100px] after:h-[5px] after:bg-[#EE9F2A] after:left-0 after:-bottom-5">
            Ton Titre
          </h3>
        </div>
      </div>
      <div className="consulting-section-items-list grid gap-11 grid-cols-3 justify-center max-w-[1200px] w-full relative">
        <TooltipProvider>
          <Card className="group relative flex flex-col gap-6 p-[30px] w-full border border-[#2e2e2e] bg-black overflow-hidden text-white">
            {/* Glow / Animated Background */}
            <div
              className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
            transition-transform duration-900 ease-in-out 
            translate-x-[-400px] translate-y-[-400px] 
            group-hover:translate-x-[400px] group-hover:translate-y-[400px]"
              style={{
                background:
                  "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"
              }}
            />

            {/* Icon Section */}
            <Label className="gap-0 w-[91.68px] text-sm font-medium leading-none flex flex-col items-center rounded-md border-2 border-primary bg-transparent p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-3 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Card
            </Label>
            {/* Header */}
            <CardHeader className="z-10 p-0">
              <CardTitle className="text-[24px] font-semibold leading-[1.2] tracking-[-0.8px]">
                Base de données
              </CardTitle>
              <CardDescription className="text-white font-semibold opacity-50 group-hover:opacity-100 leading-[1.6] tracking-[-0.02em]">
                Our privacy consulting services help you navigate effective complex data protection regulations, ensuring compliance and trust.
              </CardDescription>
            </CardHeader>

            {/* Skills & Progress Bars */}
            <CardContent className="z-10 p-0 space-y-5">
              {[
                { label: "MySql", value: 85 },
                { label: "Sql Server", value: 70 },
                { label: "PostgreSQL", value: 90 }
              ].map((tech) => (
                <div key={tech.label} className="space-y-1">
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>{tech.label}</span>
                    <span>{tech.value}%</span>
                  </div>
                  <Progress
                    value={tech.value}
                    className="h-2 bg-zinc-800"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TooltipProvider>
        <TooltipProvider>
          <Card className="group relative flex flex-col gap-6 p-[30px] w-full border border-[#2e2e2e] bg-black overflow-hidden text-white">
            {/* Glow / Animated Background */}
            <div
              className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
            transition-transform duration-900 ease-in-out 
            translate-x-[-400px] translate-y-[-400px] 
            group-hover:translate-x-[400px] group-hover:translate-y-[400px]"
              style={{
                background:
                  "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"
              }}
            />

            {/* Icon Section */}
            <Label className="gap-0 w-[91.68px] text-sm font-medium leading-none flex flex-col items-center rounded-md border-2 border-primary bg-transparent p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-3 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Card
            </Label>
            {/* Header */}
            <CardHeader className="z-10 p-0">
              <CardTitle className="text-[24px] font-semibold leading-[1.2] tracking-[-0.8px]">
                Base de données
              </CardTitle>
              <CardDescription className="text-white font-semibold opacity-50 group-hover:opacity-100 leading-[1.6] tracking-[-0.02em]">
                Our privacy consulting services help you navigate effective complex data protection regulations, ensuring compliance and trust.
              </CardDescription>
            </CardHeader>

            {/* Skills & Progress Bars */}
            <CardContent className="z-10 p-0 space-y-5">
              {[
                { label: "MySql", value: 85 },
                { label: "Sql Server", value: 70 },
                { label: "PostgreSQL", value: 90 }
              ].map((tech) => (
                <div key={tech.label} className="space-y-1">
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>{tech.label}</span>
                    <span>{tech.value}%</span>
                  </div>
                  <Progress
                    value={tech.value}
                    className="h-2 bg-zinc-800"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TooltipProvider>
        <TooltipProvider>
          <Card className="group relative flex flex-col gap-6 p-[30px] w-full border border-[#2e2e2e] bg-black overflow-hidden text-white">
            {/* Glow / Animated Background */}
            <div
              className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
            transition-transform duration-900 ease-in-out 
            translate-x-[-400px] translate-y-[-400px] 
            group-hover:translate-x-[400px] group-hover:translate-y-[400px]"
              style={{
                background:
                  "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"
              }}
            />

            {/* Icon Section */}
            <Label className="gap-0 w-[91.68px] text-sm font-medium leading-none flex flex-col items-center rounded-md border-2 border-primary bg-transparent p-4 hover:bg-accent hover:text-accent-foreground transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-3 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Card
            </Label>
            {/* Header */}
            <CardHeader className="z-10 p-0">
              <CardTitle className="text-[24px] font-semibold leading-[1.2] tracking-[-0.8px]">
                Base de données
              </CardTitle>
              <CardDescription className="text-white font-semibold opacity-50 group-hover:opacity-100 leading-[1.6] tracking-[-0.02em]">
                Our privacy consulting services help you navigate effective complex data protection regulations, ensuring compliance and trust.
              </CardDescription>
            </CardHeader>

            {/* Skills & Progress Bars */}
            <CardContent className="z-10 p-0 space-y-5">
              {[
                { label: "MySql", value: 85 },
                { label: "Sql Server", value: 70 },
                { label: "PostgreSQL", value: 90 }
              ].map((tech) => (
                <div key={tech.label} className="space-y-1">
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>{tech.label}</span>
                    <span>{tech.value}%</span>
                  </div>
                  <Progress
                    value={tech.value}
                    className="h-2 bg-zinc-800"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TooltipProvider>
      </div>
      <Carousel setApi={setApi} className="max-w-[600px] mx-auto">
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem>
        <TooltipProvider>
          <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                    <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                    <ul className="text-sm space-y-2">
                      <li className="hover:underline cursor-pointer">Voir le CV</li>
                      <li className="hover:underline cursor-pointer">Partager</li>
                      <li className="hover:underline cursor-pointer">Réduire</li>
                    </ul>
                  </PopoverContent>
                </Popover>
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
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  Docummentation
                </Button>
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
        <CarouselItem>
        <TooltipProvider>
          <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                    <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                    <ul className="text-sm space-y-2">
                      <li className="hover:underline cursor-pointer">Voir le CV</li>
                      <li className="hover:underline cursor-pointer">Partager</li>
                      <li className="hover:underline cursor-pointer">Réduire</li>
                    </ul>
                  </PopoverContent>
                </Popover>
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
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-3 bg-zinc-800" />
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex justify-between items-center pt-2">
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  Docummentation
                </Button>
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
        <CarouselItem>
        <TooltipProvider>
          <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
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
                    <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                    <ul className="text-sm space-y-2">
                      <li className="hover:underline cursor-pointer">Voir le CV</li>
                      <li className="hover:underline cursor-pointer">Partager</li>
                      <li className="hover:underline cursor-pointer">Réduire</li>
                    </ul>
                  </PopoverContent>
                </Popover>
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
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-3 bg-zinc-800" />
              </div>

              <Separator className="bg-zinc-800" />

              <div className="flex justify-between items-center pt-2">
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  Docummentation
                </Button>
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
        <CarouselItem>
        <TooltipProvider>
          <Card className="relative rounded-2xl bg-black text-white shadow-xl border border-white/10 transition-transform hover:scale-[1.01] hover:shadow-2xl">
            <CardHeader className="flex flex-col gap-4 p-6 pb-2">
              <div className="flex justify-between items-start w-full">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
                    alt="Algorithmique"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <div>
                    <CardTitle className="text-2xl font-semibold">Algorithmique</CardTitle>
                    <Badge variant="outline" className="text-white border-white/20 text-xs mt-1">Compétence maîtrisée</Badge>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-zinc-900 border-zinc-800 text-white">
                    <ul className="text-sm space-y-2">
                      <li className="hover:underline cursor-pointer">Voir le CV</li>
                      <li className="hover:underline cursor-pointer">Partager</li>
                      <li className="hover:underline cursor-pointer">Réduire</li>
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6 pt-2 space-y-6">
              <p className="text-zinc-300 text-base leading-relaxed">
                Solide compréhension des fondamentaux de l’algorithmique, indispensable pour
                aborder n’importe quel langage de programmation de manière logique et efficace.
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
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                  Docummentation
                </Button>
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

    </section>
  );
}
