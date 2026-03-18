import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-brand-600 dark:text-brand-400 mb-3 tracking-wider uppercase">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Real systems built for real workflows. Click{" "}
            <span className="italic">Read more</span> on any card to see the
            full problem → solution → result breakdown.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Phase 2 placeholder */}
          <article className="card p-7 flex flex-col items-center justify-center text-center border-dashed min-h-[220px] opacity-60 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              AWS Automation Pipeline
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              CloudWatch · Fargate · S3 — coming soon
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
