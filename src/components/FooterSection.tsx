import { TrendingUp } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-heading font-bold text-xl mb-4">
              <div className="bg-primary border-2 border-background p-1.5">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              FINPULSE
            </div>
            <p className="text-background/60 max-w-sm">
              The raw, unfiltered financial community where money talks and ideas flow. Join thousands of traders, investors, and finance enthusiasts.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Feed</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discussions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Members</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-background/40 text-sm font-heading">© 2026 FINPULSE. NOT FINANCIAL ADVICE.</span>
          <button className="brutal-btn text-sm py-2">JOIN NOW — IT'S FREE</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
