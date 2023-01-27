import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  useEffect(() => {
    fetch(url)
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
