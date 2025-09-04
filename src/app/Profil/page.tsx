export const dynamic = "force-static";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"
import { BadgeCheck, BriefcaseBusiness, Clock, Link2, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "../_components/ui/avatar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil | Sofian Belbacha - Développeur Full Stack",
  description: "Développeur passionné, je vous invite à découvrir mon parcours, mon expérience et les technologies que j’ai apprises et maîtrisées.",
  keywords: ["Sofian Belbacha", "profil", "développeur", "parcours", "compétences", "JavaScript", "React", "Next.js"],
  authors: [{ name: "Sofian Belbacha", url: "https://sofianbelbacha.vercel.app" }],
  creator: "Sofian Belbacha",
  openGraph: {
    title: "Profil | Sofian Belbacha - Développeur Full Stack",
    description: "Développeur passionné, je vous invite à découvrir mon parcours, mon expérience et les technologies que j’ai apprises et maîtrisées.",
    url: "https://sofianbelbacha.vercel.app/Profil",
    siteName: "SOFIAN",
    images: [
      {
        url: "https://i.postimg.cc/3x1PQcd6/og-portfolio.png",
        alt: "Aperçu de mon portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://sofianbelbacha.vercel.app"),
};

export default function Profil() {
  return (
    <section className="consulting-section flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
      <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
        <h2 className="consulting-section-title text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
          Page de Profil
        </h2>
        <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
          Vous trouverez sur cette page toutes les informations me concernant tels que <span className="text-white"> mon parcours, mon cv, mes expériences...</span>
        </p>
      </div>
      <div className="p-4 pb-0 xl:group-data-[theme-content-layout=centered]/layout:container xl:group-data-[theme-content-layout=centered]/layout:mx-auto xl:group-data-[theme-content-layout=centered]/layout:mt-8">
        <div className="space-y-4">
          <h1 className="text-xl font-bold tracking-tight lg:text-2xl">Page de Profil</h1>
          <div className="grid gap-4 xl:grid-cols-3">
            <div className="space-y-4 xl:col-span-1">
              <Card className="flex flex-col gap-6 relative py-6 rounded-xl border border-white/20 bg-transparent">
                <CardContent className="px-6">
                  <Badge className="absolute start-4 top-4">Profil</Badge>
                  <div className="space-y-12">
                    <div className="flex flex-col items-center space-y-4">
                      <Avatar className="size-20">
                        <AvatarImage src="./linkedin_profil-image.jpg" alt="@shadcn" />
                      </Avatar>
                      <div className="text-center">
                        <h5 className="text-xl font-semibold">Sofian Belbacha</h5>
                        <div className="text-muted-foreground text-sm">Développeur Full Stack</div>
                      </div>
                    </div>
                    <div className="bg-muted grid grid-cols-3 divide-x rounded-md border text-center *:py-3">
                      <div className="flex flex-col items-center gap-[5px] justify-center">
                        <Image src="linkedin-svgrepo-com.svg" alt={"Linkedin Logo"} width={31} height={21} />
                        <Link href="https://www.linkedin.com/in/sofian-belbacha/" target="_blank" className="text-muted-foreground text-sm">Linkedin</Link>
                      </div>
                      <div className="flex flex-col items-center gap-[5px] justify-center">
                        <Image src="gitlab-svgrepo-com.svg" alt={"Linkedin Logo"} width={31} height={21}/>
                        <Link href="https://gitlab.com/SofianBelbacha/" target="_blank" className="text-muted-foreground text-sm">Gitlab</Link>
                      </div>
                      <div className="flex flex-col items-center gap-[5px] justify-center">
                        <Image src="github-svgrepo-com.svg" alt={"Linkedin Logo"} width={31} height={21} />
                        <Link href="https://github.com/SofianBelbacha" target="_blank" className="text-muted-foreground text-sm">Github</Link>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="size-4 text-muted-foreground" /> sofianbelbacha@gmail.com
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <PhoneCall className="size-4 text-muted-foreground" /> (+33) 7 53 44 18 07
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="size-4 text-muted-foreground" /> Béziers, Occitanie, France
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col gap-6 border border-white/20 bg-transparent">
                <CardHeader className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                  <div className="flex justify-between">
                    <CardTitle className="leading-none font-semibold">Skills</CardTitle>
                    <Link className="text-muted-foreground hover:text-primary text-sm hover:underline" href="/Skills">Voir tout
                    </Link>
                  </div>
                </CardHeader>

                <CardContent className="px-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git/Github</Badge>
                    <Badge>ASP.NET Core</Badge>
                    <Badge>HTML</Badge>
                    <Badge>React</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>JavaScipt</Badge>
                    <Badge>Symfony</Badge>
                    <Badge>Next.Js</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col gap-6 py-6 rounded-xl border border-white/20 bg-transparent">
                <CardHeader className="px-6 pb-0">
                  <CardTitle>À propos de moi</CardTitle>
                </CardHeader>
                <CardContent className="px-6 space-y-4">
                  <p>
                    Je suis Sofian Belbacha, développeur full stack, passionné par la technologie et curieux de nature. Mon parcours m’a amené à concevoir des applications web modernes, performantes et sécurisées, en combinant les meilleures pratiques front-end et back-end.
                  </p>
                  <p>
                    Au-delà du développement web, je me forme activement aux pratiques DevOps (automatisation, CI/CD, Docker, gestion d’infrastructures) dans une démarche d’amélioration continue.</p>
                  <p>
                    Par ailleurs, je m’intéresse particulièrement à la cybersécurité, un domaine essentiel face aux enjeux actuels du numérique. J’explore les bonnes pratiques de sécurisation des applications, la protection des données sensibles et la conformité aux normes en vigueur.                  </p>
                  <p>
                    Aujourd’hui, je cherche à intégrer une équipe en tant que salarié, dans laquelle je pourrais continuer à apprendre, apporter mes compétences et relever de nouveaux défis techniques.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col gap-6 rounded-xl border py-6">
                <CardHeader className="px-6">
                  <div className="flex items-start justify-between">
                    <CardTitle>Mon CV</CardTitle>
                    <Link href={"/personal/CV_SOFIAN_BELBACHA.pdf"} target="_blank">
                      <button className="size-9 flex items-center justify-center rounded-md border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                        aria-label="Voir plus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </CardHeader>

                <CardContent className="px-6 space-y-4">
                  <div className="h-[603px] max-w-full overflow-hidden rounded-md shadow">
                    <iframe
                      src="/personal/CV_SOFIAN_BELBACHA.pdf"
                      className="w-full h-full"
                      title="CV de Belbacha"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 xl:col-span-2">
              <Card className="flex flex-col gap-6 py-6 rounded-xl border border-white/20 bg-transparent">
                <CardHeader className="px-6">
                  <CardTitle>Parcours</CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  <ol className="relative border-s">
                    <li className="ms-6 mb-10 space-y-2">
                      <span className="bg-muted absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border">
                        <BriefcaseBusiness className="text-primary size-3" />
                      </span>
                      <h3 className="flex items-center font-semibold">
                        Bachelor 3 Informatique
                        <Badge className="ms-2">Latest</Badge>
                      </h3>
                      <time className="text-muted-foreground flex items-center gap-1.5 text-sm leading-none">
                        <Clock className="size-3" />
                        Montpellier Ynov Campus / Sep 2024 - Janv 2025
                      </time>
                      <p className="text-muted-foreground">
                        Le Bachelor 3 Informatique d’Ynov Campus est une formation professionnalisante
                        qui prépare les étudiants à devenir des développeurs polyvalents, capables de répondre
                        aux besoins actuels du marché du numérique. Cette troisième année du cursus informatique
                        est axée sur la consolidation des compétences techniques et le développement de projets concrets.
                        Cursus interrompu faute d’alternance.
                      </p>
                      <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Conception et développement d&apos;applications :</span> capacité à créer des applications web et mobiles fonctionnelles et performantes.
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Gestion de projets informatiques :</span> aptitude à planifier, organiser et suivre des projets en utilisant des outils et méthodes adaptés.
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Introduction à l’intelligence artificielle :</span> découverte des fondements de l&apos;IA à travers des projets concrets en python, compréhension des concepts de machine learning.


                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Adaptabilité technologique :</span> préparation à l&apos;apprentissage continu face à l&apos;évolution rapide des technologies.
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Découverte de nouveaux outils :</span> familiarisation avec des technologies comme Laravel, notamment pour la création d’une API RESTful, ainsi qu’avec SQLite, un système de gestion de base de données léger, idéal pour les projets en local ou à petite échelle.
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Sécurité informatique :</span> Principes de base de la sécurité des systèmes d&apos;information, mise en œuvre de mesures de protection des données
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="ms-6 mb-10 space-y-2">
                      <span className="bg-muted absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border">
                        <BadgeCheck className="text-primary size-3" />
                      </span>
                      <h3 className="font-semibold">BTS Service Informatique aux organisations</h3>
                      <time className="text-muted-foreground flex items-center gap-1.5 text-sm leading-none">
                        <Clock className="size-3" />
                        Lycée Marc Bloch, Sérignan / Sep 2023 - Juin 2024
                      </time>
                      <p className="text-muted-foreground">
                        Le BTS Services Informatiques aux Organisations (SIO) option Solutions Logicielles et Applications Métiers (SLAM)
                        forme des professionnels capables de concevoir, développer et maintenir des applications informatiques répondant
                        aux besoins des entreprises. Les compétences techniques que j&apos;ai acquises incluent :
                      </p>
                      <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Développement et Programmation :</span> Maîtrise des langages de programmation (PHP, C# (.NET Framework), SQL, HTML, CSS)
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Bases de Données :</span> Conception et gestion de bases de données relationnelles, rédaction de requêtes SQL, utilisation de SGBD (MySQL, SQL Server)
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Programmation orientée objet :</span> (C# et PHP) et modèle MVC
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Analyse et Conception :</span> Utilisation des outils de modélisation (UML, MERISE), analyse des besoins utilisateurs
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Tests et validation :</span> Conception et réalisation de tests unitaires
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Sécurité informatique :</span> Principes de base de la sécurité des systèmes d&apos;information, mise en œuvre de mesures de protection des données
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              <Card className="flex flex-col gap-6 py-6 rounded-xl border border-white/20 bg-transparent">
                <CardHeader className="px-6">
                  <CardTitle>Expériences</CardTitle>
                </CardHeader>

                <CardContent className="px-6">
                  <ol className="relative border-s">
                    <li className="ms-6 mb-10 space-y-2">
                      <span className="bg-muted absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border">
                        <BriefcaseBusiness className="text-primary size-3" />
                      </span>
                      <h3 className="flex items-center font-semibold">
                        Développeur Backend PHP
                        <Badge className="ms-2">Latest</Badge>
                      </h3>
                      <time className="text-muted-foreground flex items-center gap-1.5 text-sm leading-none">
                        <Clock className="size-3" />
                        ADSL Informatique Sérignan (34) / Mai 2023 - Juil 2023
                      </time>
                      <p className="text-muted-foreground">
                          Lors de ce stage, j’ai travaillé sur le développement d’une interface pour le site Tentation Voyage, 
                          une plateforme interactive qui propose des destinations et itinéraires personnalisés. 
                          Ma mission principale a été de concevoir une fonctionnalité permettant aux utilisateurs de remplir 
                          des formulaires afin de générer des road trips personnalisés au format PDF. Cette solution vise à 
                          offrir une expérience pratique et intuitive, regroupant dans un document téléchargeable 
                          toutes les informations nécessaires pour organiser et vivre un voyage sur mesure.                      
                      </p>
                      <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Analyse des besoins et cahier des charges :</span> Identification des attentes clients et rédaction d'un cahier des charges détaillé.
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Mise en place d’une structure collaborative :</span> Mise en place de workflows pour le travail collaboratif en équipe. 
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Conception d’une base de données MySQL :</span> Mise en place d'une base de données MySQL et utilisation de requêtes SQL pour gérer les données du road trip.
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Architecture MVC en PHP :</span> Développement back-end du road trip en PHP en utilisant une architecture MVC modulaire.
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Ajout de fonctionnalités :</span> Intégration d’options supplémentaires afin d’enrichir l’expérience utilisateur et les performances du site.
                          </span>
                        </li>
                        <li className="pl-4 relative">
                          <span className="absolute left-0 top-1 text-primary">•</span>
                          <span className="block ml-2">
                            <span className="font-medium text-foreground">Résolution de bugs :</span> Résolution de bugs en analysant et en corrigeant des dysfonctionnements, renforçant la stabilité du site et réduisant les incidents signalés de 50 %.
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

