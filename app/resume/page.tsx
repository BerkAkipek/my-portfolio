import Navbar from "@/components/Navbar";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12 md:px-16">
        <header>
          <h1 className="text-4xl font-semibold text-black">Resume</h1>
          <p className="mt-3 text-lg text-gray-700">
            Berk Akipek
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Add your location, email, phone, portfolio URL, and LinkedIn here.
          </p>
          <a
            href="/BerkAkipekResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded border border-black px-4 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white"
          >
            Open PDF Resume
          </a>
        </header>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black">Summary</h2>
          <p className="mt-3 text-gray-700">
            Write a short 2-3 sentence summary about your background, key skills, and target role.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black">Experience</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <p>Role Title - Company Name - City, Country - Month Year to Month Year</p>
            <p>Describe your impact with measurable outcomes and technologies used.</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black">Projects</h2>
          <div className="mt-4 space-y-4 text-gray-700">
            <p>Project Name - Stack (React, Next.js, TypeScript, etc.)</p>
            <p>Summarize what you built, your role, and the result.</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black">Education</h2>
          <p className="mt-3 text-gray-700">
            Degree - University - Graduation Year
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-black">Skills</h2>
          <p className="mt-3 text-gray-700">
            JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS, Git
          </p>
        </section>
      </main>
    </>
  );
}
