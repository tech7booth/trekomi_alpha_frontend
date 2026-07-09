"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import {toast} from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLoginMutation } from "@/services/auth.service";
import { loginSchema, type LoginFormValues } from "@/lib/validations/auth.schema";
import type { ApiErrorData } from "@/types/auth.types";

export const LoginForm = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginUser, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const { rememberMe, ...credentials } = values;
      const response = await loginUser(credentials).unwrap();

      if (typeof window !== "undefined") {
        const storage = localStorage;
        storage.setItem("trekomi-access-token", response.data?.accessToken);

        console.log(response);
      }

      toast.success(response.message || "Welcome back!");
      // router.push("/");
    } catch (err) {
      const apiError = err as ApiErrorData;
      toast.error(apiError.message || "Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && touchedFields.email && (
          <p className="text-caption text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="text-caption font-medium text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your password"
            autoComplete="current-password"
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
        {errors.password && touchedFields.password && (
          <p className="text-caption text-destructive">{errors.password.message}</p>
        )}
      </div>

      {/* Remember me */}
      <div className="flex items-center gap-2">
        <Checkbox id="rememberMe" {...register("rememberMe")} />
        <Label htmlFor="rememberMe" className="cursor-pointer text-caption font-normal text-muted-foreground">
          Remember me
        </Label>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
};