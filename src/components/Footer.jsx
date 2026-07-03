import { Leaf } from "lucide-react";

const SOCIALS = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Website" },
  { href: "#", label: "Twitter" },
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-gold/10 bg-espresso">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60">
              <Leaf className="h-4 w-4 text-gold-light" strokeWidth={1.5} />
            </span>
            <span className="font-display text-2xl text-ivory">
              Spice <span className="gold-text">Garden</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-cream/50 font-light leading-relaxed max-w-xs">
            South Indian tradition and Chinese flavor, brought together on
            one golden table.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 text-cream/60 transition-all hover:border-gold hover:text-gold-light"
              >
                  <span className="text-xs font-medium">{s.label.slice(0,2).toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold-light mb-4">Explore</h4>
          <ul className="space-y-3 text-sm text-cream/60 font-light">
            {[
              ["Home", "#home"],
              ["Menu", "#menu"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  className="hover:text-gold-light transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold-light mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/60 font-light">
            <li>+91 12345 67890</li>
            <li>hello@spicegarden.in</li>
            <li>24, Lakeview Avenue, RA Puram, Chennai</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold-light mb-4">Hours</h4>
          <ul className="space-y-3 text-sm text-cream/60 font-light">
            <li>Mon – Fri: 11:30 AM – 10:30 PM</li>
            <li>Sat – Sun: 11:00 AM – 11:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6">
        <p className="text-center text-xs text-cream/30 tracking-wide">
          © {new Date().getFullYear()} Spice Garden. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
