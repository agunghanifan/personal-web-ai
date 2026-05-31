export const site = {
  name: 'Agung Hanifan Lutfiyanto',
  initials: 'AHL',
  domain: 'agunghl.dev',
  blog: 'https://blog.agunghl.dev',
  location: 'Melbourne, Australia',
  linkedin: 'https://www.linkedin.com/in/agunghanifan/',
  email: 'agunghl.au@gmail.com',
} as const

export type NavLink =
  | { label: string; href: string; external?: false }
  | { label: string; href: string; external: true }

export const navLinks: NavLink[] = [
  { label: 'Skills', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Demo', href: '#systems' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: site.blog, external: true },
]
