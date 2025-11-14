import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ContactPage = () => {
  useDocumentTitle('Contact');

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold text-slate-50">Contact</h1>
      <p className="text-slate-300">
        Ready to collaborate? Highlight the best channels for new projects and consultations. Replace
        this placeholder copy with a form, booking link, or live chat widget as needed.
      </p>
      <div className="flex flex-col gap-3 text-sm text-slate-300">
        <a className="underline decoration-slate-700 decoration-dashed underline-offset-4" href="mailto:hello@artificialartz.com">
          hello@artificialartz.com
        </a>
        <a
          className="underline decoration-slate-700 decoration-dashed underline-offset-4"
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};
