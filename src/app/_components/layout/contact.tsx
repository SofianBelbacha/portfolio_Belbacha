'use client';

import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <section className="contact-section flex flex-col items-center justify-center gap-[40px] h-[971px] w-full overflow-hidden p-[100px_40px] relative">
    <div
        className="absolute bottom-[-470px] left-[-136px] right-[-136px] h-[675px] overflow-hidden [background:radial-gradient(65%_52%_at_50%_55%,#33ddff80,#4d8eff80_50.900901%,#09090b00)]"
        style={{ opacity: 1, transform: "none" }}
    />
    <div className="flex flex-col items-center justify-center gap-[20px] w-full max-w-[500px]">
        <h2 className="contact-section-title text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center">
        Ready to Secure Your Business?
        </h2>
        <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center">
        Let us help you secure your business with{" "}
        <span className="text-white">tailored solutions</span> and expert support.
        Contact us today for a free consultation!
        </p>
    </div>
    <div className="contact-section-items relative flex items-center justify-center gap-[10px] w-full max-w-[1200px]">
        <ContactForm />
        <div className="contact-section-map relative w-full h-[570.4px] z-0 flex-1 basis-0">
        <iframe
            className="w-full h-full border-0"
            src="https://maps.google.com/maps?q=51.025268%2C%208.699116&z=8&output=embed"
        />
        </div>
    </div>
    </section>
  );
}
