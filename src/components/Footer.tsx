import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const bottomNav = [
  {
    name: 'paket trip',
    url: '#',
  },
  {
    name: 'tentang kami',
    url: '#',
  },
  {
    name: 'armada',
    url: '#',
  },
  {
    name: 'layanan',
    url: '#',
  },
  {
    name: 'ulasan',
    url: '#',
  },
  {
    name: 'galeri',
    url: '#',
  },
];

const CallToAction = () => {
  return (
    <div className="w-full h-[60vh] bg-foreground flex items-center justify-center">
      <div className="width__wrapper bg-gray-800/40 rounded-2xl flex px-6 py-10">
        <div className="basis-1/2 text-background">
          <h1 className="text-4xl font-medium font-heading leading-tight">
            Sewa Mobil No Ribet!
            <br />
            GrandTrip Sulawesi
          </h1>
          <p className="text-justify mt-2 mb-4">
            Untuk konsultasi gratis atau pemesanan langsung, hubungi Grandtrip
            Sulawesi hari ini! Dapatkan akses ke pilihan mobil terlengkap, baik
            lepas kunci maupun dengan driver profesional, dengan harga yang
            bersaing. Kami siap melayani kebutuhan rental mobil Anda di Makassar
            & Maros untuk perjalanan bisnis, keluarga, atau rombongan jamaah.
          </p>
          <Button className="font-heading py-2.5 px-2" variant="secondary">
            Bookin Sekarang!
          </Button>
        </div>
        <div className="basis-auto flex items-center justify-center">
          <Image
            src={'/images/armada/armada_brio.webp'}
            alt="picture of car Honda Brio"
            width={486}
            height={341}
            className="w-11/12 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="w-full">
      <CallToAction />
      <footer className="text-white relative min-h-[40vh] bg-foreground flex items-center justify-center bg__custom__gradient__footer overflow-clip">
        <div className="width__wrapper flex items-center justify-center space-x-8">
          <div className="basis-1/5 shrink-0 flex flex-col">
            <h3>Logo</h3>
            <p>
              Rental Mobil Terlengkap &<br />
              Terpercaya di Makassar & Maros.
            </p>
          </div>
          <div className="basis-auto grid grid-cols-5">
            <article className="flex flex-col space-y-6 col-span-2">
              <div className="flex space-x-2">
                <Image
                  alt="building-shaped icon that represents office address"
                  src={'/icons/icon_office.png'}
                  width={30}
                  height={30}
                  className="max-w-[24px] h-fit"
                />
                <div>
                  <h3 className="font-semibold">Alamat Showroom</h3>
                  <p className="mr-12">
                    Jl. Poros Makassar - Maros, Bontoa, Kec. Mandai, Kabupaten
                    Maros, Sulawesi Selatan 90552 (Depan Pintu Utama Grand Mall
                    Maros)
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Image
                  alt="clock icon that represents operational hours"
                  src={'/icons/icon_clock.png'}
                  width={30}
                  height={30}
                  className="max-w-[24px] h-fit"
                />
                <div>
                  <h3 className="font-semibold">Jam Operasional</h3>
                  <p>09:20 am - 04.30 pm (Setiap hari)</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Image
                  alt="man with phone icon that represents customer service"
                  src={'/icons/icon_man_on_phone.png'}
                  width={30}
                  height={30}
                  className="max-w-[24px] h-fit"
                />
                <div>
                  <h3 className="font-semibold">Customer Service</h3>
                  <p>0813-3787-3707 | 0852-5573-0703</p>
                </div>
              </div>
            </article>

            <article className="flex flex-col">
              <h3 className="font-semibold mb-2">Navigasi</h3>
              <nav
                role="list"
                className="list-none flex flex-col space-y-2 w-full"
              >
                {bottomNav.map((section) => (
                  <li key={section.name}>
                    <Link href={section.url}>
                      <p className="text-sm capitalize">{section.name}</p>
                    </Link>
                  </li>
                ))}
              </nav>
            </article>
            <article className="flex flex-col">
              <h3 className="font-semibold mb-2">Aturan & Ketentuan</h3>
              <ul className="list-none flex flex-col space-y-2 w-full">
                <Link href={'#'} referrerPolicy="no-referrer">
                  Terms
                </Link>
                <Link href={'#'} referrerPolicy="no-referrer">
                  Website Privacy
                </Link>
              </ul>
            </article>
            <article className="text-right flex flex-col">
              <h3 className="font-semibold mb-2">Follow Us!</h3>
              <ul className="list-none flex flex-col space-y-2 w-full">
                <Link href={'#'} referrerPolicy="no-referrer">
                  Facebook
                </Link>
                <Link href={'#'} referrerPolicy="no-referrer">
                  Instagram
                </Link>
              </ul>
            </article>
          </div>
          <div
            id="indo__map__decoration"
            className="absolute size-3/4 bg__custom__decorative translate-x-1/3 translate-y-1/3 opacity-20"
          />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
