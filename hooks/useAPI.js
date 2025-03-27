// src/hooks/useAPI.js
import useSWR from "swr";
import { fetchData } from "@/lib/api";

// Hook kustom untuk fetching data dengan SWR
export const useApi = (url, options = {}) => {
  const { fetcher = fetchData, shouldRetry = true, ...swrOptions } = options;

  const { data, error, isValidating, mutate } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: shouldRetry,
    ...swrOptions,
  });

  return {
    data,
    error,
    isLoading: !error && !data,
    isValidating,
    mutate,
  };
};

// Fungsi untuk melakukan mutation (create, update, delete)
export const useMutation = (url, method = "POST") => {
  const mutateData = async (data, options = {}) => {
    try {
      const result = await fetchData(url, {
        method,
        data,
        ...options,
      });
      return result;
    } catch (error) {
      console.error(`Mutation Error (${method}):`, error);
      throw error;
    }
  };

  return mutateData;
};
