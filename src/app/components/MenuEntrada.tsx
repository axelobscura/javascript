import Link from "next/link"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/noticias", label: "Noticias" },
  { href: "/articulos", label: "Artículos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/cv", label: "CV" },
  { href: "/contacto", label: "Contacto" },
]

export default function MenuEntrada() {
  return (
    <nav
      aria-label="Navegación principal"
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-js-yellow/20 pt-8"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-display text-[11px] tracking-[0.28em] text-js-muted uppercase transition-colors duration-300 hover:text-js-yellow"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
