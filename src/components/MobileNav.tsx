'use client';

import { ChevronLeftIcon, MenuIcon, XMarkIcon } from '@/icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const MobileNav = ({
  pageSection,
}: {
  pageSection: { name: string; url: string }[];
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (!isNavOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsNavOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isNavOpen]);

  return (
    <div className="relative">
      {pathname.length > 1 && (
        <div className="relative flex items-center left-0 top-10 z-50">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            aria-label={'Previous page'}
          >
            {<ChevronLeftIcon className="size-10" />}
          </Button>
          <p>Kembali</p>
        </div>
      )}

      <Button
        onClick={() => setIsNavOpen((v) => !v)}
        variant="ghost"
        className="fixed right-5 top-8 z-50"
        aria-haspopup="menu"
        aria-controls="mobile-menu"
        aria-expanded={isNavOpen}
        aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
      >
        {!isNavOpen ? (
          <div className="bg-amber-500/20 border border-custom p-1 rounded-full">
            <MenuIcon className="size-10 text-amber-600" />
          </div>
        ) : (
          <div className="bg-amber-500/20 border border-custom p-1 rounded-full">
            <XMarkIcon className="size-10 text-amber-600" />
          </div>
        )}
      </Button>

      <nav
        aria-label="Mobile"
        className={cn(
          'fixed z-40 top-0 right-0 w-full h-full transition-transform duration-300 ease-in-out',
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <ul
          id="mobile-menu"
          role="list"
          className={cn(
            'list-none flex flex-col items-center justify-center space-y-4 w-full h-full text-white bg-foreground bg__custom__gradient__footer overflow-clip'
          )}
        >
          <div>
            <Link href="/" aria-label="Home">
              <Image
                src="/images/thumbnail.webp"
                alt="GrandTrip Sulawesi logo"
                width={500}
                height={500}
                className="size-24 rounded-full object-cover"
                priority
              />
            </Link>
          </div>
          {pageSection.map((section) => (
            <li key={section.name}>
              <Link href={section.url} onClick={() => setIsNavOpen(false)}>
                <p className="text-base capitalize">{section.name}</p>
              </Link>
            </li>
          ))}
          <div
            id="indo__map__decoration"
            className="absolute size-full bg__custom__decorative left-1/2 -translate-x-1/2 translate-y-1/3 lg:left-0 lg:translate-x-1/3 lg:translate-y-1/3 opacity-20 pointer-events-none"
          />
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
