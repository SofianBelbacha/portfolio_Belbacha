"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl";

export default function CyberSkills() {

    const t = useTranslations("skills.cyber");

    return (
        <div className="col-span-full sm:col-span-2 mt-14">
            <div className="relative mb-8">
                <h2 className="text-center text-lg tracking-wider font-medium text-zinc-800 dark:text-zinc-200">
                    {t("titleToolCyber")}
                </h2>
                <div className="mx-auto mt-3 w-32 h-[2px] bg-gradient-to-r from-transparent via-zinc-500/40 to-transparent"/>
            </div>
            {/* Glow */}
            <div className="absolute left-1/2 -translate-x-1/2 -z-10 w-[500px] h-[200px] blur-3xl opacity-40 dark:bg-gradient-to-b dark:from-zinc-700/20 dark:to-transparent bg-gradient-to-b from-black/10 to-transparent"/>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
                {[
                    "Wireshark ☑️",
                    "Nmap ☑️",
                    "Burp Suite ☑️",
                    "Fail2ban ⌛",
                    "Metasploit ⌛",
                    "Kali Linux ⌛",
                    "ClamAV ⌛",
                    "OWASP ZAP ⌛",
                    "UFW / iptables ☑️",
                ].map((tool, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-all
                            dark:bg-zinc-900/40 dark:border dark:border-zinc-700/70 dark:text-zinc-300
                            dark:shadow-[0_0_12px_rgba(255,255,255,0.06)]
                            dark:hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]
                            bg-white border border-black/15 text-zinc-800 shadow-sm hover:shadow-md
                            "
                    >
                        {tool}
                    </motion.div>
                ))}
            </div>
        </div>

    )
}