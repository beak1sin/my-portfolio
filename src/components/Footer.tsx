import { personalInfo } from "../data/portfolio";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["about", "skills", "projects", "experience", "contact"];

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-800/50 py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-xl font-bold text-gradient mb-3 inline-block"
            >
              {personalInfo.name}
            </motion.h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {personalInfo.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <motion.button
                    onClick={() => scrollToSection(item)}
                    whileHover={{ x: 2 }}
                    className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-accent transition-colors capitalize"
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4 text-sm">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                {
                  href: personalInfo.github,
                  label: "GitHub",
                  icon: (
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  ),
                },
                {
                  href: personalInfo.blog,
                  label: "Blog",
                  stroke: true,
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  ),
                },
                {
                  href: `mailto:${personalInfo.email}`,
                  label: "Email",
                  stroke: true,
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  aria-label={link.label}
                >
                  <svg
                    className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                    fill={link.stroke ? "none" : "currentColor"}
                    stroke={link.stroke ? "currentColor" : undefined}
                    viewBox="0 0 24 24"
                  >
                    {link.icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-center text-xs text-neutral-400">
            © {currentYear} {personalInfo.name}. Built with React + TypeScript
            + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
