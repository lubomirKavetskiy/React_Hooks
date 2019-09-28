import React from "react";
import { useCountRenders } from "./useHooks";

export const Hello = React.memo(({ increment }) => {
  useCountRenders();

  return <button onClick={() => increment(10)}>incr</button>;
});
