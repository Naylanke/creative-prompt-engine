import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { mailtoUrl, whatsappUrl, defaultMessage } from "@/config/site";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass sticky top-0 z-40 border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-cyan" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="icon" aria-label="Email NEXRON">
            <a href={mailtoUrl()}><Mail /></a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Chat on WhatsApp">
            <a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener noreferrer"><MessageCircle /></a>
          </Button>
          <Button asChild variant="hero"><Link to="/contact">Get IT Support</Link></Button>
        </div>
        <button
          className="rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "block rounded-md px-3 py-2.5 bg-accent text-cyan" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button asChild variant="glow"><a href={mailtoUrl()}><Mail /> Email</a></Button>
            <Button asChild variant="whatsapp"><a href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button>
          </div>
          <Button asChild variant="hero" className="mt-2 w-full"><Link to="/contact" onClick={() => setOpen(false)}>Get IT Support</Link></Button>
        </nav>
      )}
    </header>
  );
}
