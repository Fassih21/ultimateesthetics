import { Link } from "@tanstack/react-router";
import { clinic, whatsappLink } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-lg">{clinic.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {clinic.specialty}. Serving Rawalpindi and Islamabad since {clinic.established}.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/results" className="hover:text-foreground">Results</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
            <li><Link to="/sitemap" className="hover:text-foreground">Sitemap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Visit</h4>
          <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground">
            {clinic.address.line1}<br />
            {clinic.address.line2}<br />
            {clinic.address.city} {clinic.address.postal}<br />
            {clinic.address.country}
          </address>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${clinic.phone}`} className="hover:text-foreground">{clinic.phone}</a></li>
            <li>
              <a href={whatsappLink("Hello, I would like to know more about your services.")} target="_blank" rel="noreferrer" className="hover:text-foreground">
                WhatsApp us
              </a>
            </li>
            <li><Link to="/booking" className="hover:text-foreground">Request a consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>Rated {clinic.rating.score.toFixed(1)} / 5 across {clinic.rating.count} {clinic.rating.source} reviews.</p>
        </div>
      </div>
    </footer>
  );
}
