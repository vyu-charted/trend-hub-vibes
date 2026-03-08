import { motion } from "framer-motion";
import { Star } from "lucide-react";

const members = [
  { name: "Alex Thornton", handle: "alex_trades", role: "Senior Analyst", streak: 42, posts: 1204, rank: 1 },
  { name: "Diana Quinn", handle: "defi_queen", role: "Crypto Editor", streak: 38, posts: 987, rank: 2 },
  { name: "Michael Torres", handle: "macro_mike", role: "Macro Strategist", streak: 55, posts: 2341, rank: 3 },
  { name: "Theta Gang", handle: "theta_gang", role: "Options Desk", streak: 29, posts: 765, rank: 4 },
  { name: "Val Hunter", handle: "value_hunter", role: "Fundamentals", streak: 61, posts: 1876, rank: 5 },
  { name: "Chris Wei", handle: "chart_whiz", role: "Technical Analyst", streak: 33, posts: 890, rank: 6 },
];

const pastelAvatars = [
  "bg-primary/15", "bg-secondary/30", "bg-accent/20", "bg-warning/15", "bg-primary/10", "bg-secondary/20",
];

const MembersSection = () => {
  return (
    <section id="members" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Members</h2>
          <span className="section-label">Leaderboard</span>
        </div>

        <div className="gold-line-left mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member, i) => (
            <motion.div
              key={member.handle}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="p-6 rounded-lg bg-card border border-border/60 group hover:shadow-[var(--shadow-float)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full ${pastelAvatars[i]} flex items-center justify-center`}>
                    <span className="font-heading font-bold text-sm text-primary">{member.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-heading text-base font-semibold text-foreground">{member.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">@{member.handle}</div>
                  </div>
                </div>
                {member.rank <= 3 && (
                  <Star className="h-4 w-4 text-warning fill-warning/30" />
                )}
              </div>

              <div className="luxury-tag text-xs mb-5">{member.role}</div>

              <div className="flex gap-6 pt-4 border-t border-border/60">
                <div>
                  <div className="text-sm font-semibold text-foreground">{member.streak} days</div>
                  <div className="dateline text-xs">Streak</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{member.posts.toLocaleString()}</div>
                  <div className="dateline text-xs">Posts</div>
                </div>
                <div className="ml-auto">
                  <div className="font-heading text-2xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    #{member.rank}
                  </div>
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
