"use client";

import { useEffect, useState } from 'react';
import FilterSectionPortfolio from '../../_components/layout/filterSectionPortfolio';
import Image from 'next/image';
import { Project } from "@/types/project";
import { useSearchParams } from "next/navigation";
import TitlePageSection from '../../_components/layout/titlePageSection';
import { useRouter } from '@/i18n/navigation';

export function PortfolioClient({
  projects,
  locale
}: {
  projects: Project[];
  locale: 'fr' | 'en';
}) {
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [search, setSearchAction] = useState("");
  const [sortOrder, setSortOrderAction] = useState("recent");
  const [selectedCategory, setSelectedCategoryAction] = useState("All");

  const searchParams = useSearchParams();
  const initialTag = searchParams.get("tag");
  const [selectedTags, setSelectedTagsAction] = useState<string[]>(
    initialTag ? [initialTag] : []
  );

  const router = useRouter();

  useEffect(() => {
    if (initialTag && projects.length > 0) {
      setSelectedTagsAction([initialTag]);
    }
  }, [initialTag, projects]);

  useEffect(() => {
    const filtered = projects
      .filter(project => {
        const matchSearch =
          project.title[locale]
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchTags =
          selectedTags.length === 0 ||
          selectedTags.every(tag =>
            project.tags.some(t => t.name?.[locale] === tag)
          );

        const matchCategory =
          selectedCategory === "All" ||
          project.tags.some(tag => tag.typeProject === selectedCategory);

        return matchSearch && matchTags && matchCategory;
      })
      .sort((a, b) => {
        if (sortOrder === "alpha") {
          return a.title[locale].localeCompare(b.title[locale]);
        }

        const aMillis = a.createdAt ?? 0;
        const bMillis = b.createdAt ?? 0;

        if (sortOrder === "recent") return bMillis - aMillis;
        if (sortOrder === "oldest") return aMillis - bMillis;

        return 0;
      });

    setFiltered(filtered);
  }, [projects, search, selectedTags, sortOrder, selectedCategory, locale]);

  return (
    <section className="other-items-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
      <TitlePageSection
        title="Portfolio"
        description={
          <>
            {locale === 'fr' ? (
              <>
                Un aperçu concret de mes compétences à travers des projets
                <span className="subtitle-accent">
                  {" "}variés, techniques et passionnants.
                </span>
              </>
            ) : (
              <>
                A concrete overview of my skills through projects
                <span className="subtitle-accent">
                  {" "}diverse, technical and exciting.
                </span>
              </>
            )}
          </>
        }
      />

      <FilterSectionPortfolio
        search={search}
        setSearchAction={setSearchAction}
        selectedTags={selectedTags}
        setSelectedTagsAction={setSelectedTagsAction}
        sortOrder={sortOrder}
        setSortOrderAction={setSortOrderAction}
        allTags={Array.from(
          new Set(
            projects.flatMap(p =>
              p.tags
                .filter(t => t.name?.[locale])
                .map(t => t.name[locale])
            )
          )
        )}
        selectedCategory={selectedCategory}
        setSelectedCategoryAction={setSelectedCategoryAction}
      />

      <div className="other-section-items-list grid flex-none gap-6 auto-rows-fr grid-cols-2 h-min justify-center max-w-[1200px] overflow-visible p-0 relative w-full">
        {filtered.length > 0 ? (
          filtered.map(project => (
            <div className="flex flex-col" key={project.id}>
              <div
                onClick={() => router.push(`/portfolio/${project.id}`)}
                className="group relative cursor-pointer p-[20px] rounded-[20px] border dark:border-white/15 border-black/15 transition-transform group-hover:brightness-90"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl">
                  <Image
                    fill
                    className="object-cover rounded-2xl transition duration-300 group-hover:brightness-75"
                    src={project.coverImage}
                    alt={`Aperçu de ${project.title[locale]}`}
                  />
                </div>
                <div className="group absolute left-[7px] bottom-[12px] z-[1] flex items-center justify-center p-[11px] h-min w-min overflow-hidden bg-[rgb(10,10,10)] rounded-full">
                  <div className="relative h-[27px] w-[25px] overflow-hidden">
                    <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-[27px]">
                      <div className="w-[25px] h-[27px] aspect-square flex-none" style={{ "transform": "rotate(-35deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full fill-white">
                          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                        </svg>
                      </div>
                      <div className="w-[25px] h-[27px] aspect-square flex-none" style={{ "transform": "rotate(-35deg)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full fill-white">
                          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex flex-col px-3 py-3 gap-2">
                <p className="text-md">{project.title[locale]}</p>
                <p className="text-sm">
                  {project.createdAt && (
                    new Date(project.createdAt).toLocaleDateString(
                      locale === 'fr' ? 'fr-FR' : 'en-US',
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )
                  )}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-zinc-400 py-12">
            <p className="text-lg">
              {locale === 'fr'
                ? "Aucun projet ne correspond à votre recherche."
                : "No project matches your search."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
