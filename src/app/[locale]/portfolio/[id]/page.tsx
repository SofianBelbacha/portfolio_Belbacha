import { adminDb } from '@/firebase/firebase-admin.config';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/app/_components/ui/badge';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Separator } from '@/app/_components/ui/separator';
import { Project } from '@/types/project';
import { Metadata } from 'next';
import { Github } from '@lobehub/icons';

const LOCALES = ['fr', 'en'] as const;

export async function generateStaticParams() {
  const snapshot = await adminDb.collection('projet').get();

  return snapshot.docs.flatMap((doc) =>
    LOCALES.map((locale) => ({
      locale,
      id: doc.id,
    }))
  );
}

export const dynamic = 'force-static';
export const revalidate = 86400; // 24h

async function fetchProject(id: string): Promise<Project | null> {
  const docRef = adminDb.collection('projet').doc(id);
  const docSnap = await docRef.get();

  if (!docSnap.exists) return null;

  const data = docSnap.data()!;

  return {
    id: docSnap.id,
    title: data.title,
    summary: data.summary,
    overview: data.overview,
    mainTool: data.mainTool,
    coverImage: data.coverImage,
    tags: data.tags,
    features: data.features,
    technologies: data.technologies,
    links: data.links,
    createdAt: data.createdAt?.toMillis?.() ?? null,
  };
}

export async function generateMetadata({
  params,
}: {
  params: { locale: 'fr' | 'en'; id: string };
}): Promise<Metadata> {
  const project = await fetchProject(params.id);
  if (!project) {
    return {
      title: params.locale === 'fr' ? 'Projet introuvable' : 'Project not found',
    };
  }

  const title = project.title[params.locale];
  const summary = project.summary[params.locale];

  return {
    title: `${title} | Sofian Belbacha`,
    description: summary,
    authors: [{ name: "Sofian Belbacha", url: "https://sofianbelbacha.vercel.app/fr" }],
    creator: "Sofian Belbacha",
    openGraph: {
      title,
      description: summary,
      url: `https://sofianbelbacha.vercel.app/fr/portfolio/${params.id}`,
      siteName: "SOFIAN",
      images: [
        {
          url: project.coverImage || "https://i.postimg.cc/g2GzjDXf/og-portfolio.png",
          alt: title,
        },
      ],
      locale: params.locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    metadataBase: new URL("https://sofianbelbacha.vercel.app/fr"),
  };
}

type PageProps = {
  params: { locale: 'fr' | 'en'; id: string };
};

const ProjectDetail = async ({ params }: PageProps) => {
  const project = await fetchProject(params.id);
  if (!project) return notFound();

  const locale = params.locale;

  return (
    <div className="border-b border-black/10 dark:border-dark-800 pt-24 pb-12 lg:pb-24 lg:pt-36">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-y-6">
            <Badge variant="secondary" className="w-fit flex items-center gap-2 bg-black/5 text-black dark:bg-indigo-900/20 dark:text-indigo-100">
              <Image
                src={project.mainTool.avatarUrl}
                width={20}
                height={20}
                alt={project.mainTool.name}
                className="rounded-full"
              />
              {project.mainTool.name}
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-black dark:text-white">
              {project.title[locale]}
            </h1>

            <div className="flex flex-wrap gap-3">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <Image
                  key={i}
                  src={tech.iconUrl}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="rounded opacity-80 dark:opacity-100"
                />
              ))}
            </div>

            <p className="text-base leading-relaxed text-zinc-700 dark:text-muted-foreground max-w-xl">
              {project.summary[locale]}
            </p>

            {project.createdAt && (
              <p className="text-sm text-muted-foreground">
                {new Date(project.createdAt).toLocaleDateString(
                  locale === 'fr' ? 'fr-FR' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </p>
            )}

            <div className="flex gap-4 pt-4">
              <Link href="#demo" className="h-[44px] px-5 rounded-xl font-semibold flex items-center gap-2 transition bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="10" cy="10" r="3" />
                  <path d="M1 10a9 9 0 0 1 18 0" />
                </svg>
                {locale === 'fr' ? "Voir la démo" : "View Demo"}
              </Link>

              <Link href="#github" className="h-[44px] px-5 rounded-xl flex items-center gap-2 transition border border-black/30 text-black hover:bg-black hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-black">
                <Github size={20} />            
                {locale === 'fr' ? "Code source" : "Source code"}
              </Link>
            </div>

            <Separator className="my-10 bg-black/10 dark:bg-white/10" />

            <div>
              <h2 className="text-lg font-semibold text-black dark:text-white mb-2">
                {locale === 'fr' ? "Vue d’ensemble" : "Overview"}
              </h2>
              <p className="text-sm leading-6 text-zinc-700 dark:text-muted-foreground">
                {project.overview[locale]}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-black dark:text-white mb-3">
                {locale === 'fr' ? "Fonctionnalités clés" : "Key Features"}
              </h2>
              <ul className="space-y-3 text-sm text-zinc-700 dark:text-muted-foreground">
                {project.features.map((feature, i) => (
                  <li key={i} className="relative pl-4">
                    <span className="absolute left-0 top-1 text-black/60 dark:text-primary">•</span>
                    <span>
                      <span className="font-medium text-black dark:text-white">
                        {feature.title[locale]}
                      </span>{" "}
                      — {feature.description[locale]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden mb-10 shadow-md dark:shadow-lg">
              <Image
                src={project.coverImage}
                width={688}
                height={512}
                alt="project preview"
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {project.technologies.map((tech, i) => (
                <Card key={i} className="transition bg-white border border-black/10 hover:border-black/20 shadow-sm dark:bg-zinc-900/60 dark:border-white/10 dark:hover:border-white/20">
                  <CardContent className="p-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <Image
                        alt={tech.name}
                        src={tech.iconUrl}
                        width={16}
                        height={16}
                      />
                      <span className="font-medium text-black dark:text-white">
                        {tech.name}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-muted-foreground">
                      {tech.description[locale]}
                    </p>
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
