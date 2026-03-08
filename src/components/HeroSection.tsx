import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, Zap } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "Members", value: "12,847", icon: Users },
    { label: "Discussions", value: "4,200+", icon: MessageSquare },
    { label: "Daily Active", value: "3,100", icon: Zap },
  ];

  return (
    <section className="border-b-2 border-foreground">
      {/* Marquee ticker */}
      <div className="bg-foreground text-background overflow-hidden py-2">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="font-heading text-sm tracking-widest whitespace-nowrap px-8">
              ★ STOCKS ★ CRYPTO ★ OPTIONS ★ FOREX ★ MACRO ★ TECHNICAL ANALYSIS ★ FUNDAMENTALS ★ FINTECH ★ DEFI ★ IPO ★ EARNINGS ★ MARKETS ★ PORTFOLIO ★
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="brutal-tag bg-primary mb-6">🔥 NOW OPEN FOR ALL</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              WHERE<br />
              MONEY<br />
              <span className="bg-primary px-2 inline-block mt-1">TALKS.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 font-body">
              The raw, unfiltered financial community. Share alpha, debate markets, build wealth together.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="brutal-btn flex items-center gap-2">
                Join the Community <ArrowRight className="h-4 w-4" />
              </button>
              <button className="brutal-btn-secondary flex items-center gap-2">
                Browse Feed
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="brutal-card-static p-5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary border-2 border-foreground p-3">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="font-heading font-bold uppercase text-sm tracking-wider">{stat.label}</span>
                </div>
                <span className="font-heading text-2xl md:text-3xl font-bold">{stat.value}</span>
              </motion.div>
            ))}

            {/* Live indicator */}
            <div className="brutal-card-static bg-foreground text-background p-4 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              <span className="font-heading text-sm font-bold uppercase tracking-wider">847 members online now</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
