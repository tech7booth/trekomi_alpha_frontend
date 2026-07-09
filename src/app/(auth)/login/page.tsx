import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";

export const metadata: Metadata = {
    title: "Login",
    description: "Log in to your Trekomi Alpha account.",
};

const LoginPage = () => {
    return (
        <AuthLayout
            title="Welcome back"
            subtitle="Log in to continue your learning journey."
            footerText="Don't have an account?"
            footerLinkLabel="Register"
            footerLinkHref="/register"
        >
            <div className="space-y-5">
                <LoginForm />
                <SocialAuthButtons />
            </div>
        </AuthLayout>
    );
};

export default LoginPage;