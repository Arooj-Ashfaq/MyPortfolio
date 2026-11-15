import { Globe, Network, ShieldCheck, type LucideIcon } from "lucide-react";
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
import { SKILL_GROUPS } from "@/lib/portfolio-data";

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
  Cybersecurity: { icon: ShieldCheck, color: "#D9A441" },
  Networking: { icon: Network, color: "#E0569C" },
};

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 aurora opacity-20" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="mb-5 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Skills
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Tools I work with <span className="text-gold">every day.</span>
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
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold">
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
      </div>
    </section>
  );
}
