'use client';

import Footer from "./footer";
import ContactForm from "../forms/ContactForm";
import { useTranslations } from "next-intl";

export default function Contact() {

  const t = useTranslations("common.contact");

  return (
    <>
    <section id="contact" className="contact-section flex flex-col items-center justify-center gap-[40px] h-[971px] w-full overflow-hidden p-[100px_40px] relative">
      <div className="flex flex-col items-center justify-center gap-[20px] w-full max-w-[508px]">
        <h2 className="text-[40px] md:text-[48px] lg:text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-center">
          {t("title")}
        </h2>
        <p className="subtitle">
          {t("subtitle")}{" "}
          <span className="subtitle-accent">{t("subtitleAccent")}</span>
        </p>
      </div>
      <div className="contact-section-items relative flex items-center justify-center gap-[10px] w-full max-w-[1200px]">
        <ContactForm />
        <div className="contact-section-map relative w-full h-full z-0 flex-1 basis-0">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92844.10357158771!2d3.1518267057074283!3d43.348198259562416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b10e6c47d808ff%3A0x4078821166acd10!2s34500%20B%C3%A9ziers!5e0!3m2!1sfr!2sfr!4v1756073477424!5m2!1sfr!2sfr"
          />
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
