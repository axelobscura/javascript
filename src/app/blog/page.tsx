export default function Blog() {
  return (
    <main className="relative mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <p className="font-display text-xs tracking-[0.4em] text-js-yellow uppercase">
        Diario
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-gradient-js sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 max-w-xl text-base font-light text-js-muted">
        Entradas cortas sobre el día a día del desarrollo JavaScript.
      </p>
      <div className="mt-16 border-t border-js-yellow/15 pt-10">
        <p className="font-display text-sm tracking-[0.2em] text-js-muted uppercase">
          Próximamente
        </p>
      </div>
    </main>
  )
}
