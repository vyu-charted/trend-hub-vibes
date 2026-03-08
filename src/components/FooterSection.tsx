const FooterSection = () => {
  return (
    <footer className="border-t border-border/60">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Fin<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pulse</span>
            </h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              A curated financial network where traders and investors share analysis, 
              debate markets, and build conviction — together.
            </p>
          </div>
          <div>
            <h4 className="section-label mb-5">Sections</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Feed</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Discussions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Members</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="section-label mb-5">Legal</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="gold-line my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted-foreground text-xs tracking-wider">© 2026 FinPulse · Not financial advice.</span>
          <button className="luxury-btn text-xs py-2">Join Now</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
