import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight, Flame, Clock, Pin } from "lucide-react";

const threads = [
  { id: 1, title: "Best broker for options trading in 2026?", replies: 127, views: "2.4k", lastActive: "12m ago", hot: true, pinned: false, category: "Tools" },
  { id: 2, title: "Weekly Portfolio Review Thread — March W2", replies: 89, views: "1.8k", lastActive: "1h ago", hot: false, pinned: true, category: "Weekly" },
  { id: 3, title: "Is DCA still the move in this market?", replies: 203, views: "5.1k", lastActive: "30m ago", hot: true, pinned: false, category: "Strategy" },
  { id: 4, title: "AI stocks bubble or legitimate growth?", replies: 341, views: "8.7k", lastActive: "5m ago", hot: true, pinned: false, category: "Debate" },
];

const DiscussionsSection = () => {
  return (
    <section id="discussions" className="relative bg-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-light">Discussions</h2>
          <button className="luxury-tag cursor-pointer flex items-center gap-1">
            View All <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>

        <div className="gold-line-left mb-10" />

        <div className="space-y-0">
          {threads.map((thread, i) => (
            <motion.div
              key={thread.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="py-5 border-b border-border flex items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <MessageSquare className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    {thread.pinned && (
                      <span className="flex items-center gap-1 text-primary text-xs uppercase tracking-[0.2em] font-medium">
                        <Pin className="h-3 w-3" /> Pinned
                      </span>
                    )}
                    {thread.hot && (
                      <span className="flex items-center gap-1 text-primary text-xs uppercase tracking-[0.2em] font-medium">
                        <Flame className="h-3 w-3" /> Hot
                      </span>
                    )}
                    <span className="luxury-tag text-xs">{thread.category}</span>
                  </div>
                  <h3 className="font-heading font-normal text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                    {thread.title}
                  </h3>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-8 shrink-0 text-muted-foreground text-sm">
                <div className="text-center">
                  <div className="font-medium text-foreground">{thread.replies}</div>
                  <div className="dateline text-xs">replies</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-foreground">{thread.views}</div>
                  <div className="dateline text-xs">views</div>
                </div>
                <div className="flex items-center gap-1 dateline text-xs">
                  <Clock className="h-3 w-3" /> {thread.lastActive}
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussionsSection;
