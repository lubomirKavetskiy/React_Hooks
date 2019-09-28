import React, { useState, useEffect } from "react";

import { useFetch, useMeasure } from "./useHooks";

const API = (count) => `http://numbersapi.com/${count}/trivia`;

export const Hello = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(API(count));

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, spanRef] = useMeasure(data);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <span ref={spanRef}>{loading ? "loading..." : data}</span>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </>
  );
};
