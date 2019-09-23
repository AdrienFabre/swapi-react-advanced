import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [nextUrl, setNextUrl] = useState(url);

  console.log(url);

  useEffect(
    () => {
      setIsLoading(true);
      console.log(nextUrl);
      // while (nextUrl !== null) {
        fetch(nextUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to fetch.");
            }
            return response.json();
          })
          .then(data => {
            console.log("data", data);
            console.log("data.next", data.next);
            if (data.next !== null) {
              let oldData = fetchedData;
              setFetchedData(oldData.concat(data));
              setNextUrl(nextUrl === null);
            } else {
              setNextUrl(null);
              setIsLoading(false);
              setFetchedData(data);
            }
            console.log("nextUrl", nextUrl);
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false);
          });
      }
    },

    dependencies
  );

  return [isLoading, fetchedData];
};
