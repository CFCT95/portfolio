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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </div>
      </div>
    </section>
  );
}
