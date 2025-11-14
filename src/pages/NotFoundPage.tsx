import { Link } from 'react-router-dom';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotFoundPage = () => {
  useDocumentTitle('Page Not Found');

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">404</p>
      <h1 className="text-4xl font-bold text-slate-50">This page floated into the void.</h1>
      <p className="max-w-md text-sm text-slate-300">
        We couldn&apos;t find what you were looking for. Use the navigation above to jump back into the
        experience, or start again from the home page.
      </p>
      <Link
        to="/"
        className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
      >
        Return home
      </Link>
    </section>
  );
};
