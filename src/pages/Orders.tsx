import { ShoppingCart, DollarSign, Clock, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import { allOrders, ordersByStatus, dailyOrders } from "@/data/dashboardData";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const orderKPIs = [
  { title: "Total Orders", value: "1,084", change: 12.3, changeLabel: "this month", icon: ShoppingCart },
  { title: "Revenue", value: "$150,600", change: 18.9, changeLabel: "this month", icon: DollarSign },
  { title: "Pending", value: "156", change: -8.2, changeLabel: "vs last month", icon: Clock },
  { title: "Failed", value: "48", change: -22.1, changeLabel: "vs last month", icon: XCircle },
];

const statusStyles: Record<string, string> = {
  completed: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  failed: "bg-destructive/10 text-destructive",
  refunded: "bg-chart-3/10 text-chart-3",
};

const Orders = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredOrders = filter === "all" ? allOrders : allOrders.filter(o => o.status === filter);

  return (
    <DashboardLayout>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {orderKPIs.map((kpi, index) => (
          <KPICard key={kpi.title} {...kpi} index={index} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Daily Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-xl p-6 xl:col-span-2"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Daily Orders</h3>
            <p className="text-sm text-muted-foreground">Orders and revenue this week</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={dailyOrders} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
                        <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
                        <p className="text-sm font-semibold text-foreground">Orders: {payload[0].value}</p>
                        <p className="text-sm font-semibold text-foreground">Revenue: ${(Number(payload[1]?.value || 0) / 1000).toFixed(1)}k</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar yAxisId="left" dataKey="orders" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} barSize={24} />
              <Bar yAxisId="right" dataKey="revenue" fill="hsl(var(--chart-2) / 0.5)" radius={[4, 4, 0, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Order Status Pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Order Status</h3>
            <p className="text-sm text-muted-foreground">Distribution breakdown</p>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={ordersByStatus} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value" strokeWidth={0}>
                {ordersByStatus.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
                        <p className="text-sm font-semibold text-foreground">{payload[0].name}: {payload[0].value}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {ordersByStatus.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span className="text-sm text-foreground">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Orders Table with Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-card rounded-xl p-6"
      >
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">All Orders</h3>
            <p className="text-sm text-muted-foreground">Complete order history</p>
          </div>
          <div className="flex items-center gap-2">
            {["all", "completed", "pending", "failed", "refunded"].map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(status)}
                className="capitalize"
              >
                {status}
              </Button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Order</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Customer</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Method</th>
                <th className="pb-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Amount</th>
                <th className="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                <th className="pb-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 text-sm font-mono font-medium text-foreground">{order.id}</td>
                  <td className="py-3.5 text-sm text-foreground">{order.customer}</td>
                  <td className="py-3.5 text-sm text-muted-foreground">{order.product}</td>
                  <td className="py-3.5 text-sm text-muted-foreground">{order.method}</td>
                  <td className="py-3.5 text-right text-sm font-semibold text-foreground">${order.amount.toLocaleString()}</td>
                  <td className="py-3.5 text-center">
                    <span className={cn("inline-block rounded-full px-2.5 py-1 text-xs font-semibold capitalize", statusStyles[order.status])}>{order.status}</span>
                  </td>
                  <td className="py-3.5 text-right text-sm text-muted-foreground">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Orders;
