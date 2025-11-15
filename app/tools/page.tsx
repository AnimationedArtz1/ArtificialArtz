import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { TOOL_DEFINITIONS } from '@/lib/constants/tools';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Tools',
  description: 'Explore our collection of AI-powered tools for content creation, marketing, design, and productivity.',
};

export default function ToolsPage() {
  const grouped = TOOL_DEFINITIONS.reduce<Record<string, typeof TOOL_DEFINITIONS>>(
    (acc, tool) => {
      acc[tool.category] = acc[tool.category] || [];
      acc[tool.category].push(tool);
      return acc;
    },
    {},
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold md:text-6xl">AI Tool Library</h1>
        <p className="mt-4 text-lg text-white/70">
          Launch AI-powered automation workflows for content, marketing, and product experiences with
          our growing library of specialized tools.
        </p>
      </div>
      {Object.entries(grouped).map(([category, tools]) => (
        <div key={category} className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">{category} Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map(tool => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                <Card className="h-full">
                  <div className="flex h-full flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-200">
                        {tool.category}
                      </div>
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                      <p className="text-sm text-white/60">{tool.description}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm font-semibold text-primary-200">
                      Launch tool
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
