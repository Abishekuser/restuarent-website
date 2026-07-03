import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-espresso/90 backdrop-blur-md border-b border-gold/15 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-2 group"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gold/60">
            <Leaf className="h-4 w-4 text-gold-light" strokeWidth={1.5} />
          </span>
          <span className="font-display text-2xl tracking-wide text-ivory">
            Spice <span className="gold-text">Garden</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 font-body text-sm tracking-wide text-cream/90">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
                className="relative py-1 transition-colors hover:text-gold-light group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gold-light transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button onClick={() => handleNav("#contact")} className="btn-primary text-sm py-2.5 px-6">
            Reserve Table
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-espresso/95 border-t border-gold/10"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(l.href);
                    }}
                    className="block py-3 text-cream/90 border-b border-gold/5 tracking-wide"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <button
                  onClick={() => handleNav("#contact")}
                  className="btn-primary w-full text-sm"
                >
                  Reserve Table
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
