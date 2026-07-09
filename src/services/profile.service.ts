import { api } from "@/store/services/api";
import type { ApiEnvelope } from "@/types/api.types";
import type {
  UserProfile,
  UpdateProfileRequest,
  UpdateAvatarResponse,
  ChangePasswordRequest,
} from "@/types/profile.types";

export const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<UserProfile, void>({
      query: () => ({ url: "/profile/me", method: "GET" }),
      transformResponse: (response: ApiEnvelope<UserProfile>) => response.data,
      providesTags: ["User"],
    }),

    updateProfile: builder.mutation<UserProfile, UpdateProfileRequest>({
      query: (body) => ({ url: "/profile/me", method: "PATCH", data: body }),
      transformResponse: (response: ApiEnvelope<UserProfile>) => response.data,
      invalidatesTags: ["User"],
    }),

    updateAvatar: builder.mutation<UpdateAvatarResponse, FormData>({
      query: (formData) => ({
        url: "/profile/me/avatar",
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }),
      transformResponse: (response: ApiEnvelope<UpdateAvatarResponse>) => response.data,
      invalidatesTags: ["User"],
    }),

    changePassword: builder.mutation<{ message: string }, ChangePasswordRequest>({
      query: (body) => ({ url: "/profile/me/change-password", method: "POST", data: body }),
      // This endpoint has no meaningful `data` payload — the success
      // message itself IS the useful part, so we keep it instead of
      // unwrapping to `.data`.
      transformResponse: (response: ApiEnvelope<null>) => ({ message: response.message }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateAvatarMutation,
  useChangePasswordMutation,
} = profileApi;