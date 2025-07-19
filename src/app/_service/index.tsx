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
      <div className="width__wrapper mx-auto my-24 flex space-x-4">
        <div className="basis-1/2 shrink-0">
          <Image
            src={'/images/service/service_illustration_1.webp'}
            alt="picture of a man drives car, smiling positively"
            width={600}
            height={648}
            className=""
          />
        </div>
        <div className="basis-full mt-auto">
          <div>
            <p>Layanan</p>
            <h1 className="font-heading leading-tight font-semibold">
              Apa Yang Kami Tawarkan?
            </h1>
          </div>
          <p className="mt-4 text-justify">
            Kami memahami setiap pelanggan memiliki kebutuhan yang berbeda. Oleh
            karena itu, Grandtrip Sulawesi menawarkan beragam pilihan layanan
            rental mobil yang dapat disesuaikan dengan rencana perjalanan Anda.
          </p>

          <ul className="w-full grid grid-cols-2 gap-3 mt-4">
            {dummyService.map((item) => (
              <li className="flex w-full space-x-2 bg-amber-500/10 border-2 border-amber-400/50 px-2.5 py-2 rounded-xl">
                <div className="flex items-center justify-center bg-amber-500/20 border-2 border-amber-400 p-1.5 rounded-lg h-fit">
                  <HandThumbUpIcon className="size-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
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
