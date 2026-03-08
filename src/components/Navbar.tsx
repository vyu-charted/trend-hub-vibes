import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Feed", "Discussions", "Members", "Events"];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="font-heading text-lg md:text-xl font-bold text-primary flex items-center gap-2" style={{ textShadow: "0 0 10px hsl(120 100% 50% / 0.4)" }}>
            <Terminal className="h-4 w-4" />
            fin<span className="text-foreground">pulse</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200 font-heading"
              >
                /{link.toLowerCase()}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="luxury-btn-outline text-xs py-2 px-4">ssh login</button>
            <button className="luxury-btn text-xs py-2 px-4">./join</button>
          </div>

          <button className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
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
            <div className="container mx-auto px-4 py-4 flex flex-col gap-0">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-widest py-3 px-2 text-muted-foreground hover:text-primary transition-colors font-heading terminal-prompt">
                  {link.toLowerCase()}
                </a>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <button className="luxury-btn-outline text-xs py-2 px-4 flex-1">ssh login</button>
                <button className="luxury-btn text-xs py-2 px-4 flex-1">./join</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
