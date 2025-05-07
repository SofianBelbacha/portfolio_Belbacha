export const dynamic = "force-static";

import HomePortfolio from "./_components/layout/sectionHomePortfolio";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./_components/ui/badge";
import { Button } from "./_components/ui/button";
import { ArrowUpRight, Download } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil | Sofian Belbacha - Développeur Full Stack",
  description: "Bienvenue sur mon portfolio en ligne. Développeur web full stack passionné, je me forme actuellement aux pratiques DevOps pour allier développement et déploiement efficaces.",
  keywords: ["Sofian Belbacha", "portfolio", "développeur web", "frontend", "backend", "Next.js", "React", "ASP.NET Core", "projets web", "DevOps"],
  authors: [{ name: "Sofian Belbacha", url: "https://sofianbelbacha.vercel.app" }],
  creator: "Sofian Belbacha",
  openGraph: {
    title: "Accueil | Sofian Belbacha - Développeur Full Stack",
    description: "Bienvenue sur mon portfolio en ligne. Développeur web full stack passionné, je me forme actuellement aux pratiques DevOps pour allier développement et déploiement efficaces.",
    url: "https://sofianbelbacha.vercel.app/",
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
export default function Home() {
  return (
    <>
      {/* section header */}
      <section className="header-section flex flex-col items-center justify-center gap-5 h-screen w-full p-10 overflow-hidden relative">
        <div className="relative">
          <Badge variant="outline" className="badge-header text-md border-white/20 absolute bottom-25">
            👋, Je suis Sofian
          </Badge>
          <h1 className="header-title text-[7vw] md:text-[90px] font-bold leading-[1.1] tracking-[-0.04em] text-white text-center w-full font-[Inter]">
            Développeur & Futur DevOps
          </h1></div>
        <div className="w-full max-w-[500px]">
          <p className="tracking-[-0.8px] font-[Inter] font-semibold text-[24px] leading-[1.2] tracking-[-0.05em] text-[#999999] text-center">
            Junior passionné, prêt à contribuer au succès d&apos;une équipe dynamique
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 relative z-10">
          <Link href="#contact" className="flex items-center justify-center gap-2 h-[44px] px-4  text-black bg-[rgb(255,255,255)] hover:bg-[rgba(255,255,255,0.8)] text-sm font-semibold cursor-pointer overflow-hidden relative transition" style={{ "willChange": "transform", "borderRadius": "12px" }}>
            Me Contacter
          </Link>
          <Link href="/Portfolio" className="flex items-center justify-center gap-2 h-[44px] px-4 bg-zinc-900 hover:bg-[rgb(255,255,255)] text-white hover:text-black text-sm font-semibold border cursor-pointer overflow-hidden relative transition" style={{ "willChange": "transform", "borderRadius": "12px", "borderColor": "rgb(255, 255, 255)" }}>
            Voir Mes Projets
          </Link>
        </div>
        <div className="framer-18azqax carrousel-header">
          <div className="framer-u4l76e" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none" }}>
            <p className="framer-text framer-styles-preset-1m2icuf" style={{}}>
              Compétences clés pour vos projets</p>

          </div>
          <div className="framer-cwblq8-container carrousel-items">
            <section style={{ "display": "flex", "width": "100%", "height": "100%", "maxWidth": "100%", "maxHeight": "100%", "placeItems": "center", "margin": "0px", "padding": "0px", "listStyleType": "none", "opacity": "1", "maskImage": "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.5%, rgb(0, 0, 0) 82.5%, rgba(0, 0, 0, 0) 100%)", "overflow": "hidden" }}>
              <ul id="carousel" style={{ "display": "flex", "width": "100%", "height": "100%", "maxWidth": "100%", "maxHeight": "100%", "placeItems": "center", "margin": "0px", "padding": "0px", "listStyleType": "none", "gap": "40px", "flexDirection": "row", "willChange": "transform", "transform": "translateX(0px)", "left": "-2560px" }}>
                <li>
                  <div className="framer-15uj8iw" style={{ flexShrink: "0", gap: "40px" }}>
                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "\"Poppins\", \"Panchang Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            HTML / CSS
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-m7x0ky">
                      <div className="framer-an6nl5" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <i className="devicon-javascript-plain" style={{ fontSize: "25px" }}></i>
                        <p className="framer-text" style={{ "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==", "--framer-font-family": "\"Paytone One\", \"Paytone One Placeholder\", sans-serif", "--framer-font-size": "17px", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                          JavaScript
                        </p>
                      </div>
                    </div>
                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "\"Poppins\", \"Panchang Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            Autodidacte
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-dj1ob4">
                      <i className="devicon-nextjs-original-wordmark" style={{ fontSize: "95px" }}></i>
                    </div>
                    <div className="framer-b3x7k0">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ fontSize: "21px", "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "sans-serif", "--framer-font-weight": "500", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            Flexibilité
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-z7f0bv">
                      <div className="framer-14z0xme" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <i className="devicon-dot-net-plain" style={{ fontSize: "25px" }}></i>
                        <p className="framer-text" style={{ "--font-selector": "RlM7U2F0b3NoaS1ib2xk", "--framer-font-family": "\"Satoshi\", \"Satoshi Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                          ASP.NET Core
                        </p>
                      </div>
                    </div>
                    <div className="framer-yisqt0">
                      <div className="framer-pxfzg0">
                        <div style={{ imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%" }} className="framer-yx1vns" aria-hidden="true" />
                        <div className="framer-vj6r1" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7Q2hpbGxheC1zZW1pYm9sZA==", "--framer-font-family": "\"Chillax\", \"Chillax Placeholder\", sans-serif", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.4px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            UI/UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1axlpmb">
                      <div className="framer-198itmh">
                        <div className="framer-1twnxb5" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "R0Y7UXVhbnRpY28tcmVndWxhcg==", "--framer-font-family": "\"Quantico\", \"Quantico Placeholder\", sans-serif", "--framer-font-size": "17px", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            SEO / Optimisation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-hidden="true" style={{ "willChange": "transform" }}>
                  <div className="framer-15uj8iw" style={{ flexShrink: "0", gap: "40px" }}>
                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "\"Poppins\", \"Panchang Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            HTML / CSS
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-m7x0ky">
                      <div className="framer-an6nl5" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <i className="devicon-javascript-plain" style={{ fontSize: "25px" }}></i>
                        <p className="framer-text" style={{ "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==", "--framer-font-family": "\"Paytone One\", \"Paytone One Placeholder\", sans-serif", "--framer-font-size": "17px", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                          JavaScript
                        </p>
                      </div>
                    </div>

                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "\"Poppins\", \"Panchang Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            Autodidacte
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="framer-dj1ob4">
                      <i className="devicon-nextjs-original-wordmark" style={{ fontSize: "95px" }}></i>
                    </div>

                    <div className="framer-b3x7k0">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ fontSize: "21px", "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "sans-serif", "--framer-font-weight": "500", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            Flexibilité
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="framer-z7f0bv">
                      <div className="framer-14z0xme" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <i className="devicon-dot-net-plain" style={{ fontSize: "25px" }}></i>
                        <p className="framer-text" style={{ "--font-selector": "RlM7U2F0b3NoaS1ib2xk", "--framer-font-family": "\"Satoshi\", \"Satoshi Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                          ASP.NET Core
                        </p>
                      </div>
                    </div>

                    <div className="framer-yisqt0">
                      <div className="framer-pxfzg0">
                        <div style={{ imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%" }} className="framer-yx1vns" aria-hidden="true" />
                        <div className="framer-vj6r1" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7Q2hpbGxheC1zZW1pYm9sZA==", "--framer-font-family": "\"Chillax\", \"Chillax Placeholder\", sans-serif", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.4px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            UI/UX Design
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="framer-1axlpmb">
                      <div className="framer-198itmh">
                        <div className="framer-1twnxb5" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "R0Y7UXVhbnRpY28tcmVndWxhcg==", "--framer-font-family": "\"Quantico\", \"Quantico Placeholder\", sans-serif", "--framer-font-size": "17px", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            SEO / Optimisation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-hidden="true" style={{ "willChange": "transform" }}>
                  <div className="framer-15uj8iw" style={{ flexShrink: "0", gap: "40px" }}>
                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "\"Poppins\", \"Panchang Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            HTML / CSS
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-m7x0ky">
                      <div className="framer-an6nl5" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <i className="devicon-javascript-plain" style={{ fontSize: "25px" }}></i>
                        <p className="framer-text" style={{ "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==", "--framer-font-family": "\"Paytone One\", \"Paytone One Placeholder\", sans-serif", "--framer-font-size": "17px", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                          JavaScript
                        </p>
                      </div>
                    </div>

                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "\"Poppins\", \"Panchang Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            Autodidacte
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="framer-dj1ob4">
                      <i className="devicon-nextjs-original-wordmark" style={{ fontSize: "95px" }}></i>
                    </div>

                    <div className="framer-11n6isv">
                      <div className="framer-o7icon" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                        <p className="framer-text" style={{ fontSize: "21px", "--font-selector": "RlM7UGFuY2hhbmctYm9sZA==", "--framer-font-family": "sans-serif", "--framer-font-weight": "500", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                          Flexibilité
                        </p>
                      </div>
                    </div>

                    <div className="framer-z7f0bv">
                      <div className="framer-14z0xme" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <i className="devicon-dot-net-plain" style={{ fontSize: "25px" }}></i>
                        <p className="framer-text" style={{ "--font-selector": "RlM7U2F0b3NoaS1ib2xk", "--framer-font-family": "\"Satoshi\", \"Satoshi Placeholder\", sans-serif", "--framer-font-weight": "700", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                          ASP.NET Core
                        </p>
                      </div>
                    </div>

                    <div className="framer-yisqt0">
                      <div className="framer-pxfzg0">
                        <div style={{ imageRendering: "pixelated", flexShrink: "0", backgroundSize: "100% 100%" }} className="framer-yx1vns" aria-hidden="true" />
                        <div className="framer-vj6r1" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "RlM7Q2hpbGxheC1zZW1pYm9sZA==", "--framer-font-family": "\"Chillax\", \"Chillax Placeholder\", sans-serif", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.4px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            UI/UX Design
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="framer-1axlpmb">
                      <div className="framer-198itmh">
                        <div className="framer-1twnxb5" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: "0", transform: "none" }}>
                          <p className="framer-text" style={{ "--font-selector": "R0Y7UXVhbnRpY28tcmVndWxhcg==", "--framer-font-family": "\"Quantico\", \"Quantico Placeholder\", sans-serif", "--framer-font-size": "17px", "--framer-letter-spacing": "0px", "--framer-text-alignment": "left" } as React.CSSProperties}>
                            SEO / Optimisation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
      {/* section Profil - home */}
      <section className="consulting-section flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
          <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
            <div className="max-w-xl">
              <Badge className="rounded-full py-1 border-none">
                Développeur Full Stack · Passionné DevOps

              </Badge>
              <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
                Je suis Sofian Belbacha, Développeur Passionné
              </h1>
              <p className="mt-6 max-w-[60ch] xs:text-lg">
                Polyvalent, je conçois des applications performantes, sécurisées et modernes.
                Je me forme actuellement au DevOps (CI/CD, automatisation, cloud) pour élargir mes compétences.
                Ouvert aux opportunités professionnelles, je cherche à intégrer une équipe dynamique et passionnée.

              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
                <Link href="/Profil">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base cursor-pointer">
                    Voir mon Profil
                    <ArrowUpRight className="!h-5 !w-5" />
                  </Button>
                </Link>
                <Link href={"/personal/CV_Portfolio_Belbacha.pdf"} target="_blank">
                  <Button variant="outline" size="lg" className="sm:w-auto rounded-full text-base shadow-none cursor-pointer">
                    <Download className="!h-5 !w-5" /> Télecharger mon CV
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
              <Image
                src="https://images.pexels.com/photos/4976712/pexels-photo-4976712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                fill
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section Objectifs de Carrière */}
      <section className="consulting-section flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
          <h2 className="consulting-section-title text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            Objectifs de Carrière
          </h2>
          <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Mon ambition est de bâtir une carrière solide en tant que <span className="text-white">Développeur et Ingénieur DevOps</span>, en combinant passion pour la technologie et quête d&apos;excellence !
          </p>
        </div>
        <div className="consulting-section-items-list grid gap-2.5 grid-rows-2 grid-cols-3 justify-center max-w-[1200px] w-full relative">
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <div className="relative z-10 flex items-center justify-center w-min p-0  rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{ "background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)", "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset" }}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <g color="rgb(153, 153, 153)"><path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path>
                  </g>
                </svg>
              </div>
              <div className="absolute inset-0 mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Développement Backend
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Maîtriser des technologie Backend/BaaS et bases de données pour concevoir des applications performantes et évolutives.
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <div className="relative z-10 flex items-center justify-center w-min p-0  rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{ "background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)", "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset" }}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0  mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Automatisation & DevOps
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Déployer des solutions CI/CD (GitLab CI, GitHub Actions) et gérer des infrastructures Cloud modernes (AWS, Azure).
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <div className="relative z-10 flex items-center justify-center w-min p-0  rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{ "background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)", "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset" }}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z">
                  </path>
                </svg>
              </div>
              <div className="absolute inset-0  mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Sécurité Informatique
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Intégrer des bonnes pratiques de sécurité dès le développement jusqu&apos;au déploiement pour des applications fiables.            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <div className="relative z-10 flex items-center justify-center w-min p-0  rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{ "background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)", "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset" }}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"></path>
                </svg>
              </div>
              <div className="absolute inset-0  mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Monitoring & Observabilité
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Mise en place des outils pour garantir la disponiblité et renforcer la scabilité des systèmes.
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <div className="relative z-10 flex items-center justify-center w-min p-0  rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{ "background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)", "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset" }}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0  mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Travail en Équipe
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Collaborer efficacement en équipes Scrum/Kanban pour livrer des projets de qualité.
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <div className="relative z-10 flex items-center justify-center w-min p-0  rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{ "background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)", "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset" }}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0  mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Formation Continue
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Se former régulièrement aux dernières technologies pour rester à la pointe de l&apos;innovation.
            </p>
          </div>
        </div>
      </section>
      {/* section expértise */}
      <section className="other-items-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
          <h2 className="text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            Mon expertise au service de vos projets techniques
          </h2>
          <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Je mets mes compétences au service de projets ambitieux, conçus pour être
            <span className="text-white"> fiable, durable et évolutive </span>
            avec une attention particulière à chaque détail.
          </p>
        </div>
        <div className="other-section-items-list grid gap-2.5 grid-rows-2 grid-cols-3 justify-center max-w-[1200px] w-full relative">
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            <div className="absolute inset-0 bg-[#33DDFF]/[0] group-hover:bg-[#33DDFF]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Analyse & Conception
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Je définis une architecture adaptée à vos besoins. Chaque projet commence par une compréhension fine de vos enjeux.
            </p>
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              <div className="w-[12px] h-[12px] rounded-full bg-[#33DDFF] flex-none" />
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#33DDFF] font-[Inter] whitespace-nowrap">
                  Analyse et conception
                </p>
              </div>
              <div className="absolute inset-0 bg-[#33DDFF] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            <div className="absolute inset-0 bg-[#E74C3C]/[0] group-hover:bg-[#E74C3C]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Développement
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Je développe des solutions performantes, fiables et évolutives. Mon code est pensé pour être maintenable, sécurisé et optimisé.
            </p>
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              <div className="w-[12px] h-[12px] rounded-full bg-[#E74C3C] flex-none" />
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#E74C3C] font-[Inter] whitespace-nowrap">
                  Développement
                </p>
              </div>
              <div className="absolute inset-0 bg-[#E74C3C] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            <div className="absolute inset-0 bg-[#2ECC71]/[0] group-hover:bg-[#2ECC71]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Intégration & Tests
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Chaque fonctionnalité est testée et validée. Je privilégie une démarche qualité pour garantir la stabilité de vos projets.
            </p>
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              <div className="w-[12px] h-[12px] rounded-full bg-[#2ECC71] flex-none" />
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#2ECC71] font-[Inter] whitespace-nowrap">
                  Intégration & Tests
                </p>
              </div>
              <div className="absolute inset-0 bg-[#2ECC71] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            <div className="absolute inset-0 bg-[#FF9300]/[0] group-hover:bg-[#FF9300]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Déploiement & Suivi
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Je vous accompagne jusqu’à la mise en production, avec un suivi pour assurer la pérennité et l’évolution de vos solutions.
            </p>
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              <div className="w-[12px] h-[12px] rounded-full bg-[#FF9300] flex-none" />
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#FF9300] font-[Inter] whitespace-nowrap">
                  Déploiement
                </p>
              </div>
              <div className="absolute inset-0 bg-[#FF9300] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            <div className="absolute inset-0 bg-[#A956F7]/[0] group-hover:bg-[#A956F7]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Optimisation continue
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Au-delà du déploiement, j&apos;optimise vos projets pour maximiser leur performance, leur sécurité et leur évolutivité.
            </p>
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              <div className="w-[12px] h-[12px] rounded-full bg-[#A956F7] flex-none" />
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#A956F7] font-[Inter] whitespace-nowrap">
                  Optimisation
                </p>
              </div>
              <div className="absolute inset-0 bg-[#A956F7] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            <div className="absolute inset-0 bg-[#FFFFFF]/[0] group-hover:bg-[#FFFFFF]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{ "background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)" }}>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Sécurité
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Je prends en compte la sécurité en respectent les bonnes pratiques pour protéger les données de vos utilisateurs.
            </p>
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              <div className="w-[12px] h-[12px] rounded-full bg-[#FFFFFF] flex-none" />
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#FFFFFF] font-[Inter] whitespace-nowrap">
                  Sécurité
                </p>
              </div>
              <div className="absolute inset-0 bg-[#FFFFFF] opacity-10 pointer-events-none" />
            </div>
          </div>
        </div>
        <Link href="/Skills" className="flex items-center justify-center gap-2 h-[44px] px-4 bg-zinc-900 hover:bg-[rgb(255,255,255)] text-white hover:text-black text-sm font-semibold border cursor-pointer overflow-hidden relative transition" style={{ "willChange": "transform", "borderRadius": "12px", "borderColor": "rgb(255, 255, 255)" }}>
          Voir Mes Compétences
        </Link>
      </section>
      {/* section présentation du portfolio */}
      <section className="cybersecurity-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[700px]">
          <h2 className="cybersecurity-section-title text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            Présentation du Portfolio
          </h2>
          <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Bienvenue sur mon portfolio, une vitrine performante construite avec des
            <span className="text-white"> technologies modernes du web</span>
          </p>
        </div>
        <HomePortfolio />
      </section>
    </>
  );
}
