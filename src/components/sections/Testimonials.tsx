import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/portfolio-data";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say about my projects"
          subtitle="Feedback from the people I've built and collaborated with."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={`${t.project}-${i}`} delay={i * 100}>
              <figure className="hover-lift relative flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6">
                {t.placeholder && (
                  <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                    Sample
                  </span>
                )}
                <Quote size={28} className="text-gold" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>

                <span className="mt-5 inline-block self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {t.project}
                </span>

                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-background/50 font-display text-sm font-bold text-primary">
                    {initials(t.name)}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
