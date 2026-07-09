import { api } from "@/store/services/api";
import type {
  SendOtpRequest,
  SendOtpResponse,
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
} from "@/types/auth.types";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation<SendOtpResponse, SendOtpRequest>({
      query: (body) => ({
        url: "/auth/send-otp",
        method: "POST",
        data: body,
      }),
    }),

    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Auth"],
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
  overrideExisting: false,
});

export const { useSendOtpMutation, useRegisterMutation, useLoginMutation } = authApi;