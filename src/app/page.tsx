'use client';
import Image from "next/image";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const images = document.querySelectorAll(".animated-image");
    const wrappers = document.querySelectorAll(".scroll-scale");

    let ticking = false;

    function updateScale() {
      wrappers.forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const targetY = windowHeight;
        const elementTop = rect.top;

        let progress = Math.max(0, Math.min(1, (targetY - elementTop) / (windowHeight * 0.4)));

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
  }, []);
  
  return (
    <>
      <section className="header-section flex flex-col items-center justify-center gap-5 h-screen w-full p-10 overflow-hidden relative">
        <div className="w-full">
          <h1 className="header-title text-[90px] font-bold leading-[1.1] tracking-[-0.04em] text-white text-center font-[Inter]">
            Your Security, Our Priority
          </h1>
        </div>
        <div className="w-full max-w-[500px]">
          <p className="tracking-[-0.8px] font-[Inter] font-semibold text-[24px] leading-[1.2] tracking-[-0.05em] text-[#999999] text-center">
            Protect Your Digital Presence with Real-Time Threat Detection
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 relative z-10">
          {/* Primary Button */}
          <a href="#contact" className="flex items-center justify-center gap-2 h-[44px] px-4 text-white bg-[rgb(77,142,255)] hover:bg-[rgb(46,102,199)] text-sm font-semibold cursor-pointer overflow-hidden relative transition" style={{"willChange":"transform","borderRadius":"12px"}}>
            Request Demo
          </a>
          {/* Dark Button */}
          <a href="#solutions" className="flex items-center justify-center gap-2 h-[44px] px-4 bg-zinc-900 hover:bg-[rgb(77,142,255)] text-white text-sm font-semibold border cursor-pointer overflow-hidden relative transition" style={{"willChange":"transform","borderRadius":"12px","borderColor": "rgb(77, 142, 255)"}}>
            Explore Features
          </a>
        </div>
        <div className="framer-18azqax carrousel-header">
          <div className="framer-u4l76e" style={{outline:"none",display:"flex",flexDirection:"column",justifyContent:"flex-start",flexShrink:0,transform:"none"}}>
            <p className="framer-text framer-styles-preset-1m2icuf" style={{}}>
              Trusted by top innovative teams</p>
          </div>
          <div className="framer-cwblq8-container carrousel-items">{/*$*/}
            <section style={{"display":"flex","width":"100%","height":"100%","maxWidth":"100%","maxHeight":"100%","placeItems":"center","margin":"0px","padding":"0px","listStyleType":"none","opacity":"1","maskImage":"linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.5%, rgb(0, 0, 0) 82.5%, rgba(0, 0, 0, 0) 100%)","overflow":"hidden"}}>
              <ul id="carousel" style={{"display":"flex","width":"100%","height":"100%","maxWidth":"100%","maxHeight":"100%","placeItems":"center","margin":"0px","padding":"0px","listStyleType":"none","gap":"10px","flexDirection":"row","willChange":"transform","transform":"translateX(0px)","left":"-2560px"}}>
                <li>
                  <div className="framer-15uj8iw" style={{"flexShrink":"0"}}>
                    <div className="framer-1bwf1nm">
                      <div className="framer-5z15hs">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100%"}} className="framer-8n6oob" aria-hidden="true" />
                        <div className="framer-1fjqka3" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--fontSelector":"RlM7U2F0b3NoaS1ib2xk","--framer-font-family":"\"Satoshi\", \"Satoshi Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Acme Corp</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-m7x0ky">
                      <div className="framer-an6nl5">
                        <div className="framer-1ooo265" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==","--framer-font-family":"\"Paytone One\", \"Paytone One Placeholder\", sans-serif","--framer-font-size":"17px","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Outside</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7UGFuY2hhbmctYm9sZA==","--framer-font-family":"\"Panchang\", \"Panchang Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">PULSE</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-dj1ob4">
                      <div className="framer-saj16g">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-1b2l1w8" aria-hidden="true" />
                        <div className="framer-j0vkm1" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7Q2hpbGxheC1ib2xk","--framer-font-family":"\"Chillax\", \"Chillax Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">APEX</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-b3x7k0">
                      <div className="framer-akijos">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-eq5xhq" aria-hidden="true" />
                        <div className="framer-2bezxf" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7U3dpdHplci1ib2xk","--framer-font-family":"\"Switzer\", \"Switzer Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Quantum</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-z7f0bv">
                      <div className="framer-14z0xme">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-514q4v" aria-hidden="true" />
                        <div className="framer-e29mum" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7U2F0b3NoaS1ib2xk","--framer-font-family":"\"Satoshi\", \"Satoshi Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Celestial</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-yisqt0">
                      <div className="framer-pxfzg0">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-yx1vns" aria-hidden="true" />
                        <div className="framer-vj6r1" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7Q2hpbGxheC1zZW1pYm9sZA==","--framer-font-family":"\"Chillax\", \"Chillax Placeholder\", sans-serif","--framer-font-weight":"600","--framer-letter-spacing":"-0.4px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Echo Valley</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1axlpmb">
                      <div className="framer-198itmh">
                        <div className="framer-1twnxb5" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"R0Y7UXVhbnRpY28tcmVndWxhcg==","--framer-font-family":"\"Quantico\", \"Quantico Placeholder\", sans-serif","--framer-font-size":"17px","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text"><span style={{"--font-selector":"R0Y7UXVhbnRpY28tNzAw","--framer-font-weight":"700"}as React.CSSProperties} className="framer-text">2</span>TWICE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-hidden="true" style={{"willChange":"transform"}}>
                  <div className="framer-15uj8iw" style={{"flexShrink":"0"}}>
                    <div className="framer-1bwf1nm">
                      <div className="framer-5z15hs">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-8n6oob" aria-hidden="true" />
                        <div className="framer-1fjqka3" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7U2F0b3NoaS1ib2xk","--framer-font-family":"\"Satoshi\", \"Satoshi Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Acme Corp</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-m7x0ky">
                      <div className="framer-an6nl5">
                        <div className="framer-1ooo265" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==","--framer-font-family":"\"Paytone One\", \"Paytone One Placeholder\", sans-serif","--framer-font-size":"17px","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Outside</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7UGFuY2hhbmctYm9sZA==","--framer-font-family":"\"Panchang\", \"Panchang Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">PULSE</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-dj1ob4">
                      <div className="framer-saj16g">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-1b2l1w8" aria-hidden="true" />
                        <div className="framer-j0vkm1" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7Q2hpbGxheC1ib2xk","--framer-font-family":"\"Chillax\", \"Chillax Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">APEX</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-b3x7k0">
                      <div className="framer-akijos">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-eq5xhq" aria-hidden="true" />
                        <div className="framer-2bezxf" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7U3dpdHplci1ib2xk","--framer-font-family":"\"Switzer\", \"Switzer Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Quantum</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-z7f0bv">
                      <div className="framer-14z0xme">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-514q4v" aria-hidden="true" />
                        <div className="framer-e29mum" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7U2F0b3NoaS1ib2xk","--framer-font-family":"\"Satoshi\", \"Satoshi Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Celestial</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-yisqt0">
                      <div className="framer-pxfzg0">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-yx1vns" aria-hidden="true" />
                        <div className="framer-vj6r1" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7Q2hpbGxheC1zZW1pYm9sZA==","--framer-font-family":"\"Chillax\", \"Chillax Placeholder\", sans-serif","--framer-font-weight":"600","--framer-letter-spacing":"-0.4px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Echo Valley</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1axlpmb">
                      <div className="framer-198itmh">
                        <div className="framer-1twnxb5" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"R0Y7UXVhbnRpY28tcmVndWxhcg==","--framer-font-family":"\"Quantico\", \"Quantico Placeholder\", sans-serif","--framer-font-size":"17px","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text"><span style={{"--font-selector":"R0Y7UXVhbnRpY28tNzAw","--framer-font-weight":"700"}as React.CSSProperties} className="framer-text">2</span>TWICE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-hidden="true" style={{"willChange":"transform"}}>
                  <div className="framer-15uj8iw" style={{"flexShrink":"0"}}>
                    <div className="framer-1bwf1nm">
                      <div className="framer-5z15hs">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-8n6oob" aria-hidden="true" />
                        <div className="framer-1fjqka3" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7U2F0b3NoaS1ib2xk","--framer-font-family":"\"Satoshi\", \"Satoshi Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Acme Corp</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-m7x0ky">
                      <div className="framer-an6nl5">
                        <div className="framer-1ooo265" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==","--framer-font-family":"\"Paytone One\", \"Paytone One Placeholder\", sans-serif","--framer-font-size":"17px","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Outside</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-a1xor6">
                      <div className="framer-11n6isv">
                        <div className="framer-o7icon" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7UGFuY2hhbmctYm9sZA==","--framer-font-family":"\"Panchang\", \"Panchang Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">PULSE</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-dj1ob4">
                      <div className="framer-saj16g">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-1b2l1w8" aria-hidden="true" />
                        <div className="framer-j0vkm1" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7Q2hpbGxheC1ib2xk","--framer-font-family":"\"Chillax\", \"Chillax Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">APEX</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-b3x7k0">
                      <div className="framer-akijos">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-eq5xhq" aria-hidden="true" />
                        <div className="framer-2bezxf" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7U3dpdHplci1ib2xk","--framer-font-family":"\"Switzer\", \"Switzer Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Quantum</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-z7f0bv">
                      <div className="framer-14z0xme">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-514q4v" aria-hidden="true" />
                        <div className="framer-e29mum" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7U2F0b3NoaS1ib2xk","--framer-font-family":"\"Satoshi\", \"Satoshi Placeholder\", sans-serif","--framer-font-weight":"700","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Celestial</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-yisqt0">
                      <div className="framer-pxfzg0">
                        <div  style={{"imageRendering":"pixelated","flexShrink":"0","backgroundSize":"100% 100%"}} className="framer-yx1vns" aria-hidden="true" />
                        <div className="framer-vj6r1" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"RlM7Q2hpbGxheC1zZW1pYm9sZA==","--framer-font-family":"\"Chillax\", \"Chillax Placeholder\", sans-serif","--framer-font-weight":"600","--framer-letter-spacing":"-0.4px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">Echo Valley</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1axlpmb">
                      <div className="framer-198itmh">
                        <div className="framer-1twnxb5" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none"}}>
                          <p style={{"--font-selector":"R0Y7UXVhbnRpY28tcmVndWxhcg==","--framer-font-family":"\"Quantico\", \"Quantico Placeholder\", sans-serif","--framer-font-size":"17px","--framer-letter-spacing":"0px","--framer-text-alignment":"left"}as React.CSSProperties} className="framer-text">
                            <span style={{"--font-selector":"R0Y7UXVhbnRpY28tNzAw","--framer-font-weight":"700"}as React.CSSProperties} className="framer-text">2
                            </span>TWICE
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
      <section className="consulting-section flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
          <h2 className="consulting-section-title text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            Consulting
          </h2>
          <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Step into the Future with Confidence, Grow Your Business with Our Advanced Technology and
            <span className="text-white">Expert Consulting Services!</span>
          </p>
        </div>
        <div className="consulting-section-items-list grid gap-2.5 grid-rows-2 grid-cols-3 justify-center max-w-[1200px] w-full relative">
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            {/* ELEMENT ANIMÉ EN FOND */}
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU */}
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{"background":"radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)","boxShadow":"rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            {/* ELEMENT ANIMÉ EN FOND */}
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU */}
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{"background":"radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)","boxShadow":"rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            {/* ELEMENT ANIMÉ EN FOND */}
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU */}
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{"background":"radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)","boxShadow":"rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU */}
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{"background":"radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)","boxShadow":"rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            {/* ELEMENT ANIMÉ EN FOND */}
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU */}
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{"background":"radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)","boxShadow":"rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
          </div>
          <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            {/* ELEMENT ANIMÉ EN FOND */}
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                              transition-transform duration-900 ease-in-out 
                              translate-x-[-400px] translate-y-[-400px] 
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU */}
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]" style={{"background":"radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)","boxShadow":"rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset,                                            rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100">
              </div>
            </div>
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
          </div>
        </div>
      </section>
      <section className="other-items-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
          <h2 className="text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            How We Secure Your Future
          </h2>
          <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Comprehensive solutions
            <span className="text-white">tailored to meet your unique needs.</span>
            our services designed to enhance efficiency, improve performance, and drive growth.
          </p>
        </div>
        <div className="other-section-items-list grid gap-2.5 grid-rows-2 grid-cols-3 justify-center max-w-[1200px] w-full relative">
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            {/* FOND BLEU QUI APPARAÎT AU HOVER */}
            <div className="absolute inset-0 bg-[#33DDFF]/[0] group-hover:bg-[#33DDFF]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            {/* FOND RADIAL ANIMÉ */}
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU (avec z-10 pour apparaître au-dessus) */}
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
            {/* BADGE */}
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              {/* Cercle coloré */}
              <div className="w-[12px] h-[12px] rounded-full bg-[#33DDFF] flex-none" />
              {/* Texte */}
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#33DDFF] font-[Inter] whitespace-nowrap">
                  Secure Connectivity
                </p>
              </div>
              {/* Badge de fond transparent */}
              <div className="absolute inset-0 bg-[#33DDFF] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            {/* FOND BLEU QUI APPARAÎT AU HOVER */}
            <div className="absolute inset-0 bg-[#E74C3C]/[0] group-hover:bg-[#E74C3C]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            {/* FOND RADIAL ANIMÉ */}
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU (avec z-10 pour apparaître au-dessus) */}
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
            {/* BADGE */}
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              {/* Cercle coloré */}
              <div className="w-[12px] h-[12px] rounded-full bg-[#E74C3C] flex-none" />
              {/* Texte */}
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#E74C3C] font-[Inter] whitespace-nowrap">
                  Secure Connectivity
                </p>
              </div>
              {/* Badge de fond transparent */}
              <div className="absolute inset-0 bg-[#E74C3C] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            {/* FOND BLEU QUI APPARAÎT AU HOVER */}
            <div className="absolute inset-0 bg-[#2ECC71]/[0] group-hover:bg-[#2ECC71]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            {/* FOND RADIAL ANIMÉ */}
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU (avec z-10 pour apparaître au-dessus) */}
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
            {/* BADGE */}
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              {/* Cercle coloré */}
              <div className="w-[12px] h-[12px] rounded-full bg-[#2ECC71] flex-none" />
              {/* Texte */}
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#2ECC71] font-[Inter] whitespace-nowrap">
                  Secure Connectivity
                </p>
              </div>
              {/* Badge de fond transparent */}
              <div className="absolute inset-0 bg-[#2ECC71] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            {/* FOND BLEU QUI APPARAÎT AU HOVER */}
            <div className="absolute inset-0 bg-[#FF9300]/[0] group-hover:bg-[#FF9300]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            {/* FOND RADIAL ANIMÉ */}
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU (avec z-10 pour apparaître au-dessus) */}
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
            {/* BADGE */}
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              {/* Cercle coloré */}
              <div className="w-[12px] h-[12px] rounded-full bg-[#FF9300] flex-none" />
              {/* Texte */}
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#FF9300] font-[Inter] whitespace-nowrap">
                  Secure Connectivity
                </p>
              </div>
              {/* Badge de fond transparent */}
              <div className="absolute inset-0 bg-[#FF9300] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            {/* FOND BLEU QUI APPARAÎT AU HOVER */}
            <div className="absolute inset-0 bg-[#A956F7]/[0] group-hover:bg-[#A956F7]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            {/* FOND RADIAL ANIMÉ */}
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU (avec z-10 pour apparaître au-dessus) */}
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
            {/* BADGE */}
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              {/* Cercle coloré */}
              <div className="w-[12px] h-[12px] rounded-full bg-[#A956F7] flex-none" />
              {/* Texte */}
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#A956F7] font-[Inter] whitespace-nowrap">
                  Secure Connectivity
                </p>
              </div>
              {/* Badge de fond transparent */}
              <div className="absolute inset-0 bg-[#A956F7] opacity-10 pointer-events-none" />
            </div>
          </div>
          <div className="group relative flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] overflow-hidden">
            {/* FOND BLEU QUI APPARAÎT AU HOVER */}
            <div className="absolute inset-0 bg-[#FFFFFF]/[0] group-hover:bg-[#FFFFFF]/[0.1] transition-colors duration-300 willChange-transform pointer-events-none z-0">
            </div>
            {/* FOND RADIAL ANIMÉ */}
            <div className="absolute w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0
                              transition-transform duration-900 ease-in-out
                              translate-x-[-400px] translate-y-[-400px]
                              group-hover:translate-x-[400px] group-hover:translate-y-[400px]" style={{"background":"radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
            {/* CONTENU (avec z-10 pour apparaître au-dessus) */}
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px] relative z-10">
              Security
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-100 relative z-10">
              Our privacy consulting services help you navigate effective complex data protection
              regulations, ensuring compliance and trust.
            </p>
            {/* BADGE */}
            <div className="flex items-center justify-center gap-[10px] px-2 py-1 rounded-full relative w-min h-min overflow-hidden">
              {/* Cercle coloré */}
              <div className="w-[12px] h-[12px] rounded-full bg-[#FFFFFF] flex-none" />
              {/* Texte */}
              <div className="flex flex-col justify-start flex-none relative">
                <p className="text-[14px] font-semibold leading-[1.2em] text-[#FFFFFF] font-[Inter] whitespace-nowrap">
                  Secure Connectivity
                </p>
              </div>
              {/* Badge de fond transparent */}
              <div className="absolute inset-0 bg-[#FFFFFF] opacity-10 pointer-events-none" />
            </div>
          </div>
        </div>
        <a href="#solutions" className="flex items-center justify-center gap-2 h-[44px] px-4 bg-zinc-900 hover:bg-[rgb(77,142,255)] text-white text-sm font-semibold border cursor-pointer overflow-hidden relative transition" style={{"willChange":"transform","borderRadius":"12px","borderColor": "rgb(77, 142, 255)"}}>
          Explore Features
        </a>
      </section>
      <section className="cybersecurity-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[700px]">
          <h2 className="cybersecurity-section-title text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            Cybersecurity Excellence
          </h2>
          <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Explore our range of services designed to protect
            <span className="text-white">your digital assets.</span>
          </p>
        </div>
        <div className="cybersecurity-section-items flex flex-col items-center justify-center gap-[100px] w-full max-w-[1200px] overflow-visible p-0 relative">
          <div className="contents">
            <div className="relative w-full h-auto flex-none">
              <div className="flex flex-row flex-wrap items-center justify-center gap-[60px] w-[1120px] overflow-hidden p-0 relative" style={{"width":"100%","opacity":"1"}}>
                <div className="flex flex-col items-start justify-center gap-[20px] flex-[1_0_0px] h-min p-0 relative" style={{"opacity":"1"}}>
                  <div className="flex flex-row items-center justify-center gap-[6px] h-[28px] px-[12px] overflow-hidden relative w-min flex-none border border-solid border-[#222426] bg-white/15" style={{"opacity":"1"}}>
                    <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform" style={{"backgroundColor":"rgb(51, 221, 255)","borderRadius":"4px","opacity":"1"}}>
                    </div>
                    <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                      <p className="text-[12px] text-white font-semibold">Enterprise-Grade Security</p>
                    </div>
                  </div>
                  <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                    <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[#fff] text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                      Seamless Cloud Integration for Your Business
                    </h3>
                  </div>
                  <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                    <p className="font-inter font-medium text-[#888888] text-[20px] leading-[28px] tracking-[-0.5px] text-start transform-none">
                      Leverage the power of cloud technology to scale your operations, enhance
                      security, and drive innovation. Experience efficiency like never before.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{"opacity":"1"}}>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-scale flex flex-col gap-5 justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]" style={{"willChange":"transform"}}>
                  <div className="absolute inset-0 rounded-inherit">
                    <img src="https://framerusercontent.com/images/74UdMbmJwXMp0xE2l4vV43pSbfo.png" alt="..." className="block h-full w-full object-contain rounded-inherit animated-image" style={{"maxWidth":"100%"}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contents">
            <div className="relative w-full h-auto flex-none">
              <div className="flex flex-row flex-wrap items-center justify-center gap-[60px] w-[1120px] overflow-hidden p-0 relative" style={{"width":"100%","opacity":"1"}}>
                <div className="scroll-scale flex flex-col gap-5  justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]" style={{"willChange":"transform"}}>
                  <div className="absolute inset-0 rounded-inherit">
                    <img src="https://framerusercontent.com/images/bANZbOOkuKHFNq2RtkpvUIDcqw.png" alt="..." className="animated-image block h-full w-full object-contain rounded-inherit" style={{"maxWidth":"100%"}} />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[20px] flex-[1_0_0px] h-min p-0 relative" style={{"opacity":"1"}}>
                  <div className="flex flex-row items-center justify-center gap-[6px] h-[28px] px-[12px] overflow-hidden relative w-min flex-none border border-solid border-[#222426] bg-white/15" style={{"opacity":"1"}}>
                    <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform" style={{"backgroundColor":"rgb(51, 221, 255)","borderRadius":"4px","opacity":"1"}}>
                    </div>
                    <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                      <p className="text-[12px] text-white font-semibold">Powered by React</p>
                    </div>
                  </div>
                  <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                    <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[#fff] text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                      Empowering Interfaces with React
                    </h3>
                  </div>
                  <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                    <p className="font-inter font-medium text-[#888888] text-[20px] leading-[28px] tracking-[-0.5px] text-start transform-none">
                      Leverage the power of React to build dynamic, responsive, and user-centric
                      interfaces. Experience seamless performance and unparalleled flexibility for
                      your applications.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{"opacity":"1"}}>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
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
              <div className="flex flex-row flex-wrap items-center justify-center gap-[60px] w-[1120px] overflow-hidden p-0 relative" style={{"width":"100%","opacity":"1"}}>
                <div className="cybersecurity-section-last-item flex flex-col items-start justify-center gap-[20px] flex-[1_0_0px] h-min p-0 relative" style={{"opacity":"1"}}>
                  <div className="flex flex-row items-center justify-center gap-[6px] h-[28px] px-[12px] overflow-hidden relative w-min flex-none border border-solid border-[#222426] bg-white/15" style={{"opacity":"1"}}>
                    <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative willChange-transform" style={{"backgroundColor":"rgb(51, 221, 255)","borderRadius":"4px","opacity":"1"}}>
                    </div>
                    <div className="flex-none h-auto relative select-none whitespace-pre w-auto" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                      <p className="text-[12px] text-white font-semibold">24/7 Data Tracking</p>
                    </div>
                  </div>
                  <div className="flex-none h-auto overflow-visible relative w-full break-words" style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                    <h3 className="cybersecurity-section-item-title font-Inter font-semibold text-[#fff] text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                      Real-Time Data Insights
                    </h3>
                  </div>
                  <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                    <p className="font-inter font-medium text-[#888888] text-[20px] leading-[28px] tracking-[-0.5px] text-start transform-none">
                      Track and visualize your data in real-time with our dynamic radar system. Stay
                      informed and make faster decisions with accurate and actionable insights.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap" style={{"opacity":"1"}}>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative w-auto" style={{"opacity":"1"}}>
                      <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min" style={{"backgroundColor":"rgb(34, 34, 34)","opacity":"1"}}>
                        <div className=" flex-none h-6 relative w-6" style={{"opacity":"1"}}>
                          <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" style={{"userSelect":"none","width":"100%","height":"100%","display":"inline-block","fill":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","color":"var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))","flexShrink":"0"}}>
                              <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))" >
                                <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                </path>
                              </g>
                            </svg></div>
                        </div>
                        <div style={{"outline":"none","display":"flex","flexDirection":"column","justifyContent":"flex-start","flexShrink":"0","transform":"none","opacity":"1"}}>
                          <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-scale flex flex-col gap-5 justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]" style={{"willChange":"transform"}}>
                  <div className="absolute inset-0 rounded-inherit">
                    <img decoding="async" sizes="min(100vw - 80px, 1200px)" srcSet="https://framerusercontent.com/images/1pwGtdcVVz1NwDAIb3Lis9JIZk.png" src="https://framerusercontent.com/images/1pwGtdcVVz1NwDAIb3Lis9JIZk.png" alt="Realistic cloud design representing seamless cloud integration and enterprise-grade security. Ideal for showcasing cloud computing, scalable solutions, and innovative technology services." style={{"display":"block","width":"100%","height":"100%","borderRadius":"inherit","objectPosition":"center","objectFit":"contain"}} className="animated-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
