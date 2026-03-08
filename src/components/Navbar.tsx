import { TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Feed", "Discussions", "Members", "Events"];

  return (
    <nav className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2.5 font-heading font-bold text-xl">
          <div className="bg-primary rounded-lg p-2">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="tracking-tight">FinPulse</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="soft-btn-secondary text-sm py-2 px-4">Log In</button>
          <button className="soft-btn text-sm py-2 px-4">Join Free</button>
        </div>

        <button className="md:hidden rounded-lg p-2 hover:bg-muted transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="p-4 flex flex-col gap-1">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-muted transition-colors">
                  {link}
                </a>
              ))}
              <div className="flex gap-2 mt-3">
                <button className="soft-btn-secondary text-sm py-2 px-4 flex-1">Log In</button>
                <button className="soft-btn text-sm py-2 px-4 flex-1">Join Free</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
