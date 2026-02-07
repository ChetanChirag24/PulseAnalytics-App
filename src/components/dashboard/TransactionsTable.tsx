import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { recentTransactions } from "@/data/dashboardData";
import { ArrowUpRight } from "lucide-react";

const statusStyles = {
  completed: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  failed: "bg-destructive/10 text-destructive",
};

const TransactionsTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="glass-card rounded-xl p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Latest orders and payments</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          View All <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Transaction
              </th>
              <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Customer
              </th>
              <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Product
              </th>
              <th className="pb-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Amount
              </th>
              <th className="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </th>
              <th className="pb-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {recentTransactions.map((txn) => (
              <tr key={txn.id} className="group hover:bg-muted/30 transition-colors">
                <td className="py-3.5 text-sm font-mono font-medium text-foreground">
                  {txn.id}
                </td>
                <td className="py-3.5 text-sm text-foreground">{txn.customer}</td>
                <td className="py-3.5 text-sm text-muted-foreground">{txn.product}</td>
                <td className="py-3.5 text-right text-sm font-semibold text-foreground">
                  ${txn.amount.toLocaleString()}
                </td>
                <td className="py-3.5 text-center">
                  <span
                    className={cn(
                      "inline-block rounded-full px-2.5 py-1 text-xs font-semibold capitalize",
                      statusStyles[txn.status]
                    )}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="py-3.5 text-right text-sm text-muted-foreground">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TransactionsTable;
