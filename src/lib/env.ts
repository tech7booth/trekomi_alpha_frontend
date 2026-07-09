import { z } from "zod";

/**
 * Validates required environment variables at build/boot time
 * instead of failing silently at the first API call in production.
 */
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url({
    message: "NEXT_PUBLIC_API_BASE_URL must be a valid URL (e.g. https://api.trekomialpha.com/api/v1)",
  }),
});

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

if (!parsedEnv.success) {
  throw new Error(
    `Invalid environment variables:\n${JSON.stringify(parsedEnv.error.flatten().fieldErrors, null, 2)}`
  );
}

export const env = parsedEnv.data;