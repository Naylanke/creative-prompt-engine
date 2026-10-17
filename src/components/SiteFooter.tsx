import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { navLinks } from "./SiteHeader";
import { site, mailtoUrl, whatsappUrl, defaultMessage } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t bg-navy/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Practical IT assistance, troubleshooting and debugging. Remote support worldwide.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="eyebrow mb-3">Pages</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-muted-foreground hover:text-foreground">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li><a className="text-muted-foreground hover:text-foreground" href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener noreferrer">WhatsApp: {site.whatsappDisplay}</a></li>
            <li><a className="break-all text-muted-foreground hover:text-foreground" href={mailtoUrl()}>{site.email}</a></li>
            {site.github && <li><a className="text-muted-foreground hover:text-foreground" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground">
          <p>Privacy: enquiry details you share are used only to respond to your request and are never sold or published.</p>
          <p className="mt-1">© {new Date().getFullYear()} NEXRON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
