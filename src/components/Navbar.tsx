import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Feed", "Discussions", "Members", "Events"];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top masthead */}
        <div className="flex items-center justify-between py-3">
          <a href="/" className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            FinPulse
          </a>
          <div className="hidden md:flex items-center gap-2">
            <span className="dateline">Est. 2026</span>
            <span className="text-muted-foreground mx-2">·</span>
            <span className="dateline">Your Daily Market Brief</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="editorial-btn-outline text-xs py-2 px-4">Log In</button>
            <button className="editorial-btn text-xs py-2 px-4">Subscribe</button>
          </div>
          <button className="md:hidden p-2 hover:bg-muted transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-1 border-t border-border py-2">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-mono font-medium px-4 py-1.5 text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.15em]"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-mono py-2.5 px-3 hover:bg-muted transition-colors uppercase tracking-[0.15em]">
                  {link}
                </a>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                <button className="editorial-btn-outline text-xs py-2 px-4 flex-1">Log In</button>
                <button className="editorial-btn text-xs py-2 px-4 flex-1">Subscribe</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
