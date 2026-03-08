import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight, Flame, Clock, Pin } from "lucide-react";

const threads = [
  {
    id: 1,
    title: "Best broker for options trading in 2026?",
    replies: 127,
    views: "2.4k",
    lastActive: "12m ago",
    hot: true,
    pinned: false,
    category: "TOOLS",
  },
  {
    id: 2,
    title: "Weekly Portfolio Review Thread — March W2",
    replies: 89,
    views: "1.8k",
    lastActive: "1h ago",
    hot: false,
    pinned: true,
    category: "WEEKLY",
  },
  {
    id: 3,
    title: "Is DCA still the move in this market?",
    replies: 203,
    views: "5.1k",
    lastActive: "30m ago",
    hot: true,
    pinned: false,
    category: "STRATEGY",
  },
  {
    id: 4,
    title: "AI stocks bubble or legitimate growth?",
    replies: 341,
    views: "8.7k",
    lastActive: "5m ago",
    hot: true,
    pinned: false,
    category: "DEBATE",
  },
];

const DiscussionsSection = () => {
  return (
    <section id="discussions" className="border-b-2 border-foreground bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            TRENDING <span className="bg-primary text-primary-foreground px-2">THREADS</span>
          </h2>
          <button className="brutal-tag bg-background text-foreground cursor-pointer flex items-center gap-1">
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
              transition={{ delay: i * 0.1 }}
              className="border-2 border-background/30 hover:border-primary p-4 md:p-5 flex items-center justify-between gap-4 cursor-pointer group transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="bg-background/10 border border-background/20 p-2 shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {thread.pinned && (
                      <span className="flex items-center gap-1 text-primary text-xs font-heading font-bold">
                        <Pin className="h-3 w-3" /> PINNED
                      </span>
                    )}
                    {thread.hot && (
                      <span className="flex items-center gap-1 text-accent text-xs font-heading font-bold">
                        <Flame className="h-3 w-3" /> HOT
                      </span>
                    )}
                    <span className="text-xs font-heading font-bold text-background/50">{thread.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base md:text-lg group-hover:text-primary transition-colors truncate">
                    {thread.title}
                  </h3>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-6 shrink-0 text-background/60">
                <div className="text-center">
                  <div className="font-heading font-bold text-background">{thread.replies}</div>
                  <div className="text-xs font-heading">REPLIES</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-background">{thread.views}</div>
                  <div className="text-xs font-heading">VIEWS</div>
                </div>
                <div className="flex items-center gap-1 text-xs font-heading">
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
