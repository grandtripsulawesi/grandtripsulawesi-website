import { Button } from '@/components';
import Image from 'next/image';

const About = () => {
  return (
    <section className="relative w-full bg-foreground text-background min-h-[80vh] flex items-center justify-center">
      <div className="width__wrapper flex mx-auto space-x-4">
        <div className="basis-3/4 grid grid-cols-2 auto-rows-auto gap-2">
          <div className="row-span-2 relative flex justify-center items-center">
            <div className="absolute z-10 flex flex-col justify-center items-center">
              <h2 className="font-heading font-semibold text-4xl">100+</h2>
              <p>Pendapat positif mitra</p>
            </div>
            <div className="absolute top-0 left-0 bg-black/60 w-full h-full" />
            <Image
              alt="image of someone sitting inside a car—smilling while he being drived"
              src={'/images/about/about_illustration_1.webp'}
              width={300}
              height={500}
              className="w-full"
            />
          </div>
          <div className="relative h-fit">
            <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
              <h2 className="font-heading font-semibold text-4xl">2023</h2>
              <p>Beroperasi melayani</p>
            </div>
            <div className="absolute top-0 left-0 bg-black/60 w-full h-full " />
            <Image
              alt="image of someone sitting inside a car—smilling while he being drived"
              src={'/images/about/about_illustration_2.webp'}
              width={300}
              height={500}
              className="w-full"
            />
          </div>
          <div className="relative">
            <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
              <h2 className="font-heading font-semibold text-4xl">10+</h2>
              <p>Pilihan kendaraan</p>
            </div>
            <div className="absolute top-0 left-0 bg-black/60 w-full h-full " />
            <Image
              alt="image of someone sitting inside a car—smilling while he being drived"
              src={'/images/about/about_illustration_3.webp'}
              width={300}
              height={500}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col basis-1/3">
          <div className="font-heading">
            <p>Tentang kami</p>
            <h1 className="leading-tight font-semibold">
              GrandTrip Sulawesi: Mitra
              <br /> Perjalanan Anda
            </h1>
          </div>
          <p className="mt-4 text-justify">
            Grandtrip Sulawesi hadir sebagai solusi kebutuhan transportasi Anda
            di Makassar dan Maros. Berbekal pengalaman dan komitmen pada
            pelayanan prima, kami memahami bahwa setiap perjalanan adalah
            penting. Baik untuk keperluan bisnis, liburan keluarga, atau
            perjalanan rombongan jamaah Umroh, kami menyediakan armada kendaraan
            yang terawat dan beragam, didukung oleh tim profesional yang siap
            melayani Anda.
          </p>
          <br />
          <p>
            Misi kami adalah memberikan kemudahan dan kenyamanan dalam setiap
            perjalanan Anda.
          </p>

          <Button variant="secondary" className="px-3 py-2 mt-auto w-fit">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
