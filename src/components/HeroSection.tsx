import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "Members", value: "12,847", icon: Users },
    { label: "Discussions", value: "4,200+", icon: MessageSquare },
    { label: "Live Now", value: "3,100", icon: TrendingUp },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Subtle gold gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-24 md:py-36 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="section-label mb-6 block">The Financial Network</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.05]">
              Where Markets{" "}
              <em className="text-primary font-normal italic">Meet Minds</em>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
              A curated community of 12,847 traders and investors sharing real-time 
              analysis, signals, and financial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="luxury-btn flex items-center gap-3">
                Join Now <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button className="luxury-btn-outline flex items-center gap-3">
                Explore
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
                <div className="text-3xl md:text-4xl font-heading font-light text-foreground mb-1">{stat.value}</div>
                <div className="dateline">{stat.label}</div>
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
