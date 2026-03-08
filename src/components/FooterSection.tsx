const FooterSection = () => {
  return (
    <footer className="border-t-2 border-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-3">FinPulse</h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              An independent financial publication where traders and investors share analysis, 
              debate markets, and build conviction — together.
            </p>
          </div>
          <div>
            <h4 className="section-label mb-4">Sections</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Feed</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discussions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contributors</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="section-label mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <hr className="rule-thick my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-foreground text-sm font-mono">© 2026 FinPulse · Not financial advice.</span>
          <button className="editorial-btn text-xs py-2">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
