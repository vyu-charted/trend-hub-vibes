import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, Zap } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "Active Nodes", value: "12,847", icon: Users, glowClass: "hover:shadow-[0_0_30px_hsl(170_100%_50%/0.3)]" },
    { label: "Threads", value: "4,200+", icon: MessageSquare, glowClass: "hover:shadow-[0_0_30px_hsl(320_100%_60%/0.3)]" },
    { label: "Online Now", value: "3,100", icon: Zap, glowClass: "hover:shadow-[0_0_30px_hsl(55_100%_55%/0.3)]" },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center scanlines">
      <div className="absolute inset-0 cyber-gradient-hero" />
      <div className="absolute inset-0 cyber-grid" />

      {/* Neon blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 py-32 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="cyber-tag bg-primary/15 text-primary border border-primary/30 mb-6">
              ⚡ System Online
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-wider mb-6">
              <span className="text-primary animate-flicker">Financial</span>
              <br />
              <span className="text-foreground">Network</span>{" "}
              <span className="text-secondary">Online.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed font-mono text-sm">
              {'>'} Join the grid. Trade signals, market analysis, and alpha — shared in real-time across 12,847 connected nodes.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="cyber-btn flex items-center gap-2">
                Jack In <ArrowRight className="h-4 w-4" />
              </button>
              <button className="cyber-btn-secondary flex items-center gap-2">
                Scan Feed
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className={`cyber-card-static p-5 flex items-center justify-between transition-shadow ${stat.glowClass}`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 border border-primary/30 rounded-sm p-3">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{stat.label}</span>
                </div>
                <span className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
              </motion.div>
            ))}

            <div className="cyber-card-static p-4 flex items-center gap-3 border-primary/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_hsl(170_100%_50%/0.6)]"></span>
              </span>
              <span className="text-sm font-mono text-primary">847 nodes active</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
