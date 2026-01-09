import HomePortfolio from "../_components/layout/sectionHomePortfolio";
import Image from "next/image";
import { Badge } from "../_components/ui/badge";
import { Button } from "../_components/ui/button";
import { ArrowUpRight, Download } from "lucide-react";
import { Metadata } from "next";
import CareerObjectivesSection from "../_components/layout/careerObjective";
import ApprocheWorkflowDevOps from "../_components/layout/approcheWorkflowDevOps";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'common.metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      url: `/${locale}`,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    },
  };
}

export default async function Home({params}: {params: { locale: string }}) {
  const { locale } = await params;

  const t = await getTranslations({locale, namespace: 'home.hero'});
  const tConsulting = await getTranslations({locale, namespace: 'home.consulting'});
  const tArchitecture = await getTranslations({locale, namespace: 'home.architecture'});

  return (
    <>
      {/* section header */}
      <section className="header-section flex flex-col items-center justify-center gap-5 h-screen w-full p-10 overflow-hidden relative">
        <div className="relative">
          <Badge variant="outline" className="badge-header text-md absolute bottom-25 badge-outline-theme">
            {t('badge')}
          </Badge>
          <h1 className="header-title text-[7vw] md:text-[90px] font-bold leading-[1.1] tracking-[-0.04em] bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent text-center w-full font-[Inter] gradient-title">
            <p>{t('title')}</p>
          </h1>
        </div>
        <div className="w-full max-w-[500px]">
          <p className="text-secondary tracking-[-0.8px] font-[Inter] font-semibold text-[24px] leading-[1.2] tracking-[-0.05em] text-[#999999] text-center">
            {t('subtitle')}
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 relative z-10">
          <Link href="#contact" className="flex items-center justify-center gap-2 h-[44px] px-4 rounded-[12px] text-sm font-semibold transition bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80" style={{ "willChange": "transform", "borderRadius": "12px" }}>
            {t('cta.contact')}
          </Link>
          <Link href="/portfolio" className="flex items-center justify-center gap-2 h-[44px] px-4 rounded-[12px] text-sm font-semibold transition border bg-white text-black border-black/30 hover:bg-black hover:text-white dark:bg-zinc-900 dark:text-white dark:border-white/30 dark:hover:bg-white dark:hover:text-black" style={{ "willChange": "transform", "borderRadius": "12px" }}>
            {t('cta.projects')} <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="framer-18azqax carrousel-header">
          <div className="framer-u4l76e" style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none" }}>
            <p className="framer-text framer-styles-preset-1m2icuf" style={{}}>
              {t('carouselTitle')}         
            </p>
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
                            {t('skills.autodidacte')}
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
                            {t('skills.flexibility')}
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
                            {t('skills.seo')}
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
                            {t('skills.autodidacte')}
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
                            {t('skills.flexibility')}
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
                            {t('skills.seo')}
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
                            {t('skills.autodidacte')}
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
                          {t('skills.flexibility')}
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
                            {t('skills.seo')}
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
            <div className="max-w-xl text-center lg:text-left">
              <Badge className="rounded-full py-1 border-none">
                {tConsulting('badge')}

              </Badge>
              <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
                {tConsulting('title')}
              </h1>
              <p className="mt-6 max-w-[60ch] xs:text-lg">
                {tConsulting('description')}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
                <Link href="/profil">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base cursor-pointer">
                    {tConsulting('cta.profile')}
                    <ArrowUpRight className="!h-5 !w-5" />
                  </Button>
                </Link>
                <a href={"/personal/CV_SOFIAN_BELBACHA.pdf"} target="_blank">
                  <Button variant="outline" size="lg" className="sm:w-auto rounded-full text-base shadow-none cursor-pointer badge-outline-theme">
                    <Download className="!h-5 !w-5" /> {tConsulting('cta.downloadCV')}
                  </Button>
                </a>
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
      <CareerObjectivesSection />
      {/* section expértise */}
      <ApprocheWorkflowDevOps />
      {/* section présentation du portfolio */}
      <section className="cybersecurity-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[700px]">
          <h2 className="text-[40px] md:text-[48px] lg:text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-center font-[Inter,sans-serif]">
            {tArchitecture('title')}
          </h2>
          <p className="subtitle">
              {tArchitecture.rich("subtitle", {
                  emphasis: (chunks) => (
                  <span className="subtitle-accent">{chunks}</span>
                  )
              })}
          </p>
        </div>
        <HomePortfolio />
      </section>
    </>
  );
}
