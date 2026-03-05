import { Briefcase, Calendar } from "lucide-react";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  points: string[];
}

const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    role: "Senior Fullstack Developer",
    company: "TechCorp Solutions",
    period: "2023 — Present",
    points: [
      "Architected and led development of a microservices-based platform serving 50k+ daily users",
      "Reduced API response times by 40% through query optimization and caching strategies",
      "Mentored a team of 4 junior developers, conducting code reviews and pair programming sessions",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Digital Forge Inc.",
    period: "2021 — 2023",
    points: [
      "Built responsive web applications using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      "Developed RESTful APIs consumed by web and mobile clients across the organization",
    ],
  },
  {
    role: "Frontend Developer",
    company: "StartupLab",
    period: "2020 — 2021",
    points: [
      "Created interactive dashboards and data visualization components using D3.js and React",
      "Improved Core Web Vitals scores by 60% through performance optimization techniques",
      "Collaborated closely with designers to translate Figma prototypes into pixel-perfect UIs",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section-padding bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={16} className="text-chrome-500" />
          <h2
            className="text-xs tracking-[0.3em] uppercase text-chrome-400"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experience
          </h2>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-border-chrome" />

          <div className="flex flex-col gap-10">
            {EXPERIENCE_DATA.map((entry, i) => (
              <div key={i} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3.75 h-3.75 rounded-full border-2 border-chrome-700 bg-bg-secondary flex items-center justify-center">
                  <div className="w-1.25 h-1.25 rounded-full bg-chrome-500" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">
                    {entry.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs text-chrome-400">
                      {entry.company}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-text-dim">
                      <Calendar size={11} />
                      {entry.period}
                    </span>
                  </div>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2">
                    {entry.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-[12px] text-text-muted leading-[1.8] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.25 before:w-1.5 before:h-px before:bg-chrome-700"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
