'use client';

/*
  TODO: 
  stateful URL parameter, updater function that receives object 

  TODO:
  /fleet?modal=true&name=honda-brio&person=5&transmission=manual&rental=250000&image=armada_brio.webp
*/

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const useURLState = () => {
  const param = useSearchParams();
  const { replace } = useRouter();

  const [searchParams, setSearchParams] = useState(new URLSearchParams(param));

  useEffect(() => {
    setSearchParams(param);

    const handlePopstate = () =>
      setSearchParams(new URLSearchParams(searchParams));
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [param]);

  const updateUrl = useCallback((pathname: string, params: Object) => {
    // check if params empty, null or undefined then skip? if exist set key and value to new param
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (
        value === '' ||
        value === null ||
        value === undefined ||
        value === false
      )
        newParams.delete(key);
      else newParams.set(key, value);
    });
    // end with pushing new URL

    const newUrl = `${pathname}${newParams ? '?' + newParams : ''}`;
    // window.history.pushState({}, '', newUrl);
    replace(newUrl, { scroll: false });
    setSearchParams(newParams);
  }, []);

  return {
    searchParams,
    updateUrl,
  };
};

export default useURLState;
