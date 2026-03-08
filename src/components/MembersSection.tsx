import { motion } from "framer-motion";

const members = [
  { name: "Alex Thornton", handle: "alex_trades", role: "Senior Analyst", streak: 42, posts: 1204, rank: 1 },
  { name: "Diana Quinn", handle: "defi_queen", role: "Crypto Editor", streak: 38, posts: 987, rank: 2 },
  { name: "Michael Torres", handle: "macro_mike", role: "Macro Strategist", streak: 55, posts: 2341, rank: 3 },
  { name: "Theta Gang", handle: "theta_gang", role: "Options Desk", streak: 29, posts: 765, rank: 4 },
  { name: "Val Hunter", handle: "value_hunter", role: "Fundamentals", streak: 61, posts: 1876, rank: 5 },
  { name: "Chris Wei", handle: "chart_whiz", role: "Technical Analyst", streak: 33, posts: 890, rank: 6 },
];

const MembersSection = () => {
  return (
    <section id="members" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-light">Members</h2>
          <span className="section-label">Leaderboard</span>
        </div>

        <div className="gold-line-left mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
          {members.map((member, i) => (
            <motion.div
              key={member.handle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-background p-8 group hover:bg-secondary/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-heading text-lg font-light text-foreground">{member.name}</div>
                  <div className="text-xs text-muted-foreground tracking-wide mt-0.5">@{member.handle}</div>
                  <div className="byline mt-1">{member.role}</div>
                </div>
                <span className="font-heading text-4xl font-light text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  {String(member.rank).padStart(2, "0")}
                </span>
              </div>

              <div className="flex gap-6 pt-5 border-t border-border">
                <div>
                  <div className="text-sm font-medium text-foreground">{member.streak} days</div>
                  <div className="dateline text-xs">Streak</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{member.posts.toLocaleString()}</div>
                  <div className="dateline text-xs">Posts</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
