export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/tools', label: 'Tools' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const SOCIAL_LINKS = {
  fiverr: 'https://www.fiverr.com/artificialartz',
  bionluk: 'https://bionluk.com/artificialartz',
  instagram: 'https://www.instagram.com/artificialartz',
  linkedin: 'https://www.linkedin.com/company/artificialartz',
  github: 'https://github.com/artificialartz',
};

export const FOOTER_SECTIONS = [
  {
    title: 'Platform',
    links: [
      { href: '/tools', label: 'Tools' },
      { href: '/services', label: 'Services' },
      { href: '/about', label: 'About Us' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { href: '/tools/hooks-generator', label: 'Hooks Generator' },
      { href: '/tools/youtube-ideas', label: 'YouTube Ideas' },
      { href: '/tools/blog-outline', label: 'Blog Outline' },
      { href: '/tools/color-palette', label: 'Color Palette' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/blog', label: 'Blog' },
      { href: '#', label: 'Help Center' },
    ],
  },
];
