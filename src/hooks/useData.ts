import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface FetchResponse <T>{
  count: number;
  results: T[];
}

export const useData = <T>(endpoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  const [isLoading, SetLoading] = useState(false);

  useEffect(() => {
    const controllers = new AbortController();
    SetLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        SetLoading(false);
      })
      .catch((err) => setError(err.message));
    SetLoading(false);

    return () => controllers.abort();
  }, []);
  return { data, error, isLoading };
};
