const stats = [
  { value: "24/7",  label: "Automation uptime" },
  { value: "< 3s",  label: "Pipeline execution" },
  { value: "100%",  label: "Manual work eliminated" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-sm font-mono text-brand-600 dark:text-brand-400 mb-3 tracking-wider uppercase">
              About me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-snug">
              Bridging operations,{" "}
              <span className="gradient-text">quality</span> and automation
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              <p>
                I&apos;m a QA Automation Engineer with a background in operations who
                discovered that the best way to improve quality is to remove the
                human bottleneck from repetitive processes entirely.
              </p>
              <p>
                I design and build end-to-end automation pipelines — from email
                monitoring and ERP data processing to cloud-based workflows on
                AWS — that run reliably without manual intervention, 24 hours a
                day.
              </p>
              <p>
                My work sits at the intersection of{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  software quality
                </span>
                ,{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  process automation
                </span>
                , and{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  AI-assisted tooling
                </span>{" "}
                — building systems that scale with the business, not with
                headcount.
              </p>
            </div>
          </div>

          {/* Stats + card */}
          <div className="space-y-6">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card p-5 text-center hover:shadow-md dark:hover:shadow-slate-900 transition-shadow"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Current focus card */}
            <div className="card p-6">
              <p className="text-xs font-mono text-brand-600 dark:text-brand-400 mb-3 tracking-wider uppercase">
                Currently focused on
              </p>
              <ul className="space-y-3">
                {[
                  "Building AI-assisted QA automation pipelines",
                  "Cloud-native automation with AWS (Fargate, CloudWatch, S3)",
                  "Open to QA Engineer, Automation Engineer & AI roles",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-0.5 text-brand-500 flex-shrink-0">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
