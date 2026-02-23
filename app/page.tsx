import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <section id="home">
          <HeroSection />
        </section>

        <section id="projects" className="scroll-mt-24 py-16">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">Projects</h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Selected work across backend systems, automation, and developer-focused tooling.
          </p>

          <div className="mt-8 grid gap-6">
            <article className="group rounded-2xl border border-[var(--border)] bg-white/80 p-7 shadow-[0_26px_50px_-42px_rgba(19,35,58,0.9)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-38px_rgba(29,78,216,0.5)]">
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                Stellar Subscription Service
              </h3>
              <p className="mt-3 max-w-3xl text-[var(--muted)]">
                Blockchain-based subscription management system built on the Stellar network.
                Implements recurring payments, wallet interactions, and backend services for
                automated billing workflows.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                Tech
              </p>
              <p className="mt-1 text-[var(--foreground)]">Go, Stellar SDK, backend services, REST APIs</p>
              <a
                href="https://github.com/BerkAkipek/subscription-stellar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border border-[color:rgba(15,118,110,0.28)] bg-[color:rgba(15,118,110,0.08)] px-4 py-2 text-sm font-semibold text-[var(--primary)] transition group-hover:border-[var(--primary)]"
              >
                View on GitHub
              </a>
            </article>

            <article className="group rounded-2xl border border-[var(--border)] bg-white/80 p-7 shadow-[0_26px_50px_-42px_rgba(19,35,58,0.9)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-38px_rgba(15,118,110,0.45)]">
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">E-Commerce Shop</h3>
              <p className="mt-3 max-w-3xl text-[var(--muted)]">
                Full-stack e-commerce platform featuring product browsing, cart management, and
                checkout workflows. Built to explore scalable frontend architecture and backend API
                design.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--secondary)]">
                Tech
              </p>
              <p className="mt-1 text-[var(--foreground)]">Next.js, React, Tailwind, API routes</p>
              <a
                href="https://github.com/BerkAkipek/portfolio-e-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border border-[color:rgba(29,78,216,0.24)] bg-[color:rgba(29,78,216,0.07)] px-4 py-2 text-sm font-semibold text-[var(--secondary)] transition group-hover:border-[var(--secondary)]"
              >
                View on GitHub
              </a>
            </article>

            <article className="group rounded-2xl border border-[var(--border)] bg-white/80 p-7 shadow-[0_26px_50px_-42px_rgba(19,35,58,0.9)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-38px_rgba(217,119,6,0.5)]">
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                Cracking Coding Interview Solutions
              </h3>
              <p className="mt-3 max-w-3xl text-[var(--muted)]">
                Collection of algorithm and data-structure solutions implemented in Go, focusing on
                performance, clarity, and idiomatic language usage. Demonstrates problem-solving
                ability and backend-friendly thinking.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--tertiary)]">
                Tech
              </p>
              <p className="mt-1 text-[var(--foreground)]">Go, algorithms, data structures</p>
              <a
                href="https://github.com/BerkAkipek/cracking-the-coding-interview-solutions-go"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border border-[color:rgba(217,119,6,0.28)] bg-[color:rgba(217,119,6,0.08)] px-4 py-2 text-sm font-semibold text-[var(--tertiary)] transition group-hover:border-[var(--tertiary)]"
              >
                View on GitHub
              </a>
            </article>
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">Tech Stack</h2>
          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_45px_-38px_rgba(19,35,58,0.9)]">
              <h3 className="text-xl font-semibold text-[var(--primary)]">DevOps &amp; Cloud</h3>
              <ul className="mt-3 space-y-2 text-[var(--muted)]">
                <li>AWS</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Jenkins</li>
                <li>Grafana</li>
                <li>Linux</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_45px_-38px_rgba(19,35,58,0.9)]">
              <h3 className="text-xl font-semibold text-[var(--secondary)]">Backend &amp; Automation</h3>
              <ul className="mt-3 space-y-2 text-[var(--muted)]">
                <li>Python</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>Selenium</li>
                <li>CI/CD pipelines</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white/75 p-6 shadow-[0_18px_45px_-38px_rgba(19,35,58,0.9)]">
              <h3 className="text-xl font-semibold text-[var(--tertiary)]">Tools &amp; Workflow</h3>
              <ul className="mt-3 space-y-2 text-[var(--muted)]">
                <li>Git</li>
                <li>GitHub</li>
                <li>Agile</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">About</h2>
          <div className="mt-6 max-w-4xl space-y-5 rounded-2xl border border-[var(--border)] bg-white/75 p-7 text-lg text-[var(--muted)] shadow-[0_24px_50px_-40px_rgba(19,35,58,0.8)]">
            <p>
              I&apos;m a DevOps-oriented software engineer with a background in testing,
              automation, and backend development. I enjoy building systems that are
              reliable, observable, and easy to deploy.
            </p>

            <p>
              My experience started in software testing and automation, where I worked
              on improving CI/CD workflows, test reliability, and release stability in
              Agile teams. That experience pushed me toward infrastructure, cloud
              environments, and scalable backend services.
            </p>

            <p>
              Today I focus on backend systems, automation pipelines, and cloud-ready
              applications. I&apos;m especially interested in DevOps engineering, platform
              reliability, and building tools that make development workflows smoother.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-semibold text-[var(--foreground)]">Contact</h2>
          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white/75 p-7 shadow-[0_24px_50px_-40px_rgba(19,35,58,0.8)]">
            <p className="mb-8 max-w-3xl text-lg text-[var(--muted)]">
              I&apos;m currently open to backend, DevOps, and platform engineering
              opportunities. If you&apos;d like to collaborate or discuss a role,
              feel free to reach out.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=berk.akipek.96@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-white px-6 py-3 text-center font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:text-[var(--primary)]"
              >
                Email Me
              </a>

              <a
                href="https://github.com/BerkAkipek"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-white px-6 py-3 text-center font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--secondary)] hover:text-[var(--secondary)]"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/berk-akipek"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-white px-6 py-3 text-center font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--tertiary)] hover:text-[var(--tertiary)]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
