import Image from 'next/image';

const Benefit = () => {
  return (
    <section className="w-full lg:h-screen flex flex-col items-center justify-center mt-24 overflow-clip">
      <div className="width__wrapper mx-auto flex flex-col min-h-4/5 lg:max-h-screen space-y-8">
        <div className="text-center">
          <p>Mengapa memilih kami?</p>
          <h1 className="font-semibold font-heading">
            Berkomitmen Untuk Kualitas Terbaik
          </h1>
        </div>
        <article className="flex flex-col space-y-14 lg:flex-row lg:space-x-8 lg:space-y-0">
          <div className="relative">
            <Image
              alt="illustration of two people handshake in agreement with showroom at the background"
              src={'/images/benefit/benefit_illustration_1.webp'}
              width={350}
              height={270}
              className="w-full h-auto"
            />
            <div className="absolute top-8 -left-6 -z-10 bg-slate-300 w-full h-full rounded-2xl" />
          </div>
          <div className="basis-1/2">
            <h2 className="font-heading text-xl font-medium lg:text-2xl mb-2">
              Memberikan Fleksibilitas
            </h2>
            <p className="leading-relaxed text-justify">
              Dengan memilih jasa rental mobil kami, Anda tidak perlu repot
              mempersiapkan kebutuhan transportasi Anda lagi. Sehingga, Anda
              bisa lebih fokus dalam kegiatan Anda. Alih-alih berlama-lama
              menyiapkan keperluan kendaraan, gunakan waktu itu untuk bekerja
              atau:
            </p>
            <ul className="mt-4 text-base lg:text-sm space-y-2">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                Menghilangkan pekerjaan maintenance yang memakan waktu.
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                Memungkinkan Anda untuk fokus pada kegiatan penting lainnya.
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                Memberikan pengalaman berkesan bagi keperluan acara anda.
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col space-y-14 lg:space-y-0 lg:flex-row-reverse lg:space-x-8 lg:mt-24">
          <div className="relative">
            <Image
              alt="illustration of two people handshake in agreement with showroom at the background"
              src={'/images/benefit/benefit_illustration_2.webp'}
              width={350}
              height={270}
              className="w-full h-auto"
            />
            <div className="absolute top-8 -right-6 -z-10 bg-slate-300 w-full h-full rounded-2xl" />
          </div>
          <div className="mr-auto basis-3/5">
            <h2 className="font-heading text-xl font-medium lg:text-2xl mb-2">
              Kualitas Terbaik Bagi Anda
            </h2>
            <p className="leading-relaxed text-justify">
              Kami sangat menjaga kualitas service kami. Kami akan menyiapkan
              semua kebutuhan Anda terkait akomodasi transportasi. Kami
              berkomitmen untuk memastikan bahwa anda akan menikmati perjalanan
              Anda dengan pengalaman terbaik seperti:
            </p>
            <ul className="mt-4 text-base lg:text-sm space-y-2">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                Menyediakan driver professional sesuai kebutuhan Anda.
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                Memberikan layanan Drop-and-Pick sesuai titik jemput dan antar.
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                Menjamin perjalanan yang aman dan nyaman untuk anda.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Benefit;
