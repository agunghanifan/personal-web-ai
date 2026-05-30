import { site } from '../site'

const contacts = [
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/agunghanifan',
    href: site.linkedin,
  },
  {
    icon: '@',
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Open to backend and full-stack opportunities in Melbourne and remotely.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === 'LinkedIn' ? '_blank' : undefined}
              rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              className="contact-card flex items-start gap-4"
            >
              <span
                className="flex items-center justify-center w-12 h-12 text-lg font-bold shrink-0"
                style={{
                  color: 'var(--coral)',
                  backgroundColor: 'var(--coral-bg)',
                  border: '1px solid var(--coral-bd)',
                  borderRadius: '12px',
                }}
              >
                {contact.icon}
              </span>
              <div>
                <p className="text-xs font-medium mb-1" style={{ color: 'var(--text3)' }}>
                  {contact.label}
                </p>
                <p className="text-sm font-semibold m-0" style={{ color: 'var(--text)' }}>
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
