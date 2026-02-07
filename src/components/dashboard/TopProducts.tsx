import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { topProducts } from "@/data/dashboardData";

const TopProducts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-foreground">Top Products</h3>
        <p className="text-sm text-muted-foreground">Revenue by product tier</p>
      </div>

      <div className="space-y-4">
        {topProducts.map((product, i) => {
          const isPositive = product.growth >= 0;
          const maxRevenue = Math.max(...topProducts.map((p) => p.revenue));
          const barWidth = (product.revenue / maxRevenue) * 100;

          return (
            <div key={product.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{product.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    ${(product.revenue / 1000).toFixed(1)}k
                  </span>
                  <div className={cn("flex items-center gap-0.5 text-xs font-semibold", isPositive ? "stat-up" : "stat-down")}>
                    {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {isPositive ? "+" : ""}{product.growth}%
                  </div>
                </div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${barWidth}%` }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-chart-2"
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TopProducts;
