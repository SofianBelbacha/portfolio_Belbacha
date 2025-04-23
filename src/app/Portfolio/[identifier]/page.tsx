// app/portfolio/[id]/page.tsx
import { adminDb } from '@/firebase/firebase-admin.config';
import { notFound } from "next/navigation";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string[];
  createdAt: number;
}

export default async function ProjectDetail({ params }: { params: { identifier: string } }) {
  console.log(params.identifier)
    const docRef = adminDb.collection("projects").doc(params.identifier);
    const docSnap = await docRef.get();
    console.log(docSnap.exists)
    if (!docSnap.exists) {
        return notFound(); // ou affiche une erreur
      }
      
      const project = { id: docSnap.id, ...docSnap.data() } as Project;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-white">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={1080}
        height={600}
        className="rounded-lg mb-6 object-cover"
      />
      <p className="text-lg">{project.description}</p>
      <div className="mt-6 text-sm text-gray-400 space-y-1">
      <p>
        <strong>Tags:</strong>{" "}
        {Array.isArray(project.tags) ? project.tags.join(", ") : "Aucun tag"}
      </p>
        <p><strong>Date:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
        {Array.isArray(project.url) && project.url.length > 0 && (
      <div>
        <strong>Liens:</strong>
        <ul className="list-disc ml-6">
          {project.url.map((link, i) => (
            <li key={i}>
              <a className="underline" href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
      </div>
    </div>
  );
}
