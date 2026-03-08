import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, Zap } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "Active Members", value: "12,847", icon: Users, glow: "shadow-[0_0_30px_hsl(250_85%_68%/0.2)]" },
    { label: "Discussions", value: "4,200+", icon: MessageSquare, glow: "shadow-[0_0_30px_hsl(200_80%_60%/0.2)]" },
    { label: "Daily Active", value: "3,100", icon: Zap, glow: "shadow-[0_0_30px_hsl(320_70%_65%/0.2)]" },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-hero" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 py-32 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-tag bg-primary/15 text-primary border border-primary/20 font-semibold mb-6">
              🚀 Now open for everyone
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Your financial
              <br />
              community,{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                reimagined.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Join thousands of traders and investors sharing insights, debating markets, and growing wealth together.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="glass-btn flex items-center gap-2">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </button>
              <button className="glass-btn-secondary flex items-center gap-2">
                Explore Feed
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className={`glass-card-static p-5 flex items-center justify-between ${stat.glow}`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-3 border border-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-muted-foreground">{stat.label}</span>
                </div>
                <span className="font-heading text-2xl md:text-3xl font-bold">{stat.value}</span>
              </motion.div>
            ))}

            {/* Live indicator */}
            <div className="glass-card-static bg-gradient-to-r from-primary/10 to-secondary/10 p-4 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
              </span>
              <span className="text-sm font-medium">847 members online now</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
