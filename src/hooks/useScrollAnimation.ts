'use client';
import { useEffect, useRef, RefObject } from 'react';

export function useScrollAnimation<T extends HTMLElement>(
  threshold = 0.12,
  delay = 0
): RefObject<T> {
  const ref = useRef<T>(null) as RefObject<T>;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('in-view');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
}
