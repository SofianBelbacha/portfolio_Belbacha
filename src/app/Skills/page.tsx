export const dynamic = 'force-static';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/app/_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"
import { Progress } from "@/app/_components/ui/progress"
import { TooltipProvider } from "@/app/_components/ui/tooltip"
import Image from "next/image";
import { Label } from "../_components/ui/label";
import { CalendarDays, ActivitySquare, Network, ShieldCheck, ScanLine, Settings2 } from "lucide-react"
import CarouselSkills from "../_components/layout/carouselSkills";
import { Lock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Compétences | Sofian Belbacha - Développeur Full Stack",
  description: "Découvrez mes compétences techniques : React, Next.js, ASP.NET, JavaScript, HTML, UI/UX et bien plus.",
  keywords: ["Sofian Belbacha", "profil", "développeur", "parcours", "compétences", "JavaScript", "React", "Next.js"],
  authors: [{ name: "Sofian Belbacha", url: "https://sofianbelbacha.dev" }],
  creator: "Sofian Belbacha",
  openGraph: {
    title: "Compétences | Sofian Belbacha - Développeur Full Stack",
    description: "Bienvenue sur mon portfolio en ligne. Développeur web full stack passionné, je me forme actuellement aux pratiques DevOps pour allier développement et déploiement efficaces.",
    url: "https://sofianbelbacha.dev/portfolio",
    siteName: "Sofian Belbacha - Développeur & Futur DevOps",
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


export default function Skills() {

  return (
    <section className="other-items-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
      <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
        <h2 className="text-[50px] md:text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
          compétences
        </h2>
        <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
          Voici un ensemble de
          <span className="text-white"> savoir-faire techniques </span>
          développés au fil de ma veille continue.
        </p>
      </div>
      <CarouselSkills />
      <div className="w-full py-24 bg-black px-6" style={{ maxWidth: "1280px" }}>
        <h2 className="text-left text-4xl text-[30px] font-bold tracking-tight mb-16">Compétences complémentaires</h2>
        <div className="consulting-section-items-list grid gap-11 grid-cols-3 justify-center mx-auto w-full relative">
          <TooltipProvider>
            <Card className="group relative flex flex-col gap-6 p-[30px] w-full border border-[#2e2e2e] bg-black overflow-hidden text-white">
              <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                transition-transform duration-900 ease-in-out 
                translate-x-[-400px] translate-y-[-400px] 
                group-hover:translate-x-[400px] group-hover:translate-y-[400px]"
                style={{
                  background:
                    "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"
                }}
              />
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
              <CardHeader className="z-10 p-0">
                <CardTitle className="text-[24px] font-semibold leading-[1.2] tracking-[-0.8px]">
                  Base de données
                </CardTitle>
                <CardDescription className="text-white font-semibold opacity-50 group-hover:opacity-100 leading-[1.6] tracking-[-0.02em]">
                  J’ai travaillé avec différents SGBD relationnels pour des applications web et métiers. Maîtrise des requêtes SQL, conception de schémas et optimisation des performances.
                </CardDescription>
              </CardHeader>

              <CardContent className="z-10 p-0 space-y-5">
                {[
                  { label: "MySql", value: 85 },
                  { label: "Sql Server", value: 80 },
                  { label: "PostgreSQL", value: 60 }
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
              <CardHeader className="z-10 p-0">
                <CardTitle className="text-[24px] font-semibold leading-[1.2] tracking-[-0.8px]">
                  Environnements & Outils
                </CardTitle>
                <CardDescription className="text-white font-semibold opacity-50 group-hover:opacity-100 leading-[1.6] tracking-[-0.02em]">
                  Maîtrise des outils de développement modernes et d’environnements de travail efficaces pour un développement structuré et aligné avec les meilleures pratiques du développement logiciel.
                </CardDescription>
              </CardHeader>

              <CardContent className="z-10 p-0 space-y-5">
                {[
                  { label: "VS Code / Extensions", value: 80 },
                  { label: "Postman / Insomnia", value: 75 },
                  { label: "Linux / Terminal", value: 70 }
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
              <CardHeader className="z-10 p-0">
                <CardTitle className="text-[24px] font-semibold leading-[1.2] tracking-[-0.8px]">
                  Interfaces responsives & accessibles
                </CardTitle>
                <CardDescription className="text-white font-semibold opacity-50 group-hover:opacity-100 leading-[1.6] tracking-[-0.02em]">
                  Création d&apos;interfaces web adaptables à tous les écrans (mobile, tablette, desktop) en respectant les standards d’accessibilité (a11y) pour une meilleure expérience utilisateur.
                </CardDescription>
              </CardHeader>

              <CardContent className="z-10 p-0 space-y-5">
                {[
                  { label: "Responsive Design", value: 90 },
                  { label: "Accessibilité Web", value: 75 },
                  { label: "Tailwind CSS / Bootstrap", value: 85 },
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
      </div>
      <div className="py-24 bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white relative overflow-hidden">
        <div className="absolute top-[-150px] left-[50%] transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#1a1a1a] blur-[150px] opacity-30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-left text-4xl text-[30px] font-bold tracking-tight mb-16">
            Compétences en Cybersécurité
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <Card style={{ background: "none" }} className="border border-zinc-700  transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <ShieldCheck className="text-[#EE9F2A]" />
                  Sécurité Web
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-zinc-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Prévention XSS / CSRF / Injection SQL</li>
                  <li>HTTP headers, CORS, CSP, HSTS</li>
                  <li>Utilisation de Snyk, OWASP ZAP</li>
                </ul>
                <Progress value={90} className="h-2 bg-zinc-800" />
                <Badge variant="outline" className="text-xs text-zinc-300 border-zinc-600">Niveau : Fondamental</Badge>
              </CardContent>
            </Card>
            <Card style={{ background: "none" }} className="border border-zinc-700 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="text-blue-500" />
                  Authentification & Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-zinc-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>OAuth 2.0, JWT, SSO, MFA</li>
                  <li>Renforcement des tokens, gestion des expirations</li>
                  <li>Utilisation de Passport.js et IdentityServer</li>
                </ul>
                <Progress value={85} className="h-2 bg-zinc-800" />
                <Badge variant="outline" className="text-xs text-zinc-300 border-zinc-600">Niveau : Fondamental</Badge>
              </CardContent>
            </Card>
            <Card style={{ background: "none" }} className="border border-zinc-700  transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <ScanLine className="text-green-500" />
                  Audit & Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-zinc-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Audit de logs (SIEM), analyse réseau</li>
                  <li>Outils : Wireshark, Nmap, Fail2ban</li>
                  <li>Alerting & détection d’intrusion (IDS)</li>
                </ul>
                <Progress value={80} className="h-2 bg-zinc-800" />
                <Badge variant="outline" className="text-xs text-zinc-300 border-zinc-600">Niveau : Fondamental</Badge>
              </CardContent>
            </Card>
            <Card style={{ background: "none" }} className="border border-zinc-700 h transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings2 className="text-indigo-400" />
                  Conformité & RGPD
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-zinc-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Gestion des droits : portabilité, suppression</li>
                  <li>Consentement explicite & documentation</li>
                  <li>Politique de confidentialité claire & accessible</li>
                </ul>
                <Progress value={70} className="h-2 bg-zinc-800" />
                <Badge variant="outline" className="text-xs text-zinc-300 border-zinc-600">Niveau : Confirmé</Badge>
              </CardContent>
            </Card>
            <Card style={{ background: "none" }} className="col-span-full md:col-span-2 xl:col-span-3 bg-[#111111] border border-zinc-800 shadow-inner mt-10">
              <CardHeader>
                <CardTitle className="text-center text-lg text-zinc-200">
                  Outils maîtrisés
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-4 pt-2 text-zinc-300 text-sm">
                <Badge variant="secondary">Wireshark</Badge>
                <Badge variant="secondary">Nmap</Badge>
                <Badge variant="secondary">Burp Suite</Badge>
                <Badge variant="secondary">Fail2ban</Badge>
                <Badge variant="secondary">Metasploit</Badge>
                <Badge variant="secondary">Kali Linux</Badge>
                <Badge variant="secondary">ClamAV</Badge>
                <Badge variant="secondary">OWASP ZAP</Badge>
                <Badge variant="secondary">UFW / iptables</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="py-24 max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-start justify-between gap-y-14 px-6 lg:py-0">
        <div className="max-w-xl">
          <h2 className="text-left text-4xl text-[30px] font-bold tracking-tight mb-8">Roadmap d&apos;apprentissage 2025</h2>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Cette roadmap représente les étapes que je me suis fixées pour progresser tout au long de l&apos;année 2025. Elle rassemble les domaines que je souhaite approfondir, les nouvelles compétences que je veux acquérir, et les outils que j&apos;ai envie d&apos;explorer. L&apos;objectif etant d&apos;apprendre, de me perfectionner, et rester à jour dans un monde tech qui évolue vite.
          </p>
        </div>
        <div className="max-w-md mx-auto flex flex-col gap-6">
          <div className="relative border-l border-zinc-700 pl-6 ml-2 space-y-6">
            <Card className="bg-black text-white border border-white/10 relative">
              <CardHeader className="pb-2 flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Q2 2025</CardTitle>
                  <Badge variant="outline" className="text-xs mt-1 border-white/20">
                    En cours
                  </Badge>
                </div>
                <CalendarDays className="w-5 h-5 text-white/70" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                    alt="Docker"
                    width={20}
                    height={20}
                  />
                  <span>Découverte de Docker & Containerisation</span>
                </div>
                <div className="flex items-center gap-3">
                  <ActivitySquare className="w-5 h-5 text-green-400" />
                  <span>Prise en main de CI/CD (GitHub Actions)</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white border border-white/10 relative">
              <CardHeader className="pb-2 flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Q3 2025</CardTitle>
                  <Badge variant="outline" className="text-xs mt-1 border-white/20">
                    Prévu
                  </Badge>
                </div>
                <CalendarDays className="w-5 h-5 text-white/70" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Network className="w-5 h-5 text-indigo-400" />
                  <span>Déploiement avec Kubernetes</span>
                </div>
                <div className="flex items-center gap-3">
                  <ActivitySquare className="w-5 h-5 text-orange-400" />
                  <span>Infrastructure as Code (Terraform / Pulumi)</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white border border-white/10 relative">
              <CardHeader className="pb-2 flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Q4 2025</CardTitle>
                  <Badge variant="outline" className="text-xs mt-1 border-white/20">
                    Prévu
                  </Badge>
                </div>
                <CalendarDays className="w-5 h-5 text-white/70" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L0 6v12l12 6 12-6V6z" />
                  </svg>
                  <span>Apprentissage de Rust pour le backend système</span>
                </div>
                <div className="flex items-center gap-3">
                  <ActivitySquare className="w-5 h-5 text-pink-400" />
                  <span>Observabilité (Prometheus, Grafana)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

  );
}

