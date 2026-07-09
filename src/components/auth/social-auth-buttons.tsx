// components/auth/social-auth-buttons.tsx
"use client";

import { cn } from "@/lib/utils";

interface SocialAuthButtonsProps {
  className?: string;
}

const GoogleIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.48a5.55 5.55 0 0 1-2.4 3.64v3.02h3.88c2.27-2.09 3.56-5.17 3.56-8.84Z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.96-1.07 7.96-2.9l-3.88-3.01c-1.08.72-2.46 1.15-4.08 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A11.99 11.99 0 0 0 12 24Z"
    />
    <path
      fill="#FBBC05"
      d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.26A11.99 11.99 0 0 0 0 12c0 1.94.46 3.77 1.26 5.39l4.01-3.11Z"
    />
    <path
      fill="#EA4335"
      d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.26 6.61l4.01 3.11C6.22 6.87 8.87 4.77 12 4.77Z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z" />
  </svg>
);

/**
 * UI-only OAuth entry points. onClick handlers are intentionally
 * unwired — swap for real handlers once /auth/google and
 * /auth/facebook backend routes exist.
 */
export const SocialAuthButtons = ({ className }: SocialAuthButtonsProps) => {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-small text-muted-foreground">Or continue with</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          aria-label="Continue with Google"
          className={cn(
            "flex items-center justify-center gap-2 rounded-xl border border-input bg-background py-2.5",
            "text-caption font-medium text-foreground transition-colors hover:bg-muted",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <GoogleIcon />
          Google
        </button>

        <button
          type="button"
          aria-label="Continue with Facebook"
          className={cn(
            "flex items-center justify-center gap-2 rounded-xl border border-input bg-background py-2.5",
            "text-caption font-medium text-foreground transition-colors hover:bg-muted",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <FacebookIcon />
          Facebook
        </button>
      </div>
    </div>
  );
};