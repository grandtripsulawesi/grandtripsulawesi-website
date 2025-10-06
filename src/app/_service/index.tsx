import {
  ArrowRightLeftIcon,
  BriefcaseIcon,
  CalendarIcon,
  KeyIcon,
  MapIcon,
  MapPinIcon,
  PaperPlaneIcon,
  UserGroupIcon,
} from '@/icons';
import Image from 'next/image';

const dummyService = [
  {
    title: '⁠Lepas Kunci Dalam/Luar Kota',
    body: 'Sewa mobil tanpa sopir untuk bepergian dalam dan luar kota.',
    icon: <KeyIcon className="size-12 lg:size-6" />,
  },
  {
    title: 'Perjalanan Dalam dan Luar Kota',
    body: 'Melayani semua keperluan perjalanan Anda di dalam maupun luar kota.',
    icon: <MapPinIcon className="size-12 lg:size-6" />,
  },
  {
    title: 'Perjalanan Dinas',
    body: 'Layanan sewa kendaraan khusus untuk perjalanan dinas pekerjaan kantor.',
    icon: <BriefcaseIcon className="size-12 lg:size-6" />,
  },
  {
    title: '⁠Perjalanan Wisata',
    body: 'Rental mobil untuk menemani seluruh perjalanan liburan wisata.',
    icon: <MapIcon className="size-12 lg:size-6" />,
  },
  {
    title: 'Pribadi/Grup',
    body: 'Melayani kebutuhan transportasi untuk perorangan maupun grup.',
    icon: <UserGroupIcon className="size-12 lg:size-6" />,
  },
  {
    title: 'Antar/Jemput Dalam dan Luar Kota',
    body: 'Jasa pengantaran atau penjemputan dari/ke lokasi dalam atau luar kota.',
    icon: <ArrowRightLeftIcon className="size-12 lg:size-6" />,
  },
  {
    title: 'Antar/Jemput Bandara/Pelabuhan',
    body: 'Melayani antar-jemput penumpang dari/ke bandara atau pelabuhan.',
    icon: <PaperPlaneIcon className="size-12 lg:size-6" />,
  },
  {
    title: '⁠Harian/Mingguan/Bulanan',
    body: 'Pilihan masa sewa mobil fleksibel: harian/mingguan/bulanan.',
    icon: <CalendarIcon className="size-12 lg:size-6" />,
  },
];

const Service = () => {
  return (
    <section id="service" className="w-full relative">
      <div className="width__wrapper mx-auto my-24 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="basis-1/2 shrink-0">
          <Image
            src={'/images/service/service_illustration_1.webp'}
            alt="picture of a man drives car, smiling positively"
            width={600}
            height={648}
            className="h-full object-cover rounded-2xl"
          />
        </div>
        <div className="basis-full mt-auto">
          <div className="text-center lg:text-left">
            <p>Layanan</p>
            <h1 className="font-heading leading-tight font-semibold">
              Apa Yang Kami Tawarkan?
            </h1>
          </div>
          <p className="mt-4 text-center lg:text-justify">
            Kami memahami setiap pelanggan memiliki kebutuhan yang berbeda. Oleh
            karena itu, GrandTrip Sulawesi menawarkan beragam pilihan layanan
            rental mobil yang dapat disesuaikan dengan rencana perjalanan Anda.
          </p>

          <ul className="w-full grid lg:grid-cols-2 gap-5 lg:gap-3 mt-4">
            {dummyService.map((item, index) => (
              <li
                key={item.title + '-' + index}
                className="flex flex-col lg:flex-row w-full lg:space-x-2 bg-amber-500/10 border-2 border-amber-400/50 px-2.5 py-2 rounded-xl"
              >
                <div className="flex w-fit mx-auto items-center justify-center lg:mr-2 lg:bg-amber-500/20 lg:border-2 lg:border-amber-400 p-1.5 rounded-lg h-fit">
                  {item.icon && (
                    <span className="text-amber-500">{item.icon}</span>
                  )}
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-semibold text-xl lg:text-sm">
                    {item.title}
                  </h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
