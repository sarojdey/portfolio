import { User } from "lucide-react";

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

        <div>
          {/* Bio */}
          <div className="max-w-2xl">
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
        </div>
      </div>
    </section>
  );
}

export default About;
