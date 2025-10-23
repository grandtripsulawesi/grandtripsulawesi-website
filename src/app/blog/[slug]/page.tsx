import { Button } from '@/components';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  EyeSolidIcon,
} from '@/icons';
import { getPostData, getRelatedPost, getAllPostSlug } from '@/lib/post';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GrandTrip Sulawesi',
};

export async function generateStaticParams() {
  const slugs = getAllPostSlug();
  return slugs;
}

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blogData = await getPostData(slug);
  const relatedBlog = getRelatedPost(slug, ['Travelling'], 3);

  if (!blogData) {
    return (
      <section className="relative w-full">
        <div className="width__wrapper flex flex-col items-center min-h-screen mx-auto">
          <div className="mt-12 lg:mt-24 text-center">
            <h1 className="font-semibold text-3xl mb-4">Blog post not found</h1>
            <p className="text-gray-600">
              The blog post you're looking for doesn't exist or couldn't be
              loaded.
            </p>
          </div>
        </div>
      </section>
    );
  }

  metadata.title = blogData.title;

  return (
    <section className="relative w-full">
      <div className="width__wrapper flex flex-col items-center min-h-screen mx-auto">
        <header className="mt-12 lg:mt-0 flex flex-col items-center justify-center lg:h-[33vh]">
          <div className="flex flex-col lg:flex-row items-baseline justify-between">
            <div className="lg:basis-2/5">
              <h1 className="font-semibold text-3xl">{blogData.title}</h1>
              <div className="flex items-center space-x-2">
                <div className="w-9/12 lg:w-1/3 h-0.5 bg-foreground my-6" />
                <p>{blogData.tags[0]}</p>
              </div>
              <ul className="mb-2 lg:mb-0 flex space-x-2.5 text-zinc-500 w-full">
                <li className="flex items-center space-x-0.5">
                  <ClockIcon className="size-4" />
                  <p className="text-xs">{blogData.readingTime}</p>
                </li>
                <li className="flex items-center space-x-0.5">
                  <CalendarIcon className="size-4" />
                  <p className="text-xs">{blogData.date}</p>
                </li>
              </ul>
            </div>
            <p className="lg:basis-2/5 text-justify leading-relaxed">
              {blogData.excerpt}
            </p>
          </div>
        </header>

        <article className="mt-4 w-full h-full">
          <Image
            src={blogData.slugImage as string}
            alt={blogData.title as string}
            width={300}
            height={300}
            priority
            quality={100}
            className="w-full h-auto lg:h-[40vh] object-cover mt-12 lg:mt-0"
          />
          <div
            id="markdown__content"
            className="w-full mb-24 max-w-none text-justify prose-lg mt-8 lg:max-w-4/5 lg:mt-12"
            dangerouslySetInnerHTML={{
              __html: blogData.contentHtml ?? '',
            }}
          ></div>
        </article>
        <div>
          <div>
            <p>Artikel Lainnya</p>
            <h1 className="font-heading leading-tight font-semibold">
              Bacaan Untuk Anda
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
            {relatedBlog.map((post) => (
              <Card key={post.slug} className="min-h-[400px]">
                <Image
                  src={post.coverImage as string}
                  alt={post.title}
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <CardContent>
                  <h3 className="font-semibold font-heading mb-2 text-lg lg:text-base">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex-col">
                  <ul className="flex space-x-2.5 text-zinc-500 w-full">
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
                    className="ml-auto font-heading py-3 lg:py-2.5 px-2 mt-4  transition duration-150 ease-out hover:bg-black/80 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
                  >
                    <Link
                      href={'/'.concat('blog/', post.slug)}
                      className="flex w-full"
                    >
                      <p>Baca Artikel</p>
                      <ChevronRightIcon />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
