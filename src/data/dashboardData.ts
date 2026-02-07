export const revenueData = [
  { month: "Jul", revenue: 32400, target: 30000 },
  { month: "Aug", revenue: 35100, target: 32000 },
  { month: "Sep", revenue: 29800, target: 33000 },
  { month: "Oct", revenue: 41200, target: 35000 },
  { month: "Nov", revenue: 47800, target: 38000 },
  { month: "Dec", revenue: 52300, target: 40000 },
  { month: "Jan", revenue: 58900, target: 45000 },
];

export const userGrowthData = [
  { month: "Jul", users: 1240, active: 890 },
  { month: "Aug", users: 1580, active: 1120 },
  { month: "Sep", users: 1890, active: 1340 },
  { month: "Oct", users: 2340, active: 1780 },
  { month: "Nov", users: 2890, active: 2190 },
  { month: "Dec", users: 3420, active: 2680 },
  { month: "Jan", users: 4150, active: 3310 },
];

export const channelData = [
  { name: "Organic", value: 42, fill: "hsl(var(--chart-1))" },
  { name: "Paid Ads", value: 28, fill: "hsl(var(--chart-2))" },
  { name: "Referral", value: 18, fill: "hsl(var(--chart-3))" },
  { name: "Social", value: 12, fill: "hsl(var(--chart-4))" },
];

export const weeklyActivityData = [
  { day: "Mon", sessions: 420, conversions: 38 },
  { day: "Tue", sessions: 380, conversions: 32 },
  { day: "Wed", sessions: 510, conversions: 45 },
  { day: "Thu", sessions: 470, conversions: 41 },
  { day: "Fri", sessions: 390, conversions: 35 },
  { day: "Sat", sessions: 280, conversions: 22 },
  { day: "Sun", sessions: 310, conversions: 28 },
];

export const recentTransactions = [
  { id: "TXN-7291", customer: "Sarah Chen", amount: 2450, status: "completed" as const, date: "2 min ago", product: "Enterprise Plan" },
  { id: "TXN-7290", customer: "Marcus Johnson", amount: 890, status: "completed" as const, date: "14 min ago", product: "Pro Plan" },
  { id: "TXN-7289", customer: "Elena Rodriguez", amount: 1200, status: "pending" as const, date: "32 min ago", product: "Team Plan" },
  { id: "TXN-7288", customer: "David Kim", amount: 450, status: "completed" as const, date: "1 hr ago", product: "Starter Plan" },
  { id: "TXN-7287", customer: "Lisa Thompson", amount: 3200, status: "completed" as const, date: "2 hr ago", product: "Enterprise Plan" },
  { id: "TXN-7286", customer: "James Wright", amount: 890, status: "failed" as const, date: "3 hr ago", product: "Pro Plan" },
];

export const topProducts = [
  { name: "Enterprise Plan", revenue: 128400, growth: 24.5 },
  { name: "Pro Plan", revenue: 89200, growth: 18.2 },
  { name: "Team Plan", revenue: 45600, growth: 12.8 },
  { name: "Starter Plan", revenue: 21300, growth: -3.4 },
];

// Advanced analytics data
export const hourlyTrafficData = [
  { hour: "00", visitors: 120, pageViews: 340 },
  { hour: "02", visitors: 80, pageViews: 190 },
  { hour: "04", visitors: 45, pageViews: 110 },
  { hour: "06", visitors: 90, pageViews: 230 },
  { hour: "08", visitors: 310, pageViews: 890 },
  { hour: "10", visitors: 520, pageViews: 1420 },
  { hour: "12", visitors: 480, pageViews: 1280 },
  { hour: "14", visitors: 550, pageViews: 1510 },
  { hour: "16", visitors: 490, pageViews: 1350 },
  { hour: "18", visitors: 380, pageViews: 980 },
  { hour: "20", visitors: 290, pageViews: 720 },
  { hour: "22", visitors: 180, pageViews: 460 },
];

export const deviceData = [
  { name: "Desktop", value: 58, fill: "hsl(var(--chart-1))" },
  { name: "Mobile", value: 32, fill: "hsl(var(--chart-2))" },
  { name: "Tablet", value: 10, fill: "hsl(var(--chart-3))" },
];

export const geoData = [
  { country: "United States", users: 1840, revenue: 28400, percentage: 44 },
  { country: "United Kingdom", users: 620, revenue: 9800, percentage: 15 },
  { country: "Germany", users: 480, revenue: 7200, percentage: 12 },
  { country: "Canada", users: 390, revenue: 5600, percentage: 9 },
  { country: "France", users: 320, revenue: 4200, percentage: 8 },
  { country: "Australia", users: 280, revenue: 3100, percentage: 7 },
  { country: "Others", users: 220, revenue: 2500, percentage: 5 },
];

export const bounceRateData = [
  { page: "Homepage", rate: 32, views: 12400 },
  { page: "Pricing", rate: 24, views: 8200 },
  { page: "Features", rate: 28, views: 6800 },
  { page: "Blog", rate: 45, views: 5400 },
  { page: "Contact", rate: 18, views: 3200 },
  { page: "About", rate: 38, views: 2800 },
];

// Revenue page data
export const monthlyRevenueBreakdown = [
  { month: "Jul", subscriptions: 22400, oneTime: 6800, services: 3200 },
  { month: "Aug", subscriptions: 24100, oneTime: 7200, services: 3800 },
  { month: "Sep", subscriptions: 20800, oneTime: 5800, services: 3200 },
  { month: "Oct", subscriptions: 28200, oneTime: 8200, services: 4800 },
  { month: "Nov", subscriptions: 32800, oneTime: 9400, services: 5600 },
  { month: "Dec", subscriptions: 36300, oneTime: 10200, services: 5800 },
  { month: "Jan", subscriptions: 40900, oneTime: 11400, services: 6600 },
];

export const revenueByRegion = [
  { region: "North America", revenue: 34200, growth: 22.4 },
  { region: "Europe", revenue: 18400, growth: 18.7 },
  { region: "Asia Pacific", revenue: 8900, growth: 34.2 },
  { region: "Latin America", revenue: 3200, growth: 12.1 },
  { region: "Middle East", revenue: 1800, growth: 8.5 },
];

export const mrrData = [
  { month: "Jul", mrr: 22400, churn: 1200, expansion: 3400 },
  { month: "Aug", mrr: 24600, churn: 1400, expansion: 3600 },
  { month: "Sep", mrr: 26800, churn: 1100, expansion: 3300 },
  { month: "Oct", mrr: 30200, churn: 1600, expansion: 5000 },
  { month: "Nov", mrr: 34600, churn: 1800, expansion: 6200 },
  { month: "Dec", mrr: 38400, churn: 2000, expansion: 5800 },
  { month: "Jan", mrr: 42800, churn: 1900, expansion: 6300 },
];

// Customer data
export const customerSegments = [
  { name: "Enterprise", count: 48, revenue: 128400, avgDeal: 2675, churnRate: 2.1 },
  { name: "Pro", count: 312, revenue: 89200, avgDeal: 286, churnRate: 4.8 },
  { name: "Team", count: 580, revenue: 45600, avgDeal: 79, churnRate: 6.2 },
  { name: "Starter", count: 1420, revenue: 21300, avgDeal: 15, churnRate: 12.4 },
];

export const customerSatisfaction = [
  { category: "Very Satisfied", value: 42 },
  { category: "Satisfied", value: 31 },
  { category: "Neutral", value: 15 },
  { category: "Dissatisfied", value: 8 },
  { category: "Very Dissatisfied", value: 4 },
];

export const customerLifetimeValue = [
  { month: "Jul", ltv: 340, cac: 120 },
  { month: "Aug", ltv: 365, cac: 115 },
  { month: "Sep", ltv: 380, cac: 125 },
  { month: "Oct", ltv: 410, cac: 108 },
  { month: "Nov", ltv: 445, cac: 102 },
  { month: "Dec", ltv: 480, cac: 95 },
  { month: "Jan", ltv: 520, cac: 90 },
];

export const recentCustomers = [
  { id: "CUS-1001", name: "Acme Corp", email: "billing@acme.co", plan: "Enterprise", mrr: 4200, joinDate: "Jan 15, 2026", status: "active" as const },
  { id: "CUS-1002", name: "TechFlow Inc", email: "admin@techflow.io", plan: "Pro", mrr: 890, joinDate: "Jan 12, 2026", status: "active" as const },
  { id: "CUS-1003", name: "DataViz Labs", email: "ops@dataviz.com", plan: "Team", mrr: 320, joinDate: "Jan 10, 2026", status: "active" as const },
  { id: "CUS-1004", name: "CloudNine", email: "hello@cloudnine.dev", plan: "Enterprise", mrr: 3800, joinDate: "Jan 8, 2026", status: "active" as const },
  { id: "CUS-1005", name: "StartupXYZ", email: "cto@startupxyz.com", plan: "Starter", mrr: 29, joinDate: "Jan 5, 2026", status: "churned" as const },
  { id: "CUS-1006", name: "MegaScale", email: "finance@megascale.io", plan: "Pro", mrr: 890, joinDate: "Dec 28, 2025", status: "active" as const },
];

// Orders data
export const allOrders = [
  { id: "ORD-2041", customer: "Sarah Chen", product: "Enterprise Plan", amount: 2450, status: "completed" as const, date: "Feb 7, 2026", method: "Credit Card" },
  { id: "ORD-2040", customer: "Marcus Johnson", product: "Pro Plan", amount: 890, status: "completed" as const, date: "Feb 7, 2026", method: "PayPal" },
  { id: "ORD-2039", customer: "Elena Rodriguez", product: "Team Plan", amount: 1200, status: "pending" as const, date: "Feb 6, 2026", method: "Wire Transfer" },
  { id: "ORD-2038", customer: "David Kim", product: "Starter Plan", amount: 450, status: "completed" as const, date: "Feb 6, 2026", method: "Credit Card" },
  { id: "ORD-2037", customer: "Lisa Thompson", product: "Enterprise Plan", amount: 3200, status: "completed" as const, date: "Feb 5, 2026", method: "Credit Card" },
  { id: "ORD-2036", customer: "James Wright", product: "Pro Plan", amount: 890, status: "failed" as const, date: "Feb 5, 2026", method: "ACH" },
  { id: "ORD-2035", customer: "Nina Patel", product: "Team Plan", amount: 640, status: "completed" as const, date: "Feb 4, 2026", method: "Credit Card" },
  { id: "ORD-2034", customer: "Alex Morgan", product: "Enterprise Plan", amount: 5200, status: "refunded" as const, date: "Feb 4, 2026", method: "Wire Transfer" },
  { id: "ORD-2033", customer: "Chris Lee", product: "Pro Plan", amount: 890, status: "completed" as const, date: "Feb 3, 2026", method: "PayPal" },
  { id: "ORD-2032", customer: "Taylor Swift", product: "Starter Plan", amount: 180, status: "completed" as const, date: "Feb 3, 2026", method: "Credit Card" },
];

export const ordersByStatus = [
  { name: "Completed", value: 842, fill: "hsl(var(--success))" },
  { name: "Pending", value: 156, fill: "hsl(var(--warning))" },
  { name: "Failed", value: 48, fill: "hsl(var(--destructive))" },
  { name: "Refunded", value: 38, fill: "hsl(var(--chart-3))" },
];

export const dailyOrders = [
  { date: "Feb 1", orders: 42, revenue: 18400 },
  { date: "Feb 2", orders: 38, revenue: 15200 },
  { date: "Feb 3", orders: 55, revenue: 24800 },
  { date: "Feb 4", orders: 48, revenue: 21600 },
  { date: "Feb 5", orders: 62, revenue: 28400 },
  { date: "Feb 6", orders: 44, revenue: 19800 },
  { date: "Feb 7", orders: 51, revenue: 22400 },
];

// Documents data
export const documents = [
  { id: "DOC-001", name: "Q4 2025 Revenue Report", type: "PDF", size: "2.4 MB", author: "Jordan Davis", date: "Jan 28, 2026", status: "published" as const },
  { id: "DOC-002", name: "User Acquisition Strategy", type: "DOCX", size: "1.8 MB", author: "Sarah Chen", date: "Jan 25, 2026", status: "draft" as const },
  { id: "DOC-003", name: "Product Roadmap 2026", type: "PDF", size: "3.2 MB", author: "Marcus Johnson", date: "Jan 22, 2026", status: "published" as const },
  { id: "DOC-004", name: "Customer Churn Analysis", type: "XLSX", size: "890 KB", author: "Elena Rodriguez", date: "Jan 18, 2026", status: "review" as const },
  { id: "DOC-005", name: "Marketing Campaign Results", type: "PDF", size: "4.1 MB", author: "David Kim", date: "Jan 15, 2026", status: "published" as const },
  { id: "DOC-006", name: "Engineering Sprint Retro", type: "DOCX", size: "520 KB", author: "Lisa Thompson", date: "Jan 12, 2026", status: "draft" as const },
  { id: "DOC-007", name: "Annual Financial Summary", type: "PDF", size: "5.8 MB", author: "Jordan Davis", date: "Jan 8, 2026", status: "published" as const },
  { id: "DOC-008", name: "Partnership Proposals", type: "PDF", size: "1.2 MB", author: "Nina Patel", date: "Jan 5, 2026", status: "review" as const },
];

// Notifications data
export const notifications = [
  { id: 1, title: "New Enterprise signup", message: "Acme Corp just upgraded to Enterprise plan", type: "success" as const, time: "2 min ago", read: false },
  { id: 2, title: "Payment failed", message: "James Wright's payment for Pro Plan failed", type: "error" as const, time: "14 min ago", read: false },
  { id: 3, title: "Revenue milestone", message: "Monthly revenue exceeded $50K target!", type: "success" as const, time: "1 hr ago", read: false },
  { id: 4, title: "High churn alert", message: "Starter plan churn rate increased to 12.4%", type: "warning" as const, time: "2 hr ago", read: true },
  { id: 5, title: "New feature deployed", message: "v2.4.1 has been deployed to production", type: "info" as const, time: "3 hr ago", read: true },
  { id: 6, title: "Support ticket escalated", message: "Ticket #4521 needs immediate attention", type: "warning" as const, time: "4 hr ago", read: true },
  { id: 7, title: "Weekly report ready", message: "Your weekly analytics report is ready for review", type: "info" as const, time: "5 hr ago", read: true },
  { id: 8, title: "Database backup complete", message: "Automated backup completed successfully", type: "success" as const, time: "6 hr ago", read: true },
];

// Conversion funnel data
export const funnelData = [
  { stage: "Visitors", value: 12400, percentage: 100 },
  { stage: "Sign Ups", value: 3720, percentage: 30 },
  { stage: "Activated", value: 2232, percentage: 18 },
  { stage: "Trial", value: 1116, percentage: 9 },
  { stage: "Paid", value: 558, percentage: 4.5 },
];

// Radar / Performance scores
export const performanceData = [
  { metric: "Speed", score: 92 },
  { metric: "Uptime", score: 99 },
  { metric: "Security", score: 88 },
  { metric: "Support", score: 85 },
  { metric: "Features", score: 78 },
  { metric: "UX", score: 91 },
];
