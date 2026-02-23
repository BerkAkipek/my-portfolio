export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white/70 px-6 py-12 shadow-[0_32px_80px_-50px_rgba(19,35,58,0.7)] md:px-10 md:py-16">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.28),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.24),transparent_65%)]" />

      <div className="relative z-10 flex min-h-[56vh] flex-col justify-center">
        <p className="inline-flex w-fit items-center rounded-full border border-[color:rgba(15,118,110,0.25)] bg-[color:rgba(15,118,110,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Building Reliable Systems
        </p>
        <h1 className="mt-5 text-5xl font-bold leading-tight text-[var(--foreground)] md:text-7xl">
          <span className="block">Berk Akipek</span>
          <span className="block text-3xl text-[var(--secondary)] md:text-5xl">
            DevOps &amp; Backend Engineer
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] md:text-xl">
          I build reliable backend systems, automation pipelines, and cloud-ready applications.
          Focused on DevOps practices, testing automation, and scalable infrastructure.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-[linear-gradient(135deg,var(--secondary),var(--primary))] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_35px_-20px_rgba(29,78,216,0.75)] transition hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="https://github.com/BerkAkipek"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--border)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--secondary)] hover:text-[var(--secondary)]"
          >
            GitHub
          </a>
          <a
            href="/BerkAkipekResume.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="rounded-lg border border-[var(--border)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--tertiary)] hover:text-[var(--tertiary)]"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
