import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { TaglineRotator } from '@/components/home/tagline-rotator';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(63,130,245,0.15),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-6 flex justify-center">
          <TaglineRotator />
        </div>
        <h1 className="mb-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent md:text-7xl">
          Creative Automation
          <br />
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text">
            Powered by AI
          </span>
        </h1>
        <p className="mb-10 text-lg text-white/70 md:text-xl">
          A creative automation studio delivering AI-native experiences, growth-ready tooling, and
          immersive storytelling for creators and brands.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/tools">
            <Button size="lg">
              Explore Tools <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="secondary">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
