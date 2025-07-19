'use client';
import { Backdrop, Button, Card } from '@/components';
import { ArrowRightIcon, EyeIcon, EyeSlashIcon } from '@/icons';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import armadaData from './data.json';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ArmadaType {
  name: string;
  imagePath: string | StaticImport;
  armadaDetail: {
    person: number;
    transmission: string;
    rental: number;
  };
}

const dummyArmada: ArmadaType[] = armadaData;

const Icon = ({
  url,
  alt = 'Icon',
  width,
  height,
  className,
}: {
  url: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) => {
  const iconWidth = width;
  const iconHeight = height;

  return (
    <Image
      src={url}
      alt={alt}
      width={iconWidth}
      height={iconHeight}
      className={className}
    />
  );
};

const Fleet = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <section className="relative w-full">
      {!isExpand && (
        <Backdrop className="bg-gradient-to-t background from-gray-50 opacity-100 absolute bottom-0 left-0 right-0 h-1/2" />
      )}

      <div className="width__wrapper mx-auto">
        <div className="w-full flex justify-between my-24">
          <div>
            <p>Armada</p>
            <h1 className="font-heading leading-tight font-semibold">
              Kendaraan Terbaik Untuk
              <br /> Setiap Kebutuhan Anda
            </h1>
          </div>

          <p className="w-1/3 text-justify">
            Dari unit hemat bahan bakar untuk mobilitas pribadi, MPV nyaman
            untuk keluarga, hingga microbus untuk rombongan, kami punya
            semuanya. Setiap unit terawat dengan baik dan siap memberikan
            kenyamanan optimal.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {dummyArmada.map((armada) => (
            <Card
              key={armada.name}
              title={armada.name}
              action={
                <Button
                  variant="ghost"
                  onClick={() => {
                    console.log('click');
                  }}
                >
                  <ArrowRightIcon className="size-8" />
                </Button>
              }
              content={
                <Image
                  src={armada.imagePath}
                  alt={armada.name}
                  width={226}
                  height={160}
                />
              }
              footer={(data) => {
                return (
                  <div className="w-full flex justify-between">
                    <div className="w-full flex space-x-2">
                      <span className="flex items-center space-x-1">
                        <Icon
                          url="/images/armada/icons/armada_user.webp"
                          alt=""
                          height={20}
                          width={20}
                          className="size-3"
                        />
                        <p>{data.person}</p>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon
                          url="/images/armada/icons/armada_transmission.webp"
                          alt=""
                          height={20}
                          width={20}
                          className="size-3"
                        />
                        <p className="capitalize">{data.transmission}</p>
                      </span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <Icon
                        url="/images/armada/icons/armada_rupiah.webp"
                        alt=""
                        height={20}
                        width={20}
                        className="size-3"
                      />
                      <p>
                        {data.rental}
                        <span className="text-slate-400">/Jam</span>
                      </p>
                    </span>
                  </div>
                );
              }}
              footerData={armada.armadaDetail}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => setIsExpand(!isExpand)}
          className={cn(
            !isExpand ? 'absolute bottom-24 z-40' : 'mt-12 mb-24',
            'text-white text-md font-medium px-4 py-2.5 tracking-wide rounded-full'
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

export default Fleet;
