"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/firebase/firebase.config';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from "@/types/project";

  interface ProjectsProps {
    projects: Project[];
    openModal?: (id: string) => void; // si besoin
    }  
  
export default function Projects({ projects }: ProjectsProps){
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const openModal = (id: string) => {
      const index = projects.findIndex((p) => p.id === id);
      if (index !== -1) {
        setCurrentIndex(index);
        setIsOpen(true);
      }
    };
  
    const closeModal = () => setIsOpen(false);
    const prevProject = () =>
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    const nextProject = () =>
      setCurrentIndex((prev) => (prev + 1) % projects.length);
  
    const currentProject = projects[currentIndex];  
    return(
        <div className="other-section-items-list grid flex-none gap-6 auto-rows-fr grid-cols-2 h-min justify-center max-w-[1200px] overflow-visible p-0 relative w-full">
            {projects.length > 0 ? (
                projects.map((project) => (
                <div className="flex flex-col" key={project.id}>
                    <div key={project.id} onClick={() => openModal(project.id)} className="group relative cursor-pointer p-[20px] rounded-[20px] border border-white/15 transition-transform group-hover:brightness-90">
                        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl">
                            <Image fill className="object-cover rounded-2xl w-full h-auto object-cover transition duration-300 group-hover:brightness-75"
                                src={project.coverImage}
                                alt={`Aperçu de ${project.title}`}/>
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
                        <p className="text-sm">{`${project.createdAt}`}</p>
                    </div>
                </div>
                ))
            ) : (
                <div className="col-span-full text-center text-zinc-400 py-12">
                  <p className="text-lg">Aucun projet ne correspond à votre recherche.</p>
                </div>
              )}
            {isOpen && (
                <div id="portfolioModal" className={`${currentProject ? 'grid' : 'hidden'} fixed inset-0 z-[999] place-items-center bg-black/70 backdrop-blur-sm transition-opacity duration-300`}>
                    <div className="relative m-4 w-1/3 rounded-lg bg-white shadow-md">
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-slate-800">{currentProject.title}</p>
                                    <p className="text-xs text-slate-500">@portfolio 1</p>
                                </div>
                            </div>
                            <button onClick={closeModal} className="rounded-md p-2.5 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>        
                        <div className="border-y border-blue-gray-100">
                            <Image width={1080} height={432} src={currentProject.coverImage} alt="project detail" className="h-64 w-full object-cover" />
                        </div>
                        <div className="p-4 text-slate-700 text-sm leading-relaxed">
                            <p>
                            Ce projet a été réalisé dans le cadre d’un portfolio personnel. L’objectif était de mettre en avant mes compétences en développement front-end.
                            </p>
                            <p className="mt-2">
                            Il inclut une interface responsive, une logique JS légère, et une utilisation de Tailwind CSS pour un style moderne.
                            </p>
                        </div>                      
                        <div className="flex flex-wrap items-center justify-between p-4 text-slate-600">
                            <div className="flex gap-16">
                            <div>
                                <p className="text-sm text-slate-500">Technos</p>
                                <p className="text-slate-800 font-medium">HTML, Tailwind, JS</p>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Année</p>
                                <p className="text-slate-800 font-medium">2025</p>
                            </div>
                            </div>
                            <Link href={`/Portfolio/${currentProject.id}`}>
                                <button className="flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:bg-slate-800 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                    <path d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" />
                                </svg>
                                Partager
                                </button>
                            </Link>
                        </div>
                    </div>
                    <button onClick={prevProject} className="absolute left-4 top-1/2 z-[1000] -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={nextProject} className="absolute right-4 top-1/2 z-[1000] -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>                      
                </div>
            )}
        </div>
        
    );
}