import React, { useState } from "react";
import { usePrevVal } from "./useHooks";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const prevVal = usePrevVal(count);

  return (
    <>
      <span>prevValue: {prevVal}</span>
      <br />
      <button onClick={() => setCount((c) => c + 1)}>click</button>
    </>
  );
};

export default App;
