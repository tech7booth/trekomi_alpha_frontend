"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUpdateAvatarMutation } from "@/services/profile.service";
import { cn } from "@/lib/utils";

interface AvatarUploadProps {
    avatarUrl?: string;
    fallbackText: string;
}

const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const AvatarUpload = ({ avatarUrl, fallbackText }: AvatarUploadProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [updateAvatar, { isLoading }] = useUpdateAvatarMutation();

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!ACCEPTED_TYPES.includes(file.type)) {
            toast.error("Please upload a JPG, PNG, or WEBP image");
            return;
        }
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
            toast.error(`Image must be under ${MAX_FILE_SIZE_MB}MB`);
            return;
        }

        setPreviewUrl(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append("avatar", file);

        try {
            await updateAvatar(formData).unwrap();
            toast.success("Profile photo updated");
        } catch {
            toast.error("Failed to update photo. Please try again.");
            setPreviewUrl(null);
        }
    };

    const displayUrl = previewUrl ?? avatarUrl;

    return (
        <div className="relative size-24 shrink-0">
            <Avatar className="size-24 border-4 border-card shadow-sm">
                {displayUrl ? (
                    <AvatarImage asChild src={displayUrl}>
                        <Image src={displayUrl} alt="Profile photo" width={96} height={96} className="object-cover" />
                    </AvatarImage>
                ) : null}
                <AvatarFallback className="bg-accent text-title font-semibold text-accent-foreground">
                    {fallbackText}
                </AvatarFallback>
            </Avatar>

            <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                aria-label="Change profile photo"
                className={cn(
                    "absolute bottom-0 right-0 flex size-8 items-center justify-center rounded-full",
                    "bg-primary text-primary-foreground shadow-sm transition-transform hover:scale-105",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "disabled:cursor-not-allowed disabled:opacity-60"
                )}
            >
                {isLoading ? <Loader2 className="size-4 animate-spin" /> : <Camera className="size-4" />}
            </button>

            <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_TYPES.join(",")}
                onChange={handleFileSelect}
                className="hidden"
                aria-hidden="true"
            />
        </div>
    );
};