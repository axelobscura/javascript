import Link from 'next/link'

export default function NoticiaNoEncontrada() {
  return (
    <main className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-5 py-16 md:px-8">
      <p className="font-display text-xs tracking-[0.4em] text-js-yellow uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-gradient-js sm:text-4xl">
        Noticia no encontrada
      </h1>
      <p className="mt-4 text-base font-light text-js-muted">
        Puede haber expirado del feed horario, o el enlace ya no es válido.
      </p>
      <Link
        href="/noticias"
        className="mt-8 w-fit bg-js-yellow px-8 py-3.5 font-display text-sm font-bold tracking-widest text-js-black uppercase"
      >
        Volver a noticias
      </Link>
    </main>
  )
}
