import { TrendingUp } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 font-heading font-bold text-xl mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-2">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              FinPulse
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              A welcoming financial community where traders and investors share insights, learn together, and build lasting wealth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Community</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Feed</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discussions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Members</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-foreground/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-foreground text-sm">© 2026 FinPulse. Not financial advice.</span>
          <button className="glass-btn text-sm py-2">Join Free</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
