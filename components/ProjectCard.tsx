"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";

function MetricBadge({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
      <span className="mt-0.5 text-brand-500 flex-shrink-0">▹</span>
      {text}
    </li>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-1 group">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 to-cyan-400" />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="tag bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-500/20 mb-3 inline-flex">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h3>
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex-shrink-0 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </a>
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
          {project.tagline}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="tag bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </button>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-6 space-y-5 border-t border-slate-200 dark:border-slate-700 pt-6">
            {/* Problem / Solution / Result */}
            {[
              { label: "Problem",  color: "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 border-red-200 dark:border-red-500/20",     text: project.problem },
              { label: "Solution", color: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20", text: project.solution },
              { label: "Result",   color: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20", text: project.result },
            ].map(({ label, color, text }) => (
              <div key={label}>
                <span className={`tag border ${color} mb-2`}>{label}</span>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p>
              </div>
            ))}

            {/* Metrics */}
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Key outcomes
              </p>
              <ul className="space-y-2">
                {project.metrics.map((m) => (
                  <MetricBadge key={m} text={m} />
                ))}
              </ul>
            </div>

            {/* Pipeline diagram */}
            {project.id === "pallet-automation" && (
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  How it works
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      ),
                      label: "Email received",
                      sub: "Gmail IMAP",
                      color: "text-blue-500 bg-blue-50 dark:bg-blue-500/10",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M5.625 4.5h12.75a1.125 1.125 0 0 1 1.125 1.125v9a1.125 1.125 0 0 1-1.125 1.125H5.625a1.125 1.125 0 0 1-1.125-1.125v-9A1.125 1.125 0 0 1 5.625 4.5Z" />
                        </svg>
                      ),
                      label: "ERP data cleaned",
                      sub: "pandas",
                      color: "text-violet-500 bg-violet-50 dark:bg-violet-500/10",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      ),
                      label: "BOL generated",
                      sub: "openpyxl",
                      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10",
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                      ),
                      label: "Email sent",
                      sub: "SMTP",
                      color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10",
                    },
                  ].map((step, i, arr) => (
                    <div key={step.label} className="flex sm:flex-col items-center gap-2 sm:gap-1 flex-1 w-full sm:w-auto">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${step.color}`}>
                        {step.icon}
                      </div>
                      <div className="text-center sm:text-center">
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">{step.label}</p>
                        <p className="text-xs text-slate-400 font-mono">{step.sub}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 flex-shrink-0 rotate-90 sm:rotate-0 ml-auto sm:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
