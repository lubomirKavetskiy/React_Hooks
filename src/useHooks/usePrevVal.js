import { useRef, useEffect } from "react";

export const usePrevVal = (val) => {
  const prevValRef = useRef();

  useEffect(() => {
    prevValRef.current = val;
  }, [val]);

  return prevValRef.current;
};
