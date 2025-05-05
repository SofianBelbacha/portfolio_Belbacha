"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/logo_portfolio.png"
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Header() {
    const itemNavRef = useRef<HTMLDivElement>(null);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleMenuClick = () => {
        const itemNav = itemNavRef.current;
        if (!itemNav) return;

        if (!isNavOpen) {
            itemNav.style.opacity = "1";
        }

        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="fixed top-0 w-full clearNav z-50">
            <div className="header-sm mx-auto flex flex-wrap flex-col md:hidden justify-between p-2"
                style={{ padding: 12 }}>
                <div className="flex items-center justify-between  w-full">
                    <div className="flex flex-row items-center justify-start gap-2 relative cursor-pointer text-decoration-none">
                        <Image src={Logo} alt="Logo Portfolio Sofian" width={35} height={35} className="w-[35px] h-[35px]" />
                        <Link
                            href="/"
                            className="leading-[28px] tracking-[-0.8px] text-white"
                            style={{ fontSize: 20, fontWeight: 700 }}
                        >
                            SOFIAN
                        </Link>
                    </div>
                    <div className="menu relative w-10 h-10 flex-none" onClick={handleMenuClick}>
                        <div className="absolute top-[37.5%] left-1/2 w-5 h-0.5 bg-[#999] rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute top-[62.5%] left-1/2 w-5 h-0.5 bg-[#999] rounded-full -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div ref={itemNavRef} className={`item-nav flex-col items-start justify-start w-full gap-0 p-5 transition-all duration-300 ${isNavOpen ? "flex opacity-100 sm-nav-link-opened" : "hidden opacity-0"
                    }`}
                >
                    <Link href="/Profil" onClick={() => setIsNavOpen(false)} className="mr-11 pr-2 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                        Profil
                    </Link>
                    <Link href="./Portfolio" onClick={() => setIsNavOpen(false)} className="mr-12 ml-0 md:ml-11 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                        Portfolio
                    </Link>
                    <Link href="/Skills" onClick={() => setIsNavOpen(false)} className="mr-5 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                        Compétences
                    </Link>
                    <Link href="/Blog" className="mr-5 cursor-pointer text-white hover:text-white font-semibold transition duration-300"
                        onClick={(e) => {
                            e.preventDefault(),
                                toast("En cours...", {
                                    description: "Page en cours de développement",
                                    action: {
                                        label: "Fermer",
                                        onClick: () => console.log("Fermer"),
                                    },
                                })
                        }
                        }
                    >
                        Blog
                    </Link>
                    <div className="flex items-center gap-5">
                        <Link href="https://www.linkedin.com/in/sofian-belbacha/" rel="noopener noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </Link>
                        <Link href="https://github.com/SofianBelbacha" rel="noopener noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </Link>
                    </div>

                </div>
                <div
                    className="bottom_nav_style"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: 10,
                        opacity: 1
                    }}
                />
            </div>
            <div className="mx-auto md:flex flex-wrap p-5 hidden md:flex-row h-[64px] items-center"
                style={{ padding: 10 }}>
                <div className="flex flex-row items-center justify-start gap-2 relative cursor-pointer text-decoration-none">
                    <Image src={Logo} alt="Logo Portfolio Sofian" width={35} height={35} className="w-[35px] h-[35px]" />
                    <Link href="/"
                        className="leading-[28px] tracking-[-0.8px] text-white"
                        style={{ fontSize: 20, fontWeight: 700 }}>
                        SOFIAN
                    </Link>
                </div>
                <div className="md:flex flex-grow items-center hidden">
                    <div className="md:ml-auto md:mr-auto font-Inter flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
                        <Link href="/Profil" className="mr-5 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                            Profil
                        </Link>
                        <Link href="/Portfolio" className="mr-5 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                            Portfolio
                        </Link>
                        <Link href="/Skills" className="mr-5 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                            Compétences
                        </Link>
                        <Link href="/Blog" className="mr-5 cursor-pointer text-white hover:text-white font-semibold transition duration-300"
                            onClick={(e) => {
                                e.preventDefault(),
                                    toast("En cours...", {
                                        description: "Page en cours de développement",
                                        action: {
                                            label: "Fermer",
                                            onClick: () => console.log("Fermer"),
                                        },
                                    })
                            }
                            }
                        >
                            Blog
                        </Link>
                    </div>
                </div>
                <div className="md:flex items-center hidden w-[127.5px] justify-center">
                    <Link href="https://www.linkedin.com/in/sofian-belbacha/" rel="noopener noreferrer" target="_blank" className="invisible md:visible">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </Link>
                    <Link href="https://github.com/SofianBelbacha" rel="noopener noreferrer" target="_blank" className="pl-7 invisible md:visible" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </Link>
                </div>
                <div
                    className="bottom_nav_style"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: 10,
                        opacity: 1
                    }}
                />
            </div>
        </header>
    );
}
