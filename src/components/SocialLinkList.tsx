import { SOCIAL_LINKS } from "@/lib/portfolio-data";

/** Vertical list of profile links: icon, label and the visible link text. */
export function SocialLinkList() {
  return (
    <ul className="flex flex-col gap-1.5">
      {SOCIAL_LINKS.map((l) => (
        <li key={l.text}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-primary/5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background/50 text-muted-foreground transition-colors group-hover:border-primary/60 group-hover:text-primary">
              <l.icon size={18} />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-sm font-semibold text-foreground">{l.label}</span>
              <span className="break-all text-xs text-muted-foreground transition-colors group-hover:text-primary">
                {l.text}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
