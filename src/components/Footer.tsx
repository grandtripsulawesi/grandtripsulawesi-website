import Image from 'next/image';
import Link from 'next/link';
import CallToAction from './CallToAction';

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

const Footer = () => {
  return (
    <section className="w-full">
      <CallToAction />
      <footer className="text-white relative min-h-[40vh] py-12 bg-foreground flex items-center justify-center bg__custom__gradient__footer overflow-clip">
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
                <Link
                  href={'#'}
                  referrerPolicy="no-referrer"
                  className="line-through hover:cursor-not-allowed"
                  aria-disabled
                >
                  <p>Terms</p>
                </Link>
                <Link
                  href={'#'}
                  referrerPolicy="no-referrer"
                  className="line-through hover:cursor-not-allowed"
                  aria-disabled
                >
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
