import { Layout, Server, Cloud, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGooglecloud,
  SiGithubactions,
  SiLinux,
  SiNginx,
  SiGit,
  SiGithub,
  SiFigma,
  SiJest,
  SiRedux,
  SiTailwindcss,
  SiVim,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icons: (IconType | LucideIcon)[];
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

const SKILL_DATA: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React / Next.js", icons: [SiReact, SiNextdotjs] },
      { name: "TypeScript", icons: [SiTypescript] },
      { name: "CSS / Tailwind", icons: [SiTailwindcss] },
      { name: "State Management", icons: [SiRedux] },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js / Express", icons: [SiNodedotjs, SiExpress] },
      { name: "Python / FastAPI", icons: [SiPython, SiFastapi] },
      { name: "PostgreSQL / MongoDB", icons: [SiPostgresql, SiMongodb] },
      { name: "REST / GraphQL", icons: [SiGraphql] },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", icons: [SiDocker] },
      { name: "AWS / GCP", icons: [Cloud, SiGooglecloud] },
      { name: "CI/CD Pipelines", icons: [SiGithubactions] },
      { name: "Linux / Nginx", icons: [SiLinux, SiNginx] },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", icons: [SiGit, SiGithub] },
      { name: "VS Code / Vim", icons: [VscVscode, SiVim] },
      { name: "Figma", icons: [SiFigma] },
      { name: "Testing / Jest", icons: [SiJest] },
    ],
  },
];

function SkillChip({ skill }: { skill: SkillItem }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 text-[0.72rem] tracking-wider text-chrome-400 bg-bg-tertiary/10 border border-border-chrome rounded-md hover:border-border-hover hover:text-chrome-200 hover:bg-bg-tertiary/30 transition-all duration-300 transform hover:-translate-y-[1px] cursor-default">
      <div className="flex items-center gap-1">
        {skill.icons.map((Icon, idx) => (
          <Icon key={idx} size={12} className="opacity-80 transition-opacity" />
        ))}
      </div>
      <span>{skill.name}</span>
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
                className="glass-card p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Icon size={15} className="text-chrome-500" />
                  <h3 className="text-xs tracking-[0.2em] uppercase text-chrome-300 font-medium">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillChip key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
