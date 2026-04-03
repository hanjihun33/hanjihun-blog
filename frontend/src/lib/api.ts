import type { BlogPost, BlogPostSummary, BlogProfile } from '../types/blog';

async function fetchJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(path, {
    headers: {
      Accept: 'application/json',
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function fetchBlogProfile(signal?: AbortSignal): Promise<BlogProfile> {
  return fetchJson<BlogProfile>('/api/blog/profile', signal);
}

export function fetchBlogPosts(signal?: AbortSignal): Promise<BlogPostSummary[]> {
  return fetchJson<BlogPostSummary[]>('/api/blogs', signal);
}

export function fetchBlogPost(postId: number, signal?: AbortSignal): Promise<BlogPost> {
  return fetchJson<BlogPost>(`/api/blogs/${postId}`, signal);
}
