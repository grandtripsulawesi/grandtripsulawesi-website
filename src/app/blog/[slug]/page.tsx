import { Button } from '@/components';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  EyeSolidIcon,
} from '@/icons';
import { getPostData, getRelatedPost } from '@/lib/post';
import Link from 'next/link';

export const Blog = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const postData = await getPostData(slug);
  const relatedPosts = getRelatedPost(slug, ['Travelling'], 3);

  return (
    <section className="relative w-full">
      <div className="mt-24 width__wrapper flex flex-col items-center min-h-screen mx-auto">
        <header className="mt-12 lg:mt-0 flex flex-col items-center justify-center lg:h-[33vh]">
          <div className="flex flex-col lg:flex-row items-baseline justify-between">
            <div className="lg:basis-2/5">
              <h1 className="font-semibold text-3xl">{postData?.title}</h1>
              <div className="flex items-center space-x-2">
                <div className="w-9/12 lg:w-1/3 h-0.5 bg-foreground my-6" />
                <p>{postData?.tags[0]}</p>
              </div>
              <ul className="mb-2 lg:mb-0 flex space-x-2.5 text-zinc-500 w-full">
                <li className="flex items-center space-x-0.5">
                  <ClockIcon className="size-4" />
                  <p className="text-xs">{postData?.readingTime}</p>
                </li>
                <li className="flex items-center space-x-0.5">
                  <CalendarIcon className="size-4" />
                  <p className="text-xs">{postData?.date}</p>
                </li>
              </ul>
            </div>
            <p className="lg:basis-2/5 text-justify leading-relaxed">
              {postData?.excerpt}
            </p>
          </div>
        </header>

        <article className="mt-4 w-full h-full">
          <div className="w-full h-80 bg-gray-300" />

          <div
            id="markdown__content"
            className="w-full max-w-none lg:max-w-4/5 text-left lg:text-justify prose lg:prose-lg mt-8 lg:mt-12 mb-24"
            dangerouslySetInnerHTML={{
              __html: postData?.contentHtml ?? '',
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
            {relatedPosts.map((post) => (
              <Card key={post.slug} className="min-h-[400px]">
                <div>
                  <div className="w-full h-[180px] bg-gray-200" />
                </div>
                <CardContent>
                  <h3 className="font-semibold font-heading mb-2 text-lg lg:text-base">
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
                    className="w-full ml-auto font-heading py-3 lg:py-2.5 px-2 mt-4"
                  >
                    <Link
                      href={'/'.concat('blog/', post.slug)}
                      className="flex"
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
