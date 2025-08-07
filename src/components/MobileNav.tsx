'use client';

import { MenuIcon, XMarkIcon } from '@/icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

const MobileNav = ({
  pageSection,
}: {
  pageSection: { name: string; url: string }[];
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  return (
    <div className="relative">
      <Button
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        variant="ghost"
        className="fixed right-5 top-8 z-50"
      >
        {!isNavOpen ? (
          <MenuIcon className="size-10 text-amber-600" />
        ) : (
          <XMarkIcon className="size-10 text-amber-600" />
        )}
      </Button>

      <nav
        role="list"
        className={cn(
          'list-none fixed z-40 top-0 right-0 flex flex-col items-center justify-center space-y-4 w-full h-full bg-zinc-800 text-white transition-transform duration-300 ease-in-out',
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {pageSection.map((section) => (
          <li key={section.name}>
            <Link href={section.url} onClick={() => setIsNavOpen(false)}>
              <p className="text-base capitalize">{section.name}</p>
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
