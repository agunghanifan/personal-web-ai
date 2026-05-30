const experiences = [
  {
    period: '2024 — Now',
    title: 'Work & Holiday — Upskilling',
    location: 'Melbourne, Australia',
    description:
      'Expanding cloud and frontend skills while working in Melbourne. Building portfolio projects in TypeScript and React to complement existing .NET expertise for re-entry into tech roles.',
    tags: ['React', 'TypeScript', 'Docker'],
  },
  {
    period: '2021 — 2024',
    title: 'C# Backend Developer',
    location: 'Banking & Insurance Sector · Indonesia',
    description:
      'Built and maintained backend services for banking and insurance platforms using C# and ASP.NET Core. Responsibilities spanned core development, CI/CD pipeline management, and third-party API integrations.',
    tags: ['C#', 'ASP.NET Core', 'CI/CD', 'SQL Server', 'REST APIs'],
  },
  {
    period: '2014 — 2017',
    title: 'Advanced Diploma of Electrical Engineering',
    location: 'Universitas Diponegoro (UNDIP) · Semarang',
    description:
      'Vocational program in the Electrical Engineering Department. Published one academic paper on embedded systems: an automated gate safety system using ultrasonic and load cell sensors.',
    tags: ['Arduino', 'NodeMCU', 'C/C++', 'Sensor Systems', 'Research Publication'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-24" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Background</p>
        <h2 className="section-title">Experience</h2>

        <div className="relative pl-8">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px"
            style={{ backgroundColor: 'var(--border2)' }}
            aria-hidden="true"
          />

          <ul className="list-none m-0 p-0 flex flex-col gap-10">
            {experiences.map((exp) => (
              <li key={exp.period} className="relative">
                <span
                  className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full"
                  style={{
                    backgroundColor: 'var(--coral)',
                    boxShadow: '0 0 0 3px rgba(232, 97, 58, 0.25)',
                  }}
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold mb-1" style={{ color: 'var(--coral)' }}>
                  {exp.period}
                </p>
                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>
                  {exp.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--text3)' }}>
                  {exp.location}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text2)' }}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="pill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
