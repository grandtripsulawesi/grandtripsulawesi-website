import { Button } from '@/components';
import Searchbar from '@/components/Searchbar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronRightIcon, FaceFrownIcon } from '@/icons';
import { getAllPosts, getSearchedPost } from '@/lib/post';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const postPathname = '/src/app/trip/posts';

export const metadata: Metadata = {
  title: 'GrandTrip Sulawesi',
};

const Trip = async ({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) => {
  let tripPackages = getAllPosts(postPathname);
  const params = await searchParams;

  if (params?.query) tripPackages = getSearchedPost(params.query, postPathname);

  return (
    <section className="w-full relative mt-12">
      <header className="relative w-full h-[50vh] pt-4 flex flex-col items-center justify-center">
        <Image
          fill
          src={'/images/trip/trip_banner.webp'}
          alt="trip banner"
          className="w-full h-full object-cover pt-4 hidden md:block"
        />
        <Image
          fill
          src={'/images/trip/trip_banner_mobile.webp'}
          alt="trip banner mobile"
          className="w-full h-full object-cover pt-4 md:hidden"
        />
      </header>
      <div className="width__wrapper flex flex-col items-center min-h-screen mx-auto">
        <h1 className="py-12 font-heading text-2xl lg:text-3xl font-semibold">
          Daftar Paket Liburan
        </h1>
        <Suspense fallback={<div>Loading search...</div>}>
          <Searchbar />
        </Suspense>
        {tripPackages.length > 0 ? (
          <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tripPackages.map((tripPackage) => (
              <Card key={tripPackage.title}>
                <div>
                  <Image
                    src={tripPackage.coverImage as string}
                    alt={tripPackage.title}
                    width={300}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
                <CardContent>
                  <h3 className="font-semibold font-heading mb-2 text-lg lg:text-base">
                    {tripPackage.title}
                  </h3>
                  <p className="line-clamp-3">{tripPackage.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    variant="default"
                    className="w-full font-heading py-3 lg:py-2.5 px-2 mt-4 transition duration-150 ease-out hover:bg-black/80 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
                  >
                    <Link
                      href={'/'.concat('trip/', tripPackage.slug)}
                      className="flex w-full justify-center items-end font-semibold"
                    >
                      <p>Selengkapnya</p>
                      <ChevronRightIcon />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </article>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4">
              <FaceFrownIcon className="w-24 h-24 mx-auto mb-4 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center" />
              <h3 className="text-2xl font-semibold font-heading text-gray-600 mb-2">
                Tidak ada paket liburan
              </h3>
              <p className="text-gray-500 text-xl lg:text-base">
                Maaf, tempat yang kamu cari belum tersedia~
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trip;
