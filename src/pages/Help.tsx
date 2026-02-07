import { motion } from "framer-motion";
import { HelpCircle, Book, MessageSquare, Video, ExternalLink, ChevronDown } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I export my analytics data?",
    answer: "Navigate to the Analytics page, then click the export button in the top right corner. You can export data as CSV, PDF, or JSON format for the selected date range."
  },
  {
    question: "What payment methods are supported?",
    answer: "We support Credit Card (Visa, Mastercard, Amex), PayPal, ACH bank transfer, and wire transfer for Enterprise customers."
  },
  {
    question: "How is MRR calculated?",
    answer: "Monthly Recurring Revenue (MRR) is calculated by summing all active subscription fees at their monthly rate. Annual subscriptions are divided by 12 to get the monthly equivalent."
  },
  {
    question: "Can I customize dashboard widgets?",
    answer: "Yes! Click the gear icon on any widget to customize its data source, date range, and visualization type. You can also drag and drop widgets to rearrange your dashboard."
  },
  {
    question: "How do I add team members?",
    answer: "Go to Settings → Team Management → Invite Member. Enter their email address and assign a role (Admin, Editor, or Viewer). They'll receive an invitation email to join your workspace."
  },
];

const resources = [
  { title: "Documentation", description: "Complete API reference and guides", icon: Book, link: "#" },
  { title: "Community Forum", description: "Connect with other Pulse users", icon: MessageSquare, link: "#" },
  { title: "Video Tutorials", description: "Step-by-step video guides", icon: Video, link: "#" },
];

const Help = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <DashboardLayout>
      {/* Resources */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {resources.map((resource, i) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <resource.icon className="h-6 w-6 text-primary" />
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{resource.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
          </motion.div>
        ))}
      </section>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass-card rounded-xl p-6 max-w-3xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border/50 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex items-center justify-between w-full p-4 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{faq.question}</span>
                <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", openFaq === i && "rotate-180")} />
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-card rounded-xl p-6 max-w-3xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Need More Help?</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Can't find what you're looking for? Our support team is available 24/7 to help.
        </p>
        <div className="flex gap-3">
          <Button>Contact Support</Button>
          <Button variant="outline">Schedule a Call</Button>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Help;
