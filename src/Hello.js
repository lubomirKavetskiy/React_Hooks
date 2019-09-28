import React, { useState, useEffect } from "react";
import { useFetch } from "./useHooks";

const API = (count) => `http://numbersapi.com/${count}/trivia`;

export const Hello = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(API(count));

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      {loading ? "loading..." : data}
    </>
  );
};
