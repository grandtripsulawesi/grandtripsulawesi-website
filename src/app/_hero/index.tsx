'use client';
import { Button } from '@/components';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ArrowRightIcon } from '@/icons';
import { smoothScrollToElement } from '@/lib/utils';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const images = [
  {
    src: '/images/hero/hero_slide_1.webp',
    alt: 'hero illustration; honda brio fleet with 4 images of travelling spot',
    priority: true,
  },
  {
    src: '/images/hero/hero_slide_2.webp',
    alt: 'hero illustration; hiace fleet with 4 images of travelling spot',
  },
];

const Hero = () => {
  const { isMobile } = useMediaQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef<any>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goToNext]);

  return (
    <>
      <section className="relative w-full bg__custom__gradient">
        <div className="pt-24 width__wrapper flex flex-col items-center h-svh lg:h-lvh mx-auto">
          <h1 className="lg:text-center font-heading font-bold text-4xl text-center tracking-tight leading-tight xl:text-5xl lg:mt-12 lg:tracking-normal lg:leading-tight">
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
            <div className="relative w-full h-3/5 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out h-full will-change-transform"
                style={{
                  width: `${images.length * 100}%`,
                  transform: `translateX(-${currentIndex * 50}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div
                    className="shrink-0 flex items-center justify-center"
                    key={index}
                    style={{
                      width: `${100 / images.length}%`,
                    }}
                  >
                    <Image
                      alt={image.alt}
                      src={image.src}
                      priority={image.priority || currentIndex === 0}
                      width={720}
                      height={350}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : isMobile && isMobile !== null ? (
            <div className="mt-auto h-1/4 max-h-1/3">
              <Image
                priority
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

          <div className="relative z-30 mt-24 lg:mt-auto mb-12 lg:mb-10 ">
            <Button
              variant="outline"
              className="border-black rounded-full font-heading pl-4 lg:pl-3 mx-auto bg-black text-white transition duration-150 ease-out hover:bg-white/10 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
              onClick={() => smoothScrollToElement('fleet', 2500, -80)}
            >
              <p className="text-lg">Lihat Koleksi Armada</p>
              <ArrowRightIcon className="size-12 xl:size-10" />
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
