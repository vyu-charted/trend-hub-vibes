import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp, TrendingDown } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "Alex Thornton",
    handle: "alex_trades",
    time: "2h ago",
    tag: "Analysis",
    title: "S&P 500 just broke the 5200 resistance — here's what happens next",
    content: "Historical data shows that when SPX breaks through major resistance after consolidation, we see a 73% probability of continued upward momentum for the next 2 weeks.",
    ticker: "SPX",
    tickerDirection: "up",
    tickerChange: "+1.2%",
    likes: 234,
    comments: 89,
  },
  {
    id: 2,
    author: "Diana Quinn",
    handle: "defi_queen",
    time: "4h ago",
    tag: "Opinion",
    title: "Unpopular opinion: ETH will flip BTC within 18 months",
    content: "With the institutional adoption of ETH staking, the deflationary mechanism post-merge, and the L2 ecosystem exploding — the flippening is closer than people think.",
    ticker: "ETH",
    tickerDirection: "up",
    tickerChange: "+3.8%",
    likes: 567,
    comments: 342,
  },
  {
    id: 3,
    author: "Michael Torres",
    handle: "macro_mike",
    time: "6h ago",
    tag: "Macro",
    title: "Fed pivot incoming? Bond market is screaming a different story",
    content: "The yield curve inversion is deepening again. Last 5 times this happened, we saw rate cuts within 6 months. Portfolio positioning matters now more than ever.",
    ticker: "TNX",
    tickerDirection: "down",
    tickerChange: "-0.5%",
    likes: 189,
    comments: 78,
  },
];

const FeedSection = () => {
  return (
    <section id="feed" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-light">Latest</h2>
          <div className="hidden md:flex gap-2">
            {["All", "Analysis", "Opinion", "Macro"].map((filter) => (
              <button
                key={filter}
                className={`luxury-tag cursor-pointer ${filter === "All" ? "bg-primary text-primary-foreground border-primary" : ""}`}
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="py-8 border-b border-border group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="luxury-tag text-xs">{post.tag}</span>
                    <span className="byline">By {post.author}</span>
                    <span className="dateline">{post.time}</span>
                  </div>
                  <h3 className="font-heading font-normal text-xl md:text-2xl mb-3 leading-snug group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-light">{post.content}</p>

                  <div className="flex items-center gap-4 mt-5">
                    <div className={`luxury-tag text-xs flex items-center gap-1 ${post.tickerDirection === "up" ? "text-success border-success/30" : "text-destructive border-destructive/30"}`}>
                      {post.tickerDirection === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {post.ticker} {post.tickerChange}
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors duration-300 text-sm">
                        <Heart className="h-4 w-4" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-foreground transition-colors duration-300 text-sm">
                        <MessageCircle className="h-4 w-4" /> {post.comments}
                      </button>
                      <button className="hover:text-foreground transition-colors duration-300 hidden sm:block">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="hover:text-foreground transition-colors duration-300 hidden sm:block">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="luxury-btn-outline">View All</button>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
