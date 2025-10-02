import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  readingTime?: string;
  coverImage?: string;
  coverImageDesktop?: string;
}

export interface BlogPostWithContent extends BlogPost {
  contentHtml: string;
}

export interface PostFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  readingTime?: string;
  coverImage?: string;
}

export interface ArmadaType {
  name: string;
  imageUrl: string | StaticImport;
  armadaDetail: {
    person: number;
    transmission: string;
    rental: {
      basic: number;
      allin: number;
    };
  };
}

export type ExtractParamsValue = Partial<ArmadaType>;
