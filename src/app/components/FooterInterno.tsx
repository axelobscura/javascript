import Link from "next/link"

export default function FooterInterno() {
  return (
    <footer className="mt-auto border-t border-js-yellow/15 bg-js-void">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center md:flex-row md:px-8 md:text-left">
        <p className="font-display text-[10px] tracking-[0.3em] text-js-muted uppercase">
          JavaScript México · Noticias en español
        </p>
        <div className="flex gap-6">
          <Link
            href="/noticias"
            className="font-display text-[10px] tracking-[0.25em] text-js-muted uppercase transition-colors hover:text-js-yellow"
          >
            Noticias
          </Link>
          <Link
            href="/contacto"
            className="font-display text-[10px] tracking-[0.25em] text-js-muted uppercase transition-colors hover:text-js-yellow"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  )
}
