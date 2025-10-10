import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronRightIcon } from '@/icons';
import { getAllPosts } from '@/lib/post';
import Image from 'next/image';
import Link from 'next/link';

const postPathname = '/src/app/trip/posts';

const Trip = () => {
  const allTripPackages = getAllPosts(postPathname);

  return (
    <section className="w-full relative mt-12 lg:mt-[110px]">
      <header className="pt-4 flex flex-col items-center justify-center w-full h-[50vh] relative">
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
        <h1 className="py-12 lg:py-24 font-heading text-2xl font-semibold">
          Daftar Paket Liburan
        </h1>
        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allTripPackages.map((tripPackage) => (
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
              <CardFooter>
                <Button
                  variant="default"
                  className="w-full ml-auto font-heading py-3 lg:py-2.5 px-2 mt-4"
                >
                  <Link
                    href={'/'.concat('trip/', tripPackage.slug)}
                    className="flex justify-center items-end font-semibold"
                  >
                    <p>Selengkapnya</p>
                    <ChevronRightIcon />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Trip;
