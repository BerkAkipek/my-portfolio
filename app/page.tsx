import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <section id="home">
          <HeroSection />
        </section>

        <section id="projects" className="scroll-mt-24 py-12 sm:py-14 md:py-16">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">Projects</h2>
          <p className="mt-3 max-w-2xl text-base text-[var(--muted)] sm:mt-4 sm:text-lg">
            Selected work across backend systems, automation, and developer-focused tooling.
          </p>

          <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6">
            <article className="group rounded-2xl border border-[var(--border)] bg-white/80 p-5 shadow-[0_26px_50px_-42px_rgba(19,35,58,0.9)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-38px_rgba(29,78,216,0.5)] sm:p-7">
              <h3 className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
                Stellar Subscription Service
              </h3>
              <p className="mt-3 max-w-3xl text-sm text-[var(--muted)] sm:text-base">
                Blockchain-based subscription management system built on the Stellar network.
                Implements recurring payments, wallet interactions, and backend services for
                automated billing workflows.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                Tech
              </p>
              <p className="mt-1 text-sm text-[var(--foreground)] sm:text-base">
                Go, Stellar SDK, backend services, REST APIs
              </p>
              <a
                href="https://github.com/BerkAkipek/subscription-stellar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border border-[color:rgba(15,118,110,0.28)] bg-[color:rgba(15,118,110,0.08)] px-4 py-2 text-sm font-semibold text-[var(--primary)] transition group-hover:border-[var(--primary)]"
              >
                View on GitHub
              </a>
            </article>

            <article className="group rounded-2xl border border-[var(--border)] bg-white/80 p-5 shadow-[0_26px_50px_-42px_rgba(19,35,58,0.9)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-38px_rgba(15,118,110,0.45)] sm:p-7">
              <h3 className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl">E-Commerce Shop</h3>
              <p className="mt-3 max-w-3xl text-sm text-[var(--muted)] sm:text-base">
                Full-stack e-commerce platform featuring product browsing, cart management, and
                checkout workflows. Built to explore scalable frontend architecture and backend API
                design.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--secondary)]">
                Tech
              </p>
              <p className="mt-1 text-sm text-[var(--foreground)] sm:text-base">
                Next.js, React, Tailwind, API routes
              </p>
              <a
                href="https://github.com/BerkAkipek/portfolio-e-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border border-[color:rgba(29,78,216,0.24)] bg-[color:rgba(29,78,216,0.07)] px-4 py-2 text-sm font-semibold text-[var(--secondary)] transition group-hover:border-[var(--secondary)]"
              >
                View on GitHub
              </a>
            </article>

            <article className="group rounded-2xl border border-[var(--border)] bg-white/80 p-5 shadow-[0_26px_50px_-42px_rgba(19,35,58,0.9)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-38px_rgba(217,119,6,0.5)] sm:p-7">
              <h3 className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
                Cracking Coding Interview Solutions
              </h3>
              <p className="mt-3 max-w-3xl text-sm text-[var(--muted)] sm:text-base">
                Collection of algorithm and data-structure solutions implemented in Go, focusing on
                performance, clarity, and idiomatic language usage. Demonstrates problem-solving
                ability and backend-friendly thinking.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--tertiary)]">
                Tech
              </p>
              <p className="mt-1 text-sm text-[var(--foreground)] sm:text-base">
                Go, algorithms, data structures
              </p>
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

        <section id="skills" className="py-12 sm:py-14 md:py-16">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">Tech Stack</h2>
          <div className="mt-6 grid gap-5 sm:mt-7 sm:gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border)] bg-white/75 p-5 shadow-[0_18px_45px_-38px_rgba(19,35,58,0.9)] sm:p-6">
              <h3 className="text-lg font-semibold text-[var(--primary)] sm:text-xl">DevOps &amp; Cloud</h3>
              <ul className="mt-3 space-y-2 text-[var(--muted)]">
                <li>AWS</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Jenkins</li>
                <li>Grafana</li>
                <li>Linux</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white/75 p-5 shadow-[0_18px_45px_-38px_rgba(19,35,58,0.9)] sm:p-6">
              <h3 className="text-lg font-semibold text-[var(--secondary)] sm:text-xl">
                Backend &amp; Automation
              </h3>
              <ul className="mt-3 space-y-2 text-[var(--muted)]">
                <li>Python</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>Selenium</li>
                <li>CI/CD pipelines</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white/75 p-5 shadow-[0_18px_45px_-38px_rgba(19,35,58,0.9)] sm:p-6">
              <h3 className="text-lg font-semibold text-[var(--tertiary)] sm:text-xl">Tools &amp; Workflow</h3>
              <ul className="mt-3 space-y-2 text-[var(--muted)]">
                <li>Git</li>
                <li>GitHub</li>
                <li>Agile</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 sm:py-14 md:py-16">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">About</h2>
          <div className="mt-5 max-w-4xl space-y-5 rounded-2xl border border-[var(--border)] bg-white/75 p-5 text-base text-[var(--muted)] shadow-[0_24px_50px_-40px_rgba(19,35,58,0.8)] sm:mt-6 sm:p-7 sm:text-lg">
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

        <section id="contact" className="py-12 sm:py-14 md:py-16">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">Contact</h2>
          <div className="mt-5 rounded-2xl border border-[var(--border)] bg-white/75 p-5 shadow-[0_24px_50px_-40px_rgba(19,35,58,0.8)] sm:mt-6 sm:p-7">
            <p className="mb-6 max-w-3xl text-base text-[var(--muted)] sm:mb-8 sm:text-lg">
              I&apos;m currently open to backend, DevOps, and platform engineering
              opportunities. If you&apos;d like to collaborate or discuss a role,
              feel free to reach out.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=berk.akipek.96@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-white px-6 py-3 text-center text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--primary)] hover:text-[var(--primary)] sm:text-base md:flex-1"
              >
                Email Me
              </a>

              <a
                href="https://github.com/BerkAkipek"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-white px-6 py-3 text-center text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--secondary)] hover:text-[var(--secondary)] sm:text-base md:flex-1"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/berk-akipek"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-white px-6 py-3 text-center text-sm font-medium text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--tertiary)] hover:text-[var(--tertiary)] sm:text-base md:flex-1"
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
