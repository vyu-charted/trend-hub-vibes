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
    <section id="discussions" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trending Threads
          </h2>
          <button className="organic-tag bg-muted text-muted-foreground cursor-pointer flex items-center gap-1 hover:text-foreground hover:bg-primary/10 transition-all">
            View All <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid gap-3">
          {threads.map((thread, i) => (
            <motion.div
              key={thread.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="organic-card p-4 md:p-5 flex items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="bg-primary/10 rounded-2xl p-2.5 shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {thread.pinned && (
                      <span className="flex items-center gap-1 text-primary text-xs font-medium">
                        <Pin className="h-3 w-3" /> Pinned
                      </span>
                    )}
                    {thread.hot && (
                      <span className="flex items-center gap-1 text-secondary text-xs font-medium">
                        <Flame className="h-3 w-3" /> Hot
                      </span>
                    )}
                    <span className="organic-tag bg-muted text-muted-foreground text-xs">{thread.category}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-base md:text-lg group-hover:text-primary transition-colors truncate">
                    {thread.title}
                  </h3>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-6 shrink-0 text-muted-foreground">
                <div className="text-center">
                  <div className="font-semibold text-foreground">{thread.replies}</div>
                  <div className="text-xs">replies</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">{thread.views}</div>
                  <div className="text-xs">views</div>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Clock className="h-3 w-3" /> {thread.lastActive}
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussionsSection;
