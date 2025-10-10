'use client';
import Image from 'next/image';
import Button from './Button';
import { chatToWhatsapp } from '@/lib/utils';

const CallToAction = () => {
  return (
    <div className="w-full lg:h-[60vh] bg-foreground flex items-center justify-center py-12 lg:py-0">
      <div className="width__wrapper bg-zinc-800/40 rounded-2xl flex flex-col-reverse lg:flex-row px-6 py-10">
        <div className="basis-1/2 text-background">
          <h1 className="text-3xl font-medium font-heading leading-tight text-center lg:text-left">
            Sewa Mobil No Ribet!
            <br />
            GrandTrip Sulawesi
          </h1>
          <p className="text-justify leading-relaxed mt-2 mb-4">
            Untuk konsultasi gratis atau pemesanan langsung, hubungi Grandtrip
            Sulawesi hari ini! Dapatkan akses ke pilihan mobil terlengkap, baik
            lepas kunci maupun dengan driver profesional, dengan harga yang
            bersaing. Kami siap melayani kebutuhan rental mobil Anda di Makassar
            & Maros untuk perjalanan bisnis, keluarga, atau rombongan jamaah.
          </p>
          <Button
            onClick={() =>
              chatToWhatsapp('Halo! Saya ingin membuat pemesanan.')
            }
            variant="secondary"
            className="mx-auto lg:mx-0 text-base font-semibold  px-4 lg:px-3 py-3 lg:py-2 mt-4 lg:mt-auto w-full lg:w-fit transition duration-150 ease-out  active:scale-95 active:bg-amber-600 active:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
          >
            Booking Sekarang!
          </Button>
        </div>
        <div className="basis-auto flex items-center justify-center">
          <Image
            src={'/images/avanza.webp'}
            alt="picture of avanza"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
