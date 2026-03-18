"use client";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Text side ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-brand-700 dark:text-brand-300 text-sm font-medium mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
              </span>
              Available for new projects
            </div>

            {/* Name */}
            <h1 className="animate-fade-up animate-delay-100 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Cristian Torres
            </h1>

            {/* Title */}
            <div className="animate-fade-up animate-delay-200 flex items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="h-px w-10 bg-brand-500/50 hidden lg:block" />
              <span className="text-lg md:text-xl font-mono font-medium gradient-text">
                QA Automation Engineer
              </span>
            </div>

            {/* Subtitle */}
            <p className="animate-fade-up animate-delay-300 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-9 mx-auto lg:mx-0">
              I build automation systems that{" "}
              <span className="text-slate-900 dark:text-white font-medium">
                eliminate manual work
              </span>{" "}
              and{" "}
              <span className="text-slate-900 dark:text-white font-medium">
                ship quality faster
              </span>
              .
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-up animate-delay-400 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* ── Photo side ── */}
          <div className="animate-fade-in animate-delay-200 flex-shrink-0">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand-500 to-cyan-400 opacity-40 blur-md" />
              {/* Gradient ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-brand-500 to-cyan-400">
                <div className="rounded-full overflow-hidden w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-slate-200 dark:bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/t.jpg"
                    alt="Cristian Torres"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <span className="text-base">🤖</span> QA + Automation
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-400 dark:from-slate-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
