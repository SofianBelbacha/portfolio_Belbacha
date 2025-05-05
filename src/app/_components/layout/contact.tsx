'use client';

import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="contact-section border border-white/20 flex flex-col items-center justify-center gap-[40px] h-[971px] w-full overflow-hidden p-[100px_40px] relative">
      <div className="flex flex-col items-center justify-center gap-[20px] w-full max-w-[508px]">
        <h2 className="contact-section-title text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center">
          Vous cherchez un collaborateur?
        </h2>
        <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center">
          Je suis disponible pour discuter de vos projets, partager des idées ou répondre à vos questions.{" "}
          <span className="text-white">N&apos;hésitez pas à me contacter.</span>
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
