import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ToolsPage = () => {
  useDocumentTitle('Tools');

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold text-slate-50">AI Tool Suite</h1>
      <p className="text-slate-300">
        The interactive tools from the legacy build will be re-imagined here. Use this route to surface
        generators, helpers, and utilities that empower your workflow.
      </p>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-400">
        <p>
          Tip: Split complex features into composable components inside <code className="font-semibold text-slate-200">src/components</code>
          {' '}and shared logic inside <code className="font-semibold text-slate-200">src/hooks</code> to keep
          things maintainable.
        </p>
      </div>
    </section>
  );
};
