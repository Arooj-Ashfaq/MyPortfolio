import { ArrowRight, Code2, Palette, Rocket, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    text: "React, TypeScript, Node.js and PostgreSQL — applications built and shipped end to end, from interface to deployment.",
  },
  {
    icon: Palette,
    title: "Design Sensibility",
    text: "Clear hierarchy and consistent interfaces, shaped by a graphic design background and attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Security Mindset",
    text: "Hands-on practice with Kali Linux, network security and web application audits to build secure by design.",
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

        <div className="grid items-stretch gap-10 lg:grid-cols-[1.35fr_1fr]">
          {/* Story */}
          <Reveal variant="left" className="flex flex-col">
            <p
              className="text-justify text-base leading-8 text-muted-foreground sm:text-[17px] [hyphens:auto]"
              lang="en"
            >
              I&apos;m <span className="font-semibold text-foreground">Arooj Ashfaq</span>, a
              <span className="font-medium text-primary"> Certified Full Stack Web Developer</span> who
              designs and builds complete web applications — from the interface and API to the
              database and deployment. I work with React and TypeScript on the front end, and
              Node.js, NestJS and Python on the back end, backed by PostgreSQL and MongoDB.
            </p>
            <p
              className="mt-5 text-justify text-base leading-8 text-muted-foreground sm:text-[17px] [hyphens:auto]"
              lang="en"
            >
              A graphic design background shapes how I approach every interface: clear structure,
              consistent systems and attention to detail. Alongside development, I&apos;m building
              hands-on <span className="font-medium text-primary">cybersecurity</span> skills —
              network security, web application auditing and cryptography fundamentals — so the
              products I ship are secure by design.
            </p>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:[box-shadow:var(--shadow-glow)]"
              >
                View my work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          {/* At a glance */}
          <Reveal variant="right" className="flex">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60">
              <dl className="grid grid-cols-2">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={[
                      "px-6 py-6 text-center",
                      i < 2 ? "border-b border-border" : "",
                      i % 2 === 0 ? "border-r border-border" : "",
                    ].join(" ")}
                  >
                    <dd className="font-display text-3xl font-extrabold text-gradient">{s.value}</dd>
                    <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="flex-1 border-t border-border p-6">
                <p className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <Rocket size={14} />
                  Currently
                </p>
                <ul className="space-y-3">
                  {currently.map((c) => (
                    <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100} className="h-full">
              <div className="hover-lift h-full rounded-2xl border border-border bg-card/60 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/40 bg-primary/5 text-primary">
                  <p.icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
