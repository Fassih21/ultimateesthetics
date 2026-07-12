import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic, services, results, reviews, whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultimate Esthetics | Hair Transplant Clinic Rawalpindi" },
      {
        name: "description",
        content:
          "Trusted hair transplant and aesthetic clinic in Rawalpindi since 2014. FUE, PRP, beard and eyebrow restoration. Book your consultation today.",
      },
    ],
  }),
  component: Home,
});

const navCards = [
  { to: "/services", title: "Our Services", copy: "FUE hair transplant, PRP therapy, restoration and skin care." },
  { to: "/results", title: "Results", copy: "See real outcomes from procedures performed at our clinic." },
  { to: "/gallery", title: "Gallery", copy: "A look inside the clinic, the team, and the environment." },
  { to: "/reviews", title: "Patient Reviews", copy: "What patients say after their treatment with us." },
  { to: "/location", title: "Visit Us", copy: "Directions, hours and contact details for the clinic." },
  { to: "/booking", title: "Book a Consultation", copy: "Send us a WhatsApp message or request a callback." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              Established {clinic.established} · Rawalpindi
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              A calmer, more confident version of you.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              {clinic.name} is a dedicated hair transplant and aesthetic medicine
              clinic in Rawalpindi. For over a decade, we have combined clinical
              precision with a considered, respectful patient experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-widest text-background transition hover:bg-foreground/85"
              >
                Book Consultation
              </Link>
              <a
                href={whatsappLink("Hello, I would like to book a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-foreground/30 px-6 py-3 text-xs uppercase tracking-widest text-foreground transition hover:border-foreground"
              >
                WhatsApp {clinic.phone}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-serif text-2xl text-foreground">{clinic.rating.score.toFixed(1)}</span>
              <span className="text-[color:var(--gold)]">★★★★★</span>
              <span>{clinic.rating.count} Google reviews</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/clinic-1.png"
              alt="Ultimate Esthetics reception and consultation lounge"
              className="aspect-[4/5] w-full rounded-md object-cover shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]"
            />
            <img
              src="/images/logo-wall.png"
              alt="Ultimate Esthetics signature wall"
              className="absolute -bottom-6 -left-6 hidden aspect-square w-40 rounded-md border-8 border-background object-cover md:block"
            />
          </div>
        </div>
      </section>

      {/* Nav cards */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Explore</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Everything you need to know</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {navCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group flex flex-col justify-between rounded-md border border-border bg-card p-7 transition hover:border-foreground/50"
            >
              <div>
                <h3 className="font-serif text-xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.copy}</p>
              </div>
              <span className="mt-8 text-xs uppercase tracking-widest text-[color:var(--gold)] group-hover:text-foreground">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Services</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Focused, thoughtful treatments</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.slug} className="rounded-md bg-background p-7">
                <h3 className="font-serif text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="text-sm underline underline-offset-4">See all services</Link>
          </div>
        </div>
      </section>

      {/* Results teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Recent Work</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">Real results from our clinic</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {results.map((r) => (
            <figure key={r.id} className="overflow-hidden rounded-md border border-border">
              <img src={r.image} alt={r.title} className="aspect-[3/4] w-full object-cover" />
              <figcaption className="p-4 text-sm text-muted-foreground">{r.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/results" className="text-sm underline underline-offset-4">See more results</Link>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Trusted Care</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Rated 5.0 across {clinic.rating.count} reviews</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote key={r.name} className="rounded-md bg-background p-7">
                <p className="text-[color:var(--gold)]">★★★★★</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                <footer className="mt-5 text-xs uppercase tracking-widest text-foreground">{r.name}</footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/reviews" className="text-sm underline underline-offset-4">Read more reviews</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
