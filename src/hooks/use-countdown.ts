"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Generic countdown, used here for OTP resend cooldown.
 * Returns remaining seconds and a `start` function to (re)trigger it.
 */
export const useCountdown = (durationInSeconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clear();
    setSecondsLeft(durationInSeconds);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clear();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clear, durationInSeconds]);

  useEffect(() => () => clear(), [clear]);

  return { secondsLeft, isActive: secondsLeft > 0, start };
};