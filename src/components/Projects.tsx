import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const PROJECT_DATA: Project[] = [
  {
    title: "CloudSync Dashboard",
    description:
      "Real-time cloud infrastructure monitoring dashboard with live metrics, alerting, and multi-provider support. Built for teams managing distributed systems.",
    tech: ["React", "TypeScript", "Node.js", "WebSocket", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Vault API Gateway",
    description:
      "High-performance API gateway with rate limiting, authentication middleware, request validation, and comprehensive logging for microservice architectures.",
    tech: ["Node.js", "Redis", "Docker", "JWT", "Express"],
    github: "#",
  },
  {
    title: "Nexus CMS",
    description:
      "Headless content management system with a visual page builder, role-based access control, and RESTful + GraphQL APIs for content delivery.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "GraphQL", "AWS S3"],
    github: "#",
    live: "#",
  },
  {
    title: "DataForge CLI",
    description:
      "Command-line tool for database migration management, seed data generation, and schema diffing across multiple database engines.",
    tech: ["Python", "Click", "SQLAlchemy", "Docker"],
    github: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card p-6 rounded-[3px] group flex flex-col h-full hover:-translate-y-0.5 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <Folder
          size={18}
          className="text-chrome-600 group-hover:text-chrome-400 transition-colors"
        />
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              className="text-text-dim hover:text-chrome-300 transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="text-text-dim hover:text-chrome-300 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-text-primary mb-2 group-hover:chrome-text transition-all">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[12px] text-text-muted leading-[1.8] mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] tracking-wider text-chrome-500 font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <Folder size={16} className="text-chrome-500" />
          <h2
            className="text-xs tracking-[0.3em] uppercase text-chrome-400"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Projects
          </h2>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECT_DATA.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
