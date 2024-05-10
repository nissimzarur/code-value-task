import appStore from "@stores/app-store/app.store";
import { useState, useEffect } from "react";

// Custom hook for fetching data
export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          appStore.setNotify({
            title: "Error",
            desc: "Fetching data failed with error: " + (await response.text()),
          });
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        appStore.setNotify({
          title: "Error",
          desc: "Fetching data failed with error: " + (await error.message),
        });
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
