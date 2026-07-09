import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/auth-layout";
import { RegisterForm } from "@/components/auth/register-form";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your Trekomi Alpha account to start learning.",
};

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start learning English Speaking, Banking and more."
      footerText="Already have an account?"
      footerLinkLabel="Login"
      footerLinkHref="/login"
    >
      <div className="space-y-5">
        <RegisterForm />
        <SocialAuthButtons />
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;