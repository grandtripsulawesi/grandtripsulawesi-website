import { useEffect, useState } from 'react';

/**
 * Responsive media-query hook optimized with matchMedia.
 * - Uses media query change events instead of window resize
 * - Avoids redundant state updates
 * - Safe on SSR (no window access during render)
 *
 * Default breakpoint matches Tailwind's sm: <640px
 */
const useMediaQuery = (query: string = '(max-width: 639.98px)') => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);

    const updateMatches = () => {
      const next = mediaQueryList.matches;
      setIsMobile((prev) => (prev === next ? prev : next));
    };

    // Initialize on mount
    updateMatches();

    // Subscribe to changes (modern and Safari fallbacks)
    if (typeof mediaQueryList.addEventListener === 'function') {
      mediaQueryList.addEventListener('change', updateMatches);
      return () => mediaQueryList.removeEventListener('change', updateMatches);
    }

    // Fallback for older browsers (Safari < 14)
    // @ts-ignore - legacy API support
    mediaQueryList.addEventListener(updateMatches);
    return () => {
      // @ts-ignore - legacy API support
      mediaQueryList.removeEventListener(updateMatches);
    };
  }, [query]);

  return { isMobile };
};

export default useMediaQuery;
