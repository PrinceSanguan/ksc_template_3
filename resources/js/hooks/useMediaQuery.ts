import { useState, useEffect } from 'react';

/**
 * Hook that returns a boolean indicating if the given media query matches
 * @param query Media query string to match
 * @returns Boolean indicating if the media query matches
 */
export const useMediaQuery = (query: string): boolean => {
  // Check if window is available (for SSR compatibility)
  const getMatches = (): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches());

  useEffect(() => {
    // Handle changes (e.g., window resize/device orientation change)
    const handleChange = () => {
      setMatches(getMatches());
    };

    // Initial check
    handleChange();

    // Create media query list
    const mediaQueryList = window.matchMedia(query);

    // Add event listener using the appropriate method
    // Modern browsers use addEventListener, older browsers use addListener
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      // @ts-expect-error - For older browsers
      mediaQueryList.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        // @ts-expect-error - For older browsers
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};
