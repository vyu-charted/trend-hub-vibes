import { motion } from "framer-motion";
import { Crown } from "lucide-react";

const members = [
  { name: "alex_trades", avatar: "AT", role: "Top Analyst", streak: 42, posts: 1204, badge: "🏆", rank: "S" },
  { name: "defi_queen", avatar: "DQ", role: "Crypto Lead", streak: 38, posts: 987, badge: "👑", rank: "S" },
  { name: "macro_mike", avatar: "MM", role: "Macro Guru", streak: 55, posts: 2341, badge: "📊", rank: "A" },
  { name: "theta_gang", avatar: "TG", role: "Options Wizard", streak: 29, posts: 765, badge: "🎯", rank: "A" },
  { name: "value_hunter", avatar: "VH", role: "Fundamentals", streak: 61, posts: 1876, badge: "💎", rank: "A" },
  { name: "chart_whiz", avatar: "CW", role: "TA Expert", streak: 33, posts: 890, badge: "📈", rank: "B" },
];

const MembersSection = () => {
  return (
    <section id="members" className="relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider">
            <span className="text-accent">//</span> Top Nodes
          </h2>
          <div className="flex items-center gap-2 text-accent">
            <Crown className="h-5 w-5" />
            <span className="text-xs font-heading font-bold uppercase tracking-wider">Leaderboard</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="cyber-card p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/15 border border-primary/40 rounded-sm w-12 h-12 flex items-center justify-center text-primary font-heading font-bold text-xs">
                    {member.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm flex items-center gap-1 font-mono">
                      <span className="text-primary">@{member.name}</span> <span className="text-lg">{member.badge}</span>
                    </div>
                    <div className="text-muted-foreground text-xs font-mono">{member.role}</div>
                  </div>
                </div>
                <span className={`font-heading font-black text-2xl ${member.rank === "S" ? "text-accent" : member.rank === "A" ? "text-primary" : "text-muted-foreground"}`}>
                  {member.rank}
                </span>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-muted rounded-sm p-2.5 text-center border border-border">
                  <div className="font-bold text-sm font-mono text-accent">{member.streak}🔥</div>
                  <div className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Streak</div>
                </div>
                <div className="flex-1 bg-muted rounded-sm p-2.5 text-center border border-border">
                  <div className="font-bold text-sm font-mono text-primary">{member.posts}</div>
                  <div className="text-xs text-muted-foreground font-heading uppercase tracking-wider">Posts</div>
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
