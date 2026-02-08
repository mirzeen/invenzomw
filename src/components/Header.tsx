import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Índice", path: "/work" },
    { label: "Info", path: "/about" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between mix-blend-difference">
        <Link to="/" className="font-display text-base text-foreground italic">
          MV
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`label-sm editorial-line pb-1 ${
                location.pathname === item.path ? "text-foreground" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="label-sm editorial-line pb-1">
            Contacto
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-[60] relative flex flex-col gap-1"
          aria-label="Menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4 : 0 }}
            className="block w-5 h-px bg-foreground origin-center"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4 : 0 }}
            className="block w-5 h-px bg-foreground origin-center"
          />
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background z-50 flex flex-col justify-end p-10 pb-20"
          >
            <nav className="space-y-4">
              {[...navItems, { label: "Contacto", path: "/contact" }].map(
                (item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-4xl text-foreground block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
