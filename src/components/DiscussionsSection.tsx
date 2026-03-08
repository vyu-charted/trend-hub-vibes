import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight, Flame, Clock, Pin } from "lucide-react";

const threads = [
  { id: 1, title: "Best broker for options trading in 2026?", replies: 127, views: "2.4k", lastActive: "12m ago", hot: true, pinned: false, category: "TOOLS" },
  { id: 2, title: "Weekly Portfolio Review Thread — March W2", replies: 89, views: "1.8k", lastActive: "1h ago", hot: false, pinned: true, category: "WEEKLY" },
  { id: 3, title: "Is DCA still the move in this market?", replies: 203, views: "5.1k", lastActive: "30m ago", hot: true, pinned: false, category: "STRAT" },
  { id: 4, title: "AI stocks bubble or legitimate growth?", replies: 341, views: "8.7k", lastActive: "5m ago", hot: true, pinned: false, category: "DEBATE" },
];

const DiscussionsSection = () => {
  return (
    <section id="discussions" className="relative bg-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            <span className="text-muted-foreground">ls</span> /discussions
          </h2>
          <button className="luxury-tag cursor-pointer flex items-center gap-1">
            --all <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>

        <div className="gold-line-left mb-10" />

        <div className="space-y-0 font-heading text-sm">
          {/* Header row */}
          <div className="py-2 border-b border-primary/20 flex items-center justify-between gap-4 text-xs text-primary/60 uppercase tracking-wider">
            <div className="flex-1">THREAD</div>
            <div className="hidden md:flex items-center gap-8 shrink-0 w-64 justify-end">
              <span className="w-16 text-right">REPLY</span>
              <span className="w-16 text-right">VIEWS</span>
              <span className="w-20 text-right">ACTIVE</span>
            </div>
          </div>
          {threads.map((thread, i) => (
            <motion.div
              key={thread.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="py-4 border-b border-border flex items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className="text-muted-foreground text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {thread.pinned && (
                      <span className="flex items-center gap-1 text-warning text-xs font-bold">
                        <Pin className="h-3 w-3" /> PIN
                      </span>
                    )}
                    {thread.hot && (
                      <span className="flex items-center gap-1 text-destructive text-xs font-bold">
                        <Flame className="h-3 w-3" /> HOT
                      </span>
                    )}
                    <span className="luxury-tag text-xs">{thread.category}</span>
                  </div>
                  <h3 className="font-heading font-medium text-sm group-hover:text-primary transition-colors duration-200">
                    {thread.title}
                  </h3>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-8 shrink-0 w-64 justify-end text-muted-foreground text-xs">
                <span className="w-16 text-right">{thread.replies}</span>
                <span className="w-16 text-right">{thread.views}</span>
                <span className="w-20 text-right flex items-center justify-end gap-1">
                  <Clock className="h-3 w-3" /> {thread.lastActive}
                </span>
              </div>

              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 text-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussionsSection;
