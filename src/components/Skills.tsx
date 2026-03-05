import { Layout, Server, Cloud, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

const SKILL_DATA: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "CSS / Tailwind", level: 90 },
      { name: "State Management", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / FastAPI", level: 82 },
      { name: "PostgreSQL / MongoDB", level: 85 },
      { name: "REST / GraphQL", level: 80 },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 78 },
      { name: "AWS / GCP", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Linux / Nginx", level: 76 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code / Vim", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Testing / Jest", level: 78 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[11px] text-text-secondary tracking-wide">
          {name}
        </span>
        <span className="text-[10px] text-text-dim tabular-nums">{level}%</span>
      </div>
      <div className="h-0.5 bg-border-subtle overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-chrome-700 to-chrome-400 transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <Wrench size={16} className="text-chrome-500" />
          <h2
            className="text-xs tracking-[0.3em] uppercase text-chrome-400"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Skills
          </h2>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_DATA.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card p-6 rounded-[3px]"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Icon size={15} className="text-chrome-500" />
                  <h3 className="text-xs tracking-[0.2em] uppercase text-chrome-300 font-medium">
                    {category.title}
                  </h3>
                </div>
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
