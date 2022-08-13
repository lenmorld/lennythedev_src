import React, { useState, useEffect, useRef } from "react";

const cache = {};
// let isFetching = false;

const useFetch = (searchUrl, uniqueId) => {
  const [data, setData] = useState({});
  // const [isFetching, setFetching] = useState(false);

  // const cache = useRef({})

  useEffect(() => {
    if (!searchUrl) return;
    // console.log("component Id: ", uniqueId);

    const fetchFunc = async () => {
      console.log(`${uniqueId} fetch function runs`);

      // const cachedData = cache.current[searchUrl]
      const cachedData = cache[searchUrl];

      // if (isFetching) {
      //   console.log("⏳ Fetch in progress...");
      //   return;
      // }
      if (cachedData) {
        console.log("✅ Using cached data");
        setData(cachedData);
      } else {
        console.log("🌏 Fetching...");

        // isFetching = true;
        // setFetching(true);

        const raw = await fetch(searchUrl);
        const result = await raw.json();

        // isFetching = false;
        // setFetching(false);

        console.log("📦 Data arrives!", result);

        // cache.current[searchUrl] = data
        cache[searchUrl] = result;
        // console.log("cache: ", cache.current)
        console.log(`${uniqueId} cache: `, cache);
        setData(result);
      }
    };

    fetchFunc();
  }, [searchUrl]);

  return [data];
};

export default useFetch;
