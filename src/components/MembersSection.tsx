import { motion } from "framer-motion";

const members = [
  { name: "alex_trades", role: "Senior Analyst", streak: 42, posts: 1204, rank: 1 },
  { name: "defi_queen", role: "Crypto Editor", streak: 38, posts: 987, rank: 2 },
  { name: "macro_mike", role: "Macro Strategist", streak: 55, posts: 2341, rank: 3 },
  { name: "theta_gang", role: "Options Desk", streak: 29, posts: 765, rank: 4 },
  { name: "value_hunter", role: "Fundamentals", streak: 61, posts: 1876, rank: 5 },
  { name: "chart_whiz", role: "Technical Analyst", streak: 33, posts: 890, rank: 6 },
];

const MembersSection = () => {
  return (
    <section id="members" className="relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            <span className="text-muted-foreground">who</span> --leaderboard
          </h2>
          <span className="section-label">TOP 6</span>
        </div>

        <div className="gold-line-left mb-10" />

        {/* Table header */}
        <div className="font-heading text-xs text-primary/60 uppercase tracking-wider py-2 border-b border-primary/20 grid grid-cols-12 gap-4">
          <span className="col-span-1">#</span>
          <span className="col-span-3">USER</span>
          <span className="col-span-3">ROLE</span>
          <span className="col-span-2 text-right">STREAK</span>
          <span className="col-span-3 text-right">POSTS</span>
        </div>

        {members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="font-heading text-sm py-3 border-b border-border grid grid-cols-12 gap-4 items-center group hover:bg-secondary/20 transition-colors duration-200 px-1"
          >
            <span className="col-span-1 text-primary/40 group-hover:text-primary transition-colors">{String(member.rank).padStart(2, "0")}</span>
            <span className="col-span-3 text-foreground group-hover:text-primary transition-colors">@{member.name}</span>
            <span className="col-span-3 text-muted-foreground text-xs">{member.role}</span>
            <span className="col-span-2 text-right text-foreground">{member.streak}d</span>
            <span className="col-span-3 text-right text-foreground">{member.posts.toLocaleString()}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MembersSection;
