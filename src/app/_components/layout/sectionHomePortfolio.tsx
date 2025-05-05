'use client';
import Image from 'next/image';
import firebaseVercel from '@/../public/firebase&vercel.png'
import { useEffect } from 'react';

export default function HomePortfolio() {
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
                                <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform" style={{ "backgroundColor": "rgb(255, 221, 255)", "borderRadius": "4px", "opacity": "1" }}>
                                </div>
                                <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                    <p className="text-[12px] text-white font-semibold">Framework Moderne</p>
                                </div>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[#fff] text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                                    La Puissance de Next.js au Service de ce Portfolio
                                </h3>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                                <p className="font-inter font-medium text-[#888888] text-[20px] leading-[28px] tracking-[-0.5px] text-start transform-none">
                                    Next.js permet un rendu ultra-rapide, une navigation fluide entre les pages, et une excellente optimisation SEO. Grâce à son système hybride SSR/SSG, ce portfolio bénéficie à la fois de performances et de flexibilité.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{ "opacity": "1" }}>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{ "userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "color": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": "0" }}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                                    <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                                    </path>
                                                </g>
                                            </svg>
                                            </div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Rendu côté serveur (SSR)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-up-icon lucide-monitor-up"><path d="m9 10 3-3 3 3" /><path d="M12 13V7" /><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M12 17v4" /><path d="M8 21h8" /></svg>
                                            </div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Optimisation SEO native</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{ "userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "color": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": "0" }}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                                    <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
                                                </g>
                                            </svg></div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Navigation rapide & fluide</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{ "userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "color": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": "0" }}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                                    <path d="M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z"></path>                                </g>
                                            </svg></div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">UX moderne et performante</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-scale flex flex-col gap-5 justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]" style={{ "willChange": "transform" }}>
                            <div className="absolute inset-0 rounded-inherit">
                                <Image fill src="https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="..." className="block h-full w-full object-contain rounded-inherit animated-image" style={{ "maxWidth": "100%" }} />
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
                                <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform" style={{ "backgroundColor": "rgb(255, 221, 255)", "borderRadius": "4px", "opacity": "1" }}>
                                </div>
                                <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                    <p className="text-[12px] text-white font-semibold">Propulsé par Firebase</p>
                                </div>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[#fff] text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                                    Intégration de Firebase & déploiement sur Vercel
                                </h3>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                                <p className="font-inter font-medium text-[#888888] text-[20px] leading-[28px] tracking-[-0.5px] text-start transform-none">
                                    Mon portfolio est développé avec Next.js, et déployé sur Vercel pour des performances optimales et une prise en charge native du rendu côté serveur (SSR)
                                    Firebase pour la gestion des données dynamiques via Firestore.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{ "opacity": "1" }}>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{ "userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "color": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": "0" }}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                                    <path d="M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm-8,24H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm80-64H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm80-96H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM184,72h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16Zm48,48H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"></path>                                </g>
                                            </svg>
                                            </div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Synchronisation en temps réel</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                                            </div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Sécurité intégrée</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hard-drive-upload-icon lucide-hard-drive-upload"><path d="m16 6-4-4-4 4" /><path d="M12 2v8" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 18h.01" /><path d="M10 18h.01" /></svg></div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Hébergement Serverless</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-chart-gantt-icon lucide-square-chart-gantt"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 8h7" /><path d="M8 12h6" /><path d="M11 16h5" /></svg></div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Déploiement instantané (Vercel)</p>
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
                                <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform" style={{ "backgroundColor": "rgb(255, 221, 255)", "borderRadius": "4px", "opacity": "1" }}>
                                </div>
                                <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                    <p className="text-[12px] text-white font-semibold">Stylisation Utilitaire</p>
                                </div>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[#fff] text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                                    Développement Front-End Efficace
                                </h3>
                            </div>
                            <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                                <p className="font-inter font-medium text-[#888888] text-[20px] leading-[28px] tracking-[-0.5px] text-start transform-none">
                                    Mon portfolio utilise Tailwind CSS pour construire rapidement des interfaces modernes, sans sacrifier la personnalisation. Cela me permet de garder un contrôle précis sur le design tout en assurant de bonnes performances.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{ "opacity": "1" }}>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{ "userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "color": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": "0" }}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                                    <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                                    </path>
                                                </g>
                                            </svg></div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Design Adaptatif</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-fading-arrow-up-icon lucide-circle-fading-arrow-up"><path d="M12 2a10 10 0 0 1 7.38 16.75" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" /><path d="M2.5 8.875a10 10 0 0 0-.5 3" /><path d="M2.83 16a10 10 0 0 0 2.43 3.4" /><path d="M4.636 5.235a10 10 0 0 1 .891-.857" /><path d="M8.644 21.42a10 10 0 0 0 7.631-.38" /></svg></div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Maintenabilité améliorée</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{ "userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "color": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": "0" }}><g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"><path d="M230.64,49.36a32,32,0,0,0-45.26,0h0a31.9,31.9,0,0,0-5.16,6.76L152,48.42A32,32,0,0,0,97.37,25.36h0a32.06,32.06,0,0,0-5.76,37.41L57.67,93.32a32.05,32.05,0,0,0-40.31,4.05h0a32,32,0,0,0,42.89,47.41l70,51.36a32,32,0,1,0,47.57-14.69l27.39-77.59q1.38.12,2.76.12a32,32,0,0,0,22.63-54.62Zm-122-12.69h0a16,16,0,1,1,0,22.64A16,16,0,0,1,108.68,36.67Zm-80,94.65a16,16,0,0,1,0-22.64h0a16,16,0,1,1,0,22.64Zm142.65,88a16,16,0,0,1-22.63-22.63h0a16,16,0,1,1,22.63,22.63Zm-8.55-43.18a32,32,0,0,0-23,7.08l-70-51.36a32.17,32.17,0,0,0-1.34-26.65l33.95-30.55a32,32,0,0,0,45.47-10.81L176,71.56a32,32,0,0,0,14.12,27Zm56.56-92.84A16,16,0,1,1,196.7,60.68h0a16,16,0,0,1,22.63,22.63Z"></path></g></svg>                            </div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Écosystème riche</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none h-auto relative w-auto" style={{ "opacity": "1" }}>
                                    <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{ "backgroundColor": "rgb(34, 34, 34)", "opacity": "1" }}>
                                        <div className=" flex-none h-6 relative w-6" style={{ "opacity": "1" }}>
                                            <div style={{ "display": "contents" }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cog-icon lucide-cog"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path d="M11 10.27 7 3.34" /><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M14 12h8" /><path d="M2 12h2" /><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m17 3.34-1 1.73" /><path d="m11 13.73-4 6.93" /></svg></div>
                                        </div>
                                        <div style={{ "outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": "0", "transform": "none", "opacity": "1" }}>
                                            <p className="text-[14px] font-semibold text-white">Compatiblilité</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-scale flex flex-col gap-5 justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]" style={{ "willChange": "transform" }}>
                            <div className="absolute inset-0 rounded-inherit">
                                <Image fill decoding="async" src="https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Realistic cloud design representing seamless cloud integration and enterprise-grade security. Ideal for showcasing cloud computing, scalable solutions, and innovative technology services." className="block h-full w-full object-contain rounded-inherit animated-image" style={{ "maxWidth": "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}