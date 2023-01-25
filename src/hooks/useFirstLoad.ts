import { useEffect, useRef } from 'react';

const useFirstLoad = <T>(fn: () => T) => {
  const fl = useRef(true);
  const result = useRef<T | null>(null);

  useEffect(() => {
    if (fl.current) {
      fl.current = false;

      return;
    }

    result.current = fn();
  }, [fn]);

  return { result };
};

export default useFirstLoad;
