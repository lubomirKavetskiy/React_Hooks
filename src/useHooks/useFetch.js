import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);

  // called when the component is going to unmount
  useEffect(() => () => (isCurrent.current = false), []);

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
          isCurrent.current && setState({ data, loading: false });
        }, 2000)
      )
      .catch((err) => console.log(err));
  }, [url, setState]);

  return state;
};
