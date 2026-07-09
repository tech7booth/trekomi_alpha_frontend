import axios, { type AxiosInstance } from "axios";
import { env } from "@/lib/env";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach auth token on every request once auth/token storage exists.
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("trekomi-access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Normalize error shape so every consumer gets a consistent message,
// regardless of whether the backend returns { message } or { error }.
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ??
      error.response?.data?.error ??
      error.message ??
      "Something went wrong. Please try again.";

    return Promise.reject({ ...error, message });
  }
);