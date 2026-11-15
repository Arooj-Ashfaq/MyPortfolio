import { Heart } from "lucide-react";
import { FOOTER_LINKS, NAV_LINKS, PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 text-center">
        <a
          href="#home"
          className="grid h-12 w-12 place-items-center rounded-xl border border-primary/40 font-display text-lg font-bold text-primary"
        >
          AA
        </a>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <nav aria-label="Social profiles" className="w-full max-w-full">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            — Connect
          </p>
          <ul className="mx-auto flex w-fit max-w-full flex-col items-start gap-2">
            {FOOTER_LINKS.map((l) => (
              <li key={l.text} className="max-w-full">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-card/60"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors group-hover:border-primary/60 group-hover:text-primary">
                    <l.icon size={18} />
                  </span>
                  <span className="flex min-w-0 flex-col text-left">
                    <span className="text-sm font-semibold text-foreground">{l.label}</span>
                    <span className="break-all text-xs text-muted-foreground transition-colors group-hover:text-primary">
                      {l.text}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Built with
          <Heart size={14} className="text-gold" fill="currentColor" />
          and clean code.
        </p>
      </div>
    </footer>
  );
}
