import React, { useRef } from "react";

import "./App.css";

const App = () => {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} type="email" name="email" />
      <button onClick={() => inputRef.current.focus()}>setFocus</button>
    </>
  );
};

export default App;
