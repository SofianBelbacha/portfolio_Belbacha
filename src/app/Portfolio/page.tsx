"use client";
import { useEffect, useState } from 'react';
import FilterSectionPortfolio from '../_components/layout/filterSectionPortfolio';
import Projects from '../_components/layout/projects';
import Link from 'next/link';
import { db } from '@/firebase/firebase.config';
import { getDocs, collection, Timestamp } from 'firebase/firestore';
import { Project } from "@/types/project";
import { useSearchParams } from "next/navigation";

export default function Portfolio(){
    const [projects, setProjects] = useState<Project[]>([]);
    const [filtered, setFiltered] = useState<Project[]>([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("recent");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const searchParams = useSearchParams();
    const initialTag = searchParams.get("tag");
    const [selectedTags, setSelectedTags] = useState<string[]>(
      initialTag ? [initialTag] : []
    );

    useEffect(() => {
      if (initialTag && projects.length > 0) {
        setSelectedTags([initialTag]);
      }
    }, [initialTag, projects]);
    
    useEffect(() => {
      const fetchProjects = async () => {
        const snapshot = await getDocs(collection(db, "projects"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];
  
        setProjects(data);
        setFiltered(data); // initial state
      };
  
      fetchProjects();
    }, []);
  
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
        return(
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
                setSearch={setSearch}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                allTags={
                    Array.from(
                        new Set(
                            projects.flatMap((p) =>
                                p.tags .filter((t) => t.name !== undefined && t.name !== "") .map((t) => t.name)
                            )
                        )
                    )     
                }
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}              
            />
            <Projects projects={filtered} />
            
            <Link href="#solutions" className="flex items-center justify-center gap-2 h-[44px] px-4 bg-zinc-900 hover:bg-[rgb(77,142,255)] text-white text-sm font-semibold border cursor-pointer overflow-hidden relative transition"
                style={{"willChange": "transform","borderRadius": "12px;border-color: rgb(77, 142, 255)"}}>
                Explore Features
            </Link>
        </section>
    );
}