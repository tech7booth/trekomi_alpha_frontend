interface AuthGroupLayoutProps {
  children: React.ReactNode;
}

// Route group layout — intentionally does NOT render AppShell
// (no Navbar/Sidebar/BottomNav on auth screens, matching Coursera/Notion pattern).
const AuthGroupLayout = ({ children }: AuthGroupLayoutProps) => {
  return <>{children}</>;
};

export default AuthGroupLayout;