"use client";

import { useState } from "react";
import Link from "next/link";

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.7-.22.7-.5v-1.73c-2.87.63-3.47-1.2-3.47-1.2-.47-1.16-1.14-1.46-1.14-1.46-.93-.64.07-.63.07-.63 1.03.07 1.57 1.03 1.57 1.03.91 1.53 2.4 1.09 2.98.83.09-.64.36-1.09.65-1.35-2.3-.26-4.73-1.12-4.73-5a3.85 3.85 0 0 1 1.03-2.7c-.1-.26-.45-1.31.1-2.73 0 0 .84-.26 2.76 1.03a9.67 9.67 0 0 1 5.03 0c1.91-1.3 2.75-1.03 2.75-1.03.56 1.42.21 2.47.1 2.73a3.84 3.84 0 0 1 1.03 2.7c0 3.89-2.44 4.73-4.75 4.98.37.31.7.92.7 1.86v2.76c0 .28.19.61.71.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6a2.49 2.49 0 0 0 2.48 2.5A2.5 2.5 0 1 0 4.98 3.5ZM2.84 9.92h4.27v11.58H2.84V9.92Zm6.94 0h4.09v1.58h.06c.57-1.08 1.97-2.22 4.06-2.22 4.34 0 5.14 2.86 5.14 6.58v5.64h-4.27v-5c0-1.2-.02-2.75-1.67-2.75-1.68 0-1.94 1.31-1.94 2.66v5.09H9.78V9.92Z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/75 backdrop-blur-xl shadow-[0_12px_40px_-28px_rgba(19,35,58,0.65)]">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="#home"
            className="text-base font-semibold tracking-wide text-[var(--foreground)]"
          >
            Berk Akipek
          </Link>

          <button
            type="button"
            className="rounded-lg border border-[var(--border)] bg-white p-2 text-[var(--foreground)] md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path
                d={menuOpen ? "M6 6L18 18M18 6L6 18" : "M4 7H20M4 12H20M4 17H20"}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-3 hidden items-center justify-between gap-4 md:flex">
          <div className="flex flex-wrap items-center gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--secondary)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="https://github.com/BerkAkipek"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5 font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:text-[var(--primary)]"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/berk-akipek/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5 font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--secondary)] hover:text-[var(--secondary)]"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="/BerkAkipekResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--tertiary)] hover:text-[var(--tertiary)]"
            >
              Resume
            </a>
          </div>
        </div>

        {menuOpen ? (
          <div className="mt-3 space-y-3 rounded-2xl border border-[var(--border)] bg-white/95 p-4 shadow-[0_20px_50px_-35px_rgba(19,35,58,0.8)] md:hidden">
            <div className="grid gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--secondary)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="grid gap-2 text-sm">
              <a
                href="https://github.com/BerkAkipek"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-white px-3 py-2 font-medium text-[var(--foreground)] transition hover:border-[color:var(--primary)] hover:text-[var(--primary)]"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/berk-akipek/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-white px-3 py-2 font-medium text-[var(--foreground)] transition hover:border-[color:var(--secondary)] hover:text-[var(--secondary)]"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="/BerkAkipekResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-white px-3 py-2 font-medium text-[var(--foreground)] transition hover:border-[color:var(--tertiary)] hover:text-[var(--tertiary)]"
              >
                Resume
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
