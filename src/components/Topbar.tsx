'use client';
import { ArrowRightIcon } from '@/icons';
import Button from './Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileNav from './MobileNav';
import { Command, CommandInput } from '@/components/ui/command';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { chatToWhatsapp } from '@/lib/utils';

const pageSection = [
  {
    name: 'paket trip',
    url: '/trip',
  },
  {
    name: 'tentang kami',
    url: '/#about',
  },
  {
    name: 'armada',
    url: '/#fleet',
  },
  {
    name: 'layanan',
    url: '/#service',
  },
  {
    name: 'ulasan',
    url: '/#review',
  },
  {
    name: 'galeri',
    url: '/#gallery',
  },
];

const Navigation = () => {
  return (
    <nav
      role="list"
      className="list-none flex items-center justify-center space-x-4 w-full"
    >
      {pageSection.map((section) => (
        <li key={section.name}>
          <Link href={section.url}>
            <p className="text-base capitalize font-semibold">{section.name}</p>
          </Link>
        </li>
      ))}
    </nav>
  );
};

const Topbar = () => {
  const { isMobile } = useMediaQuery();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // adjust threshold as needed
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return !isMobile && isMobile !== null ? (
    <div
      className={`${
        pathname === '/' ? 'fixed z-50' : 'relative'
      } top-6 my-3 flex items-center w-full`}
    >
      <div
        className={`flex items-center width__wrapper mx-auto px-4 py-2.5 ${
          scrolled
            ? 'bg-white border border-slate-200 rounded-full'
            : 'bg-transparent'
        } transition-all duration-300`}
      >
        <div className="mr-4 shrink-0">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/thumbnail.webp"
              alt="GrandTrip Sulawesi logo"
              width={500}
              height={500}
              className="size-20 rounded-full object-cover"
              priority
            />
          </Link>
        </div>

        {pathname === '/trip' ? (
          <>
            <Command className="ml-auto w-2/6 h-10 border rounded-full">
              <CommandInput
                className="h-full"
                placeholder="Cari paket liburan mu"
              />
            </Command>
          </>
        ) : pathname === '/' ? (
          <>
            <Navigation />
            <Button
              onClick={() =>
                chatToWhatsapp('Halo! Saya ingin membuat pemesanan.')
              }
              variant="outline"
              className="border-black rounded-full font-heading pl-3 mr-4 bg-transparent transition duration-150 ease-out hover:bg-white/10 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
              aria-label="Booking sekarang"
            >
              <p className="font-semibold">Booking Sekarang</p>
              <ArrowRightIcon className="size-10" />
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="border-black rounded-full font-heading pl-3 ml-auto bg-transparent transition duration-150 ease-out hover:bg-white/10 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
              aria-label="Booking sekarang"
            >
              <p>Booking Sekarang</p>
              <ArrowRightIcon className="size-10" />
            </Button>
          </>
        )}
      </div>
    </div>
  ) : isMobile && isMobile !== null ? (
    <MobileNav pageSection={pageSection} />
  ) : (
    ''
  );
};

export default Topbar;
