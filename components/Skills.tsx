const skillGroups = [
  {
    category: "Automation",
    color: "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-500/20",
    icon: "⚡",
    skills: ["Python", "pandas", "openpyxl", "IMAP / SMTP", "Shell Scripting", "LaunchAgent / Cron"],
  },
  {
    category: "Cloud & Infrastructure",
    color: "bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20",
    icon: "☁️",
    skills: ["AWS Fargate", "AWS CloudWatch", "AWS S3", "Docker", "CI/CD"],
  },
  {
    category: "QA & Quality",
    color: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20",
    icon: "✅",
    skills: ["Test Automation", "Process Validation", "Data Quality", "Regression Testing", "Documentation"],
  },
  {
    category: "Tools & Workflow",
    color: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20",
    icon: "🛠",
    skills: ["Git & GitHub", "VS Code", "Bamboo", "DBeaver", "Excel / ERP Systems", "REST APIs", "TypeScript"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-brand-600 dark:text-brand-400 mb-3 tracking-wider uppercase">
            Technical skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            What I work with
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="card p-6 hover:shadow-md dark:hover:shadow-slate-900 transition-all hover:-translate-y-0.5">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm tracking-wide uppercase">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`tag border ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
