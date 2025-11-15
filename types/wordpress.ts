export type WordPressPost = {
  id: number;
  slug: string;
  link: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: string | null;
};
