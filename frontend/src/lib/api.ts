import { BLOG_POSTS, BLOG_PROFILE } from '../data/blog-posts';
import type { BlogPost, BlogPostSummary, BlogProfile } from '../types/blog';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? '';

function getApiUrl(path: string): string {
  return `${API_BASE_URL}${path}`;
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}

async function fetchJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(getApiUrl(path), {
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

export async function fetchBlogProfile(signal?: AbortSignal): Promise<BlogProfile> {
  try {
    return await fetchJson<BlogProfile>('/api/blog/profile', signal);
  } catch (error) {
    if (isAbortError(error)) {
      throw error;
    }

    return BLOG_PROFILE;
  }
}

export async function fetchBlogPosts(signal?: AbortSignal): Promise<BlogPostSummary[]> {
  try {
    return await fetchJson<BlogPostSummary[]>('/api/blogs', signal);
  } catch (error) {
    if (isAbortError(error)) {
      throw error;
    }

    return BLOG_POSTS;
  }
}

export async function fetchBlogPost(postId: number, signal?: AbortSignal): Promise<BlogPost> {
  try {
    return await fetchJson<BlogPost>(`/api/blogs/${postId}`, signal);
  } catch (error) {
    if (isAbortError(error)) {
      throw error;
    }

    const post = BLOG_POSTS.find((candidate) => candidate.id === postId);

    if (!post) {
      throw new Error(`Blog post ${postId} not found`);
    }

    return post;
  }
}
