import { Link } from 'react-router-dom';
import type { BlogPostSummary } from '../../types/blog';
import { Chip } from '../tailwind/client-components';
import { dateFormat } from '../utils/dateUtils';

export default function Post({ post }: { post: BlogPostSummary }) {
  return (
    <Link to={`/blogs/${post.id}`}>
      <article className="group bg-white rounded-2xl overflow-hidden shadow-sm shadow-surface-200/50 hover:shadow-xl hover:shadow-surface-200/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-surface-100">
        <div className="relative aspect-[16/10] bg-surface-100 overflow-hidden">
          <img
            alt={post.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            src={post.thumbnailUrl}
          />
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-surface-800 leading-snug group-hover:text-primary-700 transition-colors">
            {post.title}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {post.tags.map((tag) => (
              <Chip key={tag.id} size="sm" value={`#${tag.name}`} />
            ))}
          </div>
          <time className="block mt-3 text-xs text-surface-400">{dateFormat(post.createdDate)}</time>
        </div>
      </article>
    </Link>
  );
}
