

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { socials } from "../data/socials";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#service" },
  { label: "About", to: "/about" },
  // { label: "Pricing", to: "/#pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const closeMenu = () => setOpen(false);

  // Highlight the link that matches the current URL
  const isActive = (to) => pathname + hash === to;

  // While the mobile menu is open: Escape closes it and the page can't scroll
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4 text-white">
      <div className="mx-auto max-w-7xl rounded-xl bg-black/85 shadow-lg backdrop-blur">
        <div className="flex items-center justify-between px-5 py-3 md:px-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-wider md:text-2xl"
          >
            JOJI FITNESS
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`transition hover:text-lime-400 ${
                  isActive(link.to) ? "text-lime-400" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop button -> WhatsApp */}
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded bg-white px-5 py-3 font-semibold text-black transition hover:bg-lime-400 md:block"
          >
            Contact Me
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="px-5 pb-5 md:hidden">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={closeMenu}
                  className={`border-t border-white/10 py-4 text-lg ${
                    isActive(link.to) ? "text-lime-400" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 block rounded bg-white px-5 py-3 text-center font-semibold text-black transition hover:bg-lime-400"
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;