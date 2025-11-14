import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ServicesPage = () => {
  useDocumentTitle('Services');

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold text-slate-50">Services</h1>
      <p className="text-slate-300">
        Outline automation offerings, integrations, and retained services here. The current view keeps
        things intentionally lightweight so you can layer real content incrementally.
      </p>
      <ul className="grid gap-4 md:grid-cols-2">
        {['Automation Playbooks', 'Content Generation Pipelines', 'Platform Integrations', 'AI Consulting'].map(
          (service) => (
            <li
              key={service}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-slate-200"
            >
              {service}
            </li>
          ),
        )}
      </ul>
    </section>
  );
};
