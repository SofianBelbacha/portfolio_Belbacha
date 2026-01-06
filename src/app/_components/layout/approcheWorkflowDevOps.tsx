"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const workflow = [
  { key: 'analysis', step: '01' },
  { key: 'development', step: '02' },
  { key: 'deployment', step: '03' },
  { key: 'improvement', step: '04' }
];

export default function ApprocheWorkflowDevOps() {
    const t = useTranslations("home.workflow");

    return (
        <section className="relative w-full py-32 px-6 flex flex-col items-center gap-20 overflow-hidden">
            <div className="max-w-[900px] text-center space-y-4">
                <h2 className="text-[40px] md:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] font-semibold">
                    {t("title")}
                </h2>
                <p className="subtitle">
                    {t.rich("subtitle", {
                        emphasis: (chunks) => (
                        <span className="subtitle-accent">{chunks}</span>
                        )
                    })}
                </p>
            </div>

            {/* WORKFLOW */}
            <div className="max-w-[1000px] w-full flex flex-col gap-6">
            {workflow.map((item, index) => (
                <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group workflow-card workflow-card-hover"
                >
                {/* STEP */}
                <div className="workflow-step">
                    {item.step}
                </div>

                {/* CONTENT */}
                <div className="space-y-2">
                    <h4 className="workflow-title">{t(`steps.${item.key}.title`)}</h4>
                    <p className="workflow-text">{t(`steps.${item.key}.description`)}</p>
                </div>

                {/* GLOW */}
                <div className="workflow-glow group-hover:opacity-100" />
                </motion.div>
            ))}
            </div>
            <Link href="/Skills">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base cursor-pointer">
                    {t("cta")}
                    <ArrowUpRight className="!h-5 !w-5" />
                </Button>
            </Link>

        </section>
    );
}
