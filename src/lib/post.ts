import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, PostFrontMatter } from '@/app/types';

const postDirectory = path.join(process.cwd(), '/src/app/blog/posts');

export const getAllPostSlug = () => {
  const fileNames = fs.readdirSync(postDirectory);
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

export const getAllPosts = (): BlogPost[] => {
  const fileNames = fs.readdirSync(postDirectory);
  console.info(postDirectory);
  const allPostData: BlogPost[] = fileNames
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(postDirectory, filename);
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
