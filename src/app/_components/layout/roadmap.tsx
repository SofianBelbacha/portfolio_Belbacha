"use client";

import { motion } from "framer-motion";
import { ActivitySquare, Network } from "lucide-react";
import Image from "next/image";
import { Aws } from '@lobehub/icons';
import { JSX } from "react";
import { useTranslations } from "next-intl";

type IconKey =
    | "docker"
    | "gitlab"
    | "kubernetes"
    | "terraform"
    | "grafana"
    | "aws";

const iconMap: Record<IconKey, JSX.Element> = {
    docker: (
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
            width={20}
            height={20}
        />
    ),
    gitlab: (
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
            alt="GitLab"
            width={20}
            height={20}
        />
    ),
    kubernetes: (
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg"
            alt="Kubernetes"
            width={20}
            height={20}
        />
    ),
    terraform: (
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
            alt="Terraform"
            width={20}
            height={20}
        />
    ),
    grafana: (
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
            alt="Grafana"
            width={20}
            height={20}
        />
    ),
    aws: <Aws.Color size={22} />,
};

export default function Roadmap() {

    const t = useTranslations("skills.roadmap");

    const steps = t.raw("steps") as Array<{
        title: string;
        status: "done" | "inProgress" | "planned";
        items: { icon: IconKey; text: string }[];
    }>;

    const statusLabels = {
        done: t("statuses.done"),
        inProgress: t("statuses.inProgress"),
        planned: t("statuses.planned"),
    };

    return (
        <div className="py-24 max-w-screen-xl w-full mx-auto px-6">
            <div className="max-w-xl">
                <h2 className="text-left text-[30px] font-bold tracking-tight mb-6">
                    {t("title")}
                </h2>
                <p className="mt-4 max-w-[60ch] xs:text-lg">
                    {t("description")}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-14">
                <div className="relative pl-6 sm:pl-8 lg:pl-10">
                    {/* LIGNE VERTICALE */}
                    <div className="absolute left-3 sm:left-4 lg:left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-black/20 via-black/10 to-transparent dark:from-zinc-700 dark:via-zinc-500/40 dark:to-transparent " />
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="relative pl-6 sm:pl-8 lg:pl-10 pb-8 sm:pb-10 lg:pb-12"
                        >
                            {/* DOT */}
                            <div className="absolute left-0 sm:left-[1px] top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black border border-black/30 shadow-sm dark:bg-zinc-300 dark:border-white/20 dark:shadow-[0_0_12px_rgba(255,255,255,0.5)]" />

                            {/* CARD */}
                            <div
                                className="p-4 sm:p-5 rounded-xl backdrop-blur-md transition-all bg-white border border-black/15 shadow-sm hover:shadow-md dark:bg-zinc-900/40 dark:border-white/10 dark:shadow-[0_0_30px_rgba(255,255,255,0.04)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                                {/* HEADER */}
                                <div className="flex items-start sm:items-center justify-between gap-2 mb-3">
                                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <span className="text-xs px-2 py-1 rounded-full border border-black/20 bg-black/5 text-zinc-800 dark:border-white/10 dark:bg-transparent dark:text-white whitespace-nowrap">
                                        {statusLabels[step.status]}
                                    </span>
                                </div>

                                {/* CONTENT */}
                                <div className="space-y-2 sm:space-y-3">
                                    {step.items.map((item, j) => (
                                        <div
                                            key={j}
                                            className="flex items-start gap-3 text-sm sm:text-base text-zinc-800 dark:text-zinc-300"
                                        >
                                            {iconMap[item.icon]}
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="relative flex items-center justify-center">
                    <motion.svg
                        width="380"
                        height="380"
                        viewBox="0 0 200 200"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="opacity-40"
                    >
                        <defs>
                            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ffffff30" />
                                <stop offset="100%" stopColor="#00000000" />
                            </radialGradient>
                        </defs>
                        <circle cx="100" cy="100" r="90" fill="url(#grad)" stroke="white" strokeWidth="0.4" />
                    </motion.svg>

                    <p className="absolute text-zinc-400 text-sm tracking-wider">
                        {t("footer")}
                    </p>
                </div>
            </div>
        </div>
    )
}