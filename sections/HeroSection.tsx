export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white/70 px-4 py-10 shadow-[0_32px_80px_-50px_rgba(19,35,58,0.7)] sm:px-6 sm:py-12 md:px-10 md:py-16">
      <div className="pointer-events-none absolute -right-28 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.28),transparent_65%)] sm:-right-20 sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.24),transparent_65%)] sm:-bottom-24 sm:-left-20 sm:h-72 sm:w-72" />

      <div className="relative z-10 flex min-h-[46vh] flex-col justify-center sm:min-h-[52vh] md:min-h-[56vh]">
        <p className="inline-flex w-fit items-center rounded-full border border-[color:rgba(15,118,110,0.25)] bg-[color:rgba(15,118,110,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Building Reliable Systems
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-[var(--foreground)] sm:mt-5 sm:text-5xl md:text-7xl">
          <span className="block">Berk Akipek</span>
          <span className="mt-1 block text-2xl text-[var(--secondary)] sm:text-3xl md:text-5xl">
            DevOps &amp; Backend Engineer
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-[var(--muted)] sm:mt-6 sm:text-lg md:text-xl">
          I build reliable backend systems, automation pipelines, and cloud-ready applications.
          Focused on DevOps practices, testing automation, and scalable infrastructure.
        </p>

        <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
          <a
            href="#projects"
            className="rounded-lg bg-[linear-gradient(135deg,var(--secondary),var(--primary))] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_20px_35px_-20px_rgba(29,78,216,0.75)] transition hover:-translate-y-0.5 sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="https://github.com/BerkAkipek"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--border)] bg-white/80 px-6 py-3 text-center text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--secondary)] hover:text-[var(--secondary)] sm:w-auto"
          >
            GitHub
          </a>
          <a
            href="/BerkAkipekResume.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="rounded-lg border border-[var(--border)] bg-white/80 px-6 py-3 text-center text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--tertiary)] hover:text-[var(--tertiary)] sm:w-auto"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
