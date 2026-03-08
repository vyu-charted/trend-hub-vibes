import { motion } from "framer-motion";
import { Crown } from "lucide-react";

const members = [
  { name: "alex_trades", avatar: "AT", role: "Top Analyst", streak: 42, posts: 1204, badge: "🏆", gradient: "from-primary to-accent" },
  { name: "defi_queen", avatar: "DQ", role: "Crypto Lead", streak: 38, posts: 987, badge: "👑", gradient: "from-accent to-primary" },
  { name: "macro_mike", avatar: "MM", role: "Macro Guru", streak: 55, posts: 2341, badge: "📊", gradient: "from-secondary to-primary" },
  { name: "theta_gang", avatar: "TG", role: "Options Wizard", streak: 29, posts: 765, badge: "🎯", gradient: "from-warning to-accent" },
  { name: "value_hunter", avatar: "VH", role: "Fundamentals", streak: 61, posts: 1876, badge: "💎", gradient: "from-success to-secondary" },
  { name: "chart_whiz", avatar: "CW", role: "TA Expert", streak: 33, posts: 890, badge: "📈", gradient: "from-primary to-secondary" },
];

const MembersSection = () => {
  return (
    <section id="members" className="bg-muted/50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Top Members
          </h2>
          <div className="flex items-center gap-2 text-primary">
            <Crown className="h-5 w-5" />
            <span className="text-sm font-semibold">Leaderboard</span>
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
              className="soft-card p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`bg-gradient-to-br ${member.gradient} rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground font-semibold text-sm`}>
                    {member.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm flex items-center gap-1 text-foreground">
                      @{member.name} <span className="text-lg">{member.badge}</span>
                    </div>
                    <div className="text-muted-foreground text-xs">{member.role}</div>
                  </div>
                </div>
                <span className="font-heading font-bold text-2xl text-muted/80">#{i + 1}</span>
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-muted rounded-lg p-2.5 text-center">
                  <div className="font-semibold text-sm text-foreground">{member.streak}🔥</div>
                  <div className="text-xs text-muted-foreground">Streak</div>
                </div>
                <div className="flex-1 bg-muted rounded-lg p-2.5 text-center">
                  <div className="font-semibold text-sm text-foreground">{member.posts}</div>
                  <div className="text-xs text-muted-foreground">Posts</div>
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
