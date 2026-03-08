import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp, TrendingDown } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "alex_trades",
    avatar: "AT",
    time: "2h ago",
    tag: "Analysis",
    tagColor: "bg-primary/15 text-primary border border-primary/20",
    title: "S&P 500 just broke the 5200 resistance — here's what happens next",
    content: "Historical data shows that when SPX breaks through major resistance after consolidation, we see a 73% probability of continued upward momentum for the next 2 weeks...",
    ticker: "SPX",
    tickerDirection: "up",
    tickerChange: "+1.2%",
    likes: 234,
    comments: 89,
  },
  {
    id: 2,
    author: "defi_queen",
    avatar: "DQ",
    time: "4h ago",
    tag: "Hot Take",
    tagColor: "bg-accent/15 text-accent border border-accent/20",
    title: "Unpopular opinion: ETH will flip BTC within 18 months",
    content: "With the institutional adoption of ETH staking, the deflationary mechanism post-merge, and the L2 ecosystem exploding — the flippening is closer than people think...",
    ticker: "ETH",
    tickerDirection: "up",
    tickerChange: "+3.8%",
    likes: 567,
    comments: 342,
  },
  {
    id: 3,
    author: "macro_mike",
    avatar: "MM",
    time: "6h ago",
    tag: "Macro",
    tagColor: "bg-secondary/15 text-secondary border border-secondary/20",
    title: "Fed pivot incoming? Bond market is screaming a different story",
    content: "The yield curve inversion is deepening again. Last 5 times this happened, we saw rate cuts within 6 months. Portfolio positioning matters now more than ever...",
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
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Feed
          </h2>
          <div className="hidden md:flex gap-2">
            {["All", "Analysis", "Hot Takes", "Macro"].map((filter) => (
              <button
                key={filter}
                className={`glass-tag cursor-pointer transition-all ${filter === "All" ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground" : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground border border-foreground/10"}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 md:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary to-accent rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                  {post.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-semibold text-sm">@{post.author}</span>
                    <span className="text-muted-foreground text-sm">·</span>
                    <span className="text-muted-foreground text-sm">{post.time}</span>
                    <span className={`glass-tag text-xs ${post.tagColor}`}>{post.tag}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg md:text-xl mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base line-clamp-2 leading-relaxed">{post.content}</p>

                  <div className="flex items-center gap-4 mt-4">
                    <div className={`glass-tag text-xs flex items-center gap-1 border ${post.tickerDirection === "up" ? "bg-success/15 text-success border-success/20" : "bg-destructive/15 text-destructive border-destructive/20"}`}>
                      {post.tickerDirection === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      ${post.ticker} {post.tickerChange}
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-accent transition-colors text-sm">
                        <Heart className="h-4 w-4" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors text-sm">
                        <MessageCircle className="h-4 w-4" /> {post.comments}
                      </button>
                      <button className="hover:text-foreground transition-colors hidden sm:block">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="hover:text-foreground transition-colors hidden sm:block">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="glass-btn-secondary">Load More Posts</button>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
