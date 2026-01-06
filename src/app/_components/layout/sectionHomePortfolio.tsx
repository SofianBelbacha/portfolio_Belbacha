'use client';
import {
  Server,
  MonitorUp,
  ShieldCheck,
  Zap,
  Pointer,
  Database,
  HardDriveUpload,
  SquareChartGantt,
  CircleFadingArrowUp,
  Cog,
  Grid,
  Settings
} from "lucide-react";
import Image from 'next/image';
import firebaseVercel from '@/../public/firebaseVercel.png'
import { useEffect } from 'react';
import { useTranslations } from "next-intl";

export default function HomePortfolio() {

    const tArchitecture = useTranslations('home.architecture');
    useEffect(() => {
        const wrappers = document.querySelectorAll(".scroll-scale");

        let ticking = false;

        function updateScale() {
            wrappers.forEach((wrapper) => {
                const rect = wrapper.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const targetY = windowHeight;
                const elementTop = rect.top;

                const progress = Math.max(0, Math.min(1, (targetY - elementTop) / (windowHeight * 0.4)));

                const scale = 0.7 + progress * 0.3;

                (wrapper as HTMLElement).style.transform = `scale(${Math.min(scale, 1).toFixed(3)})`;
            });

            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(updateScale);
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll);
        updateScale(); // call initially

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    },
        []);

    return (
        <div className="cybersecurity-section-items flex flex-col items-center justify-center gap-[100px] w-full max-w-[1200px] overflow-visible p-0 relative">
            <div className="contents">
                <div className="relative w-full h-auto flex-none">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-[60px] w-[1120px] overflow-hidden p-0 relative" style={{ "width": "100%", "opacity": "1", "paddingBottom": "1px" }}>
                        <div className="flex flex-col items-start justify-center gap-[20px] flex-[1_0_0px] h-min p-0 relative" style={{ "opacity": "1" }}>
                            <div className="flex flex-row items-center justify-center gap-[6px] h-[28px] px-[12px] overflow-hidden relative w-min flex-none border border-solid border-[#222426] bg-white/15" style={{ "opacity": "1" }}>
                                <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform bg-[rgb(var(--foreground))]" style={{ "borderRadius": "4px", "opacity": "1" }}>
                                </div>
                                <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                    <p className="text-[12px] font-semibold">{tArchitecture('nextjs.badge')}</p>
                                </div>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                                    {tArchitecture('nextjs.title')} 
                                </h3>
                            </div>
                            <p className="font-inter font-medium text-[20px] leading-[28px] tracking-[-0.5px] text-muted">
                                {tArchitecture('nextjs.description')}
                            </p>
                            <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{ "opacity": "1" }}>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <Server className="text-white"/>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('nextjs.features.ssr')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <MonitorUp className="text-white" />
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('nextjs.features.seo')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <Zap className="text-white"/>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('nextjs.features.performance')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <Pointer className="text-white"/>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('nextjs.features.ux')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-scale flex flex-col gap-5 justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]" style={{ "willChange": "transform" }}>
                            <div className="absolute inset-0 rounded-inherit">
                                <Image fill src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="..." className="block h-full w-full object-contain rounded-inherit animated-image" style={{ "maxWidth": "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contents">
                <div className="relative w-full h-auto flex-none">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-[60px] w-[1120px] overflow-hidden p-0 relative" style={{ "width": "100%", "opacity": "1" }}>
                        <div className="scroll-scale flex flex-col gap-5  justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]" style={{ "willChange": "transform" }}>
                            <div className="absolute inset-0 rounded-inherit">
                                <Image fill src={firebaseVercel} alt="..." className="animated-image block h-full w-full object-contain rounded-inherit" style={{ "maxWidth": "100%" }} />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[20px] flex-[1_0_0px] h-min p-0 relative" style={{ "opacity": "1" }}>
                            <div className="flex flex-row items-center justify-center gap-[6px] h-[28px] px-[12px] overflow-hidden relative w-min flex-none border border-solid border-[#222426] bg-white/15" style={{ "opacity": "1" }}>
                                <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform bg-[rgb(var(--foreground))]" style={{ "borderRadius": "4px", "opacity": "1" }}>
                                </div>
                                <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                    <p className="text-[12px] font-semibold">{tArchitecture('firebase.badge')}</p>
                                </div>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                                    {tArchitecture('firebase.title')}
                                </h3>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                                <p className="font-inter font-medium text-[20px] leading-[28px] tracking-[-0.5px] text-muted">
                                    {tArchitecture('firebase.description')}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{ "opacity": "1" }}>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <Database className="text-white"/>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('firebase.features.realtime')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <ShieldCheck className="text-white"/>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('firebase.features.security')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <HardDriveUpload className="text-white"/>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('firebase.features.serverless')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <SquareChartGantt className="text-white"/>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('firebase.features.vercel')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contents">
                <div className="relative w-full h-auto flex-none">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-[60px] w-[1120px] overflow-hidden p-0 relative" style={{ "width": "100%", "opacity": "1" }}>
                        <div className="cybersecurity-section-last-item flex flex-col items-start justify-center gap-[20px] flex-[1_0_0px] h-min p-0 relative" style={{ "opacity": "1" }}>
                            <div className="flex flex-row items-center justify-center gap-[6px] h-[28px] px-[12px] overflow-hidden relative w-min flex-none border border-solid border-[#222426] bg-white/15" style={{ "opacity": "1" }}>
                                <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform bg-[rgb(var(--foreground))]" style={{ "borderRadius": "4px", "opacity": "1" }}>
                                </div>
                                <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                    <p className="text-[12px] font-semibold">{tArchitecture('frontend.badge')}</p>
                                </div>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                                    {tArchitecture('frontend.title')}
                                </h3>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                                <p className="font-inter font-medium text-[20px] leading-[28px] tracking-[-0.5px] text-muted">
                                    {tArchitecture('frontend.description')}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{ "opacity": "1" }}>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <Grid className="text-white" />
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('frontend.features.responsive')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <CircleFadingArrowUp className="text-white" />
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('frontend.features.maintenance')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <Cog className="text-white" />
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('frontend.features.ecosystem')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <Settings className="text-white" />
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">{tArchitecture('frontend.features.compatibility')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-scale flex flex-col gap-5 justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]" style={{ "willChange": "transform" }}>
                            <div className="absolute inset-0 rounded-inherit">
                                <Image fill decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Realistic cloud design representing seamless cloud integration and enterprise-grade security. Ideal for showcasing cloud computing, scalable solutions, and innovative technology services." className="block h-full w-full object-contain rounded-inherit animated-image" style={{ "maxWidth": "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}