import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCourses, getRecommendedCourses } from "@/services/course.service";
import type { Course, CourseFilters, PaginatedCourses } from "@/types/course.types";

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Course"],
  endpoints: (builder) => ({
    getCourses: builder.query<PaginatedCourses, CourseFilters>({
      queryFn: async (filters) => {
        try {
          const data = await getCourses(filters);
          return { data };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: (error as Error).message } };
        }
      },
      providesTags: ["Course"],
    }),
    getRecommendedCourses: builder.query<Course[], string[] | void>({
      queryFn: async (excludeIds) => {
        try {
          const data = await getRecommendedCourses(excludeIds ?? []);
          return { data };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: (error as Error).message } };
        }
      },
      providesTags: ["Course"],
    }),
  }),
});

export const { useGetCoursesQuery, useGetRecommendedCoursesQuery } = coursesApi;
