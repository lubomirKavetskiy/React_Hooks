import React, { useState } from "react";

import { Hello } from "./Hello";

import "./App.css";

const App = () => {
  const [showHello, setShowHello] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setShowHello((s) => !s);
        }}
      >
        show hello
      </button>
      {showHello && <Hello />}
    </>
  );
};

export default App;
