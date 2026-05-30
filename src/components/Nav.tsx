import Logo from './Logo'
import { navLinks, site } from '../site'

export default function Nav() {
  return (
    <nav className="site-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10">
      <a href="#" aria-label={`${site.name} home`}>
        <Logo />
      </a>

      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-coral text-sm px-5 py-2.5"
      >
        Connect →
      </a>
    </nav>
  )
}
