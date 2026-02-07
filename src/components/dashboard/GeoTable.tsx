import { motion } from "framer-motion";
import { geoData } from "@/data/dashboardData";
import { Globe } from "lucide-react";

const GeoTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="mb-5 flex items-center gap-2">
        <Globe className="h-5 w-5 text-primary" />
        <div>
          <h3 className="text-lg font-semibold text-foreground">Geographic Distribution</h3>
          <p className="text-sm text-muted-foreground">Users and revenue by country</p>
        </div>
      </div>

      <div className="space-y-3">
        {geoData.map((geo, i) => (
          <div key={geo.country} className="flex items-center gap-4">
            <span className="w-32 text-sm font-medium text-foreground truncate">{geo.country}</span>
            <div className="flex-1">
              <div className="h-6 w-full rounded-md bg-muted/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${geo.percentage}%` }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="h-full rounded-md bg-gradient-to-r from-primary/80 to-chart-2/80"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="w-16 text-right font-mono text-foreground">{geo.users.toLocaleString()}</span>
              <span className="w-20 text-right font-mono font-semibold text-foreground">${(geo.revenue / 1000).toFixed(1)}k</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GeoTable;
