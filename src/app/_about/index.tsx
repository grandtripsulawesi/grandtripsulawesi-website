import { Button } from '@/components';
import Image from 'next/image';

const About = () => {
  return (
    <section className="relative w-full bg-foreground text-background lg:h-[80vh] flex items-center justify-center">
      <div className="width__wrapper my-24 lg:my-0 h-3/4 lg:h-3/5 flex flex-col lg:flex-row mx-auto space-y-8 lg:space-y-0 lg:space-x-4">
        <div className="lg:basis-3/5 h-full lg:h-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="relative h-1/3 lg:h-full min-w-2/4 flex justify-center items-center">
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
              className="w-full h-40 lg:h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col space-y-4 h-full">
            <div className="relative h-full lg:h-1/2">
              <div className="text-center absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                <h2 className="font-heading font-semibold text-4xl">2023</h2>
                <p>Beroperasi melayani</p>
              </div>
              <div className="absolute top-0 left-0 bg-black/60 w-full h-full " />
              <Image
                alt="image of someone sitting inside a car—smilling while he being drived"
                src={'/images/about/about_illustration_2.webp'}
                width={300}
                height={200}
                className="w-full h-40 lg:h-full object-cover rounded-xl"
              />
            </div>
            <div className="relative h-full lg:h-1/2">
              <div className="absolute text-center z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                <h2 className="font-heading font-semibold text-4xl">10+</h2>
                <p>Pilihan kendaraan</p>
              </div>
              <div className="absolute top-0 left-0 bg-black/60 w-full h-full " />
              <Image
                alt="image of someone sitting inside a car—smilling while he being drived"
                src={'/images/about/about_illustration_3.webp'}
                width={300}
                height={300}
                className="w-full h-40 lg:h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end lg:justify-start basis-full lg:basis-1/3">
          <div>
            <p>Tentang kami</p>
            <h1 className="font-heading leading-tight font-semibold">
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
          <p className="text-justify">
            Misi kami adalah memberikan kemudahan dan kenyamanan dalam setiap
            perjalanan Anda.
          </p>

          <Button
            variant="secondary"
            className="text-base lg:text-sm px-4 lg:px-3 py-3 lg:py-2 mt-4 lg:mt-auto w-fit"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
