import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/axios/axios-base-query";

/**
 * Root API slice. Every feature service (auth, course, profile...)
 * injects its endpoints into this single instance via injectEndpoints,
 * so there's exactly one RTK Query cache and one middleware to register.
 */
export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Auth", "User", "Course", "Category"],
  endpoints: () => ({}),
});