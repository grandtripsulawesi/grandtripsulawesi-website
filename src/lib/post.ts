import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostWithContent, PostFrontMatter } from '@/types';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const postDirectory = (pathname: string = '/src/app/blog/posts') =>
  path.join(process.cwd(), pathname);

const safeFileNames = (pathname?: string) => {
  const dir = postDirectory(pathname);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
};

export const getAllPostSlug = (pathname?: string) => {
  const fileNames = safeFileNames(pathname);
  const slugCollection = fileNames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');

    return {
      params: {
        slug: slug,
      },
    };
  });

  return slugCollection;
};

export const getAllPosts = (pathname?: string): BlogPost[] => {
  const fileNames = safeFileNames(pathname);
  const allPostData: BlogPost[] = fileNames
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(postDirectory(pathname), filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const frontMatter = matterResult.data as PostFrontMatter;

      return {
        slug,
        ...frontMatter,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return allPostData;
};

export const getPostData = async (
  slug: string,
  pathname?: string
): Promise<BlogPostWithContent | null> => {
  try {
    const fullPath = path.join(postDirectory(pathname), slug + '.md');

    // Check if file exists before reading
    if (!fs.existsSync(fullPath)) {
      console.error(`Post file not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const frontMatter = matterResult.data as PostFrontMatter;

    const parsedHtml = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(matterResult.content);

    const contentHtml = parsedHtml.toString();

    return {
      slug,
      contentHtml,
      ...frontMatter,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
};

export const getRelatedPost = (
  currentSlug: string,
  tags?: string[],
  limit: number = 3,
  pathname?: string
) => {
  const allPosts = getAllPosts(pathname);

  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, limit);
};

export const getSearchedPost = (query: string, pathname: string) => {
  const allPosts = getAllPosts(pathname);

  return allPosts.filter((post) =>
    post.tags.some((tag) => tag.includes(query))
  );
};
