import { NavLink, Outlet } from 'react-router-dom';

import { navigationLinks } from '../data/navigation';

const linkBaseStyles =
  'rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                'text-lg font-semibold tracking-wide',
                isActive ? 'text-sky-200' : 'text-slate-100 hover:text-sky-200',
              ].join(' ')
            }
          >
            ArtificialArtz
          </NavLink>
          <nav className="flex flex-wrap items-center gap-2">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  [
                    linkBaseStyles,
                    isActive
                      ? 'bg-sky-500/20 text-sky-200'
                      : 'text-slate-300 hover:text-sky-200',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-6 text-sm text-slate-500 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} ArtificialArtz. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};
