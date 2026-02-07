import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { bounceRateData } from "@/data/dashboardData";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
        <p className="text-sm font-semibold text-foreground">
          Bounce Rate: {payload[0].value}%
        </p>
        <p className="text-sm text-muted-foreground">
          Views: {payload[0].payload.views.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const BounceRateChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Bounce Rate by Page</h3>
        <p className="text-sm text-muted-foreground">Lower is better</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={bounceRateData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 60]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            tickFormatter={(v) => `${v}%`}
          />
          <YAxis
            type="category"
            dataKey="page"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            width={80}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="rate"
            fill="hsl(var(--chart-5))"
            radius={[0, 6, 6, 0]}
            barSize={16}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default BounceRateChart;
