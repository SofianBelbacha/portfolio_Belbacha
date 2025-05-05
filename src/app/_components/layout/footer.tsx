import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative w-full flex flex-col items-center justify-start gap-[30px] p-[80px_40px] overflow-hidden bg-black">
            <div className="contents">
                <div style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none", opacity: 1 }}>
                    <h4 className="text-[20px] font-bold text-white">SOFIAN</h4>
                </div>
            </div>
            <div
                className="relative flex flex-row items-center justify-center gap-[20px] rounded-full overflow-visible p-0 w-min">
                <div className="contents">
                    <Link className="text-white font-semibold" data-highlight="true"
                        href="./#expertise" tabIndex={0} style={{ opacity: 1 }}>
                        Profil
                    </Link>
                </div>
                <div className="contents">
                    <Link className="text-white font-semibold" data-highlight="true"
                        href="./#Services" tabIndex={1} style={{ opacity: 1 }}>
                        Portfolio
                    </Link>
                </div>
                <div className="contents">
                    <Link className="text-white font-semibold" data-highlight="true"
                        href="./#Solutions" tabIndex={2} style={{ opacity: 1 }}>
                        Compétences
                    </Link>
                </div>
                <div className="contents">
                    <Link className="text-white font-semibold" data-highlight="true"
                        href="./#Pricing" tabIndex={3} style={{ opacity: 1 }}>
                        Blog
                    </Link>
                </div>
            </div>
            <div className="md:flex items-center hidden">
                <Link href="https://www.linkedin.com/in/sofian-belbacha/" rel="noopener noreferrer" target="_blank" className="invisible md:visible">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </Link>
                <Link href="https://github.com/SofianBelbacha" rel="noopener noreferrer" target="_blank" className="pl-7 invisible md:visible" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </Link>
            </div>
            <div className="relative w-auto opacity-50 text-[#FFFFFF]"
                style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none" }}>
                <p className="text-[14px] font-semibold">© 2025 Sofian, Inc. All rights reserved.</p>
            </div>
            <div className="relative w-auto opacity-50 text-[#FFFFFF]"
                style={{ outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none" }}>
                <p className="text-[14px] font-semibold">Built by Sofian</p>
            </div>
        </footer>

    )
};
