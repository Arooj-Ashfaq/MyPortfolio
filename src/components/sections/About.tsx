import { ArrowRight, Code2, Palette, Rocket, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    text: "React, TypeScript, Node.js and PostgreSQL — built and shipped end to end.",
    tone: "text-primary border-primary/40",
  },
  {
    icon: Palette,
    title: "Design Sensibility",
    text: "Clear hierarchy and consistent interfaces, shaped by a graphic design background.",
    tone: "text-gold border-gold/40",
  },
  {
    icon: ShieldCheck,
    title: "Security Mindset",
    text: "Hands-on practice with Kali Linux, network security and web application audits.",
    tone: "text-primary border-primary/40",
  },
];

const stats = [
  { value: "2+", label: "Certifications" },
  { value: "10+", label: "Projects" },
  { value: "3", label: "Disciplines" },
  { value: "2", label: "GitHub Profiles" },
];

const currently = [
  "Building full-stack products with React, TypeScript, NestJS and PostgreSQL.",
  "Deepening cybersecurity skills through Kali Linux labs and web app security audits.",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering secure, well-crafted web products"
          subtitle="Certified Full Stack Developer with a design eye and a growing security focus."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal variant="left">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m <span className="font-semibold text-foreground">Arooj Ashfaq</span>, a
              <span className="text-primary"> Certified Full Stack Web Developer</span> who designs and
              builds complete web applications — from the interface and API to the database and
              deployment. I work with React and TypeScript on the front end, and Node.js, NestJS and
              Python on the back end, backed by PostgreSQL and MongoDB.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A graphic design background shapes how I approach every interface: clear structure,
              consistent systems and attention to detail. Alongside development, I&apos;m building
              hands-on <span className="text-gold">cybersecurity</span> skills — network security, web
              application auditing and cryptography fundamentals — so the products I ship are secure
              by design.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="hover-lift rounded-2xl border border-border bg-card/60 p-5"
                >
                  <span className={`mb-3 grid h-10 w-10 place-items-center rounded-xl border ${p.tone}`}>
                    <p.icon size={20} />
                  </span>
                  <h3 className="font-display text-sm font-bold">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:[box-shadow:var(--shadow-glow)]"
              >
                View my work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="hover-lift rounded-2xl border border-border bg-card/60 p-6 text-center"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <p className="font-display text-3xl font-extrabold text-gradient">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gold/30 bg-card/60 p-6">
              <p className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <Rocket size={14} />
                Currently
              </p>
              <ul className="space-y-3">
                {currently.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
