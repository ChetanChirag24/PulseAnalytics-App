import { motion } from "framer-motion";
import { FileText, Download, Eye, Search } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { documents } from "@/data/dashboardData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const statusStyles: Record<string, string> = {
  published: "bg-success/10 text-success",
  draft: "bg-muted text-muted-foreground",
  review: "bg-warning/10 text-warning",
};

const typeIcons: Record<string, string> = {
  PDF: "📄",
  DOCX: "📝",
  XLSX: "📊",
};

const Documents = () => {
  const [search, setSearch] = useState("");

  const filtered = documents.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      {/* Stats */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { label: "Total Documents", value: documents.length.toString(), icon: FileText },
          { label: "Published", value: documents.filter(d => d.status === "published").length.toString(), icon: Eye },
          { label: "In Review", value: documents.filter(d => d.status === "review").length.toString(), icon: Search },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Search + Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass-card rounded-xl p-6"
      >
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">All Documents</h3>
            <p className="text-sm text-muted-foreground">Reports, files, and shared documents</p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-muted/50 border-border/50"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Document</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Type</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Size</th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Author</th>
                <th className="pb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                <th className="pb-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</th>
                <th className="pb-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filtered.map((doc) => (
                <tr key={doc.id} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{typeIcons[doc.type] || "📄"}</span>
                      <span className="text-sm font-medium text-foreground">{doc.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 text-sm font-mono text-muted-foreground">{doc.type}</td>
                  <td className="py-3.5 text-sm text-muted-foreground">{doc.size}</td>
                  <td className="py-3.5 text-sm text-foreground">{doc.author}</td>
                  <td className="py-3.5 text-center">
                    <span className={cn("inline-block rounded-full px-2.5 py-1 text-xs font-semibold capitalize", statusStyles[doc.status])}>{doc.status}</span>
                  </td>
                  <td className="py-3.5 text-right text-sm text-muted-foreground">{doc.date}</td>
                  <td className="py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Documents;
