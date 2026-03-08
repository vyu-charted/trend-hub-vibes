import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, Zap } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "Active Members", value: "12,847", icon: Users },
    { label: "Discussions", value: "4,200+", icon: MessageSquare },
    { label: "Daily Active", value: "3,100", icon: Zap },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 organic-gradient-hero" />

      {/* Soft decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/6 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 py-32 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="organic-tag bg-primary/10 text-primary font-semibold mb-6">
              🌱 Now open for everyone
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Your financial
              <br />
              community,{" "}
              <span className="text-primary italic">
                naturally.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Join thousands of traders and investors sharing insights, debating markets, and growing wealth together.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="organic-btn flex items-center gap-2">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </button>
              <button className="organic-btn-secondary flex items-center gap-2">
                Explore Feed
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="organic-card-static p-5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-2xl p-3">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-muted-foreground">{stat.label}</span>
                </div>
                <span className="font-heading text-2xl md:text-3xl font-bold">{stat.value}</span>
              </motion.div>
            ))}

            <div className="organic-card-static bg-primary/5 p-4 flex items-center gap-3">
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
