import { site } from '../site'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-[60px] overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute inset-0 hero-noise pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto w-full py-20">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium mb-8"
          style={{
            color: 'var(--coral)',
            backgroundColor: 'var(--coral-bg)',
            border: '1px solid var(--coral-bd)',
            borderRadius: '50px',
          }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: 'var(--green)' }}
          />
          Available for opportunities
        </span>

        <h1
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4"
          style={{ color: 'var(--text)' }}
        >
          <span className="block">Agung</span>
          <span className="block" style={{ color: 'var(--coral)' }}>
            Hanifan
          </span>
          <span className="block">Lutfiyanto</span>
        </h1>

        <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: 'var(--text2)' }}>
          .NET Backend with Cloud DevOps
        </p>

        <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--text2)' }}>
          Electrical engineering graduate from Universitas Diponegoro with three years of
          professional experience building C# backend systems for banking and insurance. I design
          solutions that work at every layer of the stack.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral"
          >
            LinkedIn Profile →
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl"
          style={{
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {[
            { value: '3+', label: 'Years C# Dev' },
            { value: 'ASP.NET', label: 'Core Backend' },
            { value: 'CI/CD', label: 'Pipelines' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-5 text-center ${i < 2 ? 'border-b sm:border-b-0 border-[var(--border)]' : ''} ${i < 2 ? 'sm:border-r border-[var(--border)]' : ''}`}
              style={{ backgroundColor: 'var(--bg2)' }}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                {stat.value}
              </div>
              <div className="text-xs font-medium" style={{ color: 'var(--text3)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
