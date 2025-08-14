import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Command, CommandInput } from '@/components/ui/command';
import { ChevronRightIcon } from '@/icons';
import { getAllPosts } from '@/lib/post';
import Link from 'next/link';

const postPathname = '/src/app/trip/posts';

const Trip = () => {
  const allTripPackages = getAllPosts(postPathname);

  return (
    <section className="w-full relative">
      <div className="mt-[110px] width__wrapper flex flex-col items-center min-h-screen mx-auto">
        <header className="flex flex-col items-center justify-center w-full h-[60vh]">
          <div className="w-full h-3/5 bg-gray-300" />
          <Command className="h-16 border rounded-full my-12">
            <CommandInput
              className="h-full"
              placeholder="Cari paket liburan mu"
            />
          </Command>
        </header>
        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allTripPackages.map((tripPackage) => (
            <Card key={tripPackage.title}>
              <div>
                <div className="w-full h-[180px] bg-gray-200" />
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
