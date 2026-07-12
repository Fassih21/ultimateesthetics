import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { results } from "@/lib/clinic";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results | Ultimate Esthetics Hair Transplant Rawalpindi" },
      {
        name: "description",
        content:
          "Real hair transplant results from Ultimate Esthetics, Rawalpindi. Photographs from procedures performed at our clinic.",
      },
    ],
  }),
  component: Results,
});

function Results() {
  return (
    <div>
      <PageHeader
        eyebrow="Case Results"
        title="Photographs from our clinic"
        intro="A small selection of recent cases. Individual results vary based on donor area, planning, and post-operative care."
      />
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {results.map((r) => (
            <figure key={r.id} className="overflow-hidden rounded-md border border-border bg-card">
              <img src={r.image} alt={r.title} className="aspect-[3/4] w-full object-cover" />
              <figcaption className="p-6">
                <h3 className="font-serif text-xl">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 rounded-md border border-border bg-secondary/40 p-8 text-center">
          <h2 className="font-serif text-2xl">Want to know if you are a good candidate?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Share a few photos with us and we will assess your donor density and plan a realistic hairline.
          </p>
          <Link
            to="/booking"
            className="mt-6 inline-flex rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-widest text-background hover:bg-foreground/85"
          >
            Start assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
