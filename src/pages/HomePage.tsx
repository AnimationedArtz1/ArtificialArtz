import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const HomePage = () => {
  useDocumentTitle('Home');

  return (
    <section className="space-y-6">
      <span className="inline-flex items-center rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
        AI Automation Studio
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
        Crafting intelligent experiences for bold brands.
      </h1>
      <p className="max-w-2xl text-lg text-slate-300">
        This refreshed codebase runs on Vite, React, TypeScript, Tailwind CSS, and React Router so you
        can focus on building fast, resilient interfaces without fighting the tooling.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg shadow-sky-500/10">
          <h2 className="text-xl font-semibold text-slate-50">Production-Ready Setup</h2>
          <p className="mt-2 text-sm text-slate-400">
            Opinionated defaults with ESLint, Prettier, Tailwind, and modern routing to accelerate
            feature development from day one.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg shadow-emerald-500/10">
          <h2 className="text-xl font-semibold text-slate-50">Modular Architecture</h2>
          <p className="mt-2 text-sm text-slate-400">
            Thoughtful project structure keeps components, pages, hooks, and data organized for easy
            scaling as requirements evolve.
          </p>
        </div>
      </div>
    </section>
  );
};
