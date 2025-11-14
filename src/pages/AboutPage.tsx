import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const AboutPage = () => {
  useDocumentTitle('About');

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold text-slate-50">About ArtificialArtz</h1>
      <p className="text-slate-300">
        Share your story, mission, and team here. This scaffolded page provides structure so you can add
        biographies, timelines, and snapshots without rebuilding layout primitives.
      </p>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-400">
        <p>
          Pro tip: Document reusable copy and metadata under <code className="font-semibold text-slate-200">src/data</code>{' '}
          or wire up CMS integrations via utilities in <code className="font-semibold text-slate-200">src/lib</code>.
        </p>
      </div>
    </section>
  );
};
