import { motion } from "framer-motion";
import { Crown, Star, TrendingUp, Award } from "lucide-react";

const members = [
  { name: "alex_trades", avatar: "AT", role: "Top Analyst", streak: 42, posts: 1204, badge: "🏆", color: "bg-primary" },
  { name: "defi_queen", avatar: "DQ", role: "Crypto Lead", streak: 38, posts: 987, badge: "👑", color: "bg-accent" },
  { name: "macro_mike", avatar: "MM", role: "Macro Guru", streak: 55, posts: 2341, badge: "📊", color: "bg-secondary" },
  { name: "theta_gang", avatar: "TG", role: "Options Wizard", streak: 29, posts: 765, badge: "🎯", color: "bg-warning" },
  { name: "value_hunter", avatar: "VH", role: "Fundamentals", streak: 61, posts: 1876, badge: "💎", color: "bg-success" },
  { name: "chart_whiz", avatar: "CW", role: "TA Expert", streak: 33, posts: 890, badge: "📈", color: "bg-primary" },
];

const MembersSection = () => {
  return (
    <section id="members" className="border-b-2 border-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            TOP <span className="bg-primary px-2">MEMBERS</span>
          </h2>
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            <span className="font-heading text-sm font-bold uppercase">Leaderboard</span>
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
              className="brutal-card p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${member.color} text-primary-foreground border-2 border-foreground w-12 h-12 flex items-center justify-center font-heading font-bold text-sm`}>
                    {member.avatar}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm flex items-center gap-1">
                      @{member.name} <span className="text-lg">{member.badge}</span>
                    </div>
                    <div className="text-muted-foreground text-xs font-heading">{member.role}</div>
                  </div>
                </div>
                <span className="font-heading font-bold text-2xl text-muted-foreground/30">#{i + 1}</span>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 border-2 border-foreground p-2 text-center">
                  <div className="font-heading font-bold text-sm">{member.streak}🔥</div>
                  <div className="text-xs text-muted-foreground font-heading">STREAK</div>
                </div>
                <div className="flex-1 border-2 border-foreground p-2 text-center">
                  <div className="font-heading font-bold text-sm">{member.posts}</div>
                  <div className="text-xs text-muted-foreground font-heading">POSTS</div>
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
