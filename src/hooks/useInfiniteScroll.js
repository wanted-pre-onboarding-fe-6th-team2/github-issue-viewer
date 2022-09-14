import { useState, useEffect } from 'react';

const useInfiniteScroll = (targetRef, fetchMoreItemsFunc) => {
  const [isFetching, setIsFetching] = useState(false);

  const intersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setIsFetching(true);
    });
    setIsFetching(false);
  };

  useEffect(() => {
    let observer;

    if (targetRef) {
      observer = new IntersectionObserver(intersectionObserverCallback);
      observer.observe(targetRef);
    }

    return () => observer?.disconnect(targetRef);
  }, [targetRef]);

  useEffect(() => {
    if (!isFetching) return;

    fetchMoreItemsFunc();
  }, [isFetching, fetchMoreItemsFunc]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
