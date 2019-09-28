import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: false });

  useEffect(() => {
    setState((s) => ({ data: s.data, loading: true }));

    const request = async () => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        return text;
      } catch (error) {
        throw error;
      }
    };

    request()
      .then((data) =>
        setTimeout(() => {
          console.log(data);
          setState({ data: "data", loading: false });
        }, 1000)
      )
      .catch((err) => console.log(err));
  }, [url, setState]);

  return state;
};
