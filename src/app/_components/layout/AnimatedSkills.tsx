"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Brain
} from "lucide-react";

const ICONS = [<Layers size={32} />, <Zap size={32} />, <Brain size={32} />];



export default function ComplementarySkills() {
  const t = useTranslations("skills.complementary");

  const items = t.raw("items") as {
    title: string;
    description: string;
    skills: string[];
  }[];

  return (
    <div className="relative w-full py-20 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full -z-20 bg-white"
        style={{
          clipPath: "polygon(0 32px, 100% 0, 100% calc(100% - 32px), 0% 100%)",
          background: "linear-gradient(120deg, #fefefe, #f0f0f0)",
        }}
      />

      <div className="relative max-w-[1130px] py-5 mx-auto px-4">
        <h2 className="relative text-4xl font-bold tracking-tight mb-20 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-white/90 to-zinc-50 backdrop-blur-sm border border-zinc-200 shadow-[0_0_40px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Halo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-200/30 to-pink-200/10 blur-3xl"
              />

              <div className="flex items-center justify-center mb-6">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-yellow-100 via-white to-white opacity-40 blur-xl" />
                  <div className="relative text-zinc-900 opacity-80">
                    {ICONS[i]}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-zinc-900 tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2">
                {item.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 text-zinc-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-zinc-400 shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
