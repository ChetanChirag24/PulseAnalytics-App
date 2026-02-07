import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UserGrowthChart from "@/components/dashboard/UserGrowthChart";
import ChannelBreakdown from "@/components/dashboard/ChannelBreakdown";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import TopProducts from "@/components/dashboard/TopProducts";

const kpiData = [
  {
    title: "Total Revenue",
    value: "$58,900",
    change: 23.1,
    changeLabel: "vs last month",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "4,150",
    change: 18.7,
    changeLabel: "vs last month",
    icon: Users,
  },
  {
    title: "Total Orders",
    value: "1,284",
    change: 12.3,
    changeLabel: "vs last month",
    icon: ShoppingCart,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: -2.1,
    changeLabel: "vs last month",
    icon: Activity,
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      {/* KPI Cards */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <KPICard key={kpi.title} {...kpi} index={index} />
        ))}
      </section>

      {/* Charts Row */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <RevenueChart />
        <UserGrowthChart />
      </section>

      {/* Bottom Row */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <TransactionsTable />
        </div>
        <div className="space-y-6">
          <ChannelBreakdown />
          <TopProducts />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Index;
