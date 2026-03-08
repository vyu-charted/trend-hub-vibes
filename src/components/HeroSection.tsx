import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "USERS_ONLINE", value: "12,847", icon: Users },
    { label: "THREADS", value: "4,200+", icon: MessageSquare },
    { label: "LIVE_FEEDS", value: "3,100", icon: TrendingUp },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Matrix rain glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 py-24 md:py-36 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="section-label mb-6 block">[ SYSTEM::FINPULSE ]</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
              <span className="text-muted-foreground">$</span> WHERE_MARKETS
              <span className="text-primary"> == </span>
              <span className="cursor-blink">MINDS</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
              // A curated network of 12,847 traders and investors sharing
              <br />// real-time analysis, signals, and financial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="luxury-btn flex items-center gap-3">
                ./join --now <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button className="luxury-btn-outline flex items-center gap-3">
                cat README.md
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 md:mt-28"
        >
          <div className="gold-line mb-10" />
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1" style={{ textShadow: "0 0 12px hsl(120 100% 50% / 0.3)" }}>
                  {stat.value}
                </div>
                <div className="dateline text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="gold-line mt-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
