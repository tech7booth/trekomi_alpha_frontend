import Link from "next/link";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkLabel: string;
  footerLinkHref: string;
}

export const AuthLayout = ({
  title,
  subtitle,
  children,
  footerText,
  footerLinkLabel,
  footerLinkHref,
}: AuthLayoutProps) => {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
          {/* <Image src="/logo.png" alt="Trekomi Alpha" width={40} height={40} className="rounded-full" /> */}
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          
          <span className="text-title font-bold text-foreground">
            TREKOMI <span className="text-primary">ALPHA</span>
          </span>
        </Link>

        <h1 className="text-subheading font-bold text-foreground">{title}</h1>
        <p className="mt-1 text-caption text-muted-foreground">{subtitle}</p>

        <div className="mt-6">{children}</div>

        <p className="mt-6 text-center text-caption text-muted-foreground">
          {footerText}{" "}
          <Link href={footerLinkHref} className="font-medium text-primary hover:underline">
            {footerLinkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
};