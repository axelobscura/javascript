import Image from "next/image"
import Link from "next/link"
import MenuEntrada from "./components/MenuEntrada"

export default async function Home() {
  return (
    <div className="relative min-h-full overflow-hidden bg-mesh">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />

      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[42vw] w-[42vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-js-yellow/20 blur-[100px] animate-pulse-glow"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-y-0 w-1/3 bg-[linear-gradient(105deg,transparent,rgba(247,223,30,0.08),transparent)] animate-scan" />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center md:px-10">
        <div className="animate-logo-in animate-float glow-yellow mb-8 overflow-hidden rounded-2xl border border-js-yellow/40 bg-js-yellow shadow-[0_0_60px_rgba(247,223,30,0.35)]">
          <Image
            src="/javascript-logo.svg"
            alt="JavaScript"
            width={148}
            height={148}
            priority
            className="block h-[110px] w-[110px] sm:h-[140px] sm:w-[140px]"
          />
        </div>

        <p className="animate-fade-up delay-1 font-display text-xs font-medium tracking-[0.45em] text-js-yellow uppercase sm:text-sm">
          JavaScript México
        </p>

        <h1 className="animate-fade-up delay-2 mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-gradient-js sm:text-6xl md:text-7xl">
          El hub de noticias JavaScript en español
        </h1>

        <p className="animate-fade-up delay-3 mt-6 max-w-xl text-base font-light leading-relaxed text-js-muted sm:text-lg">
          Frameworks, herramientas y tendencias del ecosistema — filtrado para
          la comunidad hispanohablante.
        </p>

        <div className="animate-fade-up delay-4 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/noticias"
            className="group relative overflow-hidden bg-js-yellow px-8 py-3.5 font-display text-sm font-bold tracking-widest text-js-black uppercase transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">Explorar noticias</span>
            <span
              className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0"
              aria-hidden
            />
          </Link>
          <Link
            href="/articulos"
            className="border border-js-yellow/50 px-8 py-3.5 font-display text-sm font-medium tracking-widest text-js-ink uppercase transition-colors duration-300 hover:border-js-yellow hover:bg-js-yellow/10"
          >
            Leer artículos
          </Link>
        </div>

        <div className="animate-fade-up delay-4 mt-14 w-full max-w-3xl">
          <MenuEntrada />
        </div>
      </main>
    </div>
  )
}
