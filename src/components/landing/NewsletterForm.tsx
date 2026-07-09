"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubscribeMutation } from "@/features/newsletter/newsletterApi";
import {
  NEWSLETTER_DEFAULT_VALUES,
  newsletterSchema,
  type NewsletterFormValues,
} from "@/lib/validations/newsletter.schema";

export const NewsletterForm = ()  => {
  const [subscribe, { isLoading }] = useSubscribeMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: NEWSLETTER_DEFAULT_VALUES,
    mode: "onBlur",
  });

  const onSubmit = async (values: NewsletterFormValues): Promise<void> => {
    try {
      await subscribe(values).unwrap();
      toast.success("You're on the list — check your inbox for next steps.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-start"
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          className="h-11 rounded-xl bg-background"
          {...register("email")}
        />
        {errors.email && (
          <p id="newsletter-email-error" role="alert" className="mt-1.5 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="h-11 shrink-0 rounded-xl bg-primary hover:bg-primary/90"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <>
            Notify me
            <Send className="ml-2 h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
};
