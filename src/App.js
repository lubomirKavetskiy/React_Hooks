import React, { useState, useCallback } from "react";

import { Hello } from "./Hello";
import { Square } from "./Square";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );
  console.log(count);
  return (
    <>
      <Hello increment={increment} />
      {favoriteNums.map((n) => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </>
  );
};

export default App;
