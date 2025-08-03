import { BlogPost } from '@/app/types';
import { Button } from '@/components';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  EyeSolidIcon,
} from '@/icons';
import { getAllPosts } from '@/lib/post';
import Link from 'next/link';

interface BlogPostProps {
  posts: BlogPost[];
}

const Blog = () => {
  const posts = getAllPosts();

  return (
    <section className="w-full relative">
      <div className="width__wrapper mx-auto my-24 flex flex-col space-x-4">
        <div>
          <p>Artikel</p>
          <h1 className="font-heading leading-tight font-semibold">
            Bacaan Untuk Anda
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {posts.map((post) => (
            <Card className="min-h-[400px]" key={post.title}>
              <div>
                <div className="w-full h-[180px] bg-gray-200" />
              </div>
              <CardContent>
                <h3 className="font-semibold font-heading mb-2 text-base">
                  {post.title}
                </h3>
                <p className="line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex-col">
                <ul className="flex space-x-2.5 text-zinc-500 w-full">
                  <li className="flex items-center space-x-0.5">
                    <EyeSolidIcon className="size-4" />
                    <p className="text-xs">100 views</p>
                  </li>
                  <li className="flex items-center space-x-0.5">
                    <ClockIcon className="size-4" />
                    <p className="text-xs">{post.readingTime}</p>
                  </li>
                  <li className="flex items-center space-x-0.5">
                    <CalendarIcon className="size-4" />
                    <p className="text-xs">{post.date}</p>
                  </li>
                </ul>
                <Button
                  variant="default"
                  className="ml-auto font-heading py-2.5 px-2 mt-4"
                >
                  <Link href={'/'.concat('blog/', post.slug)} className="flex">
                    <p>Baca Artikel</p>
                    <ChevronRightIcon />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
