import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { clinic, services, whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | Ultimate Esthetics" },
      {
        name: "description",
        content:
          "Request a hair transplant or aesthetic consultation at Ultimate Esthetics, Rawalpindi. Direct WhatsApp booking and payment details.",
      },
    ],
  }),
  component: Booking,
});

function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0].title);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const message = useMemo(() => {
    return [
      `Hello ${clinic.name},`,
      ``,
      `I would like to request a consultation.`,
      `Name: ${name || "—"}`,
      `Contact: ${phone || "—"}`,
      `Service of interest: ${service}`,
      `Preferred date: ${date || "—"}`,
      notes ? `Notes: ${notes}` : "",
      ``,
      `Thank you.`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [name, phone, service, date, notes]);

  return (
    <div>
      <PageHeader
        eyebrow="Book a Consultation"
        title="Request an appointment"
        intro="Fill in your details and continue directly on WhatsApp. Our team will confirm your slot and share what to expect on the day."
      />

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-16 lg:grid-cols-[3fr_2fr]">
        <form
          className="rounded-md border border-border bg-card p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappLink(message), "_blank", "noopener");
          }}
        >
          <div className="grid gap-5">
            <Field label="Full name" required>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
              />
            </Field>
            <Field label="Phone / WhatsApp" required>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+92 3XX XXXXXXX"
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
              />
            </Field>
            <Field label="Service of interest">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
              >
                {services.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
                <option>General consultation</option>
              </select>
            </Field>
            <Field label="Preferred date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
              />
            </Field>
            <Field label="Notes (optional)">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
              />
            </Field>

            <button
              type="submit"
              className="mt-2 rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-widest text-background transition hover:bg-foreground/85"
            >
              Send on WhatsApp
            </button>
            <p className="text-xs text-muted-foreground">
              Submitting opens WhatsApp with your details pre-filled. No data is stored on this website.
            </p>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-md border border-border bg-secondary/40 p-6">
            <h3 className="font-serif text-lg">Direct contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Phone: <a href={`tel:${clinic.phone}`} className="text-foreground hover:underline">{clinic.phone}</a></li>
              <li>
                <a
                  href={whatsappLink("Hello, I would like to book a consultation.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:underline"
                >
                  Message on WhatsApp
                </a>
              </li>
              <li>Email: <a href={`mailto:${clinic.email}`} className="text-foreground hover:underline">{clinic.email}</a></li>
            </ul>
          </div>

          <div className="rounded-md border border-border p-6">
            <h3 className="font-serif text-lg">Payment options</h3>
            <p className="mt-2 text-xs text-muted-foreground">Advance deposit to confirm procedure slots.</p>

            <div className="mt-4 rounded-md border border-border bg-secondary/30 p-4">
              <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{clinic.payment.easypaisa.title}</p>
              <p className="mt-2 text-sm">Account: <span className="font-medium">{clinic.payment.easypaisa.account}</span></p>
              <p className="text-sm">Name: {clinic.payment.easypaisa.name}</p>
            </div>

            <div className="mt-3 rounded-md border border-border bg-secondary/30 p-4">
              <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{clinic.payment.bank.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{clinic.payment.bank.account}</p>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Please share the payment receipt via WhatsApp to confirm your appointment.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-[color:var(--gold)]"> *</span>}
      </span>
      {children}
    </label>
  );
}
