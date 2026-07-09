export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  bio?: string;
  avatarUrl?: string;
  joinedAt: string;
  coursesEnrolled: number;
  coursesCompleted: number;
  certificatesEarned: number;
}

export interface UpdateProfileRequest {
  fullName: string;
  phone?: string;
  bio?: string;
}

export interface UpdateAvatarResponse {
  avatarUrl: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface NotificationPreferences {
  emailUpdates: boolean;
  pushNotifications: boolean;
  courseReminders: boolean;
  promotionalOffers: boolean;
}