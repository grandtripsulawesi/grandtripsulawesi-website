import { useEffect, useState } from 'react';

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    const updateIsMobileState = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener('resize', updateIsMobileState);
    return () => {
      window.removeEventListener('resize', updateIsMobileState);
    };
  }, []);

  return { isMobile };
};

export default useMediaQuery;
