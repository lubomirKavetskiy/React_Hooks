import React, { useMemo, useState, useEffect } from "react";

//import { useFetch } from "./useHooks";
import "./App.css";

// function computeLongestWord(arr) {
//   if (!arr) {
//     return [];
//   }

//   console.log("computing longest word");

//   let longestWord = "";

//   JSON.parse(arr).forEach(({ body }) =>
//     body.split(" ").forEach((word) => {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     })
//   );

//   return longestWord;
// }

const App = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rsp) => rsp.json())
      .then((json) => setUserId(json[count].id));
  }, [count]);

  const newId = useMemo(() => {
    console.log("useMemo", userId);
    return userId + 1;
  }, [userId]);

  //   const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");
  //   const longestWord = useMemo(() => computeLongestWord(data), [data]);
  console.log("render");
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      {/* <div>{longestWord}</div> */}
      <span>{newId}</span>
    </div>
  );
};

export default App;
