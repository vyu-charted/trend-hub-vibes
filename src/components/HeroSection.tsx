import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { label: "Readers", value: "12,847", icon: Users },
    { label: "Discussions", value: "4,200+", icon: MessageSquare },
    { label: "Online Now", value: "3,100", icon: TrendingUp },
  ];

  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <hr className="rule-thick mb-8" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Lead story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <span className="section-label mb-4 block">Breaking</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Financial Network,{" "}
              <em className="font-normal">Reimagined.</em>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed drop-cap">
              Join a community of 12,847 traders and investors sharing real-time market analysis, 
              trading signals, and financial intelligence. The smartest conversation in finance 
              happens here — every single day.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="editorial-btn flex items-center gap-2">
                Subscribe Free <ArrowRight className="h-4 w-4" />
              </button>
              <button className="editorial-btn-outline flex items-center gap-2">
                Browse Feed
              </button>
            </div>
          </motion.div>

          {/* Sidebar stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-l border-border pl-6 md:pl-8 space-y-6"
          >
            <span className="section-label block">By the Numbers</span>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="pb-5 border-b border-border last:border-b-0"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold mb-1">{stat.value}</div>
                <div className="dateline">{stat.label}</div>
              </motion.div>
            ))}

            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="dateline text-success">847 readers online</span>
            </div>
          </motion.div>
        </div>

        <hr className="rule-thick mt-12" />
      </div>
    </section>
  );
};

export default HeroSection;
