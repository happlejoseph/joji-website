

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { socials, business } from "../data/socials";

const pages = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#service" },
  { label: "About", to: "/#about" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "FAQ", to: "/#faq" },
];

const socialLinks = [
  { label: "WhatsApp", href: socials.whatsapp },
  { label: "Instagram", href: socials.instagram },
  { label: "Facebook", href: socials.facebook },
];

const linkClass = "transition hover:text-lime-400";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] px-6 py-16 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 lg:flex-row">
        {/* Left: contact, brand, copyright */}
        <div>
          <address className="not-italic leading-relaxed">
            <a href={`tel:${business.phone}`} className={linkClass}>
              {business.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${business.email}`} className={linkClass}>
              {business.email}
            </a>
            <p className="mt-1 text-gray-400">{business.address}</p>
          </address>

          <Link
            to="/"
            className="mt-4 block text-[10vw] font-bold uppercase leading-none tracking-tight sm:text-7xl xl:text-8xl"
          >
            {business.name}
          </Link>

          <p className="mt-6 max-w-md text-gray-400">{business.tagline}</p>

          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>

        {/* Right: link columns */}
        <div className="flex gap-16 lg:gap-20">
          <nav aria-label="Footer pages">
            <p className="mb-3 text-sm text-gray-400">Pages</p>
            <ul className="flex flex-col gap-2">
              {pages.map((page) => (
                <li key={page.label}>
                  <Link to={page.to} className={linkClass}>
                    {page.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Social media">
            <p className="mb-3 text-sm text-gray-400">Socials</p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 ${linkClass}`}
                  >
                    {item.label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;