import { profile } from '../data/content'

export default function Header({ t, onToggleLang }) {
  const links = [
    ['#proyectos', t.nav.projects],
    ['#stack', t.nav.stack],
    ['#sobre-mi', t.nav.about],
    ['#contacto', t.nav.contact],
  ]

  return (
    <header className="sticky top-0 z-20 border-b border-rio/10 bg-papel/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="font-display text-lg font-extrabold text-rio">
          {profile.name.split(' ')[0]}
          <span className="text-arena">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-gris transition-colors hover:text-rio">{label}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={onToggleLang}
          className="rounded-full border border-rio/25 px-3.5 py-1.5 text-sm font-semibold text-rio transition-colors hover:bg-rio hover:text-papel"
        >
          {t.langSwitch}
        </button>
      </nav>
    </header>
  )
}
