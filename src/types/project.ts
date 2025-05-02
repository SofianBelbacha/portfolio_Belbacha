import { Timestamp } from "firebase/firestore";

export interface Project {
    id: string;
    title: string;
    mainTool: {
        [x: string]: any;
        name: string;
        avatarUrl: string;
    };
    coverImage: string;
    tags: {
        typeProject: string; 
        name: string 
    }[];
    summary: string;
    links: {
        demo?: string;
        github?: string;
    };
    overview: string;
    features: {
        title: string;
        description: string;
    }[];
    technologies: {
        name: string;
        iconUrl: string;
        description: string;
    }[];
    createdAt: string | Date; // à parser si besoin en `Date` ou `Timestamp`
}

