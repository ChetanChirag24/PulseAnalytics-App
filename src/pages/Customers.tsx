import { Users, UserPlus, UserMinus, Crown } from "lucide-react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import {
  customerSegments,
  customerSatisfaction,
  customerLifetimeValue,
  recentCustomers,
} from "@/data/dashboardData";
import { cn } from "@/lib/utils";

const customerKPIs = [
  { title: "Total Customers", value: "2,360", change: 12.4, changeLabel: "vs last month", icon: Users },
  { title: "New This Month", value: "186", change: 22.1, changeLabel: "vs last month", icon: UserPlus },
  { title: "Churned", value: "24", change: -18.4, changeLabel: "vs last month", icon: UserMinus },
  { title: "Enterprise", value: "48", change: 8.3, changeLabel: "vs last month", icon: Crown },
];

const satisfactionColors = [
  "hsl(var(--success))",
  "hsl(var(--chart-1))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--destructive))",
];

const statusStyles = {
  active: "bg-success/10 text-success",
  churned: "bg-destructive/10 text-destructive",
};

const Customers = () => {
  return (
    <DashboardLayout>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {customerKPIs.map((kpi, index) => (
          <KPICard key={kpi.title} {...kpi} index={index} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* LTV vs CAC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">LTV vs CAC</h3>
            <p className="text-sm text-muted-foreground">Customer lifetime value vs acquisition cost</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={customerLifetimeValue} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `$${v}`} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
                        <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
                        {payload.map((entry: any, i: number) => (
                          <p key={i} className="text-sm font-semibold" style={{ color: entry.color }}>
                            {entry.name}: ${entry.value}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line type="monotone" dataKey="ltv" stroke="hsl(var(--chart-1))" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(var(--chart-1))" }} name="LTV" />
              <Line type="monotone" dataKey="cac" stroke="hsl(var(--chart-5))" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(var(--chart-5))" }} name="CAC" />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-1" /><span className="text-muted-foreground">LTV</span></div>
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-5" /><span className="text-muted-foreground">CAC</span></div>
          </div>
        </motion.div>

        {/* Customer Satisfaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground">Customer Satisfaction</h3>
            <p className="text-sm text-muted-foreground">NPS survey results</p>
          </div>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={customerSatisfaction}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {customerSatisfaction.map((_, index) => (
                    <Cell key={index} fill={satisfactionColors[index]} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload?.length) {
                      return (
                        <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
                          <p className="text-sm font-semibold text-foreground">{payload[0].name}: {payload[0].value}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2.5">
              {customerSatisfaction.map((item, i) => (
                <div key={item.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: satisfactionColors[i] }} />
                    <span className="text-sm text-foreground">{item.category}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Segments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-card rounded-xl p-6"
      >
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-foreground">Customer Segments</h3>
          <p className="text-sm text-muted-foreground">Breakdown by plan tier</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {customerSegments.map((seg) => (
            <div key={seg.name} className="rounded-lg bg-muted/30 border border-border/50 p-4 space-y-2">
              <h4 className="text-sm font-semibold text-foreground">{seg.name}</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-muted-foreground">Count</span><p className="font-semibold text-foreground">{seg.count.toLocaleString()}</p></div>
                <div><span className="text-muted-foreground">Revenue</span><p className="font-semibold text-foreground">${(seg.revenue / 1000).toFixed(1)}k</p></div>
                <div><span className="text-muted-foreground">Avg Deal</span><p className="font-semibold text-foreground">${seg.avgDeal}</p></div>
                <div><span className="text-muted-foreground">Churn</span><p className={cn("font-semibold", seg.churnRate > 10 ? "text-destructive" : "text-foreground")}>{seg.churnRate}%</p></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Customers Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="glass-card rounded-xl p-6"
      >
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-foreground">Recent Customers</h3>
          <p className="text-sm text-muted-foreground">Latest signups and account activity</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">ID</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Plan</th>
                <th className="pb-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">MRR</th>
                <th className="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                <th className="pb-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {recentCustomers.map((cust) => (
                <tr key={cust.id} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 text-sm font-mono font-medium text-foreground">{cust.id}</td>
                  <td className="py-3.5">
                    <p className="text-sm font-medium text-foreground">{cust.name}</p>
                    <p className="text-xs text-muted-foreground">{cust.email}</p>
                  </td>
                  <td className="py-3.5 text-sm text-muted-foreground">{cust.plan}</td>
                  <td className="py-3.5 text-right text-sm font-semibold text-foreground">${cust.mrr.toLocaleString()}</td>
                  <td className="py-3.5 text-center">
                    <span className={cn("inline-block rounded-full px-2.5 py-1 text-xs font-semibold capitalize", statusStyles[cust.status])}>{cust.status}</span>
                  </td>
                  <td className="py-3.5 text-right text-sm text-muted-foreground">{cust.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Customers;
