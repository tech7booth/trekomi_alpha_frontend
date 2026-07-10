"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, Mail, MailCheck } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OtpField } from "./otp-field";
import { useSendOtpMutation, useRegisterMutation } from "@/services/auth.service";
import { useCountdown } from "@/hooks/use-countdown";
import { registerSchema, emailSchema, type RegisterFormValues } from "@/lib/validations/auth.schema";
import type { ApiErrorData } from "@/types/auth.types";
import { cn } from "@/lib/utils";

const OTP_RESEND_COOLDOWN_SECONDS = 30;

export const RegisterForm = () => {
  const router = useRouter();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { secondsLeft, isActive: isCooldownActive, start: startCooldown } = useCountdown(
    OTP_RESEND_COOLDOWN_SECONDS
  );

  const [sendOtp, { isLoading: isSendingOtp }] = useSendOtpMutation();
  const [registerUser, { isLoading: isRegistering }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      otp: "",
    },
    mode: "onBlur",
  });

  const emailValue = watch("email");

  const handleSendOtp = async () => {
    const isEmailValid = await trigger("email");
    if (!isEmailValid) return;

    const parsedEmail = emailSchema.safeParse(emailValue);
    if (!parsedEmail.success) return;

    try {
      const response = await sendOtp({ email: parsedEmail.data }).unwrap();
      toast.success(response.message || "OTP sent to your email");
      setIsOtpSent(true);
      startCooldown();
    } catch (err) {
      const apiError = err as ApiErrorData;
      toast.error(apiError.message || "Failed to send OTP. Please try again.");
    }
  };

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      const response = await registerUser(values).unwrap();
      toast.success(response.message || "Registration successful");
      if (typeof window !== "undefined") {
        const storage = localStorage ;
        storage.setItem("trekomi-access-token", response.data?.accessToken);
      }
      router.push("/dashboard");
    } catch (err) {
      const apiError = err as ApiErrorData;
      toast.error(apiError.message || "Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Email + Send OTP */}
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <div className="flex gap-2">
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            disabled={isOtpSent}
            aria-invalid={!!errors.email}
            className="flex-1"
            {...register("email")}
          />
          <Button
            type="button"
            variant="outline"
            onClick={handleSendOtp}
            disabled={isSendingOtp || isCooldownActive || isOtpSent}
            className="shrink-0 whitespace-nowrap"
          >
            {isSendingOtp ? (
              <Loader2 className="size-4 animate-spin" />
            ) : isOtpSent ? (
              <MailCheck className="size-4" />
            ) : (
              <Mail className="size-4" />
            )}
            {isOtpSent ? "Sent" : isCooldownActive ? `Resend (${secondsLeft}s)` : "Send OTP"}
          </Button>
        </div>
        {errors.email && (
          <p className="text-caption text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* OTP */}
      {isOtpSent && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="otp">Enter OTP</Label>
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={isCooldownActive || isSendingOtp}
              className={cn(
                "text-caption font-medium text-primary transition-colors",
                (isCooldownActive || isSendingOtp) && "cursor-not-allowed text-muted-foreground"
              )}
            >
              {isCooldownActive ? `Resend in ${secondsLeft}s` : "Resend OTP"}
            </button>
          </div>
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <OtpField
                value={field.value}
                onChange={field.onChange}
                error={!!errors.otp}
              />
            )}
          />
          {errors.otp && <p className="text-caption text-destructive">{errors.otp.message}</p>}
        </div>
      )}

      {/* Full Name */}
      <div className="space-y-1.5">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Your full name"
          aria-invalid={!!errors.fullName}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-caption text-destructive">{errors.fullName.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Create a strong password"
            aria-invalid={!!errors.password}
            className="pr-10"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {isPasswordVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-caption text-destructive">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={!isOtpSent || isRegistering}
        className="w-full"
      >
        {isRegistering ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};