import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils";

export const Home = React.memo(() => {
  const { user, setUser } = useContext(UserContext);
  console.log("home");

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            // call logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
});
