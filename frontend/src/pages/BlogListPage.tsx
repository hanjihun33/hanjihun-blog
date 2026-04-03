import { useEffect, useState } from 'react';
import Post from '../components/post/post';
import { fetchBlogPosts } from '../lib/api';
import type { BlogPostSummary } from '../types/blog';

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetchBlogPosts(controller.signal)
      .then((data) => setPosts(data))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        console.error(error);
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-5 py-12 md:px-8 md:py-20">
      <div className="mb-10 md:mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-surface-900 tracking-tight">Blog</h1>
        <p className="mt-2 text-surface-400">개발하며 배운 것들을 기록합니다.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
