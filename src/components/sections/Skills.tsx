import { BadgeCheck, Code2, Globe, Network, ShieldCheck, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Reveal } from "@/components/Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { PROFICIENCY, SKILL_GROUPS, type Bar, type Proficiency } from "@/lib/portfolio-data";

type Glyph = { icon: IconType | LucideIcon; color?: string };

/** Brand colours; entries without a colour inherit the current text colour. */
const GLYPHS: Record<string, Glyph> = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  Vite: { icon: SiVite, color: "#8B7CFF" },
  Python: { icon: SiPython, color: "#3776AB" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4F7FD0" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "REST APIs": { icon: Globe, color: "#22B8CF" },
  C: { icon: SiC, color: "#A8B9CC" },
  "C++": { icon: SiCplusplus, color: "#3B8BD6" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Cybersecurity: { icon: ShieldCheck, color: "#4F9CF9" },
  Networking: { icon: Network, color: "#6EA8FE" },
};

const CARD_ICONS: Record<string, LucideIcon> = { fullstack: Code2, cyber: ShieldCheck };

/** Progress bar that fills when scrolled into view. */
function ProgressBar({ bar, delay }: { bar: Bar; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{bar.name}</span>
        <span className="font-semibold text-primary">{bar.level}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-label={bar.name}
        aria-valuenow={bar.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
          style={{
            width: visible ? `${bar.level}%` : "0%",
            transitionDelay: `${delay}ms`,
            boxShadow: "0 0 12px color-mix(in oklab, var(--primary) 60%, transparent)",
          }}
        />
      </div>
    </div>
  );
}

function ProficiencyCard({ card, index }: { card: Proficiency; index: number }) {
  const Icon = CARD_ICONS[card.key] ?? Code2;
  return (
    <Reveal delay={index * 120}>
      <article className="hover-lift flex h-full flex-col rounded-3xl border border-border bg-card/60 p-7 hover:border-primary/50">
        <div className="mb-5 flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/40 text-primary">
            <Icon size={24} />
          </span>
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {card.status}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold">{card.title}</h3>
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          <BadgeCheck size={16} />
          {card.badge}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
        <div className="mt-6 space-y-4">
          {card.bars.map((bar, i) => (
            <ProgressBar key={bar.name} bar={bar} delay={i * 120} />
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 aurora opacity-20" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="mb-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Skills
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Tools I work with <span className="text-primary">every day.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:ml-auto">
              A curated set of technologies I&apos;ve worked with across real projects — from
              pixel-perfect frontends to Python security tooling.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 100}>
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span aria-hidden="true">—</span>
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => {
                  const glyph = GLYPHS[item];
                  const Icon = glyph?.icon;
                  return (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3.5 py-2 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50"
                    >
                      {Icon && <Icon size={16} style={glyph.color ? { color: glyph.color } : undefined} aria-hidden="true" />}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROFICIENCY.map((card, i) => (
            <ProficiencyCard key={card.key} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
