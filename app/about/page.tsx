import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'About',
  description: 'Learn about ArtificialArtz, our mission, values, and the team behind our AI-powered creative studio.',
};

const VALUES = [
  {
    title: 'Creative Autonomy',
    description:
      'We build tools that empower creators to produce more, faster, without sacrificing their unique voice.',
  },
  {
    title: 'Human + AI Harmony',
    description:
      'We believe in co-creation—human creativity amplified by intelligent systems that accelerate outcomes.',
  },
  {
    title: 'Operational Excellence',
    description:
      'Creative innovation needs structure. We design workflows that are scalable, measurable, and reliable.',
  },
];

const TIMELINE = [
  {
    year: '2022',
    headline: 'Studio Launch',
    description:
      'ArtificialArtz launches as a creative boutique helping brands ship AI-assisted storytelling and content.',
  },
  {
    year: '2023',
    headline: 'Tool Stack Expansion',
    description:
      'Built internal AI tools for hooks, video scripts, and marketing assets—later opened to public beta users.',
  },
  {
    year: '2024',
    headline: 'Automation Playbooks',
    description:
      'Introduced automation workshops and custom GPT workflows for agencies and creator collectives.',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold md:text-6xl">About ArtificialArtz</h1>
        <p className="mt-4 text-lg text-white/70">
          We are a creative automation studio helping brands and creators scale storytelling with AI
          precision, operational rigor, and playful experimentation.
        </p>
      </div>
      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-4 text-white/70">
            ArtificialArtz began as a passion project for experimenting with creative automation. We grew
            into a studio servicing clients in content, e-commerce, and digital media by blending human
            creativity with AI-powered systems.
          </p>
          <p className="mt-4 text-white/70">
            Today, we run an integrated stack of AI tools, workshops, and bespoke services that help teams
            ship high-quality creative work faster.
          </p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="mt-4 text-white/70">
            Our mission is to make creative operations more playful, efficient, and data-informed. We
            equip teams with systems that unlock strategic thinking while automating repetition.
          </p>
          <p className="mt-4 text-white/70">
            We take a holistic approach—tools, training, and transformation—so every creator can focus on
            ambitious ideas instead of manual busywork.
          </p>
        </Card>
      </div>
      <div className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map(value => (
            <Card key={value.title}>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-4 text-white/70">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-3xl font-bold">Timeline</h2>
        <div className="space-y-4">
          {TIMELINE.map(item => (
            <div key={item.year} className="relative border-l border-white/10 pl-6">
              <div className="absolute left-[-8px] top-1.5 h-3 w-3 rounded-full bg-primary-500" />
              <p className="text-sm text-primary-200">{item.year}</p>
              <h3 className="text-xl font-semibold text-white">{item.headline}</h3>
              <p className="mt-2 text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
