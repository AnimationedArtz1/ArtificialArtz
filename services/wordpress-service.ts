'use client';

import { storage } from '@/lib/storage/local-storage';
import type { WordPressPost } from '@/types/wordpress';

const BLOG_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://public-api.wordpress.com/wp/v2/sites/artificialartz.wordpress.com';
const CACHE_KEY = 'wordpress_posts';
const CACHE_TTL = 1000 * 60 * 30;

type CachedData = {
  posts: WordPressPost[];
  timestamp: number;
};

export const fetchBlogPosts = async (limit = 3): Promise<WordPressPost[]> => {
  const cached = storage.get<CachedData>(CACHE_KEY);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.posts;
  }

  try {
    const response = await fetch(`${BLOG_API_URL}/posts?per_page=${limit}&_embed`, {
      next: { revalidate: 1800 },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    
    const posts: WordPressPost[] = data.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      link: post.link,
      title: post.title?.rendered || 'Untitled',
      excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
      date: post.date,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    }));

    storage.set(CACHE_KEY, { posts, timestamp: Date.now() });
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return cached?.posts || [];
  }
};
