"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/noticias", label: "Noticias" },
  { href: "/articulos", label: "Artículos" },
  { href: "/proyectos", label: "CV" },
  { href: "/contacto", label: "Contacto" },
]

export default function TopBar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-js-yellow/15 bg-js-void/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="JavaScript México — Inicio"
        >
          <span className="overflow-hidden rounded-md border border-js-yellow/50 bg-js-yellow shadow-[0_0_20px_rgba(247,223,30,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_28px_rgba(247,223,30,0.45)]">
            <Image
              src="/javascript-logo.svg"
              alt=""
              width={40}
              height={40}
              className="block h-10 w-10"
            />
          </span>
          <span className="hidden font-display text-sm font-bold tracking-[0.2em] text-js-yellow uppercase sm:inline">
            JS México
          </span>
        </Link>

        <nav
          aria-label="Secciones"
          className="flex flex-wrap items-center justify-end gap-1 sm:gap-2"
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-1.5 font-display text-[10px] tracking-[0.22em] uppercase transition-colors duration-300 sm:px-3 sm:text-[11px] ${
                  active
                    ? "text-js-yellow"
                    : "text-js-muted hover:text-js-ink"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-js-yellow/60 to-transparent"
        aria-hidden
      />
    </header>
  )
}
