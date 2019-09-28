import React, { useMemo, useState } from "react";

import { useFetch } from "./useHooks";
import "./App.css";

function computeLongestWord(arr) {
  if (!arr) {
    return [];
  }

  console.log("computing longest word");

  let longestWord = "";

  JSON.parse(arr).forEach(({ body }) =>
    body.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
}

const App = () => {
  const [count, setCount] = useState(0);

  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default App;
