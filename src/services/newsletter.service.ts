import { axiosInstance } from "@/lib/axios/axios-instance";
import type { NewsletterFormValues } from "@/lib/validations/newsletter.schema";

interface SubscribeResponse {
  success: boolean;
  message: string;
}

/**
 * Thin, typed wrapper around the newsletter endpoint. Components and RTK
 * Query mutations call this function rather than hitting axios directly,
 * so the request shape and URL only need to change in one place.
 */
export const subscribeToNewsletter = async (
  payload: NewsletterFormValues,
): Promise<SubscribeResponse> => {
  const { data } = await axiosInstance.post<SubscribeResponse>(
    "/marketing/newsletter",
    payload,
  );
  return data;
};
