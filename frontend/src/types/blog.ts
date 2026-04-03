export type BlogProfile = {
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
};

export type BlogTag = {
  id: number;
  name: string;
};

export type BlogPostSummary = {
  id: number;
  title: string;
  summary: string;
  thumbnailUrl: string;
  createdDate: string;
  tags: BlogTag[];
};

export type BlogPost = BlogPostSummary & {
  content: string;
};
