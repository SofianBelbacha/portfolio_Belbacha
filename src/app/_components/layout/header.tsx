"use client";

import Image from "next/image";
import Logo from "@/../public/logo_portfolio.png"
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ModeToggle } from "@/app/_components/ui/modeToggle";
import { ChevronDown } from "lucide-react";

const locales = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' }
] as const;


export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const t = useTranslations('common.nav');
    const itemNavRef = useRef<HTMLDivElement>(null);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [open, setOpen] = useState(false);


    const handleMenuClick = () => {
        const itemNav = itemNavRef.current;
        if (!itemNav) return;

        if (!isNavOpen) {
            itemNav.style.opacity = "1";
        }

        setIsNavOpen(!isNavOpen);
    };

    const changeLocale = (nextLocale: string) => {
        router.replace(pathname, { locale: nextLocale });
        setOpen(false);
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
                            className="leading-[28px] tracking-[-0.8px] text-white nav-link"
                            style={{ fontSize: 20, fontWeight: 700 }}
                        >
                            {t('brand')}
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
                    <Link href="/profil" onClick={() => setIsNavOpen(false)} className="mr-11 pr-2 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                        {t('links.profil')}
                    </Link>
                    <Link href="/portfolio" onClick={() => setIsNavOpen(false)} className="mr-12 ml-0 md:ml-11 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                        {t('links.portfolio')}
                    </Link>
                    <Link href="/skills" onClick={() => setIsNavOpen(false)} className="mr-5 cursor-pointer text-white hover:text-white font-semibold transition duration-300">
                        {t('links.skills')}
                    </Link>
                    <Link href="/blog" className="mr-5 cursor-pointer text-white hover:text-white font-semibold transition duration-300"
                        onClick={(e) => {
                            e.preventDefault();
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
                        {t('links.blog')}
                    </Link>
                    <div className="flex items-center gap-5">
                        <ModeToggle />
                        <div className="relative">
                            {/* Trigger */}
                            <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 text-sm font-medium transition
                                dark:border-white/15 dark:bg-black/40 dark:text-white dark:hover:border-white/30 dark:backdrop-blur">
                                <span>{locale.toUpperCase()}</span>
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform ${open ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {/* Dropdown */}
                            {open && (
                                <div className="absolute right-0 mt-2 w-36 rounded-xl border border-zinc-200 bg-white shadow-xl overflow-hidden z-50 dark:border-white/10 dark:bg-black/90 dark:backdrop-blur ">
                                    {locales.map((l) => (
                                    <button
                                        key={l.code}
                                        onClick={() => changeLocale(l.code)}
                                        className={`w-full text-left px-4 py-2 text-sm transition
                                        text-zinc-700 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white
                                        ${locale === l.code ? 'font-semibold bg-zinc-100 dark:bg-white/10 dark:text-white' : ''}`}
                                    >
                                        {l.label}
                                    </button>
                                    ))}
                                </div>
                            )}
                        </div>                
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
                        className="leading-[28px] tracking-[-0.8px] nav-link"
                        style={{ fontSize: 20, fontWeight: 700 }}>
                        SOFIAN
                    </Link>
                </div>
                <div className="md:flex flex-grow items-center hidden">
                    <div className="md:ml-auto md:mr-auto font-Inter flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
                        <Link href="/profil" className="mr-5 cursor-pointer nav-link">
                            {t('links.profil')}
                        </Link>
                        <Link href="/portfolio" className="mr-5 cursor-pointer nav-link">
                            {t('links.portfolio')}
                        </Link>
                        <Link href="/skills" className="mr-5 cursor-pointer nav-link">
                            {t('links.skills')}
                        </Link>
                        <Link href="/blog" className="mr-5 cursor-pointer nav-link"
                            onClick={(e) => {
                                e.preventDefault();
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
                            {t('links.blog')}
                        </Link>
                    </div>
                </div>
                <div className="md:flex items-center hidden w-[127.5px] gap-2 justify-center">
                    <ModeToggle />
                    <div className="relative">
                        {/* Trigger */}
                        <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 text-sm font-medium transition
                            dark:border-white/15 dark:bg-black/40 dark:text-white dark:hover:border-white/30 dark:backdrop-blur">
                            <span>{locale.toUpperCase()}</span>
                            <ChevronDown
                                size={14}
                                className={`transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {/* Dropdown */}
                        {open && (
                            <div className="absolute right-0 mt-2 w-36 rounded-xl border border-zinc-200 bg-white shadow-xl overflow-hidden z-50 dark:border-white/10 dark:bg-black/90 dark:backdrop-blur ">
                                {locales.map((l) => (
                                <button
                                    key={l.code}
                                    onClick={() => changeLocale(l.code)}
                                    className={`w-full text-left px-4 py-2 text-sm transition
                                    text-zinc-700 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white
                                    ${locale === l.code ? 'font-semibold bg-zinc-100 dark:bg-white/10 dark:text-white' : ''}`}
                                >
                                    {l.label}
                                </button>
                                ))}
                            </div>
                        )}
                    </div>                
                </div>
                <div
                    className="bottom_nav_style bg-black/20 dark:bg-white/10"
                    style={{
                        borderRadius: 10,
                        opacity: 1
                    }}
                />
            </div>
        </header>
    );
}
