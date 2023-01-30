import { useState, useEffect } from "react";

function useFetch(url, token) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const requestHeaders = token
    ? {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      }
    : {
        "Content-Type": "application/json",
      };
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setErr(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, err };
}

export default useFetch;
