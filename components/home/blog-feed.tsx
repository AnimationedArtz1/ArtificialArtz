'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import type { WordPressPost } from '@/types/wordpress';
import { fetchBlogPosts } from '@/services/wordpress-service';
import { Button } from '@/components/ui/button';

export const BlogFeed = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchBlogPosts(3);
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Latest from the Blog</h2>
          <p className="mt-2 max-w-xl text-white/60">
            Insights and updates on creative automation, AI workflows, and content strategies.
          </p>
        </div>
        <Link
          href="https://artificialartz.wordpress.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="secondary" className="inline-flex items-center gap-2">
            Visit Blog <ArrowUpRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      {loading ? (
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map(index => (
            <Card key={index}>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="mt-4 h-6 w-3/4" />
              <Skeleton className="mt-2 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-11/12" />
            </Card>
          ))}
        </div>
      ) : null}
      {error ? (
        <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-6 text-sm text-red-200">
          Unable to load blog posts right now. Please try again later.
        </div>
      ) : null}
      {!loading && !error ? (
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(post => (
            <Card key={post.id} className="h-full">
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary-200">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-white/60 line-clamp-3">{post.excerpt}</p>
                </div>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200"
                >
                  Read story
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : null}
    </section>
  );
};
