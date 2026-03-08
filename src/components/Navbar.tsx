import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Feed", "Discussions", "Members", "Events"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="organic-card-static px-4 py-3 flex items-center justify-between bg-card/90 backdrop-blur-lg">
        <a href="/" className="flex items-center gap-2.5 font-heading font-bold text-lg">
          <div className="bg-primary rounded-2xl p-2">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="tracking-tight">FinPulse</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="organic-btn-secondary text-sm py-2 px-4">Log In</button>
          <button className="organic-btn text-sm py-2 px-4">Join Free</button>
        </div>

        <button className="md:hidden rounded-2xl p-2 hover:bg-primary/5 transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden organic-card-static mt-2 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium py-2.5 px-3 rounded-2xl hover:bg-primary/5 transition-colors">
                  {link}
                </a>
              ))}
              <div className="flex gap-2 mt-3">
                <button className="organic-btn-secondary text-sm py-2 px-4 flex-1">Log In</button>
                <button className="organic-btn text-sm py-2 px-4 flex-1">Join Free</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
