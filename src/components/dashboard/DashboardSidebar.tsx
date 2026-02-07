import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Settings, 
  Bell, 
  HelpCircle,
  TrendingUp,
  FileText,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
  path: string;
  onClick: (path: string) => void;
}

const NavItem = ({ icon: Icon, label, active, badge, path, onClick }: NavItemProps) => (
  <button
    onClick={() => onClick(path)}
    className={cn(
      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
      active
        ? "bg-sidebar-accent text-sidebar-primary"
        : "text-sidebar-muted hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
    )}
  >
    <Icon className="h-[18px] w-[18px] shrink-0" />
    <span className="flex-1 text-left">{label}</span>
    {badge && (
      <span className="rounded-full bg-sidebar-primary/20 px-2 py-0.5 text-xs font-semibold text-sidebar-primary">
        {badge}
      </span>
    )}
  </button>
);

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary glow-primary">
          <Zap className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="text-base font-bold text-sidebar-foreground tracking-tight">Pulse</h1>
          <p className="text-[11px] text-sidebar-muted">Analytics Platform</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-sidebar-muted">
          Main
        </p>
        <NavItem icon={LayoutDashboard} label="Dashboard" active={isActive("/")} path="/" onClick={handleNavigate} />
        <NavItem icon={BarChart3} label="Analytics" active={isActive("/analytics")} path="/analytics" onClick={handleNavigate} />
        <NavItem icon={TrendingUp} label="Revenue" badge="↑ 23%" active={isActive("/revenue")} path="/revenue" onClick={handleNavigate} />
        <NavItem icon={Users} label="Customers" active={isActive("/customers")} path="/customers" onClick={handleNavigate} />
        <NavItem icon={ShoppingCart} label="Orders" badge="12" active={isActive("/orders")} path="/orders" onClick={handleNavigate} />

        <p className="mt-6 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-sidebar-muted">
          Reports
        </p>
        <NavItem icon={FileText} label="Documents" active={isActive("/documents")} path="/documents" onClick={handleNavigate} />
        <NavItem icon={Bell} label="Notifications" badge="3" active={isActive("/notifications")} path="/notifications" onClick={handleNavigate} />
      </nav>

      {/* Bottom */}
      <div className="border-t border-sidebar-border p-3 space-y-1">
        <NavItem icon={Settings} label="Settings" active={isActive("/settings")} path="/settings" onClick={handleNavigate} />
        <NavItem icon={HelpCircle} label="Help & Support" active={isActive("/help")} path="/help" onClick={handleNavigate} />
      </div>

      {/* User */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar-accent text-sm font-semibold text-sidebar-primary">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">Jordan Davis</p>
            <p className="truncate text-xs text-sidebar-muted">jordan@pulse.io</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
