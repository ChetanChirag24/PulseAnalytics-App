import { Eye, MousePointerClick, Timer, ArrowDownUp } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import HourlyTrafficChart from "@/components/dashboard/HourlyTrafficChart";
import WeeklyActivityChart from "@/components/dashboard/WeeklyActivityChart";
import BounceRateChart from "@/components/dashboard/BounceRateChart";
import DeviceBreakdown from "@/components/dashboard/DeviceBreakdown";
import GeoTable from "@/components/dashboard/GeoTable";
import ConversionFunnel from "@/components/dashboard/ConversionFunnel";
import PerformanceRadar from "@/components/dashboard/PerformanceRadar";
import ChannelBreakdown from "@/components/dashboard/ChannelBreakdown";

const analyticsKPIs = [
  { title: "Page Views", value: "48,290", change: 14.2, changeLabel: "vs last week", icon: Eye },
  { title: "Unique Visitors", value: "12,400", change: 8.6, changeLabel: "vs last week", icon: MousePointerClick },
  { title: "Avg Session", value: "4m 32s", change: 5.3, changeLabel: "vs last week", icon: Timer },
  { title: "Bounce Rate", value: "32.4%", change: -4.8, changeLabel: "vs last week", icon: ArrowDownUp },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {analyticsKPIs.map((kpi, index) => (
          <KPICard key={kpi.title} {...kpi} index={index} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <HourlyTrafficChart />
        <WeeklyActivityChart />
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <ConversionFunnel />
        <BounceRateChart />
        <div className="space-y-6">
          <DeviceBreakdown />
          <ChannelBreakdown />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <GeoTable />
        <PerformanceRadar />
      </section>
    </DashboardLayout>
  );
};

export default Analytics;
