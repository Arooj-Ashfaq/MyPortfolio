import { BadgeCheck, Code2, Database, Globe, Monitor, Network, ShieldCheck, type LucideIcon } from "lucide-react";
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

const GROUP_ICONS: Record<string, LucideIcon> = {
  Frontend: Monitor,
  "Backend & DB": Database,
  "Systems & Security": ShieldCheck,
};

/** Small section divider: title + hairline. */
function SubHeading({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h3 className="font-display text-lg font-bold">{children}</h3>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}

/** Progress bar that fills when scrolled into view. */
function ProgressBar({ bar, delay }: { bar: Bar; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{bar.name}</span>
        <span className="font-mono text-xs font-semibold tabular-nums text-muted-foreground">{bar.level}%</span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-label={bar.name}
        aria-valuenow={bar.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${bar.level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function ProficiencyCard({ card, index }: { card: Proficiency; index: number }) {
  const Icon = CARD_ICONS[card.key] ?? Code2;
  const twoCols = card.bars.length > 3;
  return (
    <Reveal delay={index * 120} className={twoCols ? "lg:col-span-3" : "lg:col-span-2"}>
      <article className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/5 text-primary">
              <Icon size={22} />
            </span>
            <div>
              <h4 className="font-display text-lg font-bold leading-tight">{card.title}</h4>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                <BadgeCheck size={14} />
                {card.badge}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-background/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {card.status}
          </span>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{card.description}</p>

        <div className="mt-auto border-t border-border pt-6">
          <div className={twoCols ? "grid gap-x-10 gap-y-5 sm:grid-cols-2" : "space-y-5"}>
            {card.bars.map((bar, i) => (
              <ProgressBar key={bar.name} bar={bar} delay={i * 120} />
            ))}
          </div>
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

        <SubHeading>Tech stack</SubHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => {
            const GroupIcon = GROUP_ICONS[group.title] ?? Code2;
            return (
              <Reveal key={group.title} delay={gi * 100} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40">
                  <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                    <h4 className="flex items-center gap-3 font-display text-base font-bold">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/40 bg-primary/5 text-primary">
                        <GroupIcon size={18} />
                      </span>
                      {group.title}
                    </h4>
                    <span className="font-mono text-xs font-semibold text-muted-foreground">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const glyph = GLYPHS[item];
                      const Icon = glyph?.icon;
                      return (
                        <li
                          key={item}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:border-primary/50"
                        >
                          {Icon && (
                            <Icon size={15} style={glyph.color ? { color: glyph.color } : undefined} aria-hidden="true" />
                          )}
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16">
          <SubHeading>Proficiency</SubHeading>
          <div className="grid gap-6 lg:grid-cols-5">
            {PROFICIENCY.map((card, i) => (
              <ProficiencyCard key={card.key} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
