import { Search, Bell, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  "/": { title: "Dashboard", subtitle: "Welcome back, Jordan. Here's what's happening today." },
  "/analytics": { title: "Analytics", subtitle: "Deep dive into your traffic and engagement metrics." },
  "/revenue": { title: "Revenue", subtitle: "Track your income streams and financial performance." },
  "/customers": { title: "Customers", subtitle: "Manage your customer base and segments." },
  "/orders": { title: "Orders", subtitle: "Monitor orders, payments, and fulfillment." },
  "/documents": { title: "Documents", subtitle: "Access reports, files, and shared documents." },
  "/notifications": { title: "Notifications", subtitle: "Stay updated with alerts and activity." },
  "/settings": { title: "Settings", subtitle: "Manage your account and preferences." },
  "/help": { title: "Help & Support", subtitle: "Get answers and reach our support team." },
};

const DashboardHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = pageTitles[location.pathname] || pageTitles["/"];

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-xl px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{page.title}</h1>
        <p className="text-sm text-muted-foreground mt-0.5">{page.subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 pl-9 bg-muted/50 border-border/50 focus:bg-background"
          />
        </div>

        <Button variant="outline" size="icon" className="relative">
          <Calendar className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="relative"
          onClick={() => navigate("/notifications")}
        >
          <Bell className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
            3
          </span>
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
