import { Button, Widget } from '@/components';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronRightIcon } from '@/icons';
import { getPostData, getRelatedPost } from '@/lib/post';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPostSlug } from '@/lib/post';

const postPathname = '/src/app/trip/posts';

export async function generateStaticParams() {
  const slugs = getAllPostSlug('/src/app/trip/posts');
  return slugs;
}

const Trip = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const tripDetail = await getPostData(slug, postPathname);
  const relatedTrip = getRelatedPost(slug, ['Trip'], 3, postPathname);

  if (!tripDetail) return <></>;

  return (
    <section className="w-full">
      <div className="width__wrapper flex flex-col items-center min-h-screen mx-auto">
        <header className="flex flex-col items-center justify-center lg:h-[33vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:basis-2/5">
              <h1 className="font-semibold text-4xl">{tripDetail?.title}</h1>
              <div className="flex items-center space-x-2">
                <div className="w-9/12 lg:w-1/3 h-0.5 bg-foreground my-6" />
                <p>{tripDetail?.tags[0]}</p>
              </div>
            </div>
            <p className="basis-2/5 text-justify leading-relaxed">
              {tripDetail?.excerpt}
            </p>
          </div>
        </header>

        <Image
          src={tripDetail.slugImage as string}
          alt={tripDetail.title}
          width={300}
          height={300}
          priority
          className="w-full h-auto lg:h-[40vh] object-cover mt-12 lg:mt-0"
        />
        <article className="relative w-full h-full flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div
              id="markdown__content"
              className="w-full max-w-none prose mt-12 mb-24"
              dangerouslySetInnerHTML={{
                __html: tripDetail?.contentHtml ?? '',
              }}
            ></div>
          </div>
          <div className="lg:w-1/3 lg:pt-10">
            <Widget tripTitle={tripDetail?.title} />
          </div>
        </article>
        <div className="mt-24">
          <div className="w-full">
            <p>Paket Trip Lainnya</p>
            <h1 className="font-heading leading-tight font-semibold">
              Explore pilihan paket trip untuk anda!
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
            {relatedTrip.map((tripPackage) => (
              <Card className="min-h-[400px]" key={tripPackage.slug}>
                <div>
                  <div className="w-full h-[180px] bg-gray-200" />
                </div>
                <CardContent>
                  <h3 className="font-semibold font-heading mb-2 text-base">
                    {tripPackage.title}
                  </h3>
                  <p className="line-clamp-3">{tripPackage.excerpt}</p>
                </CardContent>
                <CardFooter className="flex-col">
                  <Button
                    variant="default"
                    className="ml-auto font-heading py-2.5 px-2 mt-4 transition duration-150 ease-out hover:bg-black/80 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
                  >
                    <Link
                      href={'/'.concat('trip/', tripPackage.slug)}
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

export default Trip;
