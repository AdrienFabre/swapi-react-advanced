import { useState, useEffect } from "react";

export const useHttp = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchAllData = async () => {
      const fetchData = async url => {
        try {
          return fetch(url).then(response => response.json());
        } catch (e) {
          console.log(e);
          setIsLoading(false);
        }
      };

      let result = await fetchData(url);
      let oldResult;

      while (result.next) {
        oldResult = { ...result };
        result = await fetchData(result.next);
        result.results = [...oldResult.results, ...result.results];
      }
      setIsLoading(false);
      setFetchedData(result);
    };

    fetchAllData();
  }, [url]);

  return [isLoading, fetchedData];
};
