import { useCallback, useEffect, useState } from 'react';

export default function useScrollDirection() {
  const [y, setY] = useState(0);
  const [scrolledUp, setScrolledUP] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrolledUP(true);
        setScrolledDown(false);
      } else if (y < window.scrollY) {
        setScrolledDown(true);
        setScrolledUP(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return {
    scrolledDown,
    scrolledUp,
  };
}
