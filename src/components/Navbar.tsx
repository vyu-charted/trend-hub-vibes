import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Feed", "Discussions", "Members", "Events"];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          <a href="/" className="font-heading text-2xl md:text-3xl font-light tracking-wide text-foreground">
            Fin<span className="text-primary">Pulse</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="luxury-btn-outline text-xs py-2 px-5">Log In</button>
            <button className="luxury-btn text-xs py-2 px-5">Join</button>
          </div>

          <button className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
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
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-[0.25em] py-3 px-3 text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <button className="luxury-btn-outline text-xs py-2 px-5 flex-1">Log In</button>
                <button className="luxury-btn text-xs py-2 px-5 flex-1">Join</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
