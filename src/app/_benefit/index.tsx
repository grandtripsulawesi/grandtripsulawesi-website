import Image from 'next/image';

const Benefit = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center mt-24">
      <div className="width__wrapper mx-auto flex flex-col min-h-4/5 max-h-screen space-y-8">
        <div className="text-center">
          <p>Mengapa memilih kami?</p>
          <h1 className="font-semibold font-heading">
            Berkomitmen Untuk Kualitas Terbaik
          </h1>
        </div>
        <article className="flex space-x-8">
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
            <h2 className="font-heading text-2xl mb-2">
              Memberikan Fleksibilitas
            </h2>
            <p className="leading-relaxed">
              Dengan memilih jasa rental mobil kami, Anda tidak perlu repot
              mempersiapkan kebutuhan transportasi Anda lagi. Sehingga, Anda
              bisa lebih fokus dalam kegiatan Anda. Alih-alih berlama-lama
              menyiapkan keperluan kendaraan, gunakan waktu itu untuk bekerja
              atau
            </p>
            <ul className="mt-4 list-image-[url(./../icons/svg/CheckIcon.svg)] list-inside text-sm">
              <li>Menghilangkan pekerjaan maintenance yang memakan waktu.</li>
              <li>
                Memungkinkan Anda untuk fokus pada kegiatan penting lainnya.
              </li>
              <li>Memberikan pengalaman berkesan bagi keperluan acara anda.</li>
            </ul>
          </div>
        </article>

        <article className="flex flex-row-reverse space-x-8 mt-24">
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
            <h2 className="font-heading text-2xl mb-2">
              Kualitas Terbaik Bagi Anda
            </h2>
            <p className="leading-relaxed">
              Kami sangat menjaga kualitas service kami. Kami akan menyiapkan
              semua kebutuhan Anda terkait akomodasi transportasi. Kami
              berkomitmen untuk memastikan bahwa anda akan menikmati perjalanan
              Anda dengan pengalaman terbaik seperti:
            </p>
            <ul className="mt-4 list-image-[url(./../icons/svg/CheckIcon.svg)] list-inside text-sm">
              <li>Menyediakan driver professional sesuai kebutuhan Anda.</li>
              <li>
                Memberikan layanan Drop-and-Pick sesuai titik jemput dan antar.
              </li>
              <li>Menjamin perjalanan yang aman dan nyaman untuk anda.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Benefit;
