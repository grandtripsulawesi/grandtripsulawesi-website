'use client';
import { ArrowRightIcon } from '@/icons';
import Button from './Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileNav from './MobileNav';

const pageSection = [
  {
    name: 'paket trip',
    url: '/trip',
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

const Navigation = () => {
  return (
    <nav
      role="list"
      className="list-none flex items-center justify-center space-x-4 w-full"
    >
      {pageSection.map((section) => (
        <li key={section.name}>
          <Link href={section.url}>
            <p className="text-base capitalize">{section.name}</p>
          </Link>
        </li>
      ))}
    </nav>
  );
};

const Topbar = () => {
  const { isMobile } = useMediaQuery();

  return !isMobile && isMobile !== null ? (
    <div className={`absolute z-50 top-6 flex items-center w-full my-3`}>
      <div
        className={` flex items-center width__wrapper mx-auto px-4 py-2.5 bg-transparent transition-all duration-300`}
      >
        <div className="w-1/4">
          <div className="size-16 bg-custom rounded-full flex items-center justify-center shrink-0">
            <p className="text-white font-bold font-heading">GTS</p>
          </div>
        </div>
        <Navigation />
        <Button
          variant="outline"
          className="border-black rounded-full font-heading pl-3 ml-auto bg-transparent transition duration-150 ease-out hover:bg-white/10 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
          aria-label="Booking sekarang"
        >
          <p>Booking Sekarang</p>
          <ArrowRightIcon className="size-10" />
        </Button>
      </div>
    </div>
  ) : isMobile && isMobile !== null ? (
    <MobileNav pageSection={pageSection} />
  ) : (
    ''
  );
};

export default Topbar;
