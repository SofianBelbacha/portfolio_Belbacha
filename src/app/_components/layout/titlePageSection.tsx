"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface SectionHeaderProps {
  translationKey: string;
  center?: boolean;
}

export default function TitlePageSection({
  translationKey,
  center = true,
}: SectionHeaderProps) {
  const t = useTranslations(translationKey);

  return (
    <motion.div
      className={`max-w-3xl flex flex-col gap-4 my-8 ${
        center ? "text-center items-center" : "text-left items-start"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent leading-[1.15] gradient-title">
        {t('title')}
      </h2>

      <p className="subtitle">
        {t.rich('description', {
          accent: (chunks) => (
            <span className="subtitle-accent">{chunks}</span>
          ),
        })}
      </p>
    </motion.div>
  );
}