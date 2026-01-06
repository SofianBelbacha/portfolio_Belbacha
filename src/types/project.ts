import { Timestamp } from "firebase/firestore";

export type LocalizedString = {
  fr: string;
  en: string;
};

export interface Project {
  id: string;

  title: LocalizedString;
  summary: LocalizedString;
  overview: LocalizedString;

  mainTool: {
    name: string;
    avatarUrl: string;
  };

  coverImage: string;

  tags: {
    typeProject?: string;
    name: LocalizedString;
  }[];

  features: {
    title: LocalizedString;
    description: LocalizedString;
  }[];

  technologies: {
    name: string;
    iconUrl: string;
    description: LocalizedString;
  }[];

  links: {
    demo?: string;
    github?: string;
  };

  createdAt: number | null;
}
