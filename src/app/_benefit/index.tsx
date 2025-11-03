import Image from 'next/image';

const Benefit = () => {
  return (
    <section
      id="benefit"
      className="w-full lg:h-screen flex flex-col items-center justify-center mt-24 overflow-clip lg:overflow-visible"
    >
      <div className="width__wrapper mx-auto flex flex-col min-h-4/5 lg:max-h-screen space-y-8">
        <div className="text-center">
          <p>Mengapa memilih kami?</p>
          <h1 className="font-semibold font-heading">
            Berkomitmen Untuk Kualitas Terbaik
          </h1>
        </div>
        <article className="flex flex-col space-y-14 lg:flex-row lg:space-x-8 lg:space-y-0">
          <div className="relative h-auto">
            <Image
              alt="illustration of two people handshake in agreement with showroom at the background"
              src={'/images/benefit/benefit_illustration_1.webp'}
              width={350}
              height={270}
              className="w-full h-full"
            />
            <div className="absolute top-8 left-0 lg:-left-10 xl:-left-6 -z-10 bg-slate-300 w-full h-full rounded-2xl" />
          </div>
          <div className="basis-1/2">
            <ul className="mt-4 text-base lg:text-sm space-y-3">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                <h2 className="font-heading text-lgfont-semibold lg:font-medium">
                  Terpercaya
                </h2>
                <p className="leading-snug text-justify pr-2 lg:pr-0">
                  Dipercaya oleh berbagai kalangan pelanggan, dari individu
                  hingga korporasi. Dengan pelayanan terbaik dan profesional
                  yang selalu mengutamakan kepuasan, kami pastikan pengalaman
                  sewa mobil Anda berjalan lancar dan menyenangkan.
                </p>
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                <h2 className="font-heading text-lg font-semibold lg:font-medium">
                  Rekomendasi Terbaik
                </h2>
                <p className="leading-snug text-justify pr-2 lg:pr-0">
                  GrandTrip Sulawesi didukung oleh tim manajemen yang
                  profesional dan berintegritas yang berkomitmen untuk
                  memberikan pelayanan yang terbaik bagi kebutuhan pelanggan.
                </p>
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                <h2 className="font-heading text-lg font-semibold lg:font-medium">
                  Pilihan Mobil Lengkap
                </h2>
                <p className="leading-snug text-justify pr-2 lg:pr-0">
                  Kami menyediakan beragam pilihan mobil terbaru dan tentunya
                  dalam kondisi prima untuk semua kebutuhan. Anda dapat memilih
                  mobil yang sesuai dan perjalanan Anda dijamin aman dan nyaman.
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col space-y-14 lg:space-y-0 lg:flex-row-reverse xl:mt-24">
          <div className="relative h-auto">
            <Image
              alt="illustration of two people handshake in agreement with showroom at the background"
              src={'/images/benefit/benefit_illustration_2.webp'}
              width={350}
              height={270}
              className="ml-auto w-full h-full"
            />
            <div className="absolute top-8 right-0 lg:-right-10 xl:-right-6 -z-10 bg-slate-300 w-full h-full rounded-2xl" />
          </div>
          <div className="mr-auto basis-3/5">
            <ul className="mt-4 text-base lg:text-sm space-y-3">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                <h2 className="font-heading text-lg font-semibold lg:font-medium">
                  Proses Mudah dan Cepat
                </h2>
                <p className="leading-snug text-justify pr-2 lg:pr-0">
                  Proses sewa mobil di GrandTrip Sulawesi sangat cepat dan
                  mudah. Dengan respon yang cepat dari admin via Whatsapp akan
                  menghemat waktu anda dan perjalanan semakin lancar.
                </p>
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                <h2 className="font-heading text-lg font-semibold lg:font-medium">
                  ⁠Harga Hemat dan Transparan
                </h2>
                <p className="leading-snug text-justify pr-2 lg:pr-0">
                  Kami menawarkan harga sewa yang kompetitif dan transparan,
                  sehingga anda dapat merencanakan perjalanan tanpa khawatir ada
                  biaya tersembunyi yang mengganggu.
                </p>
              </li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-4 before:h-4 before:bg-amber-600 before:[mask-image:url(./../icons/svg/CheckIcon.svg)] before:[-webkit-mask-image:url(./../icons/svg/CheckIcon.svg)] before:[mask-repeat:no-repeat] before:[-webkit-mask-repeat:no-repeat] before:[mask-size:contain] before:[-webkit-mask-size:contain] before:[mask-position:center] before:[-webkit-mask-position:center]">
                <h2 className="font-heading text-lg font-semibold lg:font-medium">
                  Driver Berkualitas
                </h2>
                <p className="leading-snug text-justify pr-2 lg:pr-0">
                  Kami memberikan tim pengemudi yang ramah dan penuh perhatian
                  serta berpengalaman yang mengutamakan keselamatan. Sehingga
                  perjalanan anda lebih menyenangkan, aman dan nyaman.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Benefit;
