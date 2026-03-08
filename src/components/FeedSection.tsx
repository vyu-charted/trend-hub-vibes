import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp, TrendingDown } from "lucide-react";

const posts = [
  {
    id: 1, author: "alex_trades", handle: "alex_trades", time: "2h ago", tag: "ANALYSIS",
    title: "S&P 500 just broke the 5200 resistance — here's what happens next",
    content: "Historical data shows that when SPX breaks through major resistance after consolidation, we see a 73% probability of continued upward momentum for the next 2 weeks.",
    ticker: "SPX", tickerDirection: "up", tickerChange: "+1.2%", likes: 234, comments: 89,
  },
  {
    id: 2, author: "defi_queen", handle: "defi_queen", time: "4h ago", tag: "OPINION",
    title: "Unpopular opinion: ETH will flip BTC within 18 months",
    content: "With the institutional adoption of ETH staking, the deflationary mechanism post-merge, and the L2 ecosystem exploding — the flippening is closer than people think.",
    ticker: "ETH", tickerDirection: "up", tickerChange: "+3.8%", likes: 567, comments: 342,
  },
  {
    id: 3, author: "macro_mike", handle: "macro_mike", time: "6h ago", tag: "MACRO",
    title: "Fed pivot incoming? Bond market is screaming a different story",
    content: "The yield curve inversion is deepening again. Last 5 times this happened, we saw rate cuts within 6 months. Portfolio positioning matters now more than ever.",
    ticker: "TNX", tickerDirection: "down", tickerChange: "-0.5%", likes: 189, comments: 78,
  },
];

const FeedSection = () => {
  return (
    <section id="feed" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            <span className="text-muted-foreground">cat</span> /feed/latest
          </h2>
          <div className="hidden md:flex gap-2">
            {["ALL", "ANALYSIS", "OPINION", "MACRO"].map((filter) => (
              <button
                key={filter}
                className={`luxury-tag cursor-pointer ${filter === "ALL" ? "bg-primary/10 text-primary border-primary/40" : ""}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="gold-line-left mb-10" />

        <div className="space-y-0">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="py-6 border-b border-border group"
            >
              <div className="flex items-start gap-6">
                <div className="text-muted-foreground text-xs font-heading mt-1 hidden sm:block">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="luxury-tag text-xs">{post.tag}</span>
                    <span className="text-xs text-muted-foreground font-heading">@{post.handle}</span>
                    <span className="dateline">{post.time}</span>
                  </div>
                  <h3 className="font-heading font-bold text-base md:text-lg mb-2 leading-snug group-hover:text-primary transition-colors duration-200">{post.title}</h3>
                  <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">{post.content}</p>

                  <div className="flex items-center gap-4 mt-4">
                    <div className={`luxury-tag text-xs flex items-center gap-1 ${post.tickerDirection === "up" ? "text-primary border-primary/30" : "text-destructive border-destructive/30"}`}>
                      {post.tickerDirection === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      ${post.ticker} {post.tickerChange}
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors duration-200 text-xs font-heading">
                        <Heart className="h-3.5 w-3.5" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors duration-200 text-xs font-heading">
                        <MessageCircle className="h-3.5 w-3.5" /> {post.comments}
                      </button>
                      <button className="hover:text-primary transition-colors duration-200 hidden sm:block">
                        <Share2 className="h-3.5 w-3.5" />
                      </button>
                      <button className="hover:text-primary transition-colors duration-200 hidden sm:block">
                        <Bookmark className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="luxury-btn-outline">tail -f /feed</button>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
