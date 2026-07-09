import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { subscribeToNewsletter } from "@/services/newsletter.service";
import type { NewsletterFormValues } from "@/lib/validations/newsletter.schema";

/**
 * Uses fakeBaseQuery + queryFn because the actual HTTP call is delegated
 * to the axios-based service layer (see services/newsletter.service.ts).
 * This keeps RTK Query as the caching/loading-state layer while axios
 * stays the single place request/response interceptors live.
 */
export const newsletterApi = createApi({
  reducerPath: "newsletterApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    subscribe: builder.mutation<{ success: boolean; message: string }, NewsletterFormValues>({
      queryFn: async (payload) => {
        try {
          const data = await subscribeToNewsletter(payload);
          return { data };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: (error as Error).message } };
        }
      },
    }),
  }),
});

export const { useSubscribeMutation } = newsletterApi;
