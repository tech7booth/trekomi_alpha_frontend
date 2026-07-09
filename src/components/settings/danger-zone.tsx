"use client";

import { useState } from "react";
import { LogOut, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/use-logout";

export const DangerZone = () => {
  const { logout } = useLogout();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteAccount = () => {
    // TODO: wire to a real deleteAccount mutation once the endpoint exists.
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-xl border border-border bg-card p-5">
        <div>
          <h3 className="text-title font-semibold text-foreground">Log Out</h3>
          <p className="text-caption text-muted-foreground">Sign out of your account on this device.</p>
        </div>
        <Button variant="outline" onClick={logout} className="gap-2">
          <LogOut className="size-4" />
          Log Out
        </Button>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-destructive/30 bg-destructive/5 p-5">
        <div>
          <h3 className="text-title font-semibold text-destructive">Delete Account</h3>
          <p className="text-caption text-muted-foreground">
            Permanently delete your account and all associated data. This cannot be undone.
          </p>
        </div>

        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="gap-2">
              <Trash2 className="size-4" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete your account, enrolled courses, progress, and certificates.
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteAccount}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Yes, delete my account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};