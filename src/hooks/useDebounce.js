import { useEffect, useState, useCallback } from "react";

export default function useDebounce(delay) {
  const [callback, setCallback] = useState(() => () => {});

  useEffect(() => {
    // Execute callback after the specified delay
    const handler = setTimeout(() => {
      callback();
    }, delay);

    // Clean up the timeout when callback changes
    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);

  const debounce = useCallback((newCallback) => {
    setCallback(() => newCallback);
  }, []);

  return debounce;
}
