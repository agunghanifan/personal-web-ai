const projects = [
  {
    icon: '🎡',
    badge: 'Published',
    title: 'Automated Playground Gate System',
    description:
      'Safety gate controller using ultrasonic height sensing and load cell weight measurement to automate access control for amusement ride entry — preventing accidents by enforcing physical safety constraints.',
    tags: ['Arduino Mega 2560', 'HC-SR04', '100kg Load Cell', 'HX711', 'Servo Motor'],
  },
  {
    icon: '🔔',
    badge: 'Portfolio',
    title: 'Distributed Notification Platform',
    description:
      'ASP.NET Core microservice architecture for scalable job processing and multi-channel notifications using RabbitMQ message queuing, Azure Service Bus, and GitHub Actions CI/CD pipelines.',
    tags: ['ASP.NET Core', 'RabbitMQ', 'Azure', 'GitHub Actions', 'Docker'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-24" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Engineering Projects</h2>
        <p className="section-subtitle">
          Real-world systems spanning embedded hardware, backend microservices, and cloud
          infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="card-neu p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl" role="img" aria-hidden="true">
                  {project.icon}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1"
                  style={{
                    color: 'var(--coral)',
                    backgroundColor: 'var(--coral-bg)',
                    border: '1px solid var(--coral-bd)',
                    borderRadius: '50px',
                  }}
                >
                  {project.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text2)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="pill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
