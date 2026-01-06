"use client"

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github } from '@lobehub/icons';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Mail, MapPin, Phone, Code, Shield, Server, Cpu, BookOpen, Dumbbell } from "lucide-react";
import { useTranslations } from "next-intl";


export default function ProfileSection() {

  const t = useTranslations('profile');
  const tTimeline = useTranslations("profile.timeline");
  const interestsLabels = t.raw("interests.list") as string[];
  const education = tTimeline.raw("education.items") as any[];
  const experience = tTimeline.raw("experience.items") as any[];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;

      setDragLimit(containerWidth - contentWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && contentRef.current) {
        setDragLimit(
          containerRef.current.offsetWidth -
          contentRef.current.scrollWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const interests = [
    { icon: Code, label: interestsLabels[0] },
    { icon: Server, label: interestsLabels[1] },
    { icon: Shield, label: interestsLabels[2] },
    { icon: Cpu, label: interestsLabels[3] },
    { icon: BookOpen, label: interestsLabels[4] },
    { icon: Dumbbell, label: interestsLabels[5] },
  ];

  return (
    <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Avatar className="size-36 border border-white/20">
            <AvatarImage
              src="/linkedin_profil-image.png"
              alt="Photo de Sofian Belbacha"
              className="object-cover"
            />
            <AvatarFallback>SB</AvatarFallback></Avatar>

          <h3 className="text-2xl font-semibold">{t("identity.name")}</h3>
          <p className="text-secondary">{t("identity.role")}</p>
          <div className="flex gap-6 mt-2">
            <Link href="https://www.linkedin.com/in/sofian-belbacha/" target="_blank">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={30} height={30} alt={""} />
            </Link>
            <Link href="https://gitlab.com/SofianBelbacha/" target="_blank">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" width={30} height={30} alt={""} />
            </Link>
            <Link href="https://github.com/SofianBelbacha" target="_blank">
              <Github size={30} />
            </Link>
          </div>
          <div className="mx-auto mt-3 w-70 h-[2px] bg-gradient-to-r from-transparent via-zinc-500/40 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-xl font-semibold">{t("contact.title")}</h3>

          <div className="flex flex-col gap-3 text-sm text-secondary">

            <div className="flex items-center gap-3">
              <Mail className="size-4 text-gray-500" />
              <a
                href="mailto:sofianbelbacha@gmail.com"
                className="hover-secondary transition-colors"
              >
                sofianbelbacha@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="size-4 text-gray-500" />
              <a
                href="tel:+33753441807"
                className="hover-secondary transition-colors"
              >
                +33 7 53 44 18 07
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="size-4 text-gray-500" />
              <span>{t("contact.location")}</span>
            </div>

          </div>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-2 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {["Angular", "Next.js", "ASP.NET Core", "Git / GitHub", "Résolution de problèmes", "Veille technologique", "Autonomie & rigueur", "Capacité d’adaptation",
          ].map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-400"
            >
              <path d="M12 20v-6" />
              <path d="M6 12h4v8H6a4 4 0 0 1 0-8z" />
              <path d="M18 12h-4v8h4a4 4 0 0 0 0-8" />
              <path d="M12 4v2" />
              <circle cx="12" cy="4" r="2" />
            </svg>
            <h3 className="text-xl font-semibold">{t("about.title")}</h3>
          </div>
          <p className="text-secondary leading-relaxed text-sm">
            {t("about.text")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-full"
        >
          <h3 className="text-xl font-semibold">
            {t("interests.title")}
          </h3>

          <div ref={containerRef} className="relative w-full overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 fade-edge-left" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 fade-edge-right" />

            <motion.div
              ref={contentRef}
              drag="x"
              dragConstraints={{ left: dragLimit, right: 0 }}
              className="flex gap-2.5 cursor-grab active:cursor-grabbing"
            >
              {interests.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="interest-pill"
                >
                  <Icon className="size-4 interest-icon" />
                  <span>{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/personal/CV_SOFIAN_BELBACHA.pdf"
            target="_blank"
            className="px-6 py-3 rounded-full font-semibold transition-all border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white/80 dark:hover:bg-white dark:hover:text-black"
          >
            {t("cv.label")}
          </Link>
        </motion.div>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-20">
        <section>
          <h3 className="text-3xl font-semibold mb-8">{tTimeline("education.title")}</h3>
          <div className="relative pl-10">
            <div className="absolute top-0 left-4 w-1 h-full bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-900 rounded-full"></div>

            <div className="flex flex-col gap-10">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="relative mx-auto lg:mx-0"
                >
                  <div className="absolute -left-[23px] top-6 w-5 h-5 rounded-full bg-zinc-300 border-4 border-zinc-800 shadow"></div>

                  <div className="timeline-card">
                    {/* Decorative SVG */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                      <svg width="170" height="170" viewBox="0 0 200 200">
                        <path
                          d="M40 150 L90 100 L130 140 L170 70"
                          stroke="currentColor"
                          strokeWidth="14"
                          strokeLinecap="round"
                        />
                        <circle cx="170" cy="70" r="10" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
                      <div className="p-3 rounded-xl timeline-icon shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
                          />
                        </svg>
                      </div>

                      <div className="text-center sm:text-left">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-sm date-muted">{item.date}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-sm leading-relaxed timeline-muted text-center sm:text-left">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="timeline-chip px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl font-semibold mb-8">{tTimeline("experience.title")}</h3>
          <div className="relative pl-10">
            <div className="absolute top-0 left-4 w-1 h-full bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-900 rounded-full"></div>
            <div className="flex flex-col gap-10">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="relative mx-auto lg:mx-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[23px] top-6 w-5 h-5 rounded-full bg-zinc-300 border-4 border-zinc-800 shadow"></div>
                  <div className="timeline-card">
                    {/* Decorative SVG */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
                      <svg width="170" height="170" viewBox="0 0 200 200">
                        <path
                          d="M70 60 L40 100 L70 140"
                          stroke="currentColor"
                          strokeWidth="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M130 60 L160 100 L130 140"
                          stroke="currentColor"
                          strokeWidth="10"
                          strokeLinecap="round"
                        />
                        <line
                          x1="90"
                          y1="150"
                          x2="110"
                          y2="150"
                          stroke="currentColor"
                          strokeWidth="10"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-4">
                      <div className="p-3 rounded-xl timeline-icon shadow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.6"
                            d="M4 7h16v13H4zM9 7V4h6v3"
                          />
                        </svg>
                      </div>

                      <div className="text-center sm:text-left">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-sm date-muted">{item.date}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed timeline-muted text-center sm:text-left">
                      {item.description}
                    </p>

                    {/* List */}
                    <ul className="mt-4 text-sm list-disc ml-5 space-y-1 text-left sm:text-left timeline-muted">
                      {item.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="timeline-chip px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
