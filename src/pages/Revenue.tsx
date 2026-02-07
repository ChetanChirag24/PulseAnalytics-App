import { DollarSign, TrendingUp, CreditCard, Repeat } from "lucide-react";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart,
} from "recharts";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import TopProducts from "@/components/dashboard/TopProducts";
import {
  monthlyRevenueBreakdown,
  revenueByRegion,
  mrrData,
} from "@/data/dashboardData";

const revenueKPIs = [
  { title: "Total Revenue", value: "$58,900", change: 23.1, changeLabel: "vs last month", icon: DollarSign },
  { title: "MRR", value: "$42,800", change: 11.5, changeLabel: "vs last month", icon: Repeat },
  { title: "ARPU", value: "$286", change: 8.2, changeLabel: "vs last month", icon: CreditCard },
  { title: "Net Revenue", value: "$40,900", change: 15.4, changeLabel: "vs last month", icon: TrendingUp },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm font-semibold" style={{ color: entry.color }}>
            {entry.name}: ${(entry.value / 1000).toFixed(1)}k
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Revenue = () => {
  return (
    <DashboardLayout>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {revenueKPIs.map((kpi, index) => (
          <KPICard key={kpi.title} {...kpi} index={index} />
        ))}
      </section>

      {/* Revenue Breakdown Stacked */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Revenue Breakdown</h3>
            <p className="text-sm text-muted-foreground">By revenue stream</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyRevenueBreakdown} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="subscriptions" stackId="a" fill="hsl(var(--chart-1))" radius={[0, 0, 0, 0]} name="Subscriptions" />
              <Bar dataKey="oneTime" stackId="a" fill="hsl(var(--chart-2))" name="One-time" />
              <Bar dataKey="services" stackId="a" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} name="Services" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-1" /><span className="text-muted-foreground">Subscriptions</span></div>
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-2" /><span className="text-muted-foreground">One-time</span></div>
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-3" /><span className="text-muted-foreground">Services</span></div>
          </div>
        </motion.div>

        {/* MRR Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">MRR Trend</h3>
            <p className="text-sm text-muted-foreground">MRR, churn, and expansion</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={mrrData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="mrr" fill="hsl(var(--chart-1) / 0.15)" stroke="hsl(var(--chart-1))" strokeWidth={2.5} name="MRR" />
              <Bar dataKey="expansion" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} barSize={14} name="Expansion" />
              <Bar dataKey="churn" fill="hsl(var(--destructive) / 0.7)" radius={[4, 4, 0, 0]} barSize={14} name="Churn" />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-chart-1" /><span className="text-muted-foreground">MRR</span></div>
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-success" /><span className="text-muted-foreground">Expansion</span></div>
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-destructive" /><span className="text-muted-foreground">Churn</span></div>
          </div>
        </motion.div>
      </section>

      {/* Revenue by Region + Top Products */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-card rounded-xl p-6 xl:col-span-2"
        >
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-foreground">Revenue by Region</h3>
            <p className="text-sm text-muted-foreground">Geographic revenue distribution</p>
          </div>
          <div className="space-y-4">
            {revenueByRegion.map((region, i) => {
              const maxRev = Math.max(...revenueByRegion.map(r => r.revenue));
              const barWidth = (region.revenue / maxRev) * 100;
              return (
                <div key={region.region} className="flex items-center gap-4">
                  <span className="w-32 text-sm font-medium text-foreground truncate">{region.region}</span>
                  <div className="flex-1 h-6 rounded-md bg-muted/50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidth}%` }}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                      className="h-full rounded-md bg-gradient-to-r from-chart-1 to-chart-2"
                    />
                  </div>
                  <span className="w-20 text-right text-sm font-mono font-semibold text-foreground">${(region.revenue / 1000).toFixed(1)}k</span>
                  <span className="w-16 text-right text-xs font-semibold stat-up">+{region.growth}%</span>
                </div>
              );
            })}
          </div>
        </motion.div>
        <TopProducts />
      </section>
    </DashboardLayout>
  );
};

export default Revenue;
