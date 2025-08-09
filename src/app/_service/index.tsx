import { HandThumbUpIcon } from '@/icons';
import Image from 'next/image';

const dummyService = [
  {
    title: 'Service Item',
    body: 'Lorem ipsum dolor sit amet consectetur. Est in congue leo vitae sit.',
  },
  {
    title: 'Service Item',
    body: 'Lorem ipsum dolor sit amet consectetur. Est in congue leo vitae sit.',
  },
  {
    title: 'Service Item',
    body: 'Lorem ipsum dolor sit amet consectetur. Est in congue leo vitae sit.',
  },
  {
    title: 'Service Item',
    body: 'Lorem ipsum dolor sit amet consectetur. Est in congue leo vitae sit.',
  },
  {
    title: 'Service Item',
    body: 'Lorem ipsum dolor sit amet consectetur. Est in congue leo vitae sit.',
  },
  {
    title: 'Service Item',
    body: 'Lorem ipsum dolor sit amet consectetur. Est in congue leo vitae sit.',
  },
];

const Service = () => {
  return (
    <section className="w-full relative">
      <div className="width__wrapper mx-auto my-24 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="basis-1/2 shrink-0">
          <Image
            src={'/images/service/service_illustration_1.webp'}
            alt="picture of a man drives car, smiling positively"
            width={600}
            height={648}
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
                <div className="flex w-fit items-center justify-center lg:bg-amber-500/20 lg:border-2 lg:border-amber-400 p-1.5 rounded-lg h-fit">
                  <HandThumbUpIcon className="size-8 lg:size-5 text-amber-500" />
                </div>
                <div>
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
