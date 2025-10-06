'use client';
import { Backdrop, Button } from '@/components';
import useMediaQuery from '@/hooks/useMediaQuery';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const { isMobile } = useMediaQuery();
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <section
      id="gallery"
      className={cn(
        'relative mt-24 w-full',
        isExpand
          ? 'h-full'
          : !isMobile
          ? 'h-[100vh] overflow-clip'
          : 'h-[150vh] overflow-clip'
      )}
    >
      {!isExpand && (
        <Backdrop className="bg-gradient-to-t background from-gray-50 opacity-100 absolute bottom-0 left-0 right-0 h-1/2" />
      )}
      <div className="width__wrapper mx-auto">
        <div className="text-center">
          <p>Gallery</p>
          <h1 className="font-semibold font-heading">
            Armada Terlengkap Untuk Kebutuhan Anda
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <Image
                key={'gallery-' + index}
                alt="gallery collection"
                src={`/images/gallery/gallery_customer_${index + 1}.webp`}
                width={367}
                height={377}
                className="rounded-xl w-full min-h-full object-cover"
              />
            ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => setIsExpand(!isExpand)}
          className={cn(
            !isExpand ? 'absolute bottom-24 z-30' : 'mt-12 mb-24',
            'text-white font-semibold px-4 py-2.5 tracking-wide rounded-full transition duration-150 ease-out hover:bg-black/60 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60'
          )}
        >
          {!isExpand ? (
            <span className="flex items-center space-x-2">
              <ChevronDoubleDownIcon />
              <p className=" text-md lg:text-lg ">Selengkapnya</p>
            </span>
          ) : (
            <span className="flex items-center space-x-1">
              <ChevronDoubleUpIcon />
              <p className=" text-md lg:text-lg ">Tutup</p>
            </span>
          )}
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
