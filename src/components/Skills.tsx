const skillGroups = [
  {
    title: 'Backend Engineering',
    tags: [
      'C#',
      'ASP.NET Core',
      '.NET 6/8',
      'REST APIs',
      'RabbitMQ',
      'SQL Server',
      'PostgreSQL',
    ],
  },
  {
    title: 'DevOps & Cloud',
    tags: ['GitHub Actions', 'Docker', 'CI/CD Pipelines'],
  },
  {
    title: 'Frontend & Tools',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Postman', 'JIRA'],
  },
]

export default function Skills() {
  return (
    <section id="about" className="px-6 md:px-10 py-24" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical Stack</h2>
        <p className="section-subtitle">
          Hands-on experience across backend services, cloud pipelines, and modern frontend
          tooling.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            border: '1px solid var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className={`p-6 ${gi < skillGroups.length - 1 ? 'border-b md:border-b-0 border-[var(--border)]' : ''} ${gi < skillGroups.length - 1 ? 'md:border-r border-[var(--border)]' : ''}`}
              style={{ backgroundColor: 'var(--bg2)' }}
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--text)' }}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="pill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
