import { motion } from "framer-motion";
import { Bell, CheckCircle, AlertTriangle, AlertCircle, Info, Check } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { notifications } from "@/data/dashboardData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const typeConfig = {
  success: { icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
  error: { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10" },
  warning: { icon: AlertTriangle, color: "text-warning", bg: "bg-warning/10" },
  info: { icon: Info, color: "text-chart-2", bg: "bg-chart-2/10" },
};

const Notifications = () => {
  const [items, setItems] = useState(notifications);
  const unreadCount = items.filter((n) => !n.read).length;

  const markAllRead = () => {
    setItems(items.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setItems(items.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Bell className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {unreadCount} Unread Notification{unreadCount !== 1 ? "s" : ""}
            </h2>
            <p className="text-sm text-muted-foreground">Stay on top of your alerts</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={markAllRead} disabled={unreadCount === 0}>
          <Check className="h-4 w-4 mr-1" /> Mark all read
        </Button>
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {items.map((notif, i) => {
          const config = typeConfig[notif.type];
          const Icon = config.icon;
          return (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={cn(
                "glass-card rounded-xl p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer hover:shadow-md",
                !notif.read && "border-l-4 border-l-primary"
              )}
              onClick={() => markRead(notif.id)}
            >
              <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", config.bg)}>
                <Icon className={cn("h-5 w-5", config.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className={cn("text-sm font-semibold text-foreground", !notif.read && "text-primary")}>
                    {notif.title}
                  </h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{notif.time}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{notif.message}</p>
              </div>
              {!notif.read && (
                <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0 mt-1.5" />
              )}
            </motion.div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
