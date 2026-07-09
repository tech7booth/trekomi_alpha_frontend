import { AppShell } from "@/components/layout/app-shell";

const MainGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppShell>{children}</AppShell>;
};

export default MainGroupLayout;