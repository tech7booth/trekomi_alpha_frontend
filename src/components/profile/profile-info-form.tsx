"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import {toast} from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useUpdateProfileMutation } from "@/services/profile.service";
import { updateProfileSchema, type UpdateProfileFormValues } from "@/lib/validations/profile.schema";
import type { UserProfile } from "@/types/profile.types";
import type { ApiErrorData } from "@/types/auth.types";

interface ProfileInfoFormProps {
  profile?: UserProfile;
  isLoading?: boolean;
}

export const ProfileInfoForm = ({ profile, isLoading }: ProfileInfoFormProps) => {
  const [updateProfile, { isLoading: isSaving }] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isDirty },
  } = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { fullName: "", phone: "", bio: "" },
    mode: "onTouched",
  });

  // Populate the form once profile data arrives from the query —
  // can't set defaultValues directly since the query resolves after mount.
  useEffect(() => {
    if (profile) {
      reset({ fullName: profile.fullName, phone: profile.phone ?? "", bio: profile.bio ?? "" });
    }
  }, [profile, reset]);

  const onSubmit = async (values: UpdateProfileFormValues) => {
    try {
      await updateProfile(values).unwrap();
      toast.success("Profile updated successfully");
    } catch (err) {
      const apiError = err as ApiErrorData;
      toast.error(apiError.message || "Failed to update profile");
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4 rounded-xl border border-border bg-card p-5">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4 rounded-xl border border-border bg-card p-5"
    >
      <h3 className="text-title font-semibold text-foreground">Personal Information</h3>

      <div className="space-y-1.5">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" aria-invalid={!!errors.fullName} {...register("fullName")} />
        {errors.fullName && touchedFields.fullName && (
          <p className="text-caption text-destructive">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="10-digit mobile number"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && touchedFields.phone && (
          <p className="text-caption text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          rows={3}
          placeholder="Tell us a little about yourself"
          aria-invalid={!!errors.bio}
          {...register("bio")}
        />
        {errors.bio && touchedFields.bio && (
          <p className="text-caption text-destructive">{errors.bio.message}</p>
        )}
      </div>

      <Button type="submit" disabled={!isDirty || isSaving} className="w-full sm:w-auto">
        {isSaving ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Saving...
          </>
        ) : (
          <>
            <Save className="size-4" />
            Save Changes
          </>
        )}
      </Button>
    </form>
  );
};