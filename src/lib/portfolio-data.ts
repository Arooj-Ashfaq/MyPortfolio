import {
  Github,
  Linkedin,
  Instagram,
  Dribbble,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

export const PROFILE = {
  name: "Arooj Ashfaq",
  titles: ["Full Stack Web Developer", "Cybersecurity Learner"],
  email: "aroojashfaq979@gmail.com",
  // phone: "+92 322 8781212",
  // phoneHref: "+923228781212",
};

export type Social = { label: string; href: string; icon: LucideIcon };

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/Arooj-Ashfaq", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arooj-ashfaq-400538318/", icon: Linkedin },
  { label: "Dribbble", href: "https://dribbble.com/Play_with_designs", icon: Dribbble },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_aroojashfaq_?igsh=cWF6YWRramRzY2lo",
    icon: Instagram,
  },
];

/** Vertical link list shown in the footer (visible link text + both GitHub profiles). */
export type FooterLink = { label: string; text: string; href: string; icon: LucideIcon };

export const FOOTER_LINKS: FooterLink[] = [
  { label: "GitHub · Personal", text: "github.com/Arooj-Ashfaq", href: "https://github.com/Arooj-Ashfaq", icon: Github },
  { label: "GitHub · Syntralogic", text: "github.com/syntralogic", href: "https://github.com/syntralogic", icon: Github },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/arooj-ashfaq-400538318",
    href: "https://www.linkedin.com/in/arooj-ashfaq-400538318/",
    icon: Linkedin,
  },
  { label: "Dribbble", text: "dribbble.com/Play_with_designs", href: "https://dribbble.com/Play_with_designs", icon: Dribbble },
  {
    label: "Instagram",
    text: "instagram.com/_aroojashfaq_",
    href: "https://www.instagram.com/_aroojashfaq_?igsh=cWF6YWRramRzY2lo",
    icon: Instagram,
  },
];

export const CONTACT_METHODS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  // { label: "Phone / WhatsApp", value: PROFILE.phone, href: `https://wa.me/${PROFILE.phoneHref}`, icon: Phone },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

/* ---------------- Skills ---------------- */

export type SkillGroup = { title: string; items: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind", "Bootstrap", "Vite"],
  },
  {
    title: "Backend & DB",
    items: ["Python", "Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "REST APIs"],
  },
  {
    title: "Systems & Security",
    items: ["C", "C++", "Git", "GitHub", "Linux", "Cybersecurity", "Networking"],
  },
];

/* ---------------- Portfolio ---------------- */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  href: string;
  t1: string;
  t2: string;
  status?: string;
};

export type PortfolioCategory = {
  key: string;
  label: string;
  accent: "primary" | "gold";
  projects: Project[];
};

export const PORTFOLIO: PortfolioCategory[] = [
  {
    key: "development",
    label: "Web Development",
    accent: "primary",
    projects: [
      {
        title: "PawDeal - Pet Ecosystem",
        description: "Full-stack pet platform using React/TypeScript, NestJS/Express.js backend, PostgreSQL, Redis caching, and AWS/Docker deployment.",
        tags: ["React", "TypeScript", "NestJS", "Express.js", "PostgreSQL", "Redis", "AWS", "Docker"],
        link: "https://github.com/Arooj-Ashfaq/",
        href: "https://pawdeal-frontend.vercel.app/",
        t1: "Source Code",
        t2: "Live Demo",
      },
      {
        title: "Synergy Social - Social platform",
        description: "Full-stack social community platform enabling users to connect, create, and grow together using React/TypeScript, NestJS/Express.js, PostgreSQL, Redis, and AWS/Docker.",
        tags: ["React", "TypeScript", "NestJS", "Express.js", "PostgreSQL", "Redis", "JWT", "AWS", "Docker"],
        link: "https://github.com/syntralogic",
        href: "https://synergy-social-frontend.vercel.app/",
        t1: "Source Code",
        t2: "Live Demo",
      },
      {
        title: "Other Projects",
        description: "A travel & tourism management system built in C# and C++ providing a console based and graphics based interface.",
        tags: ["C++", "C#", "Windows Form", ".Net"],
        link: "https://github.com/syntralogic",
        href: "https://synergy-social-frontend.vercel.app/",
        t1: "Source Code",
        t2: "Live Demo",
      },

    ],
  },
  {
    key: "cyber",
    label: "Cybersecurity",
    accent: "primary",
    projects: [
      {
        title: "Network Security Lab",
        description: "Hands-on labs exploring network scanning, hardening and traffic analysis with Kali Linux.",
        tags: ["Kali Linux", "Network Security"],
        link: "https://github.com/Arooj-Ashfaq/",
        href: "https://github.com/syntralogic/",
        t1: "Source Code",
        t2: "Live Demo",
        status: "Coming Soon",
      },
      {
        title: "Web App Security Audit",
        description: "A practical project auditing common web vulnerabilities and documenting safe fixes.",
        tags: ["Web Security", "OWASP"],
        link: "https://github.com/Arooj-Ashfaq/",
        href: "https://github.com/syntralogic/",
        t1: "Source Code",
        t2: "Live Demo",
        status: "Coming Soon",
      },
      {
        title: "Crypto Basics Toolkit",
        description: "Exploring cryptography fundamentals through small, well-documented experiments.",
        tags: ["Cryptography", "Python"],
        link: "https://github.com/Arooj-Ashfaq/",
        href: "https://github.com/syntralogic/",
        t1: "Source Code",
        t2: "Live Demo",
        status: "Coming Soon",
      },
    ],
  },
];

/* ---------------- Testimonials ---------------- */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Project the feedback is about (matches a title in PORTFOLIO). */
  project: string;
  /** Set to true while the entry is still a placeholder; remove it once you add real feedback. */
  placeholder?: boolean;
};

// TODO: replace these placeholders with REAL feedback from clients / users / teammates,
// then delete the `placeholder: true` line so the "Sample" tag disappears.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Add a real quote here from someone who used or reviewed this project: what problem it solved and what they liked most.",
    name: "Client Name",
    role: "Role / Company",
    project: "PawDeal - Pet Ecosystem",
    placeholder: true,
  },
  {
    quote:
      "Add a real quote here from someone who used or reviewed this project: what problem it solved and what they liked most.",
    name: "Client Name",
    role: "Role / Company",
    project: "Synergy Social - Social platform",
    placeholder: true,
  },
  {
    quote:
      "Add a real quote here from someone who used or reviewed this project: what problem it solved and what they liked most.",
    name: "Client Name",
    role: "Role / Company",
    project: "Travel & Tourism Management System",
    placeholder: true,
  },
];
