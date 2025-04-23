import Projects from '../_components/layout/projects';

export default function Portfolio(){
    return(
        <section className="other-items-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
            <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
                <h2
                    className="text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
                    How We Secure Your Future
                </h2>
                <p
                    className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
                    Comprehensive solutions
                    <span className="text-white">tailored to meet your unique needs.</span>
                    our services designed to enhance efficiency, improve performance, and drive growth.
                </p>
            </div>
            <div className="flex flex-col self-start items-start gap-6 max-w-[700px] ml-20 text-white p-[20px] rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] shadow-[inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
                <div>
                <h2 className="text-2xl font-bold text-white mb-2">My Work</h2>
                <p className="text-zinc-300 text-base leading-relaxed">
                    I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.
                </p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <a href="#all" className="px-5 py-2 rounded-lg text-sm font-medium text-black bg-white hover:bg-[rgba(255,255,255,0.8)] transition-all duration-200 ease-in-out">
                        All
                    </a>
                    <a href="#web" className="px-5 py-2 rounded-lg text-sm font-medium text-black bg-white hover:bg-[rgba(255,255,255,0.8)] transition-all duration-200 ease-in-out">
                        Web Design
                    </a>
                    <a href="#dev" className="px-5 py-2 rounded-lg text-sm font-medium text-black bg-white hover:bg-[rgba(255,255,255,0.8)] transition-all duration-200 ease-in-out">
                        Development
                    </a>
                    <a href="#branding" className="px-5 py-2 rounded-lg text-sm font-medium text-black bg-white hover:bg-[rgba(255,255,255,0.8)] transition-all duration-200 ease-in-out">
                        Branding
                    </a>
                </div>
            </div>
            <Projects />
            <a href="#solutions" className="flex items-center justify-center gap-2 h-[44px] px-4 bg-zinc-900 hover:bg-[rgb(77,142,255)] text-white text-sm font-semibold border cursor-pointer overflow-hidden relative transition"
                style={{"willChange": "transform","borderRadius": "12px;border-color: rgb(77, 142, 255)"}}>
                Explore Features
            </a>
        </section>
    );
}