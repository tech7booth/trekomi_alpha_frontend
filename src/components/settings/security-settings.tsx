"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, KeyRound } from "lucide-react";
import {toast} from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useChangePasswordMutation } from "@/services/profile.service";
import { changePasswordSchema, type ChangePasswordFormValues } from "@/lib/validations/profile.schema";
import type { ApiErrorData } from "@/types/auth.types";

export const SecuritySettings = () => {
  const [visibleFields, setVisibleFields] = useState({ current: false, next: false, confirm: false });
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: { currentPassword: "", newPassword: "", confirmPassword: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values: ChangePasswordFormValues) => {
    try {
      const response = await changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      }).unwrap();
      toast.success(response.message || "Password changed successfully");
      reset();
    } catch (err) {
      const apiError = err as ApiErrorData;
      toast.error(apiError.message || "Failed to change password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4 rounded-xl border border-border bg-card p-5"
    >
      <div className="flex items-center gap-2">
        <KeyRound className="size-4 text-muted-foreground" />
        <h3 className="text-title font-semibold text-foreground">Change Password</h3>
      </div>

      {(
        [
          { name: "currentPassword" as const, label: "Current Password", visKey: "current" as const },
          { name: "newPassword" as const, label: "New Password", visKey: "next" as const },
          { name: "confirmPassword" as const, label: "Confirm New Password", visKey: "confirm" as const },
        ]
      ).map(({ name, label, visKey }) => (
        <div key={name} className="space-y-1.5">
          <Label htmlFor={name}>{label}</Label>
          <div className="relative">
            <Input
              id={name}
              type={visibleFields[visKey] ? "text" : "password"}
              autoComplete={name === "currentPassword" ? "current-password" : "new-password"}
              aria-invalid={!!errors[name]}
              className="pr-10"
              {...register(name)}
            />
            <button
              type="button"
              onClick={() => setVisibleFields((prev) => ({ ...prev, [visKey]: !prev[visKey] }))}
              aria-label={visibleFields[visKey] ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {visibleFields[visKey] ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          {errors[name] && touchedFields[name] && (
            <p className="text-caption text-destructive">{errors[name]?.message}</p>
          )}
        </div>
      ))}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Updating...
          </>
        ) : (
          "Update Password"
        )}
      </Button>
    </form>
  );
};