import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  const [isLoading, SetLoading] = useState(false);

  useEffect(
    () => {
      const controllers = new AbortController();
      SetLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { ...requestConfig })
        .then((res) => {
          setData(res.data.results);
        })
        .catch((err) => setError(err.message))
        .finally(() => {
          SetLoading(false);
        });

      return () => controllers.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};
