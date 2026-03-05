import { ArrowRight, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg-primary)_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-border-chrome rounded-sm text-xs tracking-widest uppercase text-text-muted backdrop-blur-md bg-white/5"
          style={{ animation: "fade-in 0.6s ease-out both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-chrome-400 animate-pulse" />
          Available for work
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none mb-4"
          style={{
            animation: "slide-up 0.6s ease-out 0.1s both",
            fontFamily: "var(--font-heading)",
          }}
        >
          <span className="chrome-text uppercase">Saroj Kumar Dey</span>
        </h1>

        {/* Title */}
        <p
          className="text-base sm:text-lg tracking-[0.2em] uppercase text-chrome-400 mb-6 font-light"
          style={{
            fontFamily: "var(--font-heading)",
            animation: "slide-up 0.6s ease-out 0.3s both",
          }}
        >
          Fullstack Developer
        </p>

        {/* Tagline */}
        <p
          className="text-sm text-text-muted max-w-lg mx-auto mb-12 leading-relaxed"
          style={{ animation: "slide-up 0.6s ease-out 0.4s both" }}
        >
          Building robust, scalable web applications from database to
          deployment. Clean code. Sharp interfaces. Reliable systems.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "slide-up 0.6s ease-out 0.5s both" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-chrome-100 text-bg-primary text-xs font-semibold tracking-widest uppercase no-underline transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            View Projects
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-chrome text-text-secondary text-xs font-medium tracking-widest uppercase no-underline transition-all duration-200 hover:border-chrome-500 hover:text-text-primary backdrop-blur-md bg-white/5"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-dim hover:text-chrome-400 transition-colors no-underline"
        style={{ animation: "fade-in 0.6s ease-out 0.8s both" }}
      >
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;
