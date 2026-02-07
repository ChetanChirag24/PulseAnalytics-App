import { motion } from "framer-motion";
import { funnelData } from "@/data/dashboardData";

const ConversionFunnel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Conversion Funnel</h3>
        <p className="text-sm text-muted-foreground">User journey from visitor to paid</p>
      </div>

      <div className="space-y-3">
        {funnelData.map((stage, i) => {
          const width = stage.percentage;
          const colors = [
            "from-chart-1 to-chart-2",
            "from-chart-2 to-chart-3",
            "from-chart-3 to-chart-4",
            "from-chart-4 to-chart-5",
            "from-chart-5 to-primary",
          ];
          return (
            <div key={stage.stage} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{stage.stage}</span>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">{stage.value.toLocaleString()}</span>
                  <span className="font-mono font-semibold text-foreground">{stage.percentage}%</span>
                </div>
              </div>
              <div className="h-8 w-full rounded-lg bg-muted/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  className={`h-full rounded-lg bg-gradient-to-r ${colors[i]} flex items-center justify-end pr-2`}
                >
                  {width > 15 && (
                    <span className="text-xs font-semibold text-primary-foreground">
                      {stage.percentage}%
                    </span>
                  )}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ConversionFunnel;
