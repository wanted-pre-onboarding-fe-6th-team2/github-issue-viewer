import { useCallback, useRef, useEffect } from 'react';

const useInfiniteScroll = (onIntersect, options) => {
  const ref = useRef(null);

  const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return undefined;
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [handleIntersect, ref, options]);

  return ref;
};

export default useInfiniteScroll;
