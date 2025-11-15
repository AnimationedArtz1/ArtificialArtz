import { HeroSection } from '@/components/home/hero-section';
import { StatsSection } from '@/components/home/stats-section';
import { FeatureGrid } from '@/components/home/feature-grid';
import { CaseStudies } from '@/components/home/case-studies';
import { BlogFeed } from '@/components/home/blog-feed';

export const metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureGrid />
      <CaseStudies />
      <BlogFeed />
    </>
  );
}
