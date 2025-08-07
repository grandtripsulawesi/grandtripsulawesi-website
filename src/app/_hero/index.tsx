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
        <div className="pt-24 width__wrapper flex flex-col items-center h-svh lg:h-screen mx-auto">
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
            <div className="relative w-full h-3/5">
              <div>
                <Image
                  alt=""
                  src={'/images/hero/hero_slide_2.webp'}
                  width={720}
                  height={350}
                  className="w-full z-50 relative"
                />
              </div>
            </div>
          ) : isMobile && isMobile !== null ? (
            <div className="mt-auto h-1/4 max-h-1/3">
              <Image
                alt="Armada collection"
                src={'/images/hero/hero_cars.webp'}
                width={400}
                height={350}
                className="w-full h-auto z-30 relative object-cover"
              />
            </div>
          ) : (
            <div className="h-3/5"></div>
          )}

          <div className="mt-24 lg:mt-0 mb-12 lg:mb-0 ">
            <Button
              variant="outline"
              className="border-black rounded-full font-heading pl-4 lg:pl-3 mx-auto bg-black text-white"
            >
              <p className="text-lg lg:text-base">Lihat Koleksi Armada</p>
              <ArrowRightIcon className="size-12 lg:size-10" />
            </Button>
          </div>
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
