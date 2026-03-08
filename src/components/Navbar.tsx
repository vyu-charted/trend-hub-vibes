import { TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Feed", "Discussions", "Members", "Events"];

  return (
    <nav className="border-b-2 border-foreground bg-card sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-2 font-heading font-bold text-xl">
          <div className="bg-primary border-2 border-foreground p-1.5">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="tracking-tight">FINPULSE</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-heading text-sm font-bold uppercase tracking-wider px-4 py-2 border-2 border-transparent hover:border-foreground hover:bg-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="brutal-btn-secondary text-sm py-2 px-4">Log In</button>
          <button className="brutal-btn text-sm py-2 px-4">Join Now</button>
        </div>

        <button className="md:hidden border-2 border-foreground p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t-2 border-foreground"
          >
            <div className="p-4 flex flex-col gap-2">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="font-heading text-sm font-bold uppercase tracking-wider py-2 border-b border-muted">
                  {link}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <button className="brutal-btn-secondary text-sm py-2 px-4 flex-1">Log In</button>
                <button className="brutal-btn text-sm py-2 px-4 flex-1">Join Now</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
