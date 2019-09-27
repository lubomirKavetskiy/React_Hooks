import React from "react";

import { useForm } from "./useHooks";
import "./App.css";

const App = () => {
  const [values, onChange] = useForm({ email: "", password: "" });

  return (
    <>
      <input
        type="text"
        name="email"
        type="email"
        value={values.email}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="password"
        type="password"
        value={values.password}
        onChange={onChange}
      />{" "}
    </>
  );
};

export default App;
