"use client";
import { useEffect, useState } from 'react';
import FilterSectionPortfolio from '../_components/layout/filterSectionPortfolio';
import Image from 'next/image';
import { Timestamp } from 'firebase/firestore';
import { Project } from "@/types/project";
import { useRouter, useSearchParams } from "next/navigation";


export function PortfolioClient({ projects }: { projects: Project[] }) {
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
      .filter((project) => {
        const matchSearch = project.title.toLowerCase().includes(search.toLowerCase());
        const matchTags =
          selectedTags.length === 0 || selectedTags.every((tag) => project.tags.map((t) => t.name).includes(tag));
        const matchCategory =
          selectedCategory === "All" || project.tags.some(tag => tag.typeProject === selectedCategory);

        return matchSearch && matchTags && matchCategory;
        ;
      })
      .sort((a, b) => {
        if (sortOrder === "alpha") return a.title.localeCompare(b.title);
        if (sortOrder === "recent") {
          const aMillis = a.createdAt instanceof Timestamp ? a.createdAt.toMillis() : new Date(a.createdAt).getTime();
          const bMillis = b.createdAt instanceof Timestamp ? b.createdAt.toMillis() : new Date(b.createdAt).getTime();
          return bMillis - aMillis; // tri du plus récent au plus ancien
        }
        if (sortOrder === "oldest") {
          const aMillis = a.createdAt instanceof Timestamp ? a.createdAt.toMillis() : new Date(a.createdAt).getTime();
          const bMillis = b.createdAt instanceof Timestamp ? b.createdAt.toMillis() : new Date(b.createdAt).getTime();
          return aMillis - bMillis; // tri du plus ancien au plus récent
        }
        return 0;
      });

    setFiltered(filtered);
  }, [projects, search, selectedTags, sortOrder, selectedCategory]);
  return (
    <section className="other-items-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
            <h2
            className="text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            Portfolio
            </h2>
            <p
            className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Un aperçu concret de mes compétences à travers des projets
            <span className="text-white"> variés, techniques et passionnants.</span>
            </p>
        </div>
        <FilterSectionPortfolio
            search={search}
            setSearchAction={setSearchAction}
            selectedTags={selectedTags}
            setSelectedTagsAction={setSelectedTagsAction}
            sortOrder={sortOrder}
            setSortOrderAction={setSortOrderAction}
            allTags={
            Array.from(
                new Set(
                projects.flatMap((p) =>
                    p.tags.filter((t) => t.name !== undefined && t.name !== "").map((t) => t.name)
                )
                )
            )
            }
            selectedCategory={selectedCategory}
            setSelectedCategoryAction={setSelectedCategoryAction}
        />
        <div className="other-section-items-list grid flex-none gap-6 auto-rows-fr grid-cols-2 h-min justify-center max-w-[1200px] overflow-visible p-0 relative w-full">
            {filtered.length > 0 ? (
                filtered.map((project) => (
                <div className="flex flex-col" key={project.id}>
                    <div key={project.id} onClick={() => router.push(`/Portfolio/${project.id}`)} className="group relative cursor-pointer p-[20px] rounded-[20px] border border-white/15 transition-transform group-hover:brightness-90">
                        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl">
                            <Image fill className="object-cover rounded-2xl w-full h-auto object-cover transition duration-300 group-hover:brightness-75"
                                src={project.coverImage}
                                alt={`Aperçu de ${project.title}`}
                            />
                        </div>        
                        <div className="group absolute left-[7px] bottom-[12px] z-[1] flex items-center justify-center p-[11px] h-min w-min overflow-hidden bg-[rgb(10,10,10)] rounded-full">
                            <div className="relative h-[27px] w-[25px] overflow-hidden">
                                <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-[27px]">
                                    <div className="w-[25px] h-[27px] aspect-square flex-none" style={{"transform": "rotate(-35deg)"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full fill-white">
                                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                                        </svg>
                                    </div>
                                    <div className="w-[25px] h-[27px] aspect-square flex-none" style={{"transform": "rotate(-35deg)"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full fill-white">
                                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-3 py-3 gap-2">
                        <p className="text-md ">{project.title}</p>
                        <p className="text-sm">
                        {new Date(project.createdAt).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                        </p>
                    </div>
                </div>
                ))
            ) : (
                <div className="col-span-full text-center text-zinc-400 py-12">
                    <p className="text-lg">Aucun projet ne correspond à votre recherche.</p>
                </div>
            )}
        </div>
    </section>
  );
}