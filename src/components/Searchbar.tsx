'use client';

import useURLState from '@/hooks/useUrlState';
import { Command, CommandInput } from './ui/command';
import { useDebouncedCallback } from 'use-debounce';
import { useCallback, useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

const Searchbar = () => {
  const pathname = usePathname();
  const { searchParams, updateUrl } = useURLState();
  const [searchInput, setSearchInput] = useState('');
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Only run on initial render to sync with URL params
    if (!hasInitialized.current) {
      setSearchInput(searchParams.get('query') || '');
      hasInitialized.current = true;
    }
  }, [searchParams]);

  const updateSearchParams = useDebouncedCallback((term: string) => {
    updateUrl(pathname, {
      query: term.toLocaleLowerCase(),
    });
  }, 300);

  const handleOnSearch = useCallback(
    (value: string) => {
      setSearchInput(value);
      updateSearchParams(value);
    },
    [updateSearchParams]
  );

  return (
    <Command className="h-14 my-6 lg:my-12 border rounded-full">
      <CommandInput
        value={searchInput}
        onValueChange={handleOnSearch}
        className="h-full text-xl lg:text-base"
        placeholder="Cari paket liburan seru"
      />
    </Command>
  );
};

export default Searchbar;
