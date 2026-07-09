"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface OtpFieldProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  disabled?: boolean;
  error?: boolean;
}

/**
 * 6-box OTP input that stores/emits a single string value,
 * so it plugs directly into React Hook Form's Controller
 * without any adapter logic.
 */
export const OtpField = ({ value, onChange, length = 6, disabled, error }: OtpFieldProps) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const digits = value.split("").concat(Array(length).fill("")).slice(0, length);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index: number, rawValue: string) => {
    const digit = rawValue.replace(/\D/g, "").slice(-1);
    const nextDigits = [...digits];
    nextDigits[index] = digit;
    onChange(nextDigits.join(""));

    if (digit && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    onChange(pasted.padEnd(0, "").slice(0, length));
    if (pasted.length > 0) {
      focusInput(Math.min(pasted.length, length - 1));
    }
  };

  return (
    <div className="flex gap-2" role="group" aria-label="One-time password">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          disabled={disabled}
          aria-label={`OTP digit ${index + 1}`}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={cn(
            "h-12 w-11 rounded-xl border bg-background text-center text-title font-semibold text-foreground",
            "outline-none transition-colors focus:ring-2 focus:ring-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-destructive" : "border-input"
          )}
        />
      ))}
    </div>
  );
};