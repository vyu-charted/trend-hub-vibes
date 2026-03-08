import { TrendingUp } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background rounded-t-3xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 font-heading font-bold text-xl mb-4">
              <div className="bg-primary rounded-lg p-2">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              FinPulse
            </div>
            <p className="text-background/60 max-w-sm leading-relaxed">
              A welcoming financial community where traders and investors share insights, learn together, and build lasting wealth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Community</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Feed</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discussions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Members</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/15 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-background/40 text-sm">© 2026 FinPulse. Not financial advice.</span>
          <button className="soft-btn text-sm py-2">Join Free</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
