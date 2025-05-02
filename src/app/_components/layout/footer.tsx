import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full flex flex-col items-center justify-start gap-[30px] p-[80px_40px] overflow-hidden bg-black">
    <div className="contents">
        <div style={{outline: "none", display: "flex", flexDirection: "column", justifyContent: "flex-start", flexShrink: 0, transform: "none", opacity: 1}}>
            <h4 className="text-[20px] font-bold text-white">SOFIAN
            </h4>
        </div>
    </div>
    <div
        className="relative flex flex-row items-center justify-center gap-[20px] rounded-full overflow-visible p-0 w-min">
        <div className="contents">
            <Link className="text-white font-semibold" data-highlight="true"
                href="./#expertise" tabIndex={0} style={{opacity: 1}}>
                Profil
            </Link>
        </div>
        <div className="contents">
            <Link className="text-white font-semibold" data-highlight="true"
                href="./#Services" tabIndex={1} style={{opacity: 1}}>
                Portfolio
            </Link>
        </div>
        <div className="contents">
            <Link className="text-white font-semibold" data-highlight="true"
                href="./#Solutions" tabIndex={2} style={{opacity: 1}}>
                Compétences
            </Link>
        </div>
        <div className="contents">
            <Link className="text-white font-semibold" data-highlight="true"
                href="./#Pricing" tabIndex={3} style={{opacity: 1}}>
                Blog
            </Link>
        </div>
    </div>
    <div className="md:flex items-center hidden">
        <Link href="https://twitter.com/" rel="noopener noreferrer" target="_blank" className="invisible md:visible">
            <svg width="24" height="24" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg"
                fill="none" className="opacity-[0.7]">
                <path data-v-54e46119=""
                    d="M15.4528 40C34.0158 40 44.1732 24.6063 44.1732 11.2796C44.1732 10.8465 44.1732 10.4134 44.1536 9.98031C46.122 8.56299 47.8347 6.77166 49.1929 4.74409C47.3819 5.55118 45.4331 6.08268 43.3858 6.33858C45.4724 5.09842 47.0669 3.11023 47.8347 0.74803C45.8858 1.90944 43.7204 2.73622 41.4173 3.18898C39.5669 1.22047 36.9488 0 34.0551 0C28.4842 0 23.9567 4.52756 23.9567 10.0984C23.9567 10.8858 24.0551 11.6536 24.2126 12.4016C15.8268 11.9882 8.38582 7.95276 3.40551 1.85039C2.53937 3.34646 2.04724 5.07874 2.04724 6.92913C2.04724 10.4331 3.83859 13.5237 6.53543 15.3347C4.88189 15.2756 3.32677 14.8228 1.9685 14.0748C1.9685 14.1142 1.9685 14.1536 1.9685 14.2126C1.9685 19.0944 5.45276 23.189 10.0591 24.1142C9.2126 24.3504 8.32677 24.4686 7.40158 24.4686C6.75197 24.4686 6.12204 24.4094 5.51181 24.2913C6.79133 28.3071 10.5315 31.2204 14.9409 31.2992C11.4763 34.0158 7.12599 35.6299 2.40158 35.6299C1.59449 35.6299 0.787401 35.5906 0 35.4921C4.44882 38.3268 9.76378 40 15.4528 40Z"
                    fill="white"></path>
            </svg>
        </Link>
        <Link data-v-54e46119="" href="https://github.com/" rel="noopener noreferrer" target="_blank"
            className="pl-7 invisible md:visible">
            <svg data-v-54e46119="" width="24" height="24" viewBox="0 0 25 24" fill="none"
                xmlns="http://www.w3.org/2000/svg" className="github-link--logo opacity-[0.7]">
                <path data-v-54e46119="" fillRule="evenodd" clipRule="evenodd"
                    d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
                    fill="white">
                </path>
            </svg>
        </Link>
    </div>
    <div className="relative w-auto opacity-50 text-[#FFFFFF]"
        style={{outline:"none",display:"flex",flexDirection:"column",justifyContent:"flex-start",flexShrink:0,transform:"none"}}>
        <p className="text-[14px] font-semibold">© 2025 Sofian, Inc. All rights reserved.</p>
    </div>
    <div className="relative w-auto opacity-50 text-[#FFFFFF]"
        style={{outline:"none",display:"flex",flexDirection:"column",justifyContent:"flex-start",flexShrink:0,transform:"none"}}>
        <p className="text-[14px] font-semibold">Built by Sofian</p>
    </div>
    </footer>

)};
