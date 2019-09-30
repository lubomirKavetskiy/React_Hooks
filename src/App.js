import React, { useState, useRef } from "react";

function AppRouter() {
  const [count, setCount] = useState(0);
  const countRef = useRef();

  countRef.current = count;

  const handleAlert = () => {
    setTimeout(() => {
      console.log(countRef.current);
    }, 3000);
  };

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <br />
      <span>{count}</span>
      <button onClick={handleAlert}>alert</button>
      <br />
    </>
  );
}

export default AppRouter;
