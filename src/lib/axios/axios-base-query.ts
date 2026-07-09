import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { axiosInstance } from "./axios-instance";

export interface AxiosBaseQueryError {
  status: number | undefined;
  message: string;
}

/**
 * Bridges Axios into RTK Query's baseQuery contract, so every
 * endpoint defined via createApi gets Axios's interceptors underneath
 * while still using RTK Query's isLoading / isError / cache tags.
 */

export const axiosBaseQuery = (): BaseQueryFn<{
  url: string;
  method: AxiosRequestConfig["method"];
  data?: unknown;
  params?: unknown;
  headers?: AxiosRequestConfig["headers"];
},
  unknown,
  AxiosBaseQueryError
> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({ url, method, data, params, headers });
      return { data: result.data };
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      return {
        error: {
          status: axiosError.response?.status,
          message:
            axiosError.response?.data?.message ??
            (axiosError as unknown as { message: string }).message ??
            "Request failed",
        },
      };
    }
  };