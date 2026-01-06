"use client";

import { motion } from "framer-motion";
import { Layers, GitBranch, Box, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";


const careerGoals = [
  { key: 'architecture', icon: Layers },
  { key: 'cicd', icon: GitBranch },
  { key: 'containers', icon: Box },
  { key: 'security', icon: ShieldCheck }
];


export default function CareerGoalsSection() {
  const t = useTranslations('home.devops');
  
  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center gap-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
        <h2 className="leading-[1.2] tracking-[-0.03em] font-semibold text-center font-[Inter,sans-serif] text-[40px] md:text-[48px] lg:text-[64px]">
          {t('title')}
        </h2>
        <p className="subtitle">
          {t.rich('subtitle', {
            emphasis: (chunks) => (
              <span className="subtitle-accent">{chunks}</span>
            )
          })}
        </p>
      </div>
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] w-full">
        {careerGoals.map((goal, index) => (
          <motion.div
            key={goal.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group card-surface card-surface-hover hover:shadow-[0_0_60px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]"
          >
            {/* GLOW */}
            <div className="card-glow group-hover:opacity-100" />

            {/* ICON */}
            <div className="card-icon">
              <goal.icon className="w-7 h-7 text-zinc-700 dark:text-zinc-300" strokeWidth={1.8} />
            </div>

            {/* TEXT */}
            <h4 className="card-title">{t(`careerGoals.${goal.key}.title`)}</h4>
            <p className="card-text">{t(`careerGoals.${goal.key}.description`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
