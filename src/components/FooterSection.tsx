import { Zap } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 font-heading font-bold text-sm tracking-widest mb-4">
              <div className="bg-primary rounded-sm p-2 shadow-[0_0_15px_hsl(170_100%_50%/0.4)]">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-primary">FINPULSE</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              A decentralized financial network where traders and investors share signals, analyze markets, and build wealth across the grid.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 text-primary">Network</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors font-mono">{'>'} Feed</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-mono">{'>'} Threads</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-mono">{'>'} Nodes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-mono">{'>'} Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest mb-4 text-primary">Protocol</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors font-mono">{'>'} Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-mono">{'>'} Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-mono">{'>'} Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-foreground text-sm font-mono">© 2026 FINPULSE NETWORK // Not financial advice.</span>
          <button className="cyber-btn text-xs py-2">Jack In</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
