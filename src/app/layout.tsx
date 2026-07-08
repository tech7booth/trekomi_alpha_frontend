import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StoreProvider } from "@/providers/store-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { AppShell } from "@/components/layout/app-shell";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trekomi Alpha | Learn Today, Lead Tomorrow",
    template: "%s | Trekomi Alpha",
  },
  description:
    "Master English Speaking, Public Speaking, Banking and Competitive Exams with Trekomi Alpha.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <StoreProvider>
          <ThemeProvider>
            <AppShell>{children}</AppShell>
            <Toaster richColors position="top-center" />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;