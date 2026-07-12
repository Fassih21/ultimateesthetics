import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { galleryImages } from "@/lib/clinic";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Ultimate Esthetics Clinic Rawalpindi" },
      {
        name: "description",
        content:
          "A look inside Ultimate Esthetics — our consultation lounge, procedure rooms, and moments from patient care.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <div>
      <PageHeader
        eyebrow="Gallery"
        title="Inside the clinic"
        intro="Ultimate Esthetics is designed to feel calm, considered and quietly professional — the environment matters as much as the procedure."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img) => (
            <figure key={img.src} className="mb-4 overflow-hidden rounded-md border border-border break-inside-avoid">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover" />
              <figcaption className="px-4 py-3 text-xs text-muted-foreground">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
