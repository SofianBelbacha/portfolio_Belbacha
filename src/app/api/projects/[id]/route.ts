// src/app/api/projects/[id]/route.ts
import { adminDb } from '@/firebase/firebase-admin.config';
import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const doc = await adminDb
      .collection('projects') // ou 'projects'
      .doc(params.id)
      .get();

    if (!doc.exists) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    const data = doc.data()!;

    return NextResponse.json({
      id: doc.id,
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
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
