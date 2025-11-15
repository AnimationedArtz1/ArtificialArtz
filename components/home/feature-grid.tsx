import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/ui/card';
import { FEATURES } from '@/lib/constants/taglines';

export const FeatureGrid = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Featured AI Tools</h2>
          <p className="mt-2 max-w-xl text-white/60">
            Launch AI-powered automation workflows for content, marketing, and product experiences with
            our growing library of specialized tools.
          </p>
        </div>
        <Link
          href="/tools"
          className="text-sm font-semibold text-primary-300 transition hover:text-primary-200"
        >
          Browse all tools
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(feature => (
          <Link key={feature.title} href={feature.href}>
            <Card className="h-full">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-200">
                    Tool
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </div>
                <div className="flex items-center justify-between text-sm font-semibold text-primary-200">
                  Launch tool
                  <ArrowUpRightIcon className="h-4 w-4" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
