import { useState, useRef, useLayoutEffect } from "react";

// used rest for wrapping deps in array
export const useMeasure = (...deps) => {
  console.log(deps);
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
  }, deps);

  return [rect, myRef];
};
