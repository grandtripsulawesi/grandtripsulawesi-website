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

const Footer = () => {
  return (
    <section className="w-full">
      <CallToAction />
      <footer className="text-white relative min-h-[40vh] bg-foreground flex items-center justify-center bg__custom__gradient__footer overflow-clip">
        <div className="width__wrapper flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:basis-1/5 shrink-0 flex flex-col text-center lg:text-left">
            {/* logo */}
            <Image
              src={'/images/thumbnail.webp'}
              alt="GrandTrip Sulawesi logo"
              width={500}
              height={500}
              className="mx-auto size-40 rounded-full object-cover mb-3"
              priority
            />
            <p className="text-center">
              Rental Mobil Terlengkap &<br />
              Terpercaya di Makassar & Maros.
            </p>
          </div>
          <div className="text-sm basis-auto grid gap-y-12 lg:gap-y-0 lg:grid-cols-5">
            <article className="flex flex-col space-y-6 lg:col-span-2">
              <div className="mx-auto lg:mx-0 text-center lg:text-left flex flex-col lg:flex-row space-y-2 lg:space-y-0">
                <Image
                  alt="building-shaped icon that represents office address"
                  src={'/icons/icon_office.png'}
                  width={30}
                  height={30}
                  className="mx-auto lg:mx-0 w-full h-fit max-w-[40px] sm:max-w-[24px]"
                />
                <div className="lg:ml-2">
                  <h3 className="text-xl lg:text-base font-semibold">
                    Alamat Garasi
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <p className="lg:mr-12">
                      Jl. Poros Makassar - Maros, Bontoa, Kec. Mandai, Kabupaten
                      Maros, Sulawesi Selatan 90552 (Basement Grand Mall Maros)
                    </p>
                    <p className="lg:mr-12">
                      Jl. Domba No.18, Makassar, Sulawesi Selatan
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto lg:mx-0 text-center lg:text-left flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                <Image
                  alt="clock icon that represents operational hours"
                  src={'/icons/icon_clock.png'}
                  width={30}
                  height={30}
                  className="mx-auto lg:mx-0 w-full h-fit max-w-[40px] sm:max-w-[24px]"
                />
                <div className="lg:ml-2">
                  <h3 className="text-xl lg:text-base font-semibold">
                    Jam Operasional
                  </h3>
                  <p>07:30 am - 22.00 pm (Setiap hari)</p>
                </div>
              </div>

              <div className="mx-auto lg:mx-0 text-center lg:text-left flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                <Image
                  alt="man with phone icon that represents customer service"
                  src={'/icons/icon_man_on_phone.png'}
                  width={30}
                  height={30}
                  className="mx-auto lg:mx-0 w-full h-fit max-w-[40px] sm:max-w-[24px]"
                />
                <div className="lg:ml-2">
                  <h3 className="text-xl lg:text-base font-semibold">
                    Customer Service
                  </h3>
                  <p>0813-3787-3707 | 0852-5573-0703</p>
                </div>
              </div>
            </article>

            <article className="flex flex-col text-center lg:text-left">
              <h3 className="font-semibold mb-2 text-xl lg:text-base">
                Navigasi
              </h3>
              <nav
                role="list"
                className="list-none flex flex-col space-y-2 w-full"
              >
                {bottomNav.map((section) => (
                  <li key={section.name}>
                    <Link href={section.url}>
                      <p className="capitalize">{section.name}</p>
                    </Link>
                  </li>
                ))}
              </nav>
            </article>
            <article className="flex flex-col text-center lg:text-left">
              <h3 className="font-semibold mb-2 text-xl lg:text-base">
                Aturan & Ketentuan
              </h3>
              <ul className="list-none flex flex-col space-y-2 w-full">
                <Link href={'#'} referrerPolicy="no-referrer">
                  <p>Terms</p>
                </Link>
                <Link href={'#'} referrerPolicy="no-referrer">
                  <p>Website Privacy</p>
                </Link>
              </ul>
            </article>
            <article className="text-center lg:text-right flex flex-col">
              <h3 className="font-semibold mb-2 text-xl lg:text-base">
                Follow Us!
              </h3>
              <ul className="list-none flex flex-col space-y-2 w-full">
                <Link
                  href={
                    'https://web.facebook.com/profile.php?id=100090651137648'
                  }
                  referrerPolicy="no-referrer"
                >
                  <p>Facebook</p>
                </Link>
                <Link
                  href={
                    'https://www.instagram.com/grandtripsulawesi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  }
                  referrerPolicy="no-referrer"
                >
                  <p>Instagram</p>
                </Link>
              </ul>
            </article>
          </div>
          <div
            id="indo__map__decoration"
            className="absolute size-full bg__custom__decorative left-1/2 -translate-x-1/2 translate-y-1/3 lg:left-0 lg:translate-x-1/3 lg:translate-y-1/3 opacity-20"
          />
          <span className="lg:text-sm text-center pb-12 lg:pb-0 lg:text-right lg:absolute lg:right-5 lg:bottom-5">
            © 2025 GrandTrip Sulawesi. All Rights Reserved.
            <br /> Website by Invokasi Design
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
