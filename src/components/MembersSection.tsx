import { motion } from "framer-motion";

const members = [
  { name: "Alex Thornton", handle: "alex_trades", role: "Senior Analyst", streak: 42, posts: 1204, rank: 1 },
  { name: "Diana Quinn", handle: "defi_queen", role: "Crypto Editor", streak: 38, posts: 987, rank: 2 },
  { name: "Michael Torres", handle: "macro_mike", role: "Macro Columnist", streak: 55, posts: 2341, rank: 3 },
  { name: "Theta Gang", handle: "theta_gang", role: "Options Desk", streak: 29, posts: 765, rank: 4 },
  { name: "Val Hunter", handle: "value_hunter", role: "Fundamentals", streak: 61, posts: 1876, rank: 5 },
  { name: "Chris Wei", handle: "chart_whiz", role: "Technical Analyst", streak: 33, posts: 890, rank: 6 },
];

const MembersSection = () => {
  return (
    <section id="members" className="relative">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Contributors</h2>
          <span className="section-label">Leaderboard</span>
        </div>

        <hr className="rule-accent mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {members.map((member, i) => (
            <motion.div
              key={member.handle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-background p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-heading font-bold text-base">{member.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">@{member.handle}</div>
                  <div className="byline mt-1">{member.role}</div>
                </div>
                <span className="font-heading font-bold text-3xl text-muted-foreground/30">
                  {String(member.rank).padStart(2, "0")}
                </span>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <div>
                  <div className="font-mono font-semibold text-sm">{member.streak} days</div>
                  <div className="dateline">Streak</div>
                </div>
                <div>
                  <div className="font-mono font-semibold text-sm">{member.posts.toLocaleString()}</div>
                  <div className="dateline">Articles</div>
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
