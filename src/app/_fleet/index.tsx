'use client';
import { Backdrop, Button, Card, CarDialog, Icon } from '@/components';
import { ArrowRightIcon, EyeIcon, EyeSlashIcon } from '@/icons';
import Image from 'next/image';
import armadaData from './data.json';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import useURLState from '@/hooks/useUrlState';
import { ArmadaType } from '../types';
import useMediaQuery from '@/hooks/useMediaQuery';

const dummyArmada: ArmadaType[] = armadaData;

const Fleet = () => {
  const { isMobile } = useMediaQuery();
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const { searchParams, updateUrl } = useURLState();

  return (
    <section
      className={cn(
        'relative w-full',
        isMobile && (isExpand ? 'h-full' : ' h-[150vh] overflow-clip')
      )}
    >
      {!isExpand && (
        <Backdrop className="bg-gradient-to-t background from-gray-50 opacity-100 absolute bottom-0 left-0 right-0 h-1/2" />
      )}

      <div className="width__wrapper mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between mt-24 lg:my-24 space-y-8 lg:space-y-0">
          <div className="text-center lg:text-left">
            <p>Armada</p>
            <h1 className="font-heading leading-tight font-semibold">
              Kendaraan Terbaik Untuk
              <br /> Setiap Kebutuhan Anda
            </h1>
          </div>

          <p className="lg:w-1/3 text-center lg:text-justify">
            Dari unit hemat bahan bakar untuk mobilitas pribadi, MPV nyaman
            untuk keluarga, hingga microbus untuk rombongan, kami punya
            semuanya. Setiap unit terawat dengan baik dan siap memberikan
            kenyamanan optimal.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-4 mt-12 lg:mt-0">
          {dummyArmada.map((armada, index) => (
            <Card
              key={armada.name + '-' + index}
              title={armada.name}
              action={
                <Button
                  variant="ghost"
                  onClick={() => {
                    updateUrl('/fleet', {
                      modal: true,
                      name: armada.name,
                      imageUrl: armada.imagePath,
                      person: armada.armadaDetail.person,
                      transmission: armada.armadaDetail.transmission,
                      rental: armada.armadaDetail.rental,
                    });
                  }}
                >
                  <ArrowRightIcon className="size-10 lg:size-8" />
                </Button>
              }
              content={
                <Image
                  src={armada.imagePath}
                  alt={armada.name}
                  width={226}
                  height={160}
                  className="mx-auto"
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
      <CarDialog params={searchParams} updateUrl={updateUrl} />
    </section>
  );
};

export default Fleet;
