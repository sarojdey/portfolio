import { User, Code2, Cloud } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiRedis,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType | typeof Cloud;
}

const TECH_STACK: TechItem[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: Cloud },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Redis", icon: SiRedis },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
];

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <User size={16} className="text-chrome-500" />
          <h2
            className="text-xs tracking-[0.3em] uppercase text-chrome-400"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About
          </h2>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        <div className="flex flex-col gap-12">
          {/* Bio */}
          <div>
            <p className="text-text-secondary text-sm leading-[1.9] mb-6">
              I'm a fullstack developer with a passion for building things that
              live on the internet. I specialize in creating robust web
              applications with clean architecture and intuitive user
              interfaces. From crafting pixel-perfect frontends to designing
              scalable backend systems, I enjoy bridging the gap between design
              and engineering.
            </p>
            <p className="text-text-secondary text-sm leading-[1.9]">
              My approach is rooted in simplicity and reliability. I believe in
              writing code that is not just functional, but maintainable and
              well-tested. Every project I take on is an opportunity to push
              boundaries while maintaining engineering discipline.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="min-w-60">
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={14} className="text-chrome-500" />
              <span className="text-xs tracking-widest uppercase text-text-dim">
                Tech Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] tracking-wider text-chrome-400 border border-border-chrome hover:border-border-hover hover:text-chrome-200 transition-all duration-200 cursor-default"
                  >
                    <Icon size={12} />
                    {tech.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
