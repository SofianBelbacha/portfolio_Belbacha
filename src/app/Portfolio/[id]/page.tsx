import { adminDb } from '@/firebase/firebase-admin.config';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/app/_components/ui/badge';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Separator } from '@/app/_components/ui/separator';
import { Project } from '@/types/project';
import { Metadata } from 'next';

export async function generateStaticParams() {
    const snapshot = await adminDb.collection('projects').get();
    const paths = snapshot.docs.map((doc) => ({
        id: doc.id,
    }));

    return paths.map((path) => ({
        id: path.id,
    }));
}

export const dynamic = 'force-static'; // ISR
export const revalidate = 86400; // toutes les 60s

async function fetchProject(id: string): Promise<Project | null> {
    const docRef = adminDb.collection('projects').doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
        return null;
    }

    return { id: docSnap.id, ...docSnap.data() } as Project;
}

export async function generateMetadata(
    { params }: { params: { id: string } }
): Promise<Metadata> {
    const project = await fetchProject(params.id);

    if (!project) return { title: 'Projet introuvable' };

    return {
        title: `${project.title} | Sofian Belbacha - Développeur Full Stack`,
        description: project.summary || "Projet issu de mon portfolio personnel",
        openGraph: {
            title: `${project.title} | Sofian Belbacha - Développeur Full Stack`,
            description: project.summary,
            url: `https://ton-domaine.dev/projects/${params.id}`,
            siteName: "Sofian Belbacha - Développeur & Futur DevOps",
            images: [
                {
                    url: project.coverImage,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            locale: 'fr_FR',
            type: 'website',
        },
    };
}


const ProjectDetail = async ({ params }: { params: { id: string } }) => {
    const project = await fetchProject(params.id);

    if (!project) {
        return notFound();
    }

    return (
        <div className="bg-black border-b border-dark-800 pt-24 pb-12 lg:pb-24 lg:pt-36">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-16">
                    <div className="flex flex-col gap-y-5">
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="flex items-center gap-2 bg-indigo-900/20 text-indigo-100">
                                <Image src={project.mainTool.avatarUrl} width={20} height={20} alt={project.mainTool.name} className="rounded-full" />
                                <p className="hover:text-white">{project.mainTool.name}</p>
                            </Badge>
                        </div>
                        <h1 className="text-4xl font-bold text-white lg:text-5xl">{project.title}</h1>
                        <div className="flex flex-wrap gap-4 py-2">
                            {project.technologies.slice(0, 5).map((tech, index) => (
                                <Image key={index} alt={tech.name} src={tech.iconUrl} width={24} height={24} className="rounded" />
                            ))}
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed">{project.summary}</p>
                        <div className="flex gap-3 pt-6">
                            <Link href="#contact" className="flex items-center justify-center gap-2 h-[44px] px-4 text-black bg-[rgb(255,255,255)] hover:bg-[rgba(255,255,255,0.8)] text-sm font-semibold cursor-pointer overflow-hidden relative transition" style={{ "willChange": "transform", "borderRadius": "12px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg> Demo
                            </Link>
                            <Link href="#contact" className="flex items-center justify-center gap-2 h-[44px] px-4 text-black bg-[rgb(255,255,255)] hover:bg-[rgba(255,255,255,0.8)] text-sm font-semibold cursor-pointer overflow-hidden relative transition" style={{ "willChange": "transform", "borderRadius": "12px" }}>
                                <svg viewBox="0 0 128 128" height={25}>
                                    <g fill="#181616"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                                </svg>
                                Github
                            </Link>
                        </div>

                        <Separator className="my-6" />

                        <div className="block md:hidden rounded-lg overflow-hidden mt-6">
                            <Image
                                src={project.coverImage}
                                width={688}
                                height={512}
                                alt="project preview"
                                className="w-full h-auto"
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2">vue d'ensemble</h2>
                            <p className="text-muted-foreground text-sm leading-6">{project.overview}</p>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-white mb-2">fonctionnalités</h2>
                            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                                {project.features.map((feature) => (
                                    <li key={feature.title} className="pl-4 relative">
                                        <span className="absolute left-0 top-1 text-primary">•</span>
                                        <span className="block ml-2">
                                            <span className="font-medium text-white">{feature.title} :</span> {feature.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="hidden md:block rounded-lg overflow-hidden mb-12">
                            <Image src={project.coverImage} width={688} height={512} alt="project preview" className="w-full h-auto" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {project.technologies.map((tech) => (
                                <Card key={tech.name} className="bg-dark-900 border-dark-800">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Image alt={tech.name} src={tech.iconUrl} width={16} height={16} />
                                            <span className="text-white font-medium">{tech.name}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
