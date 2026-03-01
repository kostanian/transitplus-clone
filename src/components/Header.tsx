import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Клиенты", href: "#clients" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md" : ""}`}>
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <div className="gradient-gold px-6 py-4 rounded-b-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
            <span className="font-display font-black text-primary text-lg">G</span>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-primary-foreground/70">Международная логистика</p>
            <p className="font-display font-black text-primary-foreground text-lg tracking-wide">GLOBALTRANS</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 bg-secondary hover:bg-dark-surface-hover transition-colors rounded-full px-6 py-3"
          >
            <span className="text-sm font-medium text-foreground hidden sm:block">МЕНЮ</span>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Phone */}
          <div className="hidden lg:flex items-center gap-3 bg-secondary rounded-full px-5 py-3">
            <Phone size={16} className="text-gold" />
            <span className="text-sm font-medium">+7 495 123 45 67</span>
          </div>
        </div>
      </div>

      {/* Mobile/Desktop Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-6 lg:right-10 bg-card border border-border rounded-xl p-6 min-w-[240px] shadow-2xl"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-foreground/80 hover:text-foreground font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
