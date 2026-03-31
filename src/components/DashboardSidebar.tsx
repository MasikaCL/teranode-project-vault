import { Link, useLocation } from "react-router-dom";
import { Link2, LayoutDashboard, FileText, Settings, CreditCard, HeadphonesIcon, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeContext } from "@/hooks/useTheme";

const DashboardSidebar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useThemeContext();

  const workspaceNav = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: FileText, label: "Documents", path: "/documents" },
  ];

  const accountNav = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: CreditCard, label: "Plan & Billing", path: "/billing" },
    { icon: HeadphonesIcon, label: "Support", path: "/support" },
  ];

  const renderNavItem = (item: { icon: React.ElementType; label: string; path: string }) => {
    const isActive = location.pathname === item.path;
    return (
      <Link
        key={item.path}
        to={item.path}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
          isActive
            ? "bg-primary text-primary-foreground font-medium"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <item.icon className="h-4 w-4 shrink-0" />
        <span className="flex-1">{item.label}</span>
      </Link>
    );
  };

  return (
    <aside className="w-60 border-r bg-card flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 px-5 py-4 border-b">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <Link2 className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-base font-bold text-foreground">Teranode</span>
      </Link>

      {/* Workspace label */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Apex Homes Ltd
        </p>
      </div>

      {/* Workspace Nav */}
      <nav className="px-3 space-y-0.5">
        {workspaceNav.map(renderNavItem)}
      </nav>

      {/* Account */}
      <div className="px-4 pt-5 pb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Account</p>
      </div>
      <nav className="px-3 space-y-0.5">
        {accountNav.map(renderNavItem)}
      </nav>

      {/* Version + Theme Toggle */}
      <div className="mt-auto px-4 py-3 border-t flex items-center justify-between">
        <span className="text-xs text-muted-foreground">v1.6</span>
        <button
          onClick={toggleTheme}
          className="h-7 w-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
