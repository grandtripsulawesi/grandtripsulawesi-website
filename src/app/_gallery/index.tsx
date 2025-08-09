'use client';
import { Backdrop, Button } from '@/components';
import useMediaQuery from '@/hooks/useMediaQuery';
import { EyeIcon, EyeSlashIcon } from '@/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const { isMobile } = useMediaQuery();
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <section
      className={cn(
        'mt-24 relative w-full',
        isMobile && (isExpand ? 'h-full' : ' h-[100vh] overflow-clip')
      )}
    >
      {!isExpand && (
        <Backdrop className="bg-gradient-to-t background from-gray-50 opacity-100 absolute bottom-0 left-0 right-0 h-1/2" />
      )}
      <div className="width__wrapper mx-auto">
        <div className="text-center">
          <p>Mengapa memilih kami?</p>
          <h1 className="font-semibold font-heading">
            Berkomitmen Untuk Kualitas Terbaik
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Image
                key={'gallery-' + index}
                alt="gallery collection"
                src={'/images/gallery/gallery_illustration.webp'}
                width={367}
                height={377}
                className="rounded-xl w-full min-h-full lg:h-80 object-cover"
              />
            ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => setIsExpand(!isExpand)}
          className={cn(
            !isExpand ? 'absolute bottom-24 z-40' : 'mt-12 mb-24',
            'text-white text-md font-semibold px-4 py-2.5 tracking-wide rounded-full'
          )}
        >
          {!isExpand ? (
            <span className="flex items-center space-x-2">
              <EyeIcon />
              <p>Selengkapnya</p>
            </span>
          ) : (
            <span className="flex items-center space-x-1">
              <EyeSlashIcon />
              <p>Tutup</p>
            </span>
          )}
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
