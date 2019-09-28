import React, { useState, useEffect } from "react";

import { useFetch } from "./useHooks";
import "./App.css";

const API = (count) => `http://numbersa.com/${count}/trivia`;

const App = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(API(count));

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      {loading ? "loading..." : data}
      <button onClick={() => setCount(0)}>reset to '0'</button>
    </>
  );
};

export default App;
