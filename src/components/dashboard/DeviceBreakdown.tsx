import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { deviceData } from "@/data/dashboardData";
import { Monitor, Smartphone, Tablet } from "lucide-react";

const icons = { Desktop: Monitor, Mobile: Smartphone, Tablet: Tablet };

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="text-sm font-semibold" style={{ color: payload[0].payload.fill }}>
          {payload[0].name}: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const DeviceBreakdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Device Breakdown</h3>
        <p className="text-sm text-muted-foreground">Traffic by device type</p>
      </div>

      <div className="flex items-center gap-4">
        <ResponsiveContainer width={140} height={140}>
          <PieChart>
            <Pie
              data={deviceData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={65}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
            >
              {deviceData.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex-1 space-y-3">
          {deviceData.map((device) => {
            const Icon = icons[device.name as keyof typeof icons];
            return (
              <div key={device.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{device.name}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{device.value}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default DeviceBreakdown;
