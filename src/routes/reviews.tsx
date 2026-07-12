import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { clinic, reviews } from "@/lib/clinic";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Ultimate Esthetics Rawalpindi" },
      {
        name: "description",
        content:
          "Patient reviews of Ultimate Esthetics, Rawalpindi — rated 5.0 across 172 Google reviews.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <div>
      <PageHeader
        eyebrow="Patient Voices"
        title={`${clinic.rating.score.toFixed(1)} · ${clinic.rating.count} reviews`}
        intro="A selection of reviews from patients treated at Ultimate Esthetics."
      />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="grid gap-6">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-md border border-border bg-card p-8">
              <p className="text-[color:var(--gold)]">
                {"★".repeat(r.rating)}
                <span className="text-border">{"★".repeat(5 - r.rating)}</span>
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground">"{r.text}"</p>
              <footer className="mt-5 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-foreground">{r.name}</span>
                <span>{r.date}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Reviews summarised from public Google listings. Reviews on this page are not fetched via any third-party embed.
        </p>
      </section>
    </div>
  );
}
