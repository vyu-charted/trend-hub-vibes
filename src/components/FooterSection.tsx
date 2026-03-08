import { Terminal } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-heading text-lg font-bold mb-4 flex items-center gap-2 text-primary" style={{ textShadow: "0 0 10px hsl(120 100% 50% / 0.3)" }}>
              <Terminal className="h-4 w-4" /> finpulse
            </h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-xs font-heading">
              // A curated financial network where traders
              <br />// and investors share analysis, debate markets,
              <br />// and build conviction — together.
            </p>
          </div>
          <div>
            <h4 className="section-label mb-5">./sections</h4>
            <ul className="space-y-2 text-muted-foreground text-xs font-heading">
              <li><a href="#" className="hover:text-primary transition-colors duration-200 terminal-prompt">feed</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200 terminal-prompt">discussions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200 terminal-prompt">members</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200 terminal-prompt">events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="section-label mb-5">./legal</h4>
            <ul className="space-y-2 text-muted-foreground text-xs font-heading">
              <li><a href="#" className="hover:text-primary transition-colors duration-200 terminal-prompt">terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200 terminal-prompt">privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200 terminal-prompt">disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="gold-line my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-foreground text-xs font-heading">© 2026 finpulse · NOT_FINANCIAL_ADVICE</span>
          <button className="luxury-btn text-xs py-2">./join --now</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
