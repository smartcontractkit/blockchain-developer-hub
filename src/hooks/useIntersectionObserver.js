import { useEffect, useState } from 'react';

export default function useIntersectionObserver(element) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = element.current;

    const observer = new IntersectionObserver(
      ([entries]) => {
        setIsVisible(entries.isIntersecting);
      },
      {
        rootMargin: '-100px',
      }
    );

    target && observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return isVisible;
}
