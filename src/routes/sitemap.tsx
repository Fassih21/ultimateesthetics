import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

const pages = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/results", label: "Results" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/location", label: "Location & Hours" },
  { to: "/booking", label: "Book a Consultation" },
  { to: "/sitemap", label: "Sitemap" },
];

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap | Ultimate Esthetics" },
      { name: "description", content: "All pages available on the Ultimate Esthetics website." },
    ],
  }),
  component: Sitemap,
});

function Sitemap() {
  return (
    <div>
      <PageHeader eyebrow="Sitemap" title="All pages" />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <ul className="divide-y divide-border rounded-md border border-border">
          {pages.map((p) => (
            <li key={p.to}>
              <Link to={p.to} className="flex items-center justify-between px-5 py-4 text-sm hover:bg-secondary/40">
                <span>{p.label}</span>
                <span className="text-xs text-muted-foreground">{p.to}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
