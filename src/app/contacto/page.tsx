export default function Contacto() {
  return (
    <main className="relative mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <p className="font-display text-xs tracking-[0.4em] text-js-yellow uppercase">
        Conecta
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-gradient-js sm:text-5xl">
        Contacto
      </h1>
      <p className="mt-4 max-w-xl text-base font-light text-js-muted">
        ¿Tienes una noticia, colaboración o tip para la comunidad? Escríbenos.
      </p>

      <form className="mt-12 max-w-lg space-y-6">
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 block font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase"
          >
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="w-full border border-js-yellow/25 bg-js-surface/80 px-4 py-3 text-js-ink outline-none transition-colors focus:border-js-yellow"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border border-js-yellow/25 bg-js-surface/80 px-4 py-3 text-js-ink outline-none transition-colors focus:border-js-yellow"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="mensaje"
            className="mb-2 block font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            className="w-full resize-y border border-js-yellow/25 bg-js-surface/80 px-4 py-3 text-js-ink outline-none transition-colors focus:border-js-yellow"
            placeholder="Cuéntanos..."
          />
        </div>
        <button
          type="submit"
          className="bg-js-yellow px-8 py-3.5 font-display text-sm font-bold tracking-widest text-js-black uppercase transition-transform hover:scale-[1.02]"
        >
          Enviar
        </button>
      </form>
    </main>
  )
}
