import { BlogPost } from '@/app/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CalendarIcon, ClockIcon, EyeSolidIcon } from '@/icons';
import { getAllPosts } from '@/lib/post';

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
            <Card className="min-h-[400px]">
              <div>
                <div className="w-full h-[180px] bg-gray-200" />
              </div>
              <CardContent>
                <h3 className="font-semibold font-heading mb-2 text-base">
                  {post.title}
                </h3>
                <p className="line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <ul className="flex space-x-2.5 text-zinc-500">
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
