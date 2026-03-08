import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Feed", "Discussions", "Members", "Events"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="cyber-card-static px-4 py-3 flex items-center justify-between bg-card/90 backdrop-blur-lg">
        <a href="/" className="flex items-center gap-2.5 font-heading font-bold text-sm tracking-widest">
          <div className="bg-primary rounded-sm p-2 shadow-[0_0_15px_hsl(170_100%_50%/0.4)]">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-primary">FINPULSE</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-heading font-medium px-4 py-2 rounded-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all uppercase tracking-wider"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="cyber-btn-secondary text-xs py-2 px-4">Log In</button>
          <button className="cyber-btn text-xs py-2 px-4">Jack In</button>
        </div>

        <button className="md:hidden rounded-sm p-2 hover:bg-primary/10 transition-colors text-primary" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden cyber-card-static mt-2 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-heading font-medium py-2.5 px-3 rounded-sm hover:bg-primary/10 hover:text-primary transition-colors uppercase tracking-wider">
                  {link}
                </a>
              ))}
              <div className="flex gap-2 mt-3">
                <button className="cyber-btn-secondary text-xs py-2 px-4 flex-1">Log In</button>
                <button className="cyber-btn text-xs py-2 px-4 flex-1">Jack In</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
