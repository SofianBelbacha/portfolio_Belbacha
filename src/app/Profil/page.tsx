import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"
import { Button } from "@/app/_components/ui/button"

export default function Profil() {
  return (
  <section className="cybersecurity-section flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
    <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
        <h2 className="about-section-title text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            About Me
        </h2>
        <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Step into the Future with Confidence, Grow Your Business with Our Advanced Technology and
            <span className="text-white">Expert Consulting Services!</span>
        </p>
    </div>
    <div className="cybersecurity-section-items flex flex-col items-center justify-center gap-[100px] w-full max-w-[1200px] overflow-visible p-0 relative">
        <div className="contents">
            <div className="relative w-full h-auto flex-none">
                <div className="flex flex-row flex-wrap items-center justify-center gap-[60px] w-[1120px] overflow-hidden p-0 relative"
                    style={{"width": "100%", "opacity": 1}}>
                    <div className="flex flex-col items-start justify-center gap-[20px] flex-[1_0_0px] h-min p-0 relative"
                        style={{"opacity": 1}}>
                        <div className="flex flex-row items-center justify-center gap-[6px] h-[28px] px-[12px] overflow-hidden relative w-min flex-none border border-solid border-[#222426] bg-white/15"
                            style={{"opacity": 1}}>
                            <div className="w-[8px] h-[8px] aspect-square flex-none overflow-hidden relative will-change-transform"
                                style={{"backgroundColor": "rgb(51, 221, 255)", "borderRadius": "4px", "opacity": 1}}>
                            </div>
                            <div className="flex-none h-auto relative select-none whitespace-pre w-auto"
                                style={{"outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flexStart", "flexShrink": 0, "transform": "none", "opacity": 1}}>
                                <p className="text-[12px] text-white font-semibold">Enterprise-Grade Security</p>
                            </div>
                        </div>
                        <div className="flex-none h-auto overflow-visible relative w-full break-words"
                            style={{"outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": 0, "transform": "none", "opacity": 1}}>
                            <h3
                                className="cybersecurity-section-item-title font-Inter font-semibold text-[#fff] text-[50px] leading-[1.2em] tracking-[-3.5px] text-start">
                                Seamless Cloud Integration for Your Business
                            </h3>
                        </div>
                        <div className="flex-none h-auto overflow-visible relative w-full break-words text-left">
                            <p
                                className="font-inter font-medium text-[#888888] text-[20px] leading-[28px] tracking-[-0.5px] text-start transform-none">
                                Leverage the power of cloud technology to scale your operations, enhance
                                security, and drive innovation. Experience efficiency like never before.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-[5px] h-min justify-start items-center content-center relative w-full whitespace-nowrap"
                            style={{"opacity": 1}}>
                            <div className="flex-none h-auto relative w-auto" style={{"opacity": 1}}>
                                <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min"
                                    style={{"backgroundColor": "rgb(34, 34, 34)", "opacity": 1}}>
                                    <div className=" flex-none h-6 relative w-6" style={{"opacity": 1}}>
                                        <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256" focusable="false"
                                                color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"
                                                style={{"userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255)); color: var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": 0}}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"
                                                    >
                                                    <path
                                                        d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        style={{"outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": 0, "transform": "none", "opacity": 1}}>
                                        <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none h-auto relative w-auto" style={{"opacity": 1}}>
                                <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min"
                                    style={{"backgroundColor": "rgb(34, 34, 34)", "opacity": 1}}>
                                    <div className=" flex-none h-6 relative w-6" style={{"opacity": 1}}>
                                        <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256" focusable="false"
                                                color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"
                                                style={{"userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255)); color: var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": 0}}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"
                                                    >
                                                    <path
                                                        d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        style={{"outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": 0, "transform": "none", "opacity": 1}}>
                                        <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none h-auto relative w-auto" style={{"opacity": 1}}>
                                <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min"
                                    style={{"backgroundColor": "rgb(34, 34, 34)", "opacity": 1}}>
                                    <div className=" flex-none h-6 relative w-6" style={{"opacity": 1}}>
                                        <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256" focusable="false"
                                                color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"
                                                style={{"userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255)); color: var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": 0}}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"
                                                    >
                                                    <path
                                                        d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                                    </path>
                                                </g>
                                            </svg></div>
                                    </div>
                                    <div
                                        style={{"outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": 0, "transform": "none", "opacity": 1}}>
                                        <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none h-auto relative w-auto" style={{"opacity": 1}}>
                                <div className="flex flex-row flex-nowrap gap-2.5 h-min justify-center items-center content-center overflow-visible p-4 relative w-min"
                                    style={{"backgroundColor": "rgb(34, 34, 34)", "opacity": 1}}>
                                    <div className=" flex-none h-6 relative w-6" style={{"opacity": 1}}>
                                        <div style={{"display":"contents"}}><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256" focusable="false"
                                                color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"
                                                style={{"userSelect": "none", "width": "100%", "height": "100%", "display": "inline-block", "fill": "var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255)); color: var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))", "flexShrink": 0}}>
                                                <g color="var(--token-f5a827a8-ff91-4264-9182-8b9065322201, rgb(255, 255, 255))"
                                                    >
                                                    <path
                                                        d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z">
                                                    </path>
                                                </g>
                                            </svg></div>
                                    </div>
                                    <div
                                        style={{"outline": "none", "display": "flex", "flexDirection": "column", "justifyContent": "flex-start", "flexShrink": 0, "transform": "none", "opacity": 1}}>
                                        <p className="text-[14px] font-semibold text-white">99.9% Uptime</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-scale flex flex-col gap-5 justify-center items-center overflow-hidden relative w-full max-w-[570px] mx-auto aspect-[1.2/1] rounded-[20px]"
                        style={{"willChange": "transform", "transform": "scale(1)"}}>
                        <div className="absolute rounded-inherit">
                            <iframe
                                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=seti&wt=none&l=text%2Fx-csharp&width=760&ds=true&dsyoff=67px&dsblur=50px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=10px&lh=141%25&si=false&es=2x&wm=false&code=public%2520class%2520DevProfile%250A%257B%250A%2520%2520%2520%2520public%2520string%2520Name%2520%253D%253E%2520%2522Ton%2520Pr%25C3%25A9nom%2522%253B%250A%2520%2520%2520%2520public%2520string%2520Role%2520%253D%253E%2520%2522D%25C3%25A9veloppeur%2520.NET%2520%252F%2520Fullstack%2522%253B%250A%2520%2520%2520%2520public%2520string%255B%255D%2520Stack%2520%253D%253E%2520new%255B%255D%2520%257B%2520%2522C%2523%2522%252C%2520%2522.NET%2522%252C%2520%2522Blazor%2522%252C%2520%2522SQL%2522%252C%2520%2522JavaScript%2522%2520%257D%253B%250A%250A%2520%2520%2520%2520public%2520string%2520AboutMe%28%29%2520%253D%253E%2520%2524%2522Salut%252C%2520je%2520suis%2520%257BName%257D%252C%2520passionn%25C3%25A9%2520par%2520le%2520clean%2520code%2520et%2520les%2520interfaces%2520bien%2520pens%25C3%25A9es.%2522%253B%250A%257D%250A"
                                style={{"width": "760px", "height": "245px", "border":0, "transform": "scale(1)", "overflow":"hidden"}}
                                sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="flex flex-col items-start gap-10 max-w-[1200px] w-full px-8 py-10  text-white">

<div>
  <h3 className="text-2xl font-bold mb-2">About Me</h3>
  <p className="text-zinc-300 text-base leading-relaxed">
    I'm a designer & developer with a passion for web design. I enjoy developing simple, clean, and slick
    websites that provide real value to the end user.
  </p>
</div>

      <section>
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <div className="space-y-6">
          <div className="pl-4">
            <h4 className="text-lg font-semibold">Front-end Developer</h4>
            <p className="text-sm text-zinc-400">1 Feb 2018 – Present • Full-Time</p>
            <p className="mt-2 text-zinc-300">Worked on high-end web apps, designing interfaces and improving UX for
              enterprise clients.</p>
          </div>
          <div className="pl-4">
            <h4 className="text-lg font-semibold">UI/UX Designer</h4>
            <p className="text-sm text-zinc-400">2016 – 2018 • Freelance</p>
            <p className="mt-2 text-zinc-300">Created clean UI designs for startups and helped teams improve their product
              usability.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <div className="space-y-6">
          <div className="pl-4">
            <h4 className="text-lg font-semibold">University of Boston – BSc Computer Science</h4>
            <p className="text-sm text-zinc-400">2014 – 2018 • Graduated</p>
            <p className="mt-2 text-zinc-300">Studied computer science with a focus on front-end development and
              interaction design.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-2">Who I Am</h3>
        <p className="text-zinc-300 leading-relaxed">
          I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick
          websites that provide real value to the end user. I’m always looking for new challenges and ways to push the
          limits of user experience.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-2">Career Goal</h3>
        <p className="text-zinc-300">
          Seeking a dynamic role where I can merge design and development to create impactful digital experiences and
          continue growing as a creative developer.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: "30+", label: "Projects Completed" },
          { value: "5y", label: "Experience" },
          { value: "100%", label: "Client Satisfaction" },
          { value: "2x", label: "Hackathon Winner" },
        ].map((item, i) => (
          <div key={i} className="bg-zinc-800 p-6 rounded-lg shadow-inner">
            <h4 className="text-4xl font-bold">{item.value}</h4>
            <p className="text-sm text-zinc-400">{item.label}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-300">
          <div>
            <h4 className="font-semibold mb-2">Development</h4>
            <ul className="space-y-1">
              <li>HTML / CSS / JS</li>
              <li>React / Next.js</li>
              <li>Tailwind / Bootstrap</li>
              <li>PHP / Laravel</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Design</h4>
            <ul className="space-y-1">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Photoshop</li>
              <li>UI / UX Thinking</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tools & Workflow</h4>
            <ul className="space-y-1">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Slack, Trello</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Languages</h3>
        <ul className="space-y-2 text-zinc-300">
          <li><span className="text-white font-semibold">🇫🇷 French:</span> Native</li>
          <li><span className="text-white font-semibold">🇬🇧 English:</span> Fluent</li>
          <li><span className="text-white font-semibold">🇮🇩 Indonesian:</span> Intermediate</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-3">
          {["Autonomy", "Creativity", "Teamwork", "Problem-Solving", "Curiosity"].map((skill, i) => (
            <Badge key={i} variant="secondary" className="text-sm px-4 py-2 bg-zinc-800 text-white">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild className="bg-white text-black hover:bg-opacity-90">
          <a href="/cv.pdf" download>📎 Download CV</a>
        </Button>
        <Button asChild className="bg-white text-black hover:bg-opacity-90">
          <a href="#contact">📨 Contact Me</a>
        </Button>
      </div>
    </div>
  </section>
);
}
