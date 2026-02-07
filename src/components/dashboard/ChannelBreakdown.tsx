import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { channelData } from "@/data/dashboardData";

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

const ChannelBreakdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Traffic Channels</h3>
        <p className="text-sm text-muted-foreground">Acquisition sources</p>
      </div>

      <div className="flex items-center gap-4">
        <ResponsiveContainer width={160} height={160}>
          <PieChart>
            <Pie
              data={channelData}
              cx="50%"
              cy="50%"
              innerRadius={48}
              outerRadius={72}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
            >
              {channelData.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="flex-1 space-y-3">
          {channelData.map((channel) => (
            <div key={channel.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: channel.fill }}
                />
                <span className="text-sm text-foreground">{channel.name}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">{channel.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ChannelBreakdown;
