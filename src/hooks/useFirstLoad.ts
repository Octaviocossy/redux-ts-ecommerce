import { useEffect, useRef } from 'react';

const useFirstLoad = <T>(fn: () => T) => {
  const firstLoad = useRef(true);
  const result = useRef<T | null>(null);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;

      return;
    }

    result.current = fn();
  }, [fn]);

  return { result };
};

export default useFirstLoad;
