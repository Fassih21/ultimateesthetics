import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
        {eyebrow && (
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">{title}</h1>
        {intro && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
