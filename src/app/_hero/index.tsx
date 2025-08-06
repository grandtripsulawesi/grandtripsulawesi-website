'use client';
import { Button } from '@/components';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ArrowRightIcon } from '@/icons';
import Image from 'next/image';
import { useEffect } from 'react';

const Hero = () => {
  const { isMobile } = useMediaQuery();

  useEffect(() => console.log(isMobile), [isMobile]);

  return (
    <>
      <section className="relative w-full bg__custom__gradient">
        <div className="mt-24 width__wrapper flex flex-col items-center h-lvh lg:h-screen mx-auto">
          <h1 className="lg:text-center font-heading font-bold text-4xl text-center tracking-tight leading-tight lg:text-5xl lg:mt-12 lg:tracking-normal lg:leading-tight">
            Rental Mobil{' '}
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 inline-block text-transparent bg-clip-text">
              Terlengkap
            </span>{' '}
            &<br />{' '}
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 inline-block text-transparent bg-clip-text">
              Terpercaya
            </span>{' '}
            di Makassar & Maros
          </h1>
          {!isMobile && isMobile !== null ? (
            <div className="relative">
              <Image
                alt="White Honda Brio"
                src={'/images/armada/armada_hiace.webp'}
                width={720}
                height={350}
                className="max-w-11/12 mt-12 z-50 relative"
              />

              <div className="absolute w-auto top-[10%] -left-[10%]">
                <Image
                  alt="image of tana toraja depicts a traditional tana toraja building; tongkonan"
                  src={'/images/hero/hero_place_1.webp'}
                  width={800}
                  height={800}
                  className="w-1/2 max-w-full h-auto inline-block"
                />
                <Image
                  alt="arrow that points to a photo"
                  src={'/images/hero/hero_arrow_1.webp'}
                  width={260}
                  height={260}
                  className="w-1/3 max-w-xs md:max-w-sm h-auto inline-block"
                />
              </div>

              <div className="absolute w-auto top-[5%] -right-[21%]">
                <Image
                  alt="arrow that points to a photo"
                  src={'/images/hero/hero_arrow_2.webp'}
                  width={260}
                  height={260}
                  className="w-1/3 max-w-xs md:max-w-sm h-auto rotate-180 inline-block"
                />
                <Image
                  alt="image of tanjung bira depicts a beautiful beach located in bulukumba"
                  src={'/images/hero/hero_place_2.webp'}
                  width={800}
                  height={800}
                  className="w-3/5 max-w-full h-auto inline-block rotate-6"
                />
              </div>

              <div className="absolute w-full bottom-[3%] left-0">
                <div className="relative flex flex-col">
                  <Image
                    alt=""
                    src={'/images/hero/hero_place_4.webp'}
                    width={200}
                    height={200}
                    className="absolute -top-[120%] -left-[20%] shrink-0 w-1/4 max-w-full h-auto -rotate-12"
                  />

                  <Image
                    alt="arrow that points to a photo"
                    src={'/images/hero/hero_arrow_2.webp'}
                    width={100}
                    height={100}
                    className="shrink-0 w-1/6 max-w-xs md:max-w-sm h-auto rotate-12"
                  />
                </div>
              </div>

              <div className="absolute w-auto -bottom-[3%] -right-[20%]">
                <Image
                  alt="arrow that points to a photo"
                  src={'/images/hero/hero_arrow_1.webp'}
                  width={260}
                  height={260}
                  className="w-1/3 max-w-xs md:max-w-sm h-auto inline-block rotate-180"
                />
                <Image
                  alt="image of tana toraja depicts a christian holy place; Lord Jesus Christ Statue"
                  src={'/images/hero/hero_place_3.webp'}
                  width={800}
                  height={800}
                  className="w-3/5 max-w-full h-auto inline-block rotate-12"
                />
              </div>
            </div>
          ) : (
            <div className="my-auto h-1/3">
              <Image
                alt="White Honda Brio"
                src={'/images/hero/hero_cars.webp'}
                width={400}
                height={350}
                className="w-full h-auto z-50 relative object-cover"
              />
            </div>
          )}

          <Button
            variant="outline"
            className="mt-auto lg:mt-0 mb-12 lg:mb-0 border-black rounded-full font-heading pl-4 lg:pl-3 mx-auto bg-black text-white"
          >
            <p className="text-lg lg:text-base">Lihat Koleksi Armada</p>
            <ArrowRightIcon className="size-12 lg:size-10" />
          </Button>
        </div>

        <div
          id="indo__map__decoration"
          className="bg__custom__decorative absolute -z-10 size-full lg:size-3/4 left-1/2 -translate-x-1/2 top-1/5 lg:top-1/4 -translate-y-1/5 opacity-75"
        />
      </section>
    </>
  );
};

export default Hero;
