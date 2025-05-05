export interface Project {
    id: string;
    title: string;
    mainTool: {
        [x: string]: unknown;
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
    createdAt: Date;
}

