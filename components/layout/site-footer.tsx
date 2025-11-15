import Link from 'next/link';
import { FOOTER_SECTIONS, SOCIAL_LINKS } from '@/lib/constants/navigation';

export const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-white">ArtificialArtz</p>
              <p className="mt-2 max-w-xs text-sm text-white/60">
                A creative automation studio delivering AI-native experiences, growth-ready tooling,
                and immersive storytelling for creators and brands.
              </p>
            </div>
            <div className="flex gap-4 text-sm text-white/60">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          {FOOTER_SECTIONS.map(section => (
            <div key={section.title} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
                {section.title}
              </p>
              <div className="flex flex-col gap-3 text-sm text-white/70">
                {section.links.map(link => (
                  <Link key={link.href} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} ArtificialArtz. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/60">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white/60">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
