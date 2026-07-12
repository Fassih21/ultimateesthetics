import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { clinic } from "@/lib/clinic";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Hours | Ultimate Esthetics Rawalpindi" },
      {
        name: "description",
        content:
          "Find Ultimate Esthetics at Al-Ain Arcade, Fazal Town, Old Airport Road, Rawalpindi. Opening hours, contact details and directions.",
      },
    ],
  }),
  component: Location,
});

function Location() {
  return (
    <div>
      <PageHeader
        eyebrow="Visit Us"
        title="Location & Hours"
        intro="We are located on Old Airport Road, Rawalpindi — easy to reach from both Islamabad and Rawalpindi."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl">Address</h2>
            <address className="mt-3 not-italic text-base leading-relaxed text-muted-foreground">
              {clinic.address.line1}<br />
              {clinic.address.line2}<br />
              {clinic.address.city} {clinic.address.postal}<br />
              {clinic.address.country}
            </address>

            <h3 className="mt-8 font-serif text-xl">Opening hours</h3>
            <ul className="mt-3 divide-y divide-border rounded-md border border-border">
              {clinic.hours.map((h) => (
                <li key={h.day} className="flex justify-between px-4 py-3 text-sm">
                  <span className="text-foreground">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-serif text-xl">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Phone / WhatsApp: <a href={`tel:${clinic.phone}`} className="text-foreground hover:underline">{clinic.phone}</a></li>
              <li>Email: <a href={`mailto:${clinic.email}`} className="text-foreground hover:underline">{clinic.email}</a></li>
            </ul>

            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full border border-foreground/70 px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-md border border-border">
            <iframe
              title="Ultimate Esthetics location"
              src={clinic.mapsEmbed}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
