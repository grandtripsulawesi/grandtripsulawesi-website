import { Button } from '@/components';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CalendarIcon, ChevronRightIcon, ClockIcon } from '@/icons';
import { getAllPosts } from '@/lib/post';
import Image from 'next/image';
import Link from 'next/link';

// Add this if you want to pre-generate the blog index
export async function generateStaticParams() {
  return []; // Empty array means this page will be statically generated
}

const Blog = () => {
  const posts = getAllPosts();

  return (
    <section className="w-full relative">
      <div className="width__wrapper mx-auto my-24 flex flex-col space-x-4">
        <div className="text-center lg:text-left">
          <p>Artikel</p>
          <h1 className="font-heading leading-tight font-semibold">
            Bacaan Untuk Anda
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {posts.map((post) => (
            <Card className="lg:min-h-[400px]" key={post.title}>
              <Image
                src={post.coverImage as string}
                alt={post.title}
                width={300}
                height={300}
                className="w-full object-cover"
              />
              <CardContent>
                <h3 className="font-semibold font-heading mb-2 text-lg lg:text-base min-h-">
                  {post.title}
                </h3>
                <p className="line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto flex flex-col">
                <ul className="flex space-x-2.5 text-zinc-500 w-full flex-wrap">
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
                  className="w-full ml-auto font-heading py-3 lg:py-2.5 px-2 mt-4  transition duration-150 ease-out hover:bg-black/80 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
                >
                  <Link
                    href={'/'.concat('blog/', post.slug)}
                    className="flex w-full justify-center items-end font-semibold"
                  >
                    <p className="text-base">Baca Artikel</p>
                    <ChevronRightIcon className="size-6 lg:size-5" />
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
