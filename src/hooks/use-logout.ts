"use client";

import { useRouter } from "next/navigation";
import {toast} from "sonner";
import { useAppDispatch } from "@/store/hooks";
import { clearCurrentUser } from "@/store/slices/user-slice";
import { api } from "@/store/services/api";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("trekomi-access-token");
      sessionStorage.removeItem("trekomi-access-token");
    }
    dispatch(clearCurrentUser());
    dispatch(api.util.resetApiState()); // clears all cached RTK Query data on logout
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return { logout };
};