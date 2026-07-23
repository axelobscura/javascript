import { resume } from '../../data/resume'

export default function Proyectos() {
  return (
    <main className="relative px-5 py-12 md:px-8 md:py-16">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-js-yellow/10 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Hero */}
        <header className="border-b border-js-yellow/15 pb-12">
          <p className="font-display text-xs tracking-[0.4em] text-js-yellow uppercase">
            Curriculum · Sr Full Stack
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-gradient-js sm:text-6xl md:text-7xl">
            {resume.name}
          </h1>
          <p className="mt-4 font-display text-sm tracking-[0.28em] text-js-ink uppercase sm:text-base">
            {resume.title}
            <span className="text-js-yellow"> · </span>
            {resume.years} years
            <span className="text-js-yellow"> · </span>
            {resume.location}
          </p>

          <p className="mt-6 max-w-3xl text-base font-light leading-relaxed text-js-muted sm:text-lg">
            {resume.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${resume.email}`}
              className="bg-js-yellow px-6 py-3 font-display text-[11px] font-bold tracking-widest text-js-black uppercase transition-transform hover:scale-[1.02]"
            >
              {resume.email}
            </a>
            <a
              href={`tel:${resume.phone.replace(/\s/g, '')}`}
              className="border border-js-yellow/50 px-6 py-3 font-display text-[11px] font-medium tracking-widest text-js-ink uppercase transition-colors hover:border-js-yellow hover:bg-js-yellow/10"
            >
              {resume.phone}
            </a>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {resume.highlights.map((item) => (
              <li
                key={item}
                className="border-l border-js-yellow/40 pl-4 text-sm font-light leading-snug text-js-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </header>

        {/* Skills */}
        <section className="border-b border-js-yellow/15 py-12">
          <p className="font-display text-xs tracking-[0.35em] text-js-yellow uppercase">
            Stack
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-js-ink sm:text-3xl">
            Technical expertise
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resume.skills.map((group) => (
              <div key={group.label}>
                <h3 className="font-display text-[11px] tracking-[0.3em] text-js-yellow uppercase">
                  {group.label}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-js-muted">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="border-b border-js-yellow/15 py-12">
          <p className="font-display text-xs tracking-[0.35em] text-js-yellow uppercase">
            Experience
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-js-ink sm:text-3xl">
            Professional timeline
          </h2>

          <ol className="mt-10 space-y-0">
            {resume.experience.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="border-t border-js-yellow/10 py-10 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-js-ink sm:text-2xl">
                      {job.company}
                    </h3>
                    <p className="mt-1 font-display text-[11px] tracking-[0.22em] text-js-yellow uppercase">
                      {job.role}
                    </p>
                  </div>
                  <time className="shrink-0 font-display text-[11px] tracking-[0.2em] text-js-muted uppercase">
                    {job.period}
                  </time>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm font-light leading-relaxed text-js-muted sm:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-js-yellow"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs font-light tracking-wide text-js-muted/80">
                  {job.stack.join(' · ')}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Education + languages */}
        <section className="grid gap-12 border-b border-js-yellow/15 py-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-xs tracking-[0.35em] text-js-yellow uppercase">
              Education
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-js-ink">
              Academic path
            </h2>
            <ul className="mt-8 space-y-6">
              {resume.education.map((ed) => (
                <li key={ed.degree}>
                  <p className="font-display text-sm font-semibold text-js-ink sm:text-base">
                    {ed.degree}
                  </p>
                  <p className="mt-1 text-sm font-light text-js-muted">
                    {ed.school}
                  </p>
                  <p className="mt-1 font-display text-[10px] tracking-[0.25em] text-js-yellow uppercase">
                    {ed.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs tracking-[0.35em] text-js-yellow uppercase">
              Languages
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-js-ink">
              Communication
            </h2>
            <ul className="mt-8 space-y-4">
              {resume.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 border-b border-js-yellow/10 pb-3"
                >
                  <span className="font-display text-sm tracking-[0.15em] text-js-ink uppercase">
                    {lang.name}
                  </span>
                  <span className="text-sm font-light text-js-muted">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-display text-xs tracking-[0.35em] text-js-yellow uppercase">
              Selected coursework
            </p>
            <ul className="mt-4 space-y-2">
              {resume.courses.map((course) => (
                <li
                  key={course}
                  className="text-sm font-light leading-relaxed text-js-muted"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <p className="font-display text-xs tracking-[0.35em] text-js-yellow uppercase">
            Next step
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-bold tracking-tight text-js-ink sm:text-3xl">
            Open to senior full-stack roles and architecture collaborations.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${resume.email}?subject=Opportunity%20—%20Senior%20Full%20Stack`}
              className="bg-js-yellow px-8 py-3.5 font-display text-sm font-bold tracking-widest text-js-black uppercase transition-transform hover:scale-[1.02]"
            >
              Contact me
            </a>
            <a
              href="/contacto"
              className="border border-js-yellow/50 px-8 py-3.5 font-display text-sm font-medium tracking-widest text-js-ink uppercase transition-colors hover:border-js-yellow hover:bg-js-yellow/10"
            >
              Message form
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
