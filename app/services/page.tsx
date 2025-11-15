import Link from 'next/link';
import { CheckCircleIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Services',
  description: 'Professional AI-powered creative services for brands and creators. From automation to storytelling.',
};

const SERVICES = [
  {
    name: 'AI-Native Content Studio',
    description: 'Full-service content engine powered by AI workflows and expert human curation.',
    features: [
      'Blog posts, social content, and long-form guides',
      'AI-assisted writing with human review',
      'SEO optimization and content strategy',
      'Fast turnaround with consistent quality',
    ],
    priceRange: 'Starting at $500/project',
    platform: 'both',
  },
  {
    name: 'Creative Automation Workshop',
    description: 'Custom AI tooling and workflow automation tailored to your content operations.',
    features: [
      'Custom GPT workflows and prompts',
      'Integration with your existing tools',
      'Training and documentation included',
      'Ongoing optimization support',
    ],
    priceRange: 'Starting at $1,500',
    platform: 'both',
  },
  {
    name: 'Brand Storytelling & Strategy',
    description: 'Transform your brand narrative with AI-enhanced storytelling and positioning.',
    features: [
      'Brand narrative development',
      'Messaging architecture and voice guides',
      'Campaign concepts and creative briefs',
      'Audience persona research',
    ],
    priceRange: 'Starting at $2,000',
    platform: 'both',
  },
  {
    name: 'Video Content Package',
    description: 'Scriptwriting, storyboarding, and video concept development for YouTube and social.',
    features: [
      'YouTube video scripts and outlines',
      'Short-form content for TikTok/Reels',
      'Thumbnail and title optimization',
      'Content calendar planning',
    ],
    priceRange: 'Starting at $800/package',
    platform: 'fiverr',
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold md:text-6xl">Creative Services</h1>
        <p className="mt-4 text-lg text-white/70">
          Professional AI-powered creative services for brands, creators, and agencies. Let us handle
          your content, automation, and storytelling.
        </p>
      </div>
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {SERVICES.map(service => (
          <Card key={service.name} className="h-full">
            <div className="flex h-full flex-col justify-between space-y-6">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-200">
                  Service
                </div>
                <h2 className="mb-3 text-2xl font-bold">{service.name}</h2>
                <p className="mb-4 text-white/60">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3 border-t border-white/10 pt-4">
                <p className="text-lg font-semibold text-white">{service.priceRange}</p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.fiverr.com/artificialartz"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full inline-flex items-center justify-center gap-2">
                      View on Fiverr <ArrowUpRightIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="rounded-3xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-accent-500/10 p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">Need something custom?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-white/70">
          Have a unique project or need a tailored solution? Let&apos;s discuss your requirements and build
          a custom package that fits your goals.
        </p>
        <Link href="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
}
