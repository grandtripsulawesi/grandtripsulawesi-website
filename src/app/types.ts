export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  readingTime?: string;
  coverImage?: string;
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
