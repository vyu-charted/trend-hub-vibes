import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, Zap } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "Active Members", value: "12,847", icon: Users },
    { label: "Discussions", value: "4,200+", icon: MessageSquare },
    { label: "Daily Active", value: "3,100", icon: Zap },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="soft-tag bg-primary/10 text-primary font-semibold mb-6">
              🚀 Now open for everyone
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-foreground">
              Your financial
              <br />
              community,{" "}
              <span className="text-primary">simplified.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Join thousands of traders and investors sharing insights, debating markets, and growing wealth together.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="soft-btn flex items-center gap-2">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </button>
              <button className="soft-btn-secondary flex items-center gap-2">
                Explore Feed
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="soft-card-static p-5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-muted-foreground">{stat.label}</span>
                </div>
                <span className="font-heading text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
              </motion.div>
            ))}

            {/* Live indicator */}
            <div className="soft-card-static bg-foreground text-background p-4 flex items-center gap-3 rounded-xl">
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
