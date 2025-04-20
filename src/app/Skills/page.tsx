// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Skills() {
  return (
    <section className="other-items-sections flex flex-col items-center justify-center gap-16 px-10 py-24 w-full relative overflow-visible">
    <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-[800px]">
        <h2 className="text-[64px] leading-[1.2] tracking-[-0.03em] font-semibold text-white text-center font-[Inter,sans-serif]">
            How We Secure Your Future
        </h2>
        <p className="text-[24px] leading-[1.2] tracking-[-0.8px] font-semibold text-[#999999] text-center font-[Inter,sans-serif]">
            Comprehensive solutions
            <span className="text-white">tailored to meet your unique needs.</span>
            our services designed to enhance efficiency, improve performance, and drive growth.
        </p>
    </div>
    <div className="max-w-[1130px] mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center mb-4 text-white">Des bases solides pour construire des projets
            web robustes</h1>
        <div className="text-center mb-6 max-w-[630px] mx-auto text-white text-base leading-relaxed">
            Je propose une expertise complète en développement web, acquise à travers un apprentissage structuré
            et pratique. Voici les domaines dans lesquels je suis compétent :
        </div>

        <div className="relative flex flex-col items-start gap-6 max-w-[600px] mx-auto text-white p-[20px] rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] shadow-[inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-4">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width={40} height={40} />
                <h2 className="text-xl font-bold text-white">HTML</h2>
              </div>
              <div>
                <span className="text-sm text-zinc-300 italic">Formation disponible</span>
              </div>
            </div>
            <p className="text-zinc-300 text-base leading-relaxed">
              Maîtrise du langage de structure d'une page web. Je suis capable de concevoir des documents bien organisés
              et accessibles grâce à une utilisation précise des balises HTML.
            </p>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-zinc-400">Niveau</span>
                <span className="text-sm text-zinc-400">90%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 h-full rounded-full" style={{"width": "90%"}}></div>
              </div>
            </div>
        </div>
        <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto "></div>
        <div className="relative flex flex-col items-start gap-6 max-w-[600px] mx-auto text-white p-[20px] rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] shadow-[inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-4">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width={40} height={40} />
                <h2 className="text-xl font-bold text-white">CSS</h2>
              </div>
          
              <div>
                <span className="text-sm text-zinc-300 italic">Formation disponible</span>
              </div>
            </div>
          
            <p className="text-zinc-300 text-base leading-relaxed">
              Compétences en mise en forme et design. Je sais styliser les pages web avec des
              feuilles de style en cascade (CSS) pour un rendu esthétique et responsive.
            </p>
          
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-zinc-400">Niveau</span>
                <span className="text-sm text-zinc-400">85%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full" style={{"width": "85%"}}></div>
              </div>
            </div>
        </div>
        <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto" id="wave-anchor"></div>
        <div className="relative flex flex-col items-start gap-6 max-w-[600px] mx-auto text-white p-[20px] rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] shadow-[inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <Image src="https://cdn-icons-png.flaticon.com/512/1034/1034112.png" alt="HTTP" width={40} height={40} />
              <h2 className="text-xl font-bold text-white">Mise en ligne de sites</h2>
            </div>
            <div>
              <span className="text-sm text-zinc-300 italic">Formation disponible</span>
            </div>
          </div>
        
          <p className="text-zinc-300 text-base leading-relaxed">
            Je sais héberger un site web, le rendre accessible au public et comprendre les
            bases des noms de domaine, de l'hébergement et du déploiement.
          </p>
        
          <div className="w-full">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-zinc-400">Niveau</span>
              <span className="text-sm text-zinc-400">80%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full" style={{"width": "80%"}}></div>
            </div>
          </div>
        </div>
        <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto"></div>
        <div className="relative flex flex-col items-start gap-6 max-w-[600px] mx-auto text-white p-[20px] rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] shadow-[inset_0px_2px_0px_0px_rgba(184,180,180,0.08)]">
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
            <Image src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png" alt="Algorithmique" width={40} height={40} />
            <h2 className="text-xl font-bold text-white">Algorithmique</h2>
            </div>
            <div>
            <span className="text-sm text-zinc-300 italic">Formation disponible</span>
            </div>
        </div>

        <p className="text-zinc-300 text-base leading-relaxed">
            Solide compréhension des fondamentaux de l’algorithmique, indispensable pour
            aborder n’importe quel langage de programmation de manière logique et efficace.
        </p>

        <div className="w-full">
            <div className="flex justify-between mb-1">
            <span className="text-sm text-zinc-400">Niveau</span>
            <span className="text-sm text-zinc-400">75%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-400 to-indigo-500 h-full rounded-full" style={{"width": "75%"}}></div>
            </div>
        </div>
        </div>

        <div className="text-center py-16 text-[#8491c7] text-sm uppercase relative tree-category">
            Orientation : Choix du langage
            <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">stacks
                maîtrisés</strong>
        </div>


        <div className="relative flex flex-col md:flex-row justify-around items-start gap-10 tree-split">
            <div className="w-full md:w-1/2 max-w-[540px] ">
                <div className="text-center text-[#8491c7] text-sm uppercase py-16 relative tree-category">
                    Spécialisation
                    <strong className="block text-white text-4xl font-semibold tracking-widest">Frontend</strong>
                </div>

                <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-4">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={40} height={40} />
                        <h2 className="text-xl font-bold">JavaScript</h2>
                      </div>
                      <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                    </div>
                    <p className="text-zinc-300">
                      Maîtrise de JavaScript pour créer des interfaces dynamiques et interactives, aussi bien côté navigateur que côté serveur (NodeJS, Deno).
                    </p>
                    <div className="w-full">
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>Niveau</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" style={{"width": "85%"}}></div>
                      </div>
                    </div>
                </div>
                  
                <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto" id="wave-anchor"></div>
                <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-4">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width={40} height={40} />
                        <h2 className="text-xl font-bold">Git</h2>
                      </div>
                      <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                    </div>
                    <p className="text-zinc-300">
                      Utilisation de Git pour le versionnage de projet, travail collaboratif et gestion d’historique des modifications.
                    </p>
                    <div className="w-full">
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>Niveau</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-700" style={{"width": "70%"}}></div>
                      </div>
                    </div>
                </div>
                  
                <div className="text-center py-16 text-[#8491c7] text-sm uppercase relative tree-category">
                    Spécialisation
                    <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">Framework</strong>
                </div>

                <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-4">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Git" width={40} height={40} />
                        <h2 className="text-xl font-bold">React</h2>
                      </div>
                      <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                    </div>
                    <p className="text-zinc-300">
                        Conception d’interfaces utilisateur modernes avec React, une bibliothèque
                        puissante pour le développement d’applications frontend.
                    </p>
                    <div className="w-full">
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>Niveau</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full" style={{"width": "85%"}}></div>
                      </div>
                    </div>
                </div>
                <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto" id="wave-anchor"></div>
                <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-4">
                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next" width={40} height={40} />
                        <h2 className="text-xl font-bold">Next Js</h2>
                      </div>
                      <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                    </div>
                    <p className="text-zinc-300">
                        Conception d’interfaces utilisateur modernes avec React, une bibliothèque
                        puissante pour le développement d’applications frontend.
                    </p>
                    <div className="w-full">
                      <div className="flex justify-between text-sm text-zinc-400 mb-1">
                        <span>Niveau</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full" style={{"width": "85%"}}></div>
                      </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 max-w-[540px]">
                <div className="tree-split-backend">
                    <div className="text-center text-[#8491c7] text-sm uppercase py-16 relative tree-category">
                        Spécialisation
                        <strong className="block text-white text-4xl font-semibold tracking-widest">BackEnd</strong>
                    </div>
                </div>
                <div className="relative flex justify-between max-w-[330px] mx-auto w-full gap-28 ">
                    <button data-target="php" className="flex flex-col items-center focus:outline-none">
                      <div className="w-[3px] h-24 bg-white opacity-30"></div>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width={80} height={80} className="transition-transform duration-300 hover:scale-110" />
                    </button>
                  
                    <button data-target="aspnet" className="flex flex-col items-center focus:outline-none">
                      <div className="w-[3px] h-24 bg-white opacity-30"></div>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" width={80} height={80} className="transition-transform duration-300 hover:scale-110" />
                    </button>
                </div>
                <div id="php" className="backend-block">
                    <div className="w-[3px] h-15 bg-[#FFFFFF] mr-97 opacity-40 mx-auto"></div>
                    <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-4">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" width={40} height={40} />
                            <h2 className="text-xl font-bold">SQL</h2>
                            </div>
                            <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                        </div>
                        <p className="text-zinc-300">
                            SQL (Structured Query Language) est le langage standard pour interagir avec les bases de données relationnelles. Il permet de créer, lire, modifier et supprimer des données efficacement.
                        </p>
                        <div className="w-full">
                            <div className="flex justify-between text-sm text-zinc-400 mb-1">
                            <span>Niveau</span>
                            <span>75%</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-800" style={{"width": "75%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto" id="wave-anchor"></div>
                    <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-4">
                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width={40} height={40} />
                            <h2 className="text-xl font-bold">PHP</h2>
                            </div>
                            <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                        </div>
                        <p className="text-zinc-300">
                            PHP est un langage de script côté serveur largement utilisé pour le développement web. Il permet de créer des sites dynamiques et de gérer la logique côté backend.
                        </p>
                        <div className="w-full">
                            <div className="flex justify-between text-sm text-zinc-400 mb-1">
                            <span>Niveau</span>
                            <span>70%</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" style={{"width": "70%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-16 text-[#8491c7] text-sm uppercase relative tree-category">
                        Spécialisation
                        <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">Framework</strong>
                    </div>
                    <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-4">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" alt="Symfony" width={40} height={40} />
                                <h2 className="text-xl font-bold">Symfony</h2>
                            </div>
                            <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                        </div>
                        <p className="text-zinc-300">
                            Symfony est un framework PHP qui vous permettra d'écrire une application web de manière plus organisée avec une séparation de la logique en plusieurs composants.
                        </p>
                        <div className="w-full">
                            <div className="flex justify-between text-sm text-zinc-400 mb-1">
                            <span>Niveau</span>
                            <span>65%</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-gray-400 to-gray-600" style={{"width": "65%"}}></div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div id="aspnet" className="hidden backend-block">
                    <div className="w-[3px] h-10 bg-[#FFFFFF] ml-97 opacity-40 mx-auto"></div>
                    <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" width={40} height={40} />
                          <h2 className="text-xl font-bold">SQL</h2>
                        </div>
                        <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                      </div>
                      <p className="text-zinc-300">
                        SQL (Structured Query Language) est le langage standard pour interagir avec les bases de données relationnelles. Il permet de créer, lire, modifier et supprimer des données efficacement.
                      </p>
                      <div className="w-full">
                        <div className="flex justify-between text-sm text-zinc-400 mb-1">
                          <span>Niveau</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-800" style={{"width": "75%"}}></div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="w-[3px] h-15 bg-[#FFFFFF] opacity-40 mx-auto"></div>
                  
                    <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" width={40} height={40} />
                          <h2 className="text-xl font-bold">C#</h2>
                        </div>
                        <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                      </div>
                      <p className="text-zinc-300">
                        C# est un langage de programmation orienté objet développé par Microsoft. Il est utilisé pour développer des applications robustes, notamment sur la plateforme .NET.
                      </p>
                      <div className="w-full">
                        <div className="flex justify-between text-sm text-zinc-400 mb-1">
                          <span>Niveau</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-700" style={{"width": "80%"}}></div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="text-center py-16 text-[#8491c7] text-sm uppercase relative tree-category">
                      Spécialisation
                      <strong className="block text-white text-4xl font-semibold tracking-widest whitespace-nowrap">ASP.NET Core</strong>
                    </div>
                  
                    <div className="relative flex flex-col items-start gap-6 p-6 rounded-[20px] bg-[rgb(17,17,17)] shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] text-white max-w-[600px] mx-auto">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt="ASP.NET Core MVC" width={40} height={40} />
                          <h2 className="text-xl font-bold">ASP.NET Core MVC</h2>
                        </div>
                        <span className="text-sm text-zinc-300 italic">Formation disponible</span>
                      </div>
                      <p className="text-zinc-300">
                        ASP.NET Core MVC est un framework web léger et performant de Microsoft, conçu pour construire des applications web modernes à l’aide du pattern MVC (Model-View-Controller).
                      </p>
                      <div className="w-full">
                        <div className="flex justify-between text-sm text-zinc-400 mb-1">
                          <span>Niveau</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-800" style={{"width": "70%"}}></div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="relative w-full h-min-[1px] max-w-[1200px] w-full mx-auto">
        <div className="font-semibold text-[30px] relative">
            <h3 className="text-white after:content-[''] after:absolute after:w-[100px] after:h-[5px] after:bg-[#EE9F2A] after:left-0 after:-bottom-5">
                Ton Titre
            </h3>
        </div>
    </div>
    <div className="consulting-section-items-list grid gap-11 grid-cols-3 justify-center max-w-[1200px] w-full relative">
        <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                        transition-transform duration-900 ease-in-out 
                        translate-x-[-400px] translate-y-[-400px] 
                        group-hover:translate-x-[400px] group-hover:translate-y-[400px]"
              style={{"background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
          
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]"
              style={{"background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)",
                     "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset, rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path
                    d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100"></div>
            </div>
          
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Base de données
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection regulations, ensuring compliance and trust.
            </p>
          
            <div className="flex flex-col gap-4 mt-4">
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>MySql</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>Sql Server</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>PostgreSQL</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
            </div>
        </div>
        <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                        transition-transform duration-900 ease-in-out 
                        translate-x-[-400px] translate-y-[-400px] 
                        group-hover:translate-x-[400px] group-hover:translate-y-[400px]"
              style={{"background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
          
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]"
                style={{"background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)",
                     "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset, rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
              <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path
                    d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100"></div>
            </div>
          
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Base de données
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection regulations, ensuring compliance and trust.
            </p>
          
            <div className="flex flex-col gap-4 mt-4">
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>MySql</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>Sql Server</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>PostgreSQL</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
            </div>
        </div>
        <div className="group flex flex-col gap-2.5 p-[30px] w-full border border-[#2e2e2e] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[466px] h-[466px] rounded-full blur-[15px] rotate-45 z-0 
                        transition-transform duration-900 ease-in-out 
                        translate-x-[-400px] translate-y-[-400px] 
                        group-hover:translate-x-[400px] group-hover:translate-y-[400px]"
              style={{"background": "radial-gradient(40.2% 99.24% at 50% 50%, rgba(68,68,68,0.45) 0%, rgba(68,68,68,0) 100%)"}}>
            </div>
          
            <div className="relative z-10 flex items-center justify-center w-min p-0 bg-[rgb(77,142,255)] rounded-full shadow-[0_20px_25px_rgba(0,0,0,0.4)]"
              style={{"background": "radial-gradient(126% 86% at 84.8% 0%, rgb(71, 71, 71) 0%, rgb(0, 0, 0) 100%)",
                "boxShadow": "rgba(255, 255, 255, 0.1) 0px 0px 15px 0px inset, rgba(255, 255, 255, 0.35) 0px 2px 4px 0px inset"}}>
         <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-radial from-[#474747] to-black rounded-full shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-[35px] h-[35px] fill-[#999]">
                  <path
                    d="M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[rgb(77,142,255)] mix-blend-overlay rounded-full opacity-100"></div>
            </div>
          
            <h4 className="text-[24px] font-semibold text-white font-inter leading-[1.2] tracking-[-0.8px]">
              Base de données
            </h4>
            <p className="text-white font-semibold opacity-50 leading-[1.6] tracking-[-0.02em] group-hover:opacity-100">
              Our privacy consulting services help you navigate effective complex data protection regulations, ensuring compliance and trust.
            </p>
          
            <div className="flex flex-col gap-4 mt-4">
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>MySql</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>Sql Server</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>PostgreSQL</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full" style={{"width": "85%"}}></div>
                </div>
              </div>
            </div>
        </div>
    </div>
</section>
);
}
