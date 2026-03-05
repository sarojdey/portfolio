import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  ArrowUpRight,
} from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@saroj.dev" },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-chrome)] px-4 py-3 text-xs text-[var(--color-text-primary)] tracking-wide placeholder:text-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-chrome-500)] transition-colors duration-200 rounded-[2px] font-[var(--font-mono)]";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <Mail size={16} className="text-chrome-500" />
          <h2
            className="text-xs tracking-[0.3em] uppercase text-chrome-400"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact
          </h2>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12">
          {/* Info side */}
          <div>
            <p className="text-text-secondary text-sm leading-[1.9] mb-8">
              Have a project in mind or want to discuss an opportunity? I'm
              always open to new challenges and collaborations. Let's build
              something exceptional together.
            </p>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 text-text-muted hover:text-chrome-300 transition-colors no-underline"
                  >
                    <Icon
                      size={16}
                      className="text-chrome-600 group-hover:text-chrome-400 transition-colors"
                    />
                    <span className="text-xs tracking-wider">{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-px"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form side */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
              required
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-chrome-100 text-bg-primary text-xs font-semibold tracking-widest uppercase border-none cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-xs"
            >
              Send Message
              <Send
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
