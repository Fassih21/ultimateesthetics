import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/clinic";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Ultimate Esthetics — Hair Transplant Rawalpindi" },
      {
        name: "description",
        content:
          "Hair transplant, PRP therapy, beard and eyebrow restoration, and medical skin treatments at Ultimate Esthetics, Rawalpindi.",
      },
      { property: "og:title", content: "Services | Ultimate Esthetics" },
      { property: "og:description", content: "FUE, PRP, restoration and skin care in Rawalpindi." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Services"
        title="Treatments delivered with care"
        intro="Every service at Ultimate Esthetics is built around a personal consultation, a clear plan, and a professional environment."
      />
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-8 md:gap-10">
          {services.map((s) => (
            <article key={s.slug} className="rounded-md border border-border bg-card p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h2 className="font-serif text-2xl md:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.description}</p>
                  <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-[color:var(--gold)]">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-between border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Consultation</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Pricing is discussed after an in-person or WhatsApp consultation, as every case is unique.
                  </p>
                  <Link
                    to="/booking"
                    className="mt-6 inline-flex justify-center rounded-full border border-foreground/70 px-4 py-2 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background"
                  >
                    Request consultation
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
