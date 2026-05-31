import Logo from './Logo'
import { site } from '../site'

export default function Footer() {
  return (
    <footer className="site-footer px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <p className="text-sm font-semibold mb-1">
          Agung Hanifan <span className="text-coral">Lutfiyanto</span>
        </p>
        <p className="text-xs m-0 footer-muted">
          © 2026 All rights reserved · UNDIP Adv. Diploma EE · {site.location}
        </p>
        <p className="text-xs mt-2 mb-0 footer-muted">
          Hand-coded by <Logo className="text-xs inline" /> · React · TypeScript · Tailwind ·{' '}
          <a href={site.blog} target="_blank" rel="noopener noreferrer" className="text-coral">
            Blog
          </a>
        </p>
      </div>

      <p className="text-xs m-0 footer-muted">
        Design inspired by{' '}
        <a
          href="https://lovable.dev/templates/websites/landing-page/paymark-template"
          target="_blank"
          rel="noopener noreferrer"
          className="text-coral"
        >
          Paymark Template
        </a>{' '}
        by{' '}
        <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-coral">
          Lovable
        </a>{' '}
        (ONOnix Theme)
      </p>
    </footer>
  )
}
